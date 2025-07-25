"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RichTextViewer } from "./RichTextViewer";

export function SejarahCard({ sejarah }: { sejarah: any }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sejarah Desa</CardTitle>
      </CardHeader>
      <CardContent>
        {sejarah.gambar_url && (
          <img src={sejarah.gambar_url} className="rounded w-full mb-4" />
        )}
        <RichTextViewer
          content={sejarah.isi}
          maxChars={500}
          showMore={showMore}
        />
        {sejarah.isi.length > 500 && (
          <button
            className="text-sm text-blue-500 mt-2"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Sembunyikan" : "Lihat Selengkapnya"}
          </button>
        )}
      </CardContent>
    </Card>
  );
}
