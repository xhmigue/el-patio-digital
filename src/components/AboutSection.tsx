import { Card } from "@/components/ui/card";
import restaurantInterior from "@/assets/legado.jpeg";

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
            
            <div className="relative pt-12 pb-4">
              {/* Fondo texturizado oscuro */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-stone-900/5 to-amber-800/10 rounded-2xl backdrop-blur-sm" 
                   style={{ 
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
                   }} 
              />
              
              {/* Línea conectora con gradiente */}
              <div className="absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 hidden md:block" />
              
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 px-4">
                {/* 46 Años - Forma irregular tipo sello */}
                <div className="flex flex-col items-center group">
                  <div className="relative">
                    {/* Forma irregular de fondo */}
                    <div className="absolute inset-0 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-500" />
                    <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-36 md:h-36">
                      <path
                        d="M100,20 C120,15 140,25 155,40 C170,55 175,75 170,95 C165,115 150,130 130,140 C110,150 85,150 65,140 C45,130 30,110 30,90 C30,70 40,50 60,35 C75,25 85,22 100,20 Z"
                        className="fill-primary/20 stroke-primary/40 stroke-2"
                        style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-5xl md:text-6xl font-bold text-primary font-serif transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        46
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-foreground font-semibold leading-relaxed">
                    Años de historia
                  </p>
                </div>

                {/* Desde 1979 - Estilo manuscrito/grabado */}
                <div className="flex flex-col items-center group">
                  <div className="relative p-6 md:p-8">
                    {/* Efecto pergamino */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/10 to-amber-100/5 rounded-lg border-2 border-primary/20 transform rotate-1 group-hover:rotate-0 transition-transform duration-500"
                         style={{ 
                           boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.1)',
                           backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(255,255,255,.05) 49%, rgba(255,255,255,.05) 51%, transparent 52%)`
                         }} 
                    />
                    <div className="relative flex flex-col items-center space-y-2">
                      <p className="text-lg text-foreground font-semibold leading-relaxed">
                        Desde
                      </p>
                      <p className="text-5xl md:text-6xl font-bold text-primary font-serif tracking-wider"
                         style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                        1979
                      </p>
                    </div>
                  </div>
                </div>

                {/* 100% Alma familiar - Árbol/ramas formando corazón */}
                <div className="flex flex-col items-center group">
                  <div className="relative">
                    <svg viewBox="0 0 200 200" className="w-32 h-32 md:w-36 md:h-36">
                      {/* Ramas formando corazón */}
                      <path
                        d="M100,170 C100,170 40,120 40,80 C40,60 55,45 75,45 C85,45 93,50 100,58 C107,50 115,45 125,45 C145,45 160,60 160,80 C160,120 100,170 100,170 Z"
                        className="fill-primary/10 stroke-primary/40 stroke-2 group-hover:fill-primary/20 transition-all duration-500"
                        style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))' }}
                      />
                      {/* Ramas del árbol dentro del corazón */}
                      <path
                        d="M100,80 L100,140 M100,95 L85,105 M100,95 L115,105 M100,110 L90,118 M100,110 L110,118"
                        className="stroke-primary/60 stroke-2 fill-none"
                        strokeLinecap="round"
                      />
                      {/* Hojas pequeñas */}
                      <circle cx="85" cy="105" r="3" className="fill-primary/40 group-hover:fill-primary/60 transition-all" />
                      <circle cx="115" cy="105" r="3" className="fill-primary/40 group-hover:fill-primary/60 transition-all" />
                      <circle cx="90" cy="118" r="3" className="fill-primary/40 group-hover:fill-primary/60 transition-all" />
                      <circle cx="110" cy="118" r="3" className="fill-primary/40 group-hover:fill-primary/60 transition-all" />
                    </svg>
                  </div>
                  <p className="text-lg text-foreground font-semibold leading-relaxed">
                    <span className="text-2xl md:text-3xl font-bold text-primary block mb-1">100%</span>
                    Alma familiar
                  </p>
                </div>
              </div>
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
