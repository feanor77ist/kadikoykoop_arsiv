"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function TuketimKooperatifi() {
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
            <span className="text-gray-900 dark:text-white font-medium">Tüketim Kooperatifi</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tüketim Kooperatifi
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatif, bir topluluğun üretim, dağıtım, paylaşım ve tüketim ilişkilerini birlikte üretme ve bu süreçte beraber çalışma ilkesiyle gerçekleştirdiği bir örgütlenmedir. (Kadıköy kooperatifi)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tüketim kooperatifleri, benzer tüketim ihtiyaç ve ilkeleri olan bir grup insanın bir araya gelerek, doğrudan üreticiden alım yapması ve sonra ürünü ortaklarına dağıtması ilkesine dayanıyor. Tüketim kooperatiflerinin sağladığı en önemli avantajlardan biri, ürünlerin perakende satış fiyatından çok daha düşük fiyatlara temin edilebilmesi. Ama bu tek avantaj değil. Kooperatif, belirli ilkeler doğrultusunda ve yüksek kalitede üretim yapan üreticilerin seçilmesini, dahası, bu üreticilerin üretim süreçlerine etki edilebilmesini sağlıyor. Şüpheli yöntemlerle ve bolca zehirli madde kullanarak üretim yapan büyük üretici yerine, küçük ve doğal olan tercih ediliyor. Böylece, pasif tüketiciden aktif tüketiciye dönüşülüyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hukuki olarak kooperatifler şirkete benziyor. Kooperatif kurmak için en az 7 ortak gerekiyor. Ortaklar, gönüllülük esasına göre kooperatifte çeşitli görevler üstleniyorlar. (Zehirsiz ev.com sitesinden alıntılanmıştır)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatifler üretici ile tüketici arasındaki vurguncuları ortadan kaldırır. Çiftçinin alın terinin karşılığını almasını, tüketicilerin ise daha ucuz ve sağlıklı gıdaya erişmesini sağlar. Sömürüyü ortadan kaldırmaz, fakat minimuma indirir. Kaliteli gıdayla tüketiciyi buluşturur. Halkın nereden beslendiğini, kendisine besin maddesini kimin ürettiğini bilmesine zemin sağlar, isteyen gerektiğinde gidip yerinde görebilir. Hem üretici ve tüketici arasında doğrudan bir bağ kurulmuş olur, hem beslendiği ürünlerin nereden kimler tarafından nasıl üretildiğini görebilir. (Abdullah AYSU)
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Şirketin amaçları ile kooperatifin amaçları nelerdir?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Şirketin amacı; hissedarlarının (ortaklarının) koydukları sermayeye en fazla kârı sağlamaktır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatiflerin amacı ise; ortaklarını aracı tüccara ve sanayiciye karşı korumak, bu aracıların cebine gidecek olan kârı, ortaklarının cebinde tutmak bu yolla ortaklarını tüccar ve sanayiciye sömürtmeden kazancını arttırmaktır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Şirketi kim, kooperatifi kimler yönetir? Şirket ve kooperatiflerde kimin/kimlerin söz ve karar hakkı vardır?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Şirketlerde; en çok sermaye koyanın sözü geçer. Kararları o alır. Şirketi de en çok sermayeyi koyan yönetir. Hisse olarak sermayesi arttıkça alacağı kâr da o oran da artar.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatifler ise; sermayelerin, payların birliği değildir. Kooperatiflerde üye kooperatiften yaptığı alış veriş oranında pay alır. Bir ortak kooperatiften fazla pay almak istiyorsa kooperatifle daha fazla alış veriş yapmak durumundadır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatifte kararları ortaklar alır ve ortaklar yönetir. Üyeler, kooperatiflerin faaliyetlerinde eşit derecede sorumludur. Kooperatifte herkesin eşit oyu vardır. Yani, her üyenin bir oyu vardır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Şirketlerde ise oy adedini, sahip olunan pay ve sermaye oranı belirler. Şirketlerde ortaklar eşit değildir. Başka bir deyişle şirketlerde oy adedi satın aldığı ve alacağı pay, koyduğu/koyacağı sermaye oranına göre azalır veya artar.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatifte üye (birey) her şeydir; belirleyendir, yönetendir; her üye, üyesi olduğu kooperatifi yönetme hakkı vardır. Şirkette ise, sermaye yani, konulan pay ve para miktarı her şeydir; belirleyen paradır, yöneten de en çok parayı koyandır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Özetleyecek olursak, kooperatif; emek kesiminin (yani emeği ile geçinenlerin) ortaklaşa kurdukları, aracılara yani, vurguncu tüccar ve sanayiciye karşı kendilerini korudukları örgütleridir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              (Karabasan.net Kooperatif/Abdullah AYSU)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kısaca özetlersek tüketim kooperatifleri tüketicinin en doğal hakkı olan sağlıklı gıdaya erişim hakkını korumasına ve bunu yaparken de yalnızca bireysel haklarını değil aynı zamanda üreticinin haklarını da savunmasına zemin oluşturduğu için önemlidir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Türkiye'de Tüketim kooperatif örnekleri
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Kadıköy Kooperatifi</li>
              <li>Boğaziçi Mensupları Tüketim Kooperatifi</li>
            </ul>
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

