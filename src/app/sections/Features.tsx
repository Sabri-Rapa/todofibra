import Image from "next/image";

export default function Features() {
  const features = [
    { icon: "/assets/icons/info001.png", title: "Logística propia" },
    { icon: "/assets/icons/info002.png", title: "Servicio post-venta" },
    { icon: "/assets/icons/info003.png", title: "Garantía propia" },
    { icon: "/assets/icons/info004.png", title: "Trabajos personalizados" },
    { icon: "/assets/icons/info005.png", title: "Conciencia ecológica" },
  ];

  function FeatureItem({ icon, title }: { icon: string; title: string }) {
    return (
      <div className="flex flex-col items-center text-center">
        <Image
          src={icon}
          alt={title}
          width={70}
          height={70}
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px]"
        />
        <h3 className="text-xs sm:text-sm md:text-base font-semibold mt-2">
          {title}
        </h3>
      </div>
    );
  }

  return (
    <section
      className="flex flex-col items-center text-center my-8 px-4"
      id="empresa"
    >
      <div className="container max-w-3xl">
        <p className="text-sm font-semibold mb-2 text-balance tracking-wide md:text-lg lg:text-lg">
          Con más de <span className="text-primary">45 años</span> de
          experiencia en el mercado del PRFV, nos destacamos por nuestro{" "}
          <span className="text-primary">conocimiento técnico</span> y la{" "}
          <span className="text-primary">amplia experiencia</span> en la
          aplicación del material en sus diversos usos.
        </p>
      </div>

      {/* Mobile / tablet: 3 columnas, 2 filas con los de abajo centrados */}
      <div className="grid grid-cols-3 gap-8 justify-items-center md:hidden pt-10">
        {/* Fila 1: 3 primeros */}
        {features.slice(0, 3).map((f, i) => (
          <FeatureItem key={`top-${i}`} {...f} />
        ))}

        {/* Fila 2: ocupa las 3 columnas y centra los 2 últimos */}
        <div className="col-span-3 flex justify-center gap-8">
          {features.slice(3).map((f, i) => (
            <FeatureItem key={`bottom-${i}`} {...f} />
          ))}
        </div>
      </div>

      {/* Desktop: 5 en una sola fila */}
      <div className="hidden md:grid md:grid-cols-5 gap-16 justify-items-center pt-10">
        {features.map((f, i) => (
          <FeatureItem key={`desk-${i}`} {...f} />
        ))}
      </div>
    </section>
  );
}
