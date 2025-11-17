import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// Import dish images
import dish1 from "@/assets/dish-1.webp";
import dish2 from "@/assets/dish-2.webp";
import dish3 from "@/assets/dish-3.webp";
import dish4 from "@/assets/dish-4.webp";

// Import tapas images
import tapas1 from "@/assets/tapas/1.webp";
import tapas2 from "@/assets/tapas/2.webp";
import tapas3 from "@/assets/tapas/3.webp";
import tapas4 from "@/assets/tapas/4.webp";
import tapas5 from "@/assets/tapas/5.webp";
import tapas6 from "@/assets/tapas/6.webp";

// Import bodillos images
import bodillos1 from "@/assets/bodillos/1.webp";
import bodillos2 from "@/assets/bodillos/2.webp";
import bodillos3 from "@/assets/bodillos/3.webp";
import bodillos4 from "@/assets/bodillos/4.webp";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: "tapas-caseras-1",
    name: "Tapas Caseras Variadas",
    image: tapas1,
  },
  {
    id: "queso-curado",
    name: "Queso Curado",
    image: tapas2,
  },
  {
    id: "salchichon",
    name: "Salchichón",
    image: tapas3,
  },
  {
    id: "medias-raciones",
    name: "Medias Raciones",
    image: tapas4,
  },
  {
    id: "tapas-vitrina",
    name: "Tapas Caseras en Vitrina",
    image: tapas5,
  },
  {
    id: "gildas-especiales",
    name: "Gildas Especiales",
    image: tapas6,
  },
  {
    id: "mini-campero",
    name: "Mini Campero Bell's",
    image: bodillos1,
  },
  {
    id: "mixto",
    name: "Mixto",
    image: bodillos2,
  },
  {
    id: "plumi",
    name: "Plumi",
    image: bodillos3,
  },
  {
    id: "serranito",
    name: "Serranito",
    image: bodillos4,
  },
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<{
    image: string | null;
    name: string;
    id: string;
  } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleItemClick = (item: {
    image: string | null;
    name: string;
    id: string;
  }) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
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
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-primary mb-6">
          Un vistazo a nuestras deliciosas creaciones
        </h2>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-0.5rem)] lg:flex-[0_0_calc(33.333%-0.667rem)]"
                onClick={() => handleItemClick(item)}
              >
                <img
                  src={item.image}
                  alt={`Plato ${index + 1}`}
                  className="w-full h-full object-cover"
                />
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
        {galleryImages.map((_, index) => (
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
      {/* Modal */}
      <MenuModal
        item={selectedItem}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
};
interface MenuModalProps {
  item: { image: string | null; name: string; id: string } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MenuModal = ({ item, open, onOpenChange }: MenuModalProps) => {
  if (!item) return null;
  const { image, name } = item;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 text-white hover:text-primary transition-colors"
        >
          <X size={32} />
        </button>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground">
            {item.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {image && (
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src={image}
                alt={"Plato ampliado"}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GallerySection;
