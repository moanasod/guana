import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";

export default function TheVenue() {
  const textRef = useRef();
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textRef.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <PageContainer title={`The Venue - ${data.name}`} isFAQ={true}>
      <Typography 
        ref={textRef}
        variant="h2" 
        sx={{ 
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 600,
          marginBottom: '2rem'
        }}
      >
        The Venue
      </Typography>

      <Stack spacing={4} sx={{ marginTop: '3rem' }}>
        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Intro
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Talici Hill sits quietly above the coast, surrounded by olive trees, with an impressive view of the Adriatic Sea. It&apos;s a restored stone estate with gardens that look out over the sea and hills. The place feels private but open, made for gathering, eating, and celebrating together. As the sun sets, the whole hill turns golden — it&apos;s hard to imagine a better setting for a weekend with friends and family.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Where
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Talici Hill is in the small village of Talići, just outside Sutomore in southern Montenegro. It&apos;s about 40 minutes from Podgorica Airport and around 1 hour and 15 minutes from Tivat Airport.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            How to get there
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            If you&apos;re arriving on the 8th or 9th of May, we&apos;ll have a shuttle from Podgorica Airport to the venue. Look for a sign that says <strong>&quot;Moana and Gustav Wedding Shuttle&quot;</strong>.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            If you&apos;re coming on other days or different flights, taxis and car rentals are available. See Travel Information for details.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            History
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            The estate dates back to the 17th century and was once a small hillside farm. Over time it&apos;s been rebuilt with care, keeping its stone walls and terraces but adding a few simple modern touches. The result is a place that still feels part of the landscape, quiet, open, and a little wild.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            What to expect
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Most of the celebration will take place outdoors. The ground is a mix of pebbles, grass, and old stone, so comfortable shoes are a good idea. The ceremony will take place in the late afternoon, followed by dinner and dancing as the light fades.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Parking
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Free parking is available on site.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Venue rules
          </Typography>
          <Typography variant="body1" component="ul" sx={{ fontSize: '1.125rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>No smoking inside the villa (fine of 250 €).</li>
            <li style={{ marginBottom: '0.75rem' }}>If a glass or ceramic item ends up in the pool (fine of 250 €).</li>
            <li style={{ marginBottom: '0.75rem' }}>No music outside after midnight, after that the party continues indoors.</li>
            <li>Guests who have not checked into the Villa are not allowed to sleep there.</li>
          </Typography>
        </Box>
      </Stack>
    </PageContainer>
  );
}
