import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-2">Pub Bell's</h3>
            <p className="text-sm text-muted-foreground">
              46 años de historia, familia y constancia
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Desde 1979, un bar con alma y tradición
            </p>
          </div>

          {/* Enlaces legales */}
          <div className="md:text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">Información Legal</h4>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/aviso-legal" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Aviso Legal
              </Link>
              <Link 
                to="/politica-privacidad" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link 
                to="/politica-cookies" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
              Política de Cookies
              </Link>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Síguenos</h4>
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://www.facebook.com/pubbells"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/pub_bells"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pub Bell's. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
