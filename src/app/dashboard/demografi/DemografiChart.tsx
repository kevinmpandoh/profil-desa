"use client";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from "recharts";

export default function DemografiChart({ data }: { data: any }) {
  const genderData = [
    { label: "Laki-laki", jumlah: data.laki_laki },
    { label: "Perempuan", jumlah: data.perempuan },
  ];

  const usiaData = [
    { label: "0–14 Tahun", jumlah: data.usia_0_14 },
    { label: "15–29 Tahun", jumlah: data.usia_15_29 },
    { label: "30–49 Tahun", jumlah: data.usia_30_49 },
    { label: "50+ Tahun", jumlah: data.usia_50_plus },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-semibold text-lg text-muted-foreground text-center mb-2">
          Berdasarkan Jenis Kelamin
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={genderData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="jumlah" fill="#4caf50" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-muted-foreground text-center mb-2">
          Berdasarkan Kelompok Usia
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={usiaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="jumlah" fill="#81c784" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
