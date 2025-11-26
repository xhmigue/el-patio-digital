import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
      navigate(`/#${sectionId}`);
    } else {
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect shadow-glass"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={pubBells}
              alt="Pub Bell's Logo"
              className="rounded-lg shadow-2xl w-[80px] h-[80px] object-cover ring-2 ring-primary/20"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                {navigations.map((nav, index) => (
                  <motion.button
                    key={nav.sectionId}
                    onClick={() => scrollToSection(nav.sectionId)}
                    className="relative text-foreground font-medium group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {nav.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                ))}
              </>
            ) : (
              <>
                {navigations.map((nav, index) => (
                  <Link to={`/#${nav.sectionId}`} key={nav.sectionId}>
                    <motion.button
                      onClick={() => scrollToSection(nav.sectionId)}
                      className="relative text-foreground font-medium group"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {nav.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </motion.button>
                  </Link>
                ))}
              </>
            )}
            <Link to="/carta">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="default"
                  className="glass-effect bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-glow hover:shadow-neon transition-all duration-300"
                >
                  Ver Carta
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 space-y-4 glass-card rounded-lg p-4"
            >
              {isHomePage ? (
                <>
                  {navigations.map((nav) => (
                    <motion.div
                      key={nav.sectionId}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to={`/#${nav.sectionId}`} onClick={() => setIsMobileMenuOpen(false)}>
                        <button
                          onClick={() => scrollToSection(nav.sectionId)}
                          className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                        >
                          {nav.name}
                        </button>
                      </Link>
                    </motion.div>
                  ))}
                </>
              ) : (
                <>
                  {navigations.map((nav) => (
                    <motion.div
                      key={nav.sectionId}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to={`/#${nav.sectionId}`} onClick={() => setIsMobileMenuOpen(false)}>
                        <button
                          onClick={() => scrollToSection(nav.sectionId)}
                          className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                        >
                          {nav.name}
                        </button>
                      </Link>
                    </motion.div>
                  ))}
                </>
              )}
              <Link to="/carta" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="default"
                  className="w-full glass-effect bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-glow"
                >
                  Ver Carta
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
