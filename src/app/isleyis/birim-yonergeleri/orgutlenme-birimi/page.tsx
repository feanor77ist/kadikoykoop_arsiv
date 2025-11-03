"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function OrgutlenmeBirimi() {
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
          <span className="text-gray-900 dark:text-white font-medium">Örgütlenme Birimi Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Örgütlenme Birimi Yönergesi
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Birimin Görevleri:
            </h2>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Her ay düzenli olarak 'Kadıköy Kooperatifi Kendisini Anlatıyor' etkinliği düzenlemek:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                KKKA etkinliği Her ayın ilk Salı günü akşamı düzenlenir. Tarih gönüllülerin inisiyatifine göre değiştirilebilir. Etkinlikten bir hafta önce duyuru afişi hazırlanır ve yaygınlaştırılması için iletişim birimine iletilir. Etkinliğe örgütlenme biriminde iki kişinin katılımı yeterlidir. Birim üyeleri isterlerse etkinliğe dönüşümlü olarak katılabilirler. Etkinlik sırasında kısaca kooperatifin tarihi, ilkeleri, işleyişi, dükkân ve üreticiler ile ilgili bilgiler aktarılır. Etkinlik sonrası eğitime devam etmek isteyenlerin iletişim bilgileri alınarak drive'daki excell dosyasına kaydedilir (<a href="https://docs.google.com/spreadsheets/d/1uvqjxkp9Xyh9sMEbEhFVRw18GCgRF4oL/edit?dls=true#gid=815343455" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://docs.google.com/spreadsheets/d/1uvqjxkp9Xyh9sMEbEhFVRw18GCgRF4oL/edit?dls=true#gid=815343455</a>) ve eğitim birimine iletilir. Ayrıca katılımcıların bilgileri eğitim birimi ile ortak whatsapp grubuna aktarılır.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Kooperatif Dış Örgütlenme Etkinliklerini Düzenlemek:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Örgütlenme Birimi düzenli olarak Dış Örgütlenme Etkinlikleri düzenler. Bu etkinlikler KKKA etkinlikleri ile birleştirilebilir. Bugüne kadar yapılan etkinlikler panel, söyleşi, forum, film gösterimi, aşure etkinliği, üreticilerin davet edilmesi gibi etkinlikler olmuştur. Bu etkinliklerin organizasyonunda gerekli olursa mutfaktan yardım istenebilir. Etkinlik için yapılan giderler, masraf olarak karar defterine iletilmesi için Yönetim Kurulu'na, stoktan düşülmeleri için Mali Birim'e bildirilir.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Kooperatif İç Örgütlenme Etkinlikleri Düzenlemek:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatif gönüllülerinin bir araya gelmesi, birbirini tanıması, beraber sosyalleşmesi için yapılan etkinliklerdir. Bugüne kadar yapılan etkinlikler kahvaltı, yılbaşı kutlaması, içmece eğlenmece şeklinde olmuştur. Etkinlik için yapılan giderler, masraf olarak karar defterine iletilmesi için Yönetim Kurulu'na, stoktan düşülmeleri için Mali Birim'e bildirilir.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Yerelde Örgütlenme Faaliyetleri Yürütme:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatif kendi yerelindeki demokratik kitle örgütleri, kurum ve kuruluşlar, sendikalar, kolektifler vb yapılarla ilişkilerini geliştirmek, bu gruplarla demokrasi mücadelesi çerçevesinde bir dayanışma ağı kurabilmek için bir araya gelmeye çalışır. Bu amaçla Örgütlenme Birimi bu kurumlarla ilişkileri geliştirmek için çeşitli ziyaretler düzenlemeye, ortak etkinlikler yapmaya çalışır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ayrıca yerelde yaşayanlara ulaşmak için muhtarlarla ilişkileri geliştirme, komşuların kooperatife ilgisini arttırmak için çeşitli etkinlikleri düzenlemek örgütlenme biriminin görevleri arasındadır.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Yeni Kurulacak Kooperatiflere Destek Olmak:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Yeni kurulacak kooperatifler Kadıköy Kooperatifi'nden yardım isterlerse bu talep İletişim Birimi tarafından Örgütlenme Birimine aktarılır. Örgütlenme Birimi ilgili kooperatif girişimine öncelikle Kooperatif Kitini iletir. (<a href="https://docs.google.com/document/d/1W1tbi32BVvFdo_BqFtAoWMnRfYI-cO6p2kXgYd7LdnQ/edit" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://docs.google.com/document/d/1W1tbi32BVvFdo_BqFtAoWMnRfYI-cO6p2kXgYd7LdnQ/edit</a>) Eğer kooperatif girişiminin ayrıca destek ihtiyacı olursa bunlarla Örgütlenme Birimi ilgilenir. Kooperatif girişimleriyle doküman paylaşmak için mutfak onayı alınmasına gerek yoktur.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                E-posta adresinin düzenli olarak Kontrolü:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                orgutlenme@kadikoykoop.org adresine gelen e-postalar düzenli olarak kontrol edilir ve gelen sorulara cevap verilir.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Birimin İşleyişi:
            </h2>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birimin ideal gönüllü sayısı 4 kişidir. Böylece KKKA etkinlikleri 2-2 olmak üzere bölünebilir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>KKKA etkinliklerinin afişleri birim gönüllüleri tarafından sırayla yapılır. Afiş yapıldıktan sonra iletişim birimine aktarımı ve duyurunun takibi afişi yapan gönüllünün sorumluluğundadır.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Mutfak whatsapp grubuna, e-posta grubuna birim adına bir bilgilendirme ya da duyuru yapılacaksa öncesinde tüm birim gönüllülerinin onayının alınması gerekir. Örgütlenme e-posta adresinden gönderilecek olan mesajlar için de aynı şekilde tüm birim gönüllülerinin onayı gerekir. Bu nedenle birim içindeki yazışmalarda gönüllülerin mümkün olduğunca çabuk dönüş yapması beklenir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birimin whatsapp yazışmalarındaki sembolü örümcek ağıdır.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>KKKA dışındaki tüm etkinliklerin düzenlenmesinde tüm birim gönüllüleri görev alır.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>Birimin rotasyon süresi 6 ay ile 9 ay arasıdır.</span>
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

