"use client";

import sejarahService from "@/services/sejarah.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function SejarahDesaPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["visi-misi"],
    queryFn: () => sejarahService.get(),
  });

  if (!isLoading && !data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-brand-600 text-center">
        Sejarah Desa Wuwuk
      </h1>

      {/* Gambar di atas */}
      <div className="w-full lg:max-w-lg mx-auto h-72 relative rounded-xl overflow-hidden shadow-md mb-8">
        <Image
          src={data?.image_url || "/images/sejarah-desa.jpg"}
          alt="Sejarah Desa Wuwuk"
          fill
          className="object-contain "
        />
      </div>

      {/* Konten Sejarah: nanti berasal dari database */}
      <div
        className="prose prose-brand max-w-none text-justify"
        dangerouslySetInnerHTML={{ __html: data?.konten }}
      />
    </div>
  );
}
