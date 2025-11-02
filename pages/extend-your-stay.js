import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";

export default function ExtendYourStay() {
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
    <PageContainer title={`Extend Your Stay - ${data.name}`} isFAQ={true}>
      <Typography 
        ref={textRef}
        variant="h2" 
        sx={{ 
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 600,
          marginBottom: '2rem'
        }}
      >
        Extend Your Stay
      </Typography>

      <Stack spacing={4} sx={{ marginTop: '3rem' }}>
        <Box>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            For those who want to keep the trip going, Montenegro is easy to fall in love with. It&apos;s small enough to explore in just a few days, yet full of variety, with mountains, coastline, and old towns all within a few hours&apos; drive.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            How to get around
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Car rentals are available in the nearby town of Bar and at both airports. The roads are scenic and straightforward, and driving gives you the freedom to explore at your own pace.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Where to go
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            If you have a few extra days, here are some of our favourite places worth seeing:
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Old Town Kotor
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            A UNESCO World Heritage site surrounded by mountains and sea. Wander the narrow cobblestone streets, stop for coffee in the main square, and if you&apos;re up for it, hike up to the fortress for one of the best views in the country.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Perast and Our Lady of the Rocks
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Just a short drive from Kotor, this small coastal town is often called the pearl of the Adriatic. Take a boat to the island church of Our Lady of the Rocks, a peaceful and beautiful spot to spend the afternoon.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Petrovac by the Sea
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            A laid-back coastal town with a long beach, quiet restaurants, and a relaxed atmosphere. Perfect for a slower day between swimming and long lunches.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Ostrog Orthodox Monastery
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Built into a sheer cliff, this 17th-century monastery is one of Montenegro&apos;s most striking landmarks. It&apos;s both a place of pilgrimage and an incredible sight to visit, high above the valley below.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Durmitor National Park
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Deep forests, glacial lakes, and sharp mountain peaks make this one of Montenegro&apos;s most breathtaking regions. Stay at Guesthouse Nedanjo and wake up to views from another time.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Montenegrin wineries
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Montenegro&apos;s small, family-run vineyards around Skadar Lake and along the coast produce some wonderful local wines. Spend a day visiting one or two, tasting along the way, and enjoying the landscape that makes them possible.
          </Typography>
        </Box>
      </Stack>
    </PageContainer>
  );
}
