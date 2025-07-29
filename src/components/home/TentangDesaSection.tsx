"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/services/settings.service";
import { motion } from "framer-motion";

export default function TentangDesaSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return (
    <main className="w-full bg-white py-20">
      <section className="container max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center gap-10">
        {isLoading ? (
          <>
            <div className="w-full h-[360px] bg-gray-200 rounded-xl animate-pulse" />
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse" />
            </div>
          </>
        ) : (
          <div className="flex flex-col md:flex-row items-start gap-10">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/tentang-desa.jpg"
                alt="Tentang Desa"
                width={600}
                height={400}
                className="w-full h-90 rounded-xl shadow-md object-cover"
              />
            </motion.div>

            <motion.div
              className="md:w-1/2 space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-brand-600">
                Tentang Desa {data?.nama_desa}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Desa Wuwuk merupakan salah satu desa di Kecamatan{" "}
                {data?.kecamatan}, Kabupaten {data?.kabupaten}, Provinsi
                Sulawesi Utara. Desa ini memiliki kekayaan alam dan budaya yang
                khas, serta potensi pertanian dan usaha masyarakat yang terus
                berkembang. Website ini hadir sebagai media informasi,
                transparansi, dan pelayanan untuk seluruh warga Desa{" "}
                {data?.nama_desa} dan masyarakat umum.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <Button variant={"outline"} size={"lg"}>
                  <Link href="/profil/visi-misi">Visi & Misi</Link>
                </Button>
                <Button variant={"outline"} size={"lg"}>
                  <Link href="/profil/sejarah">Sejarah Desa</Link>
                </Button>
                <Button variant={"outline"} size={"lg"}>
                  <Link href="/profil/geografis">Geografis</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </main>
  );
}
