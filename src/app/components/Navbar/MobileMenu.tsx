import NavbarLinks from "./NavbarLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`sm:hidden fixed inset-0 z-40 transition-[opacity,visibility] duration-300
        ${isOpen ? "opacity-100 visible pointer-events-auto"
                 : "opacity-0 invisible pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      <div
        className={`absolute top-20 left-0 w-full bg-light shadow-md overflow-hidden
          origin-top transform-gpu transition-transform duration-300 ease-out
          ${isOpen ? "scale-y-100" : "scale-y-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-sm font-medium">
          <NavbarLinks onClick={onClose} />
        </ul>
      </div>
    </div>
  );
}
