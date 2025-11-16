"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTranslationNotice, setShowTranslationNotice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const prevLocaleRef = useRef<string | null>(null);
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();

  // Show translation notice ONLY when locale changes from 'tr' to 'en' (when EN button is clicked)
  useEffect(() => {
    // Only show banner if locale changed from 'tr' to 'en' (not on initial load or page navigation)
    if (prevLocaleRef.current === 'tr' && locale === 'en') {
      // Clear any existing timers
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];

      setShowTranslationNotice(true);
      // Small delay to trigger fade-in animation
      const fadeInTimer = setTimeout(() => setIsVisible(true), 10);
      timersRef.current.push(fadeInTimer);
      
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        // Wait for fade-out animation to complete before unmounting
        const unmountTimer = setTimeout(() => {
          setShowTranslationNotice(false);
        }, 500); // Match transition duration
        timersRef.current.push(unmountTimer);
      }, 5000); // 5 seconds
      timersRef.current.push(hideTimer);
    } else if (locale !== 'en') {
      // If locale is not 'en', make sure banner is hidden
      setIsVisible(false);
      setShowTranslationNotice(false);
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
    }

    // Update previous locale
    prevLocaleRef.current = locale;

    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
    };
  }, [locale]);

  const navLinks = [
    { href: "/kooperatifcilik", label: t('cooperativism') },
    { href: "/kendisini-anlatiyor", label: t('about') },
    { href: "/gonulluluk", label: t('volunteering') },
    { href: "/isleyis", label: t('operations') },
    { href: "/dusunduklerimiz", label: t('thoughts') },
    { href: "/ilham-verenler", label: t('inspiration') },
    { href: "/sohbetler", label: t('conversations') },
    { href: "/etkinlikler", label: t('events') },
    { href: "/yayinlar", label: t('publications') },
    { href: "/hafiza", label: t('memory') },
  ];

  const changeLocale = async (newLocale: 'tr' | 'en') => {
    if (newLocale === locale) return;
    
    try {
      const response = await fetch('/api/locale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale: newLocale }),
      });

      if (response.ok) {
        // Reload the page to apply the new locale
        router.refresh();
      }
    } catch (error) {
      console.error('Failed to change locale:', error);
    }
  };

  return (
    <>
      {/* Language Selector - Fixed Top Right (Desktop Only) */}
      <div 
        className="hidden md:flex items-center gap-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 dark:border-gray-700 px-2.5 py-1.5" 
        style={{ 
          position: 'fixed', 
          top: '12px',
          right: '12px',
          zIndex: 35
        }}
      >
        <button
          onClick={() => changeLocale('tr')}
          className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer min-w-[40px] ${
            locale === 'tr'
              ? 'bg-blue-600 text-white shadow-md scale-105'
              : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
          aria-label="Türkçe"
          title="Türkçe"
        >
          TR
        </button>
        <span className="text-gray-300 dark:text-gray-600 text-sm font-light">|</span>
        <button
          onClick={() => changeLocale('en')}
          className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer min-w-[40px] ${
            locale === 'en'
              ? 'bg-blue-600 text-white shadow-md scale-105'
              : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
          aria-label="English"
          title="English"
        >
          EN
        </button>
      </div>

    <nav className="sticky top-0 z-30 bg-slate-100/95 backdrop-blur-sm border-b border-slate-300 shadow-sm">
      {/* Top Bar: Logo (left) + Desktop Nav (right) + Hamburger (mobile) */}
      <div className="border-b border-slate-300 bg-slate-100">
        <div className="max-w-7xl mx-auto md:max-w-none md:mx-0">
          <div className="flex md:grid md:grid-cols-[auto,1fr,auto] items-center justify-between md:justify-normal py-3 md:px-0">
            {/* Logo (left, desktop sola dayalı; mobil aynen) */}
            <div className="justify-self-start ml-2 sm:ml-4 md:ml-3 flex-shrink-0 min-w-0 overflow-hidden">
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
                  className="h-auto w-auto max-h-16 md:max-h-20 lg:max-h-24 max-w-full object-contain mix-blend-multiply"
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

            {/* Hamburger Menu Button + Language Selector - Mobile Only (right) */}
            <div className="md:hidden flex-shrink-0 mr-2 sm:mr-4 flex items-center gap-2">
              {/* Language Selector - Mobile Only (left of hamburger) */}
              <div className="flex items-center gap-0.5">
                <button
                  onClick={() => changeLocale('tr')}
                  style={{ fontSize: '12px' }}
                  className={`cursor-pointer font-semibold tracking-tight leading-none px-2 py-0.5 rounded transition-colors ${
                    locale === 'tr'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-transparent text-slate-700 dark:text-gray-300 opacity-80'
                  }`}
                  aria-label="Türkçe"
                  title="Türkçe"
                >
                  TR
                </button>
                <button
                  onClick={() => changeLocale('en')}
                  style={{ fontSize: '12px' }}
                  className={`cursor-pointer font-semibold tracking-tight leading-none px-2 py-0.5 rounded transition-colors ${
                    locale === 'en'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-transparent text-slate-700 dark:text-gray-300 opacity-80'
                  }`}
                  aria-label="English"
                  title="English"
                >
                  EN
                </button>
              </div>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1.5 sm:p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Translation Notice Banner - Show when locale is 'en', auto-hide after 5 seconds */}
      {showTranslationNotice && (
        <div 
          className="bg-amber-50 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800 shadow-sm transition-all duration-500 ease-in-out overflow-hidden"
          style={{
            maxHeight: isVisible ? '100px' : '0',
            opacity: isVisible ? 1 : 0,
            paddingTop: isVisible ? '0.75rem' : '0',
            paddingBottom: isVisible ? '0.75rem' : '0',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-amber-800 dark:text-amber-200 font-medium text-center">
                {tCommon('translationNotice')}
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
