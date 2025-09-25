import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { weatherService } from "../../../services/weatherService";
import type { CustomBackground } from "../../../theme/DarkTheme";
import { useTranslation } from "react-i18next";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
}

function DetailsWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const {t} = useTranslation()

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const data = await weatherService.getWeatherByCity("San Francisco");
        setWeatherData(data);
      } catch (err) {
        console.error("Error fetching weather:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <Card sx={{ bgcolor: (theme.palette.background as CustomBackground).card }}>
        <CardContent sx={{ height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography>Loading weather...</Typography>
        </CardContent>
      </Card>
    );
  }

  if (!weatherData) {
    return (
      <Card sx={{ bgcolor: (theme.palette.background as CustomBackground).card }}>
        <CardContent sx={{ height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography>{t("dashboard.body.AverageMonthlyTemprature")}</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ bgcolor: (theme.palette.background as CustomBackground).card,width:{xs:"100%", md:600}, borderRadius:2}}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: {xs:2, md:4},
            alignItems: "start",
          }}
        >
          <Typography fontSize={{xs:20, md:25}} fontWeight={600}>
            {t(`dashboard.header.${weatherData.name}`)}
          </Typography>
          <Typography fontSize={{xs:20, md:25}} fontWeight={600}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
          </Typography>
          <Typography fontSize={{xs:20, md:25}} fontWeight={600}>
            {Math.round(weatherData.main.temp)}°C
          </Typography>
        </Box>
        <Box fontSize={{xs:30, md:35}} fontWeight={800}>
          {weatherData.weather[0]?.main || "Cloudy"}
        </Box>
      </CardContent>
    </Card>
  );
}

export default DetailsWidget;