import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Button from "../Button";

export default function PageHeader({ textRefs, data }) {
  return (
    <Box sx={{ marginTop: { xs: '40px', lg: '80px' } }}>
      <Stack spacing={1} sx={{ marginTop: '20px' }}>
        <Typography 
          variant="h2"
          ref={textRefs.textOne}
        >
          {data.headerTaglineOne}
        </Typography>
        <Typography 
          variant="h2"
          ref={textRefs.textTwo}
        >
          {data.headerTaglineTwo}
        </Typography>
        <Typography 
          variant="h2"
          ref={textRefs.textThree}
        >
          {data.headerTaglineThree}
        </Typography>
        <Typography 
          variant="h2"
          ref={textRefs.textFour}
        >
          {data.headerTaglineFour}
        </Typography>
      </Stack>

      {/* <Socials className="mt-2 laptop:mt-5" /> */}
      <Button variant="h4"> RSVP</Button>
    </Box>
  );
}

