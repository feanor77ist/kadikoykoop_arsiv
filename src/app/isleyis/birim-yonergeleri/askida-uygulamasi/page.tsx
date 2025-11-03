"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function AskidaUygulamasi() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/isleyis" className="hover:text-blue-600 dark:hover:text-blue-400">İşleyiş</Link>
          <span>/</span>
          <Link href="/isleyis/birim-yonergeleri" className="hover:text-blue-600 dark:hover:text-blue-400">Birim Yönergeleri</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Askıda Uygulaması Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Askıda Uygulaması Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Aralık 2019
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Askıda uygulaması, dükkâna gelen kooperatif dostlarının, kooperatifin toplumsal dayanışma pratiğine katılmasını sağlamanın yollarından birisidir.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Askıya bırakılan ürünler, sağlıklı gıdaya erişmekte maddi güçlük çeken kişilere, bu ürünlere ihtiyaç duyan ilişki içerisinde olduğumuz grup ve inisiyatiflere ya da bu türden bir dayanışma göstermek istediğimiz yerlere herhangi bir mutfak gönüllüsü tarafından mutfağa whatsapp üzerinden bilgilendirme yapılarak verilir. Başkaca bir onay mekanizması işletilmez.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Ürünlerin, her seferinde farklı kişilere verilerek farklı kesimlerle dayanışma gösterilmesi beklenir.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Maddi güçlük çeken kişiler kişinin beyanı ya da tanıyanların bildirimine göre belirlenir. Başka bir araştırma ve sorgulama kesinlikle yapılmaz.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Uygulama Detayları
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Askının dükkandaki somut karşılığı, bu iş için ayrılan gıda sepetidir. Sepetin üzerine "Askıdaki Ürünler" levhası konur.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Nöbetçinin arkasında, dükkâna gelenlerin hemen dikkatini çekebileceği şekilde bu iş için ayrılan tahta asılı durur.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Askıya ürün bırakmak isteyen kooperatif dostu, ürünün ücretini peşin olarak öder.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Nöbetçi bu ürünü, normal satış olarak pirota kaydeder, arkasında asılı duran tahtaya bu ürünü not eder ve ürünü askıdaki ürün sepetine bırakır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Eğer askıya bırakılan ürün, peynir vb. gibi soğuk hava koşullarında beklemesi gereken bir ürün ise, sepete konmaz. Fakat buzdolabı içerisinde farklı bir yere konarak üzerine ürünün askıdaki bir ürün olduğunu anlatacak (...) renkte sticker yapıştırılır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ürünler birisine verildiği zaman, arkada asılı duran tahtadan verilmiş olan ürünler silinir. Mutfağa whatsapp üzerinden ürünlerin verildiği bildirilir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Askıdaki ürünlerin çok fazla birikmesi istenilen bir durum değildir, bu yüzden çok fazla ürün birikmeden dayanışılacak bir kişinin bulunması iyi olur.
            </p>
          </div>
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
            href="/isleyis/birim-yonergeleri" 
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
  );
}

