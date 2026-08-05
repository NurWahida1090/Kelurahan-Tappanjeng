"use client";

import Link from "next/link";
import { driveImage } from "@/src/utils/driveImage";
import { createSlug } from "@/src/utils/slug";

interface Props {
  umkm: any;
}

export default function UmkmCard({ umkm }: Props) {
  const foto = driveImage(umkm.foto);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100">

      {foto ? (
        <img
          src={foto}
          alt={umkm.nama_umkm}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
          Foto tidak tersedia
        </div>
      )}

      <div className="p-5">

        <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
          {umkm.icon} {umkm.nama_kategori}
        </span>

        <h3 className="mt-4 text-xl font-bold text-gray-900">
          {umkm.nama_umkm}
        </h3>

        <p className="mt-2 text-sm text-gray-700">
          <span className="font-semibold text-gray-800">
            Pemilik :
          </span>{" "}
          {umkm.pemilik}
        </p>

        <p className="mt-4 text-gray-600 leading-6 line-clamp-2">
          {umkm.deskripsi_singkat}
        </p>

        <Link
          href={`/umkm/${createSlug(umkm.nama_umkm)}`}
          className="inline-flex items-center mt-5 font-semibold text-green-700 hover:text-green-800 hover:underline"
        >
          Lihat Detail →
        </Link>

      </div>

    </div>
  );
}