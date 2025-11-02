"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  title?: string;
  cols?: number;
};

export default function GalleryLightbox({
  images,
  title = "Galería",
  cols = 3,
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const close = useCallback(() => setOpen(false), []);

  const next = useCallback(
    () => setIndex((index + 1) % images.length),
    [index, images.length]
  );
  const prev = useCallback(
    () => setIndex((index - 1 + images.length) % images.length),
    [index, images.length]
  );

  // Teclado: ← → Esc
  // Teclado: ← → Esc
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next(); // usa la versión memorizada que no depende del `index` capturado
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };

    window.addEventListener("keydown", onKey);

    // Bloquear scroll del body cuando el modal está abierto
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, next, prev, close]);

  return (
    <>
      {/* Grid de miniaturas */}
      <div className="max-w-6xl mx-auto">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} gap-6`}
        >
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => openAt(i)}
              className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              aria-label={`Abrir imagen ${i + 1} de ${images.length}`}
            >
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Contenedor de imagen */}
          <div
            className="relative w-[92vw] md:w-[86vw] lg:w-[78vw] max-h-[90vh] aspect-video"
            onClick={(e) => e.stopPropagation()} // evita cerrar al clickear la imagen
          >
            <Image
              src={images[index]}
              alt={`${title} ${index + 1}`}
              fill
              className="object-contain"
              priority
            />

            {/* Cerrar */}
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-3 right-3 rounded-full bg-black/60 hover:bg-black/80 px-3 py-1 text-white text-sm cursor-pointer"
            >
              ✕
            </button>

            {/* Prev / Next */}
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
            >
              ›
            </button>

            {/* Indicador */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 rounded px-2 py-0.5">
              {index + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
