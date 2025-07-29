// app/dashboard/visi-misi/edit/page.tsx

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import visiMisiService from "@/services/visi-misi.service";
import RichTextEditor from "@/components/editor/RichTextEditor";

export default function EditVisiMisiPage() {
  const [visi, setVisi] = useState("");
  const [misi, setMisi] = useState("");

  console.log(visi, misi, "Visi dan Misi");

  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["visi-misi"],
    queryFn: () => visiMisiService.get(),
  });

  // Set data saat data tersedia
  useEffect(() => {
    if (data) {
      setVisi(data.visi ?? "");
      setMisi(data.misi ?? "");
    }
  }, [data]);

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: { visi: string; misi: string }) =>
      visiMisiService.update(payload),
    onSuccess: () => {
      toast.success("Berhasil menyimpan data Visi & Misi");
      queryClient.invalidateQueries({ queryKey: ["visi-misi"] });
      router.push("/dashboard/visi-misi");
    },
    onError: () => {
      toast.error("Gagal menyimpan Visi & Misi");
    },
  });

  const handleSubmit = () => {
    mutate({ visi, misi });
  };

  if (isLoading) return <p className="p-6">Memuat data...</p>;

  return (
    <div className="space-y-6">
      <Button
        variant={"link"}
        onClick={() => router.push("/dashboard/visi-misi")}
        className="flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Kembali ke Halaman Visi & Misi
      </Button>

      <h1 className="text-2xl font-bold text-green-700">
        Edit Visi & Misi Desa
      </h1>

      <div>
        <label className="block font-medium mb-1 text-gray-800">Visi</label>
        {visi !== "" ? (
          <RichTextEditor value={visi} onChange={setVisi} />
        ) : (
          <p className="text-sm text-gray-500">Editor sedang dimuat...</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-800">Misi</label>
        {misi !== "" ? (
          <RichTextEditor value={misi} onChange={setMisi} />
        ) : (
          <p className="text-sm text-gray-500">Editor sedang dimuat...</p>
        )}
      </div>

      <Button onClick={handleSubmit} disabled={isPending}>
        {isPending ? "Menyimpan..." : "Simpan"}
      </Button>
    </div>
  );
}
