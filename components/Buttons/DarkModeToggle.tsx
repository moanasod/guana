import React, { JSX } from "react";
import { useTheme } from "next-themes";
import { Box } from "@mui/material";
import Button from "./Button";
import { getAssetPath } from "../../utils/getAssetPath";

export default function DarkModeToggle(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode? "light" : "dark");
  };

  return (
    <Button onClick={toggleTheme}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src={getAssetPath(`/images/${isDarkMode ? "moon.svg" : "sun.svg"}`)}
          alt="Toggle theme"
          sx={{ width: 24, height: 24 }}
        />
      </Box>
    </Button>
  );
}

