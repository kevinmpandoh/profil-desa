// app/potensi/page.tsx (atau /pages/potensi.tsx)
"use client";
import { PotensiCard } from "@/components/PotensiCard";

const potensiList = [
  {
    title: "Captikus – Warisan Budaya",
    image: "/images/potensi/cap-tikus.webp",
    description:
      "Minuman tradisional hasil fermentasi yang menjadi simbol kearifan lokal dan identitas budaya masyarakat Desa Wuwuk.",
  },
  {
    title: "Pertanian",
    image: "/images/potensi/pertanian.jpg",
    description:
      "Hasil bumi unggulan desa meliputi padi, kopra, nilam, dan cengkih yang memiliki nilai ekonomis tinggi dan permintaan pasar stabil.",
  },
  {
    title: "UMKM – Produk Lokal",
    image: "/images/potensi/umkm.jpg",
    description:
      "Beragam produk UMKM seperti kue curut, olahan santan, dan sayur pangi menjadi potensi kuliner dan ekonomi masyarakat.",
  },
];

const PotensiPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-brand-600 text-center">
        Potensi Desa Wuwuk
      </h1>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10 leading-relaxed">
        Desa Wuwuk memiliki kekayaan potensi lokal yang sangat menjanjikan dan
        layak dikembangkan secara berkelanjutan. Mulai dari potensi budaya
        seperti <strong>Captikus</strong>, komoditas pertanian unggulan seperti{" "}
        <strong>kopra</strong> dan <strong>nilam</strong>, hingga{" "}
        <strong>UMKM</strong> berbasis kuliner lokal yang mencerminkan kearifan
        masyarakat desa.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {potensiList.map((item, index) => (
          <PotensiCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PotensiPage;
