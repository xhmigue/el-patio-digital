import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-primary">Pub Bell's</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("platos")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Platos
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Contacto
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("platos")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Platos
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Contacto
                </button>
              </>
            )}
            <Link to="/carta">
              <Button variant="default" className="bg-primary text-primary-foreground hover:opacity-90">
                Ver Carta
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("platos")}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Platos
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Contacto
                </button>
              </>
            ) : (
              <Link 
                to="/" 
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Volver al inicio
              </Link>
            )}
            <Link to="/carta" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="default" className="w-full bg-primary text-primary-foreground">
                Ver Carta
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
