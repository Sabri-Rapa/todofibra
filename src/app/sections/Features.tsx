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
        <Image src={icon} alt={title} width={60} height={60} />
        <h3 className="text-sm font-semibold mt-2">{title}</h3>
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
          Ofrecemos servicios especializados en{" "}
          <span className="text-primary">fabricación</span>,{" "}
          <span className="text-primary">reparación</span> y
          <span className="text-primary">mantención de piezas y equipos</span>{" "}
          en fibra de vidrio, garantizando{" "}
          <span className="text-primary">calidad</span> y{" "}
          <span className="text-primary">durabilidad</span> para tu empresa.
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
