"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function GidaDisUrunUretici() {
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
          <span className="text-gray-900 dark:text-white font-medium">Gıda Dışı Ürün ve Üreticileriyle İlişkiler Birimi İşleyiş Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Gıda Dışı Ürün / Üretici Birimi İşleyiş Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            12 Aralık 2018
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Birimin Görevleri
            </h2>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Kooperatif bünyesinde mevcut ürünlere ilave olabilecek gıda dışı ekolojik ve yarı ekolojik ürünlerin (kozmetik, hijyen, araç-gereç vb.) araştırmasını yapar;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Tespit ettiği ürünler ile ilgili olarak üreticisi ile iletişime geçerek ilgili ürünün kooperatif dükkanında satılıp satılmayacağı konusunda araştırmasını yapar.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Uygun ürünleri mutfağa sunar ve alım sürecini takip eder.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Birimin Yapısı
            </h2>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birim 3 kişi ile çalışmalarını yürütebilmektedir. İleriki dönemlerde ürün çeşidinin artması durumunda birimdeki gönüllü sayısı arttırılmak istenebilir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birimde en az 3 en fazla 9 ay çalışma şeklinde bir rotasyon gerçekleşmesi beklenir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birim kendi içinde whatsapp ve email yazışmaları üzerinden iletişimini sağlar.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Kendi iç ritmine göre düzenli toplantılar yaparak konuları değerlendirir ve Mutfağa öneriler geliştirir.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Birim İşleyişi:
            </h2>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Ayda en az 2 defa birim toplantısı yapar. (Gerekli hallerde daha sık toplanabilir, bazı durumlarda ayda 1 toplantı yapılabilir.)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Yapılan birim toplantısının raporunu mutfak grubu ile e-posta yolu ile paylaşır ve kooperatif arşivinde ilgili klasöre yerleştirir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Kooperatif dükkanında ürünlerin yerleşimini yapar ve takip eder.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Halen dükkanda mevcut olan kitaplık ile ilgili olarak yeni gelen kitapları takip ederek kitap listesine yerleştirir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birim ile ilgili drive üzerinde ilgili bilgileri tamamlar ve takip eder.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birimden ayrılmak isteyen gönüllü birimi 1 ay öncesinden bilgilendirir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Genel mutfak rotasyonu sırasında birime girmek isteyen gönüllülere birim ile ilgili bilgi aktarımı yapar.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birim içinde kesin bir işbölümü yoktur; yapılacak işler gönüllülük esasıyla takip edilmektedir.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Ürün Değerlendirme Süreci:
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yeni tespit edilen ürün ile ilgili olarak;
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Küçük üretici tarafından üretilip üretilmediği;</li>
              <li>İşletme kaydının olup olmadığı;</li>
              <li>Etiket mevzuatına uygunluğu;</li>
              <li>Gerekli bakanlıklardan onayı olup olmadığı;</li>
              <li>Coğrafi olarak İstanbul'a yakınlığı (karbon ayak izinin az olması kaygısıyla) gibi araştırmalarını tamamlar.</li>
            </ol>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kriterlere uygun ürünlere yönelik üreticilerle temasa geçer.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Yeni alınacak ürün ile ilgili ürün tanıma ve üretici tanıma formu hazırlar.</li>
              <li>Yeni bir ürün için ilgili tetkik ve analizleri üreticisinden ister ve bu analizleri inceler; gerekli hallerde gönderilen analizleri konuyla ilgili bilgi sahibi olan kişilere göndererek incelenmesini ister ve takibini yapar.</li>
              <li>Yaptığı araştırmalar neticesinde ürün / üretici tanıma formunu tamamlar</li>
              <li>Mutfak toplantısında yeni ürün ve üreticiye ait bilgi aktarımında bulunur ve mutfakta ürün alımına dair tartışma yapar;</li>
              <li>Ürün alımı kararı verilirse, ilgili ürün için ürün sorumlusu bulunur ve ürün alımı gerçekleşir.</li>
              <li>Ürün alımı sonrası süreçte ürün sorumlusu ile beraber ürünleri ve üreticileri takip eder. Herhangi değişiklik durumlarını tespit eder ve ürün sorumlusu ile birlikte gerekli bilgilendirmeleri ve düzenlemeleri yapar.</li>
            </ol>
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

