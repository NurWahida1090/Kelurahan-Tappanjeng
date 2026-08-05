"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <nav className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12"
            />

            <span className="font-bold text-green-700 text-lg md:text-xl">
              Kelurahan Tappanjeng
            </span>

          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">

            <Link href="/">Home</Link>

            <Link href="/profil">Profil</Link>

            <Link href="/umkm">UMKM</Link>

            <Link href="/berita">Berita</Link>

            <Link href="/persuratan">Persuratan</Link>

            <Link href="/pengajuan">Layanan Aduan</Link>

          </div>

          {/* Desktop Login */}
          <div className="hidden lg:block">

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-green-700"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>

        </nav>

      </div>

      {/* Mobile Menu */}
      {open && (

        <div className="lg:hidden bg-white border-t shadow-lg text-gray-700 font-medium">

          <div className="flex flex-col px-6 py-5 gap-5">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/profil" onClick={() => setOpen(false)}>
              Profil
            </Link>

            <Link href="/umkm" onClick={() => setOpen(false)}>
              UMKM
            </Link>

            <Link href="/berita" onClick={() => setOpen(false)}>
              Berita
            </Link>

            <Link href="/pengajuan" onClick={() => setOpen(false)}>
              Pengajuan
            </Link>

            <Link href="/persuratan" onClick={() => setOpen(false)}>
              Persuratan
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}