import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // <-- si usas React Router
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "46 AÑOS DE HISTORIA",
    subtitle: "FAMILIA Y CONSTANCIA DESDE 1979",
    type: "button", // <-- tipo de acción
    action: "scroll", // scroll = hace scroll
    section: "nosotros",
    label: "NUESTRA HISTORIA",
  },
  {
    image: hero2,
    title: "UN BAR CON ALMA",
    subtitle: "TRADICIÓN Y CARIÑO EN CADA DETALLE",
    type: "link", // <-- tipo link
    action: "/carta", // ruta
    label: "VER NUESTRA CARTA",
    section: ''
  },
  {
    image: hero3,
    title: "ESFUERZO Y PASIÓN",
    subtitle: "EL LEGADO CONTINÚA",
    type: "button",
    action: "scroll",
    section: 'contacto',
    label: "CONTÁCTANOS",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const current = slides[currentSlide];

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        </div>
      ))}

      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground font-serif animate-fade-in">
              {current.title}
            </h1>
            <p className="text-xl md:text-3xl text-foreground/90 font-light">
              {current.subtitle}
            </p>

            <div className="pt-4">
              {/* Render dinámico según tipo */}
              {current.type === "button" ? (
                <Button
                  onClick={
                    current.action === "scroll"
                      ? () => scrollToSection(current.section)
                      : () => console.log("Otra acción")
                  }
                  variant="outline"
                  className="border-2 border-primary text-foreground bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-semibold"
                >
                  {current.label}
                </Button>
              ) : (
                <Link to={current.action}>
                  <Button
                    variant="outline"
                    className="border-2 border-primary text-foreground bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-semibold"
                  >
                    {current.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
