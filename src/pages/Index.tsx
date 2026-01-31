import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import GalleryPreview from "@/components/GalleryPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedSection />
        <GalleryPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
