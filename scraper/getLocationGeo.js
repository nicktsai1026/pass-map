require('dotenv').config({ path: '../.env' });
const fs = require('fs');
const axios = require('axios');
const OPENROUTESERVICE_GEOCODING_API_URL = process.env.OPENROUTESERVICE_GEOCODING_API_URL;
const OPENROUTESERVICE_API_KEY = process.env.OPENROUTESERVICE_TOKEN;
const filePath = process.argv[2];

if (!filePath) throw new Error('No file path provided.'); // throw err if no file provided

fs.readFile(filePath, async (err, data) => {
  if (err) throw err; // read file err
  let libraries = JSON.parse(data);
  
  for (var i = 0; i < libraries.length; i++) {
    libraries[i].geo = await getLocationCoordinates(libraries[i].address); // add geo to library
  }

  fs.writeFile(filePath, JSON.stringify(libraries, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});

const getLocationCoordinates = async (address) => {
  try {
    const GeoURL = `${OPENROUTESERVICE_GEOCODING_API_URL}?api_key=${OPENROUTESERVICE_API_KEY}&text=${encodeURIComponent(address)}`;
    const response = await axios.get(GeoURL);
    const data = response.data;

    if (data.features && data.features.length > 0) {
      const result = data.features[0];
      const latitude = result.geometry.coordinates[1];
      const longitude = result.geometry.coordinates[0];
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      return [latitude, longitude];
    } else {
      throw new Error('Geocoding API request failed.');
    }
  } catch (error) {
    console.error('Error getting location coordinates:', error);
  }
};