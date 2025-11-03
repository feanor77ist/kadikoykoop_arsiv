"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function SosyalMedyaIletisim() {
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
          <span className="text-gray-900 dark:text-white font-medium">Sosyal Medya ve İletişim Birimi Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sosyal Medya ve İletişim Birimi Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Güncelleme tarihi: 28 Mayıs 2020
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Sosyal Medya ve İletişim Birimi'nin amacı, kooperatif ortakları, üreticiler, gönüllüler ve bilgi almak isteyen herkese zamanında doğru, nitelikli, sağlıklı bilgi akışını sağlamaktır. Aynı zamanda Kadıköy Kooperatifi'nin uygun ve konuyla ilgili mecralarda, kooperatifin ilkeleri ve tüm işleyişiyle ilgili bilgilendirme yaparak kooperatifin bilinirliğini ve görünürlüğünü artırmaktır.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Birimin sağlıklı çalışabilmesi için en az 4 gönüllünün birimde aktif olması önerilir. Birimde yer alan sorumlular en az 6, en fazla 12 aylık rotasyonla çalışırlar. Rotasyon sürecinde yeni oluşturulan ekipte, deneyimli en az bir kişinin kolaylaştırıcı rolüyle kalması beklenir.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              İletişim Birimi'nin duyuru hazırlamak ve paylaşmak için kullandığı iletişim hesapları:
            </h2>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Facebook: @kadikoykoop</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Twitter: @kadikoykoop</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Instagram: @kadikoykooperatifi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Eposta: iletisim@kadikoykoop.org ve kdkkoop@gmail.com (Not: kdkkoop@gmail.com adresinin sorumluluğu Yönetim Kurulu ile paylaşılır</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Mailchimp: Eposta ile</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Websitesi: www.kadikoykoop.org</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Youtube: @kadikoykoop</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Issuu: @kadikoykooperatifi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Canva: Görsel hazırlamak için diğer birimler ve çalışma grupları bunu kullanılır. Şifreleri İletişim Birimi'nin sorumluluğundadır.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Birimin Görevleri
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Biriminin görevi, kooperatifin düzenlediği etkinlikleri, birimlerin yaptığı organizasyonları ve kooperatifin ilgi alanına giren ve yapılması uygun görülen duyuruları iletişim kanalları vasıtasıyla duyurmaktır. Birim, iletişim kanallarını takip eder, gelen mesajları ve epostaları cevaplar, cevaplayamayacağı ya da aktarması gereken soruları Mutfak'a veya çalışma birimlerine iletir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Çalışma birimlerinin sorumluluğuna giren konularda sosyal medya üzerinden gelen mesajlara "....@kadikoykoop.org'a eposta atarsanız arkadaşlarımız yardımcı olacaktır" şeklinde cevap verir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Çalışma birimlerine gelen epostaları ilgili birimlere yönlendirir; yönlendirirken ya yönlendirilen emailde CC yaparak ya da yönlendirdikten sonra "Mesajınızı ilgili birime ilettik" şeklinde bir mesaj yazarak göndericiyi bilgilendirir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Birim, görev alınan süre boyunca kendi sorumluluğunda olan iletişim hesaplarının güvenliğinden sorumludur. Bu hesapların şifreleri 6 ayda bir değiştirilir. Email ve mailchimp şifreleri, birimin Whatsapp grubu açıklamasında, diğer bütün şifreler de iletisim@kadikoykoop.org ve kdkkoop@gmail.com hesaplarında taslak olarak bulunur. Şifreler aynı zamanda Yönetim Kurulu üyeleri ile paylaşılır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Birim ayrıca Arşiv'de bulunan Önemli Günler Takvim'ini ve sosyal medya ve email yoluyla sık sık sorulan sorulara hazırlanmış cevapları güncellemekten sorumludur.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <a href="https://docs.google.com/spreadsheets/d/157PERkiRYZG0AWybzQXvETi8ZXISw5Ampte5qQdyCJY/edit#gid=2046831356" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                https://docs.google.com/spreadsheets/d/157PERkiRYZG0AWybzQXvETi8ZXISw5Ampte5qQdyCJY/edit#gid=2046831356
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Sosyal Medya Hesapları
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Tanışma ve eğitim toplantıları, Kooperatif Dükkanı'na gelen yeni ürünler, Önemli Günler Takvimi'nde belirtilen günlerin kutlamaları, çeşitli etkinliklerle ilgili duyurular mümkün olduğunca düzenli olarak paylaşılır. Dükkan saatleriyle ilgili istisnai durum ya da güncelleme mevcutsa birim sosyal medya kanallarından konuyla ilgili bilgilendirme yapar. Kadıköy Kooperatifi Kendisini Anlatıyor ve kooperatifin düzenlediği etkinlikler için Facebook'ta etkinlik açılır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Mailchimp
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Birimin inisiyatifine bağlı olarak KKKA toplantıları, kooperatifin düzenlediği etkinlikler, uzun süredir dükkana gelmeyen ürünlerin gelişi ve ürün tanıtımları belirli aralıklarla Mailchimp üzerinden email listesine gönderilir. Paylaşım yapılmasını ayrıca talep eden birimler veya gönüllüler birimle iletişime geçer. Listeye email gönderirken "Kooperatif Dostu" segmenti seçilmelidir. Burada ayrıca bir "Basın" listesi de bulunmaktadır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Etkinliklerde ve dükkanda tutulan email listelerini düzenli olarak Mailchimp'e aktarmak İletişim Birimi'nin görevidir. Kooperatiften ayrılan her gönüllü otomatik olarak Mailchimp'e eklenir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kooperatif Postası
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Web sitesinde hazırlanmış olan içerik 3 aylık periyotlarda Kooperatif Postası olarak hazırlanır. Hazırlanmış içeriklerin postaya dönüştürülme sürecinde ilk editöryel işlem Birim tarafından yapılır, içerik oluşturan kişilere ve mutfağa onay için sorulur. Gerekli düzenlemeler yapıldıktan sonra posta web sitesinde ve matbu olarak yayınlanır. Matbu alım işlemini Mutfak'tan inisiyatif alan kişiler yapar.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kooperatif Web Sitesi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kooperatif web sitesine yayın programı çerçevesinde hazırlanmış içeriği siteye yükler, web sitesinin güncellenmesini sağlar ve gerekli teknik desteğin takibini yapar, gerektiğinde destek ister.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Özgün İçerik Hazırlanması
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Etkinlikler, atölye çalışmaları, raporları, kooperatif için yorum/perspektif yazıları vb. yazan kişi/birim/grup tarafından Mutfak'a sunulur. Uygun görülmesi üzerine web sitesi/blog'a Birim tarafından konulur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Basın Yayınla İlişkiler ve Diğer Görüşme İstekleri
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong className="font-semibold">1-</strong> Ödev yapmak, tez hazırlamak, haber hazırlamak, metin yazmak, kitap için araştırma yapmak vs gibi amaçlarla gelenlere Kooperatif broşürü ve 'Sıkça sorulan Sorular' metni gönderilir. Daha fazla bilgi istenirse KKKA toplantısına davet edilir. Konunun aciliyeti varsa, görüşme talebini yapan kişinin KKKA toplantısına gelmesi mümkün değilse veya daha fazla bilgi veya görüşme istenirse, tercihen hafta içi gündüz saatlerinde, önceden bilgi verilerek dükkandaki nöbetçi ile görüşmeye gidebilir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong className="font-semibold">2-</strong> Eğer Kooperatife temsiliyet gerektiren bir röportaj isteği iletilirse, konu mutfak gündeminde ele alınır. Konu gündeme getirilmeden önce İletişim birimi röportajın amacı, kapsamı, yayımlanacağı yer gibi olabildiğince çok bilgi toplayarak mutfağın tek seferde konuya karar vermesine yardımcı olur. İstek olumlu olarak karara bağlanır ve bir gönüllü belirlenirse, Basın ile ilişkiler yönergesine göre süreç işletilir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong className="font-semibold">3-</strong> Eğer Kooperatife panel, konuşma veya canlı görüşme gibi temsiliyet içeren ve sonradan değiştirilmesi mümkün olmayacak biçimde görüş belirtilecek bir etkinlik isteği iletilirse konu mutfakta ele alınır. Konu gündeme getirilmeden önce İletişim birimi söz konusu etkinlik türüne göre, etkinliğin amacı, kapsamı, hedef kitlesi, diğer katılımcılar, düzenleyicinin perspektifi, seyahat gereklilikleri gibi olabildiğince çok bilgi toplayarak mutfağın tek seferde konuya karar vermesine yardımcı olur. Katılmaya karar verilir ve gönüllü belirlenirse, gönüllüye kooperatifin ilgili konudaki ortak görüşü ve görüşme sırasında inisiyatif alabileceği çerçeve belirtilir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Sıkça Sorulan Sorular'a Verilen Cevaplar
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bu cevaplar Paylaşım Yönergesi'nde detaylandırılmıştır. Bu cevapları kooperatifin ihtiyaçlarına göre güncellemek İletişim Birimi'nin sorumluluğundadır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Önerilen İş Bölümü
            </h2>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">1.</span>
                <span>kişi: Sosyal medya paylaşımlarını hazırlama ve paylaşma</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">2.</span>
                <span>kişi: Sosyal medyadaki yorum ve sorulara cevap verme</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">3.</span>
                <span>kişi: Email takibi, emaillere cevap verme ve websitesi içeriği güncelleme</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">4.</span>
                <span>kişi: Mailchimp'e emaillerin girilmesi, Mailchimp gönderisi ve Kooperatif postası hazırlama</span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              İş gücüne göre "Youtube içeriği hazırlama" başlığı da iş kalemleri arasına eklenebilir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              İletişim kanallarında paylaşımların nasıl yapılacağı "İletişim Birimi Paylaşım Yönergesi"nde detaylandırılmıştır.
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

