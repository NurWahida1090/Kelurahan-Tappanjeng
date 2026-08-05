"use client";

import { useEffect, useState } from "react";

interface Kategori {
  id_kategori: string;
  nama_kategori: string;
  icon: string;
}

interface Props {
  selected: string;
  onSelect: (kategori: string) => void;
}

export default function CategorySection({ selected, onSelect }: Props) {
  const [kategori, setKategori] = useState<Kategori[]>([]);

  useEffect(() => {
    fetch("/api/kategori-umkm")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setKategori(res.data);
        }
      });
  }, []);

  return (
    <section className="py-12 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">

          <button
            className={`px-6 py-3 rounded-full whitespace-nowrap ${selected === "Semua" ? "bg-green-700 text-white" : "border hover:bg-green-700 hover:text-white"}`}
            onClick={() => onSelect("Semua")}
          >
            Semua
          </button>

          {kategori.map((item) => (
            <button
              key={item.id_kategori}
              className={`px-6 py-3 rounded-full border whitespace-nowrap ${selected === item.nama_kategori ? "bg-green-700 text-white" : "hover:bg-green-700 hover:text-white"}`}
              onClick={() => onSelect(item.nama_kategori)}
            >
              {item.icon} {item.nama_kategori}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}