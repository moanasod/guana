import React from "react";
import { useTheme } from "next-themes";
import data from "../data/portfolio.json";
import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'isPrimary' && prop !== 'darkMode' && prop !== 'showCursor'
})(({ theme, isPrimary, darkMode, showCursor }) => ({
  fontSize: '0.875rem',
  padding: '0.25rem 0.5rem',
  margin: '0.25rem',
  borderRadius: '0.5rem',
  textTransform: 'none',
  transition: 'all 0.3s ease-out',
  cursor: showCursor ? 'none' : 'pointer',
  display: 'flex',
  alignItems: 'center',
  
  '&:first-of-type': {
    marginLeft: 0,
  },
  
  '&:hover': {
    transform: 'scale(1.05)',
  },
  
  '&:active': {
    transform: 'scale(1)',
  },

  // Primary button styles
  ...(isPrimary && {
    backgroundColor: darkMode === 'dark' ? '#ffffff' : '#000000',
    color: darkMode === 'dark' ? '#000000' : '#ffffff',
    '&:hover': {
      backgroundColor: darkMode === 'dark' ? '#e5e5e5' : '#1a1a1a',
      transform: 'scale(1.05)',
    },
  }),

  // Default button styles
  ...(!isPrimary && {
    backgroundColor: 'transparent',
    color: darkMode === 'dark' ? '#ffffff' : '#000000',
    '&:hover': {
      backgroundColor: darkMode === 'dark' ? 'rgba(71, 85, 105, 0.6)' : 'rgba(241, 245, 249, 1)',
      transform: 'scale(1.05)',
    },
  }),

  // Responsive styles
  '@media (min-width: 768px)': {
    fontSize: '1rem',
    padding: '0.5rem',
    margin: '0.5rem',
  },
}));

export default function Button({ children, type, onClick, classes }) {
  const { theme } = useTheme();
  
  return (
    <StyledButton
      onClick={onClick}
      type="button"
      isPrimary={type === "primary"}
      darkMode={theme}
      showCursor={data.showCursor}
      className={`link ${classes || ''}`}
      disableRipple
    >
      {children}
    </StyledButton>
  );
}

