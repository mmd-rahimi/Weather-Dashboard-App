import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { weatherService } from "../../../services/weatherService";
import type { CustomBackground } from "../../../theme/DarkTheme";

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
          <Typography>Weather data not available</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ bgcolor: (theme.palette.background as CustomBackground).card }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 150,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "start",
            width: 140,
          }}
        >
          <Typography fontSize={20} fontWeight={600}>
            {weatherData.name}
          </Typography>
          <Typography fontSize={20} fontWeight={600}>
            {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
          </Typography>
          <Typography fontSize={20} fontWeight={600}>
            {Math.round(weatherData.main.temp)}°C
          </Typography>
        </Box>
        <Box fontSize={30} fontWeight={800}>
          {weatherData.weather[0]?.main || "Cloudy"}
        </Box>
      </CardContent>
    </Card>
  );
}

export default DetailsWidget;