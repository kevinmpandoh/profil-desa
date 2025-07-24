// app/potensi/page.tsx (atau /pages/potensi.tsx)
"use client";
import { PotensiCard } from "@/components/PotensiCard";

const potensiList = [
  {
    title: "Pertanian",
    image: "/images/potensi/pertanian.jpg",
    description:
      "Potensi pertanian dengan hasil utama seperti padi, jagung, dan sayuran.",
  },
  {
    title: "Perikanan",
    image: "/images/potensi/perikanan.jpg",
    description:
      "Perikanan darat dan tambak sebagai sumber mata pencaharian masyarakat.",
  },
  {
    title: "Pariwisata",
    image: "/images/potensi/pariwisata.jpg",
    description:
      "Wisata alam dan budaya yang menarik pengunjung dari luar daerah.",
  },
  {
    title: "UMKM",
    image: "/images/potensi/umkm.jpg",
    description:
      "Berbagai usaha mikro seperti kerajinan tangan dan kuliner khas desa.",
  },
];

const PotensiPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
        Potensi Desa
      </h1>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
        Berikut ini adalah berbagai potensi unggulan Desa Seretan yang mendukung
        kemajuan dan kesejahteraan masyarakat desa.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {potensiList.map((item, index) => (
          <PotensiCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PotensiPage;
