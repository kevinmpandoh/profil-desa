"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/services/settings.service";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Gambar Slider */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {isLoading ? (
            <div className="w-full h-80 rounded-lg bg-gray-200 animate-pulse" />
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              loop={true}
              className="rounded-lg shadow-md"
            >
              {[1, 2, 3].map((_, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={`/images/slider/slider1.jpg`}
                    alt={`Gambar ${i + 1}`}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.div>

        {/* Teks Sambutan */}
        <motion.div
          className="order-2 md:order-1 relative z-10 p-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Ornamen background */}
          <div className="absolute inset-0 md:-left-8 md:-top-8 -z-10 hidden md:block">
            <div className="w-full h-full bg-brand-50 rounded-xl rotate-2 shadow-md" />
          </div>

          {isLoading ? (
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
              <div className="h-20 w-full bg-gray-200 rounded animate-pulse" />
            </div>
          ) : (
            <>
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-brand-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Selamat Datang di Website Resmi Desa {data?.nama_desa}
              </motion.h1>
              <motion.p
                className="text-gray-500 text-sm mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Kec. {data?.kecamatan}, Kab. {data?.kabupaten}, Sulawesi Utara
              </motion.p>
              <motion.p
                className="text-gray-700 mb-6 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Website ini hadir sebagai media informasi, pelayanan, dan
                komunikasi antara Pemerintah Desa {data?.nama_desa} dan
                masyarakat. Bersama, mari kita wujudkan desa yang maju, mandiri,
                dan sejahtera.
              </motion.p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
