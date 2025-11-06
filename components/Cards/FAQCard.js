import { Box, Card, Typography } from "@mui/material";
import Button from "../Buttons/Button";
import { useState } from "react";
import { useTheme } from "next-themes";
import { getAssetPath } from "../../utils/getAssetPath";

export default function FAQCard({
  name,
  description,
  image,
  exampleQuestion,
  disabled,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Card
      disabled={disabled}
      sx={{
        position: "relative",
        padding: 2,
        backgroundColor: isDarkMode ? "secondary.dark" : "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 200,
            marginBottom: 2,
            borderRadius: "0.5rem",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={getAssetPath(image)}
            alt={name}
            sx={{
              width: "auto",
              height: "100%",
              objectFit: "cover",
              justifySelf: "center",
              alignItems: "center",
            }}
          />
        </Box>
      )}
      <Typography
        variant="h4"
        sx={{ marginBottom: 1 }}
      >
        {exampleQuestion}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: 1,
          opacity: 0.8,
          fontSize: "1.25rem",
          flexGrow: 1,
        }}
      >
        {description}
      </Typography>
      {isHovered && (
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            animation: "fadeIn 0.3s ease",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "scale(0.9)" },
              to: { opacity: 1, transform: "scale(1)" },
            },
          }}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontSize: "0.875rem",
              padding: "8px 16px",
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            View More FAQs
          </Button>
        </Box>
      )}
    </Card>
  );
}
