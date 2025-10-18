import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              1. Responsable del Tratamiento
            </h2>
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales (RGPD), le informamos de los siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Responsable:</strong> Pub Bell's</li>
              <li><strong>Dirección:</strong> Av. de Málaga, 25, 29570 Cártama, Málaga</li>
              <li><strong>Teléfono:</strong> 952 422 002</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              2. Finalidad del Tratamiento
            </h2>
            <p>
              Los datos personales que nos proporcione serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar las reservas y pedidos realizados a través de nuestra web o teléfono</li>
              <li>Responder a las consultas y solicitudes de información</li>
              <li>Enviar comunicaciones comerciales, si ha otorgado su consentimiento</li>
              <li>Mejorar la calidad de nuestros servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              3. Legitimación
            </h2>
            <p>
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>El consentimiento del interesado</li>
              <li>La ejecución de un contrato en el que el interesado es parte</li>
              <li>El interés legítimo del responsable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              4. Destinatarios
            </h2>
            <p>
              Sus datos no serán cedidos a terceros, salvo obligación legal. No se realizan transferencias internacionales de datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              5. Derechos del Usuario
            </h2>
            <p>
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Solicitar la limitación del tratamiento de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, puede contactarnos en Av. de Málaga, 25, 29570 Cártama, Málaga, o llamando al 952 422 002.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              6. Conservación de Datos
            </h2>
            <p>
              Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              7. Cookies
            </h2>
            <p>
              Este sitio web utiliza cookies técnicas necesarias para su correcto funcionamiento. Al navegar por el sitio web, usted acepta el uso de estas cookies.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
