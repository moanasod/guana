import React from "react";
import Button from "./Button";
import { Box } from "@mui/material";

import yourData from "../data/portfolio.json";

export default function Socials({ className }) {
  return (
    <Box className={`${className} link`} sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </Box>
  );
}

