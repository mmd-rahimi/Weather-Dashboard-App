import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../contexts/ColorModeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";

function LoginPageThemeToggle() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton
      size="large"
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === "dark" ? (
        <Brightness7 fontSize="large" />
      ) : (
        <Brightness4 fontSize="large" />
      )}
    </IconButton>
  );
}

export default LoginPageThemeToggle;
