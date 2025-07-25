import { Users } from "lucide-react";
import Link from "next/link";

export default function StatistikPendudukSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">
          Statistik Penduduk
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {/* Laki-laki */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Users className="text-green-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Laki-laki</h3>
            <p className="text-2xl font-bold text-green-700 mt-2">435 Jiwa</p>
          </div>

          {/* Perempuan */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Users className="text-pink-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Perempuan</h3>
            <p className="text-2xl font-bold text-pink-600 mt-2">405 Jiwa</p>
          </div>

          {/* Total */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Users className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">
              Total Penduduk
            </h3>
            <p className="text-2xl font-bold text-blue-700 mt-2">840 Jiwa</p>
          </div>
        </div>

        <Link
          href="/profil/demografis"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </section>
  );
}
