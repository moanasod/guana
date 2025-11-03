import { Box, CircularProgress } from "@mui/material";

/**
 * Reusable loading spinner component
 * @param {string} size - Size of the spinner (default: 60)
 * @param {object} sx - Additional MUI sx styles
 */
export default function Spinner({ size = 60, sx = {}, ...props }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "400px",
        width: "100%",
        ...sx,
      }}
      {...props}
    >
      <CircularProgress size={size} />
    </Box>
  );
}

