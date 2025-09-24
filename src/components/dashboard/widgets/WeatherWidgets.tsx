import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Alert, Card, CardContent, useTheme, Typography } from "@mui/material";
import { weatherService } from "../../../services/weatherService";
import type { CustomBackground } from "../../../theme/DarkTheme";
import DetailsWidget from "./DetailsWidget";

const WeatherWidgets: React.FC = () => {
  // const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string>("");

  // const theme = useTheme()

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await weatherService.getWeatherByCity("San Francisco");
  //       setWeatherData(data);
  //     } catch (err) {
  //       setError("خطا در دریافت اطلاعات آب و هوا");
  //       console.error("Error fetching weather:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchWeather();
  // }, []);

  // if (loading) {
  //   return (
  //     <Box display="flex" justifyContent="center" p={2}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // if (error) {
  //   return <Alert severity="error">{error}</Alert>;
  // }

  // if (!weatherData) {
  //   return null;
  // }

  return (
    // <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
    //   <Typography variant="h6" gutterBottom>
    //     آب و هوای {weatherData.name}
    //   </Typography>
    //   <Typography>دما: {Math.round(weatherData.main.temp)}°C</Typography>
    //   <Typography>رطوبت: {weatherData.main.humidity}%</Typography>
    //   <Typography>وضعیت: {weatherData.weather[0].description}</Typography>
    //   <Typography>سرعت باد: {weatherData.wind.speed} m/s</Typography>
    // </Box>

    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
      <DetailsWidget />
      </Box>
    </Box>
  );
};

export default WeatherWidgets;
