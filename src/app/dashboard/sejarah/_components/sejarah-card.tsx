"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";

export function SejarahCard({
  data,
  onEdit,
  onDelete,
}: {
  data: { id: string; gambar_url: string; isi: string };
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sejarah Desa</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <img
          src={data.gambar_url}
          alt="Gambar Sejarah"
          className="rounded-md w-full max-h-96 object-cover"
        />
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: data.isi }}
        />
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <Button variant="outline" onClick={onEdit}>
          <Pencil className="w-4 h-4 mr-1" /> Edit
        </Button>
        <Button variant="destructive" onClick={onDelete}>
          <Trash className="w-4 h-4 mr-1" /> Hapus
        </Button>
      </CardFooter>
    </Card>
  );
}
