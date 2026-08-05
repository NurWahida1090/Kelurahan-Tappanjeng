import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

import PersuratanHero from "@/src/components/persuratan/PersuratanHero";
import PersuratanContent from "@/src/components/persuratan/PersuratanContent";

export default function PersuratanPage() {
  return (
    <>
      <Navbar />

      <PersuratanHero />
      <PersuratanContent />

      <Footer />
    </>
  );
}