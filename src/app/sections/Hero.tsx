import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center overflow-hidden w-full">
      {/* Imagen de fondo */}

      <Image
        src="/assets/portada.jpg"
        alt="Fondo Hero"
        width={1920}
        height={1080}
        priority
        className="object-cover h-full"
      />

      {/* Contenido */}
      <div className="absolute z-10 text-white px-4 sm:px-8 max-w-2xl lg:px-16">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg tracking-wide leading-snug">
          SOLUCIONES EN FIBRA DE
          <br />
          VIDRIO A TU MEDIDA
        </h1>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200 drop-shadow text-balance">
          Fabricación y mantención con la calidad que tu proyecto necesita.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 drop-shadow text-balance">
          Resistencia, innovación y confianza en cada pieza.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-primary text-white rounded transition filter px-2 py-1 sm:px-4 sm:py-2 mt-3 sm:mt-4 hover:brightness-90 tracking-wide text-xs sm:text-base"
        >
          CONTACTANOS
        </Link>
      </div>
    </section>
  );
}