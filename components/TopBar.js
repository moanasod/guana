import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Typography, Box, Stack } from "@mui/material";
import data from "../data/portfolio.json";
import Button from "./Buttons/Button";
import AppBar from "@mui/material/AppBar";
import DarkModeToggle from "./Buttons/DarkModeToggle";
import { getAssetPath } from "../utils/getAssetPath";

const styles = {
  mobileAppBar: {
    display: { xs: "flex", md: "none" },
    backgroundColor: "transparent",
    backdropFilter: "blur(10px)",
    padding: "0.5rem 1rem",
    mask: "linear-gradient(black, black, black, transparent)",
    overflow: "visible",
  },
  popOverPanel: {
    position: "fixed",
    right: "1rem",
    top: "3rem",
    zIndex: 9999,
    width: "90%",
    maxWidth: "320px",
  },
  desktopAppBar: {
    display: { xs: "none", md: "flex" },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    backdropFilter: "blur(5px)",
    mask: "linear-gradient(black, black, black, transparent)",
    padding: "1rem 2rem",
  },
};

export default function TopBar({
  handleWorkScroll,
  handleFAQScroll,
  handleItineraryScroll,
  isFAQ,
}) {
  const router = useRouter();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [mounted, setMounted] = useState(false);

  const { name } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    {
      label: "Itinerary",
      onClick: handleItineraryScroll,
    },
    {
      label: "Wedding Details",
      onClick: handleWorkScroll,
    },
    // {
    //   label: "FAQ",
    //   onClick: handleFAQScroll,
    // },

    {
      label: "FAQ",
      onClick: () => router.push("/faq"),
    },
  ];

  return (
    <>
      {/* Mobile*/}
      <Popover>
        {({ open }) => (
          <>
            <AppBar position="fixed" sx={styles.mobileAppBar}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h6"
                  onClick={() => router.push("/")}
                  sx={{
                    cursor: "pointer",
                    color: isDarkMode ? "white" : "text.primary",
                  }}
                >
                  {name}.
                </Typography>

                <Stack direction="row" alignItems="center">
                  {data.darkMode && <DarkModeToggle />}

                  <Popover.Button>
                    <Box
                      component="img"
                      src={getAssetPath(
                        `/images/${
                          !open
                            ? isDarkMode
                              ? "menu-white.svg"
                              : "menu.svg"
                            : isDarkMode
                            ? "cancel-white.svg"
                            : "cancel.svg"
                        }`
                      )}
                      sx={{ width: 24, height: 24 }}
                    />
                  </Popover.Button>
                </Stack>
              </Stack>
            </AppBar>

            <Popover.Panel
              style={styles.popOverPanel}
              className={`p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isFAQ ? (
                <Stack spacing={1}>
                  {menuItems.map((item) => (
                    <Button key={item.label} onClick={item.onClick}>
                      {item.label}
                    </Button>
                  ))}
                </Stack>
              ) : (
                <Stack spacing={1}>
                  <Button onClick={() => router.push("/")}>Home</Button>
                  <Button onClick={() => router.push("/faq")}>FAQ</Button>
                </Stack>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Desktop Navigation */}
      <AppBar position="fixed" sx={styles.desktopAppBar}>
        <Typography
          variant="h6"
          onClick={() => router.push("/")}
          sx={{
            cursor: "pointer",
            color: isDarkMode ? "primary.main" : "text.primary",
          }}
        >
          {name}.
        </Typography>
        {!isFAQ ? (
          <Stack direction="row" spacing={1}>
            {menuItems.map((item) => (
              <Button key={item.label} onClick={item.onClick}>
                {item.label}
              </Button>
            ))}
            {mounted && theme && data.darkMode && <DarkModeToggle />}
          </Stack>
        ) : (
          <Stack direction="row" spacing={1}>
            <Button onClick={() => router.push("/")}>Home</Button>
            <Button onClick={() => router.push("/faq")}>FAQ</Button>
            {mounted && theme && data.darkMode && <DarkModeToggle />}
          </Stack>
        )}
      </AppBar>
    </>
  );
}
