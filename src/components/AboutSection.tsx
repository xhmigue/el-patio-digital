import { Card } from "@/components/ui/card";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">
                Esta es nuestra historia
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Un legado familiar
              </h2>
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">
                que comenzó en 1979
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              En 1979, con mucha ilusión y pocos medios, mi padre abrió un pequeño pub en un local 
              familiar. Nunca imaginó que aquel "boquete" se convertiría en el proyecto de toda su vida.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Durante 46 años, trabajó sin descanso, superando altibajos y manteniendo siempre la 
              constancia que dio estabilidad a su familia. Hoy el relevo lo lleva su hijo, que sigue 
              haciendo crecer el legado.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              El nombre también guarda historia: mi abuela quería que se llamara La Campana, como el 
              bar de su hermana. Poco antes de inaugurar, una botella de whisky BELL'S inspiró la 
              solución perfecta: Campana, pero en inglés.
            </p>
            
            <p className="text-lg text-foreground font-semibold leading-relaxed">
              Así nació Pub Bell's, un lugar con alma familiar, construido con esfuerzo, cariño y 
              mucha vida compartida.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="p-6 text-center bg-secondary border-none">
                <p className="text-3xl font-bold text-primary">46</p>
                <p className="text-sm text-muted-foreground mt-2">Años de historia</p>
              </Card>
              <Card className="p-6 text-center bg-secondary border-none">
                <p className="text-sm text-muted-foreground">Desde</p>
                <p className="text-3xl font-bold text-primary mt-2">1979</p>
              </Card>
              <Card className="p-6 text-center bg-secondary border-none">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-2">Alma familiar</p>
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
