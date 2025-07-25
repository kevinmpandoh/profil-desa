"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VisiMisiModal } from "@/components/modal/VisiMisiModal";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { EditorState } from "lexical";

export default function VisiMisiPage() {
  const [visiContent, setVisiContent] = useState<EditorState | null>(null);
  const [misiContent, setMisiContent] = useState<EditorState | null>(null);
  const [modalType, setModalType] = useState<"visi" | "misi" | null>(null);

  const handleSave = (type: "visi" | "misi", content: EditorState) => {
    if (type === "visi") setVisiContent(content);
    else setMisiContent(content);
    setModalType(null);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Visi dan Misi Desa</h1>

      {/* VISI CARD */}
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Visi</CardTitle>
          {visiContent && (
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setModalType("visi")}>
                Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => setVisiContent(null)}
              >
                Hapus
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent>
          {visiContent ? (
            <div className="prose max-h-[300px] overflow-auto p-2 border rounded">
              <LexicalComposer initialConfig={{ editorState: visiContent }}>
                <VisiMisiModal.ReadOnlyEditor />
              </LexicalComposer>
            </div>
          ) : (
            <div className="text-sm text-muted-foreground flex flex-col items-center justify-center py-10">
              <p className="mb-2">Belum ada visi desa.</p>
              <Button size="sm" onClick={() => setModalType("visi")}>
                Tambah Visi
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* MISI CARD */}
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Misi</CardTitle>
          {misiContent && (
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setModalType("misi")}>
                Edit
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => setMisiContent(null)}
              >
                Hapus
              </Button>
            </div>
          )}
        </CardHeader>
        <CardContent>
          {misiContent ? (
            <div className="prose max-h-[300px] overflow-auto p-2 border rounded">
              <LexicalComposer initialConfig={{ editorState: misiContent }}>
                <VisiMisiModal.ReadOnlyEditor />
              </LexicalComposer>
            </div>
          ) : (
            <div className="text-sm text-muted-foreground flex flex-col items-center justify-center py-10">
              <p className="mb-2">Belum ada misi desa.</p>
              <Button size="sm" onClick={() => setModalType("misi")}>
                Tambah Misi
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* MODAL */}
      <VisiMisiModal
        open={modalType !== null}
        onClose={() => setModalType(null)}
        onSave={handleSave}
        type={modalType}
        initialContent={
          modalType === "visi"
            ? visiContent
            : modalType === "misi"
            ? misiContent
            : null
        }
      />
    </div>
  );
}
