"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function BelgeTakipArsiv() {
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
          <span className="text-gray-900 dark:text-white font-medium">Belge Takip ve Arşiv Birimi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Belge Takip ve Arşiv Birimi Çalışma Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            16.01.2020
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Belge Takip ve Arşiv Birimi kooperatifle ilgili kazanılan bilgi birikiminin sistematik şekilde muhafaza edilmesi, bu birikimin aktarılması ve kooperatifi ilgilendiren tüm belgelerin mutfak gönüllüleri tarafından ulaşılabilecek şekilde depolanmasından sorumludur.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bahsedilen arşiv kdkkoop.belge@gmail.com hesabı üzerinden kontrol edilmektedir. Söz konusu arşiv Google'ın sunduğu bulut depolama sistemi olan Google Drive'da tutulmaktadır. Google drive dosyalara eşzamanlı erişim ve dosya düzenleme seçeneği sunmaktadır. Kadıköy Kooperatifi Arşivi'nin teknik olarak sahibi kdkkoop.belge@gmail.com hesabı olarak gözükmektedir.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            kdkkoop.belge@gmail.com hesabı aynı zamanda kdkkoop@gmail.com hesabına ikinci e-posta adresi olarak tanımlandığından, güvenlikle ilgili nadiren bildirim gelmekte ve diğer hesaba erişim sorunu yaşandığında konuyla ilgili destek vermektedir.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Dijital Arşivin Yönetiminde Dikkat Edilecek Noktalar
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
              <li>Arşive eklenen her dosyanın isminin (dosyanın ekranın üst kısmındaki arama kısmından da rahatlıkla bulunabilmesi için) tarih (YYYYAAGG) ve içerik bilgisi (Toplantı notu, Kira Ödemesi, Vergi Levhası vb.) içerecek şekilde oluşturulması gereklidir.</li>
              <li>Arşive eklenecek her belgenin uygun dizin hiyerarşisinde olduğuna emin olunmalıdır.</li>
              <li>Arşivin yedeklenmesi düzenli olarak yapılmalıdır. Google servislerine erişimde sorun yaşanması ihtimaline karşılık bu işlem yapılmalıdır.</li>
              <li>Tüm arşivin tek seferde indirilmesi hem çok uzun sürmektedir hem de parça parça inen sıkıştırılmış dosyaların (her biri 2 GB civarında -azami sınır- oluyor) birleştirilerek açılması ya da açıldıktan sonra birleştirilmesi çok zor oluyor.</li>
              <li>Yedekleme işinin dizinler halinde, elle ve sırayla yapılması çok daha sağlıklıdır. Mesela önce "Çalışma Birimleri", ardından "Toplantı Notları" vb.</li>
              <li>Yedekleme işleminin ayda bir yapılması önerilir.</li>
              <li>Arşivde sık değişen sipariş formu ya da kişilerin oluşturduğu geçici belgelerin haricindeki tüm belgelerin sahipliğinin arşiv hesabında olması gerekmektedir.</li>
              <li>Arşive konulacak her belgenin önce arşiv birimine iletilmesi sonrasında da arşiv biriminin bu belgeyi uygun dizine koyması verimli bir yöntem olmadığından kişilerin yüklediği belgelerin sahipliklerini arşiv birimine aktarmaları gerekmektedir. Yalnızca google belgelerin (Google Sheets, Google Docs vb.) sahiplikleri aktarılabildiğinden diğer belgelerin arşiv birimi sorumlusu tarafından kopyalanarak tekrar oluşturulması ve eskisinin silinmesi gerekmektedir.</li>
              <li>Arşivdeki hangi dosyanın kime ait olduğunu bulabilmek için kullanılabilecek bir uygulama var, adı WhoHasAccess.com: User Management for Google Drive - Analyze, Discover, Revoke. Bu uygulamanın çalışması için yetki vermek gerekiyor ve işlem biraz uzun sürüyor ancak sonunda ayrıntılı bir rapor sunuyor.</li>
              <li>Kişilerin de arada (3 ayda 1 gibi) arşivde hangi dosyaların kendilerine ait olduğunu taraması gerekiyor.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Haftalık İşler
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Haftalık Toplantı Notlarının Arşivlenmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Mutfak ve teorik perşembe toplantı notlarının, şablona uygunluğu kontrol alınır. Varsa, notlara dair düzeltmeler yapılır. Şimdiye kadar kullanılan dosya isimlendirme formatı şu şekildedir: YılAyGün-Dosyanın İçeriğini Belirtir İsim formatında aralarında noktalama veya boşluk kullanılmadan, ör:20190127 - Mutfak ToplantıNotları. Arşivleme sırasında mevcut isimlendirmeye sadık kalınarak toplantı notları PDF formatında Toplantı Notları klasöründe arşivlenir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Dikkat edilecek hususlar: dosyanın isimlendirilmesi, notların mevcut şablona uygunluğu, dosyanın formatı (pdf veya doc), dosyanın üst klasörünün içeriğe uygunluğu.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                E-posta Grubunda Paylaşılan Çeşitli Belgelerin Arşivlenmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Görüşme notları, basında çıkanlar, bir konu özelinde yapılmış araştırma notları gibi belgeler grupla paylaşılırken arşiv hesabına genelde yönlendirme yapılmıyor. İlgili belgede tarih, başlık vb. bilgiler yok ise bunlar belgenin içine eklenerek ilgili yerde arşivlenir. Genel olarak yazışmalarda (Whatsaap, e-posta grubu vb.) paylaşılan her belgenin arşivlenme niteliği olup olmadığı değerlendirilmelidir.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Ürün Faturalarının Arşivlenmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ürün faturaları takip edilmesi önemli yasal belgelerden olduğundan bir süre mali birim tarafından arşivlemiştir. Ancak birimin iş yoğunluğu sebebiyle artık bu işi arşiv birimi yapmaktadır. Eksik kalan faturalar dikkate alınmadan bugünden itibaren arşivleme yapılmalıdır.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Aylık Düzende Yapılan İşler
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Birim Klasörlerinin Kontrol Edilmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Klasörler düzen ve içerik bakımından kontrol edilerek, eksik veya yanlış klasörleme tespit edilirse birimden bilgi talep edilir. Birim toplantı notlarının arşive yüklenmesi birim sorumluluğundadır, ancak birim toplantı notları grupla paylaşıldığında arşiv birimi dosyanın arşivlenip arşivlenmediğini kontrol ederek takip sürecini kolaylaştırabilir ve gerekliyse birime hatırlatma yapar.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Kira Ödemesi Dekontlarının Arşivlenmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kira ve dükkan için apartmana ödenen masraflar (aidat, yakıt vb.) takipte zorluk yaratması sebebiyle diğer ödeme dekontlarından farklı olarak hâlâ ayrıca arşivlenmektedir.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Vergi Tahakkuk, Beyanname ve Ödeme Dekontlarının Arşivlenmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Vergi tahakkuk ve beyannameleri yalnızca yönetim kurulu üyelerine iletildiğinden ortak erişim alanında bulundurulması açısından arşivlenmektedir. Üç farklı vergi için ayrı dizinler mevcuttur: KDV, Muhtasar (Stopaj), Kurumlar Geçici Vergisi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ayrıca ödenen vergiler tablosunun YK tarafından güncellendiği teyit edilmelidir.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Mali Müşavirle İlgili Belgeler
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Mali müşavire yapılan aylık ödemeler, mali müşavirle yapılan yıllık sözleşmeler vb. tüm resmi evrağın da arşivlenmesi gerekmektedir.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Dükkan ve Bazı Diğer Klasörlerde Yeni Aya Ait Boş Klasör Oluşturulması
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Sipariş formları, toplantı notları gibi klasörler.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Çalıştay ve Pazar Toplantılarına Ait Notların ve Görsellerin Arşivlenmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Toplantı notlarının, şablona uygunluğu kontrol edilir. Varsa, notlara dair düzeltmeler alınır. Şimdiye kadar kullanılan dosya isimlendirme formatı şu şekildedir: (YılAyGün-Dosyanın İçeriğini Belirtir İsim formatında aralarında noktalama veya boşluk kullanılmadan ör:20190127 - 19. Çalıştay Notları) Arşivleme sırasında mevcut isimlendirmeye sadık kalınarak toplantı notları word ve PDF formatında Toplantı Notları klasöründe ilgili yerde varsa fotoğraflarla birlikte arşivlenir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Dikkat edilecek hususlar: dosyanın isimlendirilmesi, notların mevcut şablona uygunluğu, dosyanın formatı (pdf veya doc), dosyanın üst klasörü
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Dönemsel İşler
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Yetki Düzenlemesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Arşivin, tüm mutfak üyelerinin erişebileceği şeffaf bir yapı olması esas alınmıştır. Bu doğrultuda tüm arşiv mutfak gönüllülerinin görüntülemesine açıktır. Bununla genel olarak düzenleme yetkisi birim çalışanları veya ilgili sorumlulardadır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Arşive erişim en temelde arşiv bağlantısının mutfak google grubuyla "salt görüntüleme" izni olacak şekilde paylaşılarak sağlanmıştır. Ortak erişimde ve düzenlemeye açık olması gereken belgeler ise erişim izni talebi geldikçe, uygunsa teker teker "düzenlemeye açık" şekilde güncellenmektedir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Google grupların teknik kısıtlılığı sebebiyle mutfak e-posta grubundan zaman içerisinde ayrılanların erişim izinlerinin devam ettiğini kabul ederek çok sayıda ayrılan olduğunda, nadiren de olsa arşive tanımlanmış tüm izinlerin ayrı ayrı iptal edilmesi ve tekrar mutfak grubu için "salt görüntüleme" olarak yeniden izin tanımlanması gerekmektedir.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Rotasyon Sonrası Birim Klasörlerine Erişim İzinlerinin Düzenlenmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Her rotasyon sonrası birim çalışanları değişebileceğinden, birim üyelerine çalıştıkları birimler içerisinde tanımlanan düzenleme yetkileri güncellenmelidir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Dikkat edilecek hususlar: Mali Birim'in hem Çalışma Birimleri klasörü içerisinde hem de Mali Konular ana klasöründe düzenleme yetkisi olmalıdır. Yönetim Kurulunun da hem Yönetim Kurulu hem de Mali Konular klasöründe düzenleme yetkisi olmaldır. (Ödemelerin yapılması ve ilgili tablolara işlenebilmesi yönetim kurulunun sorumluluğunda olduğundan)
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Çalışmaya Yeni Katılanlara Arşivle İlgili Bilgilendirme E-postası Gönderilmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Google grupların teknik kısıtlılığı sebebiyle mutfak e-posta grubuna yeni katılanlar arşivi kendi drive'larında doğrudan görüntüleyememekte ve arşivle ilgili otomatik bir bildirim almamaktadır. Bu sebeple mutfağa yeni katılan kişilere bilgilendirme yapılmaktadır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Mutfak grubuna yeni katılmış kişilerin isim ve e-posta adresleri Koordinasyon Biriminin trello'yla ilgilenen sorumlusu tarafından kdkkoop.belge@gmail.com hesabına e-postayla gönderilir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                İdealde, yeni katılan arkadaşlara arşivle ilgili bilgi verilmesi ve arşivin kabaca tanıtılması işi eşlikçilerin sorumluluğundadır. Bununla birlikte şimdiye kadar bu sürecin atlanılmasına istinaden yeni katılanlara kısa bir bilgilendirme e-postası atılmaktadır:
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg my-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
{`Merhaba XY,
Drive erişimi konusunda bir sıkıntı olup olmadığını teyit amacıyla yazıyorum. 
https://drive.google.com/open?id=0B0cHD0tLhlfMd09sek9kOHNXZTA bağlantısına tıklayarak doğrudan arşive erişebiliyor olman gerekiyor. Arşiv klasörünün tamamında görüntüleme yetkin, çalıştığın birim klasöründe ise değiştirme yetkin olmalı. Bu bilgiyi paylaştığında o izni de tamamlayabiliriz. 
Drive'la ilgili henüz pek bilginiz yoksa, lütfen eşlikçinize veya bana danışmaktan çekinmeyin.
(E-posta adresi google uzantılı olmayan hesaplar bazen erişimde sıkıntı yaşıyor, bazen yaşamıyor, böyle bir durum söz konusu olursa yaz lütfen.)
Arşiv klasörünü kendi Drive anasayfanda göremiyorsan ve görmek istiyorsan, Kadıköy Kooperatifi Arşivi klasöründeyken, klasör adının yazdığı üst satırda "Drive'ıma ekle" seçeneğini bulup seçebilirsin. 
Selamlar,
Belge Takibi ve Arşivleme Birimi`}
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Dikkat edilecek hususlar: Toplantıya bir kere katılan ancak sonrasında çalışmaya devam etmeyen arkadaşlar olduğu için Arşivle İlgili Bilgilendirme e-postasını yollamadan önce yeni arkadaşların katılım durumunun gözlemlenmesi ve çalışmaya aslında dahil olamamış kişilerle arşiv bilgisinin paylaşılmaması önemlidir.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Arşivin Harici Diskte Yedeklenmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Arşive erişimde sıkıntı yaşanması, sunuculara ulaşılamaması veya karşılaşabileceğimiz sorunlar karşısında elimizde en güncel haliyle arşivin bulunabilmesi adına düzenli olarak yedek alınması gerekmektedir.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Etkinlik Klasörleri Oluşturulması, Düzenlenmesi ve Takip Edilmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Dönemsel ve geçici çalışmalar için gereken dizinlerin oluşturulması ve sorumlu kişilere değişiklik yapma yetkisinin verilmesi.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Belge Yönetimi ve Düzen Kontrolü
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Belgenin arşivlenmesi sırasında mevcut isimlendirmeye sadık kalındığı ve doğru klasörde arşivlendiği teyit edilir. Güncelliğini yitirdiği düşünülen belgeler var ise (SSS veya birim iş tanımları gib) içerik olarak güncellenme ihtiyacının olup olmadığının teyit edilmesi ve ilgili birimlere/mutfağa konuyla ilgili bilgi verilir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Artık başvurulmayan ve eski bir belge söz konusu ise aynı klasör içerisinde oluşturulacak Arşiv (Aktif Olmayanlar) klasöründe arşivlenir.
              </p>
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

