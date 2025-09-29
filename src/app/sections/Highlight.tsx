import Image from "next/image";

export default function Highlight() {
  return (
    <section className="relative bg-primary text-center overflow-hidden h-80">

      <div className="absolute inset-0 flex justify-center items-start w-full h-full top-5">
        <Image
          src="/assets/logo/tf_multiply.png"
          alt="TF Logo top-0 left-1/2"
          width={1000}
          height={1000}
          className=""
        />
      </div>
      {/* Contenido */}
      <div className="relative z-10 container mx-auto max-w-3xl text-white flex flex-col items-center justify-center h-full py-16 px-4">
        <h2 className="text-4xl font-extrabold mb-4">Título en grande</h2>
        <p className="text-lg font-medium text-balance">
          Ofrecemos servicios especializados en fabricación, reparación y
          mantención de piezas y equipos en fibra de vidrio, garantizando
          calidad y durabilidad para tu empresa.
        </p>
      </div>
    </section>
  );
}
