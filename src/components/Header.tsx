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

// Header Component
export default function Header() {
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
            Weather Dashboard
          </Typography>
          {/* Search bar & Setting Button */}
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            {/* Search bar */}
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <InputLabel id="location-select-label">
                Search Your Location
              </InputLabel>
              <Select
                labelId="location-select-label"
                id="location-select"
                defaultValue=""
                label="Search Your Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <MenuItem value="San Francisco">San Francisco</MenuItem>
                <MenuItem value="New York">New York</MenuItem>
                <MenuItem value="Los Angeles">Los Angeles</MenuItem>
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
