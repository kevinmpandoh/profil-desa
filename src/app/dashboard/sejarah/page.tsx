"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { SejarahCard } from "./components/SejarahCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as service from "@/services/sejarah.service";

export default function SejarahDesaPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["sejarah"],
    queryFn: service.getSejarah,
  });

  const deleteMutation = useMutation({
    mutationFn: service.deleteSejarah,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sejarah"] });
    },
  });

  const sejarah = data;

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sejarah Desa</h1>
        {sejarah ? (
          <div className="flex gap-2">
            <Button onClick={() => router.push("/admin/sejarah/edit")}>
              Edit
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteMutation.mutate(sejarah.id)}
            >
              Hapus
            </Button>
          </div>
        ) : (
          <Button onClick={() => router.push("/admin/sejarah/add")}>
            Tambah Sejarah
          </Button>
        )}
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : sejarah ? (
        <SejarahCard sejarah={sejarah} />
      ) : (
        <p className="italic text-muted-foreground">Belum ada sejarah desa.</p>
      )}
    </div>
  );
}
