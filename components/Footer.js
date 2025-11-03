import React from "react";
import Contact from "./Contact";
import { Box } from "@mui/material";
import { SectionHeading } from "./typography";

export default function Footer() {
  return (
    <Box
      sx={{
        marginTop: { xs: "20px", lg: "160px" },
        padding: { xs: "8px", lg: 0 },
      }}
    >
      <SectionHeading sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
        Contact.
      </SectionHeading>

      <Contact />
    </Box>
  );
}
