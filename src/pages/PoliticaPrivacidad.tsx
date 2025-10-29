import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
const email = "['Pin tu email aqui']";
const movil = (
  <a href="tel:952422002" className="text-foreground underline">
    952 422 002
  </a>
);
const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
          Política de Privacidad de Pub Bell&apos;s (Web Informativa)
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El Responsable del Tratamiento de los datos recabados a través de
              esta web es:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Responsable Legal:</strong> Francisco Javier Guerrero
                Bedoya
              </li>
              <li>
                <strong>NIF:</strong> 74868384A
              </li>
              <li>
                <strong>Denominación Comercial:</strong> Pub Bell&apos;s
              </li>
              <li>
                <strong>Dirección (Legal/Notificaciones):</strong> C/ Juan
                Carlos I 73, Cártama-29570, Málaga
              </li>
              <li>
                <strong>Teléfono:</strong> {movil}
              </li>
              <li>
                <strong>Correo Electrónico:</strong> {email}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              2. Datos Tratados y Finalidad
            </h2>
            <p>
              Dado que esta web es únicamente informativa y muestra la carta del
              restaurante, el Responsable no recoge, almacena ni trata
              directamente datos personales de los usuarios a través de
              formularios, suscripciones o cualquier otra vía.
            </p>

            <p>
              <strong>Único Tratamiento de Datos:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Datos de Navegación (IP):</strong> El servidor donde
                está alojada la web puede registrar de forma temporal la
                dirección IP de los usuarios y otros datos técnicos (navegador,
                fecha y hora de acceso) para el mantenimiento de la seguridad y
                el correcto funcionamiento del servicio. Estos datos se eliminan
                automáticamente conforme a las políticas del proveedor de
                hosting.
              </li>
              <li>
                <strong>Finalidad:</strong> Garantizar la seguridad y el
                correcto funcionamiento de la página web.
              </li>
              <li>
                <strong>Legitimación:</strong> Interés legítimo del responsable
                (Artículo 6.1.f RGPD).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              3. Tratamiento de Datos por Llamada Telefónica
            </h2>
            <p>
              El número de teléfono mostrado en la web ({movil}) es una vía de
              contacto directo con el restaurante.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                El Responsable del Tratamiento no tiene acceso a los datos de la
                llamada (número de origen, hora) a menos que el usuario los
                facilite de forma voluntaria durante la conversación.
              </li>
              <li>
                Los datos personales que se faciliten durante la llamada
                telefónica para la gestión de un servicio (por ejemplo, una
                reserva de mesa) se tratarán únicamente con la finalidad de
                ejecutar ese servicio solicitado (Artículo 6.1.b RGPD).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              4. Destinatarios y Derechos
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Destinatarios:</strong> Los datos de navegación no se
                ceden a terceros, salvo obligación legal o a nuestro proveedor
                de hosting como Encargado del Tratamiento.
              </li>
              <li>
                <strong>Derechos del Usuario:</strong> Aunque el tratamiento de
                datos es mínimo, usted puede ejercer sus derechos de Acceso,
                Rectificación, Supresión, Limitación, Oposición y Portabilidad
                de los datos que, en su caso, hayan podido ser tratados por el
                Responsable, contactando con la dirección postal o correo
                electrónico indicados en el punto 1.
              </li>
              <li>
                Asimismo, le asiste el derecho a presentar una reclamación ante
                la Agencia Española de Protección de Datos (AEPD).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              5. Cookies
            </h2>
            <p>
              Este sitio web utiliza cookies técnicas estrictamente necesarias
              para la correcta visualización de la carta o para garantizar la
              seguridad de la navegación. Estas cookies son esenciales y no
              requieren consentimiento.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                No se utilizan cookies de terceros (como Google Analytics, redes
                sociales, etc.) para rastrear al usuario.
              </li>
              <li>
                Para más detalles sobre las cookies utilizadas, consulte la{" "}
                <Link to="/politica-cookies" className="text-foreground underline">
                  Política de Cookies
                </Link>
                .
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
