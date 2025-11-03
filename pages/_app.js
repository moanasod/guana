import "../styles/globals.css";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState, Suspense } from "react";
import { useTheme } from "next-themes";
import theme, { darkTheme } from "../styles/theme";
import LoadingPage from "../components/LoadingPage";

// Wrapper to sync next-themes with MUI theme
function MuiThemeWrapper({ children }) {
  const { theme: nextTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent flash of unstyled content
  if (!mounted) {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
  }

  const currentTheme = resolvedTheme === 'dark' || nextTheme === 'dark' ? darkTheme : theme;

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

const App = ({ Component, pageProps }) => {
  return (
    <NextThemeProvider>
      <MuiThemeWrapper>
        <Suspense fallback={<LoadingPage />}>
          <Component {...pageProps} />
        </Suspense>
      </MuiThemeWrapper>
    </NextThemeProvider>
  );
};

export default App;
