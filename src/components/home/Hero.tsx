"use client";

import { useEffect, useState } from "react";
import { driveImage } from "@/src/utils/driveImage";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface Slider {
  id_slider: string;
  judul: string;
  sub_judul: string;
  deskripsi: string;
  gambar: string;
}

export default function Hero() {
  const [slider, setSlider] = useState<Slider[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/api/slider")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setSlider(res.data);
        }
      });
  }, []);

  if (slider.length === 0) {
    return (
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          Memuat...
        </div>
      </section>
    );
  }

  const item = slider[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slider.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Website Resmi Kelurahan Tappanjeng
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6 text-green-900 leading-tight">
              {item.judul}
            </h1>

            <h2 className="text-xl text-yellow-600 font-semibold mt-4">
              {item.sub_judul}
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              {item.deskripsi}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="/profil"
                className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-7 py-3 rounded-xl font-semibold transition"
              >
                Profil Kelurahan
              </a>

              <a
                href="/umkm"
                className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-7 py-3 rounded-xl font-semibold transition"
              >
                Lihat UMKM
              </a>

            </div>

          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">

            <div className="aspect-[16/10] w-full">

              <img
                src={driveImage(item.gambar)}
                alt={item.judul}
                className="h-full w-full object-cover"
              />

            </div>

            {slider.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:bg-white"
                >
                  <ChevronLeft className="h-6 w-6 text-green-700" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:bg-white"
                >
                  <ChevronRight className="h-6 w-6 text-green-700" />
                </button>
              </>
            )}

          </div>
        </div>

        {slider.length > 1 && (

          <div className="flex justify-center mt-8 gap-3">

            {slider.map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-green-700"
                    : "bg-gray-300"
                }`}
              />

            ))}

          </div>

        )}

      </div>
    </section>
  );
}