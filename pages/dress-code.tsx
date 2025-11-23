import { JSX, useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";
import { getAssetPath } from "../utils/getAssetPath";
import {
  BodyText,
  List,
  SectionHeading,
  SubHeading,
  ListItem,
} from "../components/typography";
import React from "react";

function PinterestBoard({ boardUrl }: { boardUrl: string }): JSX.Element {
  useEffect(() => {
    const w = window as any;
    if (w.PinUtils) {
      w.PinUtils.build();
    } else {
      const script = document.createElement("script");
      script.src = "//assets.pinterest.com/js/pinit.js";
      script.async = true;
      script.defer = true;
      script.setAttribute("data-pin-build", "doBuild");
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <a
      data-pin-do="embedBoard"
      data-pin-board-width="1200"
      data-pin-scale-height="500"
      data-pin-scale-width="115"
      href={boardUrl}
    />
  );
}

export default function DressCode() {
  const textRef = useRef<HTMLDivElement | null>(null);  const [mounted, setMounted] = useState(false);

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
        src={getAssetPath("/images/guestDresses.png")}
        alt="Dress Code"
        sx={{
          width: { xs: "100%", md: "60%" },
          height: "auto",
          alignSelf: "center",
          borderRadius: "8px",
          marginBottom: "2rem",
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

      <Stack spacing={4} sx={{ marginTop: "1rem" }} gap={4}>
        <Box>
          <BodyText sx={{ marginBottom: "1rem" }}>
            We&apos;ve put together a Pinterest board to give you inspiration
            for what to wear to our wedding. The dress code is{" "}
            <strong>cocktail attire</strong> — elegant yet comfortable for an
            outdoor celebration in Montenegro.
          </BodyText>

          <BodyText sx={{ marginBottom: "1rem" }}>
            For <strong>men</strong>, a matching suit in a breathable fabric
            such as linen or cotton is ideal. Shades of light grey, beige, sand,
            blue, or brown fit the setting perfectly. Ties are appreciated but
            not required.
          </BodyText>

          <BodyText sx={{ marginBottom: "1rem" }}>
            For <strong>women</strong>, cocktail dresses, jumpsuits, or dressy
            outfits in bright or pastel tones are ideal.
          </BodyText>

          <BodyText sx={{ marginBottom: "1rem" }}>
            The ceremony and dinner will take place outdoors, so we recommend
            shoes suited for stone and grass surfaces (wedges or block heels
            work great!) and a light jacket or wrap for cooler evening
            temperatures.
          </BodyText>

          <BodyText sx={{ marginBottom: "1rem" }}>
            Colors are encouraged — just avoid all-white looks. Browse our board
            below for outfit ideas and color palette inspiration! 👇 This will
            be updated as we get closer to the wedding.
          </BodyText>
        </Box>

        <Box>
          <SectionHeading> Style Inspiration</SectionHeading>

          {mounted && (
            <PinterestBoard boardUrl="https://se.pinterest.com/moanasodergren/wedding-dress-code/" />
          )}
        </Box>

        <Box>
          <SubHeading> 💡 What to Keep in Mind</SubHeading>
          <List>
            <ListItem>
              <strong>Weather:</strong> Expect warm, sunny days (22–26°C) and
              cooler evenings (15–18°C)
            </ListItem>
            <ListItem>
              <strong>Footwear:</strong> The venue has pebbles, grass, and stone
              paths — choose comfortable shoes + you need them for dancing!
            </ListItem>
            <ListItem>
              <strong>Colors:</strong> Feel free to wear any colors you love!
              We&apos;d only ask to avoid all-white.
            </ListItem>
            <ListItem>
              <strong>Evening Layer:</strong> A light shawl, jacket, or pashmina
              for when the sun sets.
            </ListItem>
          </List>
        </Box>

        <Box
          sx={{
            padding: 4,
            borderRadius: 2,
            border: "2px solid",
          }}
        >
          <SubHeading> Questions about attire?</SubHeading>
          <BodyText>
            If you&apos;re unsure about what to wear or have specific questions,
            feel free to reach out! We want you to feel comfortable and look
            amazing at our celebration. 💕
          </BodyText>{" "}
        </Box>
      </Stack>
    </PageContainer>
  );
}
