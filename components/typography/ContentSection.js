import { Box } from "@mui/material";

export default function ContentSection({ children, sx = {}, ...props }) {
  const defaultSx = {
    marginBottom: "2rem",
    ...sx,
  };

  return (
    <Box sx={defaultSx} {...props}>
      {children}
    </Box>
  );
}
