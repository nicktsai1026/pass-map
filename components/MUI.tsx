"use client";

import { useRouter } from "next/navigation";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SatelliteOutlinedIcon from '@mui/icons-material/SatelliteOutlined';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FD8964'
    }
  },
});

export const PrimaryButton = ({ 
  link, text 
}: {
  link: string;
  text: string;
}) => {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="primary"
        sx={{
          textTransform: 'none',
          letterSpacing: '1.5px',
          fontWeight: 'bold',
          padding: '5px 20px'
        }}
        onClick={() => router.push(link)}
      >
        {text}
      </Button>
    </ThemeProvider>
  );
};

export const LocationIcon = () => {
  return <SatelliteOutlinedIcon className="mr-2"/>;
};