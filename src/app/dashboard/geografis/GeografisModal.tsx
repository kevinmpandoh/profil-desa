"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Edit Informasi Geografis</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="mb-4">Deskripsi</label>
            <textarea
              name="deskripsi"
              value={form.deskripsi}
              onChange={handleChange}
              rows={4}
              className="w-full h-40 p-3 border rounded resize-y"
            />
          </div>

          <div>
            <label>Luas Wilayah</label>
            <Input
              name="luas_wilayah"
              value={form.luas_wilayah}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Batas Utara</label>
              <Input
                name="batas_utara"
                value={form.batas_utara}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Batas Selatan</label>
              <Input
                name="batas_selatan"
                value={form.batas_selatan}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Batas Timur</label>
              <Input
                name="batas_timur"
                value={form.batas_timur}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Batas Barat</label>
              <Input
                name="batas_barat"
                value={form.batas_barat}
                onChange={handleChange}
              />
            </div>
          </div>

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
