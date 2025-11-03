import { Box } from "@mui/material";
import SectionHeading from "./SectionHeading";

export default function SubSection({ title, children, sx = {} }) {
  return (
    <Box sx={{ marginBottom: "1.5rem", ...sx }}>
      <SectionHeading variant="h6" sx={{ marginBottom: "0.5rem" }}>
        {title}
      </SectionHeading>
      {children}
    </Box>
  );
}
