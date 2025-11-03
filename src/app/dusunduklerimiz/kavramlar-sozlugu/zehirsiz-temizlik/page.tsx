"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function ZehirsizTemizlik() {
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
            <span className="text-gray-900 dark:text-white font-medium">Zehirsiz Temizlik</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Zehirsiz Temizlik
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Zehirsiz Temizlik, son 30 yıldır hayatımıza giren ve yüksek bir ivme ile her geçen gün daha da artan 55 binin üzerinde zehirli kimyasala karşı bir çabalayan akım olan "Non-toxic cleaning" ve "chemical free cleaning" terimlerinin Türkçeleştirilmiş adıdır. Bu akım kimyasallara karşı verilen bir mücadele değil; zararlı, zehirli veya tehlikeli diyebileceğimiz kimyasallara karşıdır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bulaşık deterjanı, çamaşır deterjanı, şampuan, yüzey temizleyiciler, diş macunu ve dahası birçok üründe bulunan fenol, klor, vs gibi kimyasal maddeler hafif ve ağır hasarlar verirler. Bu hasarların bir kısmı kısa vadede karşılaştığımız hasarlar olmakla birlikte, vücutta birikerek uzun vadeli hasarlar da verir. Üstelik, son yıllarda üretilen sentetik kimyasalların ne gibi bir hasar bırakacağı / bıraktığı henüz bilinmemekle birlikte, tahminler oldukça iç karartıcıdır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Temizliğin nedeni olan arınma, zehirli temizleyicilerle yapılırsa, zararlı ve yararlı ayırmaksızın bakterilere zarar verir. Bağışıklık sağlayan yararlı bakterilerin yok edilmesi, vücudun hastalıklara karşı mücadele etmesini engeller. Astım, bronşit, hormonal hastalıkla, egzama, migren, vs hastalıkların nedenlerinden olduğuna dair bilimsel araştırmalar bulunmaktadır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Zehirsiz temizlik yalnızca evimiz ve bizim için değil; toprak, su, hava için de önemlidir. Temizlik sonrası, zehirli kimyasallı atık, giderden denize akar. Bu zehirli kimyasallı atıklar, denizdeki canlıları doğrudan zehirler. Toprak, hava ve suyun zehirlenmesi, tüm canlıları tehdit eder.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Deterjanlardan duş jellerine kadar her türlü temizleyicide bulunan mikro tanecik plastik parçacıklar (minik mavi toplar) yine giderden denize ulaşır. Deniz canlılarında birikmesi ile önce deniz canlılarına, sonra tüketen tüm canlılara zarar verir.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kaynakça:
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Aşırı hijyenin bir başka boyutu, astım ve alerji sendromu" - Dr. Yavuz Dizdar
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                http://yavuzdizdar.com/asiri-hijyenin-bir-baska-boyutu-astim-ve-alerji-sendromu/
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Zehirli maddeler kullanmadan evde temizlik" - Buğday Derneği
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                http://www.bugday.org/portal/haber_detay.php?hid=115
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Plastik mikro tanecikler nelerdir ve neden yasaklanmalılar?" - Greenpeace
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                http://www.greenpeace.org/turkey/tr/news/plastik-mikro-tanecikler-nelerdir-160815/
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

