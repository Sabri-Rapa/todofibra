import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="py-12 bg-light  text-center">
      <h2 className="text-2xl font-bold mb-2 text-primary">CONTACTANOS</h2>

      <div className="mt-2 px-4">
        <p className="text-sm text-black font-semibold">
          No dudes en escribirnos por cualquier consulta.
        </p>
        <div className="flex h-full">
          <ContactForm />
          <div className="w-1/2 flex items-center justify-center p-4">
            <div className="bg-primary h-5/6 w-5/6 rounded-3xl text-light p-6 flex flex-col justify-center text-center text-sm font-medium">
              <p>DATOS DE CONTACTO</p>
              <p>Teléfono: +54 9 11 1234 5678</p>
              <p>Email: contacto@ejemplo.com</p>
              <p>Dirección: Calle Falsa 123, Ciudad, País</p>
              <p>Horario de atención: Lunes a Viernes, 9:00 - 18:00</p>
              <p>Síguenos en nuestras redes sociales:</p>
              <p>Facebook | Twitter | Instagram | LinkedIn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52512.53152753852!2d-58.63609025487634!3d-34.65386395364481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7d93bab75a3%3A0xaafe140bc9dea3db!2sB1704%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1759103226840!5m2!1ses!2sar"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
