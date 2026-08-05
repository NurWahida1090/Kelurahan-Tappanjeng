"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Home,
  MapPinned,
  Building2,
  Map,
  Store,
} from "lucide-react";

interface Profil {
  jumlah_penduduk: string;
  jumlah_kk: string;
  jumlah_rt: string;
  jumlah_rw: string;
  luas_wilayah: string;
  total_umkm: number;
}

export default function WilayahSection() {
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

  const data = [
    {
      title: "Luas Wilayah",
      value: profil.luas_wilayah,
      icon: Map,
    },
    {
      title: "Jumlah Penduduk",
      value: profil.jumlah_penduduk,
      icon: Users,
    },
    {
      title: "Jumlah KK",
      value: profil.jumlah_kk,
      icon: Home,
    },
    {
      title: "Jumlah RT",
      value: profil.jumlah_rt,
      icon: Building2,
    },
    {
      title: "Jumlah RW",
      value: profil.jumlah_rw,
      icon: MapPinned,
    },
    {
      title: "Total UMKM",
      value: profil.total_umkm,
      icon: Store,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-2">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="text-green-700 font-semibold uppercase">
            Tentang Kelurahan
          </p>

          <h2 className="mt-3 text-2xl font-bold text-gray-900">
            Statistik Kelurahan
          </h2>

        </div>

        {/* Card Statistik */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

          {data.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">

                  <Icon
                    size={26}
                    className="text-green-700"
                  />

                </div>

                <h3 className="text-2xl font-bold text-green-700 break-words">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.title}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}