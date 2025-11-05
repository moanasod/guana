import { Typography } from "@mui/material";

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

