"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function Permakultur() {
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
            <span className="text-gray-900 dark:text-white font-medium">Permakültür</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Permakültür
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Permakültür, sürdürülebilir insan yerleşimleri yaratma amaçlı Bill Mollison, David Holmgren ve çalışma arkadaşları tarafından 1970'li yıllarda geliştirilmiş bir tasarım sistemidir. Kültürler sürdürülebilir tarım temeli ve toprak kullanma etiği olmadan uzun süre yaşayamayacağı için, bu bileşik sözcük yalnızca "kalıcı tarım" (permanent agriculture) sözcüklerinin değil, "kalıcı kültür" (permanent culture) sözcüklerini de içerir. Permakültür bir düzeyde bitkiler, hayvanlar, binalar ve altyapıyla (su, enerji, iletişim) ilgilidir. Ancak permakültür yalnızca bunlarla değil, bu öğeleri arazide nasıl yerleştirirsek aralarında ne gibi karşılıklı ilişkiler oluşturabileceğimizle de ilgilidir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Amaç kendi ihtiyaçlarını karşılayan, çevresini sömürmeyen veya kirletmeyen, dolayısıyla uzun vadede sürdürülebilir, ekolojik olarak sağlıklı ve ekonomik olarak uygulanabilir sistemler yaratmaktır. Permakültür mümkün olan en küçük alanı kullanarak şehir ve köyler için yaşamı destekleyen bir sistem oluşturmak amacıyla, arazinin ve yapıların karakteristiğini bitki ve hayvanların doğal özellikleriyle bir araya getirir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Permakültür kendiliğinden hareketli olan görece zararsız enerjiyi ve dünyadaki, yaşamı sürekli olarak yok etmemizi gerektirmeyecek kadar bol olan doğal kaynaklarla besinleri kullanarak var olabileceğimiz bir sistemdir. Dünyayı korumak ve yenilemek için var olan bütün teknikler zaten bilinmektedir; belirli olmayan şey herhangi bir ulusun ya da kalabalık bir insan grubunun bu değişimi gerçekleştirmeye hazır olup olmadığıdır. Ama diğer yandan da milyonlarca insan bunu siyasi otoritelerin desteği olmaksızın, bireysel olarak yapmaya başlıyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bill Mollison'a göre permakültürde üç bölümden oluşan bir etik anlayışını benimseriz:
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Dünyaya özen göstermek</strong> toprağa, canlı türlerine ve çeşitliliğine, atmosphere, ormanlara, mikro yaşam alanlarına, hayvanlara, sulara, kısacası canlı veya cansız tüm varlıklara özen göstermek demektir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>İnsana özen göstermek</strong> dünyaya özen göstermek aynı zamanda insana özen göstermektir. Böylece gıda, barınma, eğitim, tatmin edici bir iş ve keyifli insan ilişkilerine olan ihtiyaç da giderilmiş olur. Temel ihtiyaçlarımızı karşılayabilirsek dünyaya zarar veren yıkıcı eylemlerde bulunmamıza da gerek kalmaz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Zaman, para ve enerji fazlasını dünyaya ve insanlara özen gösterme amacını gerçekleştirmek için kullanmak</strong> "dünyaya özen göstermek" etiğinin üçüncü bileşenidir. Temel gereksinimlerimizi karşıladıktan, sistemlerimizi becerilerimiz doğrultusunda en iyi şekilde tasarladıktan sonra diğer insanların da bu hedefi gerçekleştirebilmesi için etkimizi ve enerjimizi ortaya koyabiliriz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Permakültür sisteminin ayrıca her canlının kendi içsel değerini teslim eden temel bir yaşam etiği de vardır. Bir ağaç, kendine içkin değeri olan bir şeydir. Önemli olan canlı ve faal olmasıdır. Doğada kendi payına düşeni yapmaktadır. Biyokütleyi geri dönüştürmekte, bölgesel olarak oksijen ve karbondioksit üretmekte, küçük hayvanları barındırmakta ve toprak üretmektedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kısaca diyebiliriz ki; permakültür tasarımı, kavramsal, maddi ve stratejik bileşenleri tüm canlıların yararına çalışan bir model içinde bir araya getiren bir sistemdir. Permakültür'ün arkasındaki, doğaya aykırı olmaktan ziyade onunla birlikte çalışma, uzun süreli düşüncesizce hareket etmekten ziyade uzun süreli özenli gözlem yapma, sistemlerin sadece bir ürününün peşinde koşmaktan ziyade onlara bütün işlevleriyle bakma ve sistemlerin kendi evrimlerinin gerçekleşmesine izin verme felsefesidir.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kaynak: Permakültüre Giriş, Bill Mollison
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

