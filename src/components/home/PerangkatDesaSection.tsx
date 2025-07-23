"use client";

import Image from "next/image";
import Link from "next/link";

const perangkatDesa = [
  {
    nama: "Johan Tambajong",
    jabatan: "Kepala Desa",
    foto: "/images/perangkat1.png",
  },
  {
    nama: "Maria Manoppo",
    jabatan: "Sekretaris Desa",
    foto: "/images/perangkat1.png",
  },
  {
    nama: "Yanto Rondonuwu",
    jabatan: "Kaur Keuangan",
    foto: "/images/perangkat1.png",
  },
  {
    nama: "Siska Sumilat",
    jabatan: "Kaur Umum",
    foto: "/images/perangkat1.png",
  },
];

export default function PerangkatDesaSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            Perangkat Desa
          </h2>
          <Link
            href="/pemerintah-desa"
            className="text-green-600 hover:underline font-medium"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {perangkatDesa.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 text-center"
            >
              <Image
                src={item.foto}
                alt={item.nama}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {item.nama}
              </h3>
              <p className="text-sm text-gray-600">{item.jabatan}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
