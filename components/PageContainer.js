import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import { Box, Stack } from "@mui/material";
import data from "../data/portfolio.json";
import TopBar from "../components/TopBar";

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
          marginBottom: "40px",
          marginTop: "50px",
          paddingTop: paddingTop,
          padding: { xs: '1rem', md: '2rem' },
        }}
      >
        {children}
        <Footer />
      </Stack>

      {/* This button should not go into production */}
      {process.env.NODE_ENV === "development" && (
        <Box sx={{ position: "fixed", bottom: "20px", right: "20px" }}>
          <Link href="/edit">
            <Button type="primary">Edit Data</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
