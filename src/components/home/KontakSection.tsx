"use client";

import { getSettings } from "@/services/settings.service";
import { useQuery } from "@tanstack/react-query";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function KontakSection() {
  const { data, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  if (isLoading) {
    return (
      <section className="bg-brand-50 py-16">
        <div className="container max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Skeleton kiri */}
            <div className="flex-1 p-8 space-y-6 animate-pulse">
              <div className="h-8 w-48 bg-gray-300 rounded" />
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gray-300 rounded" />
                <div className="space-y-2">
                  <div className="w-32 h-4 bg-gray-300 rounded" />
                  <div className="w-64 h-4 bg-gray-300 rounded" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gray-300 rounded" />
                <div className="space-y-2">
                  <div className="w-32 h-4 bg-gray-300 rounded" />
                  <div className="w-40 h-4 bg-gray-300 rounded" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-gray-300 rounded" />
                <div className="space-y-2">
                  <div className="w-32 h-4 bg-gray-300 rounded" />
                  <div className="w-56 h-4 bg-gray-300 rounded" />
                </div>
              </div>
            </div>

            {/* Skeleton Maps */}
            <div className="flex-1">
              <div className="h-[440px] w-full bg-gray-300 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-50 py-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-10"
        >
          <div className="flex-1 p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-600 mb-10 text-center md:text-left">
              Kontak Desa
            </h2>

            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <MapPin className="text-brand-700 w-8 h-8" />
                <div>
                  <p className="font-semibold">Alamat</p>
                  <p>
                    {data.alamat ||
                      "Desa Wuwuk, Kecamatan Tareran, Kabupaten Minahasa Selatan, Sulawesi Utara 95353"}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <Phone className="text-brand-700 w-6 h-6" />
                <div>
                  <p className="font-semibold">Telepon</p>
                  <p>{data.telepon ?? "-"}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <Mail className="text-brand-700 w-6 h-6" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>{data.email ?? "-"}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
