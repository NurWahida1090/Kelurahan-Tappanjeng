import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

import UmkmHero from "@/src/components/umkm/UmkmHero";
import UmkmGrid from "@/src/components/umkm/UmkmGrid";

export default function UmkmPage() {
  return (
    <>
      <Navbar />

      <UmkmHero />

      <UmkmGrid />

      <Footer />
    </>
  );
}