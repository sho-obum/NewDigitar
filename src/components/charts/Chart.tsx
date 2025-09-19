// @ts-nocheck
import dynamic from 'next/dynamic';

const RechartsChart = dynamic(() => import('./RechartsChart'), { ssr: false });

interface DataPoint {
  month: string;
  roas: number;
  conversions: number;
}

interface ChartProps {
  data: DataPoint[];
}

const Chart = ({ data }: ChartProps) => {
  return <RechartsChart data={data} />;
};

export default Chart;
