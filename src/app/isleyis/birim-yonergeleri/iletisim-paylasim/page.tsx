"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function IletisimPaylasim() {
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
          <span className="text-gray-900 dark:text-white font-medium">İletişim Birimi Paylaşım Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            İletişim Birimi Paylaşım Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Son güncelleme tarihi: 28 Mayıs 2019
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bu yönerge İletişim Birimi'nin iletişim kanallarından yapacağı paylaşımlarda izlenecek yöntemleri ve paylaşım sürecinde diğer birimlerin, grupların veya kişilerin alması gereken sorumlulukları belirler.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              İletişim Kanalları:
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed ml-4 mb-4">
              <li>Sosyal medya (Facebook, Twitter, Instagram, Youtube, Issuu)</li>
              <li>Birim eposta'ları</li>
              <li>Mailchimp</li>
              <li>Websitesi ve blog</li>
              <li>Kooperatif postası</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              1. Sosyal Medya Paylaşımlarına Dair İzlenecek Yöntem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sosyal medya mecralarında aşağıdaki duyurular paylaşılır.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Kooperatife ait duyurular:
                </h3>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Ürün duyuruları ve ürün bilgileri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Etkinlik ve çalıştay duyuruları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Etkinlik sırasında ve sonrasındaki paylaşımlar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Dükkan saati değişikliği</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Üretici ziyaretleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Karşı Lig haberleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Toplumsal dayanışma fon aktarımı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Kooperatifin bloğunda yayınlanmış postlar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Önemli Günler Takvimi'ndeki günlerin kutlanması</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Kooperatifin politikalarıyla ilgili paylaşımlar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Kooperatif hakkında çekilmiş video'lar</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Kooperatife ait olmayan duyurular:
                </h3>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Desteklediğimiz toplumsal hareketler ve hak arayışı mücadelelerine dair destek paylaşımları, örn: Kaz Dağları, Bülent Şık'ın yargılanması.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Üreticilerimizden duyurular</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Dayanışma içinde olduğumuz kişiler ve oluşumlarla ilgili haberler ve duyurular, örn: Beşiktaş Kooperatifi ve Maltepe Kooperatifi girişimlerinin dağıtım veya toplantı duyuruları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>"Güvendiğimiz" kişilerin ilgilendiğimiz konular hakkındaki yazıları, örn: Bülent Şık</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Kooperatif gönüllüsü kişilerin ilgilendiğimiz konular hakkında kaleme aldığı yazılar</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Paylaşım süreçleri aşağıda belirtilen yollarla gerçekleşir.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Ürün duyuruları ve ürün bilgileri
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Ürün paylaşabilir duruma geldiğinde, yani fiyat hesabı yapıldığında Mali Birim İletişim Birimi gönüllülerini etiketleyerek ürünün paylaşılabileceğini belirtir.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Paylaşılacak metni hazırlama ve fotoğraf temini (örnek: nöbetçiden fotoğraf isteme) ürün sorumlusundadır. Sürekli ve sık gelen ürünlerde yeniden metin yazmaya ihtiyaç olmayabilir ama fotoğraf ihtiyacı bakidir. Fotoğrafı çeken nöbetçi fiyatın gözükmemesine dikkat etmelidir.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Bazı ürünler için şöyle bir görsel arşivi mevcuttur:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    <a href="https://drive.google.com/drive/u/0/folders/1ZoWATKhhNMzHIVL_XRJnKxurc4VKt2Jb" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      https://drive.google.com/drive/u/0/folders/1ZoWATKhhNMzHIVL_XRJnKxurc4VKt2Jb
                    </a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Yeni bir ürün için önceden "yeni ürünümüz gelecek" duyurusu yapılır. Taze ürünlerde ürün gelmeden önce gelecek diye, geldikten sonra da 2-3 günde bir hatırlatma duyurusu yapılır.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Etkinlik ve çalıştay duyuruları
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Paylaşım yapılmasını isteyen birim veya çalışma grubu etkinlikten birkaç gün önce kullanılacak görsel, metin, etkinlik başlığı ve gerekli diğer bilgileri mutfak emaili veya Whatsapp grubu üzerinden İletişim Birimi gönüllülerine iletir. İletişim Birimi Facebook etkinliği açtıktan sonra kontrol etmeleri için etkinlik bağlantısını talep eden birime veya çalışma grubuna gönderir. Eğer sorun yoksa link bütün gönüllüler tarafından paylaşılır.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Kooperatifin düzenlediği etkinlik duyuruları etkinlikten en geç bir hafta önce yapılır, daha sonra etkinlik tarihine kadar 1-2 kere tekrarlanır.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Etkinlik sırasında ve sonrasındaki paylaşımlar
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Kooperatifin davet edildiği ve düzenlediği etkinliklerde paylaşım yapılması amaçlanır. Özellikle kooperatif etkinliklerinde İletişim Birimi'nden gönüllüler bulunmalıdır. İletişim Birimi'nin gidemeyeceği etkinliklerde Birim kooperatif gönüllülerinden destek alır. Bu gönüllü etkinlikle eş zamanlı olarak fotoğraf ile birlikte içerik paylaşımı da yapar. İletişim Birimi de bunları sosyal medyada paylaşır. Canlı yayın sadece İletişim Birimi'nin katıldığı etkinliklerde yapılır. Basın-Yayın Kurumları ve İlişkiler yönergesine göre herhangi bir yayın için katılımcılardan izin alınmalıdır.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Dükkan saati değişikliği
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Dükkan saat değişikliği durumunda Koordinasyon Birimi İletişim Birimi'nden paylaşım yapmasını talep eder. Paylaşım şu açıklamayı içerir: "Dükkanımız gönüllü emeğiyle çalıştığından bazen elimizde olmayan durumlardan dolayı dükkanı açamayabiliyoruz. Eğer son anda bir değişiklik olur ve gönüllülerimizden biri dükkanı açabilirse tekrar haber vereceğiz. Siz de bize daha yakından destek olmak ve Kadıköy Kooperatifi'nde gönüllü olmak isterseniz her ay yaptığımız Kadıköy Kooperatifi Kendisini Anlatıyor toplantılarına gelebilirsiniz."
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Üretici ziyaretleri
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Üretici ziyareti yapan kişi veya grup fotoğraflarla birlikte ziyareti anlatan kısa bir yazıyı İletişim Birimi'ne göndererek paylaşım yapılmasını talep eder.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Karşı Lig haberleri
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Koop Gücü üyeleri Karşı Lig duyurularını fotoğraf ve metinle birlikte İletişim Birimi'ne gönderip paylaşım yapmasını talep eder.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Toplumsal dayanışma fon aktarımı
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Toplumsal dayanışma fon aktarımından sorumlu gönüllü veya çalışma grubu -fon aktarılan kurumdan onay aldıktan sonra – kullanılacak fotoğraf ve metni göndererek İletişim Birimi'nden paylaşım yapmasını talep eder.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Kooperatifin bloğunda yayınlanmış postlar
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Paylaşım İletişim Birimi inisiyatifindedir.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Önemli Günler Takvimi'ndeki günlerin kutlanması
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Paylaşım İletişim Birimi inisiyatifindedir. İhtiyaç duyduğunda Birim, gönüllülerden metin yazımı ve görsel seçimi konusunda destek isteyebilir.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Kooperatifin politikalarıyla ilgili paylaşımlar
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Sıkça sorulan sorulara cevap olarak paylaşım hazırlamak İletişim Birimi inisiyatifindedir (örn. Neden kargo yapmıyoruz? paylaşımı). Diğer birimler ve çalışma grupları da gerektiğinde benzer paylaşım yapması için metin ve görsel sağlayarak İletişim Birimi'nden talepte bulunabilir.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Kooperatif hakkında çekilmiş video'lar
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Kooperatif hakkında çekilmiş video'lar İletişim Birimi'ne email üzerinden iletilir.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Kooperatife ait olmayan duyurular:
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Kooperatife ait olmayan duyurular için paylaşım yapılmasını talep eden gönüllü Whatsapp Mutfak grubundan isteğini İletişim Birimi'ne bildirir. Eğer gruptan itiraz çıkmazsa İletişim Birimi paylaşımın aşağıda belirlenen kriterlere uygun olup olmadığını değerlendirir ve bir sorun yoksa paylaşımı yapar. Sorun olduğu düşünülürse konu mutfak toplantısına taşınır. İletişim Birimi kendi inisiyatifinde de paylaşım yapabilir. Bu durumda yine mutfağa danışmalıdır.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Bu minvalde toplumsal dayanışma ilkesinde belirtilen mücadelelere dair haberler paylaşılabilir. Ancak dikkat isteyen çok fazla konu olduğu için bunlar Facebook'ta ve Twitter'da RT'leyerek, Instagram'da ise hikaye olarak "yukarı kaldır" seçeneği kullanılarak ve bağlantı verilerek paylaşılır. Stratejik olanlar ise – Kaz Dağları mücadelesi veya Bülent Şık'ın yargılanması gibi – her üç sosyal medya kanalında kalıcı post olarak paylaşılır.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    "Güvendiğimiz" kişilerin ilgilendiğimiz konular hakkındaki yazıları paylaşılabilir. "Güvendiğimiz" kişiler daha önce beraber çalıştığımız ve hem yüz yüze hem de kamusal alanda eleştirebileceğimiz kişiler olarak tanımlanır.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Paylaşımlarda parti propagandası yapılamaz ama seçimlerle ilgili nasıl bir yönetim istediğimize dair beyanlarda bulunulabilir.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Aynı yayın organından üst üste paylaşım yapmamaya dikkat edilir. Yayın organlarında yayınlanmış yazılar paylaşılırken içeriği neden paylaştığımıza dair bir iki cümle yazılır. "Neden bu yayın organının makalesini paylaşıyorsunuz?" gibi bir tepkiye karşı şöyle bir cevap verilebilir: "Bizim bu makaleyi paylaşmamızın sebebi yayınlandığı yayın organından bağımsız olarak ifade edilen görüşlerle ilgili kamusal farkındalık yaratmak ve tartışma başlatabilmek. Siz de burada fikrinizi belirtmekte özgürsünüz."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              2. Sosyal Medya ve Eposta Üzerinden Verilecek Cevaplar
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sosyal medya ve eposta üzerinden gelen sorulara cevaplarda nazik bir dil kullanılmalıdır. Şiddetsiz bir dille duruşumuz açıklanmalıdır. Eğer kişi ısrarcı davranırsa, "Talebinizi arkadaşlarımıza ileteceğiz" denmeli ve durum Whatsapp üzerinden mutfağa bildirilmelidir. Sosyal medyada olumsuz yorumlar olduğu durumlarda İletişim Birimi mutfaktan destek ister.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Birimler, kendilerine gelen epostalara daha çabuk dönüş yapabilmek adına "Mailinizi aldık, size en kısa zamanda dönüş yapacağız" mesajı yazar.
            </p>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Sıkça Sorulan Sorular:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Aşağıdaki sorulara belirlenmiş cevapları gerektiği şekilde güncellemek İletişim Birimi'nin sorumluluğundadır.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Bunun fiyatı nedir?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Örnek cevap: "Merhaba, bizim kooperatif olarak amacımız üretim ve tüketim ilişkilerini dönüştürebilmek. Kar amacı gütmüyor ve dükkanımızın tüketicilerle doğrudan iletişim kurabildiğimiz mekan olmasına özen gösteriyoruz. Ürünün sadece fiyatı üzerinden değil, nereden geldiği, kim tarafından üretildiği ve hikayesi üzerinden de değerlendirilmesini tercih ediyoruz. Dükkana geldiğinizde sizinle yüz yüze iletişim kurup bunları aktarabilmek istiyoruz. O nedenle ürün fiyatlarını sosyal medya üzerinden açıklamama kararımız var. Ürünleri incelemeniz için dükkanımıza bekleriz!"
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Bu mesajla birlikte tüketici "Neden fiyat açıklamıyoruz?" paylaşımına da yönlendirilir.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Dükkanda şunun stoğu var mı?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Eğer stoğu sorulan ürün taze bir ürün ise o anki nöbetçiye danışmak sorulara cevap veren gönüllünün inisiyatifindedir.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Eğer stoğu sorulan taze olmayan bir ürün ise;
                  </p>
                  <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed mb-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>O an cevap veren gönüllü bir ürünün olmadığından eminse bilgiyi paylaşır.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Gönüllü ürünün olduğundan emin ise olduğu bilgisini paylaşır ancak tüketici gittiğinde ürünün bitmiş olabileceği konusunda uyarır. Örnek: "Siz gidene kadar kalır mı emin değiliz."</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">-</span>
                      <span>Gönüllü stok hakkında hiçbir bilgi sahibi değilse şöyle cevap verilir: "Anlık stok takibi yapabilecek emek gücüne sahip değiliz, o nedenle ne yazık ki bilgi veremiyoruz."</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Benim için şunu ayırır mısınız?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Örnek cevap: "Bu tarz talepleri karşılayabilecek emek gücüne sahip değiliz, ne yazık ki yardımcı olamayacağız."
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Kargo yapıyor musunuz?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Örnek cevap: "Merhaba, kar amacı gütmediğimiz ve aracı masraflarını olabildiğince ortadan kaldırmak istediğimiz için kargo ile gönderim yapmıyoruz. Kargoyla alışveriş yapacak iseniz direk üreticiden almanızı tavsiye ediyoruz. Bulunduğunuz şehir ve semtlerdeki gıda toplulukları üzerinden ortak sipariş vererek de temiz adil gıdaya ulaşabilirsiniz: <a href="http://gidatopluluklari.org/?page_id=103" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">http://gidatopluluklari.org/?page_id=103</a>."
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Bu mesajla birlikte tüketici "Neden kargo yapmıyoruz?" paylaşımına da yönlendirilir.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Tohum satıyor musunuz?
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Örnek cevap: "Merhaba, tohum tedarik etmiyoruz. Konuyla ilgilenen çeşitli tohum dernekleri var, onlarla iletişime geçmenizi öneririz."
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Ürünlerle ilgili sorular ve geribildirimler
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    İletişim Birimi soruyu veya geribildirimi Whatsapp üzerinden ürün sorumlusuna iletir. Ürün sorumlusu üreticiyle konuşarak geri dönüş sağlar. İletişim Birimi cevabı tüketici ile paylaşır.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Süreçlerle ilgili sorular ve geribildirimler
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Sorulan soru bir davetse; mesaj mutfağa yönlendirilir. Yazan kişiye daveti için teşekkür eden ve tartışıp döneceğimizi belirten bir email atılır.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Sorulan soru birimler ile alakalıysa; İletişim Birimi sosyal medya üzerinden gelen mesajlara ilgili birime göre "....@kadikoykoop.org'a eposta atarsanız arkadaşlarımız yardımcı olacaktır" şeklinde cevap verir. Çalışma birimlerine gelen epostaları ise ilgili birimlere yönlendirir; yönlendirirken ya gönderen kişiyi CC yaparak ya da yönlendirdikten sonra "Mesajınızı ilgili birime ilettik" şeklinde bir mesaj yazarak göndericiyi bilgilendirir.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Soru herhangi bir birimi değil genel olarak kooperatifi ilgilendiriyorsa, Whatsapp'tan paylaşılır. Gruptaki kamuoyu yoklamasına göre bir cevap oluşturulur (örnek: enginarları çok küçük bulan ve telafi isteyen tüketici). Hızlı hareket edilmesi gerektiğinden tartışma o gün içerisinde tamamlanır. Eğer ciddi bir itiraz çıkarsa o zaman konu mutfağa taşınır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              3. Mailchimp
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Mailchimp paylaşımları İletişim Birimi inisiyatifindedir. Paylaşım yapılmasını ayrıca talep eden birimler veya gönüllüler birimle iletişime geçer. Etkinliklerde ve dükkanda tutulan email listelerini düzenli olarak Mailchimp'e aktarmak İletişim Birimi'nin görevidir. Bu listelerin İletişim Birimi'ne aktarılması kooperatif gönüllülerinin sorumluluğundadır. Kooperatiften ayrılan her gönüllü otomatik olarak Mailchimp'e eklenir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              4. Websitesi ve blog
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Düzenlediğimiz etkinlik ve çalıştayların haber ve raporları ve kooperatif gönüllülerin birlikte kaleme aldığı yazılar (örn. Tanzim kuyrukları neyi çağırıyor?) gibi paylaşımlar websitesi ve blog'dan yapılır. Rapor veya yazıyı hazırlayan çalışma grubu görsel de göndererek İletişim Birimi'nden paylaşım yapmasını talep eder.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              5. Kooperatif Postası
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Web sitesinde hazırlanmış olan içerik 3 aylık periyotlarda Kooperatif Postası olarak hazırlanır. Hazırlanmış içeriklerin postaya dönüştürülme sürecinde ilk editöryel işlem Birim tarafından yapılır, içerik oluşturan kişilere ve mutfağa onay için sorulur. Gerekli düzenlemeler yapıldıktan sonra posta web sitesinde ve matbu olarak yayınlanır. Matbu alım işlemini Mutfak'tan inisiyatif alan kişiler yapar.
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

