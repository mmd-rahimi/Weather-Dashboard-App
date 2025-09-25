import React from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { CustomBackground } from "../../../theme/DarkTheme";

interface IWeeklyWidget {
  day: string;
  temp: number;
  icon: string;
}

const WeeklyWidget: React.FC = () => {
  const forecast: IWeeklyWidget[] = [
    { day: "Today", temp: 28, icon: "🌤️" },
    { day: "Monday", temp: 31, icon: "🌤️" },
    { day: "Tuesday", temp: 27, icon: "🌧️" },
    { day: "Wednesday", temp: 29, icon: "⛈️" },
    { day: "Thursday", temp: 32, icon: "☀️" },
    { day: "Friday", temp: 31, icon: "🌞" },
    { day: "Saturday", temp: 28, icon: "🌧️" },
  ];

  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        p: 2,
        bgcolor: (theme.palette.background as CustomBackground).card,
      }}
    >
      <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
        {t("dashboard.body.Weekly")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, md: 4 },
          mt: 2,
          justifyContent: "center",
        }}
      >
        {forecast.map((day) => (
          <Card
            key={day.day}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              px: 2,
              py: 4,
              textAlign: "center",
              borderRadius: 2,
              bgcolor: (theme.palette.background as CustomBackground).card2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 25, sm: 15, md: 20 },
                fontWeight: { xs: 600 },
              }}
            >
              {t(`dashboard.body.${day.day}`)}
            </Typography>
            <Typography sx={{ fontSize: { xs: 45, sm: 20, md: 30 } }}>
              {day.icon}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 15, md: 20 },
                fontWeight: { xs: 300 },
              }}
            >
              {day.temp}°C
            </Typography>
          </Card>
        ))}
      </Box>
    </Card>
  );
};

export default WeeklyWidget;
