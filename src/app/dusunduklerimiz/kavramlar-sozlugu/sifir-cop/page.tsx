"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function SifirCop() {
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
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/dusunduklerimiz" className="hover:text-blue-600 dark:hover:text-blue-400">Üzerine Düşündüklerimiz</Link>
            <span>/</span>
            <Link href="/dusunduklerimiz/kavramlar-sozlugu" className="hover:text-blue-600 dark:hover:text-blue-400">Kavramlar Sözlüğü</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Sıfır Çöp</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sıfır Çöp
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Sıfır Çöp Nedir?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sıfır Çöp, organik ve inorganik atıkların çöpe atılmasının engellenmesini sağlayan bir anlayıştır. Globalde kullanılan Zero Waste akımının Türkçeleştirilmesinden oluşmuştur. 1970lerin ortalarında California'da doğmuş ve 2000lerde tüm Dünyaya ulaşmıştır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Toksik madde içeren atıkların geri ve ileri dönüşüme ayrılması veya yeniden kullanılmasındansa, üretilmesini önlemek ana amacıdır. Organik ürünlerin kompost, vs olarak değerlendirilmesi, inorganik ürünlerde sentetik eşyalar yerine doğada çözülen doğal ürünlerin ve kullan-at ürünler yerine yeniden kullanımlı ürünler kullanılması hedeflenir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              İçi plastik, dışı kağıt olması nedeniyle geri dönüşemeyen karton kahve bardaklarını hiç kullanmamak, kahvecilerin bu bardakları sipariş etmesini engelleyerek kişisel bardak kullanmak bir Sıfır Çöp çalışmasıdır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Plastik Poşetler
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ortalama 12-15 dakika kullanılan petrol türevi plastik poşetlerin yok olma süresi bin yılı bulur. Çözünmesi esnasında toprak ve suyu toksik madde ile zehirler. Üretilen plastik poşetlerin yalnızca %1'i geri dönüşür. Geri kalan %99'u, geri dönüşüm makinelerinin çarklarına zarar verdiği ve yeni üretmenin var olanı geri dönüştürmekten daha ucuz olduğu gerekçesiyle dönüştürülmez. Bir birey yılda yaklaşık 320 adet plastik poşet kullanır ve atar. Okyanuslarda plastik poşetlerin neden olduğu çöp adaları bulunur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Sıfır Çöp'ün Yararları:
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Doğada uzun yıllar çözülmeyen, çözüldüğünde toprağı ve suyu zehirleyen ve geri veya ileri dönüşümü mümkün olmayan atıkların çöpe gitmesini engeller.</li>
              <li>Uzun yıllar çözünemediği için doğada bütün halde kalan materyallerin, hayvanlara doğrudan zarar vermesini engeller.</li>
              <li>Alternatif ürünün yeniden kullanımı sayesinde toplamda ekonomik yarar sağlar.</li>
              <li>Bireyin materyalleri tanımasını ve bilinçlenmesini sağlar.</li>
              <li>Çevre dostu ve yeniden kullanılabilen materyallerin kullanılması iyi bir çözümdür. Buna en iyi örnek, ortalama bin yılda çözünen plastik poşet yerine file ya da pamuklu çanta kullanımıdır.</li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kaynakça:
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Rakamlarla Naylon Poşet" – Yeşilist
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                http://www.yesilist.com/rakamlarla-naylon-poset/
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Zero Waste" – Wikipedia
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                https://en.wikipedia.org/wiki/Zero_waste
              </p>
            </div>
          </div>

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

