"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function HobiBahceciligi() {
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
            <span className="text-gray-900 dark:text-white font-medium">Hobi Bahçeciliği</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hobi Bahçeciliği
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hobi Bahçeleri oluşturmak hızlı kentleşmeden dolayı doğadan uzaklaşan insanlar için açık arazilerin değerlendirme yöntemlerinden biridir ve bu bahçeler kentliler tarafından giderek artan bir şekilde rağbet görmektedir. Hobi bahçeleri kentte yaşayanların boş zamanlarında genellikle sebze ve meyve yetiştiriciliği için kullandıkları, üzerinde konaklama amacının olmadığı küçük tarım parselleridir. Kent hayatında insanların doğayla bağlantılarının kopmaması ve rekreasyon amaçlı aktiviteleri gerçekleştirmeleri adına önemli rol oynamaktadır. Bu bahçelerden sebze meyve ihtiyacının önemli bir bölümünü karşılanamaz, adı üstünde bu ancak bir hobidir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hobi Bahçelerinin dünyada ortaya çıkış tarihi iki yüz yıl öncesini bulmuş olsa da ülkemizdeki ilk örnekleri 1980'li yılların ortalarına dayanmaktadır. Çoğunluğu bulunduğu bölgenin yerel yönetimlerince kurulan ve yönetilen bu bahçelerin yönetmeliklerinde ortak bir dile sahip olunmadığı, yönetiminde ve işletilmesinde farklılıklar olduğu gözlemlenmektedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              İlk olarak 1986 yılında Bursa'da kurulan "Bursa Küçük Bahçe Tesisleri" kent merkezine 10 km uzaklıkta Küçükbalıklı mevkiinde yer almaktadır."İzmir Kent Bahçeleri" projelendirme çalışmaları 1989 yılında İzmir Büyükşehir Belediyesi tarafından başlatılmıştır. Daha sonraki yıllarda İzmir'de Buca Hobi Bahçesi (1999),İstanbul Bakırköy'de Sevgi Yumağı Hobi Bahçesi (2000), Bursa Yıldırım İlçesi'nde Vakıfköy Bağevleri Hobi Bahçesi (2001), Ankara Atatürk Orman Çiftliği Kardelen Hobi Bahçesi (2001), İzmir'de İnciraltı (2003) ve Menderes Bahçevan (2003) Hobi Bahçeleri,Eskişehir'de Tepebaşı Belediyesi Hobi Bahçesi (2002), Mersin'de Yenişehir Belediyesi Hobi Bahçesi(2003), Kayseri'de Altınoluk Hobi Bahçesi (2003)tesis edilmiştir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hobi bahçeleri genellikle yerel yönetimler tarafından tesis edilir ve genellikle süreli dönemler için kent halkına kiralanırlar. Yönetim, bahçe kiracıları tarafından oluşturulan bir dernek tarafından yürütülür. Dernek, bahçecilik hedefinin ana hatlarını, tesislerin bu yönde nitelik ve miktarını plan bölgesi çerçevesinde çizer. Kullanıcılar kurum ve kuruluşlara küçük oranda üyelik aidatı öderler.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bunların yanında büyük şehirlere yakın bölgelerde daha çok sayıda özel hobi bahçeleri de vardır. Bazı girişimciler boş ve atıl durumdaki arazileri hobi bahçesi olarak düzenleyip talep sahiplerine kiralamaktadırlar.
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

