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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p className="text-muted-foreground">Avenida Principal, 14</p>
                  <p className="text-muted-foreground">29010 Málaga, España</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <p className="text-muted-foreground">+34 952 123 456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">contacto@elpatiogourmet.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Horario</p>
                  <p className="text-muted-foreground">Lunes a Viernes: 13:00 - 16:00, 20:00 - 23:30</p>
                  <p className="text-muted-foreground">Sábados y Domingos: 13:00 - 23:30</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Haz tu Reserva
            </h3>
            <p className="text-muted-foreground mb-6">
              ¿Listo para una experiencia gastronómica inolvidable? Reserva tu mesa ahora.
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-primary text-primary-foreground hover:opacity-90 text-lg py-6">
                Reservar Mesa
              </Button>
              <Button variant="outline" className="w-full border-primary text-foreground hover:bg-primary hover:text-primary-foreground text-lg py-6">
                Ver Carta Completa
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                ¿Interesado en trabajar con nosotros?
              </p>
              <Button variant="link" className="w-full text-primary mt-2">
                Envía tu CV
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
