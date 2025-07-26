"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const potensi = [
  {
    title: "Captikus - Budaya Lokal",
    image: "/images/potensi/cap-tikus.webp",
    description:
      "Minuman tradisional hasil fermentasi yang menjadi simbol kearifan lokal Desa Wuwuk, dikenal luas di Sulawesi Utara.",
  },
  {
    title: "Pertanian",
    image: "/images/potensi/pertanian.jpg",
    description:
      "Komoditas utama seperti padi, kopra, nilam, dan cengkih memiliki nilai ekonomis tinggi dan potensi pasar luas.",
  },
  {
    title: "UMKM & Kuliner",
    image: "/images/potensi/umkm.jpg",
    description:
      "Usaha masyarakat seperti kue curut, pengolahan santan, dan sayur pangi menjadi kekuatan ekonomi desa yang unik.",
  },
];

export default function PotensiDesaSection() {
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
          {potensi.map((item, index) => (
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
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
