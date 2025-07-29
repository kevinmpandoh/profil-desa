"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import potensiDesaService from "@/services/potensi-desa.service";

export default function PotensiDesaSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["potensi-desa"],
    queryFn: potensiDesaService.get,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const potensiList = data.slice(0, 3);
  return (
    <section className="bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-600">
            Potensi Desa
          </h2>
          <Link
            href="/potensi-desa"
            className="text-brand-600 hover:underline font-medium"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {potensiList.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="group relative w-full h-48 overflow-hidden">
                <Image
                  src={item.image_url}
                  alt={item.judul}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.judul}
                </h3>
                <p className="text-gray-600 text-sm">{item.deskripsi}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const potensi = [
//   {
//     title: "Captikus - Budaya Lokal",
//     image: "/images/potensi/captikus.jpg", // ganti sesuai gambar asli nanti
//     description:
//       "Minuman tradisional hasil fermentasi yang menjadi simbol kearifan lokal masyarakat Desa Wuwuk dan dikenal luas di Sulawesi Utara.",
//   },
//   {
//     title: "Pertanian Unggulan",
//     image: "/images/potensi/pertanian.jpg",
//     description:
//       "Desa Wuwuk memiliki hasil bumi seperti padi, kopra, nilam, dan cengkih yang memiliki nilai jual tinggi serta permintaan pasar yang stabil.",
//   },
//   {
//     title: "UMKM & Kuliner Khas",
//     image: "/images/potensi/umkm.jpg",
//     description:
//       "Produk khas seperti kue curut, pengolahan santan, dan sayur pangi menjadi kekuatan ekonomi kreatif masyarakat yang unik dan berdaya saing.",
//   },
// ];

// export default function PotensiDesaSection() {
//   return (
//     <section className="bg-white py-16">
//       <div className="container max-w-7xl mx-auto px-4 lg:px-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-2xl md:text-3xl font-bold text-green-700">
//             Potensi Desa
//           </h2>
//           <Link
//             href="/potensi-desa"
//             className="text-green-600 hover:underline font-medium"
//           >
//             Lihat Semua →
//           </Link>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {potensi.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.15 }}
//               className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="group relative w-full h-48 overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
//                 />
//               </div>
//               <div className="p-4 flex flex-col justify-between h-[200px]">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{item.description}</p>
//                 </div>
//                 <div className="mt-4">
//                   <Link
//                     href="/potensi-desa"
//                     className="text-green-600 text-sm font-medium hover:underline"
//                   >
//                     Lihat Detail →
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
