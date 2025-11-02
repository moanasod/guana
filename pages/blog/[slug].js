import React, { useRef, useState } from "react";
import { getPostBySlug, getAllPosts } from "../../utils/api";
import TopBar from "../../components/TopBar";
import ContentSection from "../../components/ContentSection";
import Footer from "../../components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useIsomorphicLayoutEffect } from "../../utils";
import { stagger } from "../../animations";
import Button from "../../components/Button";
import FAQEditor from "../../components/FAQEditor";
import { useRouter } from "next/router";
import { Typography, Box, Stack } from "@mui/material";

const FAQPost = ({ post }) => {
  const [showEditor, setShowEditor] = useState(false);
  const textOne = useRef();
  const textTwo = useRef();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    stagger([textOne.current, textTwo.current], { y: 30 }, { y: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>{"FAQ - " + post.title}</title>
        <meta name="description" content={post.preview} />
      </Head>
      <Box
        sx={{ 
          maxWidth: '1200px', 
          marginX: 'auto', 
          paddingTop: '50px', 
        }}
      >
        <TopBar isFAQ={true} />
        <Stack spacing={2} sx={{ marginTop: '40px' }}>
          <Box sx={{ 
            position: 'relative', 
            width: '100%', 
            // height: '384px', 
            borderRadius: '0.5rem',
            // boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}>
            <Box 
              component="img"
              src={post.image}
              alt={post.title}
              sx={{ width: 'auto', height: '100%' }}
            />
          </Box>
      
       
          <Typography
            variant="h2"
            ref={textOne}
            sx={{ 
              marginTop: '40px',
              fontSize: { xs: '1.5rem', sm: '2.25rem', lg: '3.75rem' },
              fontWeight: 700
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="h5"
            ref={textTwo}
            sx={{ 
              marginTop: '8px', 
              maxWidth: '800px',
              fontSize: '1.25rem',
              opacity: 0.5
            }}
          >
            {post.tagline}
          </Typography>
        </Stack>
        <ContentSection content={post.content}></ContentSection>
        <Footer />
      </Box>
    
      {showEditor && (
        <FAQEditor
          post={post}
          close={() => setShowEditor(false)}
          refresh={() => router.reload(window.location.pathname)}
        />
      )}
    </>
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
