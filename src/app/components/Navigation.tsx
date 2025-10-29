"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/kooperatifcilik", label: "Kooperatifçilik" },
    { href: "/kendisini-anlatiyor", label: "Kendisini Anlatıyor" },
    { href: "/gonulluluk", label: "Gönüllülük" },
    { href: "/isleyis", label: "İşleyiş" },
    { href: "/dusunduklerimiz", label: "Düşündüklerimiz" },
    { href: "/ilham-verenler", label: "İlham Verenler" },
    { href: "/sohbetler", label: "Sohbetler" },
    { href: "/etkinlikler", label: "Etkinlikler" },
    { href: "/yayinlar", label: "Yayınlar" },
    { href: "/hafiza", label: "Hafıza" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 dark:bg-black/95 dark:border-gray-800 shadow-sm">
      {/* Logo Banner */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-3">
            <Link 
              href="/" 
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/banner.webp"
                alt="Kadıköy Kooperatifi"
                width={600}
                height={160}
                priority
                className="h-auto w-auto max-h-16 object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 overflow-x-auto py-2 scrollbar-hide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === link.href || pathname?.startsWith(link.href)
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
