"use client"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-root': {
              color: '#000', // Text color
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#dfdfdf', // Border color
              },
              '&:hover fieldset': {
                borderColor: '#dfdfdf', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#dfdfdf', // Border color when focused
              },
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#000', // Default label color
            '&.Mui-focused': {
              color: '#000', // Label color when focused
            },
          },
        },
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#dfdfdf',
        light: '#dfdfdf',
        dark: '#dfdfdf',
        contrastText: '#919EAB',
      },
      secondary: {
        main: '#ff9800',
      },
      divider: '#919EAB',
    },
    shape: {
      borderRadius: 3,
    },
  });
  
  
  export default theme;