import { JSX } from "react";
import Button from "./Button";
import { Typography, Box, Link } from "@mui/material";
import React from "react";


export default function RsvpButton(): JSX.Element {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button
          //  component={Link}
          //  href={"https://docs.google.com/forms/d/e/1FAIpQLSfpAdkh6dO_8jLksPz14Vaia30HxyALseKrAU8kFPl0BkLIvQ/viewform?usp=header"}
          //  target="_blank"
          //  rel="noopener noreferrer"
        onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSfpAdkh6dO_8jLksPz14Vaia30HxyALseKrAU8kFPl0BkLIvQ/viewform?usp=header"
          )
        }
      >
        <Typography variant="h4">RSVP</Typography>
      </Button>
    </Box>
  );
}
