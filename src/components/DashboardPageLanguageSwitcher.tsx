import { Box, Typography, useTheme } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export default function DashboardPageLanguageSwitcher() {

  const theme = useTheme()
  const [alignment, setAlignment] = useState('web');

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{display:"flex", flexDirection: "column", gap:1 }}>
    <Typography fontSize={13} fontWeight={500} color={theme.palette.text.secondary}>Language</Typography>
        <ToggleButtonGroup
        sx={{height: 29}}
      color="primary"
      value={alignment}
      exclusive
      fullWidth
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="en" sx={{textTransform: "none"}}>En</ToggleButton>
      <ToggleButton value="fa" sx={{textTransform: "none"}}>Fa</ToggleButton>
    </ToggleButtonGroup>
    </Box>
  );
}