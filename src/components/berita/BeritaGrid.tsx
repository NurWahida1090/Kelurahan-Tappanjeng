"use client";

import { useEffect, useMemo, useState } from "react";
import BeritaCard from "./BeritaCard";
import SearchBerita from "./SearchBerita";

interface Berita {
  id_berita: string;
  judul: string;
  penulis: string;
  isi_singkat: string;
  isi: string;
  gambar: string;
  tanggal: string;
}

export default function BeritaGrid() {
  const [berita, setBerita] = useState<Berita[]>([]);
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState<"terbaru" | "terlama">("terbaru");

  useEffect(() => {
    fetch("/api/berita")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setBerita(res.data);
        }
      });
  }, []);

  const data = useMemo(() => {
  const cari = keyword.toLowerCase();

    return berita
        .filter((item) => {
        return (
            item.judul.toLowerCase().includes(cari) ||
            item.penulis.toLowerCase().includes(cari) ||
            item.isi_singkat.toLowerCase().includes(cari)
        );
        })
        .sort((a, b) => {
        const dateA = new Date(a.tanggal).getTime();
        const dateB = new Date(b.tanggal).getTime();

        return sort === "terbaru"
            ? dateB - dateA
            : dateA - dateB;
        });
    }, [berita, keyword, sort]);

  return (
    <section className="py-10 bg-gray-50">

      <SearchBerita
        value={keyword}
        sort={sort}
        onChange={setKeyword}
        onSortChange={setSort}
      />

      <div className="max-w-7xl mx-auto px-6">

        {data.length === 0 ? (

          <div className="py-24 text-center">

            <div className="text-6xl mb-5">
              📰
            </div>

            <h2 className="text-2xl font-bold text-gray-700">
              Data berita tidak ada
            </h2>

            <p className="text-gray-500 mt-2">
              Belum ada berita yang dapat ditampilkan.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {data.map((item) => (
              <BeritaCard
                key={item.id_berita}
                berita={item}
              />
            ))}

          </div>

        )}

      </div>

    </section>
  );
}