"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadImage } from "@/services/upload.service";
import { getSettings, updateSettings } from "@/services/settings.service";
import { toast } from "sonner";

export default function PengaturanPage() {
  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: {
      nama_desa: "",
      alamat: "",
      logo_url: "",
      email: "",
      telepon: "",
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  const mutation = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success("Pengaturan berhasil disimpan");
    },
  });

  useEffect(() => {
    if (data) {
      form.reset(data);
    }
  }, [data, form]);

  const onSubmit = (values: any) => {
    mutation.mutate(values);
  };

  const handleLogoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const image_url = await uploadImage(file);

    if (image_url) {
      form.setValue("logo_url", image_url);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Pengaturan Umum Desa</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label>Nama Desa</label>
          <Input {...form.register("nama_desa")} />
        </div>

        <div>
          <label>Alamat Lengkap</label>
          <textarea
            {...form.register("alamat")}
            name="deskripsi"
            rows={5}
            className="w-full h-40 p-3 border rounded resize-y"
          />
        </div>
        <div>
          <label>Email</label>
          <Input type="email" {...form.register("email")} />
        </div>

        <div>
          <label>Telepon</label>
          <Input {...form.register("telepon")} />
        </div>

        <div>
          <label>Logo Desa</label>
          <Input type="file" onChange={handleLogoChange} />
          {form.watch("logo_url") && (
            <img
              src={form.watch("logo_url")}
              alt="Logo Desa"
              className="mt-2 h-20"
            />
          )}
        </div>

        <Button type="submit" disabled={mutation.isPending}>
          Simpan
        </Button>
      </form>
    </div>
  );
}
