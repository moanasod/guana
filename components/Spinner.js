import { Box, CircularProgress } from "@mui/material";

/**
 * Reusable loading spinner component as overlay
 * @param {string} size - Size of the spinner (default: 60)
 * @param {boolean} overlay - Whether to show as overlay (default: true)
 * @param {object} sx - Additional MUI sx styles
 */
export default function Spinner({ size = 60, overlay = true, sx = {}, ...props }) {
  if (!overlay) {
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

  // Overlay version (default)
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        ...sx,
      }}
      {...props}
    >
      <CircularProgress size={size} sx={{ color: "primary.main" }} />
    </Box>
  );
}

