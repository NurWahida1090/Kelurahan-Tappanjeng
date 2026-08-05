"use client";

import { useEffect, useState } from "react";
import { driveImage } from "@/src/utils/driveImage";

interface Profil {
  peta: string;
}

export default function MapProfile() {
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
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-12 text-center">

          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Peta Wilayah Kelurahan
          </h2>

        </div>

        {/* Peta */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

          <img
            src={driveImage(profil.peta)}
            alt="Peta Kelurahan"
            className="w-full h-auto object-contain"
          />

        </div>

      </div>
    </section>
  );
}