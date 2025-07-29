"use client";
import demografiService from "@/services/demografi.service";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DemografiDesa() {
  const { data, isLoading } = useQuery({
    queryFn: demografiService.get,
    queryKey: ["demografi"],
  });

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  const totalL =
    data?.reduce((acc: any, cur: any) => acc + cur.laki_laki, 0) || 0;
  const totalP =
    data?.reduce((acc: any, cur: any) => acc + cur.perempuan, 0) || 0;
  const totalKK =
    data?.reduce((acc: any, cur: any) => acc + cur.jumlah_kk, 0) || 0;

  const totalPenduduk = totalL + totalP;

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-brand-600 text-center mb-10">
        Demografi Desa Wuwuk
      </h2>

      {/* Ringkasan */}
      <div className="max-w-4xl mx-auto text-gray-700 mb-12">
        <p className="text-lg leading-relaxed text-justify">
          Berdasarkan data populasi per wilayah, Desa Wuwuk memiliki jumlah
          penduduk sebanyak <strong>{totalPenduduk} jiwa</strong> yang tersebar
          di 5 wilayah (Jaga). Terdiri dari <strong>laki-laki</strong> sebanyak{" "}
          <strong>{totalL} jiwa</strong> dan <strong>perempuan</strong> sebanyak{" "}
          <strong>{totalP} jiwa</strong>, serta total{" "}
          <strong>{totalKK} KK</strong>.
        </p>
      </div>

      {/* Grafik per Wilayah */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold text-brand-800 text-center mb-6">
          Distribusi Penduduk per Wilayah (Jaga)
        </h3>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="wilayah" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="laki_laki"
                stackId="a"
                fill="#009a84"
                name="Laki-laki"
                barSize={50}
              />
              <Bar
                dataKey="perempuan"
                stackId="a"
                fill="#ff2a90"
                name="Perempuan"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
