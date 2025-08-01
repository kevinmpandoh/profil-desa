"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, LayoutDashboard, LogOut, Menu } from "lucide-react";
import Image from "next/image";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { logout } from "@/services/auth.service";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { getSettings } from "@/services/settings.service";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const { user, setUser, clearUser } = useAuthStore();

  const isLoggedIn = !!user;

  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  const adminName = user?.name || "Admin Desa";

  const isActive = (path: string) =>
    pathname === path ? "text-brand-700 font-semibold" : "text-gray-700";

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearUser();
      toast.success("Logout berhasil!");
      router.push("/");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Terjadi kesalahan");
    },
  });

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={data?.logo_url || "/logo-desa.png"}
            alt="Logo Desa"
            width={24}
            height={24}
            className="h-12 w-12 object-contain"
          />
          <div className="leading-tight">
            <h3 className="text-xl font-bold text-brand-600">Desa Wuwuk</h3>
            <p className="text-sm text-gray-600">
              Kec. {data?.kecamatan || "Tombariri"}, Kab. {data?.kabupaten}
            </p>
          </div>
        </Link>

        <div className="flex gap-6 items-center">
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={`${isActive("/")} hover:text-brand-600`}>
              Beranda
            </Link>

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`flex items-center gap-1 hover:text-brand-600 ${
                  pathname.startsWith("/profil")
                    ? "text-brand-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Profil Desa <ChevronDown size={16} />
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow w-48 z-10">
                  {[
                    ["Visi & Misi", "/profil/visi-misi"],
                    ["Sejarah", "/profil/sejarah"],
                    ["Geografis", "/profil/geografis"],
                    ["Demografis", "/profil/demografis"],
                  ].map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pemerintah-desa"
              className={`${isActive("/pemerintah-desa")} hover:text-brand-600`}
            >
              Pemerintah Desa
            </Link>
            <Link
              href="/potensi-desa"
              className={`${isActive("/potensi-desa")} hover:text-brand-600`}
            >
              Potensi Desa
            </Link>
            <Link
              href="/galeri-desa"
              className={`${isActive("/galeri-desa")} hover:text-brand-600`}
            >
              Galeri Desa
            </Link>
          </nav>

          {/* Kanan: Login atau Avatar */}
          <div className="hidden md:flex items-center gap-3 relative">
            {!isLoggedIn ? (
              <Button size={"lg"}>
                <Link
                  href="/auth/login"

                  // className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Login
                </Link>
              </Button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex cursor-pointer items-center gap-2 focus:outline-none"
                >
                  <Image
                    src={user.avatar_url || "/avatar-default.svg"}
                    alt="Admin Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </button>

                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-56 px-2 py-4 bg-white border rounded shadow z-20">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-base text-gray-700"
                    >
                      <LayoutDashboard size={16} />
                      Dashboard
                    </Link>
                    <button
                      onClick={() => mutation.mutate()}
                      disabled={mutation.isPending}
                      className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 text-base text-gray-700"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
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
              {[
                ["Visi & Misi", "/profil/visi-misi"],
                ["Sejarah", "/profil/sejarah"],
                ["Geografis", "/profil/geografis"],
                // ["Ekonomi", "/profil/ekonomi"],
                ["Demografis", "/profil/demografis"],
              ].map(([label, href]) => (
                <Link key={href} href={href} className="block py-1">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/pemerintah-desa" className="block py-2">
            Pemerintah Desa
          </Link>
          <Link href="/potensi-desa" className="block py-2">
            Potensi Desa
          </Link>
          <Link href="/galeri-desa" className="block py-2">
            Potensi Desa
          </Link>

          {!isLoggedIn ? (
            <Button>
              <Link
                href="/auth/login"
                // className="block mt-2 bg-green-600 text-white px-4 py-2 rounded text-center"
              >
                Login
              </Link>
            </Button>
          ) : (
            <>
              <div className="mt-3 flex items-center justify-between px-2 mb-4">
                <div className="flex gap-2">
                  <Image
                    src="/avatar-default.svg"
                    alt="Avatar"
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <span>{adminName}</span>
                </div>
                <Button
                  // onClick={() => mutation.mutate()}
                  // disabled={mutation.isPending}
                  variant={"outline"}
                  size={"sm"}
                  // className="text-base text-brand-600 ml-auto"
                >
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              </div>
              <Button
                onClick={() => mutation.mutate()}
                disabled={mutation.isPending}
                // className="text-sm text-red-600 ml-auto"
                variant={"destructive"}
                size={"sm"}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
