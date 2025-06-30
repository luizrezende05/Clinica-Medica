import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2980b9',
      contrastText: '#fff',
    },
    error: {
      main: '#e74c3c',
    },
    warning: {
      main: '#f39c12',
    },
    info: {
      main: '#3498db',
    },
    success: {
      main: '#27ae60',
    },
    background: {
      default: '#f9fafb',
      paper: '#fff',
    },
    text: {
      primary: '#2c3e50',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      color: '#2c3e50',
    },
    h2: {
      fontWeight: 600,
      color: '#2c3e50',
    },
    body1: {
      color: '#2c3e50',
    },
    body2: {
      color: '#555',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export default theme;
