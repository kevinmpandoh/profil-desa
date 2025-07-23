import Image from "next/image";

export default function TentangDesaSection() {
  return (
    <main className="w-full bg-white py-20">
      <section className="container max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2">
            <Image
              src="/images/tentang-desa.jpg"
              alt="Tentang Desa"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-green-700">
              Tentang Desa Kami
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Desa Contoh merupakan salah satu desa yang berada di Kecamatan
              Contoh, Kabupaten Minahasa. Desa ini memiliki potensi alam,
              pertanian, serta sumber daya manusia yang luar biasa. Website ini
              hadir sebagai sarana informasi dan transparansi bagi seluruh warga
              desa dan publik.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-100 p-4 rounded shadow text-center">
                <h3 className="text-lg font-semibold">Luas Wilayah</h3>
                <p>500 Ha</p>
              </div>
              <div className="bg-green-100 p-4 rounded shadow text-center">
                <h3 className="text-lg font-semibold">Jumlah Penduduk</h3>
                <p>2.000 Jiwa</p>
              </div>
              {/* <div className="bg-yellow-100 p-4 rounded shadow text-center">
                <h3 className="text-lg font-semibold">Mata Pencaharian</h3>
                <p>Pertanian & Perkebunan</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// app/tentang/page.tsx
// ("use client");

// import Image from "next/image";

// export default function TentangDesaPage() {
//   return (
//     <main className="w-full bg-white py-12">
//       {/* Section 1: Gambar + Teks Ringkasan */}
//       <section className="container max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center gap-10">
//         {/* Gambar */}
//         <div className="md:w-1/2">
//           <Image
//             src="/images/tentang-desa.jpg"
//             alt="Tentang Desa"
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-xl shadow-md object-cover"
//           />
//         </div>

//         {/* Ringkasan */}
//         <div className="md:w-1/2 space-y-4">
//           <h2 className="text-3xl font-bold text-green-700">
//             Tentang Desa Kami
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             Desa Contoh merupakan salah satu desa yang berada di Kecamatan
//             Contoh, Kabupaten Minahasa. Desa ini memiliki potensi alam,
//             pertanian, serta sumber daya manusia yang luar biasa. Website ini
//             hadir sebagai sarana informasi dan transparansi bagi seluruh warga
//             desa dan publik.
//           </p>
//         </div>
//       </section>

//       {/* Section 2: 3 Info Card */}
//       <section className="mt-16 container max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-green-50 p-6 rounded-lg shadow text-center">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             Luas Wilayah
//           </h3>
//           <p className="text-gray-700 text-lg">± 1.200 Ha</p>
//         </div>

//         <div className="bg-green-50 p-6 rounded-lg shadow text-center">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             Jumlah Penduduk
//           </h3>
//           <p className="text-gray-700 text-lg">± 2.430 Jiwa</p>
//         </div>

//         <div className="bg-green-50 p-6 rounded-lg shadow text-center">
//           <h3 className="text-xl font-semibold text-green-700 mb-2">
//             Mata Pencaharian
//           </h3>
//           <p className="text-gray-700 text-lg">Pertanian & Perkebunan</p>
//         </div>
//       </section>
//     </main>
//   );
// }
