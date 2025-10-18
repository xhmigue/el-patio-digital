import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Visítanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nos importa tu opinión. Sin tu sonrisa esto no sabe igual.
          </p>
        </div>
<div className="max-w-6xl mx-auto space-y-8">
  {/* Fila 1: Información en 4 columnas */}
    <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
      Información de Contacto
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Dirección */}
      <div className="flex flex-col items-center text-center">
        <MapPin className="text-primary mb-2" size={28} />
        <p className="font-semibold text-foreground">Dirección</p>
        <p className="text-muted-foreground text-sm">Calle Juan Carlos I, 73,</p>
        <p className="text-muted-foreground text-sm">29570 Cártama, Málaga</p>
      </div>

      {/* Horario */}
      <div className="flex flex-col items-center text-center">
        <Clock className="text-primary mb-2" size={28} />
        <p className="font-semibold text-foreground">Horario</p>
        <p className="text-muted-foreground text-sm">
          <strong>Lunes a Viernes</strong>: 8:30 - 13:30, 19:00 - 00:00
        </p>
        <p className="text-muted-foreground text-sm"><strong>Sábado</strong>: 9:00 - 13:00, 19:00 - 00:00</p>
        <p className="text-muted-foreground text-sm"><strong>Domingo</strong>: Cerrado</p>
      </div>
      {/* Teléfono */}
      <div className="flex flex-col items-center text-center">
        <Phone className="text-primary mb-2" size={28} />
        <p className="font-semibold text-foreground">Teléfono</p>
        <p className="text-muted-foreground text-sm">952 422 002</p>
      </div>

    </div>

  {/* Fila 2: Mapa grande */}
  <Card className="p-0 bg-card border-border overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.517580876309!2d-4.6330624!3d36.7101289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72ef4640caa05f%3A0xec72a7efad3b96ab!2sPub%20Bells!5e0!3m2!1ses!2ses!4v1760805207106!5m2!1ses!2ses"
      className="w-full h-[450px] md:h-[600px] rounded-xl"
      loading="lazy"
      allowFullScreen
    ></iframe>
  </Card>
</div>

      </div>
    </section>
  );
};

export default ContactSection;
