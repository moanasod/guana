import React, { JSX, RefObject } from "react";
import { useRouter } from "next/router";
import { Box, Stack } from "@mui/material";
import WorkCard from "../Cards/WorkCard";
import { SectionHeading } from "../typography";

 type Project ={
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  url: string;
}

interface WeddingDetailsProps {
  workRef: RefObject<HTMLDivElement>;
  data: {
    projects: Project[];
  };
}

export default function WeddingDetails({
  workRef,
  data,
}: WeddingDetailsProps): JSX.Element {
  const router = useRouter();

  return (
    <Box
      ref={workRef}
      sx={{
        padding: { xs: 1, lg: 0 },
      }}
    >
      <SectionHeading>Wedding Details.</SectionHeading>
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
