import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";

// Section Components
import PageHeader from "../components/sections/PageHeader";
import WeddingDetails from "../components/sections/WeddingDetails";
import FAQ from "../components/sections/FAQ";
import About from "../components/sections/About";
import Itinerary from "../components/sections/Itinerary";
// Local Data
import data from "../data/portfolio.json";
import TopBar from "../components/TopBar";
import { getAllPosts } from "../utils/api";

export default function Home({ posts }) {
  // Ref
  const workRef = useRef();
  const itineraryRef = useRef();
  const FAQRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const HEADER_OFFSET = 100;

  const handleItineraryScroll = () => {
    window.scrollTo({
      top: itineraryRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - HEADER_OFFSET,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleFAQScroll = () => {
    window.scrollTo({
      top: FAQRef.current.offsetTop - HEADER_OFFSET,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - HEADER_OFFSET,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <Box sx={{ position: "relative", cursor: "default" }}>
      <Head>
        <title>{data.name}</title>
      </Head>

      <Box className="gradient-circle"></Box>
      <Box className="gradient-circle-bottom"></Box>

      <Stack
        sx={{ maxWidth: "1200px", marginX: "auto", marginBottom: "40px" }}
        gap={2}
      >
        <TopBar
          handleWorkScroll={handleWorkScroll}
          handleItineraryScroll={handleItineraryScroll}
          handleFAQScroll={handleFAQScroll}
        />

        <PageHeader
          textRefs={{ textOne, textTwo, textThree, textFour }}
          data={data}
        />
        <Stack gap={4}>
          <Itinerary itineraryRef={itineraryRef} />

          <WeddingDetails workRef={workRef} data={data} />

          <FAQ posts={posts} FAQRef={FAQRef} />
          <About aboutRef={aboutRef} data={data} />
        </Stack>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <Box sx={{ position: "fixed", bottom: "20px", right: "20px" }}>
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </Box>
        )}

        <Footer />
      </Stack>
    </Box>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["slug", "title", "image", "preview", "date"]);

  return {
    props: {
      posts: [...posts],
    },
  };
}
