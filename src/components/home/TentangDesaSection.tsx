import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TentangDesaSection() {
  return (
    <main className="w-full bg-white py-20">
      <section className="container max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-1/2">
            <Image
              src="/images/tentang-desa.jpg"
              alt="Tentang Desa"
              width={600}
              height={400}
              className="w-full h-90 rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-brand-600">
              Tentang Desa Wuwuk
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Desa Wuwuk merupakan salah satu desa di Kecamatan Tareran,
              Kabupaten Minahasa Selatan, Provinsi Sulawesi Utara. Desa ini
              memiliki kekayaan alam dan budaya yang khas, serta potensi
              pertanian dan usaha masyarakat yang terus berkembang. Website ini
              hadir sebagai media informasi, transparansi, dan pelayanan untuk
              seluruh warga Desa Wuwuk dan masyarakat umum.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Button variant={"outline"} size={"lg"}>
                <Link
                  href="/profil/visi-misi"
                  // className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
                >
                  Visi & Misi
                </Link>
              </Button>
              <Button variant={"outline"} size={"lg"}>
                <Link href="/profil/sejarah">Sejarah Desa</Link>
              </Button>
              <Button variant={"outline"} size={"lg"}>
                <Link href="/profil/geografis">Geografis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
