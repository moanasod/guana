import { SxProps, Typography, TypographyProps } from "@mui/material";
import React from "react";
import { JSX, ReactNode } from "react";

interface BodyTextProps extends TypographyProps{
  children?: ReactNode; 
  sx?: SxProps;
}

export default function BodyText({ children, sx = {}}: BodyTextProps): JSX.Element {
  const defaultSx = {
    fontSize: "1.125rem",
    lineHeight: 1.8,
    ...sx,
  };

  return (
    <Typography variant="body1" sx={defaultSx}>
      {children}
    </Typography>
  );
}
