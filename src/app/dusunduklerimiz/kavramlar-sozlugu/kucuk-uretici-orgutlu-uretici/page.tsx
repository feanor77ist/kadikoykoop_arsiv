"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function KucukUreticiOrgutluUretici() {
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
            <span className="text-gray-900 dark:text-white font-medium">Küçük Üretici ve Örgütlü Üretici</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Küçük Üretici ve Örgütlü Üretici
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Küçük üretici
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Atalık, yerel tohumları ve geleneksel bilgiyi kullanarak üretim sürecinde aile olarak çalışan; gerektiği sürece işçi çalıştıran, üretimini kar amacı güden şirketler gibi örgütlemeyen; kendisi bir şirkete dönüşmemiş üreticidir. Bu açıdan, küçük üretici ifadesi bir ölçek sorunu olmakla beraber esasında bir model olarak ifade edilebilir. Türkiye ve dünyada, tarımsal üretimin büyük çoğunluğu halen küçük üreticiler tarafından yapılmaktadır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Örgütlü üretici
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Örgütlenme ortak yaşam örmek amacıyla birlikte hareket etme, iş birliği yapma ve kurumsallaşma olarak tanımlanabilir. Dünyada olduğu gibi kırsal alanda da kamu ve sivil örgütlenme modelleri mevcut. Günümüzde genel olarak kamu örgütlenmeleri ivme kaybederken sivil örgütlenmeler daha fazla etkinleşmektedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sivil örgütlenmeler mesleki ve ekonomik örgütlenmeler şeklindedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Mesleki örgütler genellikle üreticileri mesleki olarak temsil eden, onların mesleki ve sosyo- ekonomik sorunlarını dile getiren bu konuda politikalar oluşturulmasına çalışan örgütlerdir. Mesleki örgütlerin başında Sendikalar, ziraat odaları, birlik, dernek, vakıf gelmektedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sivil olarak ekonomik amaçlı örgütlenmelerin başında ise kooperatifler gelir. Kooperatifler geleneksel bilge köylü tarımını ve doğayı tehdit eden büyük ticari işletmelere karşı küçük aile işletmeciliğini korur. Çevre ile uyumlu sürdürülebilir tarım politikaları oluşturmak ancak kooperatif ve benzeri örgütlenmelerle mümkündür.
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

