"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Product = {
  slug: "encofrados" | "piletas" | "impermeabilizacion" | "tanques" | "varios";
  img: string;
  title: string;
};

const products: Product[] = [
  {
    slug: "encofrados",
    img: "/assets/products/encofrados.jpg",
    title: "Encofrados",
  },
  { slug: "piletas", img: "/assets/products/piletas.jpg", title: "Piletas" },
  {
    slug: "impermeabilizacion",
    img: "/assets/products/impermeabilizacion.jpg",
    title: "Impermeabilización",
  },
  { slug: "tanques", img: "/assets/products/tanques.jpg", title: "Tanques" },
  {
    slug: "varios",
    img: "/assets/products/varios.jpg",
    title: "Rubros Varios",
  },
];

export default function Products() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="py-0 bg-background sm:py-10 md:py-10 lg:py-10 "
      id="productos"
    >
      <h2 className="text-3xl font-extrabold text-center mb-6 text-primary pt-4">
        Nuestros Productos
      </h2>

      {/* Contenedor general */}
      <div className="w-full">
        <div
          className="
            flex flex-col md:flex-row
            w-full overflow-hidden
            transition-all duration-500
          "
          onMouseLeave={() => setHovered(null)}
        >
          {products.map((product, index) => (
            <Link
              key={index}
              href={`/productos/${product.slug}`}
              onMouseEnter={() => setHovered(index)}
              className={`
                relative overflow-hidden transition-all duration-500 ease-in-out 
                h-[150px] sm:h-[350px] md:h-[400px] lg:h-[450px] 
                ${
                  hovered === index
                    ? "md:flex-[2]" // efecto en desktop
                    : hovered === null
                    ? "md:flex-1"
                    : "md:flex-[0.8]"
                }
                flex-shrink-0 w-full md:w-auto
              `}
            >
              {/* Imagen */}
              <Image
                src={product.img}
                alt={product.title}
                fill
                className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
                  hovered === index ? "scale-[1.02]" : "scale-100"
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  hovered === index ? "bg-black/25" : "bg-black/50"
                }`}
              />

              {/* Texto */}
              <h3
                className="
                    absolute inset-0 flex items-center sm:md:lg:items-end justify-center
                    px-4 text-white text-xl font-semibold
                    tracking-wide drop-shadow-md text-center sm:md:lg:pb-6"
              >
                {product.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
