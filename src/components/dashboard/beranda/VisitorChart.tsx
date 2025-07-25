"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const visitorData = [
  { month: "Jan", total: 400 },
  { month: "Feb", total: 600 },
  { month: "Mar", total: 900 },
  { month: "Apr", total: 300 },
  { month: "Mei", total: 850 },
  { month: "Jun", total: 1020 },
  { month: "Jul", total: 720 },
];

export function VisitorChart() {
  return (
    <div className="bg-white dark:bg-muted p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">
        Statistik Pengunjung Bulanan
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={visitorData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
