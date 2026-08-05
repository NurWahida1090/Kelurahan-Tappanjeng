"use client";

import { useEffect, useMemo, useState } from "react";
import UmkmCard from "./UmkmCard";
import SearchBar from "./SearchBar";

interface UMKM {
  id_umkm: string;
  nama_umkm: string;
  id_kategori: string;
  nama_kategori: string;
  pemilik: string;
  deskripsi_singkat: string;
  foto: string;
}

interface Kategori {
  id_kategori: string;
  nama_kategori: string;
}

export default function UmkmGrid() {
  const [umkm, setUmkm] = useState<UMKM[]>([]);
  const [kategori, setKategori] = useState<Kategori[]>([]);
  const [selected, setSelected] = useState("Semua");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("/api/umkm")
      .then((r) => r.json())
      .then((r) => {
        if (r.success) setUmkm(r.data);
      });

    fetch("/api/kategori-umkm")
      .then((r) => r.json())
      .then((r) => {
        if (r.success) setKategori(r.data);
      });
  }, []);

  const data = useMemo(() => {
    return umkm.filter((item) => {
      const cocokKategori =
        selected === "Semua" ||
        item.nama_kategori === selected;

      const cocokCari =
        item.nama_umkm.toLowerCase().includes(keyword.toLowerCase()) ||
        item.pemilik.toLowerCase().includes(keyword.toLowerCase()) ||
        item.nama_kategori.toLowerCase().includes(keyword.toLowerCase());

      return cocokKategori && cocokCari;
    });
  }, [umkm, keyword, selected]);

  return (
    <section className="py-10 bg-gray-50">
    <SearchBar
        value={keyword}
        onChange={setKeyword}
    />
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex gap-3 overflow-x-auto pb-3 mb-10">

          <button
            onClick={() => setSelected("Semua")}
            className={`px-5 py-2 rounded-full whitespace-nowrap transition ${
              selected === "Semua"
                ? "bg-green-700 text-white"
                : "bg-green-100 text-green-700"
            }`}
          >
            Semua
          </button>

          {kategori.map((item) => (
            <button
              key={item.id_kategori}
              onClick={() => setSelected(item.nama_kategori)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition ${
                selected === item.nama_kategori
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {item.nama_kategori}
            </button>
          ))}
        </div>

        {data.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9A2.5 2.5 0 0118.5 19h-13A2.5 2.5 0 013 16.5v-9z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h8M8 14h5"
                />
                </svg>

                <h3 className="text-xl font-semibold text-gray-700">
                Data tidak ada
                </h3>

                <p className="mt-2 text-gray-500">
                Tidak ada UMKM yang sesuai dengan pencarian atau kategori yang dipilih.
                </p>
            </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {data.map((item) => (
                <UmkmCard
                    key={item.id_umkm}
                    umkm={item}
                />
                ))}
            </div>
            )}

      </div>

    </section>
  );
}