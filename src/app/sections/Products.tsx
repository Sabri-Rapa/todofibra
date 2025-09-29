import Image from "next/image";
import Link from "next/link";

const products = [
  { img: "/images/products/product-1.jpeg", title: "Producto 1" },
  { img: "/images/products/product-2.jpeg", title: "Producto 2" },
  { img: "/images/products/product-3.jpeg", title: "Producto 3" },
];

export default function Products() {
  return (
    <section className="py-12 bg-background">
      <h2 className="text-2xl font-bold text-center mb-8 text-primary">
        NUESTROS PRODUCTOS
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-9/12">
        {products.map((product, index) => (
          <div key={index} className=" flex flex-col items-center">
            <Image
              src={product.img}
              alt={product.title}
              width={300}
              height={300}
              className="mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-primary">
              {product.title}
            </h3>
            <Link
              href="/contacto"
              className="inline-block bg-background text-primary border border-primary rounded transition filter px-3 py-1 mt-2 hover:bg-primary hover:text-white tracking-wider text-base font-semibold"
            >
              Más información
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
