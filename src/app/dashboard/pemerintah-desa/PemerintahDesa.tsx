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
import { cn } from "@/lib/utils";
import ImageDropzone from "@/components/common/ImageDropzone";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  defaultValues?: {
    nama: string;
    jabatan: string;
    image_url: string; // URL foto jika edit
  };
};

const dropzoneStyle =
  "w-full border border-dashed border-gray-400 rounded-lg p-4 text-center cursor-pointer transition hover:bg-gray-50";

export default function PemerintahDesaModal({
  open,
  onClose,
  onSubmit,
  defaultValues,
}: Props) {
  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (defaultValues) {
      setNama(defaultValues.nama);
      setJabatan(defaultValues.jabatan);
      setPreview(defaultValues.image_url || null);
    } else {
      setNama("");
      setJabatan("");
      setFotoFile(null);
      setPreview(null);
    }
  }, [defaultValues, open]);

  const handleSubmit = async () => {
    if (!fotoFile && !defaultValues?.image_url) {
      toast.error("Silakan pilih foto perangkat desa.");
      return;
    }

    if (!nama || !jabatan) {
      toast.error("Nama dan jabatan harus diisi.");
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
      nama,
      jabatan,
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
            {defaultValues
              ? "Edit Data Perangkat Desa"
              : "Tambah Perangkat Desa"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label>Nama</label>
            <Input
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama"
            />
          </div>

          <div>
            <label>Jabatan</label>
            <Input
              value={jabatan}
              onChange={(e) => setJabatan(e.target.value)}
              placeholder="Masukkan jabatan"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Foto</label>
            <ImageDropzone
              value={preview}
              onChange={(file) => {
                setFotoFile(file);
                setPreview(URL.createObjectURL(file));
              }}
              onRemove={() => {
                setFotoFile(null);
                setPreview(null);
              }}
              className="w-36"
            />
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
