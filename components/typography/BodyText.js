import { Typography } from "@mui/material";

/**
 * Reusable body text component with consistent styling
 * @param {object} sx - Additional MUI sx styles
 * @param {ReactNode} children - Content to render
 */
export default function BodyText({ children, sx = {}, ...props }) {
  const defaultSx = {
    fontSize: '1.125rem',
    lineHeight: 1.8,
    ...sx
  };
  
  return (
    <Typography variant="body1" sx={defaultSx} {...props}>
      {children}
    </Typography>
  );
}

