import { Box, Select, MenuItem, FormControl } from "@mui/material";

const handleNavigation = (slug) => {
  const element = document.getElementById(slug);
  if (element) {
    const offset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    history.pushState(null, "", `#${slug}`);
  }
};

export default function SideNavDropdown({
  sections = [],
  currentSection = "",
  compact,
}) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "block", lg: "none" },
        position: "absolute",
        top: compact ? "40px" : "0rem",
        paddingRight: compact ? "2rem" : "0",
        width: "100%",
        zIndex: 100,
      }}
    >
      <FormControl fullWidth>
        <Select
          value={currentSection || sections[0]?.slug || ""}
          onChange={(e) => handleNavigation(e.target.value)}
          displayEmpty
          sx={{
            backgroundColor: "background.default",
            "& .MuiSelect-select": {
              paddingY: "0.75rem",
            },
          }}
        >
          <MenuItem value="" disabled>
            Jump to section...
          </MenuItem>
          {sections.map((section) => (
            <MenuItem
              key={section.slug}
              value={section.slug}
              sx={{ backgroundColor: "background.default" }}
            >
              {section.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
