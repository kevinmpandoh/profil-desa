"use client";

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "@/services/settings.service";

const footerLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil/visi-misi" },
  { label: "Pemerintah Desa", href: "/pemerintah-desa" },
  { label: "Potensi Desa", href: "/potensi-desa" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const kontakInfo = [
    {
      title: "Alamat",
      value: data.alamat,
    },
    { title: "Email", value: data.email }, // ganti jika ada email resmi
    { title: "Telepon", value: data.telepon }, // ganti atau kosongkan jika tidak ada
  ];
  return (
    <footer className="bg-brand-800 text-white pt-12">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* Kolom 1: Logo & Deskripsi */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logo-desa.png"
              alt="Logo Desa"
              width={40}
              height={40}
            />
            <span className="text-xl font-semibold">Desa Wuwuk</span>
          </div>
          <p className="text-sm text-gray-300">
            Website resmi Desa Wuwuk, Kecamatan Tareran, Kabupaten Minahasa
            Selatan. Menyediakan informasi, potensi lokal, dan layanan bagi
            masyarakat.
          </p>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {kontakInfo.map((item, idx) => (
              <li key={idx}>
                <span className="block font-medium text-white">
                  {item.title || "-"}
                </span>
                <span>{item.value || "-"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="bg-brand-900 text-center text-sm py-4 text-gray-300">
        &copy; {new Date().getFullYear()} Dibuat oleh Mahasiswa KKT 143 UNSRAT
      </div>
    </footer>
  );
}
