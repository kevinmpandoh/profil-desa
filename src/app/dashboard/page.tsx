"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Image as ImageIcon, Landmark, BarChart2 } from "lucide-react";
import { DemografiChart } from "@/components/dashboard/beranda/DemografiChart";
import { BarChartWilayah } from "@/components/dashboard/beranda/BarChartWilayah";
import { useQuery } from "@tanstack/react-query";
import dashboardService from "@/services/dashboard.service";

export default function AdminDashboardHome() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: dashboardService.get,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // const totalKK =
  //   data?.reduce((acc: any, cur: any) => acc + cur.jumlah_kk, 0) || 0;
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Selamat datang, Admin!</h1>

      {/* Ringkasan Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Perangkat Desa</CardTitle>
            <Users className="text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.perangkat_desa || "0"}</p>
            <p className="text-sm text-muted-foreground">Data Aktif</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Potensi Desa</CardTitle>
            <Landmark className="text-brand-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.potensi_desa || "0"}</p>
            <p className="text-sm text-muted-foreground">Potensi tercatat</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Galeri Foto</CardTitle>
            <ImageIcon className="text-pink-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.galeri_desa || "0"}</p>
            <p className="text-sm text-muted-foreground">Gambar terunggah</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Jumlah Penduduk</CardTitle>
            <BarChart2 className="text-yellow-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{data.penduduk.jumlah || "0"}</p>
            <p className="text-sm text-muted-foreground">Penduduk</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BarChartWilayah />
        <DemografiChart data={data.penduduk} />
      </div>
    </div>
  );
}
