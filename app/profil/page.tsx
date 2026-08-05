import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

import ProfileHero from "@/src/components/profile/ProfileHero";
import LurahSection from "@/src/components/profile/LurahSection";
import AboutSection from "@/src/components/profile/AboutSection";
import VisionMission from "@/src/components/profile/VisionMission";
import WilayahSection from "@/src/components/profile/WilayahSection";   
import OrganizationSection from "@/src/components/profile/OrganizationSection";
import VideoProfile from "@/src/components/profile/VideoProfile";
import MapProfile from "@/src/components/profile/MapProfile";

export default function ProfilPage() {
  return (
    <>
      <Navbar />

      <ProfileHero />
      <LurahSection />
      <WilayahSection />
      <AboutSection />
      <MapProfile />
      <VideoProfile />
      <VisionMission />
      <OrganizationSection />

      <Footer />
    </>
  );
}