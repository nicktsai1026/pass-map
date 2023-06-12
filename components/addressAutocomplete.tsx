"use client";

import { useState } from 'react';
import { TextField, Autocomplete, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { debounce } from '@mui/material/utils';

function AddressAutocomplete() {
  const [value, setValue] = useState<suggestedAddresses | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<suggestedAddresses[]>([]);

  interface suggestedAddresses {
    id: string,
    geo: number[],
    address: string,
    main_text: string,
    secondary_text: string
  }
  
  const handleInputChange = (event: React.ChangeEvent<{}>, value: string) => {
    setInputValue(value);
    // Debounce the API call to avoid making requests for each keystroke
    debounceSuggestions(value);
  };

  const debounceSuggestions = debounce((value) => {
    if (value.trim() === '') {
      setOptions([]);
      return;
    }

    fetchSuggestions(value);
  }, 300);

  const fetchSuggestions = async ( value: string) => {
    try {
      const res = await fetch(`/api/autocomplete?address=${value}`, { method: 'GET' });
      const data = await res.json();
      if (data.features && data.features.length > 0) {
        const suggestedAddresses = data.features.map((feature: featureAddress): suggestedAddresses => {
          let locality: string = "";
          locality = feature.properties.locality ? `${feature.properties.locality}, ` : '';
          return {
            id: feature.properties.id,
            geo: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
            address: feature.properties.label,
            main_text: feature.properties.name,
            secondary_text: `${locality}${feature.properties.region}, ${feature.properties.country}`
          }
        });
        setOptions(suggestedAddresses);
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.error('Error getting suggestions:', error);
    }
  };

  return (
    <Autocomplete
      id="address-autocomplete"
      sx={{ width: 400 }}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.address
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      noOptionsText="No locations"
      onChange={(event: any, newValue: suggestedAddresses | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField {...params} label="Enter your start location" fullWidth />
      )}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.id}>
            <Grid container alignItems="center">
              <Grid item sx={{ display: 'flex', width: 44 }}>
                <LocationOnIcon sx={{ color: 'text.secondary' }} />
              </Grid>
              <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                <Typography variant="body1" color="text.primary">
                  {option.main_text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {option.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
}

export default AddressAutocomplete;
