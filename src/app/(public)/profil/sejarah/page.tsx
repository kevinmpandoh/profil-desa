"use client";

import sejarahService from "@/services/sejarah.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SejarahDesaPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["sejarah-desa"],
    queryFn: () => sejarahService.get(),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brand-600" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-gray-500 py-20">
        Data tidak tersedia.
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-brand-600 text-center">
        Sejarah Desa Wuwuk
      </h1>

      {/* Gambar */}
      <div className="w-full lg:max-w-lg mx-auto h-72 relative rounded-xl overflow-hidden shadow-md mb-8">
        <Image
          src={data.image_url || "/images/sejarah-desa.jpg"}
          alt="Sejarah Desa Wuwuk"
          fill
          className="object-contain"
        />
      </div>

      {/* Konten Sejarah */}
      <div
        className="prose prose-brand max-w-none text-justify"
        dangerouslySetInnerHTML={{ __html: data.konten }}
      />
    </motion.div>
  );
}
