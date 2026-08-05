"use client";

import { useEffect, useState } from "react";

interface Profil {
  sejarah: string;
  luas_wilayah: string;
  batas_utara: string;
  batas_selatan: string;
  batas_timur: string;
  batas_barat: string;
}

export default function AboutSection() {
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
    <section className="bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Informasi Wilayah
          </h2>

        </div>

        {/* <div className="bg-white rounded-3xl shadow-lg p-8 mb-12">

          <h3 className="text-2xl font-bold text-green-700 mb-5">
            Sejarah Kelurahan
          </h3>

          <p className="text-gray-600 leading-8 text-justify">
            {profil.sejarah}
          </p>

        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow p-6 text-gray-600">
            <h4 className="font-bold text-green-700 mb-2">
              Luas Wilayah
            </h4>
            <p>{profil.luas_wilayah}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-gray-600">
            <h4 className="font-bold text-green-700 mb-2">
              Batas Utara
            </h4>
            <p>{profil.batas_utara}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-gray-600">
            <h4 className="font-bold text-green-700 mb-2">
              Batas Selatan
            </h4>
            <p>{profil.batas_selatan}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-gray-600">
            <h4 className="font-bold text-green-700 mb-2">
              Batas Timur
            </h4>
            <p>{profil.batas_timur}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 text-gray-600">
            <h4 className="font-bold text-green-700 mb-2">
              Batas Barat
            </h4>
            <p>{profil.batas_barat}</p>
          </div>

        </div>

      </div>

    </section>
  );
}