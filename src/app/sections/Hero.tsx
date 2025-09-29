import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[400px] flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/images/portada.jpg"
        alt="Fondo Hero"
        width={1920}
        height={1080}
        priority
        className="object-cover"
      />

      {/* Contenido */}
      <div className="container absolute z-10 text-white ml-16">
        <h1 className="text-4xl font-bold drop-shadow-lg tracking-wide">
          SOLUCIONES EN FIBRA DE
          <br />
          VIDRIO A TU MEDIDA
        </h1>
        <p className="mt-4 text-lg text-gray-200 drop-shadow">
          Fabricación y mantención con la calidad que tu proyecto necesita.
        </p>
        <p className="text-lg text-gray-200 drop-shadow">
          Resistencia, innovación y confianza en cada pieza.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-primary text-white rounded transition filter px-4 py-2 mt-4 hover:brightness-90 tracking-wider"
        >
          CONTACTANOS
        </Link>
      </div>
    </section>
  );
}