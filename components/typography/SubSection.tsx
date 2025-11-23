import { Box, BoxProps, SxProps } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { JSX, ReactNode } from "react";
import React from "react";


interface SubSectionProps extends BoxProps {
  children: ReactNode;
  sx?: SxProps
}

export default function SubSection({ title, children, sx = {} }: SubSectionProps): JSX.Element {
  return (
    <Box sx={{ marginBottom: "1.5rem", ...sx }}>
      <SectionHeading variant="h6" sx={{ marginBottom: "0.5rem" }}>
        {title}
      </SectionHeading>
      {children}
    </Box>
  );
}
