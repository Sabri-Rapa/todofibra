import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-light shadow-sm h-20 w-full">
      <nav className="w-full flex justify-center h-full">
        <div className="w-full max-w-[1300px] flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/logo/Logohorizontal.png"
            alt="Logo"
            width={150}
            height={50}
          />

          {/* Menú */}
          <ul className="flex gap-x-8 text-sm font-medium">
            <li>
              <Link href="#hero" className="hover:text-primary">
                INICIO
              </Link>
            </li>
            <li>
              <Link href="#empresa" className="hover:text-primary">
                EMPRESA
              </Link>
            </li>
            <li>
              <Link href="#productos" className="hover:text-primary">
                PRODUCTOS
              </Link>
            </li>
            <li>
              <Link href="#tecnologia" className="hover:text-primary">
                TECNOLOGÍA
              </Link>
            </li>
            <li>
              <Link href="#proyectos" className="hover:text-primary">
                PROYECTOS REALIZADOS
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="hover:text-primary">
                CONTACTOS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
