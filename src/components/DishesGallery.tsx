import { motion } from "framer-motion";
import { useState } from "react";
import tapa1 from "@/assets/tapas/27.webp";
import bodillo3 from "@/assets/bodillos/3.webp";
import tapa15 from "@/assets/tapas/15.webp";
import bodillo10 from "@/assets/bodillos/10.webp";

const dishes = [
  {
    image: tapa1,
    title: "Plato de Tonterías",
    description: `Anchoa de Santoña 0'0. Cerdo, jamón serrano, pimiento rojo y alioli. Cerdo, queso curado, lechuga y alioli. Tropezón.`,
  },
  {
    image: bodillo10,
    title: "Kapsule Korp (NEW)",
    description: "Pan brioche, pulled pork casero con cebolla morada y alioli.",
  },
  {
    image: bodillo3,
    title: "Campero Bell's",
    description: "Pollo asado, carne mechada, queso, tomate, lechuga y alioli.",
  },
  {
    image: tapa15,
    title: "Americana",
    description: "Burger americana de ternera con queso cheddar, salsa americana y pepinillo.",
  },
];

const DishesGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="platos" className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-glow">
            Nuestros Platos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sumérgete en el sabor que nos define desde 1979. Cada creación en
            nuestra carta es una fusión de tradición y pasión culinaria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                perspective: "1000px",
              }}
            >
              <motion.div
                className="relative w-full h-80 glass-card overflow-hidden"
                animate={{
                  rotateY: hoveredIndex === index ? 10 : 0,
                  rotateX: hoveredIndex === index ? -5 : 0,
                  scale: hoveredIndex === index ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <motion.img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Glassmorphism Overlay */}
                <motion.div
                  className="absolute inset-0 glass-effect"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === index ? 0 : 20,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl font-serif font-bold text-foreground text-glow"
                      >
                        {dish.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === index ? 0 : 20,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-foreground/90 leading-relaxed"
                      >
                        {dish.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/0 rounded-2xl pointer-events-none"
                  animate={{
                    borderColor: hoveredIndex === index ? "hsl(var(--primary))" : "hsl(var(--primary) / 0)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Title Always Visible */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-lg"
                animate={{
                  opacity: hoveredIndex === index ? 0 : 1,
                  y: hoveredIndex === index ? 20 : 0,
                }}
              >
                <h3 className="text-lg font-serif font-bold text-foreground">
                  {dish.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DishesGallery;
