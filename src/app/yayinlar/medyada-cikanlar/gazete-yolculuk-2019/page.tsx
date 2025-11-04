"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function GazeteYolculuk2019() {
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
            <Link href="/yayinlar/medyada-cikanlar" className="hover:text-blue-600 dark:hover:text-blue-400">Medyada Çıkan Haberler</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Gazete Yolculuk - 2019</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kooperatifleşme
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              2019 - Gazete Yolculuk Röportajı
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-8 break-words overflow-x-hidden">
            <div className="space-y-8">
              {/* Soru 1 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  1) Hem kapitalizmin küreselleşme süreciyle birlikte dünya çapında uygulanan tarım politikaları hem de Türkiye'deki tarım politikaları, yurttaşların gerçek gıdaya erişiminin önüne engeller getiriyor. Bu anlamda çiftçilerin ve üreticilerin de büyük sıkıntılar çektiği ve üretim metotlarını endüstrileşmeye uygun hale getirmek durumunda kaldıkları biliniyor. Hem küresel ölçekteki tarım politikalarını hem de Türkiye'deki tarım politikalarını nasıl değerlendiriyorsunuz?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  En temel problemin, halkın ve halk adına işleyen kamusal aygıtların gıda üzerindeki denetiminin kaldırılması ve üretim ilişkilerinin piyasanın kuralları ile halkın söz söyleme alanından uzak bir yerden kendi hegemonyasını dayatması olduğunu düşünüyoruz. Bu olgu, hakim gıda endüstrisinin farklı 'kalite' skalalarına sahip olsalar da tüm dünya ülkeleri nezdinde aşağı yukarı böyle. Bu da ülkemizde doğal olarak yerel çeşitliliği kısıtlama, tarıma elverişli arazilerin daraltılması, meraların çitlenip köylünün geleneğinden kopartılması ve kooperatifçilik maskesi altında bir takım devlet iştiraki holding girişimlerinin türemesi ile tarım politikalarına yansıyor.
                </p>
              </div>

              {/* Soru 2 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  2) Çiftçilerin üretim alanında kısıtlandığı ve tüketicilerin de endüstriyel gıdaya mahkûm edildiği koşullar altındayız. Bu durum küresel ölçekli bir gıda krizini de beraberinde getiriyor. "Gıda krizi"nin aşılabilir olduğunu düşünüyor musunuz?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Evet, bu yüzden gıda egemenliği mücadelesi yürütmemiz gerekiyor diyoruz. Kendi yerelinde tüketim davranış kalıbını bu yöne bükme iradesindeki inisiyatifler yayılıp geliştikçe, üreticiye ve ürüne temas ettikçe bu mücadelenin de güçleneceğini düşünüyoruz. Bu minvalde ortak koordinasyon içinde diğer gıda inisiyatifleri ile birlikte hareket etmemizi gerektiren, yerel yönetimlerle ilişkilenme ve siyasi oluşumlarla temas etmemizi gerektiren pozisyonları da çok önemsiyor ve bu çalışmaların da içerisinde rol alıyoruz.
                </p>
              </div>

              {/* Soru 3 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  3) "21 Aralık Dünya Kooperatifleşme Günü" olarak kutlanıyor. Kooperatifleşme nedir ve kooperatifleşmenin önemi nedir?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Birlikte eylemek, hep beraber yapmak gibi anlamlandırıyoruz. Son dönemlerde çok güzel tarifler yapılabiliyor. Mesela 'kendi kendine yardım hareketi' diyenler oluyor. Zaten önemi de bu anlamlarda yatıyor. Yalnızlaştırıp, insanları rekabete sokarak değersizleştiren kapitalist sisteme karşı kolektif bir bütün iradeye renklerini veren bireylerin güçlenmesine işaret ediyor.
                </p>
              </div>

              {/* Soru 4 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  4) Kendi kooperatifleşme deneyiminiz üzerinden soracak olursak yurttaşların gerçek gıdaya ulaşma talebi hangi seviyede?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Kendi deneyimimizi soruyor olsanız da ilk başta yetersiz beslenme sorununun olduğunu söylememiz gerekiyor. Geniş emekçi yığınının gerçek gıda gibi bir talebi olamıyor maalesef. Bundan bahsedebileceğimiz zamanların gelmesini umut ediyor ve buna çabalıyoruz.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Bizim yerel gerçeğimize değinecek olursak aslında talep oldukça fazla ama hem gerçek gıdaya nasıl ulaşılacağı hem de gerçek gıda diye sunulan ürünlerin gerçek olup olmadığı, yani istenilen kriterleri karşılayıp karşılamadığı konusunda kafa karışıklığı var. İnsanlar aldıkları ürünlere güvenmekte zorlanıyorlar çünkü suistimale çok açık bir alan. O nedenle önemli olan bu talebin nasıl örgütlendiği. Tüketimi "bir tık'la ayağıma gelsin" mantığından çıkarıp bireysel bir aktivite olarak görmektense kolektifleştirmemiz gerektiğine inanıyoruz. Benzer kaygılarla bir araya gelmiş insanlar birlikte emek sarf ettiğinde, tüketiciler olarak üretim süreçlerinden kopuk olmamız ve bilgi kirliliği gibi sistemin dayattığı sorunları çözmemiz daha kolay oluyor. En basitinden iş bölümü yapıp araştırma yapabiliyor, kendimizi eğitebiliyor ve üreticilerle birebir iletişim kurabiliyoruz.
                </p>
              </div>

              {/* Soru 5 */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  5) Kooperatifinizi ve kooperatif bünyesinde gerçekleştirdiğiniz çalışmaları anlatır mısınız?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Üreticiler ile aracısız birliktelikler kurma ve dayanışma, üretim ve tüketim üzerine karşılıklı inisiyatif, kolektif çalışma ve paylaşım, ekolojik ve adil toplumsal ilişkiler ve toplumsal dayanışma temel ilkeleri çerçevesinde ve gönüllülük esasına dayanarak çeşitli faaliyetler yürütüyoruz.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Bunlardan en önde geleni Kadıköy Caferağa'da bulunan dükkanımız. Türkiye'nin dört bir yanında üretim yapan çiftçilerle geliştirdiğimiz ilişkiler sayesinde ekolojik yollarla yani ilaç kullanılmadan ve yadigâr tohumdan üretilmiş ürünleri dükkanımızda tüketicilerle buluşturuyoruz.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  İş bölümünü farklı ihtiyaçlara yönelik çalışma birimleri üzerinden organize ediyoruz. Her hafta perşembe günü yaptığımız toplantılarda çalışma birimlerinin bilgilendirmeleriyle haftalık çalışmaları ve yapılacakları kararlaştırıyoruz. Yatay örgütlenme modelini benimsediğimiz için kararları ortaklaşarak alıyoruz. Her ay Kadıköy Kooperatifi Kendisini Anlatıyor toplantısı düzenliyor, ilkelerimizi benimseyen kişileri kooperatifimizde gönüllü olmaya davet ediyoruz. Her ne kadar dükkanımız faaliyet merkezi olsa da gıda egemenliğinin güçlenmesi ve kooperatifçiliğin yayılması için benzer örgütlenmelerle sık sık birlikte çalışıyor, etkinlikler düzenliyor, yerel yönetimlerle ilişkileniyoruz. Toplumsal dayanışma ilişkilerini güçlendirmek de bir başka faaliyet alanımız. Hayatını elverişsiz koşullarda sürdüren canlılar, insanlar ve grupları çeşitli biçimlerde destekleyerek daha iyi bir yaşam kurulmasına katkıda bulunmaya çalışıyoruz.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
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
              href="/yayinlar/medyada-cikanlar"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </Link>
          </div>

          {/* Scroll to Top Button */}
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

