"use client";

import { getPemerintahDesa } from "@/services/pemerintah-desa-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PerangkatDesaSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["pemerintah-desa"],
    queryFn: getPemerintahDesa,
  });

  const skeletonArray = [1, 2, 3, 4];
  const perangkatDesa = data?.slice(0, 4) || [];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-600">
            Perangkat Desa
          </h2>
          {!isLoading && (
            <Link
              href="/pemerintah-desa"
              className="text-brand-600 hover:underline font-medium"
            >
              Lihat Semua →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {isLoading
            ? skeletonArray.map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 text-center animate-pulse"
                >
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />
                  <div className="h-4 w-3/4 mx-auto bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-1/2 mx-auto bg-gray-200 rounded" />
                </div>
              ))
            : perangkatDesa.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow p-4 text-center"
                >
                  <Image
                    src={item.image_url}
                    alt={item.nama}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.nama}
                  </h3>
                  <p className="text-sm text-gray-600">{item.jabatan}</p>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
