import React from "react";
import { Box, Typography, SvgIcon } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { alpha } from "@mui/material/styles";

const tags = [
  { icon: <EventIcon />, label: "WHEN", value: "8-10 May 2026" },
  {
    icon: <LocationOnIcon />,
    label: "WHERE",
    value: "Talići Hill, Montenegro",
  },
  {
    icon: <CardGiftcardIcon />,
    label: "GIFTS",
    value: "No, the gift is you coming",
  },
];

const styles = {
  container: {
    position: "relative",
    width: "100%",
    overflow: "visible",
  },
  svgBox: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100vw",
    height: { xs: 100, md: 140 },
  },
  tagBox: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: { xs: 4, md: 0 },
  },
  circleHole: {
    position: "absolute",
    top: { xs: 6, md: 10 },
    left: "50%",
    transform: "translateX(-50%)",
    width: { xs: 10, md: 14 },
    height: { xs: 10, md: 14 },
    backgroundColor: "black",
    borderRadius: "50%",
  },
  icon: { fontSize: { xs: 20, md: 30 }, mt: 1.5, color: "black" },
  label: {
    letterSpacing: 1,
    fontSize: { md: "0.75rem" },
    display: { xs: "none", md: "block" },
  },
  value: {
    fontWeight: 700,
    mt: 0.5,
    fontSize: { xs: "0.6rem", md: "1rem" },
  },
};

const HangingTags = () => {
  return (
    <Box sx={styles.container}>
      <Box
        component="svg"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        sx={styles.svgBox}
      >
        <path
          d="M0,2 Q50,16 100,2"
          stroke="#333"
          strokeWidth="0.3"
          fill="none"
        />
      </Box>

      <Box sx={styles.tagBox}>
        {tags.map((tag, i) => (
          <Box key={i} sx={{
            position: "relative",
            backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.5),
            width: { xs: 80, sm: 120, md: 150 },
            height: { xs: 80, sm: 120, md: 150 },
            borderRadius: 2,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginTop:
              i === 1
                ? { xs: "40px", md: "50px", lg: "50px" }
                : { xs: "20px", md: "30px", lg: "35px" },
            animation: "sway 2s ease-in-out infinite alternate",
            "@keyframes sway": {
              "0%, 100%": { transform: "rotate(0deg)" },
              "50%": { transform: "rotate(2deg)" },
            },
          }}>
            <Box sx={styles.circleHole} />
            <SvgIcon sx={styles.icon}>{tag.icon}</SvgIcon>
            <Typography variant="caption" color="black" sx={styles.label}>
              {tag.label}
            </Typography>
            <Typography variant="subtitle1" color="black" sx={styles.value}>
              {tag.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HangingTags;
