"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function EgitimArastirma() {
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
          <span className="text-gray-900 dark:text-white font-medium">Eğitim ve Araştırma Birimi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Eğitim ve Araştırma Birimi Yönergesi
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Birimin Yapısı
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>Birimin aktif işleyebilmesi için en az 4 kişinin birimde olması önerilir.</li>
              <li>İş bölümü biçimleri değişse de, işler rotasyon sistemiyle sürdürülür.</li>
              <li>Birimden ayrılacak gönüllüler, birime yeni katılan gönüllülere süreç ve işleyişle ilgili aktarım yapmakla yükümlüdür. Bu aktarım süreci şartlara göre değişken olabilmekle beraber optimum iki ay olarak önerilir.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Birimin Görevleri
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Eğitim Toplantısı Düzenleme
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Her ay bir defa, kooperatifte gönüllü olmak isteyenler için kooperatif ilkeleri ve işleyişinin detaylı aktarımının yapıldığı eğitim toplantısı düzenlenir.</li>
                  <li>O ayın KKKA etkinliğinin ardından yakın bir tarihe denk gelecek şekilde, birimdeki gönüllülerin uygunluğuna göre bir tarih ve saat belirlenir. Hafta içi günlerde saatin 20:00 olarak belirlenmesi önerilir.</li>
                  <li>Toplantı için o tarihlerde uygun bir mekan belirlenir, ayarlanır. Projeksiyon olması sunum yapabilmek açısından tercih sebebi olabilir ancak mutlak şart değildir.</li>
                  <li>Her ayın KKKA etkinliği sonrasında, KKKA katılımcılarının iletişim bilgileri Örgütlenme Biriminden alınıp birim drive klasöründe bulunan eğitim iletişim listesine eklenir. Toplantıdan en az üç gün önce, listeye yeni eklenen kişilerle, bir önceki ay eklenen ancak eğitime katılmayan kişilere toplantının ayrıntılarıyla ilgili bilgilendirme maili atılır. Mailin ekine Kadıköy Kooperatifi El Kitapçığı eklenir. İhtiyaç olduğu takdirde birimdekiler tarafından sms ile de ayrıca bilgilendirme yapılır.</li>
                  <li>Fiziksel toplantı yapma şartlarının bulunmadığı olağan dışı durumlarda, uzaktan toplantı uygulamaları (Skype, Zoom, Jitsi vb.) kullanılarak eğitim toplantısı gerçekleştirilebilir. Bunun için, Örgütlenme Biriminin bilgilerini ilettiği katılımcılarla iletişime geçilerek eğitime katılıp katılmayacakları teyit edilir. Eğitime katılacağını teyit eden katılımcılarla toplantı linki paylaşılır. Toplantı öncesinde, birim gönüllüleri sunumun bölümlerini paylaşır ve aktarım bu şekilde gerçekleşir.</li>
                  <li>Toplantı, kısa tanışmanın ardından birimin yapacağı sunum ve ardından soru-cevap şeklinde yürütülür. Sorulara daha etkin ve geniş cevap vermek adına toplantıda birimden en az iki kişi bulunur.</li>
                  <li>Toplantıdaki sunum ve aktarımların ardından katılımcılar sıradaki ilk mutfak toplantısına davet edilir.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Yeni Gönüllü Adaptasyon Süreci
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Kooperatife katılmış yeni gönüllülerin adaptasyon sürecini kolaylaştırmak için gerekli dökümanlar hazırlar.</li>
                  <li>Kooperatif driveında yer alan yönergeler, alınmış kararlar ve işleyişle ilgili süreçlerin derlendiği yeni gönüllü katılım dosyası bunun için hazırlanmıştır ve mutfaktaki değişim ve gelişimlere göre birim tarafından güncellenir.</li>
                  <li>Bu dosya yeni gönüllüye desteği kolaylaştırmak üzere eşlikçiler tarafından da kullanılabilir.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Birlikte Öğrenme Modeli
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Kooperatif içinde ve dışında 'birlikte öğrenme modeli'nin geliştirilmesi ve uygulanmasına ön ayak ya da destek olur.</li>
                  <li>Birlikte Öğrenme Modeli'ni içindeki çalışmaları, önerileri gerektikçe revize eder ve uygulanması için gerekli adımları başlatır ya da takip eder.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Etkinlik Düzenleme
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Gerektiğinde Kooperatif içinde veya dışında atölye, panel, çalıştay, atölye, film gösterimi vb. etkinlikler düzenler.</li>
                  <li>Dış gündemin getirdiklerine, mutfağın ihtiyacı ya da talebine göre belirlenen konularla ilgili etkinlikler düzenlenir. Konu önceliği birim değil mutfak tarafından belirlenir.</li>
                  <li>Düzenlenen etkinlikler için program oluşturma, mekan ayarlama, davet metni, afiş hazırlığı gibi işleri iletişim birimi desteğiyle eğitim birimi yürütür.</li>
                  <li>Bazı etkinliklerin sonunda birim tarafından rapor hazırlanır. Mutfağa ve gerekiyorsa iletişim birimi desteğiyle kooperatif dışındakilerle rapor paylaşılır.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Doküman Güncelleme
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Kooperatife dair yazılı dokümanların güncel kalması için içerik takibini yapar ve gerektiğinde yeni dokümanlar oluşturur.</li>
                  <li>Eğitime katılacaklara ve kooperatife gelen röportaj, görüşme, ödev taleplerine yanıt olarak gönderilen 'Kadıköy Kooperatifi El Kitapçığı' ve 'Sık Sorulan Sorular' dökümanları, kooperatifteki gelişim ve değişimlere göre birim tarafından güncellenir. Bunun için gerektiğinde ilgili birimlerden (İletişim, Koordinasyon) destek ya da görüş alır.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Öğrenimi Kolaylaştırıcı Materyaller
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Kooperatif içinde veya dışında öğrenimi kolaylaştırıcı materyaller hazırlar.</li>
                  <li>Üretici sorumlarının desteğiyle, dükkanda ürünlerin ve üreticilerin tanınmasına dair kartlar oluşturur.</li>
                  <li>Yeni üretici ve ürünlerin takibini yaparak kartların güncel kalmasını sağlar.</li>
                  <li>Yeni hazırlanan kartları, kooperatifin web sitesine konulması için ilgili birime (Teknik Koordinasyon? İletişim?) iletir.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Birim İçi İş Bölümü Önerisi
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>İş bölümü, birim gönüllülerinin sayısı ve dinamiklerine göre değişkenlik gösterebilir.</li>
              <li>Her ay rutin olan işlerin bir aylık rotasyonla yapılması önerilir.</li>
              <li>Rutin olmayan etkinlik düzenleme, materyal hazırlama-güncelleme gibi işlerde, işlerin mümkün olduğunca eşit bölüşülerek tamamlanması önerilir.</li>
              <li>Birimin kooperatife daha sağlıklı katkı sağlayabilmesi ve işlerin sağlıklı yürüyebilmesi açısından ayda bir toplantı yapılması önerilir.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Birim İletişim Araç ve Usulü
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Birim kooperatif içi veya dışı gerekli iletişimlerini, e-posta yoluyla sürdürür. Birimin e-mail adresi ve kullandığı web sitesi linki aşağıdadır.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>Webmail:</strong> <a href="http://www.kadikoykoop.org:2095/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">http://www.kadikoykoop.org:2095/</a>
                </p>
                <p>
                  <strong>Mail adresi:</strong> <a href="mailto:egitim@kadikoykoop.org" className="text-blue-600 dark:text-blue-400 hover:underline">egitim@kadikoykoop.org</a>
                </p>
              </div>
              <p className="text-sm italic">
                *Şifre bilgileri, yalnızca birim gönüllüleriyle paylaşılır.
              </p>
              <p className="text-sm italic">
                **E-posta ile ilgili teknik bir sıkıntı yaşanması durumunda, birimdeki bir kişinin bireysel hesabından 'Eğitim ve Araştırma Birimi Adına..' diyerek gerekli mail paylaşılabilir.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Birim, eğitim toplantılarında yaşanabilecek acil durum ihtimalini düşünerek, o eğitime katılacak bir gönüllünün telefon numarasını eğitime katılacak kişilerle paylaşabilir.</li>
                <li>Birimin whatsapp emojisi ?</li>
                <li>Birim içinde iletişim whatsapp grubundan ve gerektiğinde mail üzerinden yapılır.</li>
                <li>Örgütlenme birimi ile iletişim gerektiren işler için iki birimin ortak whatsapp grubu üzerinden çalışma yürütülür. Tüm birim üyeleri bu ortak gruba da üye olur.</li>
              </ul>
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

