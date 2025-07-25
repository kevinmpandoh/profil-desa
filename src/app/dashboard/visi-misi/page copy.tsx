"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Trash2, Plus } from "lucide-react";
import React, { useState } from "react";

export default function VisiMisiPage() {
  const [visi, setVisi] = useState("");
  const [misiList, setMisiList] = useState<string[]>([""]);

  const handleMisiChange = (index: number, value: string) => {
    const newList = [...misiList];
    newList[index] = value;
    setMisiList(newList);
  };

  const addMisi = () => setMisiList([...misiList, ""]);

  const removeMisi = (index: number) => {
    const newList = [...misiList];
    newList.splice(index, 1);
    setMisiList(newList);
  };

  const handleSubmit = () => {
    // Simpan ke API
    console.log({ visi, misiList });
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Visi dan Misi Desa</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="font-medium block mb-1">Visi Desa</label>
            <textarea
              placeholder="Masukkan visi desa..."
              value={visi}
              onChange={(e) => setVisi(e.target.value)}
              className="min-h-[120px]"
            />
          </div>

          <div>
            <label className="font-medium block mb-1">Misi Desa</label>
            <div className="space-y-2">
              {misiList.map((misi, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    value={misi}
                    placeholder={`Misi ke-${index + 1}`}
                    onChange={(e) => handleMisiChange(index, e.target.value)}
                  />
                  {misiList.length > 1 && (
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeMisi(index)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button variant="outline" onClick={addMisi} className="mt-2">
                <Plus className="w-4 h-4 mr-2" /> Tambah Misi
              </Button>
            </div>
          </div>

          <Button onClick={handleSubmit} className="mt-4">
            Simpan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
