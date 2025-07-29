"use client";

import { useQuery } from "@tanstack/react-query";

import DemografiForm from "./DemografiForm";
import demografiService from "@/services/demografi.service";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EditDemografiPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["demografi"],
    queryFn: demografiService.get,
  });

  const router = useRouter();

  if (isLoading) return <div>Memuat data...</div>;
  if (error) return <div>Terjadi kesalahan saat mengambil data.</div>;

  return (
    <div className="p-6 space-y-4">
      <Button
        variant="link"
        className="flex items-center gap-2"
        onClick={() => router.push("/dashboard/demografi")}
      >
        <ArrowLeft size={16} />
        Kembali ke Halaman Demografi
      </Button>

      <h1 className="text-2xl font-semibold mb-4">Edit Data Demografi Desa</h1>
      <p className="text-muted-foreground text-sm mb-6">
        Silakan edit data penduduk berdasarkan wilayah (Jaga). Pastikan data
        yang diisi sesuai dengan jumlah KK, penduduk laki-laki dan perempuan.
      </p>
      <div className=" space-y-6">
        <DemografiForm defaultData={data ?? []} />
      </div>
    </div>
  );
}
