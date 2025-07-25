"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";
// import LexicalEditor from "./LexicalEditor";
const LexicalEditor = dynamic(() => import("./LexicalEditor"), {
  ssr: false,
});
// import RichTextEditor from "./rich-text-editor";
// const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

// Lazy load editor
// const RichTextEditor = dynamic(() => import("./rich-text-editor"), {
//   ssr: false,
// });

export function SejarahFormModal({
  open,
  onClose,
  onSubmit,
  initialData,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { id: string; gambar_url: string; isi: string }) => void;
  initialData?: { id: string; gambar_url: string; isi: string } | null;
}) {
  const [imageUrl, setImageUrl] = useState("");
  const [isi, setIsi] = useState(initialData?.isi || "");

  useEffect(() => {
    if (initialData) {
      setImageUrl(initialData.gambar_url);
      setIsi(initialData.isi);
    } else {
      setImageUrl("");
      setIsi("");
    }
  }, [initialData]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file); // simpan di Supabase nanti
      setImageUrl(url);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Tambah Sejarah Desa</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label htmlFor="gambar">Gambar Sejarah</label>
            <Input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-2 w-48 rounded-md"
              />
            )}
          </div>

          <div>
            <label htmlFor="isi">Isi Sejarah</label>
            {/* <RichTextEditor value={isi} onChange={setIsi} /> */}
            <LexicalEditor onChange={setIsi} />
          </div>

          <Button
            onClick={() => {
              onSubmit({
                id: Date.now().toString(),
                gambar_url: imageUrl,
                isi,
              });
            }}
          >
            Simpan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
