"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function KontakSection() {
  return (
    <section className="bg-brand-50 py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 p-8 ">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-600 mb-10 text-center md:text-left">
              Kontak Desa
            </h2>
            {/* Informasi Kontak */}
            <div className="flex-1 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-700 w-8 h-8" />
                <div>
                  <p className="font-semibold">Alamat</p>
                  <p>
                    Desa Wuwuk, Kecamatan Tareran, Kabupaten Minahasa Selatan,
                    Sulawesi Utara 95353
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-brand-700 w-6 h-6" />
                <div>
                  <p className="font-semibold">Telepon</p>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-brand-700 w-6 h-6" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>desaku@example.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
          </div>
          <div className="flex-1">
            <div className="rounded-xl overflow-hidden shadow-lg h-[440px] w-full bg-white p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31911.091745160014!2d124.70112449999999!3d1.23834895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x328742b95ec2d351%3A0xcae804f52ab7af18!2sWuwuk%2C%20Kec.%20Tareran%2C%20Kabupaten%20Minahasa%20Selatan%2C%20Sulawesi%20Utara!5e0!3m2!1sid!2sid!4v1753457190511!5m2!1sid!2sid"
                width="600"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
