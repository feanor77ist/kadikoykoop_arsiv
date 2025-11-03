"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function AileUretimi() {
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
            <span className="text-gray-900 dark:text-white font-medium">Aile Üretimi</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Aile Üretimi
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Aile çiftçiliği/ aile üretimi terimini kullananlar:
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Chayanov, aile çiftçiliğinde tüm giderler ve gelirleri tek bir hane içinde toplandığını söyler. Yani tüm aile üyeleri ortak gelir ve gider havuzunda birleşir. Chayanov'un "köylü ekonomisi" olarak tanımladığı, aile üretiminde sadece aile ihtiyaçları vardır, ortak gelir ve angarya. Köylü yani çiftçi ailesi ücretili emek çalıştırmaz. Kendi aile emeğini kullanarak en zor şekilde hayatta kalma başarısını gösterir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              "Aile çifçiliği terimi, çiftliğin normalde dışarıdan işgücü kiralamadan sadece aile ile devam ettiği anlamına gelmektedir." (Chayanov,1966:xvıı)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Korkut Boratav, tarımsal yapıdaki tabakalaşmayı 5 gruba ayrımaktadır; Büyük toprak sahipleri, Zengin köylüler, Orta köylüler, Yoksul köylüler ve Tarım işçileri. Korkut Boratav'ın sınıflandırmasına göre, "orta köylü", aile emeği ile geçimini sağlayan fakat dışarıdan ücretli emek gücü kullanmayan gruptur. Ancak Boratav dönem dönem orta köylülerinde ücretli emek kiralayabileceğini kabul eder ancak bu belli koşullara bağlıdır ve süreklilik arz etmez. (Boratav, 1981:78-79)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu tanımlama sadece geç kapitalistleşen ülkeler için geçerli değildir. Butters'ın tarımsal işletmelerin sınıflandırmasına ve ABD'deki nüfusuna göre, üç temel sosyal sınıfa ayırır. 1. Tarım Proletaryası: Arazisi olmayan daimi veya mevsimlik tarım işçileriyle yarı zamanlı çiftçileri kapsayan tarım proletaryası. 2. Tarımsal Küçük-Burjuvazi: kendi emeğini kullanmaktan çok az veya hiç emek gücü kullanmayan küçük meta üreticilerini ve çiftlikte çalışmak için ücret ödenmeyen aile üyelerini kapsar. 3. Tarımsal Kapitalistler: Büyük miktarda iş gücüne sahip olan aileden büyük çiftçileri, küçük veya büyük çiftlik dışı şirketlerin mülkiyetinde olan çiftlik işletmelerini içerebilir. Butters'ın tanımına göre, kendi emeğini kullanarak üretim yapanlar tarımsal küçük burjuvazi grubuna girmektedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tarımda aile üretimi yapanlar yani ücretli emek kullanmadan aile emeği ile üretim yapanlar için iki tanımlama yapılmaktadır; Köylü ve çiftçi. Ancak bu iki tanımlama başka bir tartışmayı beraberinde getirir. Literatürde köylü tanımı için aile emeği ile üretim yapıldığını ancak bu üretimin "Pazar" için yani değişim değeri için değil kendi ihtiyaçları düzeyinde kaldığı kapalı bir köy ekonomisini refere etmektedir. Ancak çiftçi tanımında, yine aile emeği kullanılmakta ancak artık değişim değeri için üretim yapıldığı ve "Pazar"a enterge olmuş kapitalist üretime içkin bir tanımlama olarak karşımıza çıkar. Marxist anlamda küçük meta üreticisi olarak tanımlanan bu üretim şeklinde aile üretimi yapılsa dahi bir "meta" üretimine refere etmektedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Birleşmiş Milletler Gıda ve Tarım Örgütü (FAO) bir çalışmasında aile çiftçiliğinin tanımı üzerine yoğunlaşmış ve her biri aile çiftçiliğinin farklı karakteristik özelliklerini ifade eden 36 farklı tanımlama yapmıştır. 2014 yılı Birleşmiş Milletler tarafından tarımda aile işletmeciliği yılı olarak ilan edilmiştir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Aile üretimi, deyince doğrudan küçük ölçekli işletme anlaşılmamalıdır. Burada, işletme büyüklüğü kavramının da sadece arazi genişliği olmadığı, işletmenin üretim ve gelir potansiyeli olduğunu da hatırlamakta yarar var.
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

