"use client";
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

const dataPerWilayah = [
  {
    wilayah: "Jaga I",
    ketua: "Venlly Momongan",
    kk: 64,
    laki: 83,
    perempuan: 92,
    total: 175,
  },
  {
    wilayah: "Jaga II",
    ketua: "Eben W. Rumintjap",
    kk: 59,
    laki: 80,
    perempuan: 79,
    total: 139,
  },
  {
    wilayah: "Jaga III",
    ketua: "Rolly P. Sorongan",
    kk: 58,
    laki: 78,
    perempuan: 75,
    total: 153,
  },
  {
    wilayah: "Jaga IV",
    ketua: "Julian A. Rumengan",
    kk: 58,
    laki: 97,
    perempuan: 100,
    total: 197,
  },
  {
    wilayah: "Jaga V",
    ketua: "Stevan B. Wuisan",
    kk: 60,
    laki: 97,
    perempuan: 79,
    total: 176,
  },
];

export default function DemografiDesa() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        Demografi Desa Wuwuk
      </h2>

      {/* Ringkasan */}
      <div className="max-w-4xl mx-auto text-gray-700 mb-12">
        <p className="text-lg leading-relaxed text-justify">
          Berdasarkan data populasi per wilayah, Desa Wuwuk memiliki jumlah
          penduduk sebanyak <strong>840 jiwa</strong> yang tersebar di 5 wilayah
          (Jaga). Terdiri dari <strong>laki-laki</strong> sebanyak{" "}
          <strong>435 jiwa</strong> dan <strong>perempuan</strong> sebanyak{" "}
          <strong>405 jiwa</strong>, serta total <strong>299 KK</strong>.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-green-50 border border-green-200 p-4 rounded-lg">
          <div>
            <p>
              <strong>Kode Wilayah:</strong> 710513 2008
            </p>
            <p>
              <strong>Kode Pos:</strong> 95353
            </p>
            <p>
              <strong>Kecamatan:</strong> Tareran
            </p>
            <p>
              <strong>Kabupaten/Kota:</strong> Minahasa Selatan
            </p>
            <p>
              <strong>Provinsi:</strong> Sulawesi Utara
            </p>
          </div>
          <div>
            <p>
              <strong>Luas Wilayah:</strong> 875 Km<sup>2</sup>
            </p>
            <p>
              <strong>Batas Utara:</strong> Desa Wiau Lapi Barat
            </p>
            <p>
              <strong>Batas Selatan:</strong> Desa Koreng
            </p>
            <p>
              <strong>Batas Barat:</strong> Desa Wuwuk Barat
            </p>
            <p>
              <strong>Batas Timur:</strong> Desa Rumoong Atas
            </p>
          </div>
        </div>
      </div>

      {/* Grafik per Wilayah */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold text-green-800 text-center mb-6">
          Distribusi Penduduk per Wilayah (Jaga)
        </h3>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataPerWilayah}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="wilayah" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="laki" stackId="a" fill="#4caf50" name="Laki-laki" />
              <Bar
                dataKey="perempuan"
                stackId="a"
                fill="#81c784"
                name="Perempuan"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
