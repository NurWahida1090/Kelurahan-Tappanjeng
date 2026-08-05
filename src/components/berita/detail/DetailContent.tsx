"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { driveImage } from "@/src/utils/driveImage";
import { Share2 } from "lucide-react";

interface Berita {
  id_berita: string;
  slug: string;
  judul: string;
  penulis: string;
  isi: string;
  gambar: string;
  tanggal: string;
}

export default function DetailContent({ slug }: { slug: string }) {
  const [berita, setBerita] = useState<Berita | null>(null);
  const [lainnya, setLainnya] = useState<Berita[]>([]);
  const handleShare = async () => {
  const shareData = {
    title: berita?.judul,
    text: berita?.judul,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link berita berhasil disalin.");
    }
  } catch (err) {
    console.log("Share dibatalkan");
  }
};

  useEffect(() => {
    fetch(`/api/berita?slug=${slug}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setBerita(res.data);
        }
      });

    fetch("/api/berita")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const data = res.data
            .filter((item: Berita) => item.slug !== slug)
            .sort(
              (a: Berita, b: Berita) =>
                new Date(b.tanggal).getTime() -
                new Date(a.tanggal).getTime()
            )
            .slice(0, 3);

          setLainnya(data);
        }
      });
  }, [slug]);

  if (!berita) return null;

  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-wrap items-center gap-6 text-gray-500">

            <span className="flex items-center gap-2">
              <span>📅</span>
              {new Date(berita.tanggal).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>

            <span className="flex items-center gap-2">
              <span>👤</span>
              {berita.penulis}
            </span>

          </div>

          <button
            onClick={handleShare}
            className="flex w-fit items-center gap-2 rounded-xl bg-green-700 px-1 py-1 font-normal text-white shadow-md transition hover:bg-green-800"
          >
            <Share2 size={10} />
            Bagikan
          </button>

        </div>
        <div className="bg-white rounded-2xl shadow p-8">

          <img
            src={driveImage(berita.gambar)}
            alt={berita.judul}
            className="w-full h-auto rounded-xl mb-8"
          />

          <div
            className="prose prose-lg max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: berita.isi }}
          />

        </div>

        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-8 text-gray-500">
            Berita Terbaru
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {lainnya.map((item) => (

              <Link
                key={item.id_berita}
                href={`/berita/${item.id_berita}`}
                className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-xl transition"
              >

                <img
                  src={driveImage(item.gambar)}
                  alt={item.judul}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">

                  <p className="text-sm text-gray-500">
                    {new Date(item.tanggal).toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric"
                    })}
                  </p>

                  <h3 className="font-bold text-lg mt-2 line-clamp-2 text-gray-800">
                    {item.judul}
                  </h3>

                  <p className="mt-4 text-green-700 font-semibold">
                    Baca Selengkapnya →
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}