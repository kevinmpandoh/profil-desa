// app/dashboard/(admin)/layanan-publik/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LayananPublikModal from "./LayananPublikModal";
import { toast } from "sonner";
import layananPublikService from "@/services/layanan-publik.service";
import { Pencil, Trash2, Info, Plus } from "lucide-react";
import CardWithActions from "@/components/common/CardWithActions";

export default function LayananPublikPage() {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
  const queryClient = useQueryClient();

  const { data: layananList = [], isLoading } = useQuery({
    queryKey: ["layanan-publik"],
    queryFn: layananPublikService.get,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (form: any) => {
      if (editData) {
        return layananPublikService.update(editData.id, form);
      }
      return layananPublikService.create(form);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["layanan-publik"] });
      toast.success("Data layanan publik desa berhasil disimpan");
      setOpenModal(false);
      setEditData(null);
    },
  });

  const { mutate: handleDelete } = useMutation({
    mutationFn: (id: string) => layananPublikService.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["layanan-publik"] });
      toast.success("Data layanan publik desa berhasil dihapus");
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Layanan Publik</h1>
        <Button
          onClick={() => {
            setEditData(null);
            setOpenModal(true);
          }}
        >
          <Plus /> Tambah Layanan
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {layananList?.map((item: any) => (
          <CardWithActions
            key={item.keterangan}
            imageUrl={item.image_url}
            title={item.keterangan}
            onEdit={() => {
              setEditData(item);
              setOpenModal(true);
            }}
            onDelete={() => handleDelete(item.id)}
          />
        ))}

        {layananList?.length === 0 && (
          <p className="text-gray-500">Belum ada data layanan publik.</p>
        )}
      </div>

      <LayananPublikModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditData(null);
        }}
        onSubmit={(form: any) => {
          mutate(form);
        }}
        defaultValues={editData ?? undefined}
      />
    </div>
  );
}
