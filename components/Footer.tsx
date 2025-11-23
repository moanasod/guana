import React, { JSX } from "react";
import Contact from "./Contact";
import { Box } from "@mui/material";
import { SectionHeading } from "./typography";

export default function Footer(): JSX.Element {
  return (
    <Box
      sx={{
        marginTop: { xs: 6, lg: 2 },
        paddingX: { xs: 3, lg: 0 },
      }}
    >
      <SectionHeading>
        Contact.
      </SectionHeading>
      <Contact />
    </Box>
  );
}
