// @ts-nocheck
import { 
  ResponsiveContainer, 
  ComposedChart as RComposedChart,
  Line as RLine,
  XAxis as RXAxis,
  YAxis as RYAxis,
  CartesianGrid as RCartesianGrid,
  Tooltip as RTooltip,
  Legend as RLegend
} from 'recharts';
import React from 'react';

interface DataPoint {
  month: string;
  roas: number;
  conversions: number;
}

interface ChartProps {
  data: DataPoint[];
}

const CustomTooltip = React.memo(({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#1a1a1a',
        border: '1px solid #333',
        borderRadius: '4px',
        color: 'white',
        padding: '8px 12px'
      }}>
        <p style={{ margin: '0 0 4px' }}>{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ margin: '2px 0', color: entry.color }}>
            {`${entry.name}: ${entry.dataKey === 'roas' ? entry.value + 'x' : entry.value?.toLocaleString()}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
});

const RechartsChart = ({ data }: ChartProps) => {
  const ResponsiveContainerComponent = ResponsiveContainer as any;
  const ComposedChartComponent = RComposedChart as any;
  
  return (
    <ResponsiveContainerComponent width="100%" height="90%">
      <ComposedChartComponent
        data={data}
        margin={{
          top: 20,
          right: 35,
          left: 15,
          bottom: 20,
        }}
      >
        <RCartesianGrid strokeDasharray="3 3" stroke="#333" />
        <RXAxis 
          dataKey="month" 
          stroke="#999"
          tick={{ fill: '#999' }}
        />
        <RYAxis 
          yAxisId="left"
          stroke="#8884d8"
          tickFormatter={(value: number) => `${value}x`}
          orientation="left"
          axisLine={{ stroke: '#8884d8' }}
          tickLine={{ stroke: '#8884d8' }}
          tickCount={5}
          tick={{ fill: '#999', fontSize: 12 }}
        />
        <RYAxis 
          yAxisId="right"
          stroke="#ff9933"
          tickFormatter={(value: number) => value.toLocaleString()}
          orientation="right"
          axisLine={{ stroke: '#ff9933' }}
          tickLine={{ stroke: '#ff9933' }}
          tickCount={5}
          tick={{ fill: '#999', fontSize: 12 }}
        />
        <RTooltip content={<CustomTooltip />} />
        <RLegend 
          iconType="circle"
          wrapperStyle={{
            paddingTop: '20px'
          }}
        />
        <RLine
          type="monotone"
          dataKey="roas"
          stroke="#8884d8"
          strokeWidth={4}
          yAxisId="left"
          name="ROAS"
          dot={{ stroke: '#8884d8', strokeWidth: 2, r: 5, fill: '#1a1a1a' }}
        />
        <RLine
          type="monotone"
          dataKey="conversions"
          stroke="#ff9933"
          strokeWidth={4}
          yAxisId="right"
          name="Conversions"
          dot={{ stroke: '#ff9933', strokeWidth: 2, r: 5, fill: '#1a1a1a' }}
        />
    </ComposedChartComponent>
  </ResponsiveContainerComponent>
  );
};

export default RechartsChart;
