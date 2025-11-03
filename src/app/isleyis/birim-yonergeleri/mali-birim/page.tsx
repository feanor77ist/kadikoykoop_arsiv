"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function MaliBirim() {
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
          <span className="text-gray-900 dark:text-white font-medium">Mali Birim Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mali Birim Yönergesi
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Kooperatif varlığı ve faaliyetlerinin gerektirdiği mali süreçleri izlemek ve yürütmekle yükümlüdür.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Kooperatif muhasebesinin kanunlara uygun yürütülmesi için Mali Müşavir ile koordineli olarak çalışır. Yasal yükümlülüklere dair konuların işleyişi ve yürütülmesine dair kararları yönetim kurulu ile birlikte alır. Ödemeler mali birimin koordinasyonu ile Yönetim Kurulu üyeleri aracılığıyla gerçekleştirilir.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Birimin Görevleri
            </h2>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Dükkana gelen ürünlerin fiyatlarının hesaplanması</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Haftalık olarak stok takibinin yapılması, stok farklarından kaynaklanan uyumsuzlukların Pirot Sistemi'nde giderilmesi, mutfağa stok farklarının sebeplerine ve giderilmesine dair gerekli uyarıların yapılması</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Dükkana gelen ürünlerin fatura asıllarının takibi ve mali müşavire iletilmesi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Üretici ödemelerinin düzenlenmesi ve takibinin yapılması</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Günlük ciro, virman, gider vb. kalemlerin takibi, kasa ve pirot farkının takibi, sebeplerinin araştırılıp gerekli olduğu durumlarda mutfağa bilgi verilmesi/uyarıların yapılması</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Aylık ve 3 aylık periyotlarda hazırlanan, mali müşavire iletilen evrakların hazırlanması. Bunlar:</span>
                <ul className="list-none space-y-1 ml-6 mt-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ortaklara fatura kesimi ve mali müşavire iletilmesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Müstahsil makbuzu ve gider pusulası kesilmesi ve mali müşavire iletilmesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Aylık faturaların (üreticilerin kestiği faturalar, kargo faturaları, giderler için alınan faturalar) toplanıp mali müşavire iletilmesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Ay içerisinde çıkan Z raporlarının toplanması ve mali müşavire iletilmesi</span>
                  </li>
                </ul>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Aylık gelir gider tablosu hazırlama</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Yeni gelen ürünlerin Pirot'a tanımlanması: Ürün Kategorisi, Üretici, Birim, KDV Kategorisi ve fiyatlarının girilmesi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Ekmek ve kahve ürünlerinin sorumluluğu</span>
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
                <span>İş yükünün eşit pay edilebilmesi için en az 4 gönüllü gerekmektedir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birimde en az 6, en fazla 12 ay çalışma şeklinde bir rotasyon gerçekleşmesi beklenir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birim kendi içinde Whatsapp ve e-mail yazışmaları üzerinden iletişimini sağlar.</span>
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
                <span>Yeni gelen ürünlerdeki fiyat değişikliklerini Whatsapp üzerinden Mutfak ile paylaşır; gerekli hallerde fiyat artışlarındaki sebepleri kısaca açıklar.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Drive üzerinde Birim ile ilgili bilgileri tamamlar ve takip eder.</span>
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

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong className="font-semibold">Kooperatif el kitapçığında, Mali Birim işleri olarak yer alan aşağıdaki maddeler Mali Birim tarafından takip edilmemektedir.</strong> Bu işlerin bazıları düzenli olarak yapılan ve bir birimin sorumluluğunda olan işler değildir. Bu nedenle kitapçıktan da çıkarılması gerekmektedir. Bazı işlerin ise sorumluluğu YK'da veya çalışma birimlerindendir. Bunların da kitapçıkta revize edilmesi gerekmektedir.
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Kooperatif kuruluşu ve sonrasıyla ilgili yasal işlerin takip edilmesi - YK?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Kooperatif tüzüğünün oluşturulması ve zamanla doğacak ihtiyaçlara göre güncellenmesi - Kooperatifin böyle bir iş kalemi bulunmamaktadır.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Kooperatifin tutmakla yükümlü olduğu yasal defterlerin takibi - YK?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Yasal olarak yapılması gereken aylık, dönemlik ve yıllık işlemlerin oluşturulması ve takip edilmesi - YK?</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Kooperatif Genel Kurulu süreçlerinin düzenlenmesi - Mali Birim sorumlu değildir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>İşlerin takibi ve sürekliliğinin sağlanması için denetleme mekanizmasının kurulması ve işletilmesi - Kooperatifin böyle bir iş kalemi bulunmamaktadır.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Kooperatif bütçe planlaması - Bütçe planlanması gibi bir düzenli iş olmamakla birlikte şu anda bu işi Mali Projeksiyon Çalışma Grubu yürütmektedir. Mali birim, bu çalışma grubunun bir bileşenidir.</span>
              </li>
            </ul>
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

