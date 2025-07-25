"use client";

import Image from "next/image";

const isiSejarah = `
<p>
  <strong>Wuwuk</strong> adalah nama sebuah pohon kayu yang terdapat di Sendangan, terletak di tengah kampung. 
  Kayu itu mengeluarkan getah harum seperti kemenyan yang oleh masyarakat setempat disebut "karai kumaapaaroro", 
  diyakini memberi kekuatan bagi Tonaas dan penduduk. Dari pohon inilah, nama <strong>Desa Wuwuk</strong> berasal, yang berarti harum dan memberi kekuatan.
</p>

<p>
  Penduduk Wuwuk berasal dari <em>Walak Kawangkoan</em>. Wilayah ini awalnya disebut <strong>Wanua Weru</strong> 
  (pemukiman baru) dan dibuka oleh beberapa <em>Tonaas</em> seperti Sage, Walintukan, Rompas, dan Egeten setelah 
  mendapat restu melalui bunyi burung manguni, simbol spiritual dalam kepercayaan lokal.
</p>

<p>
  Sistem kehidupan masyarakat didasarkan pada gotong royong, mulai dari pembangunan rumah, pertanian, 
  hingga keamanan dari praktik mengayau. Kepercayaan spiritual mereka memuja <strong>Apo Wananatas</strong>, 
  Tuhan yang Maha Besar dalam keyakinan lokal, sebelum akhirnya masuknya agama Kristen.
</p>

<p>
  Kehidupan ekonomi awal desa bertumpu pada pertanian (padi, jagung, sayuran, ubi), berburu, dan beternak. 
  Struktur sosial dipimpin oleh Tonaas, dengan tugas yang terdistribusi sesuai fungsi adat dan kepercayaan.
</p>

<p>
  <strong>Desa Wuwuk</strong> resmi dimekarkan pada <strong>26 Juli 2010</strong> menjadi dua wilayah: 
  Desa Wuwuk dan Desa Wuwuk Barat, masing-masing terdiri dari 5 jaga (lingkungan).
</p>

<p>
  Sejak awal berdirinya, masyarakat Desa Wuwuk telah menunjukkan semangat gotong royong, 
  spiritualitas tinggi, dan kearifan lokal yang tetap dilestarikan hingga kini.
</p>
`;

export default function SejarahDesaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-green-800 text-center">
        Sejarah Desa Wuwuk
      </h1>

      {/* Gambar di atas */}
      <div className="w-full lg:max-w-xl mx-auto h-72 relative rounded-xl overflow-hidden shadow-md mb-8">
        <Image
          src="/images/sejarah-desa.jpg"
          alt="Sejarah Desa Wuwuk"
          fill
          className="object-cover"
        />
      </div>

      {/* Konten Sejarah: nanti berasal dari database */}
      <div
        className="prose prose-green max-w-none text-justify"
        dangerouslySetInnerHTML={{ __html: isiSejarah }}
      />
    </div>
  );
}
