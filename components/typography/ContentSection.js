import { Box } from "@mui/material";

/**
 * Reusable content section wrapper with consistent spacing
 * @param {object} sx - Additional MUI sx styles
 * @param {ReactNode} children - Content to render
 */
export default function ContentSection({ children, sx = {}, ...props }) {
  const defaultSx = {
    marginBottom: '2rem',
    ...sx
  };
  
  return (
    <Box sx={defaultSx} {...props}>
      {children}
    </Box>
  );
}

