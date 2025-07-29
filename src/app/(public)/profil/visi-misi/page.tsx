// app/(public)/profil/visi-misi/page.tsx

"use client";
import VisiMisiClient from "./VisiMisiClient";
import visiMisiService from "@/services/visi-misi.service";
import { useQuery } from "@tanstack/react-query";

export default function VisiMisiDesaPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["visi-misi"],
    queryFn: () => visiMisiService.get(),
  });

  if (!isLoading && !data) {
    return <div>Loading...</div>;
  }

  return <VisiMisiClient visi={data?.visi} misi={data?.misi} />;
}
