"use client";

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PemerintahDesaModal from "./PemerintahDesa";
import {
  getPemerintahDesa,
  createPemerintahDesa,
  updatePemerintahDesa,
  deletePemerintahDesa,
} from "@/services/pemerintah-desa-service";
import Image from "next/image";
import { toast } from "sonner";
import CardWithActions from "@/components/common/CardWithActions";
import { Plus } from "lucide-react";

export default function PemerintahDesaPage() {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["pemerintah-desa"],
    queryFn: getPemerintahDesa,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (form: any) => {
      if (editData) {
        return updatePemerintahDesa(editData.id, form);
      }
      return createPemerintahDesa(form);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pemerintah-desa"] });
      setOpenModal(false);
      setEditData(null);
    },
  });

  const { mutate: handleDelete } = useMutation({
    mutationFn: (id: string) => deletePemerintahDesa(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pemerintah-desa"] });
    },
  });

  const handleSave = (data: any) => {
    try {
      mutate({ nama: data.nama, jabatan: data.jabatan, foto: data.foto });
    } catch (error) {
      toast.error("Gagal menyimpan data");
    }
  };

  if (isLoading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Pemerintah Desa</h1>
        <Button
          onClick={() => {
            setEditData(null);
            setOpenModal(true);
          }}
        >
          <Plus />
          Tambah Perangkat
        </Button>
      </div>

      {data && data?.length === 0 ? (
        <h1>Data tidak ada</h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((perangkat: any, index: number) => (
            <CardWithActions
              key={index}
              imageUrl={perangkat.image_url}
              title={perangkat.nama}
              subtitle={perangkat.jabatan}
              onEdit={() => {
                setEditData(perangkat);
                setOpenModal(true);
              }}
              onDelete={() => {
                setEditData(perangkat);
                setOpenModal(true);
              }}
            />
          ))}
        </div>
      )}

      <PemerintahDesaModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditData(null);
        }}
        onSubmit={handleSave}
        defaultValues={editData ?? undefined}
      />
    </div>
  );
}
