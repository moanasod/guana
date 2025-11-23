import { Box, BoxProps, SxProps } from "@mui/material";
import React from "react";
import { JSX, ReactNode } from "react";


interface ContentSectionProps extends BoxProps{
children?: ReactNode;
sx?: SxProps;
}
export default function ContentSection({ children, sx = {} }: ContentSectionProps): JSX.Element {
  const defaultSx = {
    marginBottom: "2rem",
    ...sx,
  };

  return (
    <Box sx={defaultSx}>
      {children}
    </Box>
  );
}