import { useContext, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import ThemeToggle from "./LoginPageThemeToggle";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { NavLink } from "react-router";
import LanguageSwitcher from "./LoginPageLanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const [name, setName] = useState<string>("");
  const { currentMode } = useContext(ColorModeContext);
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: 280,
            sm: 420,
            md: 700,
          },
          height: { xs: 400, sm: 400 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            sm: "row-reverse",
          },
          mb: 3,
          borderRadius: 4,
        }}
      >
        {/* login form hero */}
        <Card
          sx={{
            width: "45%",
            height: "100%",
            background: currentMode === "light" ? "#D3E1E7" : "#404961",
            display: { xs: "none", sm: "flex" },
            justifyItems: "center",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
              }}
            >
              <img className="image" src="./public/top.png" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <img className="image" src="./public/mid.png" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
              }}
            >
              <img className="image" src="./public/bottom.png" />
            </Box>
          </CardContent>
        </Card>

        {/* login form */}
        <Card
          sx={{
            width: { xs: "100%", sm: "55%" },
            height: "100%",
            px: 4,
          }}
        >
          <CardContent sx={{ mt: 6 }}>
            <Typography
              variant="h6"
              gutterBottom
              textAlign="center"
              fontWeight="bold"
              fontSize={25}
            >
              {t("login.title")}
            </Typography>

            <TextField
              size="small"
              fullWidth
              margin="normal"
              label={t("login.placeholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <NavLink to={"/dashboard"}>
              <Button fullWidth variant="contained" sx={{ mt: 14 }}>
                {t("login.button")}
              </Button>
            </NavLink>
          </CardContent>
        </Card>
      </Box>

      {/* select lang & theme toggle */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 2, sm: 4, md: 8 },
          direction: "rtl",
        }}
      >
        {/* select lang */}
        <LanguageSwitcher />
        {/* theme toggle */}
        <ThemeToggle />
      </Box>
    </Box>
  );
}
