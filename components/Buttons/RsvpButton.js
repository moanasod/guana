import Button from "./Button";
import { Typography, Box } from "@mui/material";

export default function RsvpButton(isTopBar = false) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button
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
