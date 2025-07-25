"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { SejarahFormModal } from "./_components/sejarah-form-modal";
import { SejarahCard } from "./_components/sejarah-card";

export default function SejarahDesaPage() {
  const [openForm, setOpenForm] = useState(false);
  const [editingData, setEditingData] = useState<{
    id: string;
    gambar_url: string;
    isi: string;
  } | null>(null);

  console.log(editingData, "editingData"); // Debugging line to check editingData state

  // Simulasi data dummy
  const [data, setData] = useState<{
    id: string;
    gambar_url: string;
    isi: string;
  } | null>(null);

  const handleSubmit = (newData: {
    id: string;
    gambar_url: string;
    isi: string;
  }) => {
    setData(newData);
    setOpenForm(false);
    setEditingData(null);
  };

  const handleDelete = () => {
    setData(null);
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sejarah Desa</h1>
        {!data && (
          <Button onClick={() => setOpenForm(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Tambah Sejarah
          </Button>
        )}
      </div>

      {!data ? (
        <p className="text-gray-600 italic">Belum ada data sejarah desa.</p>
      ) : (
        <SejarahCard
          data={data}
          onEdit={() => {
            setEditingData(data);
            setOpenForm(true);
          }}
          onDelete={handleDelete}
        />
      )}

      <SejarahFormModal
        open={openForm}
        onClose={() => {
          setOpenForm(false);
          setEditingData(null);
        }}
        initialData={editingData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
