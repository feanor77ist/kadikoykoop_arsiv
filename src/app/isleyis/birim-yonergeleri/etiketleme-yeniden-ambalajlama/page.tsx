"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function EtiketlemeYenidenAmbalajlama() {
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
          <span className="text-gray-900 dark:text-white font-medium">Etiketleme ve Yeniden Ambalajlama Kriterleri Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Etiketleme ve Yeniden Ambalajlama Kriterleri Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            İlk oluşturulma tarihi: 27 Haziran 2020
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Revizyon tarihçesi:
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Amaç ve Kapsam
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bazı üreticilerimizin özel durumlarından dolayı yapamadıkları etiketleme ve yeniden ambalajlama sorununu çözebilmek ve ileriki dönemde üretim ayağımız olursa kullanabileceğimiz bu yetkimizin sınırlarını ve uymamız gereken mevzuatları göstermek için yazılmış bir yönergedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              23.11.2018 tarihinde yapılan çalıştay ve 27.02.2020 tarihli çalıştay sonuçlarına göre:
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Üreticilerin aşağıdaki kriterlerimize uygun olması beklenmektedir.
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4 mb-4">
              <li>Kadın</li>
              <li>Örgütlülük (Kooperatif/Dernek/Sendika üyesi/Vakıf/Kolektif) kolektif, kooperasyon</li>
              <li>Bizimle ve ilkelerimiz doğrultusunda dayanışma gösterenler</li>
              <li>Dayanışma / Dezavantajlı gruplar (LGBTİ, güvencesizler, göçmen, direnişteki gruplar)</li>
              <li>Tekil ve küçük üretici (geçimlilik)</li>
              <li>Yan meslek olarak üretim yapmak</li>
            </ol>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Etiket basabileceğimiz ürünlerin etiketli bir alternatifi olmamalı, üretici kesinlikle etiket basamıyor oluşu gerekmektedir. Kesinlikle etiket basamıyor olduğundan emin olduğumuz üreticiler için etiket basabiliriz. Konuyla ilgili yapılan aşağıdaki şema yol gösterici olabilir:
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kooperatifin Bakanlıktan Aldığı Yetki ve Çerçevesi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aldığımız yetki yeniden ambalajlama ve etiketleme yetkisidir. Bu yetkiyi kullandığımız her ürün için bütün sorumluluğu üstlenmiş bulunmaktayız. Herhangi bir olumsuzlukta cezai sorumluluğun tamamını üstlenmiş olmaktayız. Bu nedenle üreticiler ile bu sorumluluğu paylaşabilmek için ön sözleşme metni hazırlanmış bulunmaktadır. Sözleşme metnini aşağıdaki adresten görebilirsiniz:
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <a href="https://drive.google.com/file/d/1b4LH8QxVVrfTuD7RbVDoorRr1dMtA0wf/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                https://drive.google.com/file/d/1b4LH8QxVVrfTuD7RbVDoorRr1dMtA0wf/view
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Diğer Kooperatiflerden Böyle Bir Teklif Gelirse Ne Yapmalıyız?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Diğer kooperatifler etiket basılmasını talep ederse analiz, sözleşme ve analiz sorumluluklarını almaları koşuluyla işletme kayıt numaramızı kullanmalarına izin vereceğiz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Hangi Mevzuatlara Tâbiyiz? Hangi Ürünleri Etiketleyebiliyoruz? Hangilerini Yeniden Ambalajlayabiliyoruz?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong className="font-semibold">1-</strong> Yeniden ambalajlama yapabilmemiz için üretici Çiftçi Kayıt Sistemi'ne (ÇKS) kayıtlı olmalı (ÇKS yoksa üreticinin Müteşebbis Sertifikası sahibi olması gerekmektedir)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong className="font-semibold">2-</strong> Beslenme bildiriminin zorunlu olmadığı gıdaları yeniden ambalajlayabiliyor ve etiketleyebiliyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Özet olarak: Tek bileşenden oluşan işlenmemiş ürünler, tek bitki tek baharat veya bunların karışımı, tuz ve ikameleri, fermente sirkeler ve ikameleri.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ayrıntılı liste, 27 Haziran 2020 tarihiyle aşağıda verilmiştir. Ancak bu tarihten sonra yapılan değişiklikler için <a href="https://www.mevzuat.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.mevzuat.gov.tr/</a> adresinde TÜRK GIDA KODEKSİ GIDA ETİKETLEME VE TÜKETİCİLERİ BİLGİLENDİRME YÖNETMELİĞİ ek, Ek-14'e bakılması gerekmektedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yukarıdaki yönetmelikte beslenme bildiriminin zorunlu olmadığı gıdalara dayanak olan ifade ise Madde 19, fıkra 3'te yer almaktadır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yönetmelik Resmî Gazete Tarihi: 26.01.2017 Resmî Gazete Sayısı: 29960 Mükerrer'de yayımlandıktan sonra 27 Haziran 2020 tarihi itibarıyla değişiklik yapılmamıştır.
            </p>

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Ek-14
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                BESLENME BİLDİRİMİNİN ZORUNLU OLMADIĞI GIDALAR
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
                <li>Tek bir bileşenden veya bileşen grubundan oluşan işlenmemiş ürünler,</li>
                <li>Tek bir bileşenden veya bileşen grubundan oluşan ve sadece olgunlaşma prosesi uygulanan işlenmiş gıdalar,</li>
                <li>Bileşen olarak sadece karbondioksit ve/veya aroma vericiler ilave edilmiş olanlar dahil insan tüketimine uygun sular,</li>
                <li>Tek bir bitki, tek bir baharat veya bunların karışımları,</li>
                <li>Tuz ve tuz ikameleri,</li>
                <li>Sofralık tatlandırıcılar,</li>
                <li>Türk Gıda Kodeksi Kahve ve Kahve Ekstraktları Tebliği ve Türk Gıda Kodeksi Hindiba Ekstraktı Tebliği kapsamındaki ürünler,</li>
                <li>Çayın besin değerini değiştirmeyen aroma vericiler dışında başka bileşen içermeyen bitki ve meyve infüzyonları, çay, kafeinsiz çay, instant veya çözünebilir çay veya çay ekstraktı, kafeinsiz instant veya çözünebilir çay veya çay ekstraktı,</li>
                <li>Bileşen olarak sadece aroma vericiler ilave edilmiş olanlar dahil fermente sirkeler ve sirke ikameleri,</li>
                <li>Aroma vericiler,</li>
                <li>Gıda katkı maddeleri,</li>
                <li>İşlem yardımcıları,</li>
                <li>Gıda enzimleri,</li>
                <li>Jelatin,</li>
                <li>Reçel jelleştirme karışımı,</li>
                <li>Maya,</li>
                <li>Sakızlar,</li>
                <li>En geniş yüzeyi 25 cm² den daha küçük olan ambalajlarda veya kaplarda sunulan gıdalar,</li>
                <li>Üretici tarafından doğrudan son tüketiciye veya yerel perakendecilere satılan küçük miktarlardaki gıdalar.</li>
              </ol>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong className="font-semibold">3-</strong> Et, balık, süt, yumurta gibi hayvansal ürünleri yapamıyoruz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Yeniden Ambalajlamada Etiketleme Kuralları
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yeniden ambalajlama yaparken bize verilen izin kapsamında yeniden ambalajlama yapmamız gerekmekte. Yeniden ambalajlama iznimizin çerçevesini lütfen kontrol edin.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Çuvalla aldığımız ve mesela 1 kg paketlere ayırmak istediğimiz gıdayı etiketlememiz gerekıyorsa etiketlerin Türk Gıda Kodeksi tebliğlerine uyması gerekıyor. Haziran 2020 itibarıyla 40'tan fazla gıda tipi için özel tebliğ var (mesela salça tebliği). Bu tebliğlerde bildiğimiz, TÜRK GIDA KODEKSİ GIDA ETİKETLEME VE TÜKETİCİLERİ BİLGİLENDİRME YÖNETMELİĞİ'ndeki etiket bilgilerine ek bilgiler istenebiliyor. Kontrol edilmesi ve etiketin ilgili tebliğe bakarak hazırlanması gerekmekte.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bunun için öncelikle toplu alınan (mesela çuval, teneke) ürünün etiketi yönetmeliğe uyuyor mu kontrol etmemiz gerekıyor. Etiket yönetmeliğe uygunsa aynısını kullanabiliriz. Değilse üreticinin etiketi düzeltmesi veya etiketi kooperatifin yapması gerekmektedir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Yeniden Ambalajlama Yetkimizin Kapsamını Nasıl Genişletiriz?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Salça, tahın, reçel, nar ekşisi gibi ürünler için mevcut iznimize ek olarak faaliyet üretim izinleri de ekletmemiz gerekmekte. Örnek olarak, tahın faaliyet üretim izni eklenecek. Halı hazırda alınan yetki tek çeşit olan ürünler içindir. Bu ürünleri de etiketleyebilmek için Yönetim Kurulu'ndan iki kişinin (veya vekalet almış iki kişinin) Kadıköy Tarım İlçe Müdürlüğü'ne giderek sorumluluğu genişletmesi gerekmektedir. (Ek sorumluluklar için ek bir ücret ödenmeyecektir)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Aşağıdaki kanun ve mevzuatlar yol göstericidir:
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              <strong className="font-semibold">Kanun:</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              5996 sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu; maddeler 22, 30, 31
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              <strong className="font-semibold">Yönetmelikler:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li>Gıda Hijyen Yönetmeliği</li>
              <li>Hayvansal Gıdalar İçin Özel Hijyen Kuralları Yönetmeliği</li>
              <li>Hayvansal Gıdaların Resmî Kontrollerine İlişkin Resmî Kuralları Belirleyen Yönetmelik</li>
              <li>Türk Gıda Kodeksi Yönetmeliği</li>
              <li>Türk Gıda Kodeksi Gıda Etiketleme ve Tüketicileri Bilgilendirme</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              <strong className="font-semibold">Tebliğler:</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              Türk Gıda Kodeksi (gıda ve bileşenler) tebliğleri
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

