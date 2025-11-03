import React, { useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import FAQCard from "../FAQCard";
import { useRouter } from "next/router";
import Button from "../Button";
import { SectionHeading } from "../typography";

export default function FAQ({ posts, FAQRef }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNavigation = (path) => {
    setLoading(true);
    router.push(path);
  };

  // if (loading) {
  //   return (
  //     <Box
  //       ref={FAQRef}
  //       sx={{
  //         padding: { xs: "8px", lg: 0 },
  //         width: "100%",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         minHeight: "400px",
  //       }}
  //     >
  //       <CircularProgress size={60} />
  //     </Box>
  //   );
  // }

  return (
    <Box
      ref={FAQRef}
      sx={{
        // marginTop: { xs: '40px', lg: '120px' },
        padding: { xs: "8px", lg: 0 },
        width: "100%",
      }}
    >
      <SectionHeading>
        FAQ.
      </SectionHeading>

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
                onClick={() => handleNavigation(`/faq#${post.slug}`)}
              >
                <FAQCard
                disabled={loading}
                  name={post.title}
                  description={post.preview}
                  image={post.image}
                  exampleQuestion={post.exampleQuestion}
                />
              </Grid>
            ))}
          <Button onClick={() => handleNavigation("/faq")} type={"outline"}>
            <Typography variant="h4" color="secondary.dark">
              View All FAQs
            </Typography>
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}
