// app/profil/sejarah/page.tsx

"use client";

import Image from "next/image";

const sejarahDesa = `
Desa Indah merupakan salah satu desa yang terletak di Kecamatan Harmoni, Kabupaten Minahasa. 
Desa ini didirikan pada tahun 1901 oleh para pendatang yang berasal dari daerah pesisir. 
Awalnya, wilayah ini dikenal sebagai "Lelembata", yang berarti tanah subur dalam bahasa lokal.

Pada masa penjajahan, Desa Indah menjadi salah satu pusat perlawanan rakyat terhadap penjajah Belanda. 
Beberapa tokoh lokal yang terkenal seperti Tonaas Laiki dan Opa Manguni dikenal sebagai pelopor perjuangan rakyat desa.

Dengan perkembangan zaman, Desa Indah terus tumbuh menjadi wilayah yang mandiri dan produktif.
Kini, desa ini dikenal dengan potensi alam dan budaya yang kuat, serta masyarakat yang guyub dan aktif membangun desanya.
`;

const kepalaDesaTimeline = [
  { tahun: "1985 - 1995", nama: "Bapak Markus Tangkere" },
  { tahun: "1995 - 2005", nama: "Bapak Jefry Sumakul" },
  { tahun: "2005 - 2015", nama: "Ibu Maria Lontoh" },
  { tahun: "2015 - 2021", nama: "Bapak Andi Karundeng" },
  { tahun: "2021 - Sekarang", nama: "Ibu Elly Rantung" },
];

export default function SejarahDesaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-green-800 text-center">
        Sejarah Desa
      </h1>

      {/* Konten */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Gambar */}
        <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/sejarah-desa.jpg"
            alt="Sejarah Desa"
            fill
            className="object-cover"
          />
        </div>

        {/* Teks */}
        <div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line text-justify">
            {sejarahDesa}
          </p>
        </div>
      </div>

      {/* Timeline Kepala Desa */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-green-700 text-center">
          Kepala Desa dari Masa ke Masa
        </h2>

        <ol className="relative border-l border-green-300 pl-6 space-y-6">
          {kepalaDesaTimeline.map((item, index) => (
            <li key={index} className="ml-2">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 mt-1" />
              <span className="block text-sm text-gray-500">{item.tahun}</span>
              <span className="block text-lg font-medium text-gray-800">
                {item.nama}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
