"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const salesData = [
  { month: "فروردین", sales: 35 },
  { month: "اردیبهشت", sales: 48 },
  { month: "خرداد", sales: 40 },
  { month: "تیر", sales: 65 },
  { month: "مرداد", sales: 55 },
  { month: "شهریور", sales: 80 },
  { month: "مهر", sales: 72 },
];

export default function SalesChart() {
  return (
    <>
    <div className="h-75 w-full">
      <h1 className="text-foreground flex items-center justify-center mb-7 md:mr-50 ">
        آمار فروش محصولات
      </h1>
        <ResponsiveContainer height="100%" width="100%" className="max-w-350 max-h-75 flex mx-auto lg:mr-80  ">
          <LineChart
            data={salesData}
            margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid stroke="#303640" strokeDasharray="3 3" />

            <XAxis dataKey="month" stroke="#9CA3AF" tick={{ fontSize: 11 }} />

            <YAxis stroke="#9CA3AF" tick={{ fontSize: 12 }} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#171C22",
                border: "1px solid #FABE2C",
                borderRadius: "12px",
                color: "#FFFFFF",
              }}
              formatter={(value) => [`${value} میلیون`, "فروش"]}
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#FABE2C"
              strokeWidth={3}
              dot={{ r: 4, fill: "#FABE2C" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
    </div>
    </>
  );
}
