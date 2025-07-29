"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import RichTextViewer from "@/components/editor/RichTextViewer";

type Props = {
  visi: string | null;
  misi: string | null;
};

export default function VisiMisiCard({ visi, misi }: Props) {
  const router = useRouter();

  const isEmpty = !visi && !misi;

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Visi dan Misi</CardTitle>
        <Button
          size="default"
          onClick={() => router.push("/dashboard/visi-misi/edit")}
        >
          {isEmpty ? "Tambah" : "Edit"}
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Visi</h2>
          {visi ? (
            <RichTextViewer htmlContent={visi} />
          ) : (
            <p className="text-sm text-muted-foreground italic">
              Belum ada visi desa.
            </p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-2">Misi</h2>
          {misi ? (
            <RichTextViewer htmlContent={misi} />
          ) : (
            <p className="text-sm text-muted-foreground italic">
              Belum ada misi desa.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
