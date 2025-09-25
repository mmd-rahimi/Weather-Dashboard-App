import { Card, CardContent, Typography, useTheme } from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import type { CustomBackground } from "../../../theme/DarkTheme";

const data = [
  { month: "Jan", temp: 12 },
  { month: "Feb", temp: 20 },
  { month: "Mar", temp: 22 },
  { month: "Apr", temp: 15 },
  { month: "May", temp: 25 },
  { month: "Jun", temp: 28 },
  { month: "Jul", temp: 36 },
  { month: "Aug", temp: 32 },
  { month: "Sep", temp: 35 },
  { month: "Oct", temp: 29 },
  { month: "Nov", temp: 27 },
  { month: "Dec", temp: 31 },
];

export default function AvgMonthlyTempCard() {
  const theme = useTheme();
  const primary = theme.palette.primary.main ?? "#5b6af6";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "100%",
        borderRadius: 2,
        bgcolor: (theme.palette.background as CustomBackground).card,
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, mb: 1, color: theme.palette.text.primary, fontSize:{xs:18, md:25} }}
        >
          Average Monthly Temperature
        </Typography>

        <div style={{ width: "100%", height: 160 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e6eef6" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#4c6b7a" }}
                padding={{ left: 6, right: 6 }}
              />
              <YAxis
                domain={[0, 40]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#4c6b7a" }}
                tickFormatter={(v) => `${v}°c`}
                width={48}
              />
              <Tooltip formatter={(value: number) => `${value}°c`} />

              <Line
                type="monotone"
                dataKey="temp"
                stroke={primary}
                strokeWidth={2.6}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
