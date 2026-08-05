"use client";

import { useEffect, useState } from "react";
import { driveImage } from "@/src/utils/driveImage";

interface Profil {
  nama_lurah: string;
  foto_lurah: string;
  motto: string;
  deskripsi: string;
}

export default function LurahSection() {
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

        <div className="grid lg:grid-cols-2 gap-5 items-center">

          <div className="flex justify-center">

            <img
              src={driveImage(profil.foto_lurah)}
              alt={profil.nama_lurah}
              className="w-80 h-96 object-cover rounded-3xl shadow-xl"
            />

          </div>

          <div>

            <span className="text-green-700 font-semibold uppercase tracking-widest">
              Lurah Tappanjeng
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              {profil.nama_lurah}
            </h2>

            <div className="w-24 h-1 bg-yellow-500 rounded-full mt-4 mb-6"></div>

            <blockquote className="italic text-xl text-green-700 font-medium">
              "{profil.motto}"
            </blockquote>

            <p className="mt-8 text-gray-600 leading-8 text-justify">
              {profil.deskripsi}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}


