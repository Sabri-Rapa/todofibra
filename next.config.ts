import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 👈 Esto reemplaza el antiguo "next export"
  images: {
    unoptimized: true, // 👈 Necesario si usás <Image> de Next
  },
};

export default nextConfig;
