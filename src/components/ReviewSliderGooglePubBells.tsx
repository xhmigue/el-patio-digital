import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Review {
  name: string;
  date: string;
  text: string;
  googleLink: string;
}

const reviewsData: Review[] = [
  {
    name: "Francisco Javier",
    date: "Hace un mes",
    text: "Buenas me hacen una tortilla a la francesa y al lado una rodajas de tomate y un café súper bueno más que bueno para mi un 10 se queda corto.",
    googleLink: "https://share.google/eVyJWJyONsIQGbkBY"
  },
  {
    name: "Noemí",
    date: "Hace una semana",
    text: `Todo está buenísimo, son rápidos en atender y los Camareros son muy amables.
Ay muy buen ambiente, y tienen terraza. En el mismo bar se puede echar la primitiva ,es administración.`,
    googleLink: "https://share.google/vz1bXXKobMBrHp0Ra"
  },
  {
    name: "Pepe",
    date: "Hace un año",
    text: `No es solo un bar, es un lugar
Que a las personas de fuera del pueblo nos facilita recoger los pedidos online, además del servicio que como administración y bar hace, y lo hace bien, yo suelo tomar algo o meter algo a la loteria cosa q no suelo hacer, pero creo q ayudo a que siga dando ese servicio, gracias.`,
    googleLink: "https://share.google/1TS0zziKVettwn7KF"
  },
  {
    name: "Andrea",
    date: "Hace un año",
    text: `Voy muy a menudo y seguiría sin dudarlo, a todas las horas es maravilloso: desayuno, cena, tardeo…`,
    googleLink: "https://share.google/s907X644IUR2QbTwe"
  },
  {
    name: "Lorena",
    date: "Hace 2 años",
    text: `Desayunos buenísimos y si vas de noche tienen unas tapas exquisitas,camarer@s muy simpaticos 100% recomendable`,
    googleLink: "https://share.google/eWvYNGLrOYLTLn6QN"
  },
  {
    name: "Lope",
    date: "Hace 1 año",
    text: `Hace tiempo que no voy pero en Cartama el mejor sitio para tomar algo.`,
    googleLink: "https://share.google/FksGtSIsmxPBXvqwZ"
  },
  {
    name: "José",
    date: "Hace 2 años",
    text: "Un bar familiar en centro del pueblo con buena atencion y variedad de servicios( loterias y apuestas, retirada paquetes,...)",
    googleLink: "https://share.google/KBnCJfyuEDNte9hLb"
  },
  {
    name: "Cintia B.",
    date: "Hace 3 años",
    text: "Variedad de tapas a muy buenos precios. Buen servicio. Aunque no me hayan regalado la camiseta del pub, le doy 5 estrellas",
    googleLink: "https://share.google/vuDhsktfhbUrEC7Ri"
  },
  {
    name: "Joaquin",
    date: "Hace 5 años",
    text: "Gran lugar para ver los partidos de fútbol, en especial los de F.C. Barcelona.",
    googleLink: "https://share.google/RmWCUsrjvAWc8TbNs"
  }
];

const ReviewSliderGooglePubBells = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-scroll every 2 seconds
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => clearInterval(autoplay);
  }, [emblaApi, isPaused]);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestras Valoraciones Dicen Más
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre lo que nuestros clientes opinan sobre nosotros
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {reviewsData.map((review, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-0.5rem)] lg:flex-[0_0_calc(33.333%-0.667rem)]"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-sm text-foreground mb-4 flex-grow line-clamp-4">
                        "{review.text}"
                      </p>

                      {/* Reviewer Info */}
                      <div className="mb-4">
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>

                      {/* Google Link */}
                      <a
                        href={review.googleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        Ver Reseña Completa en Google
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hidden md:flex rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden md:flex rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSliderGooglePubBells;
