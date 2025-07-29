"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import galeriService from "@/services/galeri.service";
import { useQuery } from "@tanstack/react-query";

export default function GaleriDesaSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const { data: galeriDesa = [], isLoading } = useQuery({
    queryKey: ["galeri-desa"],
    queryFn: galeriService.get,
  });

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + galeriDesa.length) % galeriDesa.length : 0
    );
  const showNext = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % galeriDesa.length : 0
    );

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const galeriList = galeriDesa.slice(0, 5);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-600">
            Galeri Desa
          </h2>
          <Link
            href="/galeri-desa"
            className="text-brand-600 hover:underline font-medium"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {galeriList.map((item: any, index: number) => (
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
              <div className="absolute bottom-0 left-0 right-0 bg-gray-600 bg-opacity-40 text-white text-xs text-center py-2.5">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

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
                src={galeriDesa[selectedIndex].image_url}
                alt={galeriDesa[selectedIndex].caption}
                width={1000}
                height={600}
                className="w-full h-auto rounded-lg object-contain"
              />
              <p className="text-white text-center mt-4">
                {galeriDesa[selectedIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
