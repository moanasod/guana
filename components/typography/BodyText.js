import { Typography } from "@mui/material";

export default function BodyText({ children, sx = {}, ...props }) {
  const defaultSx = {
    fontSize: "1.125rem",
    lineHeight: 1.8,
    ...sx,
  };

  return (
    <Typography variant="body1" sx={defaultSx} {...props}>
      {children}
    </Typography>
  );
}
