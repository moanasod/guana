import { Typography, Box, useScrollTrigger } from "@mui/material";
import SideNavDropdown from "./DropDownNav";
import { JSX, useRef } from "react";
import React from "react";
import { useIsomorphicLayoutEffect } from "@/utils";
import { stagger } from "@/animations";

interface FAQHeaderProps {
  posts: { slug: any; title: string }[];
  currentSection: string;
}

export default function FaqHeader({
  posts,
  currentSection,
}: FAQHeaderProps): JSX.Element {
  const textRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (textRef.current) {
      stagger(
        [textRef.current],
        { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
      stagger([textRef.current], { y: 30 }, { y: 0 });
    }
  }, []);
  // Trigger specifically for the dropdown behavior
  const dropdownFixed = useScrollTrigger({
    threshold: 140, // adjust to when you want it to "lock" into fixed
    disableHysteresis: true,
  });

  return (
    <Box
      component="header"
      sx={(theme) => ({
        // position: "sticky",
        top: 0,
        zIndex: theme.zIndex.appBar,
        marginX: "auto",
        width: "100%",
        backgroundColor: "transparent",
        boxShadow: "none",
        transition: "all 200ms ease",
      })}
    >
      <Box
        sx={{
          maxWidth: 1200,
          marginX: "auto",
          paddingX: { xs: 0, sm: 3, md: 4 },
          paddingY: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          gap: 2,
          transition: "padding 200ms ease",
          pb: { xs: 5, sm: 0, md: 0 },
        }}
      >
        <Typography
          variant="h1"
          ref={textRef}
          sx={{
            fontWeight: 700,
            fontSize: { xs: "3.75rem", lg: "6rem" },
            margin: 0,
            lineHeight: 1.1,
            transition:
              "font-size 200ms ease, transform 200ms ease, opacity 200ms ease",
          }}
        >
          FAQs.
        </Typography>

        <Box
          sx={(theme) => {
            return {
              position: dropdownFixed ? "fixed" : "sticky",
              top: dropdownFixed ? 10 : 0,
              zIndex: theme.zIndex.appBar + 1,
              backdropFilter: dropdownFixed ? "blur(10px)" : "none",
              borderRadius: dropdownFixed ? 999 : 0,
              transition: "all 200ms ease",
              width: "100%",
            };
          }}
        >
          <SideNavDropdown
            sections={posts}
            currentSection={currentSection}
            compact={dropdownFixed}
          />
        </Box>
      </Box>
    </Box>
  );
}
