import { JSX, useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Stack, Box, Grid } from "@mui/material";
import PageContainer from "../components/PageContainer";
import { getAssetPath } from "../utils/getAssetPath";
import {
  SectionHeading,
  SubHeading,
  BodyText,
  ExternalLink,
  ContentSection,
} from "../components/typography";
import data from "../data/portfolio.json";
import React from "react";

export default function TravelInfo(): JSX.Element {
  const textRef = useRef<HTMLDivElement | null>(null);
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
    <PageContainer title={`Travel Information - ${data.name}`} isFAQ={true}>
      <Box
        component="img"
        src={getAssetPath("/images/montenegro/image10.png")}
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
      <Typography
        ref={textRef}
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 600,
          marginY: "2rem",
        }}
      >
        Travel Information
      </Typography>

      <Stack spacing={4} sx={{ marginTop: "3rem" }}>
        <ContentSection>
          <SectionHeading>
            What airports to fly into (from Stockholm Arlanda)
          </SectionHeading>
          <BodyText>
            We recommend you fly into the closest airport to the venue,{" "}
            <strong>Podgorica Airport (TGD)</strong> - about 40 minutes from the
            venue, Talići Hill.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SubHeading>
            For those arriving on Friday the 8th we suggest:
          </SubHeading>
          <BodyText sx={{ marginBottom: "0.75rem" }}>
            <strong>Ryanair:</strong> Departs 07:40, arrives 12:45 (1 stop in
            Gdańsk)
          </BodyText>
          <BodyText>
            <strong>LOT Polish Airlines:</strong> Departs 07:40, arrives 12:40
            (1 stop in Warsaw)
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SubHeading>
            For those arriving on Saturday the 9th (wedding day) we recommend:
          </SubHeading>
          <BodyText>
            <strong>Air Serbia:</strong> Departs 09:55, arrives 14:30 (1 stop in
            Belgrade)
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>Other airport alternatives</SectionHeading>
          <BodyText>
            <strong>Tivat Airport (TIV)</strong> is another good option — about
            1 h 15 min from the venue.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SubHeading>If arriving via Tivat on Friday the 8th:</SubHeading>
          <BodyText>
            <strong>Turkish Airlines:</strong> Departs 11:10, arrives 17:40 (1
            stop in Istanbul)
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SubHeading>If arriving via Tivat on Saturday the 9th:</SubHeading>
          <BodyText>
            <strong>Air Serbia:</strong> Departs 09:55, arrives 14:35 (1 stop in
            Belgrade)
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>Transfer to the location</SectionHeading>

          <Grid container direction="row" spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <BodyText sx={{ marginBottom: "1rem" }}>
                If you arrive on the 8th of May, we will arrange shuttle
                transportation from Podgorica Airport to the venue. Look for a
                person holding a sign:{" "}
                <strong>&quot;Moana and Gustav Wedding Shuttle&quot;</strong>.
              </BodyText>
              <BodyText>
                If you arrive at Podgorica Airport on the 9th, we will also
                arrange shuttle transportation for hotel-guests - please provide
                your flight details as soon as you&apos;ve booked them so we can
                coordinate pickups.
              </BodyText>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={getAssetPath("/images/montenegro/transfer.png")}
                alt="Airport transfer shuttle"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-out",
                  borderRadius: "8px",
                }}
              />
            </Grid>
          </Grid>
        </ContentSection>

        <ContentSection>
          <SectionHeading>Visa and entry requirements</SectionHeading>
          <BodyText>
            Citizens of the European Union do not need a visa to travel to
            Montenegro. With a valid ID card they may stay up to 30 days; with a
            passport up to 90 days. The same applies to citizens of New Zealand.
            Please check your country&apos;s specific requirements before
            booking your travel.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>How to book</SectionHeading>
          <BodyText>
            Flight and accommodation availability will become more limited as we
            approach the wedding date - we recommend you book as soon as
            you&apos;ve RSVP&apos;d.
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>Rent a car?</SectionHeading>
          <BodyText sx={{ marginBottom: "1rem" }}>
            If you prefer more freedom, rental cars are available at both Tivat
            and Podgorica airports. Driving to the venue gives you the
            flexibility to explore the coast and surrounding countryside at your
            leisure.
          </BodyText>
          <BodyText sx={{ marginBottom: "0.5rem" }}>
            Here are trusted car-rental companies in each location:
          </BodyText>
          <BodyText sx={{ marginBottom: "0.5rem" }}>
            <strong>At Podgorica Airport:</strong> MTL Rent a Car -
            family-owned, meets you at airport arrivals.
          </BodyText>
          <BodyText>
            <strong>At Tivat Airport:</strong> Sixt
          </BodyText>
        </ContentSection>

        <ContentSection>
          <SectionHeading>Book a taxi?</SectionHeading>

          <Grid container direction="row" spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <BodyText sx={{ marginBottom: "1.5rem" }}>
                If you prefer to travel independently, please use one of the
                official taxi companies listed below.
              </BodyText>

              <SubHeading>From Podgorica Airport (≈ 40 minutes)</SubHeading>
              <BodyText sx={{ marginBottom: "0.5rem" }}>
                <strong>Tesla Taxi</strong>{" "}
                <ExternalLink href="tel:+38269057073">
                  +382 69 057 073
                </ExternalLink>{" "}
                – approx. €40–50
              </BodyText>
              <BodyText sx={{ marginBottom: "1.5rem" }}>
                <strong>E Taxi</strong>{" "}
                <ExternalLink href="tel:+38267197890">
                  +382 67 197 890
                </ExternalLink>{" "}
                – approx. €40–50
              </BodyText>

              <SubHeading>From Tivat Airport (≈ 1 hour 15 minutes)</SubHeading>
              <BodyText sx={{ marginBottom: "0.5rem" }}>
                <strong>Lider Taxi</strong>{" "}
                <ExternalLink href="tel:+38268119775">
                  +382 68 119 775
                </ExternalLink>{" "}
                – approx. €55–70
              </BodyText>
              <BodyText>
                <strong>City Taxi Tivat</strong>{" "}
                <ExternalLink href="tel:+38269019711">
                  +382 69 019 711
                </ExternalLink>{" "}
                – approx. €55–70
              </BodyText>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src={getAssetPath("/images/montenegro/taxi.png")}
                alt="Taxi in Montenegro"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-out",
                  borderRadius: "8px",
                }}
              />
            </Grid>
          </Grid>
        </ContentSection>
      </Stack>
    </PageContainer>
  );
}
