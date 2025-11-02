import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pesos que quieras usar
  variable: "--font-open-sans",         // para usarlo como CSS variable
});

export const metadata: Metadata = {
  title: "Todo Fibra",
  description: "Soluciones en fibra de vidrio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body
        className={`${openSans.className} antialiased`}
      >
          <Navbar />
      
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
