"use client";

import { useEffect, useState } from "react";
import {
  Users,
  Home,
  Building2,
  MapPinned,
  Map,
  Store,
} from "lucide-react";

interface Profil {
  luas_wilayah: string;
  jumlah_penduduk: string;
  jumlah_kk: string;
  jumlah_rt: string;
  jumlah_rw: string;
  total_umkm: number;
}

export default function Statistic() {
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

  const data = [
    {
      icon: Map,
      title: "Luas Wilayah",
      value: profil.luas_wilayah,
    },
    {
      icon: Users,
      title: "Penduduk",
      value: profil.jumlah_penduduk,
    },
    {
      icon: Home,
      title: "KK",
      value: profil.jumlah_kk,
    },
    {
      icon: Building2,
      title: "RT",
      value: profil.jumlah_rt,
    },
    {
      icon: MapPinned,
      title: "RW",
      value: profil.jumlah_rw,
    },
    {
      icon: Store,
      title: "UMKM",
      value: profil.total_umkm,
    },
  ];

  return (
    <section className="bg-green-700 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <Icon
                    size={26}
                    className="text-green-700"
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-800">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm font-medium text-gray-500">
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