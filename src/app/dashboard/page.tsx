"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Image as ImageIcon,
  Landmark,
  BarChart2,
  PlusCircle,
} from "lucide-react";
import { VisitorChart } from "@/components/dashboard/beranda/VisitorChart";
import { DemografiChart } from "@/components/dashboard/beranda/DemografiChart";

export default function AdminDashboardHome() {
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
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Data Aktif</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Potensi Desa</CardTitle>
            <Landmark className="text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">7</p>
            <p className="text-sm text-muted-foreground">Potensi tercatat</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Galeri Foto</CardTitle>
            <ImageIcon className="text-pink-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm text-muted-foreground">Gambar terunggah</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Statistik Pengunjung</CardTitle>
            <BarChart2 className="text-yellow-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1345</p>
            <p className="text-sm text-muted-foreground">Bulan ini</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Action */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Aksi Cepat</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" className="flex items-center gap-2">
            <PlusCircle size={18} />
            Tambah Perangkat Desa
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <PlusCircle size={18} />
            Tambah Potensi
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <PlusCircle size={18} />
            Upload Gambar Galeri
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <VisitorChart />
        <DemografiChart />
      </div>
    </div>
  );
}
