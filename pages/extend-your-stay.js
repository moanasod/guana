import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack, Divider } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";
import { getAssetPath } from "../utils/getAssetPath";
import { Grid } from "@mui/material";
import ImageGrid from "../components/ImageGrid";
import {
  SectionHeading,
  BodyText,
  ListItem,
  List,
  ContentSection,
  SubSection,
} from "../components/typography";

const montenegroImages = [
  { img: "/images/montenegro/image1.png", title: "Old Town Kotor" },
  { img: "/images/montenegro/image3.png", title: "Durmitor National Park" },
  { img: "/images/montenegro/image4.png", title: "Skadar Lake" },
  { img: "/images/montenegro/image5.png", title: "Petrovac Beach" },
  { img: "/images/montenegro/image6.png", title: "Ostrog Monastery" },
  { img: "/images/montenegro/image7.png", title: "Ostrog Monastery" },
  { img: "/images/montenegro/image8.png", title: "Ostrog Monastery" },
  { img: "/images/montenegro/image9.png", title: "Ostrog Monastery" },
];

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
      <ImageGrid images={montenegroImages} maxHeight={350} />
      <Typography
        ref={textRef}
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 600,
          marginY: "2rem",
        }}
      >
        Extend Your Stay
      </Typography>

      <Stack spacing={4} sx={{ marginTop: "1rem" }}>
        <Box>
          <BodyText>
            For those who want to keep the trip going, Montenegro is easy to
            fall in love with. It&apos;s small enough to explore in just a few
            days, yet full of variety, with mountains, coastline, and historic
            towns all within a few hours&apos; drive.
          </BodyText>
        </Box>

        <Divider />

        <Grid container direction="row" spacing={2} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }}>
            <SectionHeading variant="h4">How to get around</SectionHeading>
            <BodyText>
              Car rentals are available in the nearby town of Bar and at both
              airports. The roads are scenic and straightforward, winding
              through olive groves, coastal villages, and mountain passes.
              Driving gives you the freedom to explore at your own pace and stop
              wherever the view demands it.
            </BodyText>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={getAssetPath("/images/map.png")}
              sx={{
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease-out",
                borderRadius: "8px",
              }}
            />
          </Grid>
        </Grid>

        <Divider />

        <Box>
          <SectionHeading variant="h4" sx={{ marginBottom: "1.5rem" }}>
            Where to go
          </SectionHeading>
          <BodyText sx={{ marginBottom: "2rem" }}>
            If you have a few extra days, here are some of our favourite places
            worth seeing — many recommended by our local wedding planners.
          </BodyText>

          {/* Old Town Bar */}
          <ContentSection>
            <SectionHeading variant="h6">
              Old Town Bar – 15 minutes away
            </SectionHeading>
            <BodyText>
              Just down the hill from Talići Hill, this ancient fortified town
              sits beneath Mount Rumija. Explore the ruins, narrow lanes, and
              small cafés. Stop by Stara Čaršija for traditional Montenegrin
              dishes or Citadela for views across the valley.
            </BodyText>
          </ContentSection>

          {/* Petrovac */}
          <ContentSection>
            <SectionHeading variant="h6">
              Petrovac by the Sea – 25 minutes away
            </SectionHeading>
            <BodyText>
              A peaceful coastal town known for its long promenade, calm sea,
              and excellent restaurants. Perfect for a slower day between
              swimming and long lunches. Local favourites include Riva and
              Amfora along the waterfront.
            </BodyText>
          </ContentSection>

          {/* Durmitor */}
          <ContentSection>
            <SectionHeading variant="h6">
              Durmitor National Park – 3 hours away
            </SectionHeading>
            <BodyText>
              A world away from the coast, Durmitor is Montenegro&apos;s
              mountain heart — deep forests, glacial lakes, and dramatic peaks.
              Stay overnight in Žabljak to explore the Black Lake, hike gentle
              trails, or simply enjoy crisp mountain air and silence.
            </BodyText>
          </ContentSection>

          {/* Skadar Lake */}
          <ContentSection>
            <SectionHeading variant="h6">
              Skadar Lake National Park – 50 minutes away
            </SectionHeading>
            <BodyText>
              One of Montenegro&apos;s most beautiful natural areas. Visit the
              lakeside village of Virpazar, take a boat tour among the water
              lilies, and stop at a small family winery to taste local Vranac
              and Krstač wines.
            </BodyText>
          </ContentSection>

          {/* Kotor */}
          <ContentSection>
            <SectionHeading variant="h6">
              Old Town Kotor – 1 hour 10 minutes away
            </SectionHeading>
            <BodyText>
              A UNESCO World Heritage site surrounded by mountains and sea.
              Wander the narrow cobblestone streets, stop for coffee in the main
              square, and if you&apos;re up for it, climb to the fortress for
              one of the best views in the country.
            </BodyText>
          </ContentSection>

          {/* Perast */}
          <ContentSection>
            <SectionHeading variant="h6">
              Perast and Our Lady of the Rocks – 1 hour 20 minutes away
            </SectionHeading>
            <BodyText>
              Just beyond Kotor, this small baroque town is often called the
              pearl of the Adriatic. Take a boat to the island church of Our
              Lady of the Rocks, a peaceful and photogenic spot to spend the
              afternoon.
            </BodyText>
          </ContentSection>

          {/* Ostrog */}
          <ContentSection>
            <SectionHeading variant="h6">
              Ostrog Monastery – 1 hour 30 minutes away
            </SectionHeading>
            <BodyText>
              Built into a cliff, this 17th-century monastery is one of
              Montenegro&apos;s most striking landmarks. Both a place of
              pilgrimage and an incredible sight, it offers breathtaking views
              across the valley below.
            </BodyText>
          </ContentSection>

          <Divider sx={{ marginY: "2rem" }} />

          <Box
            component="img"
            src={getAssetPath(
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdeih43ym53wif.cloudfront.net%2Fkotor-bay-montenegro-shutterstock_259595084_5310e91dab.jpeg&f=1&nofb=1&ipt=d5cf5f152591f87149e195226cc40fc6325b43142802854529b928f216ce63b5"
            )}
            sx={{
              top: 0,
              left: 0,
              maxHeight: "300px",
              width: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease-out",
              zIndex: 0,
              borderRadius: "8px",
            }}
          />

          {/* Montenegrin Dishes */}
          <ContentSection>
            <SectionHeading variant="h5" sx={{ marginTop: "1.5rem" }}>
              🍽 Montenegrin Dishes to Try
            </SectionHeading>

            <SubSection title="Seafood">
              <List sx={{ marginBottom: "1.5rem" }}>
                <ListItem>Black risotto (crni rižot)</ListItem>
                <ListItem>Buzara (shellfish in wine & garlic sauce)</ListItem>
                <ListItem>Octopus salad</ListItem>
                <ListItem>Mixed seafood platter</ListItem>
              </List>
            </SubSection>

            <SubSection title="Meat & Traditional">
              <List sx={{ marginBottom: "1.5rem" }}>
                <ListItem>Ćevapi (grilled sausages)</ListItem>
                <ListItem>Lamb under the bell (jagnjetina ispod sača)</ListItem>
                <ListItem>Njeguški pršut (smoked ham)</ListItem>
                <ListItem>Njeguški steak (with cheese & ham)</ListItem>
              </List>
            </SubSection>

            <SubSection title="Desserts">
              <List sx={{ marginBottom: "1.5rem" }}>
                <ListItem>Palačinke (crepes)</ListItem>
                <ListItem>Krempita (cream cake)</ListItem>
                <ListItem>Local ice cream</ListItem>
              </List>
            </SubSection>

            <SubSection title="Drinks">
              <List>
                <ListItem>Vranac (red wine)</ListItem>
                <ListItem>Krstač (white wine)</ListItem>
                <ListItem>Rakija (fruit brandy)</ListItem>
                <ListItem>Nikšićko pivo (local beer)</ListItem>
              </List>
            </SubSection>
          </ContentSection>

          {/* Dining Tips */}
          <ContentSection>
            <SectionHeading variant="h5">🍷 Dining Tips</SectionHeading>
            <List>
              <ListItem>
                <strong>Reservations:</strong> Recommended in summer
              </ListItem>
              <ListItem>
                <strong>Meal times:</strong> Breakfast 7–10 AM, Lunch 12–15,
                Dinner after 19:00
              </ListItem>
              <ListItem>
                <strong>Tipping:</strong> 10% for good service (cash preferred)
              </ListItem>
              <ListItem>
                <strong>Ordering:</strong> Ask for daily specials; seafood
                priced by weight
              </ListItem>
              <ListItem>
                <strong>Payment:</strong> Cards accepted in most places, but
                carry cash for small shops
              </ListItem>
            </List>
          </ContentSection>
        </Box>
      </Stack>
    </PageContainer>
  );
}
