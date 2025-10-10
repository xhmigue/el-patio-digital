import { Card } from "@/components/ui/card";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Unidos para construir
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-primary">
              Nuevos retos gastronómicos
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estamos liderados por un equipo multidisciplinar de apasionados por la buena comida.
              A nuestra larga experiencia en el mundo de la hostelería se unen nuevos miembros
              venidos del marketing y la ingeniería.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro compromiso es ofrecer ingredientes frescos, mucho espacio, mucha luz, y una
              pizca de sabor local que hace única cada experiencia.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6">
              <Card className="p-6 text-center bg-secondary border-none">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground mt-2">Años de experiencia</p>
              </Card>
              <Card className="p-6 text-center bg-secondary border-none">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground mt-2">Platos únicos</p>
              </Card>
              <Card className="p-6 text-center bg-secondary border-none">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-2">Pasión</p>
              </Card>
            </div>
          </div>
          <div className="relative">
            <img
              src={restaurantInterior}
              alt="Interior del restaurante"
              className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
