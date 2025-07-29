"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import PotensiDesaModal from "./ModalPotensiDesa";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import potensiDesaService from "@/services/potensi-desa.service";
import { toast } from "sonner";
import CardWithActions from "@/components/common/CardWithActions";

export default function PotensiDesaPage() {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);

  const queryClient = useQueryClient();

  const { data: potensiList, isLoading } = useQuery({
    queryKey: ["potensi-desa"],
    queryFn: potensiDesaService.get,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (form: any) => {
      if (editData) {
        return potensiDesaService.update(editData.id, form);
      }
      return potensiDesaService.create(form);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["potensi-desa"] });
      toast.success("Data potensi desa berhasil disimpan");
      setOpenModal(false);
      setEditData(null);
    },
  });

  const { mutate: handleDelete } = useMutation({
    mutationFn: (id: string) => potensiDesaService.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["potensi-desa"] });
      toast.success("Data potensi desa berhasil dihapus");
    },
  });

  if (isLoading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Potensi Desa</h1>
        <Button
          onClick={() => {
            setEditData(null);
            setOpenModal(true);
          }}
        >
          + Tambah Potensi
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {potensiList?.map((item: any, index: number) => (
          <CardWithActions
            key={index}
            imageUrl={item.image_url}
            title={item.judul}
            description={item.deskripsi}
            onEdit={() => {
              setEditData(item);
              setOpenModal(true);
            }}
            onDelete={() => handleDelete(item.id)}
          />
        ))}

        {potensiList?.length === 0 && (
          <p className="text-gray-500">Belum ada data potensi desa.</p>
        )}
      </div>
      <PotensiDesaModal
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
