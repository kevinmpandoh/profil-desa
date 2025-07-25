"use client";

// import { useCreateSejarah } from "@/hooks/useSejarah";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LexicalEditor from "../components/LexicalEditor"; // asumsi sudah ada
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddSejarahPage() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [isi, setIsi] = useState("");
  //   const createMutation = useCreateSejarah();

  const handleSubmit = () => {
    // createMutation.mutate(
    //   { gambar_url: imageUrl, isi },
    //   { onSuccess: () => router.push("/admin/sejarah") }
    // );
    console.log("OK");
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Tambah Sejarah Desa</h1>

      <Input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const url = URL.createObjectURL(file); // nanti replace dengan upload Supabase
            setImageUrl(url);
          }
        }}
      />
      {imageUrl && <img src={imageUrl} className="w-64 rounded" />}

      <LexicalEditor onChange={setIsi} />

      <Button onClick={handleSubmit}>Simpan</Button>
    </div>
  );
}
