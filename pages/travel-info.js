import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack, Link } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";

export default function TravelInfo() {
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
    <PageContainer title={`Travel Information - ${data.name}`} isFAQ={true}>
      <Typography 
        ref={textRef}
        variant="h2" 
        sx={{ 
          fontSize: { xs: '2rem', md: '3rem' },
          fontWeight: 600,
          marginBottom: '2rem'
        }}
      >
        Travel Information
      </Typography>

      <Stack spacing={4} sx={{ marginTop: '3rem' }}>
        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            What airports to fly into (from Stockholm Arlanda)
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            We recommend you fly into the closest airport to the venue, <strong>Podgorica Airport (TGD)</strong> - about 40 minutes from the venue, Talići Hill.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            For those arriving on Friday the 8th we suggest:
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
            <strong>Ryanair:</strong> Departs 07:40, arrives 12:45 (1 stop in Gdańsk)
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            <strong>LOT Polish Airlines:</strong> Departs 07:40, arrives 12:40 (1 stop in Warsaw)
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            For those arriving on Saturday the 9th (wedding day) we recommend:
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            <strong>Air Serbia:</strong> Departs 09:55, arrives 14:30 (1 stop in Belgrade)
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Other airport alternatives
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            <strong>Tivat Airport (TIV)</strong> is another good option — about 1 h 15 min from the venue.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            If arriving via Tivat on Friday the 8th:
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            <strong>Turkish Airlines:</strong> Departs 11:10, arrives 17:40 (1 stop in Istanbul)
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            If arriving via Tivat on Saturday the 9th:
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            <strong>Air Serbia:</strong> Departs 09:55, arrives 14:35 (1 stop in Belgrade)
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Transfer to the location
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            If you arrive on the 8th of May, we will arrange shuttle transportation from Podgorica Airport to the venue. Look for a person holding a sign: <strong>&quot;Moana and Gustav Wedding Shuttle&quot;</strong>.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            If you arrive at Podgorica Airport on the 9th, we will also arrange shuttle transportation for hotel-guests - please provide your flight details as soon as you&apos;ve booked them so we can coordinate pickups.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Visa and entry requirements
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Citizens of the European Union do not need a visa to travel to Montenegro. With a valid ID card they may stay up to 30 days; with a passport up to 90 days. The same applies to citizens of New Zealand. Please check your country&apos;s specific requirements before booking your travel.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            How to book
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Flight and accommodation availability will become more limited as we approach the wedding date - we recommend you book as soon as you&apos;ve RSVP&apos;d.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Book a car?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1rem' }}>
            If you prefer more freedom, rental cars are available at both Tivat and Podgorica airports. Driving to the venue gives you the flexibility to explore the coast and surrounding countryside at your leisure.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>
            Here are trusted car-rental companies in each location:
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>
            <strong>At Podgorica Airport:</strong> MTL Rent a Car - family-owned, meets you at airport arrivals.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            <strong>At Tivat Airport:</strong> Sixt
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            Book a taxi?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            If you prefer to travel independently, please use one of the official taxi companies listed below.
          </Typography>
          
          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            From Podgorica Airport (≈ 40 minutes)
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>
            <strong>Tesla Taxi</strong> <Link href="tel:+38269057073" sx={{ color: 'primary.dark', textDecoration: 'underline' }}>+382 69 057 073</Link> – approx. €40–50
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            <strong>E Taxi</strong> <Link href="tel:+38267197890" sx={{ color: 'primary.dark', textDecoration: 'underline' }}>+382 67 197 890</Link> – approx. €40–50
          </Typography>

          <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
            From Tivat Airport (≈ 1 hour 15 minutes)
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>
            <strong>Lider Taxi</strong> <Link href="tel:+38268119775" sx={{ color: 'primary.dark', textDecoration: 'underline' }}>+382 68 119 775</Link> – approx. €55–70
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            <strong>City Taxi Tivat</strong> <Link href="tel:+38269019711" sx={{ color: 'primary.dark', textDecoration: 'underline' }}>+382 69 019 711</Link> – approx. €55–70
          </Typography>
        </Box>
      </Stack>
    </PageContainer>
  );
}
