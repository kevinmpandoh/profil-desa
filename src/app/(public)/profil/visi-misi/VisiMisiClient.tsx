"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function VisiMisiClient({
  visi,
  misi,
}: {
  visi: string | null;
  misi: string | null;
}) {
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
            {visi ? (
              <div
                className="prose prose-brand max-w-none text-justify"
                dangerouslySetInnerHTML={{ __html: visi }}
              />
            ) : (
              <p className="text-sm italic text-gray-500">
                Belum ada data visi desa.
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Misi */}
      <Card className="shadow-lg border-brand-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-brand-700 mb-3">Misi</h2>
          {misi ? (
            <div
              className="prose prose-brand max-w-none text-justify"
              dangerouslySetInnerHTML={{ __html: misi }}
            />
          ) : (
            <p className="text-sm italic text-gray-500">
              Belum ada data misi desa.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
