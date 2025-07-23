"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function KontakSection() {
  return (
    <section className="bg-green-50 py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 p-8 ">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-10">
              Kontak Kami
            </h2>
            {/* Informasi Kontak */}
            <div className="flex-1 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-green-700 w-6 h-6" />
                <div>
                  <p className="font-semibold">Alamat</p>
                  <p>
                    Jl. Raya Desa Indah No. 123, Kecamatan Harmoni, Kabupaten
                    Minahasa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-green-700 w-6 h-6" />
                <div>
                  <p className="font-semibold">Telepon</p>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-green-700 w-6 h-6" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>desaku@example.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
          </div>
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31647.474393612107!2d124.91106643098247!3d1.3144345790890997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287c58a590dc9c7%3A0x45c8cde2fc6935ed!2sMinahasa%2C%20Sulawesi%20Utara!5e0!3m2!1sen!2sid!4v1623048258702!5m2!1sen!2sid"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
            <p className="mt-4 text-md text-gray-800 text-center">
              Lokasi Kantor Desa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
