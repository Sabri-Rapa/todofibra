import Image from "next/image";

export default function EnterpriseContent() {
  return (
    <section className="relative z-10 -mt-16 md:-mt-24 flex justify-center px-4 sm:px-8 md:px-16 pb-10">
      {/* Contenedor principal */}
      <div className="bg-white shadow-md rounded-3xl p-8 md:p-12 max-w-6xl w-full flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {/* Texto */}
        <div className="flex-1 text-gray-700 leading-relaxed text-justify">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Todo Fibra
          </h2>

          <p className="mb-4">
            Contamos con una trayectoria de más de{" "}
            <span className="font-semibold text-primary">45 años</span> en el
            mercado del <span className="font-semibold text-primary">PRFV</span>
            , donde nuestro principal mérito es el profundo conocimiento en la{" "}
            <span className="font-semibold text-primary">
              aplicación de composites en sus múltiples usos
            </span>
            . Sabemos que se trata de una materia prima tan esencial como el
            metal o la madera, superando en muchos casos sus propiedades en
            términos de{" "}
            <span className="font-semibold text-primary">
              resistencia, durabilidad y versatilidad
            </span>
            .
          </p>

          <p className="mb-4">
            A lo largo de estas décadas, hemos acompañado la evolución de la
            industria, incorporando{" "}
            <span className="font-semibold text-primary">
              nuevas tecnologías
            </span>{" "}
            y desarrollando soluciones adaptadas a las necesidades de cada
            cliente. Nuestro compromiso con la calidad y la innovación nos
            permite ofrecer productos confiables, eficientes y de alto
            rendimiento.
          </p>

          <p>
            Nuestra planta industrial se encuentra en{" "}
            <span className="font-semibold text-primary">
              General Rodriguez
            </span>
            , Provincia de Buenos Aires, sobre un predio de{" "}
            <span className="font-semibold text-primary">
              2.500 m<sup>2</sup>
            </span>
            , donde contamos con el{" "}
            <span className="font-semibold text-primary">equipamiento</span> y
            el{" "}
            <span className="font-semibold text-primary">
              personal especializado
            </span>{" "}
            necesario para garantizar excelencia en cada etapa del proceso
            productivo.
          </p>
        </div>

        {/* Imagen */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-sm h-[300px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/empresa-img.jpg"
              alt="Planta industrial Todo Fibra"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
