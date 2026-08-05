"use client";

import { useEffect, useState } from "react";
import {
  FileText,
  LoaderCircle,
  CircleCheckBig,
} from "lucide-react";

interface Statistik {
  total_pengajuan: number;
  dalam_penanganan: number;
  selesai: number;
}

export default function StatisticPengajuan() {
  const [statistik, setStatistik] = useState<Statistik | null>(null);

  useEffect(() => {
    fetch("/api/statistik-pengajuan")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setStatistik(res.data);
        }
      });
  }, []);

  if (!statistik) return null;

  const data = [
    {
      title: "Total Pengajuan",
      value: statistik.total_pengajuan,
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Dalam Penanganan",
      value: statistik.dalam_penanganan,
      icon: LoaderCircle,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Selesai",
      value: statistik.selesai,
      icon: CircleCheckBig,
      color: "bg-green-100 text-green-700",
    },
  ];

  return (

        <div className="space-y-5">

          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg transition hover:shadow-xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={26} />
                </div>

                <h2 className="text-3xl font-bold text-gray-800">
                  {item.value}
                </h2>

                  <p className="flex-1 text-sm text-gray-800">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

  );
}