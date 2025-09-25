import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LoginPageLanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const handleChange = (e: SelectChangeEvent) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
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
        {t("login.langLabel")}
      </InputLabel>
      <Select
        sx={{ width: "100%" }}
        value={i18n.language || "en"}
        onChange={handleChange}
      >
        <MenuItem value="fa">فارسی</MenuItem>
        <MenuItem value="en">English</MenuItem>
      </Select>
    </FormControl>
  );
}
