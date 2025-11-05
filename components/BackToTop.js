import { useState, useEffect } from "react";
import { Box, Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Tooltip from "@mui/material/Tooltip";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={showButton}>
      <Tooltip title="Back to top">
        <Box
          onClick={scrollToTop}
          role="button"
          aria-label="Back to top"
          sx={{
            position: "fixed",
            bottom: { xs: 20, md: 32 },
            right: { xs: 20, md: 32 },
            zIndex: 1000,
          }}
        >
          <Fab
            color="primary"
            size="medium"
            aria-label="scroll back to top"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              "&:hover": {
                backgroundColor: "primary.dark",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Tooltip>
    </Zoom>
  );
}
