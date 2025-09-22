import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3B82F6', // آبی روشن‌تر برای تم تیره
      light: '#60A5FA',
      dark: '#2563EB',
    },
    secondary: {
      main: '#94A3B8',
      light: '#CBD5E1',
      dark: '#64748B',
    },
    background: {
      default: '#151D32', // پس‌زمینه تیره اصلی
      paper: '#292F45', // کارت‌ها و سطوح تیره
    },
    text: {
      primary: '#F1F5F9', // متن سفید روشن
      secondary: '#CBD5E1', // متن خاکستری روشن
    },
  },
  direction: 'rtl',
});