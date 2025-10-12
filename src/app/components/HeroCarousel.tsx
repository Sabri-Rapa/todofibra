"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroCarousel() {
  const photos = [
    { img: "/assets/portada/portada01.jpg" },
    { img: "/assets/portada/portada02.jpg" },
    { img: "/assets/portada/portada03.jpg" },
    { img: "/assets/portada/portada04.jpg" },
    { img: "/assets/portada/portada05.jpg" },
    { img: "/assets/portada/portada06.jpg" },
    { img: "/assets/portada/portada07.jpg" },
    { img: "/assets/portada/portada08.jpg" },
    { img: "/assets/portada/portada09.jpg" },
    { img: "/assets/portada/portada10.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {photos.map((photo, index) => (
        <Image
          key={index}
          src={photo.img}
          alt={`Portada ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
