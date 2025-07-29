"use client";

import { useQuery } from "@tanstack/react-query";

import DemografiForm from "./DemografiForm";
import demografiService from "@/services/demografi.service";

export default function EditDemografiPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["demografi"],
    queryFn: demografiService.get,
  });

  if (isLoading) return <div>Memuat data...</div>;
  if (error) return <div>Terjadi kesalahan saat mengambil data.</div>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Edit Data Demografi</h1>
      <DemografiForm defaultData={data ?? []} />
    </div>
  );
}
