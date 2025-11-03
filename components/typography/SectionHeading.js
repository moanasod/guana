import { Typography } from "@mui/material";

/**
 * Reusable section heading component
 * @param {string} variant - Typography variant (default: "h4")
 * @param {object} sx - Additional MUI sx styles
 * @param {ReactNode} children - Content to render
 */
export default function SectionHeading({ children, variant = "h4", sx = {}, ...props }) {
  const defaultSx = {
    marginBottom: '1rem',
    fontWeight: 500,
    ...sx
  };
  
  return (
    <Typography variant={variant} sx={defaultSx} {...props}>
      {children}
    </Typography>
  );
}

