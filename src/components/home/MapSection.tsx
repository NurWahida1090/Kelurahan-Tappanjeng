"use client";

import { useEffect, useState } from "react";
import { driveImage } from "@/src/utils/driveImage";

interface Profil {
  peta: string;
}

export default function MapSection() {
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">

          <div className="flex justify-center p-1">

            <img
              src={driveImage(profil.peta)}
              alt="Peta Kelurahan"
              className="max-w-full h-auto"
            />

          </div>

        </div>

      </div>
    </section>
  );
}