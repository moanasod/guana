import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function LoadingPage() {
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
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(8px)",
        zIndex: 10000,
      }}
    >
      <CircularProgress size={80} sx={{ color: "primary.main" }} />
    </Box>
  );
}

