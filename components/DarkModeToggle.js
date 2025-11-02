import React from "react";
import { useTheme } from "next-themes";
import { Box } from "@mui/material";
import Button from "./Button";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button onClick={toggleTheme}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
          alt="Toggle theme"
          sx={{ width: 24, height: 24 }}
        />
      </Box>
    </Button>
  );
}

