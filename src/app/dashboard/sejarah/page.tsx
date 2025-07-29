// app/dashboard/sejarah/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import sejarahService from "@/services/sejarah.service";
import SejarahCard from "./SejarahCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SejarahPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["sejarah"],
    queryFn: () => sejarahService.get(),
  });

  if (isLoading) {
    return <div className="p-6">Memuat sejarah desa...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Sejarah Desa</h1>

      {data ? (
        <SejarahCard sejarah={data} />
      ) : (
        <div className="text-muted-foreground py-10 border rounded flex flex-col items-center justify-center gap-4">
          <p>Belum ada sejarah desa.</p>

          <Button asChild>
            <Link href="/dashboard/sejarah/edit">Tambah Sejarah</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
