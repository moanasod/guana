import { Box, Card, Grid, Typography } from "@mui/material";
import { getAssetPath } from "../../utils/getAssetPath";
import { BodyText, ExternalLink } from "../typography";
import ImageGrid from "../ImageGrid";
import { useTheme } from "next-themes";
import mergeStyles from "../../utils/mergeStyles";
import { JSX } from "react";
import React from "react";
import { StringMappingType } from "typescript";

const styles = {
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
  imgBox: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  distance: {
    fontSize: "0.9rem",
    fontStyle: "italic",
    marginBottom: "0.5rem",
    opacity: 0.8,
  },
};

 type Link = {
  label: string;
  url: string;
}

export type Image ={
  img: string;
  title: string;
}

interface HotelCardProps {
  name: string;
  stars: string;
  description: string;
  links: Link[];
  distance: string;
  src?: string;
  isLarge?: boolean;
  images?: Image[];
  priceLevel: string;
}

export default function HotelCard({
  name,
  stars,
  description,
  links,
  distance,
  src,
  isLarge = false,
  images,
  priceLevel,
}: HotelCardProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <Grid size={{ md: isLarge ? 12 : 6, xs: 12 }} sx={{ display: "flex" }}>
      <Card
        sx={mergeStyles(styles.card, {
          backgroundColor: theme === "dark" ? "secondary.dark" : "white",
        })}
      >
        {images && <ImageGrid images={images} maxHeight={350} />}
        {src && (
          <Box
            component="img"
            src={getAssetPath(src)}
            alt={name}
            sx={styles.imgBox}
          />
        )}
        <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
          {name} {stars && `(${stars})`}
        </Typography>
        {distance && (
          <Typography variant="body2" sx={styles.distance}>
            {distance} {priceLevel ? `- ${priceLevel}` : ""}
          </Typography>
        )}
        <BodyText sx={{ marginBottom: "0.75rem", flexGrow: 1 }}>
          {description}
        </BodyText>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {links.map((link, index) => (
            <span key={index}>
              <ExternalLink href={link.url}>{link.label}</ExternalLink>
              {index < links.length - 1 && (
                <span style={{ margin: "0 4px" }}>|</span>
              )}
            </span>
          ))}
        </Box>
      </Card>
    </Grid>
  );
}
