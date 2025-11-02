import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { Typography, Box, Stack, Divider, Link } from "@mui/material";
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
      sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}
    >
      {children}
    </Typography>
  );
}

function List({ children, sx = {} }) {
  return (
    <Box 
      component="ul" 
      sx={{ marginLeft: '1.5rem', paddingLeft: '1rem', ...sx }}
    >
      {children}
    </Box>
  );
}

function ExternalLink({ href, children, sx = {} }) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener" 
      sx={{ color: 'primary.dark', textDecoration: 'underline', ...sx }}
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

function SubSection({ title, children, sx = {} }) {
  return (
    <Box sx={{ marginBottom: '1.5rem', ...sx }}>
      <SectionHeading variant="h6" sx={{ marginBottom: '0.5rem' }}>
        {title}
      </SectionHeading>
      {children}
    </Box>
  );
}

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

      <Stack spacing={4} sx={{ marginTop: '1rem' }}>
        <Box>
          <BodyText>
            For those who want to keep the trip going, Montenegro is easy to fall in love with. It&apos;s small enough to explore in just a few days, yet full of variety, with mountains, coastline, and historic towns all within a few hours&apos; drive.
          </BodyText>
        </Box>

        <Divider />

        <Box>
          <SectionHeading variant="h4">How to get around</SectionHeading>
          <BodyText>
            Car rentals are available in the nearby town of Bar and at both airports. The roads are scenic and straightforward, winding through olive groves, coastal villages, and mountain passes. Driving gives you the freedom to explore at your own pace and stop wherever the view demands it.
          </BodyText>
        </Box>

        <Divider />

        <Box>
          <SectionHeading variant="h4" sx={{ marginBottom: '1.5rem' }}>
            Where to go
          </SectionHeading>
          <BodyText sx={{ marginBottom: '2rem' }}>
            If you have a few extra days, here are some of our favourite places worth seeing — many recommended by our local wedding planners.
          </BodyText>

          {/* Old Town Bar */}
          <ContentSection>
            <SectionHeading variant="h6">Old Town Bar – 15 minutes away</SectionHeading>
            <BodyText>
              Just down the hill from Talići Hill, this ancient fortified town sits beneath Mount Rumija. Explore the ruins, narrow lanes, and small cafés. Stop by Stara Čaršija for traditional Montenegrin dishes or Citadela for views across the valley.
            </BodyText>
          </ContentSection>

          {/* Petrovac */}
          <ContentSection>
            <SectionHeading variant="h6">Petrovac by the Sea – 25 minutes away</SectionHeading>
            <BodyText>
              A peaceful coastal town known for its long promenade, calm sea, and excellent restaurants. Perfect for a slower day between swimming and long lunches. Local favourites include Riva and Amfora along the waterfront.
            </BodyText>
          </ContentSection>

          {/* Durmitor */}
          <ContentSection>
            <SectionHeading variant="h6">Durmitor National Park – 3 hours away</SectionHeading>
            <BodyText>
              A world away from the coast, Durmitor is Montenegro&apos;s mountain heart — deep forests, glacial lakes, and dramatic peaks. Stay overnight in Žabljak to explore the Black Lake, hike gentle trails, or simply enjoy crisp mountain air and silence.
            </BodyText>
          </ContentSection>

          {/* Sutomore */}
          <ContentSection>
            <SectionHeading variant="h6">Sutomore and its beaches – 10 minutes away</SectionHeading>
            <BodyText>
              Close to the venue, Sutomore offers a lively beach and a long promenade. For something quieter, try Štrbina Beach or Crvena Plaža, both just a few minutes away.
            </BodyText>
          </ContentSection>

          {/* Skadar Lake */}
          <ContentSection>
            <SectionHeading variant="h6">Skadar Lake National Park – 50 minutes away</SectionHeading>
            <BodyText>
              One of Montenegro&apos;s most beautiful natural areas. Visit the lakeside village of Virpazar, take a boat tour among the water lilies, and stop at a small family winery to taste local Vranac and Krstač wines.
            </BodyText>
          </ContentSection>

          {/* Kotor */}
          <ContentSection>
            <SectionHeading variant="h6">Old Town Kotor – 1 hour 10 minutes away</SectionHeading>
            <BodyText>
              A UNESCO World Heritage site surrounded by mountains and sea. Wander the narrow cobblestone streets, stop for coffee in the main square, and if you&apos;re up for it, climb to the fortress for one of the best views in the country.
            </BodyText>
          </ContentSection>

          {/* Perast */}
          <ContentSection>
            <SectionHeading variant="h6">Perast and Our Lady of the Rocks – 1 hour 20 minutes away</SectionHeading>
            <BodyText>
              Just beyond Kotor, this small baroque town is often called the pearl of the Adriatic. Take a boat to the island church of Our Lady of the Rocks, a peaceful and photogenic spot to spend the afternoon.
            </BodyText>
          </ContentSection>

          {/* Ostrog */}
          <ContentSection>
            <SectionHeading variant="h6">Ostrog Monastery – 1 hour 30 minutes away</SectionHeading>
            <BodyText>
              Built into a cliff, this 17th-century monastery is one of Montenegro&apos;s most striking landmarks. Both a place of pilgrimage and an incredible sight, it offers breathtaking views across the valley below.
            </BodyText>
          </ContentSection>

          <Divider sx={{ marginY: '2rem' }} />

          {/* Where to Eat */}
          <Box sx={{ marginBottom: '2rem' }}>
            <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              🍴 Where to Eat
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Locals from ESBI Weddings & Events share their favorite authentic spots in Bar and Sutomore — some humble, all delicious.
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Traditional & Local Favorites
            </Typography>
            <Box component="ul" sx={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/M3umpttCaWcu6QKo8" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Restoran Knjaževa Bašta</Link>
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/mjUn2KYHNpJK5vsi6" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Restoran Citadela</Link>
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/KtVj4t31UFhtuBCT6" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Stara Kafana</Link>
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/AxtG7BjY8cS6FEjD7" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Restoran BB</Link>
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/KJvJjNJGppyXzQSY7" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Izvor Restaurant (Sutomore)</Link>
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Modern & International
            </Typography>
            <Box component="ul" sx={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/EiGS2PSLNv6q53Ss6" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Pino del Mar</Link>
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/qNCuZz4zWFfpx6mp9" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>XIO Restaurant</Link>
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/ha6RkzmKNQBc5FSV9" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Tutto Bene</Link>
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/ovr4rpUdb14gat9f7" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Abruzzo Ristorante Pizzeria</Link>
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Cafés, Bakeries & Specialties
            </Typography>
            <Box component="ul" sx={{ marginLeft: '1.5rem', paddingLeft: '1rem' }}>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/qA2nAjBzyuJLn4vq8" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Fontana</Link> – classic burek
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/yo6ncBiBWFuiPsbu6" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Figaro</Link> – daily cakes
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/cFotAxUG8kPW46o69" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Oliva Coffee</Link> – local favorite
              </Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>
                <Link href="https://maps.app.goo.gl/XzVQLnjAEMBW17Af6" target="_blank" rel="noopener" sx={{ color: 'primary.main', textDecoration: 'underline' }}>Barska Uljara</Link> – olive oil shop
              </Typography>
            </Box>
          </Box>

          {/* Montenegrin Dishes */}
          <Box sx={{ marginBottom: '2rem' }}>
            <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              🍽 Montenegrin Dishes to Try
            </Typography>
            
            <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Seafood
            </Typography>
            <Box component="ul" sx={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Black risotto (crni rižot)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Buzara (shellfish in wine & garlic sauce)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Octopus salad</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Mixed seafood platter</Typography>
            </Box>

            <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Meat & Traditional
            </Typography>
            <Box component="ul" sx={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Ćevapi (grilled sausages)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Lamb under the bell (jagnjetina ispod sača)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Njeguški pršut (smoked ham)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Njeguški steak (with cheese & ham)</Typography>
            </Box>

            <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Desserts
            </Typography>
            <Box component="ul" sx={{ marginLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Palačinke (crepes)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Krempita (cream cake)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Local ice cream</Typography>
            </Box>

            <Typography variant="h6" sx={{ marginBottom: '0.5rem', fontWeight: 500 }}>
              Drinks
            </Typography>
            <Box component="ul" sx={{ marginLeft: '1.5rem', paddingLeft: '1rem' }}>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Vranac (red wine)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Krstač (white wine)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Rakija (fruit brandy)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}>Nikšićko pivo (local beer)</Typography>
            </Box>
          </Box>

          {/* Dining Tips */}
          <Box>
            <Typography variant="h5" sx={{ marginBottom: '1rem', fontWeight: 500 }}>
              🍷 Dining Tips
            </Typography>
            <Box component="ul" sx={{ marginLeft: '1.5rem', paddingLeft: '1rem' }}>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}><strong>Reservations:</strong> Recommended in summer</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}><strong>Meal times:</strong> Breakfast 7–10 AM, Lunch 12–3 PM, Dinner after 7 PM</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}><strong>Tipping:</strong> 10% for good service (cash preferred)</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}><strong>Ordering:</strong> Ask for daily specials; seafood priced by weight</Typography>
              <Typography component="li" variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8, display: 'list-item' }}><strong>Payment:</strong> Cards accepted in most places, but carry cash for small shops</Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </PageContainer>
  );
}
