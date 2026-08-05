"use client";

import { useEffect, useState } from "react";
import { driveImage } from "@/src/utils/driveImage";

export default function ProfileHero() {
  const [profil, setProfil] = useState<any>(null);

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
    <section className="relative overflow-hidden">

      <div className="relative aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/6] w-full">

        <img
          src={driveImage(profil.foto_kelurahan)}
          alt={profil.nama_kelurahan}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">

          <div className="text-center text-white">

            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              {profil.nama_kelurahan}
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl">
              {profil.kecamatan}, {profil.kabupaten}, {profil.provinsi}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}