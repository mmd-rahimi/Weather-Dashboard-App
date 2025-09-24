import { Box, Typography, useTheme } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DashboardPageLanguageSwitcher() {

  const theme = useTheme()
  const {t, i18n } = useTranslation();
  const [alignment, setAlignment] = useState(i18n.language || 'en');

  useEffect(() => {
    setAlignment(i18n.language);
  }, [i18n.language]);

  const handleChangeAlignment = (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      i18n.changeLanguage(newAlignment);
      localStorage.setItem("i18nextLng", newAlignment);
    }
  };

  return (
    <Box sx={{display:"flex", flexDirection: "column", gap:1 }}>
    <Typography fontSize={13} fontWeight={500} color={theme.palette.text.secondary}>{t("dashboard.header.Language")}</Typography>
        <ToggleButtonGroup
        sx={{height: 29}}
      color="primary"
      value={alignment}
      exclusive
      fullWidth
      onChange={handleChangeAlignment}
      aria-label="Platform"
    >
      <ToggleButton value="en" sx={{textTransform: "none"}}>{t("dashboard.header.en")}</ToggleButton>
      <ToggleButton value="fa" sx={{textTransform: "none"}}>{t("dashboard.header.fa")}</ToggleButton>
    </ToggleButtonGroup>
    </Box>
  );
}