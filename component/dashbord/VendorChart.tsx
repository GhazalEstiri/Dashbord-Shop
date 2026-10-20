
"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const storesData = [
  { name: "فروشگاه آوا", sales: 125 },
  { name: "فروشگاه نیلا", sales: 110 },
  { name: "فروشگاه ماهور", sales: 98 },
  { name: "فروشگاه آترین", sales: 90 },
  { name: "فروشگاه رستا", sales: 82 },
  { name: "فروشگاه دیبا", sales: 75 },
  { name: "فروشگاه مانا", sales: 68 },
  { name: "فروشگاه هانا", sales: 55 },
  { name: "فروشگاه ویانا", sales: 42 },
  { name: "فروشگاه باران", sales: 30 },
];

export default function TopStoresChart() {
  return (
    <div
      dir="rtl"
      className="w-full rounded-2xl border border-white/10
      bg-[#101318] p-5 text-white"
    >
      <h2 className="mb-1 text-lg font-bold text-[#FABE2C]">
        رتبه‌بندی فروشگاه‌ها
      </h2>

      <p className="mb-6 text-sm text-gray-400">
        بیشترین فروش در مهرماه
      </p>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={storesData}
            layout="vertical"
            margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#292D33"
            />

            <XAxis
              type="number"
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              type="category"
              dataKey="name"
              width={100}
              tick={{ fill: "#D1D5DB", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              formatter={(value) => [
                `${value} میلیون تومان`,
                "میزان فروش",
              ]}
              contentStyle={{
                backgroundColor: "#0C0F13",
                border: "1px solid #FABE2C",
                borderRadius: "8px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="sales"
              name="فروش"
              fill="#FABE2C"
              radius={[0, 5, 5, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
