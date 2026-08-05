"use client";

import { useEffect, useState } from "react";
import { driveImage } from "@/src/utils/driveImage";

interface Profil {
  struktur_organisasi: string;
}

export default function OrganizationSection() {
  const [profil, setProfil] =useState<Profil | null>(null);

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

        <div className="text-center mb-12">

          <p className="text-green-700 font-semibold uppercase">
            Pemerintahan
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Struktur Organisasi
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">

          <img
            src={driveImage(profil.struktur_organisasi)}
            alt="Struktur Organisasi"
            className="w-full object-contain"
          />

        </div>

      </div>

    </section>
  );
}