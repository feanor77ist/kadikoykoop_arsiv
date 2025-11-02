"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="sticky top-0 z-30 bg-slate-100/95 backdrop-blur-sm border-b border-slate-300 shadow-sm">
      {/* Top Bar: Logo (left) + Desktop Nav (right) + Hamburger (mobile) */}
      <div className="border-b border-slate-300 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:max-w-none md:mx-0 md:px-0">
          <div className="flex md:grid md:grid-cols-[auto,1fr,auto] items-center justify-between md:justify-normal py-3">
            {/* Logo (left, desktop sola dayalı; mobil aynen) */}
            <div className="justify-self-start ml-0 md:ml-3">
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
                  className="h-auto w-auto max-h-16 md:max-h-20 lg:max-h-24 object-contain mix-blend-multiply"
                />
              </Link>
            </div>

            {/* Desktop Navigation (centered) */}
            <div className="hidden md:flex justify-self-center justify-center items-center gap-1 py-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.href || pathname?.startsWith(link.href)
                      ? "bg-blue-600 text-white"
                      : "text-slate-800 hover:bg-slate-200 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Hamburger Menu Button - Mobile Only (right) */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links - Desktop (moved next to logo) */}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-300 bg-slate-100">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  pathname === link.href || pathname?.startsWith(link.href)
                    ? "bg-blue-600 text-white"
                    : "text-slate-800 hover:bg-slate-200 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
