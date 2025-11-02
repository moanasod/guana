import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";

export default function WhereToStay() {
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
    <PageContainer title={`Where to Stay - ${data.name}`} isFAQ={true}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          component="img"
          src={`/images/taliciDoodle.svg`}
          alt="Toggle theme"
          sx={{ width: {xs: "100%", md: "70%"}, height: "auto",  alignSelf: "center" }}
        />
        <Typography 
          ref={textRef}
          variant="h2" 
          sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 600,
            marginBottom: '2rem'
          }}
        >
          Where to Stay
        </Typography>

        <Stack spacing={4} sx={{ marginTop: '0rem' }}>
          <Box>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8}}>
              Talici Hill sits above the small village of Vrelo Brca, surrounded by the Adriatic coast&apos;s hills and sea views. There are plenty of hotels and villas nearby. The closest options are in Vrelo Brca just down the hill, with more choices in Sutomore (about 10 minutes away) and the larger seaside town of Bar (about 15 minutes away).
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginTop: '1rem' }}>
              The wedding couple and immediate family will stay at Talici Hill villa. All other guests are invited to stay nearby in hotels recommended by our wedding planners, all within a short drive from the venue.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              How to book
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8}}>
              Our wedding planners have prepared a list of suggested accommodation options near Talici Hill. Please find our recommendations below for a comfortable stay during the wedding weekend.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8,  marginTop: '1rem' }}>
              We recommend booking through Booking.com for ease and flexibility.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              Options
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              Hotel Option 1: Love Live Hotel
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.75rem'}}>
              8 minutes by car from Talici Hill
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              Love Live Hotel is a small seaside hotel in Sutomore. Its intimate size makes it calm and private, with seven suites and one double room, most offering direct sea views. Guests can enjoy a private beach, sunbeds, a pool, and a Mediterranean restaurant.
            </Typography>
            <Typography 
              variant="body1" 
              component="a" 
              href="https://www.booking.com" 
              target="_blank"
              sx={{ 
                fontSize: '1rem', 
                color: 'primary.main', 
                textDecoration: 'underline',
                '&:hover': { opacity: 0.8 }
              }}
            >
              View on Booking.com
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              Hotel Option 2: Apart Hotel Sea Fort
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>
              9 minutes by car from Talici Hill
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              Apart Hotel Sea Fort is a modern beachfront aparthotel in Sutomore offering bright apartments with kitchenettes, balconies, and sea views. It&apos;s close to cafés, beaches, and local shops, ideal for guests who want independence and easy access to the coast.
            </Typography>
            <Typography 
              variant="body1" 
              component="a" 
              href="https://www.booking.com" 
              target="_blank"
              sx={{ 
                fontSize: '1rem', 
                color: 'primary.main', 
                textDecoration: 'underline',
                '&:hover': { opacity: 0.8 }
              }}
            >
              View on Booking.com
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              Other accommodation options
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              If you prefer more privacy, there are many private villas and apartments in the area that can be easily booked through Booking.com.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              Location in relation to Talici Hill
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              All suggested options are within a maximum of 15 minutes by car from Talici Hill, making travel to and from the venue simple and quick.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              Transfers
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              Transfers to and from the venue will be arranged through a local taxi company. Hotel guests can ask our wedding planners on-site for help booking taxis.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginTop: '1rem' }}>
              A taxi from Sutomore to Talici Hill typically costs €5–10 and takes about 8–10 minutes. Taxis can be booked through a local telephone number [TO BE ADDED], through the staff at Talici Hill, or via your hotel reception.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </PageContainer>
  );
}
