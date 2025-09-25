import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import { Divider, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router";
import DashboardPageLanguageSwitcher from "./DashboardPageLanguageSwitcher";
import DashboardPageThemeToggle from "./DashboardPageThemeToggle";

export default function SettingButton() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [anchorElSettings, setAnchorElSettings] = useState<null | HTMLElement>(
    null
  );

  const handleOpenSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSettings(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setAnchorElSettings(null);
  };

  const handleLogout = () => {
    navigate("/");
    handleCloseSettingsMenu();
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton
        onClick={handleOpenSettingsMenu}
        sx={{
          p: 1,
          bgcolor: theme.palette.background.default,
          "&:hover": {
            bgcolor: theme.palette.action.hover,
            borderColor: "grey.700",
          },
          border: 1,
          borderColor: "grey.400",
          borderRadius: "10%",
        }}
      >
        <SettingsIcon sx={{ fontSize: 24, color: "grey.700" }} />
      </IconButton>

      <Menu
        sx={{ mt: "45px" }}
        id="settings-menu"
        anchorEl={anchorElSettings}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElSettings)}
        onClose={handleCloseSettingsMenu}
      >
        <Box sx={{ paddingX: 2, minWidth: 200 }}>
          {/* Theme Toggle */}
          <DashboardPageThemeToggle />
          <Divider sx={{ mt: 2, mb: 1 }} />

          {/* Language Change */}
          <DashboardPageLanguageSwitcher />
          <Divider sx={{ mt: 2 }} />

          {/* Logout */}
          <MenuItem onClick={handleLogout} sx={{ mt: 1, px: 0 }}>
            <Typography
              fontSize={13}
              fontWeight={500}
              color={theme.palette.text.secondary}
            >
              {t("dashboard.header.Exit")}
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
}
