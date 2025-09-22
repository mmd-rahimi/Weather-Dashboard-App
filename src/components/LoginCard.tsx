import { useContext, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ColorModeContext } from "../contexts/ColorModeContext";
import { NavLink } from "react-router";

export default function LoginPage() {
  const [name, setName] = useState<string>("");
  const [lang, setLang] = useState<"fa" | "en">("fa");

  const { currentMode } = useContext(ColorModeContext);

  const texts: Record<
    "fa" | "en",
    { title: string; placeholder: string; button: string; langLabel: string }
  > = {
    fa: {
      title: "ورود",
      placeholder: "نام خود را وارد کنید",
      button: "ورود",
      langLabel: "زبان",
    },
    en: {
      title: "Login",
      placeholder: "Enter your name",
      button: "Login",
      langLabel: "Language",
    },
  };

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
              {texts[lang].title}
            </Typography>

            <TextField
              size="small"
              fullWidth
              margin="normal"
              label={texts[lang].placeholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <NavLink to={"/dashboard"}>
              <Button fullWidth variant="contained" sx={{ mt: 14 }}>
                {texts[lang].button}
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
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Language
          </InputLabel>
          <Select
            sx={{ width: "100%" }}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            label="Language"
          >
            <MenuItem value="fa">فارسی</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
        {/* theme toggle */}
        <ThemeToggle />
      </Box>
    </Box>
  );
}
