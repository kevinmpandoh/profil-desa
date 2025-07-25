"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const layananPublik = [
  {
    nama: "Balai Desa Wuwuk",
    gambar: "/images/layanan/balai-desa.jpg",
  },
  {
    nama: "Gereja GMIM Anugerah Wuwuk",
    gambar: "/images/layanan/gmim.jpg",
  },
  {
    nama: "Gereja GPdI Victory Wuwuk",
    gambar: "/images/layanan/gpdi.jpg",
  },
  {
    nama: "Gereja Segala Bangsa Elyakim Wuwuk",
    gambar: "/images/layanan/segala-bangsa.jpg",
  },
];

export default function LayananPublikSection() {
  return (
    <section className="bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4 lg:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-10">
          Layanan Publik
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layananPublik.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-green-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.gambar}
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-medium text-gray-800">{item.nama}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
