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

const DemografiDesa = () => {
  const dataJenisKelamin = [
    { jenis: "Laki-laki", jumlah: 560 },
    { jenis: "Perempuan", jumlah: 590 },
  ];

  const dataKelompokUsia = [
    { kelompok: "0-14 Tahun", jumlah: 230 },
    { kelompok: "15-29 Tahun", jumlah: 310 },
    { kelompok: "30-49 Tahun", jumlah: 340 },
    { kelompok: "50+ Tahun", jumlah: 270 },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
        Demografi Desa
      </h2>

      {/* Ringkasan */}
      <div className="max-w-4xl mx-auto text-gray-700 mb-12">
        <p className="text-lg leading-relaxed text-justify">
          Desa Seretan memiliki jumlah penduduk sekitar{" "}
          <strong>1.150 jiwa</strong>, yang terdiri dari{" "}
          <strong>560 laki-laki</strong> dan <strong>590 perempuan</strong>.
          Penduduk tersebar dalam berbagai kelompok usia, dengan mayoritas
          berada pada usia produktif (15–49 tahun).
        </p>
      </div>

      {/* Grafik Jenis Kelamin */}
      <div className="max-w-3xl mx-auto mb-16">
        <h3 className="text-xl font-semibold text-green-800 text-center mb-4">
          Distribusi Berdasarkan Jenis Kelamin
        </h3>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataJenisKelamin}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="jenis" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="jumlah" fill="#4caf50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grafik Kelompok Usia */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-green-800 text-center mb-4">
          Distribusi Berdasarkan Kelompok Usia
        </h3>
        <div className="w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataKelompokUsia}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="kelompok" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="jumlah" fill="#81c784" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default DemografiDesa;
