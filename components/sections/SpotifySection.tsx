import { Box } from "@mui/material";
import React, { JSX, RefObject } from "react";
import { SectionHeading, SubHeading } from "../typography";

const playlistUrl =
  "https://open.spotify.com/embed/playlist/2j5aLQU2VeBgchP5MGGSdJ?utm_source=generator";

  interface SpotifySectionProps {
    spotifyRef: RefObject<HTMLDivElement>;
  }

export default function SpotifySection({ spotifyRef }: SpotifySectionProps): JSX.Element {
  return (
    <Box
      ref={spotifyRef}
      sx={{ width: "100%", overflow: "hidden", borderRadius: 2, px: 2 }}
    >
      <SectionHeading>Soundtrack for the weekend</SectionHeading>
      <SubHeading sx={{ marginBottom: "2rem" }}>
        This is an open playlist that we&apos;ll update with songs as we go.
        Feel free to add your favorites and we&apos;ll to help soundtrack out
        weekend!
      </SubHeading>
      <iframe
        src={playlistUrl}
        width="100%"
        height="352"
        style={{ border: 0, borderRadius: 12 }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </Box>
  );
}
