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
    name: "Álvaro M.",
    date: "Octubre 2025",
    text: "Increíble ambiente y la comida espectacular. Los bodillos son los mejores que he probado. El personal muy atento y servicial.",
    googleLink: "https://www.google.com/maps/place/Pub+Bell's"
  },
  {
    name: "María G.",
    date: "Septiembre 2025",
    text: "Un sitio perfecto para ir con amigos. Las tapas son deliciosas y los precios muy razonables. Sin duda volveremos.",
    googleLink: "https://www.google.com/maps/place/Pub+Bell's"
  },
  {
    name: "Carlos R.",
    date: "Octubre 2025",
    text: "La mejor experiencia en un pub. Música en vivo fantástica y el servicio de 10. Las hamburguesas están increíbles.",
    googleLink: "https://www.google.com/maps/place/Pub+Bell's"
  },
  {
    name: "Laura S.",
    date: "Septiembre 2025",
    text: "Excelente lugar para cenar. La variedad de la carta es impresionante y todo está buenísimo. Muy recomendable.",
    googleLink: "https://www.google.com/maps/place/Pub+Bell's"
  },
  {
    name: "Javier P.",
    date: "Agosto 2025",
    text: "Un pub con mucho encanto. La terraza es genial y el ambiente muy acogedor. Las cervezas artesanales son de primera.",
    googleLink: "https://www.google.com/maps/place/Pub+Bell's"
  },
  {
    name: "Ana B.",
    date: "Octubre 2025",
    text: "Nos encantó la experiencia. La comida casera y de calidad. El personal súper amable. Repetiremos seguro.",
    googleLink: "https://www.google.com/maps/place/Pub+Bell's"
  },
  {
    name: "Roberto L.",
    date: "Septiembre 2025",
    text: "Sitio ideal para tomar unas tapas y unas cañas. Los fines de semana con música en vivo está genial. Muy buen rollo.",
    googleLink: "https://www.google.com/maps/place/Pub+Bell's"
  },
  {
    name: "Patricia F.",
    date: "Agosto 2025",
    text: "Un lugar que no decepciona. Buena comida, buen ambiente y precios justos. Los bodillos son espectaculares.",
    googleLink: "https://www.google.com/maps/place/Pub+Bell's"
  },
  {
    name: "Miguel D.",
    date: "Octubre 2025",
    text: "Excelente atención y comida de calidad. El local es muy acogedor y tiene un ambiente familiar. Totalmente recomendable.",
    googleLink: "https://www.google.com/maps/place/Pub+Bell's"
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

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

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
