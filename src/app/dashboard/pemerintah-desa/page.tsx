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
          Tambah
        </Button>
      </div>

      {data && data?.length === 0 ? (
        <h1>Data tidak ada</h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((perangkat: any) => (
            <Card key={perangkat.id}>
              <CardHeader>
                <CardTitle className="text-lg">{perangkat.nama}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {perangkat.jabatan}
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                <Image
                  src={perangkat.image_url}
                  alt={perangkat.nama}
                  width={500}
                  height={300}
                  className="rounded-md h-40 w-full object-cover"
                />

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => {
                      setEditData(perangkat);
                      setOpenModal(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(perangkat.id)}
                  >
                    Hapus
                  </Button>
                </div>
              </CardContent>
            </Card>
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
