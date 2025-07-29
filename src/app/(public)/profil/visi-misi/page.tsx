"use client";

import { useQuery } from "@tanstack/react-query";
import visiMisiService from "@/services/visi-misi.service";
import { motion } from "framer-motion";
import VisiMisiClient from "./VisiMisiClient";

export default function VisiMisiDesaPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["visi-misi"],
    queryFn: () => visiMisiService.get(),
  });

  if (isLoading) {
    return (
      <section className="py-16 px-4 max-w-4xl mx-auto space-y-10 animate-pulse">
        <div>
          <div className="h-8 w-1/3 bg-gray-200 rounded mb-4" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>
        <div>
          <div className="h-8 w-1/3 bg-gray-200 rounded mb-4" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-20 text-gray-500">
        Data tidak tersedia.
      </div>
    );
  }

  return (
    <motion.section
      className="py-16 px-4 max-w-4xl mx-auto space-y-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VisiMisiClient visi={data.visi} misi={data.misi} />
    </motion.section>
  );
}
