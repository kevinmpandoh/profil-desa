"use client";
import React from "react";
import Image from "next/image";

const perangkatDesa = [
  {
    nama: "Andi Supardi",
    jabatan: "Kepala Desa",
    foto: "/images/perangkat1.png",
  },
  {
    nama: "Siti Nurhaliza",
    jabatan: "Sekretaris Desa",
    foto: "/images/perangkat1.png",
  },
  {
    nama: "Budi Santoso",
    jabatan: "Kaur Keuangan",
    foto: "/images/perangkat1.png",
  },
  {
    nama: "Rina Marlina",
    jabatan: "Kaur Umum",
    foto: "/images/perangkat1.png",
  },
  {
    nama: "Joko Purnomo",
    jabatan: "Kadus I",
    foto: "/images/perangkat1.png",
  },
  {
    nama: "Maya Dewi",
    jabatan: "Kadus II",
    foto: "/images/perangkat1.png",
  },
];

const PemerintahDesa = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
        Pemerintah Desa
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {perangkatDesa.map((perangkat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative w-full h-64">
              <Image
                src={perangkat.foto}
                alt={perangkat.nama}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-gray-800">
                {perangkat.nama}
              </h4>
              <p className="text-sm text-green-700">{perangkat.jabatan}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PemerintahDesa;
