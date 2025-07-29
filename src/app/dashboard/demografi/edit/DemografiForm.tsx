"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";
import demografiService from "@/services/demografi.service";

const wilayahList = ["Jaga I", "Jaga II", "Jaga III", "Jaga IV", "Jaga V"];
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
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Data Demografi Desa</h1>
      <p className="text-muted-foreground text-sm mb-6">
        Silakan edit data penduduk berdasarkan wilayah (Jaga). Pastikan data
        yang diisi sesuai dengan jumlah KK, penduduk laki-laki dan perempuan.
      </p>

      <div className="grid gap-6">
        {data.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.wilayah}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <label className="text-base font-medium">Nama Ketua Jaga</label>
                <Input
                  value={item.ketua}
                  onChange={(e) => handleChange(index, "ketua", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-base font-medium">Jumlah KK</label>
                <Input
                  type="number"
                  value={item.jumlah_kk}
                  onChange={(e) =>
                    handleChange(index, "jumlah_kk", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-base font-medium">
                  Jumlah Laki-laki
                </label>
                <Input
                  type="number"
                  value={item.laki_laki}
                  onChange={(e) =>
                    handleChange(index, "laki_laki", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-base font-medium">
                  Jumlah Perempuan
                </label>
                <Input
                  type="number"
                  value={item.perempuan}
                  onChange={(e) =>
                    handleChange(index, "perempuan", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
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
