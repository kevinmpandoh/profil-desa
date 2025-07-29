"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import demografiService from "@/services/demografi.service";

type Demografi = {
  id?: number;
  wilayah: string;
  ketua: string;
  jumlah_kk: number;
  laki_laki: number;
  perempuan: number;
};

export default function EditDemografiPage({
  defaultData,
}: {
  defaultData: Demografi[];
}) {
  const router = useRouter();
  const [data, setData] = useState<Demografi[]>(defaultData);

  const mutation = useMutation({
    mutationFn: demografiService.post,
    onSuccess: () => {
      toast.success("Data berhasil disimpan");
      router.push("/dashboard/demografi");
    },
    onError: () => {
      toast.error("Gagal menyimpan data");
    },
  });

  const handleChange = (
    index: number,
    key: keyof Demografi,
    value: string | number
  ) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [key]: value };
    setData(newData);
  };

  const handleSubmit = () => {
    mutation.mutate(data);
  };

  return (
    <div className="grid gap-8">
      {data.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">{item.wilayah}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Nama Ketua Jaga</Label>
                <Input
                  value={item.ketua}
                  onChange={(e) => handleChange(index, "ketua", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Jumlah KK</Label>
                <Input
                  type="number"
                  value={item.jumlah_kk}
                  onChange={(e) =>
                    handleChange(index, "jumlah_kk", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Jumlah Laki-laki</Label>
                <Input
                  type="number"
                  value={item.laki_laki}
                  onChange={(e) =>
                    handleChange(index, "laki_laki", e.target.value)
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Jumlah Perempuan</Label>
                <Input
                  type="number"
                  value={item.perempuan}
                  onChange={(e) =>
                    handleChange(index, "perempuan", e.target.value)
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-end items-center gap-4 mt-8">
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/demografi")}
        >
          Kembali
        </Button>
        <Button onClick={handleSubmit} disabled={mutation.isPending}>
          {mutation.isPending ? "Menyimpan..." : "Simpan Semua"}
        </Button>
      </div>
    </div>
  );
}
