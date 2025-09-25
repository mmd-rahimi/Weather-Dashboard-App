import React from "react";
import { Box } from "@mui/material";
import DetailsWidget from "./DetailsWidget";
import ChartWidget from "./ChartWidget";
import WeeklyWidget from "./WeeklyWidget";

const WeatherWidgets: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <DetailsWidget />
          <ChartWidget />
        </Box>
        <WeeklyWidget />
      </Box>
    </Box>
  );
};

export default WeatherWidgets;
