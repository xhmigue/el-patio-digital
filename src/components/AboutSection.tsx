import { motion } from "framer-motion";
import { Clock, Flag, Heart } from "lucide-react";
import restaurantInterior from "@/assets/legado.jpeg";

const milestones = [
  {
    icon: Clock,
    number: "46",
    text: "Años de historia",
  },
  {
    icon: Flag,
    number: "1979",
    text: "Desde 1979",
  },
  {
    icon: Heart,
    number: "100%",
    text: "Alma familiar",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="relative py-20 overflow-hidden">
      {/* Dark background with particle pattern */}
      <div className="absolute inset-0 bg-[#0a0809]">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(224, 33, 61, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%' 
            }}
            animate={{
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
              ],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <motion.p 
                className="text-sm font-semibold text-primary tracking-wider uppercase mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Esta es nuestra historia
              </motion.p>
              <motion.h2 
                className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Un legado familiar
              </motion.h2>
              <motion.h3 
                className="text-2xl md:text-3xl font-serif text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                que comenzó en 1979
              </motion.h3>
            </div>
            
            <motion.div 
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
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
            </motion.div>

            {/* Horizontal Timeline with 3D animations */}
            <div className="relative pt-16 pb-8">
              {/* Connecting glowing line */}
              <motion.div 
                className="absolute top-24 left-[10%] right-[10%] h-0.5"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, hsl(355 83% 52% / 0.6) 20%, hsl(355 83% 52%) 50%, hsl(355 83% 52% / 0.6) 80%, transparent 100%)',
                  boxShadow: '0 0 20px hsl(355 83% 52% / 0.5), 0 0 40px hsl(355 83% 52% / 0.3)',
                  transformOrigin: 'left'
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex flex-col items-center text-center group"
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.2,
                        ease: "easeOut"
                      }}
                    >
                      {/* Icon with glow */}
                      <div className="relative mb-6">
                        <motion.div 
                          className="absolute inset-0 blur-2xl"
                          animate={{
                            opacity: [0.4, 0.7, 0.4],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{ background: 'hsl(355 83% 52% / 0.4)' }}
                        />
                        <motion.div 
                          className="relative w-20 h-20 rounded-full flex items-center justify-center glass-card border border-primary/30"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 360,
                          }}
                          transition={{ duration: 0.6 }}
                          style={{ 
                            boxShadow: '0 0 30px hsl(355 83% 52% / 0.4), inset 0 0 20px hsl(355 83% 52% / 0.1)'
                          }}
                        >
                          <Icon 
                            className="w-10 h-10 text-primary" 
                            strokeWidth={1.5}
                            style={{ filter: 'drop-shadow(0 0 8px hsl(355 83% 52% / 0.6))' }}
                          />
                        </motion.div>
                      </div>

                      {/* Number with neon glow and 3D effect */}
                      <motion.div 
                        className="relative mb-3"
                        whileHover={{ scale: 1.1 }}
                      >
                        <h3 
                          className="text-5xl font-bold font-sans text-primary relative z-10"
                          style={{ 
                            textShadow: '0 0 40px hsl(355 83% 52% / 0.8), 0 0 80px hsl(355 83% 52% / 0.4), 0 10px 20px rgba(0,0,0,0.5)',
                            letterSpacing: '-0.02em'
                          }}
                        >
                          {milestone.number}
                        </h3>
                      </motion.div>

                      {/* Description */}
                      <motion.p 
                        className="text-foreground font-semibold"
                        whileHover={{ y: -2 }}
                      >
                        {milestone.text}
                      </motion.p>

                      {/* Connection Point */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        className="absolute top-[80px] w-4 h-4 bg-primary rounded-full hidden md:block"
                        style={{
                          boxShadow: '0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)',
                        }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Image Column with 3D parallax */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: -2,
              }}
              transition={{ duration: 0.5 }}
              style={{ perspective: "1000px" }}
              className="relative glass-card p-2 rounded-2xl"
            >
              <img
                src={restaurantInterior}
                alt="Interior del restaurante mostrando nuestro legado familiar desde 1979"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-lg -z-10 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg -z-10 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
