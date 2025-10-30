import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F8F4E3',
      light: '#F8F4E3',
      dark: '#78866B',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#f5f5f5',
      dark: '#e5e5e5',
      contrastText: '#000000',
    },
    background: {
      default: '#F8F4E3',
      paper: '#f9fafb',
    },
    text: {
      primary: '#78866B',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  
  typography: {
    // Default font family for body text
    fontFamily: [
    'libre-baskerville',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    
  //   // Headings use maglisto font
  //   h1: {
  //     fontFamily: ['maglisto', 'Georgia', 'serif'].join(','),
  //     fontSize: '3rem',
  //     fontWeight: 700,
  //     lineHeight: 1.2,
  //     '@media (min-width:768px)': {
  //       fontSize: '4rem',
  //     },
  //     '@media (min-width:1024px)': {
  //       fontSize: '6rem',
  //     },
  //   },
    
  //   h2: {
  //     fontFamily: ['maglisto', 'Georgia', 'serif'].join(','),
  //     fontSize: '1.875rem',
  //     fontWeight: 700,
  //     lineHeight: 1.3,
  //     '@media (min-width:768px)': {
  //       fontSize: '3rem',
  //     },
  //     '@media (min-width:1024px)': {
  //       fontSize: '3.75rem',
  //     },
  //   },
    
  //   h3: {
  //     fontFamily: ['maglisto', 'Georgia', 'serif'].join(','),
  //     fontSize: '1.5rem',
  //     fontWeight: 700,
  //     '@media (min-width:768px)': {
  //       fontSize: '2rem',
  //     },
  //   },
    
  //   h4: {
  //     fontFamily: ['maglisto', 'Georgia', 'serif'].join(','),
  //     fontSize: '1.25rem',
  //     fontWeight: 700,
  //     '@media (min-width:768px)': {
  //       fontSize: '1.5rem',
  //     },
  //   },
    
  //   h5: {
  //     fontFamily: ['maglisto', 'Georgia', 'serif'].join(','),
  //     fontSize: '1.125rem',
  //     fontWeight: 700,
  //     '@media (min-width:768px)': {
  //       fontSize: '1.5rem',
  //     },
  //   },
    
  //   h6: {
  //     fontFamily: ['maglisto', 'Georgia', 'serif'].join(','),
  //     fontSize: '1rem',
  //     fontWeight: 600,
  //     '@media (min-width:768px)': {
  //       fontSize: '1.25rem',
  //     },
  //   },
    
  //   // Body text uses system fonts
  //   body1: {
  //     fontSize: '1rem',
  //     lineHeight: 1.6,
  //     '@media (min-width:768px)': {
  //       fontSize: '1.125rem',
  //     },
  //   },
    
  //   body2: {
  //     fontSize: '0.875rem',
  //     lineHeight: 1.5,
  //   },
    
  //   subtitle1: {
  //     fontFamily: ['maglisto', 'Georgia', 'serif'].join(','),
  //     fontSize: '1rem',
  //     fontWeight: 500,
  //   },
    
  //   subtitle2: {
  //     fontFamily: ['maglisto', 'Georgia', 'serif'].join(','),
  //     fontSize: '0.875rem',
  //     fontWeight: 500,
  //   },
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
  
  spacing: 8, // Base spacing unit (8px)
  
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

