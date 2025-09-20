import { useState } from "react";
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

export default function LoginPage() {
  const [name, setName] = useState<string>("");
  const [lang, setLang] = useState<"fa" | "en">("fa");

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
            xs: "90%",
            sm: 420,
            md: 600,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            sm: "row-reverse",
          },
          mb: 3,
        }}
      >
        {/* login form hero */}
        <Card sx={{ width: "40%" }}>svddd</Card>

        {/* login form */}
        <Card
          sx={{
            width: "60%",
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: "#fff",
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
              fullWidth
              margin="normal"
              label={texts[lang].placeholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button fullWidth variant="contained" sx={{ mt: 14 }}>
              {texts[lang].button}
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* select lang */}
      <FormControl
        variant="standard"
        sx={{
          width: 120,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
        <Select
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
    </Box>
  );
}
