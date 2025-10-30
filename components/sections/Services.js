import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import ServiceCard from "../ServiceCard";

export default function TravelInfo({ data }) {
  return (
    <Box 
      sx={{ 
        marginTop: { xs: '40px', lg: '120px' }, 
        padding: { xs: '8px', lg: 0 } 
      }}
    >
      <Typography variant="h5">{data.travelInfo.title}.</Typography>
      
      <Grid 
        container 
        spacing={3} 
        sx={{ 
          marginTop: { xs: '20px', md: '40px' } 
        }}
      >
        {data.services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ServiceCard
              name={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

