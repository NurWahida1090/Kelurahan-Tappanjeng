"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Target } from "lucide-react";

interface Profil {
  visi: string;
  misi: string;
}

export default function VisionMission() {
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

  const misiList = profil.misi
    ? profil.misi
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== "")
    : [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-green-700 font-semibold uppercase tracking-widest">
            Arah Pembangunan
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-800">
            Visi & Misi Kelurahan
          </h2>

        </div>

        <div className="space-y-8">

          {/* VISI */}
          <div className="rounded-3xl border-2 border-green-700 bg-white p-10 shadow-md transition hover:shadow-lg">

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                <Target size={30} className="text-green-700" />
              </div>

              <h3 className="text-3xl font-bold text-green-700">
                Visi
              </h3>

            </div>

            <p className="text-lg leading-9 text-gray-700 text-justify">
              {profil.visi}
            </p>

          </div>

          {/* MISI */}
          <div className="rounded-3xl border-2 border-orange-400 bg-white p-10 shadow-md transition hover:shadow-lg">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                <CheckCircle size={30} className="text-orange-500" />
              </div>

              <h3 className="text-3xl font-bold text-orange-500">
                Misi
              </h3>

            </div>

            <ul className="space-y-5">

              {misiList.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4"
                >

                  <CheckCircle
                    size={22}
                    className="mt-1 flex-shrink-0 text-orange-500"
                  />

                  <span className="leading-8 text-gray-700 text-justify">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}