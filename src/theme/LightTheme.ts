import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563EB', // آبی اصلی - از دکمه‌ها و هایلایت‌ها
      light: '#3B82F6',
      dark: '#1D4ED8',
    },
    secondary: {
      main: '#64748B', // خاکستری برای متن‌های ثانویه
      light: '#94A3B8',
      dark: '#475569',
    },
    background: {
      default: '#F3FAFE', // پس‌زمینه اصلی
      paper: '#FFFFFF', // کارت‌ها و سطوح
    },
    text: {
      primary: '#0F172A', // متن اصلی
      secondary: '#475569', // متن ثانویه
    },
  },
  direction: 'rtl',
});