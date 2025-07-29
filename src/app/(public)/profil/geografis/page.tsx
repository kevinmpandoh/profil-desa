// app/(public)/geografis/page.tsx
"use client";

import geografisService from "@/services/geografis.service";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const geografisDesa = {
  deskripsi: `
    Desa Wuwuk secara geografis terletak di Kecamatan Tareran, Kabupaten Minahasa Selatan, Provinsi Sulawesi Utara. 
    Memiliki luas wilayah sekitar 312 hektar dan berada di dataran rendah dengan ketinggian sekitar 300 meter di atas permukaan laut. 
    Letak geografis yang strategis mendukung potensi pengembangan sektor pertanian dan permukiman masyarakat.
  `,
  batasWilayah: {
    utara: "Desa Wuwuk Barat",
    selatan: "Desa Lansot",
    timur: "Desa Pungkol",
    barat: "Desa Rumoong Atas Dua",
  },
  luas: "312 Ha",
};

export default function GeografisPage() {
  const { data, isLoading } = useQuery({
    queryFn: geografisService.get,
    queryKey: ["geografis-desa"],
  });

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-brand-600 mb-12">
        Geografis Desa
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 text-justify leading-relaxed mb-6">
            {data?.deskripsi || "-"}
          </p>
          <div className="bg-brand-50 p-4 rounded-lg border border-brand-200">
            <h2 className="text-lg font-semibold text-brand-700 mb-3">
              Batas Wilayah
            </h2>
            {/* <div>
              <p>
                <strong>Kode Wilayah:</strong> 710513 2008
              </p>
              <p>
                <strong>Kode Pos:</strong> 95353
              </p>
              <p>
                <strong>Kecamatan:</strong> Tareran
              </p>
              <p>
                <strong>Kabupaten/Kota:</strong> Minahasa Selatan
              </p>
              <p>
                <strong>Provinsi:</strong> Sulawesi Utara
              </p>
            </div> */}
            <ul className="space-y-1 text-gray-700">
              <li>
                <strong>Utara:</strong> {data?.batas_utara}
              </li>
              <li>
                <strong>Selatan:</strong> {data?.batas_selatan}
              </li>
              <li>
                <strong>Timur:</strong> {data.batas_timur}
              </li>
              <li>
                <strong>Barat:</strong> {data.batas_barat}
              </li>
            </ul>
            <p className="mt-4">
              <strong>Luas Wilayah:</strong> {data.luas_wilayah || "-"}
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31911.091745160014!2d124.70112449999999!3d1.23834895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328742b95ec2d351%3A0xcae804f52ab7af18!2sWuwuk%2C%20Kec.%20Tareran%2C%20Kabupaten%20Minahasa%20Selatan%2C%20Sulawesi%20Utara!5e0!3m2!1sid!2sid!4v1753457190511!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
