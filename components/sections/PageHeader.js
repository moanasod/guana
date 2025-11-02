import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Button from "../Button";
import HangingTags from "../HangingTags";

export default function PageHeader({ textRefs, data }) {
  return (
    <>
      <Stack
        sx={{
          marginTop: { xs: "40px", lg: "80px" },
          paddingLeft: { xs: "2rem", md: "0rem" },
          display: "flex",
          justifyContent: "center",
        }}
        direction="row"
        gap={2}
      >
        <Stack
          spacing={1}
          sx={{ marginTop: "20px", px: { xs: "0.5rem", md: "0rem" } }}
        >
          <Typography
            sx={{ fontSize: { xs: "2.25rem", md: "2.75rem" } }}
            ref={textRefs.textOne}
          >
            {data.headerTaglineOne}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "2.25rem", md: "2.75rem" } }}
            ref={textRefs.textTwo}
          >
            {data.headerTaglineTwo}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "2.25rem", md: "2.75rem" } }}
            ref={textRefs.textThree}
          >
            {data.headerTaglineThree}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "2.25rem", md: "2.75rem" } }}
            ref={textRefs.textFour}
          >
            {data.headerTaglineFour}
          </Typography>
        </Stack>

        {/* <Socials className="mt-2 laptop:mt-5" /> */}
        {/* <Button variant="h4"> RSVP</Button> */}
        <Box
          component="img"
          src={`/images/dancing.svg`}
          alt="Toggle theme"
          sx={{ width: "50%", height: "auto" }}
        />
      </Stack>
     <HangingTags />
      </>
  );
}
