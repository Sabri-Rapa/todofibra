import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="py-12 bg-light  text-center" id="contact">
      <h2 className="text-2xl font-bold mb-2 text-primary">CONTACTANOS</h2>

      <div className="mt-2 px-4">
        <p className="text-sm text-black font-semibold">
          No dudes en escribirnos por cualquier consulta.
        </p>
        <div className="flex flex-col h-full md:flex-row">
          <ContactForm />
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <div className="bg-primary h-5/6 w-5/6 rounded-3xl text-light p-6 flex flex-col justify-center text-center text-sm font-medium">
              <div className="w-full flex flex-col items-center justify-center gap-4 text-center">
                <h3 className="text-xl font-bold uppercase tracking-wider">DATOS DE CONTACTO</h3>

                <div className="flex flex-col items-center gap-2">
                  <a
                    href="tel:+5491157409087"
                    className="flex items-center gap-3 text-sm hover:underline"
                    aria-label="Llamar"
                  >
                    <span className="inline-flex items-center justify-center bg-white/10 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.2a2 2 0 011.8 1.2l.6 1.4a2 2 0 01-.4 2L7.6 9.6a11 11 0 005.8 5.8l1.1-.9a2 2 0 012-.4l1.4.6A2 2 0 0121 18V20a2 2 0 01-2 2A19 19 0 013 5z" />
                      </svg>
                    </span>
                    <span>+54 9 11 5740 9087</span>
                  </a>

                  <Link
                    href="mailto:todofibra2003@yahoo.com"
                    className="flex items-center gap-3 text-sm hover:underline"
                    aria-label="Enviar email"
                  >
                    <span className="inline-flex items-center justify-center bg-white/10 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span>todofibra2003@yahoo.com</span>
                  </Link>

                  <p className="text-sm">Horario de atención: <span className="font-semibold">8:00 - 19:00</span></p>

                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 text-sm"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm6-3a1 1 0 11-1 1 1 1 0 011-1z" />
                    </svg>
                    <span>Seguinos en Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-8 w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52512.53152753852!2d-58.63609025487634!3d-34.65386395364481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7d93bab75a3%3A0xaafe140bc9dea3db!2sB1704%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1759103226840!5m2!1ses!2sar"
          className="w-full h-full"
          st</svg>yle={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
    </section>
  );
}
