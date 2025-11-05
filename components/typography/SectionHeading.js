import { Typography } from "@mui/material";

export default function SectionHeading({ children, variant = "h4", sx = {}, ...props }) {
  const defaultSx = {
    marginBottom: '1rem',
    marginTop: '1rem',
    ...sx
  };
  
  return (
    <Typography variant={variant} sx={defaultSx} {...props}>
      {children}
    </Typography>
  );
}

