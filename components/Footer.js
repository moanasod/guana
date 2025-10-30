import React from "react";
import Socials from "./Socials";
import Link from "next/link";
import Button from "./Button";
import { Typography, Box, Stack } from "@mui/material";

export default function Footer({}) {
  return (
    <>
      <Box sx={{ marginTop: { xs: '20px', lg: '160px' }, padding: { xs: '8px', lg: 0 } }}>
        <Box>
          <Typography variant="h4" sx={{ fontSize: '1.5rem', fontWeight: 700 }}>Contact.</Typography>
          <Stack spacing={2} sx={{ marginTop: '40px' }}>
            <Box sx={{ marginTop: '40px' }}>
              <Socials />
            </Box>
          </Stack>
        </Box>
      </Box>
      <Typography variant="caption" sx={{ fontSize: '0.875rem', fontWeight: 700, marginTop: { xs: '8px', lg: '40px' }, padding: { xs: '8px', lg: 0 } }}>
        Made With ❤
      </Typography>
    </>
  );
}

