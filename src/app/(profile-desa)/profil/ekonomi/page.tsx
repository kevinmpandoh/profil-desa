"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EkonomiDesa = () => {
  const dataEkonomi = [
    {
      sektor: "Pertanian dan Perkebunan",
      deskripsi:
        "Mayoritas penduduk desa Seretan bekerja di sektor pertanian dan perkebunan. Komoditas utama meliputi padi, jagung, kelapa, dan cengkeh.",
      persentase: 45,
    },
    {
      sektor: "Peternakan",
      deskripsi:
        "Sebagian masyarakat juga menggantungkan hidup dari peternakan, terutama sapi, babi, dan unggas.",
      persentase: 20,
    },
    {
      sektor: "Perdagangan",
      deskripsi:
        "Aktivitas perdagangan seperti toko kelontong, pasar kecil, dan penjualan hasil pertanian menjadi salah satu penunjang ekonomi masyarakat.",
      persentase: 25,
    },
    {
      sektor: "Industri Rumah Tangga",
      deskripsi:
        "Terdapat usaha kecil seperti pembuatan makanan ringan, anyaman bambu, dan kerajinan lokal lainnya yang turut meningkatkan pendapatan warga.",
      persentase: 10,
    },
  ];

  const COLORS = ["#4caf50", "#66bb6a", "#81c784", "#a5d6a7"];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-brand-600">
        Ekonomi Desa
      </h2>

      {/* Diagram Pie */}
      <div className="max-w-3xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-4 text-center text-brand-800">
          Distribusi Sektor Ekonomi Masyarakat
        </h3>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataEkonomi}
                dataKey="persentase"
                nameKey="sektor"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {dataEkonomi.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* List Card Ekonomi */}
      <div className="max-w-5xl mx-auto space-y-6 text-gray-700">
        {dataEkonomi.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border-l-4 border-brand-600"
          >
            <h3 className="text-xl font-semibold mb-2 text-brand-800">
              {item.sektor}
            </h3>
            <p className="text-base leading-relaxed">{item.deskripsi}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EkonomiDesa;
