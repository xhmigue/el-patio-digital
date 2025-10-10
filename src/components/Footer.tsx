const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary">El Patio Gourmet</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Experiencia gastronómica de alta cocina
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} El Patio Gourmet. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Creado con pasión por la gastronomía
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
