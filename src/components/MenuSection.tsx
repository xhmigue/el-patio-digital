import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import GallerySection from "./GallerySection";
import { Link } from "react-router-dom";

const menuData = {
  entrantes: [
    {
      name: "Carpaccio de Ternera",
      price: "14€",
      description: "Con rúcula, parmesano y aceite de trufa",
    },
    {
      name: "Croquetas de Jamón Ibérico",
      price: "12€",
      description: "6 unidades de croquetas cremosas",
    },
    {
      name: "Tabla de Quesos",
      price: "16€",
      description: "Selección de quesos artesanales con mermelada",
    },
    {
      name: "Pulpo a la Gallega",
      price: "18€",
      description: "Con patatas, pimentón y aceite de oliva",
    },
  ],
  principales: [
    {
      name: "Solomillo de Ternera",
      price: "26€",
      description: "Con reducción de vino tinto y patatas confitadas",
    },
    {
      name: "Bacalao al Pil Pil",
      price: "22€",
      description: "Con ajo y guindilla en aceite de oliva",
    },
    {
      name: "Arroz Negro",
      price: "20€",
      description: "Con sepia y alioli de ajo negro",
    },
    {
      name: "Risotto de Setas",
      price: "18€",
      description: "Con trufa y parmesano",
    },
  ],
  postres: [
    {
      name: "Tarta de Queso",
      price: "7€",
      description: "Con coulis de frutos rojos",
    },
    {
      name: "Coulant de Chocolate",
      price: "8€",
      description: "Con helado de vainilla",
    },
    {
      name: "Tiramisú",
      price: "7€",
      description: "Receta tradicional italiana",
    },
    {
      name: "Crema Catalana",
      price: "6€",
      description: "Caramelizada al momento",
    },
  ],
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Nuestra Carta
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Una experiencia culinaria diseñada para deleitar todos tus sentidos
          </p>
          <Link to="/carta">
            <Button
              variant="default"
              className="w-100 bg-primary text-primary-foreground"
            >
              Ver Carta
            </Button>
          </Link>
        </div>
        <GallerySection />
      </div>
    </section>
  );
};

export default MenuSection;
