"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function ArabuluculukEkibi() {
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
          <span className="text-gray-900 dark:text-white font-medium">Arabuluculuk Ekibi Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Arabuluculuk Ekibi Yönergesi
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Arabuluculuk Ekibi'nin kuruluşu Kadıköy Kooperatif'inin temel ilkelerinden olan Kolektif Çalışma ve Paylaşım ilkesine dayanmaktadır.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kolektif Çalışma ve Paylaşım
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatif, bir araya gelmiş tüketicilerden ziyade, birlikte karar alan, çalışan ve paylaşım ilişkilerini geliştirmeyi hedefleyen bir örgütlenmedir. Tüm karar alma süreçlerinin denetlenebilir, şeffaf ve katılımcı bir çerçevede işlemesi hedeflenir. Kolektif çalışmanın gelişmesi ve ortakların ve gönüllülerin çalışmalara eşit bir şekilde katılabilmesi için eğitimler düzenler; kendisini yenileyebilecek öğrenme ve aktarım mekanizmaları geliştirir.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              AMAÇ:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Gönüllülük esasına dayalı olarak çalışılan kolektif yapılarda yaşanılan sorunları alternatif iletişim, eleştiri, öz-eleştiri vd ilişki anlayışları ile çözme yöntemleri üzerine çalışmalar yapmaktır.</li>
              <li>Kooperatifin düzgün işlemesini engelleyen durumlarla ilgili kişilerin yaşadıkları ve olası yaşayabilecekleri sorunların oluşmasını önleyecek ve çözecek ortamı (anlayış, kavrayış, kültür, dil) sağlamaktır.</li>
              <li>Bu çalışmalar sonucunda bir yöntem üzerinde yoğunlaşarak kooperatif gönüllülerinin bu yöntemi kavrayış olarak içselleştirebilmeleri için etkinlik, atölye ve grup çalışmaları düzenlemektir.</li>
            </ul>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Arabuluculuk ekibi bu sayede, gönüllü kolektif üretim ihtiyacının vazgeçilmezliğini, çatışmalar sonrası kolektif dayanışmadan vazgeçişlerin kısa bir süre sonra yeniden kolektif dayanışma ihtiyacı ile karşılaştığını düşünerek bu vazgeçiş durumlarına karşı önlem alma ve vazgeçme seçeneğini tüm çözüm süreçlerini tüketmenin sonrasına bırakmayı hedefler.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
            Eril şiddete dair vakalar bu Ekibin yetkisinde değil, kadın Ekibinin yetkisindedir.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Ekip Yapısı:
            </h2>
            <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Ekip en az 3 kişiden oluşur. Çoğunluğun kadın olması esastır.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Ekip üyeleri seçimi gönüllülük esasına dayanır.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Mevcut arabuluculuk ekibi üç kişiden oluşmaktadır: Ezgi, Güneş, Koray.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Ekipte rotasyon süresi 6 aydır. Rotasyon zorunludur.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Ekip içerisinde görüşülen vakalara ait bilgiler konunun muhatabı kişi/kişilerin onayı olmadan hiçbir kişi ile paylaşılmaz.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Ekip İşleyişi: Ekip 2 şekilde çalışır.
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Vaka Bazlı İşleyiş:
                </h3>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Vaka bazlı süreç, başvuru üzerinden işler.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Ekip başvuru yapılmadığı ancak çatışma oluştuğu durumlarda kişi/kişilerle iletişime geçerek arabuluculuk taleplerinin olup olmadığını öğrenir,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Arabuluculuk Ekibi katıldığı toplantılarda, gündemin 1 haftadan fazladır gündem olmaya devam etmesi ve tartışmanın 2 kişi arasında bir çatışmaya dönüştüğü durumlarda toplantı sonrasında ilgili kişilere konuyu konuşmayı önerir,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Şikayeti olan kişi Ekipteki kişilere/kişiye şikayetini yazılı veya sözlü biçimlerde iletir. Yazılı bildirim Ekip için oluşturulan ve tüm kooperatif üyeleri ile paylaşılan mail adresine yapılır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Ekipteki kişilere/kişiye iletilen şikayet Ekip tarafından değerlendirilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Öncelikle vaka ilgili kişilerle çözülmeye çalışılır. Sadece kişilerin konuyu anladıkları, çözüldüğü konusunda her iki tarafından beyanı alındıktan sonra konu kapatılabilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Eğer Ekip vakanın mutfakla paylaşılarak çözülmesini önerirse, kişilerin onayı ile mutfakta durum ile ilgili bilgi aktarımı yapılarak konu pazar toplantısında gündem olarak görüşülür.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Gerekli durumlarda Ekip dışarıdan uzman birinin desteğini talep edebilir ve arabuluculuk konusunda destek alabilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Vakalar ve uygulanan çözümler/yaptırımlar kişilerin beyanlarına yönelik olarak anonim ya da isimle kayıt altına alınır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Ekip belirli aralıklarla, vakalar üzerinden genel değerlendirmeler yapabilir.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Vaka Önleyici İşleyiş:
                </h3>
                <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Amaç kısmı kapsamında önleyici unsur olarak atölye, grup çalışmaları ve etkinlik düzenlemek.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Kolektif anlayış üzerindeki ilişkiler kavrayışına alternatif akımlara dair bildirimleri yayımlamak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Sadece gönüllülerimize ulaştıracağımız basılı bildiriler hazırlamak.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Tüm kooperatif gönüllülerinin Şiddetsiz İletişim eğitimi almasını organize eder,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>3 Aylık periyotlarla duygusal toplantılar organize eder;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Bu toplantılarda herkes sırayla ne hissettiğini, pozitif ve negatif dile getirir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Söz hakkı almamayı talep etmek kişinin bireysel tercihidir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Söz hakkı alan kişilerin ifadeleri sonrasında, kişinin aktarımıyla ilgili yorum yapılmaz sadece herkes kendi duygularını dile getirir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Ortak okuma çalışmaları ve değerlendirme toplantıları veya gündem oturumları almak,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">○</span>
                    <span>Etik tartışma kapsamında buluşmalar düzenleyerek ortak bir etik kavramı ve tartışma zemini çatısı oluşturur,</span>
                  </li>
                </ul>
              </div>
            </div>
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

