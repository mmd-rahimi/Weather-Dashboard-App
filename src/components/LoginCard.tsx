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

  const texts: Record<"fa" | "en", { title: string; placeholder: string; button: string; langLabel: string }> = {
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
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    px: 2,
  }}
>
    {/* login form hero */}
    <Card>

    </Card>

    {/* login form */}
  <Card
    sx={{
      width: 360,
      p: 3,
      borderRadius: 2,
      boxShadow: 3,
      bgcolor: "#ffff",
    }}
  >
    <CardContent sx={{mt: 6}}>
      <Typography variant="h6" gutterBottom textAlign="center" fontWeight="bold" fontSize={25}>
        {texts[lang].title}
      </Typography>

      <TextField
        fullWidth
        margin="normal"
        label={texts[lang].placeholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 14 }}
      >
        {texts[lang].button}
      </Button>
    </CardContent>
  </Card>

    {/* select lang */}
      <FormControl variant="standard" sx={{ mt: 5, minWidth: 120 }}>
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
