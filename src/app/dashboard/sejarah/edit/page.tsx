// app/dashboard/sejarah/edit/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import sejarahService from "@/services/sejarah.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { uploadImage } from "@/services/upload.service";
import RichTextEditor from "@/components/editor/RichTextEditor";

export default function EditSejarahPage() {
  const [konten, setKonten] = useState("");
  const [gambarFile, setGambarFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["sejarah"],
    queryFn: () => sejarahService.get(),
  });

  useEffect(() => {
    if (data) {
      setKonten(data.konten ?? "");
      setPreviewUrl(data.image_url ?? null);
    }
  }, [data]);

  const { mutate, isPending } = useMutation({
    mutationFn: sejarahService.update,
    onSuccess: () => {
      toast.success("Sejarah berhasil diperbarui");
      queryClient.invalidateQueries({ queryKey: ["sejarah"] });
      router.push("/dashboard/sejarah");
    },
    onError: () => {
      toast.error("Gagal menyimpan perubahan");
    },
  });

  const handleGambarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setGambarFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (gambarFile) {
      try {
        const gambar = await uploadImage(gambarFile);
        mutate({ konten, gambar });
      } catch (error) {
        toast.error("Gagal menyimpan data");
      }
    }
    mutate({ konten, gambar: previewUrl });
  };

  if (isLoading) return <p className="p-6">Memuat data...</p>;

  return (
    <div className="space-y-6 p-6">
      <Button
        variant="link"
        className="flex items-center gap-2"
        onClick={() => router.push("/dashboard/sejarah")}
      >
        <ArrowLeft size={16} />
        Kembali ke Halaman Sejarah
      </Button>

      <h1 className="text-2xl font-bold text-green-700">Edit Sejarah Desa</h1>

      {/* Upload Gambar */}
      <div>
        <label className="block font-medium mb-1">Gambar</label>
        <input type="file" accept="image/*" onChange={handleGambarChange} />
        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Preview Gambar"
            width={200}
            height={100}
            className="mt-4 rounded border"
          />
        )}
      </div>

      {/* Rich Text Editor */}
      <div>
        <label className="block font-medium mb-1">Konten</label>
        {/* <LexicalEditor onChange={setKonten} initialHTML={konten} /> */}
        {/* <RichTextEditor value={konten} onChange={setKonten} /> */}
        {konten !== "" ? (
          <RichTextEditor value={konten} onChange={setKonten} />
        ) : (
          <p className="text-sm text-gray-500">Editor sedang dimuat...</p>
        )}
      </div>

      <Button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Menyimpan..." : "Simpan Perubahan"}
      </Button>
    </div>
  );
}
