import React from "react";
import { useRouter } from "next/router";
import { Box, Stack } from "@mui/material";
import WorkCard from "../WorkCard";
import { SectionHeading } from "../typography";

export default function WeddingDetails({ workRef, data }) {
  const router = useRouter();

  return (
    <Box
      ref={workRef}
      sx={{
        padding: { xs: "8px", lg: 0 },
      }}
    >
      <SectionHeading>{data.weddingDetails.title}</SectionHeading>
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
