import React, { JSX } from "react";
import { Typography, Box, Grid } from "@mui/material";
import FAQCard from "../Cards/FAQCard";
import { useRouter } from "next/router";
import Button from "../Buttons/Button";
import { SectionHeading } from "../typography";

type Post = {
  slug: string;
  title: string;
  image: string;
  preview: string;
  exampleQuestion: string;
  date: string;
};
interface FAQProps {
  posts: Post[];
  FAQRef: React.RefObject<HTMLDivElement>;
}

export default function FAQ({ posts, FAQRef }: FAQProps): JSX.Element {
  const router = useRouter();

  return (
    <Box ref={FAQRef} sx={{ paddingX: { xs: "1rem", lg: 0 } }}>
      <SectionHeading>FAQ.</SectionHeading>
      <Box sx={{ flexGrow: 1, marginTop: "2rem" }}>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
          }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {posts &&
            posts.map((post, index) => (
              <Grid
                size={{ md: 6, xs: 12 }}
                key={post.slug || index}
                sx={{ display: "flex", cursor: "pointer" }}
                onClick={() => router.push(`/faq#${post.slug}`)}
              >
                <FAQCard
                  name={post.title}
                  description={post.preview}
                  image={post.image}
                  exampleQuestion={post.exampleQuestion}
                />
              </Grid>
            ))}
          <Button onClick={() => router.push("/faq")}>
            <Typography variant="h4">View All FAQs</Typography>
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}
