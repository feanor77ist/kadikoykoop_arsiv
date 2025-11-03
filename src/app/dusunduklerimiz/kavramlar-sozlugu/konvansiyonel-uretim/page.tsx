"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function KonvansiyonelUretim() {
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
            <span className="text-gray-900 dark:text-white font-medium">Konvansiyonel / Endüstriyel Tarım</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Konvansiyonel / Endüstriyel Tarım
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Tarihçe:
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              2. Paylaşım savaşı sonrası dünya nüfusunun hızla arttığı ve bir gıda krizi ile karşı karşıya olunduğu gerekçeleriyle yeni bir tarım sistemine geçildi. 'Yeşil Devrim' adı da verilen bu tarım sisteminde verimliliği artırmak için nitrojenli gübreler ve pestisitler yoğun olarak kullanılmıştır. Gerçekten de 'Yeşil Devrim' sayesinde tarımsal üretim belirgin bir biçimde arttı. 'Yeşil Devrim'in fikir babası Norman Borlaug'tu ve buğday ıslah çalışmaları sonucu, yarı bodur bir buğday türü geliştirerek Meksika'da 1940'lara nazaran üretimin 6 kat artmasını sağladı. Norman'ın bulduğu bu buğday türü farklı ülkelerde de denenerek üretimi artırdı ve Norman'a tarım çalışmalarına yaptığı katkılar nedeniyle 1970'te Nobel ödülü kazandırdı. Gıda krizine karşı tek yol gibi gösterilen "Yeşil Devrim" geride toprak kirliliği, su kaynaklarının tükenme noktasına gelmesi ve sağlık sorunları gibi ciddi yan etkiler bıraktı.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Endüstriyel/Konvansiyonel Tarım Nedir?
            </h2>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
              Tanımlar:
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Büyük ölçekli arazilerin işlenmesine, yoğun kimyasal ve mekanizasyon kullanımına, "serbest ticarete" ve ihracata dayanan, milyonlarca kişiyi insanca bir yaşam sürmenin mutluluğundan yoksun bırakan üretim sistemidir. (Abdullah Aysu)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Endüstriyel tarım, kimyasal ilaç ve kimyasal gübreler, şirket tohumları, yoğun tarımsal makinalar ve yoğun su kullanılarak yapılan tarım sistemidir. (Yeryüzü Derneği)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tarım zehirleri ve kimyasal gübrelerle üretilmiş ürünlerdir. Market raflarında bu ürünlere "geleneksel" deniliyor, yanına da parantez içinde "konvansiyonel" ekleniyor. "Geleneksel" terimini İngilizceye çevirseniz "traditional" oluyor. Bu adlandırma ile sanki zehirleri, kimyasal gübreleri bilmeyen veya kullanmayan çiftçiler kafamızda canlanıyor. (Tayfun Özkaya)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Yeşil Devrim adı verilen tarım tipidir. Kısa vadede gıda üretiminde ciddi bir artış sağlayan, uzun vadede toprağın ve yeraltı sularının kirlenmesine ve yoksullaşmasına yol açan bu tarım tipi, böcek ilaçlarını ve kimyasal gübreleri temel alır. Buna ek olarak hibrit tohumları kullanarak, çiftçileri dışa bağımlı kılar. Endüstriyel tarımla, savaşlar sırasında insanları öldürmek için zehirler ve patlayıcılar üreten fabrikalar, savaş sonrası tarımsal kimyasalları üreten fabrikalara dönüştürülmüştür. (Vandana Shiva)
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Endüstriyel/Konvansiyonel Tarımın Zararları Nelerdir?
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Aile çiftçiliğini yok eder</li>
              <li>Toprağın ve üretimin tekelleşmesini sağlar</li>
              <li>Mono ekimi ve kimyasal kullanımını zorunlu kılar</li>
              <li>Toprak ve su kirlenir kullanılamaz hale gelir</li>
              <li>Yerel ürün çeşitliliği azalır, yok olur</li>
              <li>Sera etkisi yaratır</li>
              <li>Kuraklığa ve erozyona neden olur</li>
              <li>Kırsal/kentsel göç biçimlerinde olumsuz değişimlere neden olur.</li>
              <li>İnsan sağlığı için riskli oluşturur</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
              <strong>Kısaca tanımlarsak (taslak):</strong>
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Üretimin her aşamasında yoğun su ve kimyasal girdiyi zorunlu kılan, büyük oranda makina ve teknoloji kullanımı gerektiren, ürünü ve toprağı kısırlaştıran şirket tohumlarının ve mono ekimin bir arada olduğu tarım sistemidir.
            </p>
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

