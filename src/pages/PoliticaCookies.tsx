import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen bg-background mt-8">
      <Navigation />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
          Política de Cookies de Pub Bell&apos;s
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          
          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              1. ¿Qué son las Cookies?
            </h2>
            <p>
              Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. 
              Su principal función es que la web pueda recordar su visita y garantizar su correcto funcionamiento. 
              Las cookies suelen almacenar información de carácter técnico o de preferencias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              2. Cookies utilizadas en este sitio web
            </h2>
            <p>
              Dado que el sitio web de Pub Bell&apos;s es una página estática cuyo único objetivo es mostrar la carta del restaurante y el teléfono de contacto, 
              este sitio web tiene un uso mínimo de cookies.
            </p>
            <p>Las únicas cookies que pueden estar presentes son las siguientes:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies Técnicas o Estrictamente Necesarias:</strong> Son aquellas que permiten la navegación a través de la página web 
                y la utilización de las diferentes opciones o servicios que en ella existan.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Finalidad:</strong> Garantizar la correcta visualización del contenido y la seguridad de la navegación (por ejemplo, cookies de sesión o las generadas por el entorno de React o el servidor de alojamiento).</li>
                  <li><strong>Exigencia legal:</strong> Estas cookies son esenciales para el funcionamiento básico del sitio y están exentas de la obligación de obtener consentimiento previo (Artículo 22.2 de la Ley 34/2002, LSSI-CE).</li>
                  <li><strong>Datos que recogen:</strong> Generalmente, datos técnicos anónimos.</li>
                </ul>
              </li>
            </ul>

            <p className="mt-4">
              Este sitio web <strong>NO utiliza</strong>, por lo tanto, no se requiere consentimiento para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cookies Analíticas (para medir el tráfico).</li>
              <li>Cookies Publicitarias o de Perfilado (para mostrar anuncios).</li>
              <li>Cookies de Terceros (como Google Analytics, o botones de redes sociales).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
              3. Gestión y Desactivación de Cookies
            </h2>
            <p>
              Dado que solo se utilizan cookies técnicas y esenciales, la desactivación de estas podría impedir la correcta visualización del sitio web 
              o el uso de algunas de sus funciones.
            </p>
            <p>
              No obstante, usted puede eliminar o bloquear las cookies en general mediante la configuración de las opciones de su navegador. 
              A continuación, le ofrecemos enlaces para gestionar las cookies en los navegadores más comunes:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;
