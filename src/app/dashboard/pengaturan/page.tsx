"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadImage } from "@/services/upload.service";
import { getSettings, updateSettings } from "@/services/settings.service";
import { toast } from "sonner";
import ImageDropzone from "@/components/common/ImageDropzone";

export default function PengaturanPage() {
  const [activeTab, setActiveTab] = useState<"kontak" | "aplikasi">("kontak");

  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: {
      nama_desa: "",
      alamat: "",
      email: "",
      telepon: "",
      logo_url: "",
      nama_aplikasi: "",
      kecamatan: "",
      kabupaten: "",
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

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Pengaturan Umum</h1>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-1/4 border-r pr-4 space-y-2">
          <button
            className={`w-full text-left p-2 rounded ${
              activeTab === "kontak" ? "bg-brand-100 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("kontak")}
          >
            Kontak Desa
          </button>
          <button
            className={`w-full text-left p-2 rounded ${
              activeTab === "aplikasi" ? "bg-brand-100 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("aplikasi")}
          >
            Pengaturan Aplikasi
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 space-y-5"
        >
          {activeTab === "kontak" && (
            <>
              <div>
                <label className="font-medium">Nama Desa</label>
                <Input {...form.register("nama_desa")} />
              </div>

              <div>
                <label className="font-medium">Alamat Lengkap</label>
                <textarea
                  {...form.register("alamat")}
                  rows={4}
                  className="w-full p-3 border rounded resize-y"
                />
              </div>

              <div>
                <label className="font-medium">Telepon</label>
                <Input {...form.register("telepon")} />
              </div>

              <div>
                <label className="font-medium">Email</label>
                <Input type="email" {...form.register("email")} />
              </div>
            </>
          )}

          {activeTab === "aplikasi" && (
            <>
              <div>
                <label className="font-medium block mb-2">Logo Desa</label>
                <ImageDropzone
                  value={form.watch("logo_url")}
                  onChange={(file) => {
                    uploadImage(file).then((url) => {
                      if (url) {
                        form.setValue("logo_url", url);
                      }
                    });
                  }}
                  onRemove={() => {
                    form.setValue("logo_url", "");
                  }}
                  className="max-w-3xs"
                />
              </div>

              <div>
                <label className="font-medium">Nama Aplikasi</label>
                <Input {...form.register("nama_aplikasi")} />
              </div>

              <div>
                <label className="font-medium">Kecamatan</label>
                <Input {...form.register("kecamatan")} />
              </div>

              <div>
                <label className="font-medium">Kabupaten</label>
                <Input {...form.register("kabupaten")} />
              </div>
            </>
          )}

          <Button type="submit" disabled={mutation.isPending}>
            {mutation.isPending ? "Menyimpan..." : "Simpan"}
          </Button>
        </form>
      </div>
    </div>
  );
}
