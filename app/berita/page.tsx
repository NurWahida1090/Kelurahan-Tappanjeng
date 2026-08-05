import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

import BeritaHero from "@/src/components/berita/BeritaHero";
import BeritaGrid from "@/src/components/berita/BeritaGrid";

export default function BeritaPage() {
  return (
    <>
      <Navbar />

      <BeritaHero />
      <BeritaGrid />

      <Footer />
    </>
  );
}