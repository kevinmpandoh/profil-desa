// app/potensi/page.tsx (atau /pages/potensi.tsx)
"use client";
import { PotensiCard } from "@/components/PotensiCard";
import potensiDesaService from "@/services/potensi-desa.service";
import { useQuery } from "@tanstack/react-query";

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
  const { data: potensiList, isLoading } = useQuery({
    queryKey: ["potensi-desa"],
    queryFn: potensiDesaService.get,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-brand-600 text-center">
        Potensi Desa Wuwuk
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {potensiList.map((item: any, index: number) => (
          <PotensiCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PotensiPage;
