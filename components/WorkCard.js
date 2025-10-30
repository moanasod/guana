import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Image from "next/image";

export default function WorkCard({ img, name, description, onClick }) {
  return (
    <Stack
  
      onClick={onClick}
      className="link"
      sx={{
        overflow: 'hidden',
        borderRadius: '0.5rem',
        padding: { xs: '0.5rem', lg: '1rem' },
        '&:first-of-type': {
          marginLeft: 0
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          transition: 'all 0.3s ease-out',
          height: { xs: '12rem', md: '600px' }
        }}
      >
        <img
          alt={name}
          src={img}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: 'all 0.3s ease-out'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <Image
          alt={name}
     height={'100%'} width={'100%'}
          src={img}
          fill
          style={{
            objectFit: 'cover',
            transition: 'all 0.3s ease-out'
          }}
        />
      </Box>
      <Typography variant="h4" sx={{ marginTop: '20px', fontSize: '1.875rem', fontWeight: 500 }}>
        {name ? name : "Project Name"}
      </Typography>
      <Typography variant="h6" sx={{ fontSize: '1.25rem', opacity: 0.5 }}>
        {description ? description : "Description"}
      </Typography>
    </Stack>
  );
}

