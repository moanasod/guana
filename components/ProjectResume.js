import React from "react";
import { Typography, Box, Stack } from "@mui/material";

export default function ProjectResume({ dates, type, position, bullets }) {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));

  return (
    <Stack 
      direction={{ xs: "column", md: "row" }} 
      justifyContent="space-between" 
      sx={{ marginTop: '20px', width: '100%' }}
    >
      <Box sx={{ fontSize: '1.125rem', width: { xs: '100%', md: '40%' } }}>
        <Typography variant="h6">{dates}</Typography>
        <Typography variant="body2" sx={{ fontSize: '0.875rem', opacity: 0.5 }}>{type}</Typography>
      </Box>
      <Box sx={{ width: { xs: '100%', md: '60%' } }}>
        <Typography variant="h6" sx={{ fontSize: '1.125rem', fontWeight: 700 }}>{position}</Typography>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <Box component="ul" sx={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {bulletsLocal.map((bullet, index) => (
              <Box component="li" key={index} sx={{ fontSize: '0.875rem', marginY: '4px', opacity: 0.7 }}>
                {bullet}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Stack>
  );
}

