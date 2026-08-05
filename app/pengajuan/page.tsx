import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

import PengajuanHero from "@/src/components/pengajuan/PengajuanHero";
import PengajuanForm from "@/src/components/pengajuan/PengajuanForm";
import InformasiPengajuan from "@/src/components/pengajuan/InformasiPengajuan";
import StatisticPengajuan from "@/src/components/pengajuan/StatisticPengajuan";

export default function PengajuanPage() {
  return (
    <>
      <Navbar />

      <PengajuanHero />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3">

          {/* Form */}
          <div className="lg:col-span-2">
            <PengajuanForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            <InformasiPengajuan />

            <StatisticPengajuan />

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}