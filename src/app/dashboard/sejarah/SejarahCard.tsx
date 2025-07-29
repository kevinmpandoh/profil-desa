"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, Pencil } from "lucide-react";

export default function SejarahCard({
  sejarah,
}: {
  sejarah: { konten: string; image_url: string };
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Sejarah Desa</CardTitle>
        </CardHeader>

        <CardContent className="flex gap-4">
          {/* Gambar kiri */}
          {sejarah.image_url && (
            <img
              src={sejarah.image_url || "/placeholder.jpg"}
              alt="Gambar sejarah"
              className="w-48 h-48 rounded-lg object-cover shrink-0"
            />
          )}

          {/* Konten kanan (dengan batas tinggi dan overflow) */}
          <div className="flex-1 overflow-hidden max-h-48 relative">
            <div
              className="prose max-w-none text-justify line-clamp-[10] overflow-hidden"
              dangerouslySetInnerHTML={{ __html: sejarah.konten }}
            />
          </div>
        </CardContent>

        <CardFooter className="justify-end gap-2">
          <Button
            variant="outline"
            size="default"
            onClick={() => setOpen(true)}
          >
            <Eye className="w-4 h-4 mr-1" />
            Lihat Detail
          </Button>
          <Button
            size="default"
            onClick={() => router.push("/dashboard/sejarah/edit")}
          >
            <Pencil className="w-4 h-4 mr-1" />
            Edit
          </Button>
        </CardFooter>
      </Card>

      {/* Modal detail */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-fit overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>Detail Sejarah Desa</DialogTitle>
          </DialogHeader>
          <div
            className="prose max-w-none text-justify"
            dangerouslySetInnerHTML={{ __html: sejarah.konten }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
