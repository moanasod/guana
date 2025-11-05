import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack, Divider } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";
import ImageGrid from "../components/ImageGrid";

import {
  SectionHeading,
  BodyText,
  ListItem,
  List,
  ExternalLink,
  ContentSection,
  SubSection,
} from "../components/typography";

const montenegroImages = [
  { img: 'https://www.wedinspire.com/wp-content/uploads/2022/11/2022.talici-hill-montenegro-wedding-venue-events-mice-14-1400x934-1.jpg', title: 'Old Town Kotor' },
  { img: 'https://www.wedinspire.com/wp-content/uploads/2025/02/Property-Photos-1-1400x1050.jpg', title: 'Perast' },
  { img: 'https://www.wedinspire.com/wp-content/uploads/2024/12/Talici-Hill-Rustic-Villas-Montenegro.-Luxury-Events-Space-Weddings-Tourist-Rental-3-2-1400x1050.jpg', title: 'Durmitor National Park' },
  { img: 'https://www.wedinspire.com/wp-content/uploads/2025/02/Property-Photos-15-1400x933.jpg', title: 'Skadar Lake' },
  { img: 'https://www.wedinspire.com/wp-content/uploads/2022/10/2022.talici-hill-montenegro-wedding-venue-events-mice-1-1400x934.jpg', title: 'Petrovac Beach' },
  { img: 'https://www.wedinspire.com/wp-content/uploads/2024/12/Talici-Hill-Rustic-Villas-Montenegro.-Luxury-Events-Space-Weddings-Tourist-Rental-4-1400x1050.jpg', title: 'Ostrog Monastery' },
  { img: 'https://www.wedinspire.com/wp-content/uploads/2022/10/2022.talici-hill-montenegro-wedding-venue-events-mice-15-1400x934.jpg', title: 'Ostrog Monastery' },
  { img: 'https://www.wedinspire.com/wp-content/uploads/2024/12/Talici-Hill-Rustic-Villas-Montenegro.-Luxury-Events-Space-Weddings-Tourist-Rental-5-1400x1050.jpg', title: 'Ostrog Monastery' },
];

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
      <ImageGrid images={montenegroImages} maxHeight={350} />
      <Typography
        ref={textRef}
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 600,
          marginTop: "2rem",

        }}
      >
        The Venue
      </Typography>

      <Stack spacing={4} sx={{ marginTop: "1rem" }}>
        <ContentSection>
 
          <BodyText>
            Talići Hill sits quietly above the coast, surrounded by olive trees,
            with an impressive view of the Adriatic Sea. It&apos;s a 321 year
            old restored stone estate with gardens that look out over the sea
            and hills. The place feels private but open, made for gathering,
            eating, and celebrating together. As the sun sets, the whole hill
            turns golden.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>Where</SectionHeading>
          <BodyText sx={{ fontWeight: 500 }}>
            Talici Hill - Rustic Villas
          </BodyText>
          <BodyText >
            Talići (Kod Čakalovića), Brca 85355 Sutomore, Bar Municipality,
            Montenegro
          </BodyText>
          <BodyText>
            <ExternalLink href="https://maps.app.goo.gl/zKpjJsVbuiBifxHi6">
              View on Google Maps
            </ExternalLink>
          </BodyText>
          <BodyText>
            Talići Hill is in the small village of Talići, just outside Sutomore
            in southern Montenegro. It&apos;s about 40 minutes from Podgorica
            Airport and around 1 hour and 15 minutes from Tivat Airport.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>How to get there</SectionHeading>
          <BodyText >
            If you&apos;re arriving on the 8th or 9th of May, we&apos;ll have a
            shuttle from Podgorica Airport to the venue. Look for a sign that
            says <strong>&quot;Moana and Gustav Wedding Shuttle&quot;</strong>.
          </BodyText>
          <BodyText >
            If you&apos;re arriving on other days or different flights, taxis
            and car rentals are available. See Travel information for details.
          </BodyText>
          <BodyText>
            The road to the villa is paved but narrow and steep, so we recommend
            taking the shuttle or a taxi rather than walking.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>History</SectionHeading>
          <BodyText>
            The estate dates back to the 17th century and was once a small
            hillside farm. Over time it&apos;s been rebuilt with care, keeping
            its stone walls and terraces but adding a few simple modern touches.
            The result is a place that still feels part of the landscape, quiet,
            open, and a little wild.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>What to expect</SectionHeading>
          <BodyText>
            Most of the celebration will take place outdoors. The ground is a
            mix of pebbles, grass, and old stone, so comfortable shoes are a
            good idea. The ceremony will take place in the late afternoon,
            followed by dinner outdoors, with the after party inside at
            midnight.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>Parking</SectionHeading>
          <BodyText>Free parking is available on site.</BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>House rules</SectionHeading>
          <BodyText sx={{ marginBottom: "1rem" }}>
            To help us take good care of the villa, please note:
          </BodyText>
          <List>
            <ListItem>
              Smoking is not allowed inside the villa. Fine: €250.
            </ListItem>
            <ListItem>
              Glass or ceramic items should be kept away from the pool area.
              Fine: €250 if an item ends up in the pool.
            </ListItem>
            <ListItem>
              Outdoor music ends at midnight, after which the celebration
              continues indoors.
            </ListItem>
            <ListItem>
              Only guests staying in the villa may sleep there.
            </ListItem>
          </List>
        </ContentSection>

        <BodyText sx={{ fontStyle: "italic", marginTop: "1rem" }}>
          We can&apos;t wait to share this beautiful place with you and
          celebrate together as the sun sets over the Adriatic!
        </BodyText>

        <Divider />

        <Box>
          <SectionHeading variant="h4" sx={{ marginBottom: "1rem" }}>
            Practical tips
          </SectionHeading>

          <Stack>
            <SubSection title="Currency">
              <BodyText>
                Montenegro uses the Euro (€). Most hotels and restaurants accept
                cards, but smaller shops and taxis often prefer cash. ATMs are
                widely available.
              </BodyText>
            </SubSection>

            <SubSection title="Weather">
              <BodyText>
                Early May is mild and comfortable, with daytime temperatures
                around 20–24°C and cooler evenings around 14–16°C. Expect mostly
                sunny days with a small chance of light rain. A light jacket or
                wrap for the evenings is recommended.
              </BodyText>
            </SubSection>

            <SubSection title="Language">
              <BodyText>
                The local language is Montenegrin, but English is widely spoken in
                hotels, restaurants, and taxis.
              </BodyText>
            </SubSection>

            <SubSection title="Electricity">
              <BodyText>
                Standard European sockets (Type C and F, 230V). No adapter needed
                for EU plugs.
              </BodyText>
            </SubSection>

            <SubSection title="Emergency number">
              <BodyText>
                For emergencies in Montenegro, call <strong>112</strong>{" "}
                (English-speaking operators are available).
              </BodyText>
            </SubSection>

            <SubSection title="Local taxi">
              <BodyText sx={{ marginBottom: "0.5rem" }}>
                <strong>Green Taxi</strong>{" "}
                <ExternalLink href="tel:+38269888801">
                  +382 69 888 801
                </ExternalLink>
              </BodyText>
              <BodyText>Operates in the Sutomore and Bar area.</BodyText>
            </SubSection>
          </Stack>
        </Box>
      </Stack>
    </PageContainer>
  );
}
