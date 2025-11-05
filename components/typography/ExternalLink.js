import { Link } from "@mui/material";

export default function ExternalLink({ href, children, sx = {}, ...props }) {
  const defaultSx = {
    color: "primary.dark",
    textDecoration: "underline",
    "&:hover": {
      opacity: 0.8,
    },
    ...sx,
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={defaultSx}
      {...props}
    >
      {children}
    </Link>
  );
}
