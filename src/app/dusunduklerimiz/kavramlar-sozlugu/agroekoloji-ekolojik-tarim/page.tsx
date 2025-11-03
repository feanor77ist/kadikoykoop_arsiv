"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function AgroekolojiEkolojikTarim() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/bg5.webp"
          alt=""
          className="fixed inset-0 w-full h-full object-cover opacity-[0.18] blur-[1px] dark:opacity-[0.22]"
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/dusunduklerimiz" className="hover:text-blue-600 dark:hover:text-blue-400">Üzerine Düşündüklerimiz</Link>
            <span>/</span>
            <Link href="/dusunduklerimiz/kavramlar-sozlugu" className="hover:text-blue-600 dark:hover:text-blue-400">Kavramlar Sözlüğü</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Agroekoloji - Ekolojik Tarım</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Agroekoloji - Ekolojik Tarım
            </h1>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tarımsal faaliyet esas itibariyle doğaya müdahale etmektir. Ancak bu müdahalenin çeşitli boyutları vardır. Doğanın yaşamsal döngüsüne yapıcı, onarıcı ve yıkıcı müdahaleler bulunabilir. Ekolojik tarım, yaşamsal döngü ile uyumlulaştırılmış, yapıcı ve onarıcı tarımsal pratiklerin bütününe verilen isimdir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ekolojik tarımın dünyada bir çok farklı uygulama biçimi bulunmaktadır ve bunlar bir çok farklı isimle de anılmaktadır: organik tarım, biyolojik tarım, doğal tarım, doğa ile dost tarım, onarıcı tarım, permakültür, sıfır bütçeli tarım, yabani tarım; gibi. Bu saydığımız tarımsal yaklaşımların hepsi bir tür "ekolojik tarım" yaklaşımı olarak ifade edilebilir. Elbette önemli olan bunların nasıl uygulandığıdır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Genel olarak bir takım ekolojik tarım ilkelerinden bahsedilebilir. Ekolojik döngüye zarar vermemesi bakımından tarımsal girdilerin de ekolojik olması; tarımsal zararlılar (böcekler, hastalıklar) ile ekolojik yöntemlerle mücadele edilmesi, tohumların uyumlu tohumlardan seçilmesi ve toprağı güçlendiren, yeniden kendini üreten "atalık" tohumlardan olması tercih sebebidir. Ekolojik tarım yaklaşımı bu açıdan dışarıdan girdiyi sıfırlama perspektifini önerir. Bu açıdan bitkisel ve hayvansal üretimin beraberliğini (köylü tarımı) savunur.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Agroekoloji, agro (ziraat) ile ekoloji kelimelerinin birleştirilmesi ile oluşturulan kelimedir. Çoğunlukla ekolojik tarım ile eş anlamlı kullanılmakla birlikte, aynı zamanda bir "tarımsal ekolojinin bilimi" anlamında, bilimsel araştırma yöntemi ve bilimsel bir paradigma olarak da kullanılmaktadır. Esas olarak bu paradigma, yukarıda bahsettiğimiz tarımsal yöntemlerin yenilikçi girişimlerle beraber nasıl uyumlu çözümler geliştirdiğini ve nasıl daha iyileştirilebileceğini araştırmaktadır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Küresel köylü ve çiftçi hareketi La Via Campesina, agroekoloj, köylü agroekolojisi, ekolojik tarım ifadelerini aynı zamanda şirketleşen ve endüstriyelleşen organik tarım hareketine bir alternatif olarak önemektedir. Küçük aile çiftçiliğine, yerel üretime ve doğa dostu yöntemlere dayanan köylü agroekolojisi, büyük şirketlerin endüstriyel tarımsal modeli karşısında alternatif bir model olarak kurgulanmakta ve savunulmaktadır.
            </p>
          </div>

          {/* Back and Scroll to Top Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors no-underline cursor-pointer active:cursor-grabbing"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Başa Dön
            </button>
            <Link 
              href="/dusunduklerimiz/kavramlar-sozlugu" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </Link>
          </div>

          {/* Floating "Başa Dön" Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 z-50 cursor-pointer active:cursor-grabbing"
              aria-label="Başa Dön"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          )}
        </main>
      </div>
    </div>
  );
}

