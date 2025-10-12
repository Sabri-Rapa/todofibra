import Link from "next/link";

interface NavbarLinksProps {
  onClick?: () => void;
}

const links = [
  { href: "/", label: "INICIO" },
  { href: "/empresa", label: "EMPRESA" },
  { href: "#productos", label: "PRODUCTOS" },
  { href: "#contact", label: "CONTACTO" },
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
