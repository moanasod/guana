import { Box } from "@mui/material";

/**
 * Reusable list (ul) wrapper component
 * @param {ReactNode} children - List items to render
 * @param {object} sx - Additional MUI sx styles
 */
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
