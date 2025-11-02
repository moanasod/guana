import React from "react";
import {
  Typography,
  Box,
  Paper,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useTheme } from "next-themes";

function CheckboxItem({ label, defaultChecked }) {
 

  return (
    <FormControlLabel
    typo
    sx={{
      '& .MuiFormControlLabel-label': {
        fontSize: '1.1rem',
        fontWeight: 500,
        color: 'white',
      },
    }}
      control={
        <Checkbox
          defaultChecked={defaultChecked}
          icon={<FavoriteBorder sx={{ color: "white" }} />}
          checkedIcon={<Favorite sx={{ color: "white" }} />}
          sx={{ color: "white" }}
        
        />
      }
      label={label}
    />
  );
}

export default function About({ aboutRef }) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <Box
      ref={aboutRef}

    >
      <Paper sx={{ padding: "16px", backgroundColor: isDarkMode ? "secondary.dark" : "primary.main", paddingBottom: "40px" }}>
        <Typography
          variant="h4"
          sx={{
            margin: { xs: 0, md: "40px" },
            color: "white",
          }}
        >
          Checklist.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            margin: { xs: "8px 0", md: "40px" },
            marginTop: "8px",
            color: "white",
            width: { xs: "100%", lg: "90%" },
          }}
        >
          Wheeew, there&apos;s a lot of information to digest here. We&apos;ve
          put together a checklist for you to help you get ready for the
          wedding.
        </Typography>
        <Box sx={{ paddingX: "40px" }}>
        <FormGroup sx={{ color: "white" }}>
          <CheckboxItem label="Get an invite to the wedding" defaultChecked />
          <CheckboxItem label="RSVP: Let us know you're coming so we can plan food and transport." />
          <CheckboxItem label="Book your flights: See Travel Information for our recommended flights to Podgorica or Tivat." />
          <CheckboxItem label="Send us your flight details. So we can arrange your shuttle." />
          <CheckboxItem label="Book your accommodation. See Where to Stay for nearby hotel options close to the venue." />
          <CheckboxItem label="Pack for the weekend: Bring clothes for warm days and cooler evenings, comfortable shoes for the outdoor ceremony, and swimwear if you plan to swim." />
        </FormGroup>
        </Box>
      </Paper>
    </Box>
  );
}
