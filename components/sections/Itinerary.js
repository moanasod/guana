import React from "react";
import { useTheme } from "next-themes";
import { Box } from "@mui/material";
import { SectionHeading, SubHeading } from "../typography";
import { getAssetPath } from "../../utils/getAssetPath";

export default function Itinerary({ itineraryRef }) {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <Box
      ref={itineraryRef}
      sx={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        backgroundColor: theme === "dark" ? "secondary.dark" : "primary.main",
        padding: { xs: "3rem 1rem", md: "4rem 2rem", lg: "5rem 2rem" },
      }}
    >
      <Box sx={{ maxWidth: "1200px", marginX: "auto" }}>
        <SectionHeading>Itinerary</SectionHeading>
        <SubHeading sx={{ marginBottom: "2rem" }}>
          More to come... Here is a quick overview
        </SubHeading>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={getAssetPath(
              isDarkMode
                ? "/images/weddingTimelineDark.png"
                : "/images/weddingTimeline.png"
            )}
            alt="Wedding Timeline"
            sx={{
              width: { xs: "100%", lg: "70%" },
              height: "auto",
              borderRadius: "0.5rem",
            }}
          />
        </Box>
      </Box>
      <Box
        component="img"
        src={getAssetPath("/images/photostrip.png")}
        alt="Photo strip of Moana and Gustav"
        sx={{
          width: { xs: "100%", md: "50%" },
          marginTop: { xs: "-6rem", md: "-12rem" },
          marginBottom: { xs: "-5rem", md: "-8rem" },
          height: "auto",
          alignSelf: "center",
          justifySelf: "center",
        }}
      />
    </Box>
  );
}
