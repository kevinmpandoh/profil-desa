import { NextRequest, NextResponse } from "next/server";

// Daftar route yang butuh autentikasi
const protectedRoutes = ["/dashboard"];

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  const pathname = request.nextUrl.pathname;

  const isProtected = protectedRoutes.some((path) => pathname.startsWith(path));

  // Jika route tidak butuh login, lanjutkan saja
  if (!isProtected) {
    return NextResponse.next();
  }

  // Kalau belum login, redirect ke halaman login
  if (!accessToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname); // bisa redirect kembali
    return NextResponse.redirect(loginUrl);
  }

  // Jika sudah login, lanjutkan
  return NextResponse.next();
}

// Menentukan route mana yang akan diperiksa middleware ini
export const config = {
  matcher: ["/dashboard/:path*"],
};
