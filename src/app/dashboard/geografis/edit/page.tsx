"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
// import { label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
import { createClient } from "@/utils/supabase/client";

export default function EditGeografisPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    deskripsi: "",
    luas_wilayah: "",
    batas_utara: "",
    batas_selatan: "",
    batas_timur: "",
    batas_barat: "",
    map_embed_url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    setLoading(false);
  };

  return (
    <div className=" mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">
        Edit Informasi Geografis Desa
      </h1>

      <div className="space-y-4">
        <div>
          <label>Deskripsi</label>
          <textarea
            name="deskripsi"
            value={form.deskripsi}
            onChange={handleChange}
            rows={5}
            className="w-full h-40 p-3 border rounded resize-y"
          />
        </div>

        <div>
          <label>Luas Wilayah</label>
          <Input
            name="luas_wilayah"
            value={form.luas_wilayah}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Batas Utara</label>
            <Input
              name="batas_utara"
              value={form.batas_utara}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Batas Selatan</label>
            <Input
              name="batas_selatan"
              value={form.batas_selatan}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Batas Timur</label>
            <Input
              name="batas_timur"
              value={form.batas_timur}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Batas Barat</label>
            <Input
              name="batas_barat"
              value={form.batas_barat}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label>Link Google Maps (Embed URL)</label>
          <Input
            name="map_embed_url"
            value={form.map_embed_url}
            onChange={handleChange}
            placeholder="https://www.google.com/maps/embed?..."
          />
        </div>

        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Menyimpan..." : "Simpan"}
        </Button>
      </div>
    </div>
  );
}
