"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import demografiService from "@/services/demografi.service";
import { Pencil, User, UserMinus, UserPlus, Users } from "lucide-react";

export default function DemografiAdminPage() {
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

  const stats = [
    {
      label: "Total Penduduk",
      value: totalPenduduk,
      icon: Users,
    },
    {
      label: "Total KK",
      value: totalKK,
      icon: User,
    },
    {
      label: "Laki-laki",
      value: totalL,
      icon: UserPlus,
    },
    {
      label: "Perempuan",
      value: totalP,
      icon: UserMinus,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Demografi per Wilayah
        </h1>
        <Button asChild>
          <Link href="/dashboard/demografi/edit">
            <Pencil />
            Edit Data
          </Link>
        </Button>
      </div>

      {/* Ringkasan */}
      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Umum</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 border rounded-lg"
            >
              <item.icon className="text-primary" size={24} />
              <div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
                <div className="font-semibold text-lg">{item.value}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Detail Wilayah */}
      <Card>
        <CardHeader>
          <CardTitle>Detail per Wilayah</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {data.length === 0 ? (
            <div className="text-center text-muted-foreground">Data kosong</div>
          ) : (
            <table className="w-full text-sm border border-border">
              <thead>
                <tr className="bg-muted text-left">
                  <th className="p-2 border border-border">Wilayah</th>
                  <th className="p-2 border border-border">Ketua</th>
                  <th className="p-2 border border-border">KK</th>
                  <th className="p-2 border border-border">Laki-laki</th>
                  <th className="p-2 border border-border">Perempuan</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item: any) => (
                  <tr key={item.id} className="hover:bg-muted/50">
                    <td className="p-2 border border-border">{item.wilayah}</td>
                    <td className="p-2 border border-border">{item.ketua}</td>
                    <td className="p-2 border border-border">
                      {item.jumlah_kk}
                    </td>
                    <td className="p-2 border border-border">
                      {item.laki_laki}
                    </td>
                    <td className="p-2 border border-border">
                      {item.perempuan}
                    </td>
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
