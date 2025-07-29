"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import demografiService from "@/services/demografi.service";

export function BarChartWilayah() {
  const { data, isLoading } = useQuery({
    queryKey: ["demografi"],
    queryFn: demografiService.get,
  });

  const chartData = data?.map((item: any) => ({
    wilayah: item.wilayah,
    jumlah: item.jumlah_kk,
  }));

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Penduduk per Wilayah</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} barCategoryGap={"30%"} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="wilayah" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="jumlah"
            fill="#16a34a"
            barSize={30}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
