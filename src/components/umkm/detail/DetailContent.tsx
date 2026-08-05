"use client";

import { useEffect, useState } from "react";
import { driveImage } from "@/src/utils/driveImage";
import {User, Phone, Clock3, MapPin, CalendarDays,} from "lucide-react";

interface Props {
  slug: string;
}

interface UMKM {
  id_umkm: string;
  nama_umkm: string;
  nama_kategori: string;
  tahun_berdiri: string;
  pemilik: string;
  no_hp: string | number;
  jam_operasional: string;
  alamat: string;
  maps: string;
  deskripsi_singkat: string;
  deskripsi: string;
  foto: string;
}

export default function DetailContent({ slug }: Props) {
  const [umkm, setUmkm] = useState<UMKM | null>(null);

  useEffect(() => {
    fetch(`/api/umkm?slug=${slug}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setUmkm(res.data);
        }
      });
  }, [slug]);

  if (!umkm) return null;
  const hasWhatsapp =umkm.no_hp && String(umkm.no_hp).trim() !== "";
  const hasMaps =umkm.maps && umkm.maps.trim() !== "";

  return (
    <section className="bg-gray-50 py-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Gambar */}

        <div className="mb-10 overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100">

          <div className="flex aspect-[16/9] w-full items-center justify-center bg-white">

            {umkm.foto ? (
              <img
                src={driveImage(umkm.foto)}
                alt={umkm.nama_umkm}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <div className="text-center text-gray-400">
                <p className="text-lg font-medium">
                  Foto tidak tersedia
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Judul */}

        <div className="mb-10">

          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {umkm.nama_kategori}
          </span>

          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            {umkm.nama_umkm}
          </h1>

        </div>

        {/* Konten */}

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Sidebar */}

          <div className="lg:w-[340px]">

            <div className="sticky top-24 h-full rounded-3xl bg-white border border-gray-100 shadow-lg p-7">

              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Informasi UMKM
              </h3>

              <div className="space-y-6">

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <User className="text-green-700 w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Pemilik
                    </p>

                    <h4 className="font-semibold text-gray-800">
                      {umkm.pemilik}
                    </h4>
                  </div>

                </div>

                <div className="flex gap-4">

                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        <CalendarDays className="text-green-700 w-5 h-5" />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                        Tahun Berdiri
                        </p>

                        <h4 className="font-semibold text-gray-800">
                        {umkm.tahun_berdiri}
                        </h4>
                    </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Phone className="text-green-700 w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Nomor HP
                    </p>

                    <h4 className="font-semibold text-gray-800">
                      {umkm.no_hp}
                    </h4>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Clock3 className="text-green-700 w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Jam Operasional
                    </p>

                    <h4 className="font-semibold text-gray-800">
                      {umkm.jam_operasional}
                    </h4>
                  </div>

                </div>

                <div className="flex gap-4 items-start">

                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <MapPin className="text-green-700 w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Alamat
                    </p>

                    <h4 className="font-semibold leading-7 text-gray-800">
                      {umkm.alamat}
                    </h4>
                  </div>

                </div>

              </div>

              <div className="mt-8 space-y-3">

                {hasWhatsapp ? (
                  <a
                    href={`https://wa.me/62${String(umkm.no_hp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-green-700 py-3 text-center font-semibold text-white transition hover:bg-green-800"
                  >
                    Hubungi WhatsApp
                  </a>
                ) : (
                  <button
                    disabled
                    className="block w-full cursor-not-allowed rounded-xl bg-gray-300 py-3 text-center font-semibold text-gray-500"
                  >
                    Hubungi WhatsApp
                  </button>
                )}

                {hasMaps ? (
                  <a
                    href={umkm.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-green-700 py-3 text-center font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
                  >
                    Lihat Lokasi
                  </a>
                ) : (
                  <button
                    disabled
                    className="block w-full cursor-not-allowed rounded-xl border border-gray-300 bg-gray-200 py-3 text-center font-semibold text-gray-500"
                  >
                    Lihat Lokasi
                  </button>
                )}

              </div>

            </div>

          </div>

          {/* Konten */}

          <div className="flex-1">

            <div className="h-full rounded-3xl bg-white border border-gray-100 shadow-lg p-10">

              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Tentang UMKM
              </h2>

              <div className="prose max-w-none text-gray-700 leading-9 whitespace-pre-line">
                {umkm.deskripsi}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}