import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
          Aviso Legal
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              1. Datos Identificativos
            </h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, el titular de este sitio web le informa de los siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Titular:</strong> Pub Bell's</li>
              <li><strong>Dirección:</strong> Av. de Málaga, 25, 29570 Cártama, Málaga</li>
              <li><strong>Teléfono:</strong> 952 422 002</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              2. Objeto
            </h2>
            <p>
              El presente aviso legal regula el uso del sitio web de Pub Bell's. La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              3. Propiedad Intelectual
            </h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, son propiedad de Pub Bell's y están protegidos por las leyes de propiedad intelectual e industrial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              4. Responsabilidad
            </h2>
            <p>
              Pub Bell's no se hace responsable de la información y contenidos almacenados en foros, redes sociales o cualesquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del prestador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              5. Legislación Aplicable
            </h2>
            <p>
              El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley española. Para la resolución de cualquier conflicto que pudiera surgir con ocasión de la visita al sitio web o del uso de los servicios que en él se puedan ofertar, el titular y el usuario acuerdan someterse a los Jueces y Tribunales de la ciudad de Málaga.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AvisoLegal;
