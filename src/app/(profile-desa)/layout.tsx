// src/app/layout.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LayoutHomePage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
