import Image from "next/image";
import info001 from "/public/icons/info001.png";
import info002 from "/public/icons/info002.png";
import info003 from "/public/icons/info003.png";
import info004 from "/public/icons/info004.png";
import info005 from "/public/icons/info005.png";


export default function Features() {
  const features = [
    { icon: info001, title: "Logística propia" },
    { icon: info002, title: "Servicio post-venta" },
    { icon: info003, title: "Garantía propia" },
    { icon: info004, title: "Trabajos personalizados" },
    { icon: info005, title: "Conciencia ecológica" },
  ];

  return (
    <section
      className="flex flex-col items-center text-center my-8 px-4"
      id="empresa"
    >
      <div className="container max-w-3xl">
        <p className="text-lg font-semibold mb-2 text-balance tracking-wide">
          Ofrecemos servicios especializados en{" "}
          <span className="text-primary">fabricación</span>,{" "}
          <span className="text-primary">reparación</span> y
          <span className="text-primary">mantención de piezas y equipos</span>{" "}
          en fibra de vidrio, garantizando{" "}
          <span className="text-primary">calidad</span> y {" "}
          <span className="text-primary">durabilidad</span> para tu empresa.
        </p>
      </div>

      <div className="container my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center px-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={60}
              height={6}
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
