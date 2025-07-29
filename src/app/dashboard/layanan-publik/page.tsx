"use client";

import { useState } from "react";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LayananPublikModal from "./LayananPublikModal";
import { toast } from "sonner";
import layananPublikService from "@/services/layanan-publik.service";

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

  if (isLoading) {
    return <h1>Loading</h1>;
  }

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
          + Tambah Layanan
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {layananList?.map((item: any) => (
          <Card key={item.id}>
            <Image
              src={item.image_url}
              alt={item.keterangan}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-t"
            />
            <CardHeader>
              <CardTitle className="text-lg">{item.keterangan}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                {item.deskripsi}
              </p>
              <div className="flex justify-between">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditData(item);
                    setOpenModal(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(item.id)}
                >
                  Hapus
                </Button>
              </div>
            </CardContent>
          </Card>
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
