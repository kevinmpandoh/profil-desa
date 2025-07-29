"use client";
import React from "react";
import VisiMisiCard from "./VisiMisiCard";
import { useQuery } from "@tanstack/react-query";
import visiMisiService from "@/services/visi-misi.service";

export default function VisiMisiPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["visi-misi"],
    queryFn: () => visiMisiService.get(),
  });

  if (!isLoading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Visi dan Misi Desa</h1>

      <VisiMisiCard visi={data?.visi ?? null} misi={data?.misi ?? null} />
    </div>
  );
}
