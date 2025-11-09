import { Link } from "@mui/material";
import {useTheme,Theme, SxProps } from "next-themes";
import mergeStyles from "../../utils/mergeStyles";

const styles = {
    color: "primary.dark",
    textDecoration: "underline",
    "&:hover": {
      opacity: 0.8,
    },
};

export default function ExternalLink({ href, children, sx = {}, ...props }) {
  const {theme} = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={mergeStyles(styles, sx, {color: isDarkMode ? "white" : 'inherit'})}
      {...props}
    >
      {children}
    </Link>
  );
}
