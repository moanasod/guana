import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";

function PinterestBoard({ boardUrl }) {
  useEffect(() => {
    // Check if Pinterest script already exists
    if (window.PinUtils) {
      window.PinUtils.build();
    } else {
      // Load Pinterest script if not already loaded
      const script = document.createElement("script");
      script.src = "//assets.pinterest.com/js/pinit.js";
      script.async = true;
      script.defer = true;
      script.setAttribute("data-pin-build", "doBuild");
      document.body.appendChild(script);

      // Clean up function
      return () => {
        // Remove script when component unmounts
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "100%",
        overflow: "hidden",
        borderRadius: "16px",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      <a
        data-pin-do="embedBoard"
        data-pin-board-width="1200"
        data-pin-scale-height="500"
        data-pin-scale-width="115"
        href={boardUrl}
      />
    </Box>
  );
}

export default function DressCode() {
  const textRef = useRef();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (textRef.current) {
      stagger(
        [textRef.current],
        { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <PageContainer title={`Dress Code - ${data.name}`} isFAQ={true}>
      <Box
        component="img"
        src={`https://images.squarespace-cdn.com/content/v1/5f90a0d90565905e22971c80/7519f444-d99b-49ae-bbb2-361b2e6d0b85/IMG_6934.jpeg`}
        alt="Dress Code"
        sx={{ 
          width: { xs: "100%", md: "60%" }, 
          height: "auto", 
          alignSelf: "center",
          borderRadius: "8px",
          marginBottom: "2rem"
        }}
      />

      <Typography
        ref={textRef}
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        Dress Code
      </Typography>

      <Stack spacing={4} sx={{ marginTop: "1rem" }}>
        <Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1rem" }}
          >
            We&apos;ve put together a Pinterest board to give you inspiration for what to wear to our wedding. 
            The dress code is <strong>cocktail attire</strong>, think elegant but comfortable for an outdoor 
            celebration in Montenegro.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "1rem" }}
          >
            Since the ceremony will take place outdoors on a hillside, we recommend comfortable shoes 
            (wedges or block heels work great!). Bring a light wrap or jacket for cooler evening temperatures.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: "2rem" }}
          >
            Browse our board below for outfit ideas and color palette inspiration! 👇
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{ marginBottom: "2rem", fontWeight: 500 }}
          >
            Style Inspiration
          </Typography>
          
          {mounted && (
            <PinterestBoard boardUrl="https://se.pinterest.com/moanasodergren/wedding-dress-code/" />
          )}
        </Box>

        <Box>
          <Typography
            variant="h5"
            sx={{ marginBottom: "1rem", fontWeight: 500 }}
          >
            💡 What to Keep in Mind
          </Typography>
          <Box component="ul" sx={{ marginLeft: "1.5rem", paddingLeft: "1rem" }}>
            <Typography
              component="li"
              variant="body1"
              sx={{ fontSize: "1rem", lineHeight: 1.8, display: "list-item" }}
            >
              <strong>Weather:</strong> Expect warm, sunny days (22–26°C / 72–79°F) and cooler evenings (15–18°C / 59–64°F)
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{ fontSize: "1rem", lineHeight: 1.8, display: "list-item" }}
            >
              <strong>Footwear:</strong> The venue has pebbles, grass, and stone paths — choose comfortable, stable shoes
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{ fontSize: "1rem", lineHeight: 1.8, display: "list-item" }}
            >
              <strong>Colors:</strong> Feel free to wear any colors you love! We&apos;d only ask to avoid all-white
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{ fontSize: "1rem", lineHeight: 1.8, display: "list-item" }}
            >
              <strong>Sun Protection:</strong> Bring sunglasses and sunscreen for the daytime ceremony
            </Typography>
            <Typography
              component="li"
              variant="body1"
              sx={{ fontSize: "1rem", lineHeight: 1.8, display: "list-item" }}
            >
              <strong>Evening Layer:</strong> A light shawl, jacket, or pashmina for when the sun sets
            </Typography>
          </Box>
        </Box>

        <Box sx={{ 
          padding: "24px", 
          borderRadius: "12px", 
          border: "2px solid",
        }}>
          <Typography
            variant="h6"
            sx={{ marginBottom: "1rem", fontWeight: 600 }}
          >
            Questions about attire?
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", lineHeight: 1.8 }}
          >
            If you&apos;re unsure about what to wear or have specific questions, feel free to reach out! 
            We want you to feel comfortable and look amazing at our celebration. 💕
          </Typography>
        </Box>
      </Stack>
    </PageContainer>
  );
}

