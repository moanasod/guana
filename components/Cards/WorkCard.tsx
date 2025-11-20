import React, { JSX } from "react";
import { Typography, Box, Stack } from "@mui/material";
import { getAssetPath } from "../../utils/getAssetPath";

const styles = {
  container: {
    overflow: "hidden",
    borderRadius: "0.5rem",
    padding: { xs: "0.5rem", lg: "1rem" },
    cursor: "pointer",
    "&:first-of-type": {
      marginLeft: 0,
    },
  },
  box: {
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
  },
  imgBox: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-out",
    zIndex: 0,
  },
  textStack: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "2rem",
  },
  name: {
    fontWeight: 600,
    color: "#fff",
    marginBottom: "0.5rem",
    fontSize: { xs: "1.5rem", md: "2.5rem" },
  },
  description: {
    color: "#fff",
    fontSize: { xs: "1rem", md: "1.5rem" },
  },
};

interface WorkCardProps {
  img: string;
  name: string;
  description: string;
  onClick: () => void;
}

export default function WorkCard({
  img,
  name,
  description,
  onClick,
}: WorkCardProps): JSX.Element {
  return (
    <Stack onClick={onClick} className="link" sx={styles.container}>
      <Box sx={styles.box}>
        <Box
          component="img"
          src={getAssetPath(img)}
          alt={name}
          sx={styles.imgBox}
        />

        <Stack sx={styles.textStack}>
          <Typography variant="h4" sx={styles.name}>
            {name}
          </Typography>
          <Typography variant="h6" sx={styles.description}>
            {description}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
