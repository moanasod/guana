import { SxProps, Typography, TypographyProps } from "@mui/material";
import React from "react";
import { JSX, ReactNode } from "react";


interface SectionHeadingrops extends TypographyProps {
  children: ReactNode;
  sx?: SxProps
}
export default function SectionHeading({ children, variant = "h4", sx = {}, ...props }: SectionHeadingrops): JSX.Element {
  const defaultSx = {
    marginBottom: '1rem',
    marginTop: '1rem',
    ...sx
  };
  
  return (
    <Typography variant={variant} sx={defaultSx} {...props}>
      {children}
    </Typography>
  );
}
