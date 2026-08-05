"use client";

import { useEffect, useState } from "react";
import { driveImage } from "@/src/utils/driveImage";

interface Persuratan {
  judul: string;
  deskripsi: string;
  qr_code: string;
  link_gform: string;
}

export default function PersuratanContent() {

  const [data, setData] = useState<Persuratan | null>(null);

  useEffect(() => {

    fetch("/api/persuratan")
      .then((res) => res.json())
      .then((res) => {

        if (res.success) {
          setData(res.data);
        }

      });

  }, []);

  if (!data) return null;

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">

          <div className="p-12 flex flex-col justify-center">

            <span className="text-green-700 font-semibold uppercase tracking-widest">
              Layanan Online
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              {data.judul}
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              {data.deskripsi}
            </p>

            <a
              href={data.link_gform}
              target="_blank"
              className="mt-10 inline-flex w-fit items-center rounded-xl bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800 transition"
            >
              Isi Google Form →
            </a>

          </div>

          <div className="flex items-center justify-center bg-green-50 p-6 sm:p-8 lg:p-10">

            <div className="rounded-3xl bg-white p-6 shadow-lg">

                <img
                  src={driveImage(data.qr_code)}
                  alt="QR Code"
                  className="block h-auto w-auto max-w-full object-contain"
                />

              <p className="mt-6 text-center text-gray-500">
                Scan QR Code untuk membuka formulir
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}