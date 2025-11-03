import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Button from "../Button";
import HangingTags from "../HangingTags";
import { getAssetPath } from "../../utils/getAssetPath";

export default function PageHeader({ textRefs, data }) {
  return (
    <>
      <Stack
        sx={{
          marginTop: { xs: "40px", lg: "80px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        direction={{ xs: "column", md: "row" }}
        gap={2}
      >
        <Stack
          spacing={1}
          sx={{
            marginTop: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "2.25rem", md: "2.75rem" } }}
            ref={textRefs.textOne}
          >
            {data.headerTaglineOne}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "2rem", md: "2.3rem" } }}
                      ref={textRefs.textTwo}
          >
            {data.headerTaglineTwo}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "2rem", md: "2.3rem" } }}
            ref={textRefs.textThree}
          >
            {data.headerTaglineThree}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "2rem", md: "2.3rem" } }}
            ref={textRefs.textFour}
          >
            {data.headerTaglineFour}
          </Typography>
        </Stack>

        {/* <Socials className="mt-2 laptop:mt-5" /> */}
        {/* <Button variant="h4"> RSVP</Button> */}
        <Box
          component="img"
          src={getAssetPath("/images/dancing.svg")}
          alt="Toggle theme"
          sx={{ width: "50%", height: "auto" }}
        />
      </Stack>
      <HangingTags />
    </>
  );
}
