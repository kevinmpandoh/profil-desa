"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const potensi = [
  {
    title: "Pertanian",
    image: "/images/potensi/pertanian.jpg",
    description:
      "Hasil pertanian seperti padi, jagung, dan sayuran yang menjadi komoditas unggulan desa.",
  },
  {
    title: "Wisata Alam",
    image: "/images/potensi/wisata.jpg",
    description:
      "Keindahan alam desa yang menjadi daya tarik wisatawan lokal maupun luar daerah.",
  },
  {
    title: "Kerajinan Tangan",
    image: "/images/potensi/kerajinan.jpg",
    description:
      "Produk kerajinan dari anyaman bambu dan rotan buatan warga desa.",
  },
  {
    title: "Peternakan",
    image: "/images/potensi/peternakan.jpg",
    description:
      "Usaha peternakan ayam, kambing, dan sapi yang dikelola oleh kelompok tani desa.",
  },
];

export default function PotensiDesaSection() {
  return (
    <section className="bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            Potensi Desa
          </h2>
          <Link
            href="/potensi-desa"
            className="text-green-600 hover:underline font-medium"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {potensi.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="group relative w-full h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
