"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil/visi-misi" },
  { label: "Pemerintah Desa", href: "/pemerintah-desa" },
  { label: "Potensi Desa", href: "/potensi-desa" },
  { label: "Kontak", href: "#kontak" },
];

const kontakInfo = [
  { title: "Alamat", value: "Jl. Raya Desa Indah No. 123, Minahasa" },
  { title: "Email", value: "desaku@example.com" },
  { title: "Telepon", value: "+62 812-3456-7890" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* Kolom 1: Logo & Deskripsi */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logo-desa.jpeg"
              alt="Logo Desa"
              width={40}
              height={40}
            />
            <span className="text-xl font-semibold">[Nama Desa]</span>
          </div>
          <p className="text-sm text-gray-300">
            Website resmi [Nama Desa], Kecamatan [Nama Kecematan], Kabupaten
            [Nama Kabupaten]. Informasi, potensi, dan layanan masyarakat dalam
            satu tempat.
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
                  {item.title}
                </span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="bg-gray-900 text-center text-sm py-4 text-gray-300">
        &copy; {new Date().getFullYear()} Powered by Kevin Pandoh
      </div>
    </footer>
  );
}
