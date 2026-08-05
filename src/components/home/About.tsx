"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { driveImage } from "@/src/utils/driveImage";

interface Profil {
  nama_kelurahan: string;
  deskripsi: string;
  foto_kelurahan: string;
}

export default function About() {
  const [profil, setProfil] = useState<Profil | null>(null);

  useEffect(() => {
    fetch("/api/profil")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setProfil(res.data);
        }
      });
  }, []);

  if (!profil) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="overflow-hidden rounded-3xl shadow-xl">

        <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">

          <img
            src={driveImage(profil.foto_kelurahan)}
            alt={profil.nama_kelurahan}
            className="w-full h-full object-cover"
          />

        </div>

      </div>

          <div>

            <span className="text-green-700 font-semibold uppercase tracking-widest">
              Tentang Kelurahan
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              {profil.nama_kelurahan}
            </h2>

            <p className="mt-6 text-gray-600 leading-8 line-clamp-6">
              {profil.deskripsi}
            </p>

            <Link
              href="/profil"
              className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-xl transition"
            >
              Selengkapnya
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}