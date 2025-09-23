import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";

const settingOptions = ["Profile", "Account", "Dashboard", "Logout"];

export default function SettingButton() {
  const [anchorElSettings, setAnchorElSettings] = React.useState<null | HTMLElement>(null);

  const handleOpenSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSettings(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setAnchorElSettings(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Settings">
        <IconButton
          onClick={handleOpenSettingsMenu}
          sx={{
            p: 1,
            bgcolor: "grey.100",
            "&:hover": { bgcolor: "grey.200" },
            borderRadius: "10%",
          }}
        >
          <SettingsIcon sx={{ fontSize: 25, color: "grey.700" }} />
        </IconButton>
      </Tooltip>
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
        {settingOptions.map((option) => (
          <MenuItem key={option} onClick={handleCloseSettingsMenu}>
            <Typography textAlign="center">{option}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
