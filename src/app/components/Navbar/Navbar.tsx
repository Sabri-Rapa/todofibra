"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const logohorizontal = "/assets/logo/logohorizontal.png";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-100 bg-light shadow-sm h-20 w-full">
      <nav className="w-full flex justify-center h-full">
        <div className="w-full max-w-[1300px] lg:max-w-[85%] flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="relative w-[150px] h-12">
            <Image
              src={logohorizontal}
              alt="Logo"
              width={150}
              height={50}
              priority
              unoptimized
              className="h-11 w-auto" 
            />
          </Link>

          {/* Menú hamburguesa - MobileMenu */}
          <button
            className="sm:hidden text-3xl text-primary"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Menú desktop */}
          <ul className="hidden sm:flex gap-x-8 text-sm font-medium">
            <NavbarLinks />
          </ul>
        </div>
      </nav>
      {/* Menú mobile con animación */}

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </header>
  );
}
