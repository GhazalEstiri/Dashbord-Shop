"use client";

import { useTranslations } from "next-intl";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


export default function SalesChart() {
  const t = useTranslations("SalesChart")

   const salesData = [
    { month: t("months.farvardin"), sales: 35 },
    { month: t("months.ordibehesht"), sales: 48 },
    { month: t("months.khordad"), sales: 40 },
    { month: t("months.tir"), sales: 65 },
    { month: t("months.mordad"), sales: 55 },
    { month: t("months.shahrivar"), sales: 80 },
    { month: t("months.mehr"), sales: 72 },
  ];
  return (
    <>
      <div className="h-90 max-w-300  mb-20 flex justify-center flex-col items-center  mr-80">
        <h1 className="text-foreground flex items-center justify-center text-center">
       {t("title")}
        </h1>
        <ResponsiveContainer height="100%" width="100%">
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
