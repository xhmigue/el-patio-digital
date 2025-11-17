import { Clock, Flag, Heart } from "lucide-react";
import restaurantInterior from "@/assets/legado.jpeg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="relative py-20 overflow-hidden">
      {/* Dark background with particle pattern */}
      <div 
        className="absolute inset-0 bg-[#0a0809]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(355 83% 52% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(355 83% 52% / 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(355 83% 52% / 0.06) 0%, transparent 50%),
            radial-gradient(1px 1px at 20px 30px, hsl(0 0% 100% / 0.1) 1px, transparent 1px),
            radial-gradient(1px 1px at 60px 70px, hsl(0 0% 100% / 0.08) 1px, transparent 1px),
            radial-gradient(1px 1px at 50px 50px, hsl(0 0% 100% / 0.06) 1px, transparent 1px),
            radial-gradient(1px 1px at 130px 80px, hsl(0 0% 100% / 0.05) 1px, transparent 1px),
            radial-gradient(1px 1px at 90px 10px, hsl(0 0% 100% / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px, 180px 180px, 220px 220px, 150px 150px, 180px 180px, 200px 200px, 250px 250px, 170px 170px',
          backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px, 150px 200px, 200px 50px, 50px 150px, 120px 30px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="mb-12">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">
                Esta es nuestra historia
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Un legado familiar
              </h2>
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6">
                que comenzó en 1979
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                En 1979, con mucha ilusión y pocos medios, mi padre abrió un pequeño pub en un local 
                familiar. Nunca imaginó que aquel "boquete" se convertiría en el proyecto de toda su vida.
              </p>
              
              <p>
                Durante 46 años, trabajó sin descanso, superando altibajos y manteniendo siempre la 
                constancia que dio estabilidad a su familia. Hoy el relevo lo lleva su hijo, que sigue 
                haciendo crecer el legado.
              </p>
              
              <p>
                El nombre también guarda historia: mi abuela quería que se llamara La Campana, como el 
                bar de su hermana. Poco antes de inaugurar, una botella de whisky BELL'S inspiró la 
                solución perfecta: Campana, pero en inglés.
              </p>
              
              <p className="text-foreground font-semibold">
                Así nació Pub Bell's, un lugar con alma familiar, construido con esfuerzo, cariño y 
                mucha vida compartida.
              </p>
            </div>

            {/* Horizontal Timeline */}
            <div className="relative pt-16 pb-8">
              {/* Connecting glowing line */}
              <div 
                className="absolute top-24 left-[10%] right-[10%] h-0.5"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, hsl(355 83% 52% / 0.6) 20%, hsl(355 83% 52%) 50%, hsl(355 83% 52% / 0.6) 80%, transparent 100%)',
                  boxShadow: '0 0 20px hsl(355 83% 52% / 0.5), 0 0 40px hsl(355 83% 52% / 0.3)'
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Milestone 1: 46 Years */}
                <div className="flex flex-col items-center text-center group">
                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div 
                      className="absolute inset-0 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      style={{ background: 'hsl(355 83% 52% / 0.4)' }}
                    />
                    <div 
                      className="relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30"
                      style={{ 
                        boxShadow: '0 0 30px hsl(355 83% 52% / 0.4), inset 0 0 20px hsl(355 83% 52% / 0.1)'
                      }}
                    >
                      <Clock 
                        className="w-10 h-10 text-primary" 
                        strokeWidth={1.5}
                        style={{ filter: 'drop-shadow(0 0 8px hsl(355 83% 52% / 0.6))' }}
                      />
                    </div>
                  </div>

                  {/* Number with neon glow */}
                  <div className="relative mb-3">
                    <h3 
                      className="text-7xl font-bold font-sans text-primary relative z-10"
                      style={{ 
                        textShadow: '0 0 30px hsl(355 83% 52% / 0.8), 0 0 60px hsl(355 83% 52% / 0.4), 0 4px 6px rgba(0,0,0,0.3)',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      46
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base text-muted-foreground font-medium tracking-wide">
                    Años de historia
                  </p>
                </div>

                {/* Milestone 2: Since 1979 */}
                <div className="flex flex-col items-center text-center group">
                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div 
                      className="absolute inset-0 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      style={{ background: 'hsl(355 83% 52% / 0.4)' }}
                    />
                    <div 
                      className="relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30"
                      style={{ 
                        boxShadow: '0 0 30px hsl(355 83% 52% / 0.4), inset 0 0 20px hsl(355 83% 52% / 0.1)'
                      }}
                    >
                      <Flag 
                        className="w-10 h-10 text-primary" 
                        strokeWidth={1.5}
                        style={{ filter: 'drop-shadow(0 0 8px hsl(355 83% 52% / 0.6))' }}
                      />
                    </div>
                  </div>

                  {/* Number with neon glow */}
                  <div className="relative mb-3">
                    <h3 
                      className="text-7xl font-bold font-sans text-primary relative z-10"
                      style={{ 
                        textShadow: '0 0 30px hsl(355 83% 52% / 0.8), 0 0 60px hsl(355 83% 52% / 0.4), 0 4px 6px rgba(0,0,0,0.3)',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      1979
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base text-muted-foreground font-medium tracking-wide">
                    Desde 1979
                  </p>
                </div>

                {/* Milestone 3: 100% Family Soul */}
                <div className="flex flex-col items-center text-center group">
                  {/* Icon with glow */}
                  <div className="relative mb-6">
                    <div 
                      className="absolute inset-0 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      style={{ background: 'hsl(355 83% 52% / 0.4)' }}
                    />
                    <div 
                      className="relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30"
                      style={{ 
                        boxShadow: '0 0 30px hsl(355 83% 52% / 0.4), inset 0 0 20px hsl(355 83% 52% / 0.1)'
                      }}
                    >
                      <Heart 
                        className="w-10 h-10 text-primary" 
                        strokeWidth={1.5}
                        style={{ filter: 'drop-shadow(0 0 8px hsl(355 83% 52% / 0.6))' }}
                      />
                    </div>
                  </div>

                  {/* Number with neon glow */}
                  <div className="relative mb-3">
                    <h3 
                      className="text-7xl font-bold font-sans text-primary relative z-10"
                      style={{ 
                        textShadow: '0 0 30px hsl(355 83% 52% / 0.8), 0 0 60px hsl(355 83% 52% / 0.4), 0 4px 6px rgba(0,0,0,0.3)',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      100%
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base text-muted-foreground font-medium tracking-wide">
                    Alma familiar
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <img
              src={restaurantInterior}
              alt="Interior del restaurante mostrando nuestro legado familiar desde 1979"
              className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10 blur-xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg -z-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
