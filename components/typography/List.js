import { Box } from "@mui/material";

export default function List({ children, sx = {} }) {
  return (
    <Box
      component="ul"
      sx={{
        marginLeft: "1.5rem",
        paddingLeft: "1rem",
        listStyleType: "disc",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
