import { Typography } from "@mui/material";

export default function ListItem({ children, sx = {}, ...props }) {
  const defaultSx = {
    fontSize: "1.125rem",
    lineHeight: 1.8,
    marginBottom: "0.75rem",
    display: "list-item",
    ...sx,
  };

  return (
    <Typography component="li" variant="body1" sx={defaultSx} {...props}>
      {children}
    </Typography>
  );
}
