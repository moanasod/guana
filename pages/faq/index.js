import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Buttons/Button";
import data from "../../data/portfolio.json";
import { useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";
import { Typography, Box, Stack, Divider } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import ContentSection from "../../components/ContentSection";

const FAQ = ({ posts }) => {
  const showFAQ = useRef(data.showFAQ);
  const text = useRef();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (text.current) {
      stagger(
        [text.current],
        { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
        { y: 0, x: 0, transform: "scale(1)" }
      );
      if (showFAQ.current) stagger([text.current], { y: 30 }, { y: 0 });
      else router.push("/");
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100; // Header offset
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  return (
    showFAQ.current && (
      <PageContainer title="FAQs" isFAQ={true} paddingTop={"300px"}>
        <Typography
          variant="h1"
          ref={text}
          sx={{
            marginX: "auto",
            padding: { xs: "8px", sm: 0 },
            fontWeight: 700,
            fontSize: { xs: "3.75rem", lg: "6rem" },
            width: "100%",
            marginBottom: "3rem",
          }}
        >
          FAQs.
        </Typography>

        <Stack spacing={6}>
          {posts &&
            posts.map((post, index) => (
              <Box
                key={post.slug}
                id={post.slug}
                sx={{
                  scrollMarginTop: "120px",
                  paddingTop: "2rem",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                  }}
                >
                  {post.title}
                </Typography>

                {post.tagline && (
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: "1.5rem",
                      opacity: 0.7,
                      fontStyle: "italic",
                    }}
                  >
                    {post.tagline}
                  </Typography>
                )}

                <ContentSection content={post.content} />

                {index < posts.length - 1 && (
                  <Divider sx={{ marginTop: "3rem" }} />
                )}
              </Box>
            ))}
        </Stack>
      </PageContainer>
    )
  );
};

export async function getStaticProps() {
  const posts = getAllPosts([
    "slug",
    "title",
    "tagline",
    "image",
    "preview",
    "content",
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
