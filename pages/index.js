import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import { Box, Stack } from "@mui/material";
import PageHeader from "../components/sections/PageHeader";
import WeddingDetails from "../components/sections/WeddingDetails";
import FAQ from "../components/sections/FAQ";
import About from "../components/sections/About";
import Itinerary from "../components/sections/Itinerary";
import data from "../data/portfolio.json";
import TopBar from "../components/TopBar";
import BackToTop from "../components/Buttons/BackToTop";
import { getAllPosts } from "../utils/api";
import { getAssetPath } from "../utils/getAssetPath";
// import SpotifySection from "../components/sections/SpotifySection";

const HEADER_OFFSET = 100;

export default function Home({ posts }) {
  const workRef = useRef();
  const itineraryRef = useRef();
  const FAQRef = useRef();
  const aboutRef = useRef();
  const spotifyRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

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

  const handleChecklistScroll = () => {
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
        sx={{ maxWidth: "1200px", marginX: "auto", marginBottom: 5 }}
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
          <Box
            component="img"
            src={getAssetPath("/images/coupleJump.svg")}
            alt="couple jumping between glasses"
            sx={{
              width: { xs: "100%", md: "60%" },
              marginY: { xs: "-80px", md: "-140px" },
              height: "auto",
              alignSelf: "center",
            }}
          />

          <About aboutRef={aboutRef} data={data} />
          {/* <SpotifySection spotifyRef={spotifyRef} /> */}
        </Stack>
        <Footer />
      </Stack>

      <BackToTop />
    </Box>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "title",
    "image",
    "preview",
    "exampleQuestion",
    "date",
  ]);

  return {
    props: {
      posts: [...posts],
    },
  };
}
