"use client";

import React, { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartDataPoint {
  month: string;
  roas: number;
  conversions: number;
}

interface ChartProps {
  data: ChartDataPoint[];
}

// @ts-ignore - recharts has type conflicts with React 18
const ChartComponent: FC<ChartProps> = ({ data }) => {
  // @ts-ignore
  const ResponsiveContainerComponent = ResponsiveContainer as any;
  // @ts-ignore
  const LineChartComponent = LineChart as any;
  // @ts-ignore
  const CartesianGridComponent = CartesianGrid as any;
  // @ts-ignore
  const XAxisComponent = XAxis as any;
  // @ts-ignore
  const YAxisComponent = YAxis as any;
  // @ts-ignore
  const TooltipComponent = Tooltip as any;
  // @ts-ignore
  const LegendComponent = Legend as any;
  // @ts-ignore
  const LineComponent = Line as any;
  
  return (
    <ResponsiveContainerComponent width="100%" height="100%">
      <LineChartComponent data={data as any}>
        <CartesianGridComponent strokeDasharray="3 3" stroke="#333" />
        <XAxisComponent dataKey="month" stroke="#999" />
        <YAxisComponent yAxisId="left" stroke="#8884d8" />
        <YAxisComponent yAxisId="right" orientation="right" stroke="#ff9933" />
        <TooltipComponent
          contentStyle={{ background: "#1a1a1a", border: "1px solid #333" }}
        />
        <LegendComponent />
        <LineComponent
          yAxisId="left"
          type="monotone"
          dataKey="roas"
          stroke="#8884d8"
          strokeWidth={3}
          dot={{ fill: "#8884d8", r: 6 }}
        />
        <LineComponent
          yAxisId="right"
          type="monotone"
          dataKey="conversions"
          stroke="#ff9933"
          strokeWidth={3}
          dot={{ fill: "#ff9933", r: 6 }}
        />
      </LineChartComponent>
    </ResponsiveContainerComponent>
  );
};

export default ChartComponent;
