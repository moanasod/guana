import { Box, CircularProgress, SxProps } from "@mui/material";
import React, { JSX } from "react";

interface SpinnerProps {
  size?: number;
  overlay?: boolean;
  sx?: SxProps;
}

export default function Spinner({
  size = 60,
  overlay = true,
  sx = {},
  ...props
}: SpinnerProps): JSX.Element {
  if (!overlay) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          width: "100%",
          ...sx,
        }}
        {...props}
      >
        <CircularProgress size={size} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        ...sx,
      }}
      {...props}
    >
      <CircularProgress size={size} sx={{ color: "primary.main" }} />
    </Box>
  );
}
