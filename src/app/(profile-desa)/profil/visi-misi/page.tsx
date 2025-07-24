"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const visiDesa = `
Menjadikan Desa Indah sebagai desa yang mandiri, sejahtera, dan berbudaya berbasis potensi lokal dan partisipasi masyarakat.
`;

const misiDesa = [
  "Meningkatkan kualitas pelayanan publik kepada masyarakat desa.",
  "Mengembangkan potensi pertanian dan UMKM sebagai penopang ekonomi desa.",
  "Menjaga kelestarian lingkungan dan kearifan lokal.",
  "Mendorong partisipasi aktif masyarakat dalam pembangunan desa.",
  "Meningkatkan infrastruktur dan aksesibilitas antar dusun.",
];

export default function VisiMisiDesaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
        Visi dan Misi Desa
      </h1>

      {/* Visi */}
      <Card className="mb-8 shadow-lg border-green-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Visi</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            {visiDesa}
          </p>
        </CardContent>
      </Card>

      {/* Misi */}
      <Card className="shadow-lg border-green-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Misi</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {misiDesa.map((misi, index) => (
              <li key={index}>{misi}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
