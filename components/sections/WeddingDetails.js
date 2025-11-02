import React from "react";
import { useRouter } from "next/router";
import { Typography, Box, Grid } from "@mui/material";
import WorkCard from "../WorkCard";
import { Stack } from "@mui/material";

const weddingDetails = [
  {
    title: "",
    description: "Wedding Details",
    imageSrc:
      "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    url: "/",
  },
];

export default function WeddingDetails({ workRef, data }) {
  const router = useRouter();

  return (
    <Box
      ref={workRef}
      sx={{
        padding: { xs: "8px", lg: 0 },
      }}
    >
      <Typography variant="h4">{data.weddingDetails.title}</Typography>
      <Stack direction="column" gap={2}>
        {data.projects.map((project) => (
          <WorkCard
            img={project.imageSrc}
            name={project.title}
            description={project.description}
            key={project.id}
            onClick={() => router.push(project.url)}
          />
        ))}
      </Stack>
    </Box>
  );
}
