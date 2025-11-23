
import { SxProps, Typography, TypographyProps } from "@mui/material";
import React, { JSX } from "react";
import { ReactNode } from "react";

interface SubHeadingProps extends TypographyProps {
  children: ReactNode;
  sx?: SxProps
}

export default function SubHeading({ children, sx = {}, ...props }: SubHeadingProps): JSX.Element {
  const defaultSx = {
    marginBottom: '1rem',
    fontWeight: 500,
    ...sx
  };
  
  return (
    <Typography variant="h5" sx={defaultSx} {...props}>
      {children}
    </Typography>
  );
}