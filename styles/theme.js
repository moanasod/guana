import { createTheme, lighten } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E6B8A2',
      light: '#BCB4A3',
      dark: '#b86830',
      contrastText: '#ffffff',
    },
//     Grönt: #6d745C
// Peach: #c46e58
// Brunt: #b86830
// Bright: #cba979
// Grå: #BCB4A3
    secondary: {
      main: '#ffffff',
      light: '#f5f5f5',
      dark: '#636b2f',
      contrastText: '#000000',
    },
    background: {
      default: '#F8F7F2',
      // default: '#F8F4E3',
      paper: '#BCB4A3',
    },
    text: {
      primary: '#5e643c',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  
  typography: {
    fontFamily: [
      'Playfair Display',
    'libre-baskerville',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,   // mob
      md: 768,   // tablet
      lg: 1024,  // laptop
      xl: 1280,  // desktop
    },
  },
  
  spacing: 8, 
  
  shape: {
    borderRadius: 8,
  },
  
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: '0.5rem',
          padding: '0.25rem 0.5rem',
          transition: 'all 0.3s ease-out',
          '&:hover': {
            transform: 'scale(1.05)',
            // backgroundColor: lighten('#cba979', 0.1),
          },
          '&:active': {
            transform: 'scale(1)',
          },
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    
    MuiTypography: {
      styleOverrides: {
        root: {
          transition: 'color 0.3s ease',
        },
      },
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'h3',
          body1: 'p',
          body2: 'p',
        },
      },
    },
    
    MuiBox: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-out',
        },
      },
    },
    
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          transition: 'all 0.3s ease-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@media (min-width: 768px)': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
        },
      },
    },
    
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    
    MuiGrid: {
      styleOverrides: {
        root: {
          marginTop: 0,
        },
      },
    },
  },
  
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

// Create dark theme variant
export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      light: '#f5f5f5',
      dark: '#e5e5e5',
      contrastText: '#000000',
    },
    secondary: {
      main: '#000000',
      light: '#1a1a1a',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#1e293b',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
});

export default theme;

