"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import RichTextEditor from "@/components/editor/RichTextEditor";

type Props = {
  open: boolean;
  onClose: () => void;
  initialData?: any;
  onSave: (data: any) => void;
};

export default function GeografisModal({
  open,
  onClose,
  initialData,
  onSave,
}: Props) {
  const [form, setForm] = useState({
    deskripsi: initialData?.deskripsi || "",
    luas_wilayah: initialData?.luas_wilayah || "",
    batas_utara: initialData?.batas_utara || "",
    batas_selatan: initialData?.batas_selatan || "",
    batas_timur: initialData?.batas_timur || "",
    batas_barat: initialData?.batas_barat || "",
    map_embed_url: initialData?.map_embed_url || "",
    id: initialData?.id || 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Edit Informasi Geografis</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Deskripsi */}
          <div className="space-y-2">
            <label className="text-base font-medium text-gray-800">
              Deskripsi
            </label>
            <RichTextEditor
              value={form.deskripsi}
              onChange={(value: string) =>
                setForm((prev) => ({ ...prev, deskripsi: value }))
              }
            />
          </div>

          {/* Luas Wilayah */}
          <div className="space-y-2">
            <label className="text-base font-medium text-gray-800">
              Luas Wilayah
            </label>
            <Input
              name="luas_wilayah"
              value={form.luas_wilayah}
              onChange={handleChange}
              placeholder="Contoh: 1.234 Ha"
            />
          </div>

          {/* Batas-batas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["batas_utara", "Batas Utara"],
              ["batas_selatan", "Batas Selatan"],
              ["batas_timur", "Batas Timur"],
              ["batas_barat", "Batas Barat"],
            ].map(([name, label]) => (
              <div key={name} className="space-y-2">
                <label className="text-base font-medium text-gray-800">
                  {label}
                </label>
                <Input
                  name={name}
                  value={form[name as keyof typeof form]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>

          {/* Map Embed */}
          {/* <div className="space-y-2">
            <label className="text-base font-medium text-muted-foreground">
              Embed URL Peta (Google Maps)
            </label>
            <Input
              name="map_embed_url"
              value={form.map_embed_url}
              onChange={handleChange}
              placeholder="https://www.google.com/maps/embed?pb=..."
            />
          </div> */}

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button onClick={handleSubmit}>Simpan</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
