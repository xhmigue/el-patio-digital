import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import pubBells from "@/assets/pub_bells.png";

const navigations = [
  { name: "Inicio", sectionId: "inicio" },
  { name: "Quiénes Somos", sectionId: "nosotros" },
  { name: "Reseñas", sectionId: "resenas" },
  { name: "Contacto", sectionId: "contacto" },
];

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

  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);

    if (window.location.pathname !== "/") {
      // Si NO estás en "/", navega primero
      navigate(`/#${sectionId}`);
    } else {
      // Si ya estás en "/", solo hace scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm shadow-lg`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={pubBells}
              alt="Interior del restaurante"
              className="rounded-lg shadow-2xl w-[80px] h-[80px] object-cover"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                {navigations.map((nav) => (
                  <button
                    key={nav.sectionId}
                    onClick={() => scrollToSection(nav.sectionId)}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {nav.name}
                  </button>
                ))}
              </>
            ) : (
              <>
                {navigations.map((nav) => (
                  <Link to={`/#${nav.sectionId}`} key={nav.sectionId}>
                    <button
                      key={nav.sectionId}
                      onClick={() => scrollToSection(nav.sectionId)}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {nav.name}
                    </button>
                  </Link>
                ))}
              </>
            )}
            <Link to="/carta">
              <Button
                variant="default"
                className="bg-primary text-primary-foreground hover:opacity-90"
              >
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
                <Link to="/#inicio" onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    Inicio
                  </button>
                </Link>

                <Link
                  to="/#nosotros"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button
                    onClick={() => scrollToSection("nosotros")}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    Quiénes Somos
                  </button>
                </Link>

                <Link to="/#resenas" onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    onClick={() => scrollToSection("resenas")}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    Reseñas
                  </button>
                </Link>
                <Link
                  to="/#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    Contacto
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/#inicio" onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    Inicio
                  </button>
                </Link>

                <Link
                  to="/#nosotros"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button
                    onClick={() => scrollToSection("nosotros")}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    Quiénes Somos
                  </button>
                </Link>

                <Link to="/#resenas" onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    onClick={() => scrollToSection("resenas")}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    Reseñas
                  </button>
                </Link>
                <Link
                  to="/#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    Contacto
                  </button>
                </Link>
              </>
            )}
            <Link to="/carta" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="default"
                className="w-full bg-primary text-primary-foreground"
              >
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
