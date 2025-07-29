"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import demografiService from "@/services/demografi.service";

export default function DemografiAdminPage() {
  // const data = [
  //   {
  //     id: 1,
  //     wilayah: "Wilayah 1",
  //     ketua: "Budi",
  //     jumlah_kk: 50,
  //     laki_laki: 120,
  //     perempuan: 130,
  //   },
  //   {
  //     id: 2,
  //     wilayah: "Wilayah 2",
  //     ketua: "Siti",
  //     jumlah_kk: 40,
  //     laki_laki: 100,
  //     perempuan: 110,
  //   },
  //   {
  //     id: 3,
  //     wilayah: "Wilayah 3",
  //     ketua: "Agus",
  //     jumlah_kk: 60,
  //     laki_laki: 140,
  //     perempuan: 150,
  //   },
  // ];

  const { data, isLoading } = useQuery({
    queryKey: ["demografi"],
    queryFn: demografiService.get,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const totalKK =
    data?.reduce((acc: any, cur: any) => acc + cur.jumlah_kk, 0) || 0;
  const totalL =
    data?.reduce((acc: any, cur: any) => acc + cur.laki_laki, 0) || 0;
  const totalP =
    data?.reduce((acc: any, cur: any) => acc + cur.perempuan, 0) || 0;
  const totalPenduduk = totalL + totalP;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Demografi per Wilayah</h1>
        <Button asChild>
          <Link href="/dashboard/demografi/edit">Edit Data</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Umum</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            Total Penduduk: <strong>{totalPenduduk}</strong>
          </div>
          <div>
            Total KK: <strong>{totalKK}</strong>
          </div>
          <div>
            Laki-laki: <strong>{totalL}</strong>
          </div>
          <div>
            Perempuan: <strong>{totalP}</strong>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detail per Wilayah</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {data.length === 0 ? (
            <h1>Data kosong</h1>
          ) : (
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="p-2 border">Wilayah</th>
                  <th className="p-2 border">Ketua</th>
                  <th className="p-2 border">KK</th>
                  <th className="p-2 border">Laki-laki</th>
                  <th className="p-2 border">Perempuan</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item: any) => (
                  <tr key={item.id} className="hover:bg-muted/50">
                    <td className="p-2 border">{item.wilayah}</td>
                    <td className="p-2 border">{item.ketua}</td>
                    <td className="p-2 border">{item.jumlah_kk}</td>
                    <td className="p-2 border">{item.laki_laki}</td>
                    <td className="p-2 border">{item.perempuan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
