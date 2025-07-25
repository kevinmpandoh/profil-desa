import type { Metadata } from "next";

import "./globals.css";
import "leaflet/dist/leaflet.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Profile Desa Wuwuk",
  description:
    "Platform informasi dan profil desa untuk mendukung transparansi, partisipasi, dan pengembangan desa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
