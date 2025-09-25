import { createTheme } from "@mui/material/styles";

export interface CustomBackground {
  default: string;
  paper: string;
  card: string;
  card2: string;
}

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },
    secondary: {
      main: "#94A3B8",
      light: "#CBD5E1",
      dark: "#64748B",
    },
    background: {
      default: "#151D32",
      card: "#292F45",
      card2: "#3F4861",
      paper: "#292F45",
    } as CustomBackground,
    text: {
      primary: "#F1F5F9",
      secondary: "#CBD5E1",
    },
  },
  direction: "rtl",
});
