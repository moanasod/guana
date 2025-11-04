import { useEffect, useRef, useState } from "react";
import { stagger } from "../animations";
import { useIsomorphicLayoutEffect } from "../utils";
import { getAssetPath } from "../utils/getAssetPath";
import {
  SectionHeading,
  BodyText,
  ExternalLink,
} from "../components/typography";
import HotelCard from "../components/HotelCard";

import { Typography, Box, Stack, Divider, Grid } from "@mui/material";
import PageContainer from "../components/PageContainer";
import data from "../data/portfolio.json";

const SEISENSI_IMAGES = [
  {
    img: "/images/montenegro/seisensi1.jpg",
    title: "Overhead view of the hotel",
  },
  {
    img: "/images/montenegro/seisensi2.jpg",
    title: "Overhead view of the hotel",
  },
  {
    img: "/images/montenegro/seisensei3.jpg",
    title: "Overhead view of the hotel",
  },
  {
    img: "/images/montenegro/sensei4.jpg",
    title: "Overhead view of the hotel",
  },
];

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
          src={getAssetPath("/images/taliciDoodle.svg")}
          alt="Toggle theme"
          sx={{
            width: { xs: "100%", md: "70%" },
            height: "auto",
            alignSelf: "center",
          }}
        />
        <Typography
          ref={textRef}
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 600,
            marginBottom: "2rem",
          }}
        >
          Where to Stay
        </Typography>

        <Stack spacing={4} sx={{ marginTop: "1rem" }}>
          <Box>
            <BodyText>
              Talići Hill sits above the small village of{" "}
              <strong>Vrelo Brca</strong>, surrounded by the Adriatic
              coast&apos;s hills and sea views. There are plenty of hotels and
              villas nearby. The closest options are in{" "}
              <strong>Sutomore</strong> (about 5–10 minutes away) and the larger
              seaside town of <strong>Bar</strong> (about 15 minutes away).
            </BodyText>
            <BodyText>
              The wedding couple and immediate family will stay at{" "}
              <strong>Talići Hill Villa</strong>. All other guests are invited
              to stay nearby in hotels recommended by our wedding planners, all
              within a short drive from the venue.
            </BodyText>
          </Box>

          <Divider />

          <Box>
            <SectionHeading>How to Book</SectionHeading>
            <BodyText>
              Our wedding planners have prepared a list of recommended
              accommodation options at various price points near Talići Hill,
              all within 5–15 minutes of the venue. These hotels are regularly
              used by Talići Hill guests. You can book most hotels easily
              through{" "}
              <ExternalLink href="https://www.booking.com">
                Booking.com
              </ExternalLink>
              , though some are also available directly on their websites.
            </BodyText>
          </Box>

          <Divider />

          <Box>
            <SectionHeading>
              Sutomore (2.5 km / 5–10 minutes from the venue)
            </SectionHeading>
            <BodyText sx={{ marginBottom: "2rem" }}>
              Sutomore is the closest beach town, with a relaxed,
              family-friendly atmosphere and good transport connections by train
              and bus. We will be able to organize transportation or shuttle
              services for guests staying in Sutomore.
            </BodyText>

            <Grid container spacing={3}>
              <HotelCard
                src={
                  "https://lovelivehotel.com/wp-content/uploads/2015/05/lovelivehotel_slider_image_2_dark.jpg"
                }
                name="Love Live Hotel"
                stars="4★"
                description="A small seaside hotel with seven suites and one double room, most with sea views. Guests can enjoy a private beach, sunbeds, and a pool."
                links={[
                  {
                    label: "Google Maps",
                    url: "https://maps.app.goo.gl/YrQeU4qqJp1Nor1YA",
                  },
                  { label: "Website", url: "https://lovelivehotel.com/" },
                  { label: "Booking.com", url: "#" },
                ]}
              />

              <HotelCard
                name="Sea Fort Apart Hotel"
                src={
                  "https://cf.bstatic.com/xdata/images/hotel/max500/32935476.jpg?k=84410f9893cbc0f840fee663f75cc61b25cb87fc5ae525ed2ace3d2d893a7880&o=&hp=1"
                }
                stars="4★"
                description="Modern beachfront aparthotel offering bright apartments with kitchenettes, balconies, and sea views, ideal for guests wanting independence and proximity to cafés and beaches."
                links={[
                  {
                    label: "Google Maps",
                    url: "https://maps.app.goo.gl/Dy57sWwU15Kv3ZzF9",
                  },
                  {
                    label: "Instagram",
                    url: "https://www.instagram.com/sea_fort/",
                  },
                ]}
              />

              <HotelCard
                name="Hotel Del Medio"
                stars="4★"
                src={
                  "https://static.tildacdn.com/tild3837-6630-4635-a366-666131393734/IMG_4783.jpeg"
                }
                description="Stylish hotel combining comfort with convenient beach access and a rooftop terrace."
                links={[
                  { label: "Google Maps", url: "#" },
                  { label: "Website", url: "#" },
                  {
                    label: "Booking.com",
                    url: "https://www.booking.com/hotel/me/porto-sole.en-gb.html",
                  },
                ]}
              />

              <HotelCard
                name="Hotel Kaligrosh"
                stars="3★"
                src={
                  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/690445033.jpg?k=7737f0ba77b701e77ba427e8f40242879e0bb6690861298e6c269eebe7ac742c&o="
                }
                description="A simple, clean option with friendly service and good access to Sutomore Beach."
                links={[
                  { label: "Google Maps", url: "#" },
                  { label: "Booking.com", url: "#" },
                ]}
              />

              <HotelCard
                name="Hotel Porto Sole"
                src={
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/63/24/aa/porto-sole.jpg?w=900&h=500&s=1"
                }
                stars="3★"
                description="Comfortable stay close to the seafront promenade, with a pool and breakfast service."
                links={[
                  { label: "Google Maps", url: "#" },
                  { label: "Website", url: "#" },
                  {
                    label: "Booking.com",
                    url: "https://www.booking.com/hotel/me/porto-sole.en-gb.html",
                  },
                ]}
              />

              <HotelCard
                name="Hotel G-Star"
                stars="3★"
                src={"https://gstarhotel.com/media/home2.jpg"}
                description="Modern and recently renovated hotel near the center of Sutomore."
                links={[
                  {
                    label: "Google Maps",
                    url: "https://maps.app.goo.gl/KHxLceRLDDTqoZ549",
                  },
                  { label: "Website", url: "https://gstarhotel.com/" },
                  {
                    label: "Booking.com",
                    url: "https://www.booking.com/hotel/me/sirena-marta.en-gb.html",
                  },
                ]}
              />

              <HotelCard
                name="Hotel Sirena Marta"
                src={
                  "https://sirenamarta.me/wp-content/uploads/2019/06/sutomore01-400x400.jpg"
                }
                stars="3★"
                description="Cozy family-run hotel near the beach, with a garden terrace and restaurant."
                links={[
                  {
                    label: "Google Maps",
                    url: "https://maps.app.goo.gl/BDrNRsqJSkJV5kV3A",
                  },
                  { label: "Website", url: "https://sirenamarta.me/" },
                  {
                    label: "Booking.com",
                    url: "https://www.booking.com/hotel/me/sirena-marta.en-gb.html",
                  },
                ]}
              />
            </Grid>
          </Box>

          <Divider />

          <Box>
            <SectionHeading>
              Bar (7.5 km / 10-15 minutes from the venue)
            </SectionHeading>
            <BodyText sx={{ marginBottom: "2rem" }}>
              Bar is a larger seaside city with more accommodation variety,
              restaurants, and cultural sights. It features a beautiful marina
              and promenade, as well as <strong>Old Town Bar&apos;s</strong>{" "}
              historic ruins. We can arrange transportation or shuttles for
              guests staying here.
            </BodyText>

            <Grid container spacing={3}>
              <HotelCard
                isLarge={true}
                images={SEISENSI_IMAGES}
                name="Sei Sensi"
                stars="Luxury Private Villa"
                description="This private villa is a great choice for a group of you. Guests can take a dip in the seasonal outdoor pool and access the beach just outside the property. The property features a terrace, a private pool, and a kitchen. Sleeps up to 14 people with 4 bedrooms, 4 bathrooms. Through our wedding planners, you can book this villa for the weekend at 10% off. Please note that the minimum stay is 3 nights. Reach out to us or our wedding planners for more information. €800 for the villa per night."
                links={[
                  {
                    label: "Google Maps",
                    url: "https://maps.app.goo.gl/cWKKBQRnpNuAx5zp6",
                  },
                  {
                    label: "Booking.com",
                    url: "https://www.booking.com/hotel/me/seisensi-luxury-beach-villa.en-gb.html?aid=318615&label=New_English_EN_SE_26638796185-HsoX3XKdk0TROh9xtr0UXQS634117827546%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-64415224945%3Alp1012228%3Ali%3Adec%3Adm%3Aag26638796185%3Acmp393949825&sid=db89e1d00bcbad5ad1ad649cf7b51a1b&dest_id=440840&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1762287534&srpvid=ce3f8ed4da57088a&type=total&ucfs=1&",
                  },
                ]}
              />
              <HotelCard
                name="Hotel Princess"
                src={
                  "https://tripx-images.imgix.net/TSPRO/hotelimages/c888f536cb0a483889fdffca4c03e5ae.jpg"
                }
                stars="4★"
                description="Elegant seafront hotel with a pool, spa, and direct access to Bar's promenade."
                links={[
                  {
                    label: "Google Maps",
                    url: "https://maps.app.goo.gl/P7WgjhQ4BnmmjEcy8",
                  },
                  { label: "Website", url: "https://www.hotelprincess.me/" },
                  { label: "Booking.com", url: "#" },
                ]}
              />

              <HotelCard
                name="Hotel Agape"
                stars="4★"
                src={
                  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/481272451.jpg?k=e0b70fdc8b43203df69644940a3e4657a54bf0305c62c86e867227ad5985b83c&o="
                }
                description="Modern hotel in central Bar with bright rooms, a restaurant, and convenient parking."
                links={[
                  {
                    label: "Google Maps",
                    url: "https://maps.app.goo.gl/P7WgjhQ4BnmmjEcy8",
                  },
                  { label: "Website", url: "https://hotelagape.me/" },
                  {
                    label: "Booking.com",
                    url: "https://www.booking.com/hotel/me/agape-bar.en-gb.html",
                  },
                ]}
              />

              <HotelCard
                name="Hotel Pharos"
                stars="3★"
                src={
                  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/374157846.jpg?k=facf714d65003cb6c1afaadbbc556901c382f1c70d3cc58787e4dbd1eafead7c&o=&hp=1"
                }
                description="Comfortable and affordable option in a quiet area, close to the city center and beach."
                links={[
                  {
                    label: "Google Maps",
                    url: "https://maps.app.goo.gl/1XEWSsiqWq4uWq8D7",
                  },
                  { label: "Website", url: "https://pharos-hotel.com/" },
                  { label: "Booking.com", url: "http://Booking.com" },
                ]}
              />
            </Grid>
          </Box>

          <Divider />

          <Box>
            <SectionHeading>Transfers</SectionHeading>
            <BodyText sx={{ marginBottom: "1rem" }}>
              Transfers to and from the venue will be arranged through a local
              taxi company. Guests staying in Sutomore or Bar can also ask our
              wedding planners on-site for help booking taxis.
            </BodyText>
            <BodyText sx={{ marginBottom: "1rem" }}>
              A taxi from Sutomore to Talići Hill typically costs around{" "}
              <strong>€5-10</strong> and takes 5–10 minutes.
            </BodyText>
            <BodyText>
              Taxis can be booked via <strong>Green Taxi</strong>
              <br />
              📞{" "}
              <ExternalLink href="tel:+38269888801">
                +382 69 888 801
              </ExternalLink>
              <br />
              or through your hotel reception or the staff at Talići Hill.
            </BodyText>
          </Box>
        </Stack>
      </Box>
    </PageContainer>
  );
}
