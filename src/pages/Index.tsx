import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DishesGallery from "@/components/DishesGallery";
import GallerySection from "@/components/GallerySection";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoterySection from "@/components/LoterySection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // Espera breve para asegurar que el DOM cargó
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DishesGallery />
      <MenuSection />
      <LoterySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
