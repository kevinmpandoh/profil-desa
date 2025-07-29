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

const visiHTML = `
  <p>
    Menjadikan Desa Wuwuk sebagai desa yang mandiri, sejahtera, dan berbudaya 
    berbasis potensi lokal dan partisipasi masyarakat.
  </p>
`;

const misiHTML = `
  <ul>
    <li>Meningkatkan kualitas pelayanan publik kepada masyarakat desa.</li>
    <li>Mengembangkan potensi pertanian, UMKM, dan kearifan lokal sebagai pilar ekonomi desa.</li>
    <li>Menjaga kelestarian lingkungan hidup dan warisan budaya desa.</li>
    <li>Mendorong partisipasi aktif masyarakat dalam pembangunan berkelanjutan.</li>
    <li>Meningkatkan infrastruktur dasar dan aksesibilitas antar wilayah desa.</li>
  </ul>
`;

export default function VisiMisiDesaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-brand-600 mb-12">
        Visi dan Misi Desa Wuwuk
      </h1>

      {/* Visi */}
      <Card className="mb-8 shadow-lg border-brand-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-brand-700 mb-3">Visi</h2>
          <div className="text-gray-700 leading-relaxed text-justify">
            <div
              className="prose prose-brand max-w-none text-justify"
              dangerouslySetInnerHTML={{ __html: visiHTML }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Misi */}
      <Card className="shadow-lg border-brand-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-brand-700 mb-3">Misi</h2>
          <div
            className="prose prose-brand max-w-none text-justify"
            dangerouslySetInnerHTML={{ __html: misiHTML }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
