import React from "react";
import Router from "next/router";
import { Typography, Box, Grid } from "@mui/material";
import Button from "./Button";

export default function FAQComponent({ posts, mounted, onDelete }) {
  return (
    <Grid container spacing={4} sx={{ marginTop: "40px" }}>
      {posts &&
        posts.map((post) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={post.slug}>
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
                  src={post.image || "/images/dancing.svg"}
                  alt={post.title}
                  sx={{
                    width: "auto",
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
                  opacity: 0.8,
                  fontSize: "1.125rem",
                }}
              >
                {post.preview}
              </Typography>

              {process.env.NODE_ENV === "development" && mounted && (
                <Box sx={{ position: "absolute", top: 0, right: 0 }}>
                  <Button
                    onClick={(e) => {
                      onDelete(post.slug);
                      e.stopPropagation();
                    }}
                    type={"primary"}
                  >
                    Delete
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
    </Grid>
  );
}
