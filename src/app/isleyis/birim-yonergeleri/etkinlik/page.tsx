"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function Etkinlik() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/isleyis" className="hover:text-blue-600 dark:hover:text-blue-400">İşleyiş</Link>
          <span>/</span>
          <Link href="/isleyis/birim-yonergeleri" className="hover:text-blue-600 dark:hover:text-blue-400">Birim Yönergeleri</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Etkinlik Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Etkinlik Yönergesi
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Yapılacaklar Listesi
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Etkinlik Öncesinde Yapılacaklar
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Etkinlik içeriğinin/temasının belirlenmesi</li>
                  <li>Etkinlik tipinin belirlenmesi</li>
                  <li>Tarih-saat-mekan belirlenmesi</li>
                  <li>Konuşmacıların belirlenmesi</li>
                  <li>Paydaşların belirlenmesi</li>
                  <li>Destekçilerin belirlenmesi</li>
                  <li>Malzeme tedariğinin belirlenmesi</li>
                  <li>Lojistik organizasyonun yapılması</li>
                  <li>Davet listesinin belirlenmesi</li>
                  <li>Duyuru metninin belirlenmesi (mail, sosyal medya, afiş vb.)</li>
                  <li>Çıktı alınacak malzemelerin belirlenmesi, tasarlanması, basılması</li>
                  <li>Afişlerin dost mekanlara mutfak gönüllüleri tarafından dağıtılması</li>
                  <li>Etkinlik masasında olacak malzemelerin temin edilmesi</li>
                  <li>Tadım malzemelerinin belirlenmesi ve temin edilmesi</li>
                  <li>Etkinlik aktivitesi organizasyonun yapılması (müzik, tiyatro, sergi vb.)</li>
                  <li>Fotoğraf çekimi organizasyonunun yapılması</li>
                  <li>Sosyal medya iletilerinin hazırlanması</li>
                  <li>Etkinlik akışının katılımcılar ve mutfak ile paylaşılması</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Etkinlik Gününde Yapılacaklar
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Mekanın etkinliğe uygun olarak düzenlenmesi</li>
                  <li>Etkinlik masasının düzenlenmesi</li>
                  <li>Tadım masasının hazırlanması</li>
                  <li>Müzik organizasyonun yapılması</li>
                  <li>Fotoğraf çekimi organizasyonunun yapılması (Toplu etkinlik fotoğrafı unutulmasın:)</li>
                  <li>Sosyal medya paylaşımlarının yapılması için İletişim Birimi ile koordineli çalışılması (Facebook story, Instagram story, Youtube-Instagram-Facebook canlı, twitter)</li>
                  <li>Gönüllü iletişim listesinin paylaşılması</li>
                  <li>Kapanış fotoğrafının çekilmesi</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Etkinlik Sonrasında Yapılacaklar
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Etkinlik masasında olan malzemelerin kutusuna konularak dükkana bırakılması</li>
                  <li>Tadım malzemelerinin dükkana bırakılması</li>
                  <li>Tedarik edilen malzemelerin, temin edilen yerlere teslim edilmesi (Çadır, branda, çay-kahve makinası vb.)</li>
                  <li>Mekanın teslim alındığı gibi bırakılması</li>
                  <li>Sosyal medyada etkinliğe katılanlara teşekkür mesajının paylaşılması</li>
                  <li>Gönüllü iletişim listesinin Eğitim ve Örgütlenme Birimi ile paylaşılması</li>
                  <li>Etkinlikle ilgili tüm dokümanların (Toplantı notları, değerlendirme raporu, fotoğraflar, video vb) arşivde etkinlik klasörüne yerleştirilmesi</li>
                </ul>
              </div>
            </div>
            <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-4">
              **Bazı maddelerin, etkinliğe göre değişebileceği göz önünde bulundurulmalıdır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Etkinlik Yönergesi Açıklamaları
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Etkinlik Tipi
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Etkinlikler ikiye ayrılır:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Dış etkinlik:</strong>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                      <li>Açık etkinlik: Kamuya açık etkinliklerdir.</li>
                      <li>Kapalı etkinlik: Belli bir gruba yönelik kapalı etkinliklerdir.</li>
                    </ul>
                  </li>
                  <li><strong>İç etkinlik:</strong> Sadece kooperatif katılımcılarına yönelik etkinliklerdir.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Mekan
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Etkinliğe uygun olarak mekan belirlenmelidir. Mekana, duyuru yapılmadan önce gidilip yerinde karar verilmelidir. Mekan, etkinliğin içeriğine ve yapısına göre tasarlanmalıdır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Davet Listesi
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Etkinliğe katılacak katılımcılara uygun olarak davetli listesi oluşturulmalıdır:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Koop üretici listesi</li>
                  <li>Kolektifler</li>
                  <li>Kooperatifler</li>
                  <li>Gıda toplulukları</li>
                  <li>Genel iletişim listesi</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Duyuru
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Etkinlik duyurusu fiziksel ve dijital ortamlarda iki hafta önce yapılmalıdır (en geç bir hafta önce).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Davet Metni
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Kurumsal davet metni ve bireysel davet metni hazırlanmalıdır. Davet metinleri etkinliğin amacı doğrultusunda düzenlenecektir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Afiş Hazırlanması
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Örnek etkinlik afişleri için şablonlar kullanılmalıdır. İletişim dili, font vb. belirlenmesi ve örnek şablon dosyasının olması gerekmektedir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Basılı Malzeme Organizasyonu
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Önceki basımlarda fiyat alınan özalit ve matbaa listesi kullanılmalıdır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Lojistik Organizasyonu
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Masa, sandalye sayısı yeterli değilse destekçi mekanlardan temin edilmelidir.</li>
                  <li>Etkinlik dış mekanda yapılacaksa hava durumuna bağlı olarak branda, tente, şemsiye organizasyonu yapılmalıdır.</li>
                  <li>Etkinlik mekanında çay ve kahve makinaları yoksa, temin edilebilecek dost mekan ve destekçilerden etkinlik öncesinde temin edilmelidir.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Etkinlik Masası
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Etkinliklere gidecek malzemeler bir kutuda dükkanda bulundurulacaktır:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Masa örtüsü</li>
                  <li>Broşür</li>
                  <li>Pankart</li>
                  <li>Excel boş gönüllü listesi</li>
                  <li>Koop Postalarının dijital halinin olduğu linkin olduğu karekod baskılı ayaklı küçük pano</li>
                  <li>Bez çanta</li>
                  <li>Gönüllüler için kooperatif rozeti</li>
                  <li>Makas, tel zımba, delgeç, kalem, kalın bant, ince bant</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Tadım Ürünlerinin Belirlenmesi
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Tadım yıldönümü etkinliği, dükkan önünde gerçekleşen ve tadım yapılan etkinliklerde yapılır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold">
                  Tadım hakkında genel kurallar:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Satışı yapılmayan ürünler tadım masasında yer almamalıdır.</li>
                  <li>Satışı henüz yapılmayan numune ürünler tadım masasında yer almamalıdır.</li>
                  <li>Satışının devamlılığı olmayan ürünler tadımda yer almamalıdır.</li>
                  <li>Tadım malzemeleri, ürün paketiyle birlikte masada yer almalı, ürün açıklamaları masada hazır bulundurulmalıdır.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3 mb-2">
                  <strong>Tadımda olabilecek temel ürünler:</strong> Çay, ekmek, zeytinyağı, bal, zeytin, salça, pekmez, vb
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  <strong>Ürünlerin tadımda kullanılması süreci:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Tadımda kullanılacak ürünler Çalışma Grubu tarafından belirlenir.</li>
                  <li>Ürüne göre etkinlik günü ya da öncesinde ürün alınır.</li>
                  <li>Artan ürünler dükkana geri getirilir.</li>
                  <li>Tadımda kullanılan ürünler fire olarak gösterilir.</li>
                  <li>Kasa defteri ve Pirot'ta etkinlik detayları ile birlikte not edilir.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3 mb-2">
                  <strong>Tadımda kullanılacak diğer ürünler temini:</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Tabak, kaşık, çatal, bıçak, kesme tahtası, makas, kase dükkandan temin edilir. Bu ürünlerin yeterli olmadığı durumlarda, Mutfak ekibinden destek istenir. Katılımcıların çatal, bardak gibi kişisel eşyalarını yanlarında getirmeleri beklenir ve sosyal medyada duyurusu etkinlik duyurusu ile birlikte yapılır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Sosyal Medya Duyuruları
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Çalışma Grubu, sosyal medya duyurularını hazırladıktan sonra İletişim Birimi ile koordineli çalışacaktır. Duyurular, etkinlik öncesi, esnasında ve sonrasında olmak üzere üç hareket planı ile planlamalıdır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Etkinlik Organizasyonu Kuralları
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Etkinlik öncesinde, Çalışma Grubu, Mutfak gönüllülerine yardım çağrısını etkinlikten en az 2 gün önce yapmalıdır.</li>
                  <li>Çalışma Grubu, etkinlik günü etkinlikten en az 1 saat öncesinde mekanda hazır olmalıdır.</li>
                  <li>Genel etkinlik takvimini Örgütlenme Birimi oluşturur ve takibini yapar.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Örgütlenme Biriminin Önerileri
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Etkinlikler için taşınacak malzemelerin kutu halinde dükkanda muhafaza edilmesi</li>
                  <li>Etkinliklerde sık kullanılan malzemelerin satın almasının yapılması: Çay-kahve makinası, üçlü ve altılı priz</li>
                  <li>Duyuru malzemelerinin basılması: Masa üstü ayaklı küçük panolar (Koop postası ve Gönüllü Olmak İster misiniz?) rozet vb.</li>
                  <li>100 x 30 cm pankart</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Hazırlanacak Dosyalar
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Dost mekanlar listesi</li>
                  <li>Kurumsal davet listesi (Odalar, kooperatifler, sendikalar, vs)</li>
                  <li>Kooperatifler listesi</li>
                  <li>Alternatif gıda ağları listesi</li>
                  <li>Kurumsal davet metni</li>
                  <li>Bireysel davet metni</li>
                  <li>Özalit ve matbaa listesi</li>
                  <li>Kooperatif dostlar listesi (müzik, video, fotoğraf çekimi, vs)</li>
                  <li>Destekçi listesi (Çay makinesi, kahve makinesi, sandalye, masa, tente, vs)</li>
                  <li>Örnek etkinlik afişleri</li>
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
      </main>

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
    </div>
  );
}

