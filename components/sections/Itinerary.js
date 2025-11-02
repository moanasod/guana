import React from "react";
import { useTheme } from "next-themes";
import { Typography, Box, Grid } from "@mui/material";



export default function Itinerary({ itineraryRef }) {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <Box
      ref={itineraryRef}
      sx={{
        // Full-width background that extends beyond parent container
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        backgroundColor: theme === "dark" ?  "secondary.dark" : "primary.main", 
        padding: { xs: "3rem 1rem", md: "4rem 2rem", lg: "5rem 2rem" },
      }}
    >
      <Box sx={{ maxWidth: "1200px", marginX: "auto" }}>
        <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
          Itinerary
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "2rem" }}>More to come... Here is a quick overview</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={isDarkMode ? "/images/weddingTimelineDark.png" : "/images/weddingTimeline.png"}
            alt="Wedding Timeline"
            sx={{
              width: { xs: "100%", lg: "70%" },
              height: "auto",
              borderRadius: "0.5rem",
            }}
          />
          
        </Box>
      </Box>
    </Box>
  );
}
