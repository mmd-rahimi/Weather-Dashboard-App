import React from "react";
import { Box } from "@mui/material";
import DetailsWidget from "./DetailsWidget";
import ChartWidget from "./ChartWidget";

const WeatherWidgets: React.FC = () => {


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
      <Box sx={{ display: "flex", flexDirection: {xs:"column", sm:"row"}, gap:2 }}>
        <Box width="100%" sx={{display:"flex", flexDirection:{xs:"column", md:"row"}, gap:2}}>
      <DetailsWidget />
      <ChartWidget />
        </Box>
        {/* <WeekWidget /> */}
      </Box>
    </Box>
  );
};

export default WeatherWidgets;
