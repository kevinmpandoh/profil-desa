"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Gambar Slider - Mobile di atas */}
        <div className="order-1 md:order-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-lg shadow-md"
          >
            <SwiperSlide>
              <img
                src="/images/slider1.jpg"
                alt="Gambar 1"
                className="w-full h-80 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/slider1.jpg"
                alt="Gambar 2"
                className="w-full h-80 object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/slider1.jpg"
                alt="Gambar 3"
                className="w-full h-80 object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Teks Sambutan */}
        <div className="order-2 md:order-1 relative z-10 p-6">
          {/* Ornamen background */}
          <div className="absolute inset-0 md:-left-8 md:-top-8 -z-10 hidden md:block">
            <div className="w-full h-full bg-brand-50 rounded-xl rotate-2 shadow-md" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-brand-600 mb-4">
            Selamat Datang di Website Resmi Desa Wuwuk
          </h1>
          <p className="text-gray-500 text-sm mb-2">
            Kec. Tombariri, Kab. Minahasa Selatan, Sulawesi Utara
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Website ini hadir sebagai media informasi, pelayanan, dan komunikasi
            antara Pemerintah Desa Wuwuk dan masyarakat. Bersama, mari kita
            wujudkan desa yang maju, mandiri, dan sejahtera.
          </p>
        </div>
      </div>
    </section>
  );
}
