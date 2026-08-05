"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { driveImage } from "@/src/utils/driveImage";
import { createSlug } from "@/src/utils/slug";

interface Berita {
  id_berita: string;
  judul: string;
  isi_singkat: string;
  gambar: string;
  tanggal: string;
  penulis: string;
}

export default function BeritaSection() {
  const [berita, setBerita] = useState<Berita[]>([]);

  useEffect(() => {
    fetch("/api/berita")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setBerita(res.data.slice(0, 3));
        }
      });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">

          <div>
            <p className="text-green-700 font-semibold uppercase">
              Berita
            </p>

            <h2 className="text-4xl font-bold text-gray-800">
              Berita Terbaru
            </h2>
          </div>

          <Link
            href="/berita"
            className="hidden md:block text-green-700 font-semibold hover:underline"
          >
            Lihat Semua →
          </Link>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {berita.map((item) => (

            <div
              key={item.id_berita}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >

              <img
                src={driveImage(item.gambar)}
                alt={item.judul}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <span>{item.penulis}</span>
                  <span>{new Date(item.tanggal).toLocaleDateString("id-ID", {day: "2-digit", month: "long", year: "numeric",})}</span>
                </div>

                <h3 className="text-xl font-bold text-green-800 line-clamp-2">
                  {item.judul}
                </h3>

                <p className="mt-4 text-gray-600 text-sm leading-7 line-clamp-3">
                  {item.isi_singkat}
                </p>

                <Link
                  href={`/berita/${createSlug(item.judul)}`}
                  className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-xl transition"
                >
                  Baca Selengkapnya
                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 text-center md:hidden">

          <Link
            href="/berita"
            className="bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            Lihat Semua Berita
          </Link>

        </div>

      </div>
    </section>
  );
}