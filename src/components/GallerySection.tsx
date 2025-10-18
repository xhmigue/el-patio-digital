import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import dish images
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

// Import tapas images
import tapas1 from "@/assets/tapas/1.jpg";
import tapas2 from "@/assets/tapas/2.jpg";
import tapas3 from "@/assets/tapas/3.jpg";
import tapas4 from "@/assets/tapas/4.jpg";
import tapas5 from "@/assets/tapas/5.jpg";
import tapas6 from "@/assets/tapas/6.jpg";

// Import bodillos images
import bodillos1 from "@/assets/bodillos/1.jpg";
import bodillos2 from "@/assets/bodillos/2.jpg";
import bodillos3 from "@/assets/bodillos/3.jpg";
import bodillos4 from "@/assets/bodillos/4.jpg";

const galleryImages = [
  tapas1, tapas2, tapas3, tapas4, tapas5, tapas6,
  bodillos1, bodillos2, bodillos3, bodillos4
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  return (
    <>
          <div className="text-center mb-16">
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un vistazo a nuestras deliciosas creaciones
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`Plato ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Ver foto</span>
                </div>
              </div>
            ))}
          </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl bg-black/95 border-border p-0">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white hover:text-primary transition-colors"
          >
            <X size={32} />
          </button>

          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedImage]}
                alt={`Plato ${selectedImage + 1}`}
                className="w-full h-auto max-h-[85vh] object-contain"
              />

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight size={32} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GallerySection;
