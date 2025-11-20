import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

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

export default function SideNav({ sections = [], currentSection = "" }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: "300px",
        left: { xs: 0, lg: "calc((100vw - 1200px)/2)" },
        height: "fit-content",
        minWidth: { xs: 0, lg: "220px" },
        maxWidth: "220px",
        display: { xs: "none", lg: "block" },
        paddingRight: "2rem",
        borderRight: "1px solid",
        borderColor: "divider",
        zIndex: 10,
      }}
    >
      <List sx={{ padding: 0 }}>
        {sections.map((section) => (
          <ListItem key={section.slug} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(section.slug)}
              sx={{
                paddingY: "0.5rem",
                paddingX: "1rem",
                borderRadius: "8px",
                marginBottom: "0.25rem",
                transition: "all 0.2s ease",
                backgroundColor:
                  currentSection === section.slug
                    ? "action.selected"
                    : "transparent",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              <ListItemText
                primary={section.title}
                primaryTypographyProps={{
                  fontSize: "0.9rem",
                  fontWeight: currentSection === section.slug ? 600 : 400,
                  color:
                    currentSection === section.slug
                      ? "secondary.main"
                      : "text.primary",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
