import Footer from "./Footer";
import Head from "next/head";
import { Box, Stack } from "@mui/material";
import data from "../data/portfolio.json";
import TopBar from "./TopBar";
import BackToTop from "./Buttons/BackToTop";
import React, { JSX } from "react";

interface PageContainerProps {
  children: React.ReactNode;
  title: String;
  isFAQ?: boolean;
  paddingTop?: string,
  pageTitle?: string,
}

export default function PageContainer({
  children,
  title,
  isFAQ = false,
  paddingTop = "100px",
  pageTitle,
}: PageContainerProps): JSX.Element {
  return (
    <Box sx={{ position: "relative", cursor: "default", minHeight: "100vh" }}>
      <Head>
        <title>{title || data.name}</title>
      </Head>

      <TopBar isFAQ={isFAQ}  />

      <Box className="gradient-circle" />
      <Box className="gradient-circle-bottom" />

      <Stack
        sx={{
          maxWidth: "1200px",
          marginX: "auto",
          marginTop: "6rem",
          paddingTop: paddingTop,
          padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
        }}
      >
        {children}
        <Footer />
      </Stack>

      <BackToTop />
    </Box>
  );
}
