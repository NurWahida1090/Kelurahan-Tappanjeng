import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

import Hero from "@/src/components/home/Hero";
import About from "@/src/components/home/About";
import Statistic from "@/src/components/home/Statistic";
import UmkmSection from "@/src/components/home/UmkmSection";
import BeritaSection from "@/src/components/home/BeritaSection";
import VideoSection from "@/src/components/home/VideoSection";
import MapSection from "@/src/components/home/MapSection";
import CTASection from "@/src/components/home/CTASection";

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Statistic />
      <UmkmSection />
      <BeritaSection />
      <VideoSection />
      <MapSection />
      <CTASection />
      <Footer />
    </>
  );

}