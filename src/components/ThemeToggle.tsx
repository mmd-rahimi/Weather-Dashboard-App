import { IconButton, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext } from "../contexts/ColorModeContext"
import { Brightness4, Brightness7 } from "@mui/icons-material";


function ThemeToggle() {

    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
}

export default ThemeToggle