"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function GorusmeTalepleri() {
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
          <span className="text-gray-900 dark:text-white font-medium">Görüşme Talepleri Hakkında Yönerge</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Görüşme Talepleri Hakkında Yönerge
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            19.11.2018
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Türlü basın kurumlarından veya çeşitli oluşumlardan yazılı veya (canlı veya değil) görüntülü mülakat, görüşme veya etkinlik taleplerinde ve etkinliklerimize katılım taleplerinde öncelikli beklentimiz bu kurumların taleplerini etkinlik tarihinden olabildiğince erken iletmesidir. Talebin görüşüldüğü ilk toplantıda alınan karara itiraz gelebileceğini de hesaba katarak, mümkünse iki hafta öncesinden gelmesi sağlıklı karar almamızı kolaylaştırıyor. Talep iletildiğinde, sıradaki ilk mutfak toplantısında öncelikli gündemler başlığında konuyu sıraya alıyoruz. Katılıma bir itiraz gelmediyse etkinliğe gönüllü seçiyoruz. Her talepte, katılımda temsili kooperatife yaymak için, çalışmaya yeni katılanları teşvik edecek şekilde rotasyona öncelik veriyoruz.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bu türden talepler etkinliğimiz sırasında veya katıldığımız herhangi bir etkinlik esnasında gelirse -yine önceden bilgi alma beklentimizi sonraki olası benzer durumlar için karşı tarafa iletip- mutfak iletişim grubuna bunu (genellikle whatsapp) bildiriyoruz. İletişim grubundan kısa süre içinde itiraz gelmesi/gelmemesi kesin olamayabiliyor.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bu tür durumlarda da herhangi bir sorunun önüne geçebilmek için (olağan, beklediğimiz işleyişinde de olması gerektiği gibi):
          </p>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="font-semibold">1)</strong> Görüşmenin gerçekleştiği her koşulda kurumlardan, yazılı veya görüntülü kaydın kamuoyuyla paylaşılmadan önce kooperatife yollanmasını talep ediyoruz. Kuruma, kendilerine geri dönüşümüzün talep ettikleri zamana yetişmeyebileceğini önden bildiriyor, kooperatifin içine sinecek şekilde yayına onay (şu anda bununla ilgili net bir teamül yok ancak onay süresi için mutfakta 3 gün veya 1 hafta gibi bir süre belirleyebiliriz) almasını beklemelerini talep ediyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="font-semibold">2)</strong> Görüşme için gönüllünün/lerin, Kooperatifin KKKA etkinliklerinde veya sunum yaptıkları başka etkinliklerde kullandığı temel metin ve eğitim biriminin hazırladığı sunumla uyumlu konuşmasını, bu metnin içeriği dışında kalabilecek kişisel görüşlerini mümkün olduğunca sınırlı tutmasını veya anlatacaksa kooperatiften bağımsız kişisel görüşü olduğunu belirterek konuşmasını bekliyoruz.
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

