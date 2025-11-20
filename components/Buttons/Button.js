import React from "react";
import { useTheme } from "next-themes";
import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'isPrimary' && prop !== 'darkMode'
})(({ theme, isPrimary, darkMode }) => ({
  fontSize: '0.875rem',
  padding: '0.25rem 0.5rem',
  margin: '0.25rem',
  borderRadius: '0.5rem',
  textTransform: 'none',
  transition: 'all 0.3s ease-out',
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

  ...(isPrimary && {
    backgroundColor: darkMode === 'dark' ? '#ffffff' : '#000000',
    color: darkMode === 'dark' ? '#000000' : '#ffffff',
    '&:hover': {
      backgroundColor: darkMode === 'dark' ? '#e5e5e5' : '#1a1a1a',
      transform: 'scale(1.05)',
    },
  }),

  ...(!isPrimary && {
    backgroundColor: 'transparent',
    color: darkMode === 'dark' ? '#ffffff' : '#000000',
    '&:hover': {
      backgroundColor: darkMode === 'dark' ? 'rgba(71, 85, 105, 0.6)' : '#BCB4A3',
      transform: 'scale(1.05)',
    },
  }),

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
      className={`link ${classes || ''}`}
      disableRipple
    >
      {children}
    </StyledButton>
  );
}

