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

const HangingTags = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        overflow: "visible",
      }}
    >
      {/* Curved string line - sagging downward, full screen width */}
      <Box
        component="svg"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          height: { xs: 100, md: 140 },
        }}
      >
        {/* Main curved line (sagging down like a hanging string) */}
        <path
          d="M0,2 Q50,16 100,2"
          stroke="#333"
          strokeWidth="0.3"
          fill="none"
        />
      </Box>

      {/* Tags */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: { xs: 4, md: 0 },
        }}
      >
        {tags.map((tag, i) => (
          <Box
            key={i}
            sx={{
              position: "relative",
              backgroundColor: theme => alpha(theme.palette.primary.light, 0.5),
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
            }}
          >
            {/* Tag hole */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: 6, md: 10 },
                left: "50%",
                transform: "translateX(-50%)",
                width: { xs: 10, md: 14 },
                height: { xs: 10, md: 14 },
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            />
            {/* Tag content */}
            <SvgIcon
              sx={{ fontSize: { xs: 20, md: 30 }, mt: 1.5, color: "black" }}
            >
              {tag.icon}
            </SvgIcon>
            <Typography
              variant="caption"
              color="black"
              sx={{
                letterSpacing: 1,
                fontSize: { md: "0.75rem" },
                display: { xs: "none", md: "block" },
              }}
            >
              {tag.label}
            </Typography>
            <Typography
              variant="subtitle1"
              color="black"
              sx={{
                fontWeight: 700,
                mt: 0.5,
                fontSize: { xs: "0.6rem", md: "1rem" },
              }}
            >
              {tag.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HangingTags;
