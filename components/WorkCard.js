import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Image from "next/image";

export default function WorkCard({ img, name, description, onClick }) {
  return (
    <Stack
      onClick={onClick}
      className="link"
      sx={{
        overflow: "hidden",
        borderRadius: "0.5rem",
        padding: { xs: "0.5rem", lg: "1rem" },
        cursor: "pointer",
        "&:first-of-type": {
          marginLeft: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "0.5rem",
          overflow: "hidden",
          transition: "all 0.3s ease-out",
          height: { xs: "12rem", md: "400px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
            transition: "all 0.3s ease-out",
          },
          "&:hover::after": {
            background: "rgba(0, 0, 0, 0.5)",
          },
          "&:hover img": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Box
          component="img"
          src={img}
          alt={name}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease-out",
            zIndex: 0,
          }}
        />


        <Stack
          sx={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: "#fff",
              marginBottom: "0.5rem",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
