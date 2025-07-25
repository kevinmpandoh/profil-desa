// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import TentangDesaSection from "@/components/home/TentangDesaSection";
import PerangkatDesaSection from "@/components/home/PerangkatDesaSection";
import PotensiDesaSection from "@/components/home/PotensiDesaSection";
import GaleriSection from "@/components/home/GaleriSection";
import KontakSection from "@/components/home/KontakSection";
import StatistikPendudukSection from "@/components/home/StatistikPendudukSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TentangDesaSection />
      <StatistikPendudukSection />
      <PerangkatDesaSection />
      <PotensiDesaSection />
      <GaleriSection />
      <KontakSection />
    </main>
  );
}
