import Image from "next/image";

export default function HeroEnterprise() {
  return (
    <section className="relative h-[200px] sm:h-[250px] md:h-[300x] lg:h-[350px] flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <Image
        src="/assets/portada/portada02.jpg"
        alt="Fondo empresa"
        fill
        className="object-cover brightness-75"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Contenido */}
      <div className="relative text-center text-white px-4  pb-14">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 drop-shadow-lg">
          ¿Quiénes somos?
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 drop-shadow">
          Descubrí quiénes somos y cómo trabajamos para ofrecer soluciones de
          calidad.
        </p>
      </div>
    </section>
  );
}
