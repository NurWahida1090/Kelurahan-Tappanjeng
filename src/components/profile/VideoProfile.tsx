"use client";

import { useEffect, useState } from "react";

interface Profil {
  video_profil: string;
}

function getYoutubeEmbed(url: string) {
  if (!url) return "";

  if (url.includes("youtu.be")) {
    return `https://www.youtube.com/embed/${url.split("youtu.be/")[1].split("?")[0]}`;
  }

  if (url.includes("watch?v=")) {
    return `https://www.youtube.com/embed/${url.split("watch?v=")[1].split("&")[0]}`;
  }

  if (url.includes("/shorts/")) {
    return `https://www.youtube.com/embed/${url.split("/shorts/")[1].split("?")[0]}`;
  }

  return url;
}

export default function VideoProfile() {
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

  return (
    <section className="py-5 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Video Profil Kelurahan
          </h2>

        </div>

        <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">

          <iframe
            src={getYoutubeEmbed(profil.video_profil)}
            className="w-full h-full"
            allowFullScreen
          />

        </div>

      </div>

    </section>
  );
}