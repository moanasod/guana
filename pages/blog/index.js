import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import data from "../../data/portfolio.json";
import { ISOToDate, useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";
import { Typography, Box, Grid, Stack } from "@mui/material";
import { getAssetPath } from "../../utils/getAssetPath";

const FAQ = ({ posts }) => {
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
    if (showFAQ.current) stagger([text.current], { y: 30 }, { y: 0 });
    else router.push("/");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const createFAQ = () => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/faq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };

  const deleteFAQ = (slug) => {
    if (process.env.NODE_ENV === "development") {
      fetch("/api/faq", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slug,
        }),
      }).then(() => {
        router.reload(window.location.pathname);
      });
    } else {
      alert("This thing only works in development mode.");
    }
  };
  return (

      <>
        <Head>
          <title>FAQ</title>
        </Head>
        <Box
          sx={{
            maxWidth: "1200px",
            marginX: "auto",
            marginBottom: "40px",
            paddingTop: "100px", 
          }}
        >
          <TopBar isFAQ={true}/>
          <Box sx={{ marginTop: "40px" }}>
            <Typography
              variant="h1"
              ref={text}
              sx={{
                marginX: "auto",
                padding: { xs: "8px", sm: 0 },
                fontWeight: 700,
                fontSize: { xs: "3.75rem", lg: "6rem" },
                width: "100%",
              }}
            >
              FAQs.
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: "40px" }}>
              {posts &&
                posts.map((post) => (
                  <Grid item xs={12} sm={6} md={4} key={post.slug}>
                    <Box
                      sx={{ cursor: "pointer", position: "relative" }}
                      onClick={() => Router.push(`/faq/${post.slug}`)}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: "240px",
                          borderRadius: "0.5rem",
                          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          component="img"
                          src={getAssetPath(post.image)}
                          alt={post.title}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{ marginTop: "20px", fontSize: "2.25rem" }}
                      >
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          marginTop: "8px",
                          opacity: 0.5,
                          fontSize: "1.125rem",
                        }}
                      >
                        {post.preview}
                      </Typography>

                
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
     
      </>
    
  );
};

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "title",
    "image",
    "preview",
    "author",
    "date",
  ]);

  return {
    props: {
      posts: [...posts],
    },
  };
}

export default FAQ;
