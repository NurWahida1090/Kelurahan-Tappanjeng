"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { driveImage } from "@/src/utils/driveImage";
import { createSlug } from "@/src/utils/slug";

interface UMKM {
  id_umkm: string;
  nama_umkm: string;
  pemilik: string;
  deskripsi_singkat: string;
  foto: string;
  jam_operasional: string;
}

export default function UmkmSection() {
  const [umkm, setUmkm] = useState<UMKM[]>([]);

  useEffect(() => {
    fetch("/api/umkm")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setUmkm(res.data.slice(0, 4));
        }
      });
  }, []);

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">

          <div>
            <p className="text-green-700 font-semibold uppercase">
              UMKM
            </p>

            <h2 className="text-4xl font-bold text-gray-800">
              UMKM Tappanjeng
            </h2>
          </div>

          <Link
            href="/umkm"
            className="hidden md:block text-green-700 font-semibold hover:underline"
          >
            Lihat Semua →
          </Link>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {umkm.map((item) => (

            <div
              key={item.id_umkm}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >

              <div className="w-full h-56 bg-white flex items-center justify-center border-b border-gray-100">
                {item.foto ? (
                  <img
                    src={driveImage(item.foto)}
                    alt={item.nama_umkm}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                    Foto tidak tersedia
                  </span>
                )}
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-green-800">
                  {item.nama_umkm}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Pemilik : {item.pemilik}
                </p>

                <p className="text-sm text-gray-500">
                  {item.jam_operasional}
                </p>

                <p className="mt-4 text-gray-600 text-sm line-clamp-3">
                  {item.deskripsi_singkat}
                </p>

                <Link
                  href={`/umkm/${createSlug(item.nama_umkm)}`}
                  className="inline-block mt-6 bg-green-700 text-white px-5 py-2 rounded-xl hover:bg-green-800 transition"
                >
                  Detail
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 md:hidden text-center">

          <Link
            href="/umkm"
            className="bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            Lihat Semua UMKM
          </Link>

        </div>

      </div>

    </section>
  );
}