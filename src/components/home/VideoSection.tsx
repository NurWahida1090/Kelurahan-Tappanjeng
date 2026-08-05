"use client";

import { useEffect, useState } from "react";

interface Profil {
  video_profil: string;
}

export default function VideoSection() {
  const [video, setVideo] = useState("");

  useEffect(() => {
    fetch("/api/profil")
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setVideo(res.data.video_profil);
        }
      });
  }, []);

  const getYoutubeEmbed = (url: string) => {
    if (!url) return "";

    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/;

    const match = url.match(regExp);

    if (!match) return "";

    return `https://www.youtube.com/embed/${match[1]}`;
  };

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-green-700 font-semibold uppercase">
            Multimedia
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            Kenali Kelurahan Tappanjeng
          </h2>

        </div>

        {video ? (

          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              src={getYoutubeEmbed(video)}
              title="Video Profil"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>

        ) : (

          <div className="aspect-video rounded-3xl bg-gray-200 flex items-center justify-center">

            <p className="text-gray-500">
              Video belum tersedia
            </p>

          </div>

        )}

      </div>

    </section>
  );
}