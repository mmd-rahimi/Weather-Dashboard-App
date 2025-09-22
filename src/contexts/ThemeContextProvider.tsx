import { useMemo, useState, useEffect, type ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext, type ThemeMode } from "./ColorModeContext";
import { lightTheme } from "../theme/LightTheme";
import { darkTheme } from "../theme/DarkTheme";

export default function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(
    (localStorage.getItem("appTheme") as ThemeMode) || "light"
  );

  useEffect(() => {
    localStorage.setItem("appTheme", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
      currentMode: mode,
    }),
    [mode]
  );

  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}