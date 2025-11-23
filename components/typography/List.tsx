import { Box, BoxProps, SxProps } from "@mui/material";
import React, { JSX } from "react";
import { ReactNode } from "react";

interface ListProps extends BoxProps {
  children: ReactNode;
  sx?: SxProps
}

export default function List({ children, sx = {} }: ListProps): JSX.Element {
  return (
    <Box
      component="ul"
      sx={{
        marginLeft: "1.5rem",
        paddingLeft: "1rem",
        listStyleType: "disc",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}