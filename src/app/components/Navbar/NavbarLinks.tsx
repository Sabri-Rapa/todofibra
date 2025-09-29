import Link from "next/link";

interface NavbarLinksProps {
  onClick?: () => void;
}

const links = [
  { href: "#hero", label: "INICIO" },
  { href: "#empresa", label: "EMPRESA" },
  { href: "#productos", label: "PRODUCTOS" },
  { href: "#tecnologia", label: "TECNOLOGÍA" },
  { href: "#proyectos", label: "PROYECTOS REALIZADOS" },
  { href: "#contacto", label: "CONTACTOS" },
];

export default function NavbarLinks({ onClick }: NavbarLinksProps) {
  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="hover:text-primary"
            onClick={onClick}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
}
