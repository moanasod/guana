import React, { useRef, useState } from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import ContentSection from "../../components/ContentSection";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import { useRouter } from "next/router";
import { Typography, Box, Stack } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { getAssetPath } from "../../utils/getAssetPath";

const FAQPost = ({ post }) => {
  const [showEditor, setShowEditor] = useState(false);
  const textOne = useRef();
  const textTwo = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <PageContainer title={`FAQ - ${post.title}`} isFAQ={true} paddingTop="50px">
      <Stack spacing={2} sx={{ marginTop: "40px" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "384px",
            borderRadius: "0.5rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={getAssetPath(post.image)}
            alt={post.title}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Typography
          variant="h2"
          ref={textOne}
          sx={{
            marginTop: "40px",
            fontSize: { xs: "1.5rem", sm: "2.25rem", lg: "3.75rem" },
            fontWeight: 700,
          }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="h5"
          ref={textTwo}
          sx={{
            marginTop: "8px",
            maxWidth: "800px",
            fontSize: "1.25rem",
            opacity: 0.5,
          }}
        >
          {post.tagline}
        </Typography>
      </Stack>
      <ContentSection content={post.content}></ContentSection>
    </PageContainer>
  );
};

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "date",
    "slug",
    "preview",
    "title",
    "tagline",
    "preview",
    "image",
    "content",
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default FAQPost;
