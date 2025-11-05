import { Box, Card, Grid, Typography } from "@mui/material";
import { getAssetPath } from "../utils/getAssetPath";
import { BodyText, ExternalLink } from "./typography";
import ImageGrid from "./ImageGrid";

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
}) {
  return (
    <Grid item size={{ md: isLarge ? 12 : 6, xs: 12 }} sx={{ display: "flex" }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "1rem",
        }}
      >
        {images && <ImageGrid images={images} maxHeight={350} />}
        {src && (
          <Box
            component="img"
            src={getAssetPath(src)}
            alt={name}
            sx={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "1rem",
            }}
          />
        )}
        <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
          {name} {stars && `(${stars})`}
        </Typography>
        {distance && (
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.9rem",
              fontStyle: "italic",
              marginBottom: "0.75rem",
              opacity: 0.7,
            }}
          >
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
