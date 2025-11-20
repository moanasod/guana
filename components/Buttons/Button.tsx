import React, { JSX } from "react";
import { useTheme } from "next-themes";
import { ButtonBase, Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'isPrimary' && prop !== 'isDarkMode'
})(({  isPrimary, isDarkMode }: {isPrimary: boolean, isDarkMode: boolean}) => ({
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
    backgroundColor: isDarkMode ? '#ffffff' : '#000000',
    color: isDarkMode  ? '#000000' : '#ffffff',
    '&:hover': {
      backgroundColor: isDarkMode ? '#e5e5e5' : '#1a1a1a',
      transform: 'scale(1.05)',
    },
  }),

  ...(!isPrimary && {
    backgroundColor: 'transparent',
    color: isDarkMode ? '#ffffff' : '#000000',
    '&:hover': {
      backgroundColor: isDarkMode ? 'rgba(71, 85, 105, 0.6)' : '#BCB4A3',
      transform: 'scale(1.05)',
    },
  }),

  '@media (min-width: 768px)': {
    fontSize: '1rem',
    padding: '0.5rem',
    margin: '0.5rem',
  },
}));

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void | undefined;
  type?: 'primary' | 'secondary'
  classes?: string;
}

export default function Button({ children, type, onClick, classes }: ButtonProps): JSX.Element {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <StyledButton
      onClick={onClick}
      type="button"
      isPrimary={type === "primary"}
      isDarkMode={isDarkMode}
      className={`link ${classes || ''}`}
      disableRipple
    >
      {children}
    </StyledButton>
  );
}

