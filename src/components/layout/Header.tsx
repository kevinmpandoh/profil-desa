"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Simulasi login (ganti nanti dengan session dari supabase)
  const isLoggedIn = false;
  const adminName = "Admin Desa";

  // Fungsi helper untuk memberi kelas aktif
  const isActive = (path: string) =>
    pathname === path ? "text-green-700 font-semibold" : "text-gray-700";

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo & Nama */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo-desa.jpeg" alt="Logo Desa" className="h-10 w-10" />
          <span className="text-xl font-bold text-green-700">Desa Contoh</span>
        </Link>
        <div className="flex gap-6 items-center">
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center  gap-6">
            <Link href="/" className={`${isActive("/")} hover:text-green-600`}>
              Beranda
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`flex items-center gap-1 hover:text-green-600 ${
                  pathname.startsWith("/profil")
                    ? "text-green-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Profil Desa <ChevronDown size={16} />
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow w-48 z-10">
                  <Link
                    href="/profil/visi-misi"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Visi & Misi
                  </Link>
                  <Link
                    href="/profil/sejarah"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Sejarah
                  </Link>
                  <Link
                    href="/profil/geografis"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Geografis
                  </Link>
                  <Link
                    href="/profil/ekonomi"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Ekonomi
                  </Link>
                  <Link
                    href="/profil/demografis"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Demografis
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pemerintah-desa"
              className={`${isActive("/pemerintah-desa")} hover:text-green-600`}
            >
              Pemerintah Desa
            </Link>
            <Link
              href="/potensi-desa"
              className={`${isActive("/potensi-desa")} hover:text-green-600`}
            >
              Potensi Desa
            </Link>
          </nav>

          {/* Kanan: Login / Avatar */}
          <div className="hidden md:flex items-center gap-3">
            {!isLoggedIn ? (
              <Link
                href="/auth/login"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Image
                  src="/avatar-default.svg"
                  alt="Admin Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-gray-700">{adminName}</span>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2">
            Beranda
          </Link>
          <div className="py-2">
            <p className="font-medium">Profil Desa</p>
            <div className="pl-4 text-sm">
              <Link href="/profil/visi-misi" className="block py-1">
                Visi & Misi
              </Link>
              <Link href="/profil/sejarah" className="block py-1">
                Sejarah
              </Link>
              <Link href="/profil/geografis" className="block py-1">
                Geografis
              </Link>
              <Link href="/profil/ekonomi" className="block py-1">
                Ekonomi
              </Link>
              <Link href="/profil/demografis" className="block py-1">
                Demografis
              </Link>
            </div>
          </div>
          <Link href="/pemerintah-desa" className="block py-2">
            Pemerintah Desa
          </Link>
          <Link href="/potensi-desa" className="block py-2">
            Potensi Desa
          </Link>
          {!isLoggedIn ? (
            <Link
              href="/auth/login"
              className="block mt-2 bg-green-600 text-white px-4 py-2 rounded text-center"
            >
              Login
            </Link>
          ) : (
            <div className="mt-3 flex items-center gap-2 px-2">
              <Image
                src="/avatar-default.svg"
                alt="Avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span>{adminName}</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
