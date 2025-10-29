import { Card } from "@/components/ui/card";
import lotery from "@/assets/loteria.webp";

const LoterySection = () => {
  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-2">
                Loteria
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
               ¡Tapas de Suerte, Cañas de Fortuna!
              </h2>
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">
                 Brindamos por la Tapa, Soñamos con el Gordo
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Pub Bell's, sabemos que un buen plan se compone de dos cosas: buena comida y la ilusión de lo que está por venir.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
Ven a compartir unas risas, unas raciones para chuparse los dedos y esa chispa de esperanza que te da un décimo de lotería.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
¿Qué harías con ese premio? Quizás volver a pedir otra ronda de tapas, pero esta vez, ¡invitando a todo el bar! Haz que ese sueño comience aquí.
            </p>
      
            <p className="text-lg text-foreground font-semibold leading-relaxed">
Tu décimo de lotería te espera en la barra. ¡Que la magia empiece con una tapa!
            </p>
            
          </div>
          <div className="relative">
            <img
              src={lotery}
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

export default LoterySection;
