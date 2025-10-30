import React from "react";
import { Typography, Box } from "@mui/material";

export default function About({ aboutRef, data }) {
  return (
    <Box 
      ref={aboutRef}
      sx={{ 
        marginTop: { xs: '40px', lg: '160px' }, 
        padding: { xs: '8px', lg: 0 } 
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          margin: { xs: 0, md: '40px' },
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}
      >
        About.
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          margin: { xs: '8px 0', md: '40px' },
          marginTop: '8px',
          fontSize: { xs: '1.25rem', lg: '1.875rem' },
          width: { xs: '100%', lg: '60%' }
        }}
      >
        {data.aboutpara}
      </Typography>
    </Box>
  );
}

