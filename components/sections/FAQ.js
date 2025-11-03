import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import FAQCard from "../FAQCard";
import { useRouter } from "next/router";
import Button from "../Button";
import { SectionHeading } from "../typography";

export default function FAQ({ posts, FAQRef }) {
  const router = useRouter();

  return (
    <Box ref={FAQRef} sx={{ paddingX: { xs: "1rem", lg: 0 } }}>
      <SectionHeading >FAQ.</SectionHeading>

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
                item
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
          <Button onClick={() => router.push("/faq")} type={"outline"}>
            <Typography variant="h4" color="secondary.dark">
              View All FAQs
            </Typography>
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}
