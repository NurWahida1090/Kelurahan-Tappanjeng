import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import DetailContent from "@/src/components/umkm/detail/DetailContent";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DetailUMKM({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <Navbar />

      <DetailContent slug={slug} />

      <Footer />
    </>
  );
}