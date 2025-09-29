import Image from "next/image";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5491122334455"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-50 md:bottom-8 md:right-10"
    >
      <Image
        src="/assets/icons/whatsapp_icon.png"
        alt="WhatsApp"
        width={60}
        height={60}
        className="drop-shadow-lg hover:scale-110 transition-transform"
      />
    </Link>
  );
}
