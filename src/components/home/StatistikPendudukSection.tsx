"use client";

import demografiService from "@/services/demografi.service";
import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StatistikPendudukSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["demografi"],
    queryFn: demografiService.get,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => setAnimate(true), 100); // sedikit delay agar lebih natural
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  const totalKK =
    data?.reduce((acc: any, cur: any) => acc + cur.jumlah_kk, 0) || 0;
  const totalL =
    data?.reduce((acc: any, cur: any) => acc + cur.laki_laki, 0) || 0;
  const totalP =
    data?.reduce((acc: any, cur: any) => acc + cur.perempuan, 0) || 0;
  const totalPenduduk = totalL + totalP;

  return (
    <section className="bg-gray-50 py-20">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <h2
          className={`text-3xl font-bold text-brand-600 mb-10 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Statistik Penduduk
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {isLoading ? (
            [1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 flex flex-col items-center animate-pulse"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 mb-4" />
                <div className="h-5 w-1/2 bg-gray-200 rounded mb-2" />
                <div className="h-6 w-2/3 bg-gray-200 rounded" />
              </div>
            ))
          ) : (
            <>
              {/* Laki-laki */}
              <div
                className={`bg-white rounded-xl shadow p-6 flex flex-col items-center transition-all duration-700 delay-100 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Users className="text-brand-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Laki-laki
                </h3>
                <p className="text-2xl font-bold text-brand-700 mt-2">
                  {totalL} Jiwa
                </p>
              </div>

              {/* Perempuan */}
              <div
                className={`bg-white rounded-xl shadow p-6 flex flex-col items-center transition-all duration-700 delay-200 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Users className="text-pink-500 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Perempuan
                </h3>
                <p className="text-2xl font-bold text-pink-600 mt-2">
                  {totalP} Jiwa
                </p>
              </div>

              {/* Total */}
              <div
                className={`bg-white rounded-xl shadow p-6 flex flex-col items-center transition-all duration-700 delay-300 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Users className="text-success-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">
                  Total Penduduk
                </h3>
                <p className="text-2xl font-bold text-success-700 mt-2">
                  {totalPenduduk} Jiwa
                </p>
              </div>
            </>
          )}
        </div>

        {!isLoading && (
          <Link
            href="/profil/demografis"
            className={`inline-block bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition-all duration-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Lihat Selengkapnya
          </Link>
        )}
      </div>
    </section>
  );
}
