import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import WorkCard from "../WorkCard";

const weddingDetails = [
  {
    title: "",
    description: "Wedding Details",
    imageSrc: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    url: "/",
  },
];

export default function WeddingDetails({ workRef, data }) {
  return (
    <Box 
      ref={workRef}
      sx={{ 
        marginTop: { xs: '40px', lg: '120px' }, 
        padding: { xs: '8px', lg: 0 } 
      }}
    >
      <Typography variant="h5">{data.weddingDetails.title}</Typography>

      <Grid 
        container 
        spacing={2} 
        sx={{ marginTop: { xs: '20px', lg: '40px' } }}
      >
        {data.projects.map((project) => (
          <Grid item xs={12} sm={6} key={project.id}>
            <WorkCard
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

