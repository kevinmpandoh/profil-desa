// app/(public)/geografis/page.tsx
"use client";

import React from "react";

const geografisDesa = {
  deskripsi: `Desa Indah terletak di wilayah dataran rendah dengan ketinggian rata-rata 150 mdpl. Wilayah ini memiliki kondisi geografis yang strategis karena dilewati oleh jalur utama kabupaten dan memiliki akses yang mudah ke pusat kecamatan.`,
  batasWilayah: {
    utara: "Desa Suka Maju",
    selatan: "Desa Harapan",
    timur: "Desa Sejahtera",
    barat: "Hutan Lindung Gunung Lestari",
  },
  luas: "1.200 Ha",
};

export default function GeografisPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-12">
        Geografis Desa
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 text-justify leading-relaxed mb-6">
            {geografisDesa.deskripsi}
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h2 className="text-lg font-semibold text-green-700 mb-3">
              Batas Wilayah
            </h2>
            <ul className="space-y-1 text-gray-700">
              <li>
                <strong>Utara:</strong> {geografisDesa.batasWilayah.utara}
              </li>
              <li>
                <strong>Selatan:</strong> {geografisDesa.batasWilayah.selatan}
              </li>
              <li>
                <strong>Timur:</strong> {geografisDesa.batasWilayah.timur}
              </li>
              <li>
                <strong>Barat:</strong> {geografisDesa.batasWilayah.barat}
              </li>
            </ul>
            <p className="mt-4">
              <strong>Luas Wilayah:</strong> ± 1.200 Ha
            </p>
          </div>
        </div>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.765476891006!2d124.7700002!3d-1.2682005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287761234567890%3ADesa%20Seretan!5e0!3m2!1sid!2sid!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          /> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.505794536271!2d124.8382904944199!3d1.2449889311280335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287400143ab3c8f%3A0xcb451b0d7a0fbebe!2sTalikuran%2C%20Kec.%20Remboken%2C%20Kabupaten%20Minahasa%2C%20Sulawesi%20Utara!5e0!3m2!1sid!2sid!4v1753286898509!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31647.474393612107!2d124.91106643098247!3d1.3144345790890997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287c58a590dc9c7%3A0x45c8cde2fc6935ed!2sMinahasa%2C%20Sulawesi%20Utara!5e0!3m2!1sen!2sid!4v1623048258702!5m2!1sen!2sid"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
          /> */}
        </div>
      </div>
    </div>
  );
}
