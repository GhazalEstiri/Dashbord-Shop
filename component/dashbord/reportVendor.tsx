"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  useChartHeight,
  useYAxisScale,
} from "recharts";
// import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: "فروردین",
    sale: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: " اردیبهشت",
    sale: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "خرداد",
    sale: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: " تیر",
    sale: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "مرداد",
    sale: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "شهریور",
    sale: -250,
    pv: 3800,
    amt: 2500,
  },
 
];

// #endregion

const Gradient = () => {
  const scale = useYAxisScale();
  const height = useChartHeight();
  const scaledZero = scale?.(0);
  if (scaledZero == null || height == null) {
    return null;
  }
  const ratio = scaledZero / height;
  return (
    <defs>
      <linearGradient
        id="splitColor"
        x1="0"
        x2="0"
        y1="0"
        y2={height}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#805b10" stopOpacity={1} />
        <stop offset={`${ratio}`} stopColor="#FABE2C" stopOpacity={0.1} />
        <stop offset={`${ratio}`} stopColor="#ffe169" stopOpacity={0.1} />
        <stop offset="1" stopColor="#c9a227" stopOpacity={1} />
      </linearGradient>
    </defs>
  );
};

const AreaChartFillByValue = () => {
  return (
    <div className="h-90 max-w-400  mb-20  flex justify-center flex-col items-center  mr-80">
      <AreaChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Gradient />
        <Area
          type="monotoneX"
          dataKey="sale"
          stroke="#FABE2C"
          fill="url(#splitColor)"
        />
        {/* <RechartsDevtools /> */}
      </AreaChart>
    </div>
  );
};

export default AreaChartFillByValue;
