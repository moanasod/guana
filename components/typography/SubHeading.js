import { Typography } from "@mui/material";

/**
 * Reusable subsection heading component (smaller than SectionHeading)
 * @param {object} sx - Additional MUI sx styles
 * @param {ReactNode} children - Content to render
 */
export default function SubHeading({ children, sx = {}, ...props }) {
  const defaultSx = {
    marginBottom: '1rem',
    fontWeight: 500,
    ...sx
  };
  
  return (
    <Typography variant="h5" sx={defaultSx} {...props}>
      {children}
    </Typography>
  );
}

