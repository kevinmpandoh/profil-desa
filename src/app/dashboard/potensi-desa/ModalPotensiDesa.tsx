"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Image from "next/image";
import { useState, useEffect } from "react";
import { deleteImage, uploadImage } from "@/services/upload.service";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  defaultValues?: {
    judul: string;
    deskripsi: string;
    image_url: string; // URL foto jika edit
  };
};

export default function PotensiDesaModal({
  open,
  onClose,
  onSubmit,
  defaultValues,
}: Props) {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (defaultValues) {
      setJudul(defaultValues.judul);
      setDeskripsi(defaultValues.deskripsi);
      setPreview(defaultValues.image_url || null);
    } else {
      setJudul("");
      setDeskripsi("");
      setFotoFile(null);
      setPreview(null);
    }
  }, [defaultValues, open]);

  const handleSubmit = async () => {
    if (!fotoFile && !defaultValues?.image_url) {
      toast.error("Silakan pilih foto potensi desa.");
      return;
    }

    if (!judul || !deskripsi) {
      toast.error("Nama dan deskripsi harus diisi.");
      return;
    }

    if (fotoFile && defaultValues?.image_url) {
      // Jika ada foto baru, hapus foto lama
      await deleteImage(defaultValues.image_url);
    }

    // Upload foto baru jika ada
    let gambar: string | null = null;
    if (fotoFile) {
      gambar = await uploadImage(fotoFile);
      if (!gambar) {
        toast.error("Gagal mengupload foto.");
        return;
      }
    }

    onSubmit({
      judul,
      deskripsi,
      foto: gambar ?? defaultValues?.image_url, // gunakan URL gambar yang diupload
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Silakan pilih file gambar.");
        return;
      }
      setFotoFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {defaultValues ? "Edit Data Potensi Desa" : "Tambah Potensi Desa"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label>Judul</label>
            <Input
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Masukkan judul"
            />
          </div>

          <div>
            <label>Deskirpsi</label>
            <textarea
              className="w-full h-40 p-3 border rounded resize-y"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Masukkan deskripsi"
            />
          </div>

          <div>
            <label>Foto</label>
            <Input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
              <Image
                src={preview}
                alt="Preview Foto"
                width={100}
                height={100}
                className="mt-2 rounded object-cover border"
              />
            )}
          </div>
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
          <Button onClick={handleSubmit}>
            {defaultValues ? "Simpan Perubahan" : "Tambah Data"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
