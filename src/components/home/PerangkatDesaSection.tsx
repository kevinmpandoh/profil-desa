"use client";

import { getPemerintahDesa } from "@/services/pemerintah-desa-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function PerangkatDesaSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["pemerintah-desa"],
    queryFn: getPemerintahDesa,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const perangkatDesa = data.slice(0, 4);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-600">
            Perangkat Desa
          </h2>
          <Link
            href="/pemerintah-desa"
            className="text-brand-600 hover:underline font-medium"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {perangkatDesa.map((item: any, index: number) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
