import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChefHat, Heart } from "lucide-react";
import hero1 from "@/assets/slider0.webp";
import hero2 from "@/assets/slider3.webp";
import hero3 from "@/assets/slider2.webp";

const slides = [
  {
    image: hero1,
    title: "46 AÑOS DE HISTORIA",
    subtitle: "FAMILIA Y CONSTANCIA DESDE 1979",
    type: "button",
    action: "scroll",
    section: "nosotros",
    label: "NUESTRA HISTORIA",
    icon: Sparkles,
  },
  {
    image: hero2,
    title: "UN BAR CON ALMA",
    subtitle: "TRADICIÓN Y CARIÑO EN CADA DETALLE",
    type: "link",
    action: "/carta",
    label: "VER NUESTRA CARTA",
    section: '',
    icon: ChefHat,
  },
  {
    image: hero3,
    title: "ESFUERZO Y PASIÓN",
    subtitle: "EL LEGADO CONTINÚA",
    type: "button",
    action: "scroll",
    section: 'contacto',
    label: "CONTÁCTANOS",
    icon: Heart,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const current = slides[currentSlide];
  const Icon = current.icon;

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-primary/10 blur-3xl"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Image Slides with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={`Hero ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Content with 3D Transform */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            style={{
              transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
            }}
          >
            {/* Floating Icon */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="glass-card p-4 rounded-2xl shadow-premium"
              >
                <Icon className="w-16 h-16 text-primary" />
              </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -50, rotateX: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold text-foreground font-serif text-glow"
              >
                {current.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-3xl text-foreground/90 font-light"
              >
                {current.subtitle}
              </motion.p>
            </AnimatePresence>

            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {current.type === "button" ? (
                <motion.div
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={
                      current.action === "scroll"
                        ? () => scrollToSection(current.section)
                        : () => console.log("Otra acción")
                    }
                    className="glass-effect border-2 border-primary text-foreground bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-semibold shadow-premium hover:shadow-neon transition-all duration-300"
                  >
                    {current.label}
                  </Button>
                </motion.div>
              ) : (
                <Link to={current.action}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="glass-effect border-2 border-primary text-foreground bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-semibold shadow-premium hover:shadow-neon transition-all duration-300"
                    >
                      {current.label}
                    </Button>
                  </motion.div>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide 
                ? "bg-primary w-8 h-3 shadow-glow" 
                : "bg-foreground/50 w-3 h-3"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
