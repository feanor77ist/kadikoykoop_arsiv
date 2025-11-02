"use client";

import Link from "next/link";
import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      setShowMessage(false);
      setIsClosing(false);
      sessionStorage.setItem('kadikoy-koop-message-shown', 'true');
    }, 2000);
  };

  useEffect(() => {
    // SessionStorage'da mesajın daha önce gösterilip gösterilmediğini kontrol et
    const messageShown = sessionStorage.getItem('kadikoy-koop-message-shown');
    
    // Eğer daha önce gösterildiyse, hiç gösterme
    if (messageShown) {
      return;
    }

    // 1 saniye sonra mesajı göster
    const showTimer = setTimeout(() => {
      setShowMessage(true);
      // Backdrop hemen blur'lu görünür (showMessage true olduğunda)
      // Modal içeriği biraz sonra animasyonlu gelir
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 1000);

    // 7 saniye sonra mesajı gizlemeye başla (1 saniye bekleme + 6 saniye görünür)
    const hideTimer = setTimeout(() => {
      setIsClosing(true);
      setIsVisible(false);
      // Fade out animasyonu sonrası tamamen gizle (2 saniye animasyon)
      setTimeout(() => {
        setShowMessage(false);
        setIsClosing(false);
        // Mesajın gösterildiğini sessionStorage'a kaydet
        sessionStorage.setItem('kadikoy-koop-message-shown', 'true');
      }, 2000);
    }, 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  const mainSections = [
    {
      number: "1",
      title: "Neden ve Nasıl Kooperatifçilik?",
      description: "Kooperatifçiliğin temelleri, yasal süreç, mevzuat ve formlar",
      href: "/kooperatifcilik",
      icon: "📚",
      color: "blue"
    },
    {
      number: "2",
      title: "Kadıköy Kooperatifi Kendisini Anlatıyor",
      description: "Kooperatifin tarihçesi, temelleri, ilkeleri ve dokümantasyonu",
      href: "/kendisini-anlatiyor",
      icon: "🏛️",
      color: "purple"
    },
    {
      number: "3",
      title: "Gönüllülük",
      description: "Gönüllü katılım, eğitim materyalleri ve pratik bilgiler",
      href: "/gonulluluk",
      icon: "🤝",
      color: "green"
    },
    {
      number: "4",
      title: "İşleyiş",
      description: "Kooperatif modeli ve birim yönergeleri",
      href: "/isleyis",
      icon: "⚙️",
      color: "orange"
    },
    {
      number: "5",
      title: "Üzerine Düşündüklerimiz",
      description: "Çalıştay raporları ve kavramlar sözlüğü",
      href: "/dusunduklerimiz",
      icon: "💭",
      color: "pink"
    },
    {
      number: "6",
      title: "İlham Verenler",
      description: "Okuma listesi ve kaynak materyaller",
      href: "/ilham-verenler",
      icon: "✨",
      color: "yellow"
    },
    {
      number: "7",
      title: "Kooperatifçilik Sohbetleri",
      description: "Podcast ve ses kayıtları",
      href: "/sohbetler",
      icon: "🎙️",
      color: "red"
    },
    {
      number: "8",
      title: "Bir Araya Gelince",
      description: "Etkinlikler ve organizasyonlar",
      href: "/etkinlikler",
      icon: "🎉",
      color: "indigo"
    },
    {
      number: "9",
      title: "Kooperatif Yayında",
      description: "Yayınlar ve medyada çıkan haberler",
      href: "/yayinlar",
      icon: "📰",
      color: "teal"
    },
    {
      number: "10",
      title: "Kolektif Hafıza",
      description: "Görseller ve belge arşivi",
      href: "/hafiza",
      icon: "📸",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600",
      purple: "border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600",
      green: "border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600",
      orange: "border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600",
      pink: "border-pink-200 dark:border-pink-800 hover:border-pink-400 dark:hover:border-pink-600",
      yellow: "border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600",
      red: "border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600",
      indigo: "border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600",
      teal: "border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600",
      cyan: "border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      {/* Backdrop - hemen görünür ve blur'lu (showMessage true olduğunda) */}
      {showMessage && (
        <div 
          className={`fixed inset-0 z-40 bg-black/30 cursor-pointer transition-all duration-[1500ms] ease-out ${
            isClosing 
              ? "opacity-0 backdrop-blur-none" 
              : isVisible 
                ? "opacity-100 backdrop-blur-sm" 
                : "opacity-100 backdrop-blur-none"
          }`}
          onClick={closeModal}
        />
      )}
      
      {/* Dekoratif görseller - modal çevresinde */}
      {showMessage && (
        <div 
          className={`fixed inset-0 z-[45] pointer-events-none overflow-hidden ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-[2000ms] ease-out`}
        >
          {/* modal.webp - sol üst, modal'ın üstünde */}
          <img
            src="/modal.webp"
            alt=""
            className={`absolute top-4 left-4 sm:top-20 sm:left-8 w-auto h-auto max-w-[180px] max-h-[198px] sm:max-w-[300px] sm:max-h-[330px] transition-all duration-[2000ms] ease-out ${
              isVisible ? "opacity-70 scale-100 rotate-[-4deg] sm:rotate-[-8deg]" : "opacity-0 scale-95 rotate-[-8deg] sm:rotate-[-12deg]"
            }`}
            style={{ width: 'auto', height: 'auto' }}
          />
          
          {/* Temmuz 2020.webp - sağ üst, modal'ın üstünde */}
          <img
            src="/Temmuz 2020.webp"
            alt=""
            className={`absolute top-4 right-4 sm:top-16 sm:right-12 w-auto h-auto max-w-[170px] max-h-[170px] sm:max-w-[280px] sm:max-h-[280px] transition-all duration-[2500ms] ease-out ${
              isVisible ? "opacity-70 scale-100 rotate-[6deg] sm:rotate-[12deg]" : "opacity-0 scale-95 rotate-[10deg] sm:rotate-[18deg]"
            }`}
            style={{ width: 'auto', height: 'auto' }}
          />
          
          {/* modal2.webp - sağ alt, modal'ın altında */}
          <img
            src="/modal2.webp"
            alt=""
            className={`absolute bottom-12 right-4 sm:bottom-24 sm:right-16 w-auto h-auto max-w-[180px] max-h-[198px] sm:max-w-[300px] sm:max-h-[330px] transition-all duration-[3000ms] ease-out ${
              isVisible ? "opacity-70 scale-100 rotate-[3deg] sm:rotate-[6deg]" : "opacity-0 scale-95 rotate-[6deg] sm:rotate-[12deg]"
            }`}
            style={{ width: 'auto', height: 'auto' }}
          />
          
          {/* modal1.webp - sol alt */}
          <img
            src="/modal1.webp"
            alt=""
            className={`absolute bottom-12 left-4 sm:bottom-20 sm:left-12 w-auto h-auto max-w-[170px] max-h-[170px] sm:max-w-[280px] sm:max-h-[280px] transition-all duration-[2800ms] ease-out ${
              isVisible ? "opacity-70 scale-100 rotate-[-6deg] sm:rotate-[-10deg]" : "opacity-0 scale-95 rotate-[-10deg] sm:rotate-[-16deg]"
            }`}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      )}
      
      {/* Kooperatif Kapanış Mesajı - Modal */}
      {showMessage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-[2000ms] ease-out`}
          onClick={closeModal}
        >
          {/* Modal içeriği - daha sonra görünür */}
          <div
            className={`relative max-w-2xl w-full bg-gradient-to-br from-green-50/80 to-blue-50/80 dark:from-green-900/50 dark:to-blue-900/50 rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-green-200/60 dark:border-green-800/60 transform transition-all duration-[2000ms] ease-out pointer-events-auto ${
              isVisible
                ? "scale-100 translate-y-0 opacity-100"
                : "scale-[0.98] translate-y-2 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-4">
              <div className="text-5xl sm:text-6xl mb-4 animate-pulse">🌱</div>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                Biliyoruz ki hikâyemiz burada bitmiyor. Birlikte kurduğumuz değerlerin, dayanışma ruhunun ve kolektif emeğin gittiğimiz her yerde başka zeminlerde yeniden filizleneceğine inanıyoruz.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Hero Section */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Kadıköy Kooperatifi Arşivi
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Kadıköy Kooperatifi'nin belgeleri, yayınları ve kooperatifçilik kaynaklarına buradan erişebilirsiniz.
          </p>
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mainSections.map((section) => (
            <Link
              key={section.number}
              href={section.href}
              className={`group bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border-2 ${getColorClasses(section.color)} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {section.number === "3" ? (
                  <svg
                    viewBox="0 0 120 120"
                    className="w-12 h-12 sm:w-16 sm:h-16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Dayanışma Halkası - Toplumsal Cinsiyet Farkındalığı ve Çeşitlilik */}
                    
                    {/* Person 1 - Uzun saçlı, elbise (üstte - Yeşil) */}
                    <g fill="#22c55e">
                      <circle cx="60" cy="28" r="7" />
                      <ellipse cx="60" cy="42" rx="6" ry="10" />
                      {/* Uzun düz saç */}
                      <path d="M52 28 L52 20 Q54 18 56 20 L56 22 Q58 20 60 22 Q62 20 64 22 L64 20 Q66 18 68 20 L68 28" fill="#16a34a" />
                      {/* El */}
                      <circle cx="67" cy="40" r="2.5" fill="#15803d" />
                    </g>
                    
                    {/* Person 2 - Kısa saçlı, pantolon (sağ üst - Mavi) */}
                    <g fill="#3b82f6">
                      <circle cx="88" cy="42" r="7" />
                      <rect x="85" y="52" width="6" height="8" rx="1.5" />
                      {/* Kısa saç */}
                      <ellipse cx="88" cy="40" rx="8" ry="3" fill="#2563eb" />
                      {/* El */}
                      <circle cx="94" cy="52" r="2.5" fill="#1d4ed8" />
                      <circle cx="84" cy="52" r="2.5" fill="#1d4ed8" />
                    </g>
                    
                    {/* Person 3 - Dalgalı saçlı, elbise (sağ alt - Mor) */}
                    <g fill="#a855f7">
                      <circle cx="93" cy="82" r="7" />
                      <ellipse cx="93" cy="96" rx="6" ry="10" />
                      {/* Dalgalı saç */}
                      <path d="M86 82 Q87 78 88 80 Q89 77 90 79 Q91 76 92 78 Q93 75 94 77 Q95 74 96 76 Q97 73 98 75 Q99 72 100 74 L100 82 Z" fill="#9333ea" />
                      {/* El */}
                      <circle cx="87" cy="92" r="2.5" fill="#7e22ce" />
                      <circle cx="86" cy="98" r="2.5" fill="#7e22ce" />
                    </g>
                    
                    {/* Person 4 - Kısa saçlı, pantolon (alt - Turuncu) */}
                    <g fill="#f97316">
                      <circle cx="60" cy="92" r="7" />
                      <rect x="57" y="102" width="6" height="8" rx="1.5" />
                      {/* Kısa saç */}
                      <ellipse cx="60" cy="90" rx="8" ry="3" fill="#ea580c" />
                      {/* El */}
                      <circle cx="53" cy="102" r="2.5" fill="#c2410c" />
                      <circle cx="67" cy="102" r="2.5" fill="#c2410c" />
                    </g>
                    
                    {/* Person 5 - Topuz saçlı, elbise (sol alt - Pembe) */}
                    <g fill="#ec4899">
                      <circle cx="27" cy="82" r="7" />
                      <ellipse cx="27" cy="96" rx="6" ry="10" />
                      {/* Topuz saç */}
                      <circle cx="27" cy="77" r="5" fill="#db2777" />
                      <ellipse cx="27" cy="79" rx="5" ry="3" fill="#be185d" />
                      {/* El */}
                      <circle cx="33" cy="92" r="2.5" fill="#9f1239" />
                      <circle cx="34" cy="98" r="2.5" fill="#9f1239" />
                    </g>
                    
                    {/* Person 6 - Kısa saçlı, pantolon (sol üst - Teal) */}
                    <g fill="#14b8a6">
                      <circle cx="32" cy="42" r="7" />
                      <rect x="29" y="52" width="6" height="8" rx="1.5" />
                      {/* Kısa saç */}
                      <ellipse cx="32" cy="40" rx="8" ry="3" fill="#0d9488" />
                      {/* El */}
                      <circle cx="25" cy="52" r="2.5" fill="#0f766e" />
                      <circle cx="39" cy="52" r="2.5" fill="#0f766e" />
                    </g>
                    
                    {/* El ele tutuşma halkası - Dayanışma (Çeşitli renklerde) */}
                    <path 
                      d="M67 40 Q75 38 87 46 Q95 54 95 62 Q95 70 89 77 Q83 84 73 87 Q63 90 53 87 Q43 84 31 77 Q25 70 25 62 Q25 54 33 46 Q41 38 53 40 Q57 34 63 34 Q69 34 67 40 Z" 
                      stroke="url(#solidarityGradient)" 
                      strokeWidth="4" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      opacity="0.5"
                    />
                    
                    {/* Gradient tanımı */}
                    <defs>
                      <linearGradient id="solidarityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="20%" stopColor="#3b82f6" />
                        <stop offset="40%" stopColor="#a855f7" />
                        <stop offset="60%" stopColor="#f97316" />
                        <stop offset="80%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                ) : (
                  section.icon
                )}
              </div>
              
              {/* Title */}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {section.title}
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {section.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                <span>İncele</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 sm:p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
            📖 Arşiv Hakkında
          </h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Bu arşiv, Kadıköy Kooperatifi'nin belgelerini, yayınlarını ve kooperatifçilik hakkında topladığı kaynakları içermektedir. 
            10 ana bölüm altında düzenlenmiş olan içeriklere kartlara tıklayarak erişebilirsiniz. Her bölümde ilgili alt başlıklar ve 
            dokümanlara ulaşabilirsiniz.
          </p>
        </div>
      </main>

      {/* Social Media Links - Fixed Bottom Right */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col gap-3">
        <a
          href="https://www.instagram.com/kadikoykooperatifi/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
          aria-label="Instagram"
        >
          <svg
            className="w-6 h-6 text-pink-600 dark:text-pink-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/KadikoyKoop/?_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
          aria-label="Facebook"
        >
          <svg
            className="w-6 h-6 text-blue-600 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://x.com/kadikoykoop"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
          aria-label="X (Twitter)"
        >
          <svg
            className="w-6 h-6 text-gray-900 dark:text-gray-100"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
