"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function Koordinasyon() {
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
          <span className="text-gray-900 dark:text-white font-medium">Koordinasyon Birimi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Koordinasyon Birimi İşleyişi
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Birimin Yapısı
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>Birimin sağlıklı işleyebilmesi için en az 4 kişi gerekmektedir. Bu 4 kişiden 2 kişinin rotasyon sırasında yeni katılımcılara işleyişi aktarabilmesi için en az iki ay boyunca koordinasyon birimine devam etmesi gerekir.</p>
              <p>Birim tanımlı görevlerini rotasyon usulü dönüşümlü olarak gerçekleştirir. Kendi arasındaki iletişimi whatsapp grubu, e-posta ya da düzenli yaptığı toplantılar yoluyla kurar.</p>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Teknik Bilgi:
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                <li>Koordinasyon birimi mutfağa göndereceği mesajları koordinasyon@kadikoykoop.org hesabıyla <a href="https://gator3021.hostgator.com:2096/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://gator3021.hostgator.com:2096/</a> adresinden gönderir</li>
                <li>Whatsapp yazışmalarında birim adına bir bildirim yapıyorsa 🐢 (kaplumbağa) simgesini mesajın başına, sonuna ya da her iki tarafa da ekler.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Birimin Görevleri
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  1. Her Pazartesi gündem önerilerinin derlendiği e-postayı mutfak grubuna göndermek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  İlgili koordinasyon görevlisi bir önceki mutfak toplantısından kalan gündemleri derler ve diğer koordinasyon üyelerinin onayından sonra en geç Pazartesi günü "... Tarihli Mutfak Toplantısı Gündemleri" başlığıyla e-posta olarak mutfak grubuyla paylaşır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  2. Her Çarşamba gecesi ya da Perşembe sabahı o haftanın mutfak toplantısında görüşülecek olan gündem önerilerini derleyip mutfak grubuna iletmek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mutfak grubunun bu e-postaya Çarşamba akşamına kadar cevap olarak yazdığı gündem önerileri aynı koordinasyon üyesi tarafından derlenir ve diğer koordinasyon üyelerinin onayından sonra mutfağa tekrar e-posta yoluyla gönderilir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  3. Mutfak toplantılarında kolaylaştırıcılık görevini rotasyon yöntemiyle dönüşümlü olarak yapmak:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Toplantı sırasında kolaylaştırıcılık mutfak toplantısı yönergesinde belirlenen işleyişe göre rotasyon yoluyla yapılır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  4. Mutfak toplantı notlarını rotasyon yöntemiyle dönüşümlü olarak tutmak ve her hafta mutfak ve arşiv e-posta gruplarına iletmek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Toplantı notları daha önce mutfak tarafından onaylanan şablona göre hazırlanır. Toplantı notları 'GG.AA.YYYY Tarihli Mutfak Toplantısı Notları' başlığıyla mümkünse Perşembe akşamı, değilse takip eden gün içinde mutfak grubuna ve arşiv birimine gönderilir. Toplantı notları ilgili e-postada metin olarak görülecek şekilde yapıştırılır. Ayrıca arşivlenebilmesi için ekte word ve pdf dosyaları halinde arşiv birimine (kdkkoop.belge@gmail.com) ayrıca gönderilir. Yazmanlık, koordinasyon üyeleri arasında rotasyonla yapılır. Koordinasyonun kadın üyelerinin diğer üyelerden fazla yazmanlık yapmasına mani olunur. Eğer toplantıda yazmanlık yapacak koordinasyon üyesi yoksa bu iş için mutfak gönüllülerinden destek istenir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  5. Gelen gündem önerileri arasında o hafta bir karara bağlanması zorunlu olan gündemleri öncelikli gündem maddesi olarak ayırmak:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hangi gündemlerin öncelikli gündem olabileceği mutfak toplantısı yönergesinde tariflenmiştir. Kısaca herhangi bir kurumdan beklenen bir cevap olması durumunda ya da takvim nedeniyle kararın o hafta alınması gerekiyorsa gündem maddesi öncelikli gündem olarak ele alınır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  6. Mutfak toplantısı yerine çalıştay ya da Pazar toplantısı konusu olabilecek gündem önerilerini tespit edip, bu konulardaki önerisini mutfağa iletmek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Bu konudaki kriterler mutfak toplantısı yönergesinde açıklanmıştır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  7. İki ayda bir düzenlenen çalıştay ve Pazar toplantılarını tarihi ile ilgili hatırlatma yapmak (ayın son Pazarı):
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Koordinasyon çalıştay ve Pazar toplantılarını Trello takvimine aylık olarak işler. Ay içinde toplantı tarihi ile ilgili hatırlatma e-postası atar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  8. Çalıştay gündem maddeleri önerilerini sırasıyla Trello'da herkesin göreceği şekilde listelemek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mutfak toplantıları sırasında gelen gündem önerileri arasında koordinasyonun çalıştayda görüşülmesini önerdiği ve mutfak gönüllülerinin bu öneriyi olumlu bulduğu başlıklar, iki hafta mutfak toplantısında üst üste konuşulduğu halde üzerinde bir uzlaşma sağlanamayan konular, gönüllülerin ya da çalışma birimlerinin çalıştay gündem önerisi olarak önerdiği konular gündeme geliş sıralarına göre Trello'daki çalıştay kartında gündem önerileri başlığı altına düzenli olarak işlenir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  9. Pazar toplantısı gündem maddeleri önerilerini sırasıyla Trello'da herkesin göreceği şekilde listelemek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mutfak toplantıları sırasında gelen gündem önerileri arasında koordinasyonun Pazar toplantısında görüşülmesini önerdiği ve mutfak gönüllülerinin bu öneriyi olumlu bulduğu başlıklar, gönüllülerin ya da çalışma birimlerinin Pazar toplantısına gündem önerisi olarak önerdiği konular gündeme geliş sıralarına göre Trello'daki Pazar toplantısı kartında gündem önerileri başlığı altına düzenli olarak işlenir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  10. Daha önce yapılması kararlaştırılan ancak bir sorumlusu olmayan işlerle ilgilenecek gönüllülere çağrı yapmak:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mutfak toplantıları, çalıştaylar ya da Pazar toplantılarında yapılmasına karar verilen işler için eğer toplantı sırasında gönüllüler çıkmadıysa bu işler için gönüllü çağrısı yapılır. Eğer kararlaştırılan iş için gönüllü çıkmazsa, bu iş Trelloda gönüllü çıkmadı ibaresi ile uzun vadede yapılması hedeflenen işler listesine alınır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  11. Yapılması kararlaştırılan işlerin Trello'ya işlenmesi sürecini kontrol etmek, eksik kalanları tamamlamak:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Toplantılarda yapılması kararlaştırılan işler, işi yapmaya gönüllü olan mutfak gönüllüleri tarafından Trello'ya işlenmelidir. İşlenmemesi durumunda Koordinasyon gönüllülere hatırlatma yapabilir ya da bu işleri Trello'ya işler.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  12. Tamamlanma tarihi gelen işlerle ilgili gerekli hatırlatmaları yapmak:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Belirtilen tarihte tamamlanmayan işlerle ilgili koordinasyon whatspp ya da e-posta yoluyla kaplumbağa işaretli hatırlatmalar gönderir. Devamında bir gelişme olmazsa konuyu mutfak gündemine taşır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  13. Belli periyotlarla tekrarlayan kooperatif iç işleri için hatırlatmalar yapmak:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dükkan temizlik-ilaçlama gibi periyodu aylık, resmi ortaklar toplantısı, strateji çalışması, mali planlama ve genel kurul gibi periyodu yıllık tekrarlayan kooperatif iç işlerini mutfak toplantısına gündem olarak önerilmese de tarihi gelmeden önce gündem sıralamasına alır
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  14. Tüm toplantıların yönergelere uygun ilerleyişini takip etmek, bir uygunsuzluk durumunda ilgili kişi ya da kişileri bilgilendirmek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Her toplantı şeklinin kendi yönergesi mevcuttur. Mutfak gönüllüleri bu yönergelere uygun olmayan şekilde hareket ederse koordinasyon bu kişileri ilgili yönerge hakkında bilgilendirir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  15. Düzenli birim toplantıları yapmak, mutfağı birim toplantısıyla ilgili bilgilendirmek, birim toplantı notlarını Drive'da arşivlemek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Koordinasyon birim toplantı notlarını 'GG.AA.YYYY Tarihli Koordinasyon Birim Toplantı Notları' başlığıyla, metin e-postanın içinde okunacak şekilde yapıştırarak mutfak e-posta grubuna gönderir. Aynı toplantı notlarının pdf formatı Drive'da Koordinasyon Birimi toplantı notları dosyasına kopyalanır. Bu iş Arşiv Biriminin görevi değildir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  16. Dükkanın işleyişi ve ürün siparişiyle ilgili bir aksaklık gözlemlendiğinde bu konuyla ilgili gerekli hatırlatmaları yapmak:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mali konular haricinde dükkandaki işleyişle ilgili aksaklıklar olması durumunda Koordinasyon ilgili gönüllülere whatsapp ve/veya e-posta yoluyla hatırlatmalar yapar. Hatırlatmalar birimdeki kişilerin hatları üzerinden yapılsa da kaplumbağa işareti olması hatırlatmanın Koordinasyon adına yapıldığını gösterir. Bu hatırlatmalar sonrasında sorunun çözümünde bir aşama kat edilemezse Koordinasyon konuyu mutfak toplantısına taşır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  17. Dış etkinliklere katılımla ilgili tutulan tabloları güncellemek ve katılım sırasında etkinlik gönüllülerine katılım sırasını hatırlatmak:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Kooperatifin temsiliyetinin söz konusu olduğu iç ve dış etkinlikler yani seminer, panel, röportaj, konuşmacılık gibi konularda mutfak gönüllüleri arasında rotasyon ilkesi işletilmektedir. Bu nedenle Koordinasyon, toplantılarda kooperatif dışı faaliyetlerin katılımcıları kararlaştırıldıktan sonra ilgili şablonu doldurur ve katılım için gönüllülere bu ilkeyi ve şablondaki sıralamayı hatırlatır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  18. Çalışma gruplarından her ay düzenli bilgilendirmeler istemek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Her ayın ilk Perşembe toplantısında çalışma gruplarına yaptıkları işle ilgili mutfağa bilgi vermesi hatırlatılır.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  19. Mutfağa yeni katılan kişileri mutfak Whatsapp ve e-posta gruplarına eklemek:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  KKKA ve eğitim toplantılarına katıldıktan sonra çalışmaya katılmaya karar veren kişiler ilk mutfak toplantısında whatsapp ve e-posta gruplarına eklenirler. Bu kişilerin e-posta adresler, arşive erişimlerinin açılması için ayrıca arşiv birimine (kdkkoop.belge@gmail.com) gönderilir. Whatsapp ve eposta grubunda sadece koordinasyon birimindeki kişilerin yönetici olması gerekir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  20. Nöbet çizelgesinin gönderimi:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Kooperatif dükkanının belirlenen saatlerde gönüllülük usulüne göre açılabilmesi için koordinasyon birimi Doodle uygulaması üzerinden, Pazartesi gününden ertesi Pazar'a, iki haftalık nöbet çizelgesi hazırlayıp (Doodle'da nöbet çizelgesi hazırlama kılavuzu) nöbet döneminden önceki Cuma günü nöbet tutan gönüllülerle paylaşır. Nöbet çizelgesinin bağlantısı doğrudan gruplarda (whatsapp ve e-posta) paylaşılmaz çünkü henüz tek başına nöbet tutmayan arkadaşlar sehven bir günü işaretleyebilir ve o nöbet dolu göründüğü için başka kimse tarafından alınmayabilir. Neticede dükkanın açılamamasına sebep olabilecek bir durum ortaya çıkabilir.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Birimde Önerilen İş Bölümü
            </h2>
            <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>Koordinasyon Birimindeki işler belli bir düzende yapılmadığı zamanlarda birim üyelerinin olması gerekenden daha fazla enerjisini almakta ve dikkat gerektirmektedir. Aşağıdaki gibi bir iş bölümü birim üyelerini rahatlatabilir.</p>
              <p>Gündem maddelerini mutfak e-posta grubuna göndermekle sorumlu olan birim gönüllüsü, gelen önerileri derleme, öncelikli gündemleri belirleme ve o hafta konuşulacak olan gündem maddelerini mutfağa toplantıdan önce göndermekle de sorumludur. Bu gönüllü, Madde 1, 2, 5, 6 ve 18'de tariflenen işlerden sorumludur. 2, 5 ve 6'dan önce diğer koordinasyon gönüllülerinden en az ikisinin onayını alması gerekir.</p>
              <p>Birimin en az 4 kişiden oluşması öngörüldüğü için her birim gönüllüsü ayda bir kere mutfak toplantısı notlarını tutacağı varsayılır. Notları tutan bu gönüllü, diğer birim üyelerinin onayını aldıktan sonra notları yukarıda tariflendiği şekilde mutfak grubu ve Arşiv Birimiyle paylaşmaktan yani Madde 4'te tariflenen işten sorumludur. Aynı gönüllü toplantıyı takip eden günlerde yukarda Madde 8, 9, 11 ve 17'da tariflenen işleri de yapar.</p>
              <p>Madde 11 sadece mutfak toplantılarında değil, çalıştay ve Pazar toplantılarında alınan kararları da içerir. Mutfak toplantı kararları, toplantı notlarını tutan mutfak gönüllüsü tarafından Trello'ya işlenir. Çalıştay ve Pazar toplantısı kararları koordinasyon gönüllüleri arasında rotasyon ile Trello'ya işlenir.</p>
              <p>Madde 3 ve 15 tüm koordinasyon gönüllülerinin yaptığı işlerdir. Madde 7, 10, 12, 13, 14 ve 16 birim üyelerinin inisiyatifine göre, iş bölümüyle yapılabileceği gibi tüm gönüllüler beraber yapmayı da tercih edebilirler.</p>
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

