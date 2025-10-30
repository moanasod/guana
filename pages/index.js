import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import { Box } from "@mui/material";

// Section Components
import PageHeader from "../components/sections/PageHeader";
import WeddingDetails from "../components/sections/WeddingDetails";
import Services from "../components/sections/Services";
import About from "../components/sections/About";

// Local Data
import data from "../data/portfolio.json";
import TopBar from "../components/TopBar";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
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
    <Box sx={{ position: 'relative', cursor: data.showCursor ? 'none' : 'default' }}>
      {/* {data.showCursor && <Cursor />} */}
      <Head>
        <title>{data.name}</title>
      </Head>

      <Box className="gradient-circle"></Box>
      <Box className="gradient-circle-bottom"></Box>

      <Box sx={{ maxWidth: '1200px', marginX: 'auto', marginBottom: '40px' }}>
        <TopBar
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        
        <PageHeader 
          textRefs={{ textOne, textTwo, textThree, textFour }}
          data={data}
        />
        
        <WeddingDetails 
          workRef={workRef}
          data={data}
        />
        
        <Services data={data} />
        
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <Box sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </Box>
        )}
        
        <About 
          aboutRef={aboutRef}
          data={data}
        />
        
        <Footer />
      </Box>
    </Box>
  );
}
