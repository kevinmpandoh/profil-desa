"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function SejarahCard({
  sejarah,
}: {
  sejarah: { konten: string; image_url: string };
}) {
  const router = useRouter();

  console.log(sejarah.image_url, "DATA");

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Sejarah Desa</CardTitle>
        <div className="flex gap-2">
          <Button
            size="default"
            onClick={() => router.push("/dashboard/sejarah/edit")}
          >
            Edit
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Tampilkan gambar di atas konten */}
        {sejarah.image_url && (
          <img
            src={sejarah.image_url || "/placeholder.jpg"}
            alt="Gambar sejarah"
            // onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
            className="w-48 h-48 rounded-lg object-cover"
          />
        )}

        <div
          className="prose max-w-none text-justify"
          dangerouslySetInnerHTML={{ __html: sejarah.konten }}
        />
      </CardContent>
    </Card>
  );
}
