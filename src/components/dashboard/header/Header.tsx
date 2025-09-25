import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import SettingButton from "./SettingButton";
import { useTranslation } from "react-i18next";

// Header Component
export default function Header() {
  const { t } = useTranslation();
  const [location, setLocation] = useState<string | null>("");
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          paddingX: 1,
          paddingY: 1,
        }}
        position="static"
      >
        <Toolbar>
          {/* Title */}
          <Typography
            variant="h6"
            // noWrap
            component="div"
            fontSize={18}
            fontWeight={400}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {t("dashboard.header.title")}
          </Typography>
          {/* Search bar & Setting Button */}
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            {/* Search bar */}
            <FormControl size="small" sx={{ minWidth: 230 }}>
              <InputLabel id="location-select-label">
                {t("dashboard.header.label")}
              </InputLabel>
              <Select
                labelId="location-select-label"
                id="location-select"
                defaultValue=""
                label={t("dashboard.header.label")}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <MenuItem value="San Francisco">
                  {t("dashboard.header.San Francisco")}
                </MenuItem>
                <MenuItem value="New York">
                  {t("dashboard.header.city2")}
                </MenuItem>
                <MenuItem value="Los Angeles">
                  {t("dashboard.header.city3")}
                </MenuItem>
              </Select>
            </FormControl>
            {/* Setting Button */}
            <SettingButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
