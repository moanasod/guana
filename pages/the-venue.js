import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack, Link, Divider } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";

// Reusable Components
function SectionHeading({ children, variant = "h5", sx = {} }) {
  const defaultSx = {
    marginBottom: '1rem',
    fontWeight: 500,
    ...sx
  };
  return (
    <Typography variant={variant} sx={defaultSx}>
      {children}
    </Typography>
  );
}

function BodyText({ children, sx = {} }) {
  return (
    <Typography 
      variant="body1" 
      sx={{ fontSize: '1.125rem', lineHeight: 1.8, ...sx }}
    >
      {children}
    </Typography>
  );
}

function ListItem({ children }) {
  return (
    <Typography 
      component="li" 
      variant="body1" 
      sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '0.75rem', display: 'list-item' }}
    >
      {children}
    </Typography>
  );
}

function ExternalLink({ href, children }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener" 
      sx={{ color: 'primary.dark', textDecoration: 'underline' }}
    >
      {children}
    </Link>
  );
}

function ContentSection({ children, sx = {} }) {
  return (
    <Box sx={{ marginBottom: '2rem', ...sx }}>
      {children}
    </Box>
  );
}

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
        <ContentSection>
          <SectionHeading variant="h4">Intro</SectionHeading>
          <BodyText>
            Talići Hill sits quietly above the coast, surrounded by olive trees, with an impressive view of the Adriatic Sea. It&apos;s a 321 year old restored stone estate with gardens that look out over the sea and hills. The place feels private but open, made for gathering, eating, and celebrating together. As the sun sets, the whole hill turns golden.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading variant="h4">Where</SectionHeading>
          <BodyText sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
            Talici Hill - Rustic Villas
          </BodyText>
          <BodyText sx={{ marginBottom: '1rem' }}>
            Talići (Kod Čakalovića), Brca 85355 Sutomore, Bar Municipality, Montenegro
          </BodyText>
          <BodyText sx={{ marginBottom: '1rem' }}>
            <ExternalLink href="https://maps.app.goo.gl/YourGoogleMapsLink">
              View on Google Maps
            </ExternalLink>
          </BodyText>
          <BodyText>
            Talići Hill is in the small village of Talići, just outside Sutomore in southern Montenegro. It&apos;s about 40 minutes from Podgorica Airport and around 1 hour and 15 minutes from Tivat Airport.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading variant="h4">How to get there</SectionHeading>
          <BodyText sx={{ marginBottom: '1rem' }}>
            If you&apos;re arriving on the 8th or 9th of May, we&apos;ll have a shuttle from Podgorica Airport to the venue. Look for a sign that says <strong>&quot;Moana and Gustav Wedding Shuttle&quot;</strong>.
          </BodyText>
          <BodyText sx={{ marginBottom: '1rem' }}>
            If you&apos;re arriving on other days or different flights, taxis and car rentals are available. See Travel information for details.
          </BodyText>
          <BodyText>
            The road to the villa is paved but narrow and steep, so we recommend taking the shuttle or a taxi rather than walking.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading variant="h4">History</SectionHeading>
          <BodyText>
            The estate dates back to the 17th century and was once a small hillside farm. Over time it&apos;s been rebuilt with care, keeping its stone walls and terraces but adding a few simple modern touches. The result is a place that still feels part of the landscape, quiet, open, and a little wild.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading variant="h4">What to expect</SectionHeading>
          <BodyText>
            Most of the celebration will take place outdoors. The ground is a mix of pebbles, grass, and old stone, so comfortable shoes are a good idea. The ceremony will take place in the late afternoon, followed by dinner outdoors, with the after party inside at midnight.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading variant="h4">Parking</SectionHeading>
          <BodyText>
            Free parking is available on site.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading variant="h4">House rules</SectionHeading>
          <BodyText sx={{ marginBottom: '1rem' }}>
            To help us take good care of the villa, please note:
          </BodyText>
          <Box component="ul" sx={{ marginLeft: '1.5rem', paddingLeft: '1rem' }}>
            <ListItem>
              Smoking is not allowed inside the villa. Fine: €250.
            </ListItem>
            <ListItem>
              Glass or ceramic items should be kept away from the pool area. Fine: €250 if an item ends up in the pool.
            </ListItem>
            <ListItem>
              Outdoor music ends at midnight, after which the celebration continues indoors.
            </ListItem>
            <ListItem>
              Only guests staying in the villa may sleep there.
            </ListItem>
          </Box>
        </ContentSection>

        <Box>
          <BodyText sx={{ fontStyle: 'italic' }}>
            We can&apos;t wait to share this beautiful place with you and celebrate together as the sun sets over the Adriatic!
          </BodyText>
        </Box>

        <Divider />

        <ContentSection>
          <SectionHeading variant="h4" sx={{ marginBottom: '2rem' }}>
            Practical tips
          </SectionHeading>

          <ContentSection>
            <SectionHeading>Currency</SectionHeading>
            <BodyText>
              Montenegro uses the Euro (€). Most hotels and restaurants accept cards, but smaller shops and taxis often prefer cash. ATMs are widely available.
            </BodyText>
          </ContentSection>

          <ContentSection>
            <SectionHeading>Weather</SectionHeading>
            <BodyText>
              Early May is mild and comfortable, with daytime temperatures around 20–24°C and cooler evenings around 14–16°C. Expect mostly sunny days with a small chance of light rain. A light jacket or wrap for the evenings is recommended.
            </BodyText>
          </ContentSection>

          <ContentSection>
            <SectionHeading>Language</SectionHeading>
            <BodyText>
              The local language is Montenegrin, but English is widely spoken in hotels, restaurants, and taxis.
            </BodyText>
          </ContentSection>

          <ContentSection>
            <SectionHeading>Electricity</SectionHeading>
            <BodyText>
              Standard European sockets (Type C and F, 230V). No adapter needed for EU plugs. UK and US travelers will need an adapter.
            </BodyText>
          </ContentSection>

          <ContentSection>
            <SectionHeading>Emergency number</SectionHeading>
            <BodyText>
              For emergencies in Montenegro, call <strong>112</strong> (English-speaking operators are available).
            </BodyText>
          </ContentSection>

          <Box>
            <SectionHeading>Local taxi</SectionHeading>
            <BodyText sx={{ marginBottom: '0.5rem' }}>
              <strong>Green Taxi</strong> <ExternalLink href="tel:+38269888801">+382 69 888 801</ExternalLink>
            </BodyText>
            <BodyText>
              Operates in the Sutomore and Bar area.
            </BodyText>
          </Box>
        </ContentSection>
      </Stack>
    </PageContainer>
  );
}
