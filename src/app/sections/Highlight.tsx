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
        <h2 className="text-4xl font-extrabold mb-4">10 años de garantía</h2>
        <p className="text-lg font-medium text-balance">
          Porque sabemos la calidad de lo que hacemos, ofrecemos una garantía de
          10 años en todos nuestros productos y trabajos especiales. Nuestra
          experiencia y compromiso nos permiten brindarte soluciones duraderas y
          seguras.
        </p>
      </div>
    </section>
  );
}
