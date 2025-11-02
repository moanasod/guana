import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Typography, Box } from "@mui/material";

export default function ServiceCard({ name, description }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Box
      className="link"
      sx={{
        padding: { xs: "8px", sm: "16px" },
        borderRadius: "0.5rem",
        transition: "all 0.3s ease-out",
        "&:hover": {
          backgroundColor: mounted && theme === "dark" ? "#1e293b" : "#f8fafc",
          transform: "scale(1.05)",
        },
      }}
    >
      <Typography variant="h4" sx={{ fontSize: "1.875rem" }}>
        {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "20px", opacity: 0.8, fontSize: "1.25rem" }}
      >
        {description}
      </Typography>
    </Box>
  );
}
