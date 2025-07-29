"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { deleteImage, uploadImage } from "@/services/upload.service";
import { toast } from "sonner";
// import layananPublikService from "@/services/layanan-publik.service";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  defaultValues?: {
    id: number;
    caption: string;
    image_url: string;
  };
}

export default function GaleriModal({
  open,
  onClose,
  onSubmit,
  defaultValues,
}: Props) {
  const [keterangan, setKeterangan] = useState("");
  const [gambarUrl, setGambarUrl] = useState("");
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (defaultValues) {
      setKeterangan(defaultValues.caption || "");
      setGambarUrl(defaultValues.image_url || "");
      setPreview(defaultValues.image_url);
    } else {
      setKeterangan("");
      setGambarUrl("");
      setPreview(null);
    }
  }, [defaultValues]);

  const handleSubmit = async () => {
    if (!fotoFile && !defaultValues?.image_url) {
      toast.error("Silakan pilih foto potensi desa.");
      return;
    }

    if (!keterangan) {
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
      keterangan,
      gambar_url: gambar ?? defaultValues?.image_url, // gunakan URL gambar yang diupload
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
            {defaultValues ? "Edit Galeri Publik" : "Tambah Galeri Publik"}
          </DialogTitle>
        </DialogHeader>
        s
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="mb-4">Keterangan</label>
            <Input
              type="text"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              placeholder="Tuliskan keterangan galeri publik"
            />
          </div>

          <div className="space-y-2">
            <label>Gambar</label>
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

          <div className="flex justify-end space-x-2 pt-2">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button onClick={handleSubmit}>
              {defaultValues ? "Simpan Perubahan" : "Tambah"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
