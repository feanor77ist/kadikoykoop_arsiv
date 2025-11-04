"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useState, useEffect } from "react";

export default function AYTKBulteni() {
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
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/modal2.webp"
          alt=""
          className="fixed inset-0 w-full h-full object-cover opacity-[0.18] blur-[1px] dark:opacity-[0.22]"
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/yayinlar" className="hover:text-blue-600 dark:hover:text-blue-400">Kooperatif Yayında</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">AYTK Bültenine Kadıköy Kooperatifi</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AYTK Bültenine Kadıköy Kooperatifi
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Aralık 2018
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold text-lg">
              Anadolu'da Yaşam Tüketim Kooperatifi Bülteni İçin Hazırlanan Yazı - Aralık 2018
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xl font-bold">
              Kadıköy'de başka bir tüketim mümkün!
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi'nden haberiniz var mı? Kooperatif, çalışmalarına 2014 yılında başladı, 2016'da resmi olarak tüketim kooperatifi haline geldi ve Caferağa mahallesinde dükkanını açtı. Çalışmalarını aslen ilçe temelinde yürüten Kadıköy Kooperatifi, kentteki diğer kooperatiflerle ve toplumsal hareketlerle de yoğun dayanışma içinde: Kendini ülke ve dünya çapındaki gıda ağlarının, hareketlerinin parçası olarak görüyor.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kooperatifin hedefi ne?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Günümüzde tek tek tüketiciler olarak "sağlıklı" gıda peşinde koşmamız mümkün, ancak bu, olsa olsa geçici bir çözüm sunuyor. Sağlıklı beslenme isteğimizin karşısına temel engel olarak gıda şirketlerinin dikildiğini görüyoruz. Hükümetler de bu şirketlerin egemenliğini destekleyecek politikalar güdüyor. Bu açıdan, bizlerin de şirketlerden ve devletten bağımsız, kolektif yapılar kurmak dışında pek bir imkânımız yok. Bu anlamda Kadıköy Kooperatifi de, diğer kooperatifler gibi, üyelerinin ihtiyaçlarına somut çözümler bulan bir dayanışma ağı. Amacı, kooperatif üyelerinin sosyal ve iktisadi yaşam pratiklerini güçlendirmek, yalnızlık hissini aşmak, bireysel gibi görünen sorunlarımıza kolektif çözümler bulmak.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi bu amaçlar için yoluna devam ediyor...
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kooperatif nasıl kuruldu?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi fikrinin temelleri, Gezi direnişi sonrasında oluşan park ve mahalle dayanışmaları dönemine kadar geri gidiyor. Ama dayanışmaların zamanla zayıflaması sonucunda, kooperatif çalışması bağımsız bir hale geldi. İlk olarak Caferağa Dayanışması içerisinde bir "Organik Pazar" çalışması yapılmış, ardından diğer mahalle ve park dayanışmaları ile bu konuda iletişime geçilmiş ve de bir Kooperatif Çalışma Grubu oluşmuştu. Grup bir kooperatif modeli üzerine çalışırken, genel prensipleri belirlemek için bir çalıştay düzenledi. Şubat 2014'teki çalıştay sonucu bir Kooperatif Model Taslağı oluştu. Elbette, bu süreçte Anadolu'da Yaşam gibi kooperatifler zengin bir deneyim aktarımı yaptı, dayanışma gösterdi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatifin ilk somut adımı 2015 yılı başında atıldı: "Kadıköy Tüketim Kooperatifi Girişimi" olarak çeşitli küçük üreticilerden ürün siparişi verildi. İlk ürün paketi için 50 kişiden alınan siparişler, şenlikli bir etkinlikle dağıtıldı. Birinci paketin ardından, ikinci paket 100, üçüncü paket 200, dördüncü paket 300 ve beşinci paket 350 kişiye ulaştı. Artan ilgi sonucunda kooperatifin resmi bir yapıya kavuşmasına karar verildi. Ağustos 2016'da tutulan kooperatif dükkanı, 6 Kasım'da çalışmaya başladı.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Günümüzde Kooperatif dükkanı gönüllülerin emeğiyle işliyor. Nöbet esaslı açılıp kapanan mekanda ürün satışı yapılıyor. Hafta içi akşam saatleri, hafta sonu gün boyu açık olan dükkana, ülkenin çok farklı noktalarından zeytinyağından bala, yumurtadan tekstile çeşitli ürünler geliyor: Ayrıca gelecek süreç için doğal temizlik ürünleri gibi gıda dışı ürünler de kooperatifin gündeminde.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kooperatifin ilkeleri neler?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi faaliyetlerini bir dizi çalıştayda geliştirdiği şu ilkelerle yürütüyor:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
              <li><strong>Küçük üreticiyle aracısız çalışmak:</strong> Tüketim ürünlerini, küçük üretim yapan, kooperatiflerde örgütlenmiş veya örgütlenmeye çalışan üreticilerden, aracısız alıyor. Bu bağlamda kooperatif sadece işin tüketim boyutuna odaklanmıyor, ekolojik tarım pratiklerini de gündemine alıyor.</li>
              
              <li><strong>Üretim ve tüketim üzerinde karşılıklı inisiyatif:</strong> Üretim ve tüketim süreçlerini bağlamak için, üretici ve tüketicilerin diyalog kurmasını hedefliyor. Buradaki amaç, üreticinin neyi nasıl üreteceğine, giderek tüketicilerle beraber karar vermesi.</li>
              
              <li><strong>Kolektif çalışma ve paylaşım:</strong> Kooperatif, tüm karar süreçlerinin şeffaf ve katılımcı bir çerçevede işlemesini hedefliyor: Gönüllülerin sürece eşit bir şekilde katılabilmesi için eğitimler düzenliyor.</li>
              
              <li><strong>Ekolojik - toplumsal ilişkiler:</strong> Üretim ve tüketim ilişkilerinde toplumsal faydayı esas alıyor, doğa ile dost bir yaşamı destekliyor. Emeği ve doğayı savunuyor.</li>
              
              <li><strong>Toplumsal dayanışma:</strong> Çeşitli kooperatifler ve topluluklar ile beraber çalışmayı, kooperatifçiliği yaygınlaştırmayı amaçlıyor. Önceliği farklı toplumsal kesimlerle dayanışma olduğu için, kâr amacı gütmüyor, kâr payı dağıtmıyor.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kooperatif nasıl işliyor?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi, çalışmalarını sistemli biçimde yürütmek için mekanizmalar geliştirdi. Bu amaçla haftalık ve aylık düzenli toplantılar yapıyor, bir dizi çalışma birimi bulunuyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatife katılmak isteyen bir gönüllü, öncelikle Kadıköy Kooperatifi Kendini Anlatıyor toplantısına geliyor, ardından da bir eğitime katılıyor. Bunun üzerine kooperatifin haftalık toplantılarına katılmaya başlıyor. Temel pratik işlerin konuşulduğu bu toplantılar, tüm ortaklar ve gönüllülere açık. Ayrıca kooperatif belli konuları daha ayrıntılı tartışmak için ayda bir çalıştay da düzenliyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Her gönüllü arkadaşın kooperatifin bir biriminde aktif olarak yer alması bekleniyor. Yabancılaşma olmaması için de, kişiler belli sürelerle birimler arasında görev değiştiriyor. Örneğin İletişim Birimi, kooperatifin gönüllülerle düzenli iletişimini sağlıyor. Ayrıca kooperatifin etkinliklerini sosyal medyada paylaşıyor. Örgütlenme ve Kurumsal İlişkiler Birimi benzer faaliyet yürüten kooperatiflerle, gıda topluluklarıyla ilişkiler kuruyor, ortak faaliyet kanallarını araştırıyor. Kooperatife yeni katılacak bireyler için aylık toplantılar düzenliyor. Eğitim Birimi, kooperatifin çalışma biçimini ve ilkelerini yeni katılımcılara aktarıyor, yeni katılımcılar için aylık "genel ortak eğitimi" çalışmasını yapıyor. Gıda Ürünleri Birimi ve Gıda Dışı Ürünler Birimleri, ürünlerin temin edilmesi, üreticilerle bağlantı kurulması ve üretici ziyaretlerinin düzenlenmesinden sorumlu. Koordinasyon birimi aslen iş takibi süreçlerine odaklanırken, Mali Birim finansal süreçleri yönetiyor. Arşiv Birimi ise kooperatifin ürettiği belgeleri depoluyor ve takip ediyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-8 font-semibold text-lg">
              Başka bir tüketim mümkün: İyi ki kooperatifler var, iyi ki dayanışma var!
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Kadıköy Kooperatifi adres: Hacı Ahmet Bey Sokak No:1 Caferağa/Kadıköy Istanbul.
            </p>
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
              href="/yayinlar" 
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
    </div>
  );
}

