"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import layananPublikService from "@/services/layanan-publik.service";
import { useQuery } from "@tanstack/react-query";

export default function LayananPublikSection() {
  const { data = [], isLoading } = useQuery({
    queryKey: ["layanan-publik"],
    queryFn: layananPublikService.get,
  });

  const layananPublik = data.slice(0, 4);

  return (
    <section className="bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4 lg:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-600 text-center mb-10">
          Layanan Publik
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-brand-50 rounded-xl overflow-hidden shadow-md animate-pulse"
                >
                  <div className="h-48 w-full bg-gray-200" />
                  <div className="p-4 text-center">
                    <div className="h-4 w-3/4 bg-gray-200 mx-auto rounded" />
                  </div>
                </div>
              ))
            : layananPublik.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="bg-brand-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image_url}
                      alt={item.keterangan}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-lg font-medium text-gray-800">
                      {item.keterangan}
                    </p>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
