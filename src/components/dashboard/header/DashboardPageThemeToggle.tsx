import { Box, Typography, useTheme } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "../../../contexts/ColorModeContext";

export default function DashboardPageThemeToggle() {
  const { currentMode, toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const [alignment, setAlignment] = useState("");
  const { t } = useTranslation();

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography
        fontSize={13}
        fontWeight={500}
        color={theme.palette.text.secondary}
      >
        {t("dashboard.header.Mode")}
      </Typography>
      <ToggleButtonGroup
        sx={{ height: 29 }}
        color="primary"
        value={alignment}
        exclusive
        fullWidth
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton
          selected={currentMode === "light"}
          onClick={() => {
            if (currentMode !== "light") {
              toggleColorMode();
            }
          }}
          value="light"
          sx={{ textTransform: "none" }}
        >
          {t("dashboard.header.light")}
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            if (currentMode !== "dark") {
              toggleColorMode();
            }
          }}
          selected={currentMode === "dark"}
          value="dark"
          sx={{ textTransform: "none" }}
        >
          {t("dashboard.header.dark")}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
