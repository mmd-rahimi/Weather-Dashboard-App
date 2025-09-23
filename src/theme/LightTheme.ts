import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563EB',
      light: '#3B82F6',
      dark: '#1D4ED8',
    },
    secondary: {
      main: '#64748B',
      light: '#94A3B8',
      dark: '#475569',
    },
    background: {
      default: '#F3FAFE',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#003464',
      secondary: '#000',
    },
  },
  direction: 'rtl',
});