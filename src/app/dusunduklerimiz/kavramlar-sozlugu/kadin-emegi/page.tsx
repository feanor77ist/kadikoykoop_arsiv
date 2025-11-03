"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function KadinEmegi() {
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
            <span className="text-gray-900 dark:text-white font-medium">Kadın Emeği</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kadın Emeği
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadınlar tüm dünyada tarımsal alanda yürüttükleri faaliyetlerle hem sosyal hem de ekonomik anlamda aile ve ülkelerinin kalkınmasına katkıda bulunmakta. Örneğin çiftçi kadınlar geri bırakılmış ülkelerde temel besin maddelerinin % 60-80'ini üretmekte. Buna karşın, kadınlar tarıma yaptıkları katkı oranında üretimden pay alamıyor ve eşit haklara sahip olamıyorlar. Kırsalda kadınların iş yeri ile evi arasında kesin bir ayrım yapılmadığı için kadın emeği ücretsiz aile işçiliği niteliğinde sayılıyor ve resmi istatistiklerde dahi görmezden geliniyor. Türkiye'de tarım istihdam politikaları gitgide kırsal yoksulluğu artırırken kadın emeği sömürüsünü de artırmakta; görünmeyen kadın emeğini özellikle ücretsiz aile işçiliğiyle derinleştirmekte. Bu anlamda, tarımda çalışan kadınların küçük ölçekli üreticiler ve aile çiftçiliği içerisinde temsiliyetlerini geliştirici örgütlenmelerin önününün açılması çok önemli.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Çiftçi kadınlar gıda seçimi, üretimi, yetiştirilmesi, hazırlanması ve hasadında kaydadeğer bir role sahipler. Tarım işgücünün bel kemiği olan çiftçi kadınlar bilgi biriktirme ve aktarımlarıyla tarımın belleğini de sürdürmelerine rağmen karar mekanizmalarında da büyük ölçüde yer alamıyorlar. Dünyada kadın çiftçilerin 3te 2si eğitimden yoksun. Ayrıca kadınlar dünyadaki tarım arazilerinin sadece yüzde ikisine sahip. Kadının bu mülksüzlüğü de kadın emeğinin görünmezliğini artırmakta; araziler genelde hep erkeklerin üzerine tapulu olduğu halde bu arazilerde yoğun olarak kadınlar ücretsiz çalışmakta.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Özetlemek gerekirse kadınların ücret eşitsizlikleri, kayıt dışı istihdamları ve mülksüzlükleriyle emekleri iyice görünmez hale gelmekte ve bu durum kırsal yoksullaşmayla derinleşmekte. Ayrıca, bilge köylü tarımının aksine, bugün küresel gıda-tarım şirketlerinin gitgide daha çok uyguladıkları genetik mühendisliği teknikleri tarımdaki deneyim aktarma ve sürdürülebilirlik bilgeliğine sahip olan çiftçi kadınları işlevsiz bırakmakta. Kadın emeğinin işgücü içerisindeki görünmezliğini kaldıracak politikaların geliştirilmesi, eşit işe eşit ücret politikası uygulanması ve tüm bunlar için de kadınların örgütlenme, kendi ekonomik özgürlüklerini kurma ve hak arama mücadelelerine destek olmak bu yüzden bugün daha da önemli.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kaynakça:
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                https://yesilgazete.org/blog/2015/10/20/tarimda-kadin-emegi-goknur-yazici/
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Esin Candan, Semiha Özalp Günal, "Tarımda Kadın Emeği", Tarım Ekonomisi Dergisi 2013, 19(1): 93-101
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Abdullah Aysu (2015). Gıda Krizi: Tarım, Ekoloji ve Egemenlik. İstanbul: Metis Yayınları.
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

