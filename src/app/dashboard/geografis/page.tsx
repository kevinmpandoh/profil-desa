"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GeografisModal from "./GeografisModal";
import { toast } from "sonner";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import geografisService from "@/services/geografis.service";
import { Pencil } from "lucide-react";

export default function GeografisPage() {
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["geografis"],
    queryFn: () => geografisService.get(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: geografisService.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["geografis"] });
    },
    onError: () => {
      toast.error("Gagal menyimpan perubahan");
    },
  });

  const handleSave = async (form: any) => {
    try {
      mutate(form);
      toast.success("Informasi geografis berhasil disimpan!");
      setOpenModal(false);
    } catch (error) {
      toast.error("Gagal menyimpan data geografis.");
      console.error(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Informasi Geografis Desa</h1>

      <Card>
        <CardHeader>
          <CardTitle>Geografis</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Peta kiri */}
            <div className="w-full h-full min-h-[300px] border rounded-lg overflow-hidden">
              <iframe
                src={
                  data?.map_embed_url ??
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35818.974592263745!2d124.69341466714346!3d1.2393715700702355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328742b95ec2d351%3A0xcae804f52ab7af18!2sWuwuk%2C%20Kec.%20Tareran%2C%20Kabupaten%20Minahasa%20Selatan%2C%20Sulawesi%20Utara!5e0!3m2!1sid!2sid!4v1753633140126!5m2!1sid!2sid"
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Data kanan */}
            <div className="space-y-4">
              <p className="text-muted-foreground">{data?.deskripsi || "-"}</p>
              <p>
                <strong>Luas Wilayah:</strong> {data?.luas_wilayah || "-"}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <p>
                  <strong>Utara:</strong> {data?.batas_utara || "-"}
                </p>
                <p>
                  <strong>Selatan:</strong> {data?.batas_selatan || "-"}
                </p>
                <p>
                  <strong>Timur:</strong> {data?.batas_timur || "-"}
                </p>
                <p>
                  <strong>Barat:</strong> {data?.batas_barat || "-"}
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="justify-end">
          <Button onClick={() => setOpenModal(true)}>
            {" "}
            <Pencil /> Edit
          </Button>
        </CardFooter>
      </Card>

      <GeografisModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        initialData={data}
        onSave={handleSave}
      />
    </div>
  );
}
