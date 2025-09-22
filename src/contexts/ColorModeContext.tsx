import { createContext } from "react";

type ThemeMode = "light" | "dark";

interface ColorModeContextType {
  toggleColorMode: () => void;
  currentMode: ThemeMode;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  currentMode: "light",
});

export type { ThemeMode };