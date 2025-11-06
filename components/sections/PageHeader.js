import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Button from "../Buttons/Button";
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
          <Typography variant="h3" ref={textRefs.textOne}>
            {data.headerTaglineOne}
          </Typography>
          <Typography variant="h4" ref={textRefs.textTwo}>
            {data.headerTaglineTwo}
          </Typography>
          <Typography variant="h4" ref={textRefs.textThree}>
            {data.headerTaglineThree}
          </Typography>
          <Typography variant="h4" ref={textRefs.textFour}>
            {data.headerTaglineFour}
          </Typography>
        </Stack>
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
