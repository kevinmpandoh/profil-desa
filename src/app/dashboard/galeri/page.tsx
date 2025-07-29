"use client";

import { useState } from "react";
import Image from "next/image";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import GaleriModal from "./GaleriModal";
import galeriService from "@/services/galeri.service";

export default function GaleriPage() {
  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);
  const queryClient = useQueryClient();

  const { data: galeriList = [], isLoading } = useQuery({
    queryKey: ["galeri-desa"],
    queryFn: galeriService.get,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (form: any) => {
      if (editData) {
        return galeriService.update(editData.id, form);
      }
      return galeriService.create(form);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["galeri-desa"] });
      toast.success("Data galeri desa berhasil disimpan");
      setOpenModal(false);
      setEditData(null);
    },
  });

  const { mutate: handleDelete } = useMutation({
    mutationFn: (id: string) => galeriService.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["galeri-desa"] });
      toast.success("Data galeri desa desa berhasil dihapus");
    },
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Galeri Desa</h1>
        <Button
          onClick={() => {
            setEditData(null);
            setOpenModal(true);
          }}
        >
          + Tambah Foto
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galeriList?.map((item: any) => (
          <Card key={item.id}>
            <Image
              src={item.image_url}
              alt={item.caption}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-t"
            />
            <CardHeader>
              <CardTitle className="text-lg">{item.keterangan}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold line-clamp-4 mb-4">
                {item.caption}
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

        {galeriList?.length === 0 && (
          <p className="text-gray-500">Belum ada data galeri desa.</p>
        )}
      </div>

      <GaleriModal
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
