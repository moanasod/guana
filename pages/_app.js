import "../styles/globals.css";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect, useState, Suspense } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import theme, { darkTheme } from "../styles/theme";
import LoadingPage from "../components/LoadingPage";
import Spinner from "../components/Spinner";

function MuiThemeWrapper({ children }) {
  const { theme: nextTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
  }

  const currentTheme =
    resolvedTheme === "dark" || nextTheme === "dark" ? darkTheme : theme;

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      // Extract pathname without hash for comparison
      const currentPath = router.asPath.split("#")[0];
      const newPath = url.split("#")[0];

      // Only show loading if we're actually changing pages (not just hash)
      if (newPath !== currentPath) {
        setLoading(true);
      }
    };

    const handleComplete = () => {
      setLoading(false);
    };

    const handleError = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
    };
  }, [router]);

  return (
    <NextThemeProvider defaultTheme="light" attribute="class">
      <MuiThemeWrapper>
        <Suspense fallback={<LoadingPage />}>
          <Component {...pageProps} />
          {loading && <Spinner />}
        </Suspense>
      </MuiThemeWrapper>
    </NextThemeProvider>
  );
};

export default App;
