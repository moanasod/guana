import { Link, LinkProps, SxProps } from "@mui/material";
import { useTheme } from "next-themes";
import mergeStyles from "../../utils/mergeStyles";
import { JSX, ReactNode } from "react";
import React from "react";

const styles = {
  color: "primary.dark",
  textDecoration: "underline",
  "&:hover": {
    opacity: 0.8,
  },
};

interface ExternalLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
  sx?: SxProps;
}

export default function ExternalLink({
  href,
  children,
  sx = {},
  ...props
}: ExternalLinkProps): JSX.Element {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={mergeStyles(styles, sx, { color: isDarkMode ? "white" : "inherit" })}
      {...props}
    >
      {children}
    </Link>
  );
}