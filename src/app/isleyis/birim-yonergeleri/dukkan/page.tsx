"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function Dukkan() {
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
          <span className="text-gray-900 dark:text-white font-medium">Dükkan Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Dükkan Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Mart 2020
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="font-semibold">Ön Bilgilendirme:</strong> Yönergede geçen, ilgili kişilere ya da birimlere bilgi verilmesi anlamında ifadelerde anlatılmak istenen iletişim kurulacak mutfak grubu üyelerine whatsapp üzerinden kişinin/kişilerin ismi/isimleri etiketlenerek mesaj atılmasıdır.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                1- Dükkan düzeni ve sosyal etkileşim
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Her nöbetçi;
              </p>
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Fırsat buldukça ortalığı toparlar, yere dökülenleri süpürür ve temiz bir görüntü sağlamaya çalışır,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Dükkandan çıkmadan önce mutfakta kirli bulaşık bırakmadığından emin olur,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Çöp dolduysa boşaltır ve çöpe yeni çöp poşeti koyar,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Güneş durumuna göre perdeleri ayarlar ve dükkanın kapalı görünmesine neden olacak perdeler açık tutulur.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Işık durumuna göre aydınlatmayı düzenler.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Bir sonraki nöbetçiye, nöbetinin bitmesine en az bir saat kala, dükkanda ihtiyaç duyulan malzeme veya bozuk para konusunda bilgi vererek yardım ister,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Dükkanda azalan veya biten ürünlerle ilgili ürün sorumlularına bilgi verir. Ürünlerle ilgili gelen sorular ürün sorumlularına yönlendirilir,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Kooperatif broşürünün her zaman el altında ve gelenlerin kolayca görüp alabileceği bir yerde bulunması sağlar,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Bilgi almak isteyenlerin isimlerini ve e-posta adreslerini yazdıkları liste kolayca görünüp yazılabilir bir yerde tutulur (Bu konuda daha sonra kişisel verilerin korunması gereğince ayrı bir düzenleme yapılacak). Bu liste doldukça yenisi ile değiştirilir, fotoğrafı iletişim birimine iletilir, kendisi iletişim biriminin alması için çekmeceye kaldırılır.</span>
                </li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Nöbetçi aynı zamanda;
              </p>
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Nöbet süresi boyunca kooperatifin örgütlenme sorumlusu olduğundan gelecek her türlü soruya ve çağrıya olabildiğince kapsamlı ve açıklayıcı yanıtlar verir; kişileri kooperatifte gönüllüsü olarak çalışmaya davet eder.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Resmi bir temsilci sıfatında bulunduğundan olası resmi bir işlem, denetim, raporlama durumunda Yönetim Kurulu üyelerine bilgi vererek işlemlerin sağlıklı yürütülmesini ve gerekiyorsa YK aracılığıyla mali müşavirin yardımcı olmasını sağlamaya çalışır. Gönüllülerin de dükkanda satış yapabileceğine dair genel kurulda alınmış ve karar defterine işlenmiş bir karar var. Bu nedenle telaşa gerek yok. Ancak resmi bir işlem için gerekirse ve o sıradaki nöbetçi kooperatif ortağı değilse mutfağa bilgi vererek en yakındaki ortağın dükkana gelmesini isteyebilir.</span>
                </li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Dükkan sosyal bir mekan olduğundan nöbetçi dükkanda yürütülen faaliyetler konusunda bilgili olmalıdır. Örneğin kedilerle dayanışma, kitap satışı, Köstebek ürün dağıtımı gibi konularda nöbetçinin bilgi sahibi olması beklenir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                2- Nöbet defterinin tutulması hakkında:
              </h2>
              
              <div className="space-y-4 mb-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="font-semibold">a-</strong> Nöbete başlarken, yani satışa başlamadan önce, Pirota girilerek para durumu sekmesinden pirottaki miktar deftere not edilir; Kasa sayılarak miktar not edilir ve aradaki fark belirlenerek deftere aşağıda örnek olarak belirtildiği gibi işlenir:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200">
                  Kasa - Nakit 307.85<br />
                  Kasa - Kredi 0<br />
                  Kasa - Toplam 307.85<br />
                  Pirot 298.3<br />
                  Fark 9.55
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="font-semibold">b-</strong> Kredi kartı ile satış yapıldığı için pirottaki tutar ile kasadaki tutar farklı olabilir.Günün ilk nöbetçisi yazar kasadan çıkan Z- Raporunu alıp kutusuna kaldırmadan önce üzerinde yazan "Kredi" miktarını virman yaparak güne başlamalı. Z raporu bir önceki nöbetçi tarafından akşam kutuya kaldırılmış da olabilir. Üzerindeki tarihten kontrol edilebilir. Aşağıdaki resimde bir örneğini gördüğünüz Z-Raporunun "Ödeme Bilgileri" bölümünde yer alan "Kredi" kısmında yazan miktar kadar kasadan çıkıp bankaya girecek biçimde virman yapılır.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  İlk nöbetçi bu virmanı yaptıktan sonra açılışını yapıp deftere:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200">
                  24 Şubat Kredi kartı Virmanı: 1021<br />
                  Kasa - Nakit 307.85<br />
                  Kasa - Kredi 0<br />
                  Kasa - Toplam 307.85<br />
                  Pirot 298.3<br />
                  Fark 9.55
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  biçiminde kaydeder. Burada görüldüğü üzere kredi kartı ile yapılan satış miktarı virman yapıldığı için "Kasa - Kredi" değeri 0 (sıfır) olmalı. İlk nöbetçi çıkacağı zaman nöbeti boyunca yaptığı kredi kartı satışını bu bölüme girmeli. Daha sonra gelen nöbetçi de bu değeri alıp devam etmeli ve kendi yaptığı satışları üzerine ekleyerek defteri kapatmalı. Bu değerler o günün akşamı Z raporunda topluca yer alacağından bir sonraki günün ilk nöbetçisi sabah geldiğinde yine Z-raporundaki değeri virman yaparak güne başlamalı. Gün boyunca tüm nöbetçiler nakit ve kredi kartı ile yapılan satışları takip ederek deftere işler.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="font-semibold">b-</strong> Gün içinde yapılan harcamalar deftere detaylı olarak işlenir ve pirota girilir. Örneğin kargo parası ödendiyse Pirot'ta giderler sekmesinden "Yeni Gider" düğmesine basılarak gider miktarı ve gider ayrıntıları kaydedilir. Yapılan ödemelerin belgeleri fatura kutusuna düzgünce yerleştirilir. Fatura görselleri mali birim etiketlenerek whatsapp grubunda paylaşılır. Deftere işlenen kargo giderleri için kargo şirketi ve gelen ürün mutlaka belirtilir.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="font-semibold">c-</strong> Nöbet sonunda öncelikle nöbet tutulan zaman aralığında yapılan satışların toplamı 'Satış' ifadesiyle deftere yazılır. Sonrasında aynı şekilde Pirota girilerek para durumu sekmesinden pirottaki miktar deftere not edilir ve kasa sayılarak miktar not edilir ve nöbet sonunda aradaki fark belirlenerek deftere aşağıdaki gibi işlenir:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200">
                  Satış-Nakit 200<br />
                  Satış- Kart 75<br />
                  Toplam satış 275<br />
                  Kasa-Nakit 505.85<br />
                  Kasa-Kart 75<br />
                  Kasa-Toplam 580.85<br />
                  Pirot 573.3<br />
                  Fark -7.55 (Bir tüketicinin 2 lirası çıkışmadı, sonra bırakacakmış) -temsili
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Eğer nedeni biliniyorsa aradaki farka dair bir açıklama not edilir ve mali birime durum iletilir.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Tutulan günün son nöbetiyse toplam satış miktarı (günlük ciro) deftere işlenmelidir. Bunun için 'Raporlar' bölümünden 'Ciro' sayfasına gidilerek uygun tarih aralığının seçilmesi yeterlidir.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Günün son nöbetçisi, defteri işleyip hesapları kapattıktan sonra kasada sadece bozuk paralar (50 ve 100 TL'den küçük olanlar ve en az 2 adet 50 TL) kalacak şekilde parayı alarak virman olarak pirota işler. Ardından kasa ve pirottaki para durumunu yeniden deftere işler.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Virman alınmış bir günün defterinin son hali temsili olarak aşağıdaki gibi olmalıdır:
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-200">
                  24 Şubat Kredi kartı Virmanı: 1021<br />
                  Kasa - Nakit 307.85<br />
                  Kasa - Kredi 0<br />
                  Kasa - Toplam 307.85<br />
                  Pirot 298.3<br />
                  Fark 9.55<br />
                  <br />
                  Kargo 90<br />
                  Su 10<br />
                  <br />
                  Satış-Nakit 200<br />
                  Satış- Kart 75<br />
                  Toplam satış 275<br />
                  Kasa-Nakit 405.85<br />
                  Kasa-Kart 75<br />
                  Kasa-Toplam 480.85<br />
                  Pirot 473.3<br />
                  Fark -7.55 (Bir tüketicinin 2 lirası çıkışmadı, sonra bırakacakmış) -temsili<br />
                  <br />
                  Virman 300<br />
                  Kasa-Nakit 105.85<br />
                  Kasa-Kart 75<br />
                  Kasa-Toplam 180.85<br />
                  Pirot 173.3<br />
                  Fark -7.55
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                3- Satışların işlenmesi
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Satışı yapılan ürünler Pirot'ta satışlar sekmesinden yeni satış düğmesine basılarak kaydedilmeye başlanır. Bazı ürünler hazır paket olarak tanımlanmıştır. Bu bilgi ürün isimlerinde belirtilmiştir. Buna göre miktarların doğru girilmesi gereklidir. Örneğin "Pirinç - 1kg - Ayhan Kaleli" ürünün 1 kg'lık paketler halinde satıldığı anlamına gelir. Bu durumda pirinç satıldığında 1 adet yazılması gereklidir. Eğer tartılarak satılan bir ürün ise "Peynir - Eski Kaşar - Gr - .." bu durumda ürünün tartılıp, kilo hesabı yapılarak Pirot'a işlenmesi gerekir. Bu durumda miktar bölümüne gram olarak ağırlık girilmeli, hesap da elle yapılarak tutar bölümüne fiyatı girilmelidir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Satışlar için satış fişi verilecekse tüm ürünler girildikten sonra Kaydet butonuna basılarak satış kaydedilmelidir. Eğer satış fişi kesilmeyecekse "Ortağa satış" kutucuğu işaretlenerek kaydedilmelidir. Bu tür satışlar için ay sonunda mali birim tarafından ortaklara fatura düzenlenecektir. Kaydetme sırasında acele edilmemeli, ekranın düzgünce güncellenmesi beklenmelidir. Aksi halde bazı satışlar kaydedilmeyebilir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Eğer satılan ürün sayısı 6 kalemden fazla ise ilk altı kalem girildikten sonra satış kaydedilmeli ve satışların listelendiği ekrandan o satışa tekrar girilerek yeni açılan satırlara diğer kalemler girilmelidir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Eğer satış sırasında bir yanlışlık olduysa yine satışların listelendiği ekrandan satış işlemine girilerek düzeltmeler yapılabilir. Ürün veya miktar değiştirilebilir ya da satır silinebilir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Satış sırasında ürün listede çıkmıyorsa muhtemelen ürün dükkanda olmasına rağmen stoklarda bitmiş görünüyordur. Böyle bir durumda stok düzeltme yapması için mali birimden yardım istenmelidir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                4- Satış fişi yazılması
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Pos cihazı ekranındaki 3 noktaya peşpeşe basılarak ekran etkinleştirilir. Satışı yapılan ürünlere ilişkin KDV oranlarına göre pirotta, satış kaydının en altında satış miktarları listelenecektir. Buradaki miktarlar sıra ile yazılıp ardından KDV tipi olan K1, K2, K3, K4 işaretleri yazar kasa üzerinden seçilmelidir (bir fiyat bir KDV tipi şeklinde sırayla girilmelidir). Tüm miktar ve KDV tipleri girildiğinde "Enter" butonuna basılarak fiş yazılır. Yazılan fiş sakince yandan çekilip koparılarak verilmelidir. Verilemeyen fişler bir karışıklığa yol açmamak için nöbet boyunca uygun bir yerde veya defter arasında biriktirilmelidir. Zira başka birisine fiş verilebilir veya kişi geri gelip "benim fişim nerede?" diyebilir, olmaz olmaz dememek lazım.:)
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Yazarkasanın kullandığı fiş ruloları çekmecede saklanmalı ve gerektiğinde değiştirilebilmelidir. Değiştirmek için yazarkasadan kağıdın çıktığı yerdeki kapak yukarı doğru kaldırılmalı, rulo açılıp yuvay yerleştirilmeli ve kağıdın temiz yüzü size bakacak biçimde çıkarılarak kapak kapatılmalıdır. Çekmecedeki rulo sayısı ikiye düştüğünde bir sonraki nöbetçiden 56x16 ölçüsünde rulo alması istenir. Bu rulolar kırtasiyelerde bulunabilir. Yoksa fiş verilemez ve kredi kartı kullanılamaz ve Kadıköylülerin toplayıp kredi kartı yok diye almadan masaya bıraktıkları malzemeleri yerine yerleştirmekle geçer nöbetiniz...
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                5- Z raporu
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Her akşam saat 21 sularında yazarkasa (namı diğer POS cihazı tüm bezginliğiyle otomatik olarak Z raporu üretir. Bu rapor alınarak Z raporu kutusuna tarih ve fiş numarası sırasına göre konulur. Z raporlarının fiş numaraları birbirini takip etmeli ve ay sonunda eksik bir fiş olmamalıdır. Eğer kağıt bitmesi, elektrik kesintisi gibi nedenlerle Z raporu çıkmadıysa yazarkasanın F butonuna basılır, şifre "0000" olarak girilir, raporlar bölümüne girilir ve Z raporu seçilerek bastırılır. Bu sırada Theodorakis'ten Z şarkısı çalınmalıdır, yoksa rapor yanlış çıkar! :)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                6- Kargoların teslim alınması
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ürünleri getiren kargocular aceleyle paketleri bırakıp kaçma eğiliminde olur. Bu durumlarda kargoyu kontrol etmek için aceleye mahal olmadığını beklemesi gerektiğini belirtiriz. Aynı biçimde bekleyen müşteri varsa, kargoyu almak gerektiğini belirterek izin istemek hoş olur. Gelen kargonun alıcısının "S.S. Kadıköy Tüketim Kooperatifi" olduğundan emin olmak çok önemlidir zira kooperatifler arası karışıklıklar sıklıkla yaşanmaktadır. Alıcısı başka olan kargo paketlerini teslim almayıp, nedenini açıklayarak iade ederiz. Kargocu yükten kurtulmak için paketi verip kaçmaya çalışacaktır. Sonra halletmek çok sancılı olduğundan yanlış olduğunu bildiğimiz işlere engel oluruz. Ayrıca yeni sistem gereği kargo faturaları elektronik olarak yollanabiliyor. Böyle bir durumda hem mali birime hem de ürün sorumlusuna kargo faturasının mail ile yollanacağının bilgisi verilmeli. Kuryeye de mali birimin mail adresi verilmeli (mali@kadikoykoop.org). Gelen ürün miktarının teslim fişinde belirtilen miktarda olduğundan emin oluruz. Bunun için sipariş formuna bakmak gerekebilir. Kargo ile birlikte ürünün ve/veya kargo hizmetinin faturası olup olmadığını sorar ve varsa teslim alırız. Ürün faturası paketlerin içinde olabilir. Ürün fiyatının hesaplanabilmesi için ürün ve kargo faturasının veya miktarının kesin olarak bilinmesi gereklidir. Bu bilgileri faturaların fotoğrafları ile birlikte mali birime bildirilir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kargo teslim alındıktan sonra ilgili ürün veya üreticiye ilişkin ürün-üretici sorumlusunun oluşturduğu sipariş formunun alt bölümünde yer alan teslim alınan miktarlar, faturadaki fiyatlar ve kargo ücretleri sipariş formuna yazılır. Nöbetçi ürün sorumlusu ile haberleşerek sipariş formunun eksiksiz olarak durdurulmasını sağlar. Sipariş formu gerekli bilgilerle güncellendikten sonra, ürün ve kargo faturası fotoğrafları ile birlikte Mali Birime bilgi verilerek fiyat hesaplanması istenir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                7- Ürünlerin yerleştirilmesi
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ürünler geldiğinde fiyatları henüz hesaplanmadığı için satışa hazır değildir. Bu nedenle paketleri açmak yerine, tüketicilerin kolayca ulaşamayacağı hatta mümkünse göremeyecekleri biçimde istifleriz ve mali birimden haber bekleriz. Aksi takdirde son derece ısrarcı tüketicilerin yıldırıcı kötücül enerjileri yaşama sevincimizi yok eder ve kendimize gelip yeniden insancıl tavırlar sergilememiz 3 asır sürebilir. Hakkaten bak...
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Fiyatları hesaplanmış ve satılabilir duruma gelen ürünler, stok girişi yapıldıktan sonra paketlerinden çıkarılarak raflara yerleştirilmelidir. Fiyat hesabı yapılmadan asla stok girilmez. Stok girişi yapılırken ürün adı ve ambalaj şekline dikkat edilir. Bazı üreticiler aynı ürüne ait farklı ambalajlar yapabilir. Örneğin arpa şehriye bir sefer 400 gram bir sefer 500 gramlık paketlerde gelebiliyor. Stok girişi yapılırken ürünün ambalaj şekline göre doğru miktar girilmelidir. Gelen ürün Nohut-3 kg-Ovacık Koop. ve faturasında da 120 kg yazıyorsa, ürünün satış şekli 3 kg'lık paket olduğundan 40 adet stok girişi yapılır. Eğer 120 kg diye stok girilirse bu pirotta 120 adet 3 kg'lık paket olarak değerlendirilecek ve 360 kg nohut kaydedilecektir ki, çok fena olur…
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Aynı ürünler farklı raflara değil, olabildiğince aynı raf bölgesine yerleştirilmelidir. Eğer başka raflara koymak zorunda isek her rafa, ürüne ilişkin bir etiket koymak gereklidir. Kooperatif organik ürün arayışında olmasa da bazı ürünler organik sertifikasına sahiptir ve Tarım Bakanlığının yönergesi nedeniyle organik ve organik olmayan ürünler farklı raflarda sergilenmelidir. Raflarda akmış, ambalajı delinmiş ürün bulundurulmamalı ve raflar temiz tutulmalıdır. Eksilen ürünler depolandıkları paketlerden çıkarılarak rafların dolu görünmesi sağlanmalıdır. Vakit oldukça mercimek ve benzeri topluca alınan ürünler paketlenmeli ve raflara yerleştirilmelidir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Gıda ürünler, ve gıda dışı ürünler aynı raflarda birlikte bulunmaz. Gıda dışı ürünler kendilerine ayrılan rafta sergilenmelidir. SIcak su borularının geçtiği yerlere gıda ürünler konulmamalıdır. Eğer raflarda yer yoksa ürünler yerden en az 15 santimetre yüksekte duracak biçimde konulmalıdır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Nöbetçiler düzenli olarak raflarda bulunan etiketleri kontrol eder, eskiyen ve okunamaz hale gelenleri değiştirir. Pirot ile etiketteki fiyatları karşılaştırır ve olası hataları önlemeye çalışır. Ürünlere dair gerekli açıklamaların uygun biçimde sergilendiğinden emin olur. Tüketiciler her konuda pek çok soru sorabilir ve bu soruların yanıtları bu kartlarda yer alır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                8- Ürünlerin raflardan kaldırılması
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Herhangi bir nedenle zarar gören, bozulan veya satılamayacak duruma gelen ürünler raflardan veya tüketicilerin erişebileceği yerlerden kaldırılır. Bunların miktarı ve durumu konusunda mutfağa ve mali birime bilgi verilir. Mali birim fire gireceğini belirttikten sonra bu ürünler mutfak tarafından tüketilebilir veya nöbetçi tarafından atılır. Fire girişini pirota sadece mali birim yapar. Aynı şekilde dükkanda satışı olan bir ürün dükkan için masraf olarak kullanılacak ise ( örneğin çay ) yine mali birime ürün adı ve adedi bilgi verilir. Masraf girişini pirota sadece mali birim yapar. Önemli olan dükkanda bozulmuş ürün bulundurmamak ve gelenlerde olumsuz bir izlenim bırakmamak ve kayıtların gerçeklerle örtüşmesini sağlamaktır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bazı durumlarda ürünlerin ambalajları zarar görebilir. Bu tür ürünler raflardan alınıp mutfak dolabına kaldırılır. Bunların elde kalmaması için ve standart ürün ile aralarında fark olmadığından bunları gönüllülerin alması sağlanır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                9- Örnek olarak gönderilen ürünler, mutfağın kullandığı ürünler
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ürün üretici birimi bazı ürünleri onaylamadan önce bunlardan belirli miktarlarda örnek ister ve bu örnekler dükkanda ayrı bir bölmede tutulur. Bu ürünler satılan ürünlerle karıştırılmaz. Ayrıca mutfak üyeleri kendileri için bazı ürünleri getirebilirler. Bu ürünler de tüketicilere gösterilmez ve onların erişebileceği yerlerde bulundurulmaz. Mutfak gönüllülerinin kendileri için sipariş ettiği ürünleri en geç 3 gün içerisinde dükkândan almalıdır. Eğer bu süre elde olmayan koşullar sebebiyle uzatılmak durumunda kalacaksa gönüllü bunu mutfağa bildirmeli ve kendisi yerine bir başkasının ürünü almasını sağlamalıdır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Dayanışma çerçevesinde dükkanı dağıtım yapmak için kullanan kişi ve grupların ürünleri mutfakta, ziyaretçilerin erişemeyeceği bölümlerde bulunur. Dağıtım işlemi sırasında ilgili gruptan bir temsilci dükkanda bulunmalı ve işlemleri yürütmelidir. Eğer herhangi bir nedenle ürünlerin dükkanda kalması gerekirse, mutfakta ziyaretçilerin erişemeyeceği biçimde saklanmalı ve miktar da buna uygun olmalıdır. Çok miktarda ürün açıkta hiçbir zaman bırakılmaz. Dayanışma çerçevesinde belirlenen süre geçtiğinde ürünlerin dükkanda bırakılamayacağı ilgili kişi ve gruplara en baştan belirtilir. Bu nedenle süresi geçen ürünler mutfak tarafından uygun biçimde değerlendirilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                10- Son nöbetçinin dramatik öyküsü
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Akşam çıkan nöbetçi ışıkları söndürür. Bilgisayarı kapatır. Bilgisayarın adaptörünü fişten çıkarır. Dolapların ışıklarını kapatır. Isıtıcıyı kapatır. Çaydanlığı kapatır ve temizler. Her durumda çöpü boşaltır ve yeni çöp poşeti koyar. Ellerini yıkar, gözyaşlarını siler ve kah bir kadeh içmeye gider, kah eve döner… :)))
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

