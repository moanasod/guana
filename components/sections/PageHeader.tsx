import React, { JSX, RefObject } from "react";
import { Typography, Box, Stack } from "@mui/material";
import Button from "../Buttons/Button";
import HangingTags from "../HangingTags";
import { getAssetPath } from "../../utils/getAssetPath";
import RsvpButton from "../Buttons/RsvpButton";
import { useTheme } from "next-themes";

interface PageHeaderProps {
  textRefs: {
    textOne: RefObject<HTMLDivElement>;
    textTwo: RefObject<HTMLDivElement>;
    textThree: RefObject<HTMLDivElement>;
    textFour: RefObject<HTMLDivElement>;
  };
  data: {
    headerTaglineOne: string,
    headerTaglineTwo: string,
    headerTaglineThree: string,
    headerTaglineFour: string,
  }
}

export default function PageHeader({ textRefs, data }: PageHeaderProps): JSX.Element {
  const { theme } = useTheme();
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
          src={
            theme === "dark"
              ? getAssetPath("/images/guana_dark.png")
              : getAssetPath("/images/guana_light.png")
          }
          alt="Toggle theme"
          sx={{ width: { xs: "90%", md: "50%" }, height: "auto" }}
        />
      </Stack>
      <HangingTags />
      <RsvpButton />
    </>
  );
}
