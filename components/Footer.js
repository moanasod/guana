import React from "react";
import Contact from "./Contact";
import { Typography, Box, Stack } from "@mui/material";

export default function Footer({}) {
  return (
    <>
      <Box
        sx={{
          marginTop: { xs: "20px", lg: "160px" },
          padding: { xs: "8px", lg: 0 },
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
            Contact.
          </Typography>

          <Contact />
        </Box>
      </Box>
      <Typography
        variant="caption"
        sx={{
          fontSize: "0.875rem",
          fontWeight: 700,
          marginTop: { xs: "8px", lg: "40px" },
          padding: { xs: "8px", lg: 0 },
        }}
      >
        You&apos;ve read the entire page! Yay! 🎉
      </Typography>
    </>
  );
}
