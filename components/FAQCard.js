import { Box, Card, Typography } from "@mui/material";

export default function FAQCard({ name, description, image }) {
  return (
    <Card
      sx={{
        padding: "16px",
        backgroundColor: "white",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {image && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "200px",
            marginBottom: "16px",
            borderRadius: "0.5rem",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{
              width: "auto",
              height: "100%",
              objectFit: "cover",
              justifySelf: "center",
              alignItems: "center",
            }}
          />
        </Box>
      )}
      <Typography variant="h4" sx={{ fontSize: "1.875rem" }}>
        {name}
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "20px", opacity: 0.8, fontSize: "1.25rem" }}
      >
        {description}
      </Typography>
    </Card>
  );
}
