import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import FAQComponent from "../../components/FAQComponent";
import data from "../../data/portfolio.json";
import { useIsomorphicLayoutEffect } from "../../utils";
import { getAllPosts } from "../../utils/api";
import { Typography, Box } from "@mui/material";
import PageContainer from "../../components/PageContainer";

const FAQ = ({ posts }) => {
  const showFAQ = useRef(data.showFAQ);
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
    showFAQ.current && (
      <PageContainer title="FAQs" isFAQ={true} paddingTop={'300px'}>
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
        
        <FAQComponent 
          posts={posts} 
          mounted={mounted} 
          onDelete={deleteFAQ}
        />

        {process.env.NODE_ENV === "development" && mounted && (
          <Box sx={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 1000 }}>
            <Button onClick={createFAQ} type={"primary"}>
              Add New FAQ +{" "}
            </Button>
          </Box>
        )}
      </PageContainer>
    )
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
