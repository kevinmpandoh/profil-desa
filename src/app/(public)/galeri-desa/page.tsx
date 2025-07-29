// app/(public)/galeri/page.tsx
"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import galeriService from "@/services/galeri.service";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function GaleriPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["galeri"],
    queryFn: galeriService.get,
  });
  const closeModal = () => setSelectedIndex(null);

  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + data.length) % data.length : 0
    );
  const showNext = () =>
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % data.length : 0));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Galeri Desa</h1>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-60 w-full rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.map((item: any, index: number) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group shadow cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={item.image_url}
                alt={item.caption}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-50 bg-opacity-40 text-slate-800 text-base text-center py-2.5">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Tombol Close */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-4xl hover:text-red-400 z-50"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Tombol Previous */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl font-bold hover:scale-110 transition z-40"
              aria-label="Previous"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Tombol Next */}
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl font-bold hover:scale-110 transition z-40"
              aria-label="Next"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="relative max-w-4xl w-full">
              <Image
                src={data[selectedIndex].image_url}
                alt={data[selectedIndex].caption}
                width={1000}
                height={600}
                className="w-full h-auto rounded-lg object-contain"
              />
              <p className="text-white text-center mt-4">
                {data[selectedIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
