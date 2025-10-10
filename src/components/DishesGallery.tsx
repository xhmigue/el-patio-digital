import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

const dishes = [
  {
    image: dish1,
    title: "Pulpo a la Parrilla",
    description: "Con pimentón de la Vera y aceite de oliva virgen extra",
  },
  {
    image: dish2,
    title: "Burrata Fresca",
    description: "Con tomates cherry confitados y albahaca",
  },
  {
    image: dish3,
    title: "Tartar de Ternera",
    description: "Con yema de huevo y microgreens",
  },
  {
    image: dish4,
    title: "Paella Mediterránea",
    description: "Con marisco fresco y azafrán",
  },
];

const DishesGallery = () => {
  return (
    <section id="platos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Nuestros Platos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada creación es una obra de arte culinaria, elaborada con ingredientes de la más alta
            calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {dish.title}
                  </h3>
                  <p className="text-sm text-foreground/80">{dish.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DishesGallery;
