import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DishesGallery from "@/components/DishesGallery";
import GallerySection from "@/components/GallerySection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DishesGallery />
      <GallerySection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
