"use client";

import Link from "next/link";
import { driveImage } from "@/src/utils/driveImage";
import { createSlug } from "@/src/utils/slug";

interface Props {
  berita: {
    id_berita: string;
    judul: string;
    penulis: string;
    isi_singkat: string;
    gambar: string;
    tanggal: string;
  };
}

export default function BeritaCard({ berita }: Props) {
  return (
    <Link href={`/berita/${createSlug(berita.judul)}`}>

      <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition">

        <img
          src={driveImage(berita.gambar)}
          className="w-full h-56 object-cover"
          alt={berita.judul}
        />

        <div className="p-6">

          <p className="text-sm text-gray-500">
            {new Date(berita.tanggal).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
            })}
          </p>

          <h3 className="font-bold text-xl mt-2 line-clamp-2 text-gray-800">
            {berita.judul}
          </h3>

          <p className="text-gray-600 mt-3 line-clamp-3">
            {berita.isi_singkat}
          </p>

          <div className="mt-6 flex justify-between items-center">

            <span className="text-sm text-gray-500">
              👤 {berita.penulis}
            </span>

            <span className="text-green-700 font-semibold">
              Baca →
            </span>

          </div>

        </div>

      </div>

    </Link>
  );
}