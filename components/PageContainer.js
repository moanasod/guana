import Footer from "../components/Footer";
import Head from "next/head";
import { Box, Stack } from "@mui/material";
import data from "../data/portfolio.json";
import TopBar from "../components/TopBar";
import BackToTop from "./Buttons/BackToTop";

export default function PageContainer({
  children,
  title,
  isFAQ = false,
  paddingTop = "100px",
}) {
  return (
    <Box sx={{ position: "relative", cursor: "default", minHeight: "100vh" }}>
      <Head>
        <title>{title || data.name}</title>
      </Head>

      <TopBar isFAQ={isFAQ} />

      <Box className="gradient-circle"/>
      <Box className="gradient-circle-bottom"/>

      <Stack
        sx={{
          maxWidth: "1200px",
          marginX: "auto",
          marginTop: '4rem',
          paddingTop: paddingTop,
          padding: { xs: '1rem', md: '2rem' },
        }}
      >
        {children}
        <Footer />
      </Stack>

      <BackToTop />
    </Box>
  );
}
