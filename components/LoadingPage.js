import { Box } from "@mui/material";
import Spinner from "./Spinner";

/**
 * Full-page loading component for Suspense fallback
 */
export default function LoadingPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Spinner size={80} />
    </Box>
  );
}

