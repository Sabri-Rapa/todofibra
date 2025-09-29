import Image from "next/image";
import Link from "next/link";

const products = [
  { img: "/assets/products/product-1.jpeg", title: "Producto 1" },
  { img: "/assets/products/product-2.jpeg", title: "Producto 2" },
  { img: "/assets/products/product-3.jpeg", title: "Producto 3" },
];

export default function Products() {
  return (
    <section className="py-12 bg-background md:bg-background">
      <h2 className="text-2xl font-bold text-center mb-8 text-primary">
        NUESTROS PRODUCTOS
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg transition"
          >
            <Image
              src={product.img}
              alt={product.title}
              width={300}
              height={300}
              className="mb-4 rounded-lg object-cover"
            />
            <h3 className="text-lg font-semibold text-primary mb-2">
              {product.title}
            </h3>
            <Link
              href="/contacto"
              className="inline-block bg-background text-primary border border-primary rounded px-4 py-2 text-sm md:text-base font-semibold transition hover:bg-primary hover:text-white"
            >
              Más información
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
