import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import GalleryLightbox from "../../components/GalleryLightbox";

const VALID_SLUGS = [
  "encofrados",
  "piletas",
  "impermeabilizacion",
  "tanques",
  "varios",
] as const;
type Slug = (typeof VALID_SLUGS)[number];

function titleFromSlug(slug: Slug) {
  switch (slug) {
    case "encofrados":
      return "Encofrados";
    case "piletas":
      return "Piletas";
    case "impermeabilizacion":
      return "Impermeabilización";
    case "tanques":
      return "Tanques";
    case "varios":
      return "Rubros Varios";
  }
}

function getImagesFor(slug: Slug) {
  const dir = path.join(process.cwd(), "public", "assets", "products", slug);
  if (!fs.existsSync(dir)) return [];
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(png|jpe?g|gif|webp)$/i.test(f))
    .sort();

  return files.map((f) => `/assets/products/${slug}/${f}`);
}

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export default async function ProductGalleryPage({
  params,
}: {
  params: Promise<{ slug: Slug }>;
}) {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) notFound();

  const images = getImagesFor(slug);
  const title = titleFromSlug(slug);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col ">
        <div className="flex items-center justify-center gap-4 w-full">
          <h1 className="text-3xl font-bold text-primary">{title}</h1>
        </div>
        <div className="w-full flex items-end justify-end ">
          <Link
            href="/#productos"
            className="text-primary px-4 py-1 hover:bg-primary hover:text-white"
          >
            ← Productos
          </Link>
        </div>
      </div>

      {images.length === 0 ? (
        <p className="mt-8 text-gray-600">
          Próximamente sumaremos imágenes de {title}.
        </p>
      ) : (
        <div className="mt-8">
          <GalleryLightbox images={images} title={title} cols={3} />
        </div>
      )}
    </section>
  );
}
