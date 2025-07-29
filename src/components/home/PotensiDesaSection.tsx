"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import potensiDesaService from "@/services/potensi-desa.service";

export default function PotensiDesaSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["potensi-desa"],
    queryFn: potensiDesaService.get,
  });

  const potensiList = data?.slice(0, 3) || [];

  return (
    <section className="bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-600">
            Potensi Desa
          </h2>
          {!isLoading && (
            <Link
              href="/potensi-desa"
              className="text-brand-600 hover:underline font-medium"
            >
              Lihat Semua →
            </Link>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow p-4 animate-pulse"
                >
                  <div className="w-full h-48 bg-gray-200 rounded mb-4" />
                  <div className="h-5 w-3/4 bg-gray-200 rounded mb-2" />
                  <div className="h-4 w-full bg-gray-200 rounded mb-1" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
              ))
            : potensiList.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="group relative w-full h-48 overflow-hidden">
                    <Image
                      src={item.image_url}
                      alt={item.judul}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.judul}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {item.deskripsi}
                    </p>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
