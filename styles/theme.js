import { createTheme, lighten } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E6B8A2',        // Terracotta - warm accent for buttons, headers
      light: '#BAC095',       // Sage Green - alternating sections
      dark: '#6E7052',        // Dark Olive Green - darker accents
      contrastText: '#F4F1EC', // Soft Cream for contrast
    },
    secondary: {
      main: '#A5A47B',        // Sage Green - main neutral
      light: '#F4F1EC',       // Soft Cream
      dark: '#6E7052',        // Dark Olive Green
      contrastText: '#474747', // Charcoal Gray
    },
    background: {
      default: '#F4F1EC',     // Soft Cream - main background
      paper: '#A5A47B',       // Sage Green - paper/card backgrounds
    },
    text: {
      primary: '#6E7052',     // Dark Olive Green - body text
      secondary: '#474747',   // Charcoal Gray - secondary text
    },
  },
  
  typography: {
    fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
    h1: {
      fontFamily: '"Classy Brune", "Playfair Display","sans-serif"',
      fontWeight: 400,

    },
    h2: {
      fontFamily: '"Classy Brune", "Playfair Display","sans-serif"',
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"Classy Brune", "Playfair Display","sans-serif"',
      fontWeight: 400,
    },
    h4: {
      fontFamily: '"Classy Brune", "Playfair Display","sans-serif"',
      fontWeight: 600,
    },
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
      main: '#C19381',        // Terracotta - maintains warmth in dark mode
      light: '#A5A47B',       // Sage Green
      dark: '#6E7052',        // Dark Olive Green
      contrastText: '#F4F1EC', // Soft Cream
    },
    secondary: {
      main: '#6E7052',        // Dark Olive Green
      light: '#A5A47B',       // Sage Green
      dark: '#474747',        // Charcoal Gray
      contrastText: '#F4F1EC', // Soft Cream
    },
    background: {
      default: '#2A2A2A',     // Very dark gray (darker than charcoal)
      paper: '#474747',       // Charcoal Gray - for cards/paper
    },
    text: {
      primary: '#F4F1EC',     // Soft Cream - main text in dark mode
      secondary: '#A5A47B',   // Sage Green - secondary text
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
  },
});

export default theme;

