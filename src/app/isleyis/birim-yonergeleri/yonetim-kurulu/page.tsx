"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function YonetimKurulu() {
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
          <span className="text-gray-900 dark:text-white font-medium">Yönetim Kurulu Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Yönetim Kurulu Yönergesi
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Yönetim Kurulunun Oluşturulması
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yönetim Kurulu gönüllülük esasına dayanarak rotasyon usulüne uygun şekilde genel kurulda 1 yıllığına oluşturulur. Seçimli genel kurulda yeni seçilen yönetim kurulu üyeleri Mal Varlığı Beyanı doldurarak bakanlığa tescil belgeleriyle birlikte göndermek üzere mali müşavire kapalı zarfta teslim ediyor. Genel kurulun ardından Ticaret Sicil İl Müdürlüğünden temsil ilzam kararı çıkması sonrası, önce notere gidilerek imza beyannamesi çıkartılır. Genel Kurul kararının ilanı ve tescili tamamlandıktan sonra İş Bankası Bahariye Şubesi'ne gidilerek bankada kayıtlı eski yetkiler iptal ettirilerek yeni üyeler için yetki tanımlanır, gerekli olması durumunda eski iletişim adres ve numaraları güncellenir. Genel Kurul öncesinde, sırasında ve sonrasında kullanılan tüm belgeler belge hesabına aktarılmalı ve arşivde ilgili klasörde tutulmalıdır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Yönetim Kurulu Yapısı ve İşleyişi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yönetim kurulu biri başkan, biri başkan yardımcısı biri de muhasip üye olmak üzere üç kişiden oluşmalıdır. Yönetim kurulu üyeleri kooperatif ortakları arasından ortaklık tarihine göre rotasyon usulüyle belirlenir. Üyelerden en az bir yıldır aktif mutfak gönüllüsü olması beklenir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Yönetim Kurulunun Görevleri
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yönetim kurulunun yapmakla yükümlü olduğu işlerde hem tüm üyelerin sürece tam hâkimiyetinin sağlanması hem de adaletli iş dağılımı olması adına birim içerisinde iş bölümü uygulanmaktadır. Bu iş bölümü de rotasyona tâbidir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yönetim kurulu üyeleri şu işlerle uğraşır:
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Kooperatif dükkanından teslim alınan cironun banka hesabına banka kartını kullanarak aktarmak (1. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Üretici ve vergi ödemelerini mali birimle birlikte yürütmek (2. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Yasal olarak yapılması gereken aylık, dönemlik ve yıllık işlemlerin oluşturulması ve takip edilmesi (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Genel Kurul ve sonraki süreci mali müşavirle birlikte organize etmek, kooperatifin tutmakla yükümlü olduğu yasal defterlerin işlenmesi ve takibi (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Kooperatife ortaklık kabulü ve ortaklıktan ayrılma işlerinin takibi (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ortakların aidat ödemelerinin takibi (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>6 aydır gönüllü olanlara ortak olmanın teklif edilmesi, Ortaklar ve Mutfak Listesinin güncellenmesi ve ortaklara fatura yazımı için TC kimlik numaralarını içeren güncel ortaklar listesinin e-posta yoluyla mali birim üyeleriyle paylaşılması (TC kimlik numaralarının ifşa edilmemesi amacıyla bu listenin TC kimlik numarası içermeyen hali arşivde Yönetim Kurulu dizininde bulunmaktadır) (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ortaklar listesinin en güncel halinin Pirot'taki ortaklar listesiyle aynı olduğunun teyit edilmesi (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Otomatik ödeme talimatıyla ödenen faturaların ödendiği bilgisinin Banka Kasa ve Dükkan giderleri isimli excel sekmelerine işlenmesi (1. ve 2. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Yönetim kurulu içindeki rotasyonun mutfak gönüllüleri ile mail yoluyla paylaşımı (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fire/Gider/Ağırlama olarak sınıflandırılan ürünler hakkında karar defterine karar yazılması (tüm üyeler)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Mali birimden her ay düzenli olarak bildirilen %1 Amortisman, %1 Toplumsal Dayanışma, %1 Kooperatif giderleri payının kooperatifin ayrı bir hesabına aktarılması (2. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Aylık gelir gider Aylık Gelir Gider Tablosunun mali müşavirlik ofisinden talep edilmesi mutfak e-posta grubunda paylaşılması (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>kdkkoop@gmail.com e-posta hesabının düzenli kontrolü (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Gerektiği durumda ruhsat alınması/yenilenmesi/takibi (tüm üyeler)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Her ay düzenli toplantı yapılması (tüm üyeler)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>İmzalanan herhangi bir sözleşme varsa Mali Müşavire iletilmesi (3. üye)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Herhangi bir avans verilecekse bu konuda yönetim kurulu kararının alınması (tüm üyeler)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>YK işleyişine dair iyileştirme önerilerine ihtiyaç varsa geliştirmek ve yeni konuları yönergeye işleyerek mutfakla güncellemeleri paylaşmak (tüm üyeler)</span>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                1. Cironun Banka Hesabına Aktarılması
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatif banka hesabının kartını bulunduran yönetim kurulu üyesi, mutfak gönüllülerinden ciroyu alır ve kart ile kooperatifin banka hesabına yatırır. Virman yatırılırken ay atlanmamasına dikkat edilir. Ayın son günü kasada bir miktar para bırakmak suretiyle alınan virman bir sonraki ay gelmeden bankaya aktarılmalıdır. Daha sonra yatırılan miktarı ciroyu veren kişinin adı ve cironun dükkandan alınma tarihi bilgileri ile banka-kasa excel'ine işler. Bu bilgiyi YK whatsapp grubunda da paylaşır. Bankadaki tutar ile excel'deki tutar arasında bir uyumsuzluk varsa, hesap dökümünden önceki ödemeleri takip ederek hesaptan yapılmış otomatik ödemeleri excel'e işler. Halen bir uyumsuzluk söz konusuysa bu bir açık olduğunu gösterir. Bu açığın bulunması için gerekli araştırmayı yapar.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2. Üretici ve Vergi Ödemelerinin Yapılması
              </h3>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Üretici Ödemeleri
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Bu iş mali birimin siparişlerin geliş sırasına göre oluşturduğu üretici ödemeleri listesine göre mali birimin yönlendirmesiyle yapılır. Excele ödemenin yapıldığı bilgisi tüm haneler dolu olacak şekilde işaretlenir ve ödeme dekontları pdf veya jpeg formatında mutfak grubuyla paylaşılır. Kira, apartman aidatı ve vergi ödemelerinin dekontlarının belge hesabına gönderilmesi de gerekmektedir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Mali birimden üretici ödeme listesi geldikten sonra YK üyelerinden biri, üretici ödemelerini yapar, yapan ödemeleri banka-kasa ve üretici ödemeleri excel'ine işler ve ödemelerin dekontlarını mutfakla paylaşır. Üretici eğer fatura kesebildiyse üretici ödemeleri ve dekonta fatura numarası ve ürünün dükkana geliş tarihi, müstahsil kesildiyse müstahsil makbuz numarası ve ürün teslim tarihi yazılır.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Vergi Ödemeleri
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Vergi ödemeleri için Mali Müşavir'in gönderdiği evraklar takip edilir ve vergi ödeme tarihi geçmeden banka yoluyla vergi ödemesi yapılır. Ödeme işlemi hem banka-kasa hem de dükkan giderleri excel'ine işlenir. Dekontları mutfak ve belge e-posta adreslerine iletilir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Vergi tahakkuk ve beyannameleriyle birlikte ödeme dekontları arşivde Mali Konular klasörünün bir alt klasörü olan Vergi Tahakkuk ve Ödemeleri klasöründe arşivleniyor. Mali müşavir vergi tahakkuklarını yalnızca YK üyelerine yolladığı için, bu tahakkukların ödeme dekontlarıyla birlikte mutfak ve belge hesabıyla paylaşılması gerekiyor.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">Vergiler:</strong>
                </p>
                <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Katma Değer Vergisi (KDV) (aylık)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Stopaj Vergisi (Muhtasar Beyanname) (Şubat 2019'dan beri aylık)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Kurumlar Vergisi (Tüzel kişiler için Gelir vergisidir, yıllık olarak Nisan'da ödenir)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Kurumlar Geçici Vergisi (3 ayda bir ödenir Ocak, Nisan, Temmuz, Ekim)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Çevre Temizlik Vergisi (Belediyeden takip edilir en geç 31 Mayıs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>İlan Reklam (Tabela) Vergisi (Belediyeden takip edilir)</span>
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Yukarıda sayılan vergiler içerisinde gelen iki vergi türü daha vardır. Bunlar ayrı bir takip ve ödeme gerektirmez:
                </p>
                <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Damga Vergisi (Muhtasar Beyanname ve Geçici Kurumlar Vergisi içinde geliyor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Kira Stopajı (Muhtasar Beyanname içinde MM tarafından hesaplanıyor)</span>
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Yukarıda sayılan vergilerden vergi dairesine ödenenler mali müşavirin yönetim kurulu üyelerine yolladığı tahakkuk fişlerine göre bankanın internet şubesi kullanılarak ödenebilmektedir. Belediyeye ödenen vergileri ise yönetim kurulu takip etmelidir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Çevre temizlik vergisi yılda 2 defa ödenmektedir. İlk taksit ödemesi Mart ayında başlar ve 3 ay boyunca gecikmeye düşmeden gerçekleştirilebilinir. 2. Taksit ödemeleri Kasım ayında yapılmaktadır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Tabela vergisi ise; belediyede ilan ve reklam vergisi olarak adlandırılmaktadır. Yılda 1 defa ödenir. Tabelanın boyutuna, işyerinin muhtevasına göre belediye tarafından vergilendirilir. Beyannamesi olan bir mükellef her yılın ocak ayında vergi ödemesini gerçekleştirir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Çevre temizlik ve tabela vergileri Kadıköy Belediyesi'nin e-belediye sistemi üzerinden veya belirtilen banka şubelerinden ödenebilmektedir.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                3. Yasal Olarak Yapılması Gereken Aylık, Dönemlik ve Yıllık İşlemler
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Mali müşavir ve mali birimle koordineli şekilde yürütülen işlerin listesi ve iş bölümü listesi
              </p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Banka Hesap Dökümünün Mali Müşavirle Paylaşılması
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Aylık vergi hesaplarmalarının yapılabilmesi adına biten son aya ait tüm faturalar, tahsilat makbuzları, müstahsil makbuzları, gider pusulaları, ortak faturaları, z raporları ve banka hesap dökümü mali müşavirle paylaşılmaktadır. Faturaların ve diğer matbu belgelerin teslimi mali birim üyeleri tarafından yapılsa da banka hesabına erişim yetkisi yalnızca yönetim kurulu üyelerinde bulunduğundan banka hesabının biten son aya ait hesap dökümü YK üyeleri tarafından ayın 10'undan önce excel formatında bankadan doğrudan mali müşavirin mail adresine gönderilir.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Defterlerin Tasdiki
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  1163 sayılı Kooperatifler Kanunu'na göre kurulan kooperatiflerin yasal olarak tutmakla yükümlü olduğu defterler şunlardır:
                </p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong className="font-semibold">Yevmiye Defteri</strong> (Mali Müşavirlik ofisince muhafaza ediliyor) - Muhasebede, ticari işlemlerin belgelere dayanarak tarih sırası ile maddeler halinde kaydedildiği deftere yevmiye defteri denir. Yani muhasebe sistemindeki tüm dijital verilerin matbu olarak tutulduğu kağıtlardır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong className="font-semibold">Defteri Kebir</strong> (Mali Müşavirlik ofisince muhafaza ediliyor) - Yevmiye defterlerine kaydedilmiş işlemleri buradan alarak sistemli bir şekilde hesaplara dağıtan ve düzenli olarak bu hesaplarda toplayan defterdir. Büyük Defter de denir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong className="font-semibold">Envanter Defteri</strong> (Mali Müşavirlik ofisince muhafaza ediliyor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong className="font-semibold">Karar Defteri</strong> (YK üyelerince muhafaza ediliyor ve güncelleniyor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong className="font-semibold">Ortaklar Defteri</strong> (YK üyelerince muhafaza ediliyor ve güncelleniyor)</span>
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Kanuni defterlerin belli edilen sürelerde tasdik ettirilmemesi usulsüzlük cezasının uygulanmasını gerektirir. Tasdiki zorunlu olan defterlerden herhangi birinin tasdik işleminin yaptırılmamış olması birinci derecede usulsüzlük cezası gerektirmektedir. Bu defterlerin saklanma süresi Türk Ticaret Kanununa göre 10 yıldır.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Defterlerin Tasdik Zamanı
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Vergi Usul Kanununun 221. Maddesi ve Türk Ticaret Kanununun 64. Maddesi hükümleri uyarınca;
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
                    <li>Öteden beri işe devam etmekte olanlar defterin kullanılacağı yıldan önce gelen son ayda, (Normal hesap dönemleri için ARALIK AYI);</li>
                    <li>Hesap dönemleri Maliye Bakanlığı tarafından tespit edilenler, defterin kullanılacağı hesap döneminden önce gelen son ayda;</li>
                    <li>Yeniden işe başlayanlar, sınıf değiştirenler ve yeni bir mükellefiyete girenler işe başlama, sınıf değiştirme ve yeni mükellefiyete girme tarihinden önce; vergi muafiyeti kalkanlar, muaflıktan çıkma tarihinden başlayarak on gün içinde;</li>
                    <li>Tasdike tabi defterlerin dolması dolayısıyla veya sair sebeplerle yıl içinde yeni defter kullanmaya mecbur olanlar, bunları kullanmaya başlamadan önce.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                4. Genel Kurul Sürecinin Takibi
              </h3>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Genel Kurul Süreci
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Genel Kurul süreci öncesinde mali müşavir ile iletişim içerisinde gerekli belgeler hazırlanır. Gündem maddeleri mutfakta netleştirilip mali müşavire iletilir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Genel Kurulda okunacak bilanço, öncesinde mali müşavirden talep edilir, incelenir, özellikle ortak borçlarına dair bir yanlışlık varsa genel kuruldan önce düzeltilir. Bilanço, gelir gider tablosu mutfakla paylaşılır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Genel Kurul sürecinde gerekli olan evraklar arşivde Resmi/Referans Belgeler klasöründeki Genel Kurullar dosyasında bulunuyor.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Her yıl en geç Haziran ayında olmak üzere bir genel kurul yapılması zorunlu.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Genel Kurul için bütün ortaklara genel kurulu tebliğ etmek (imzayla veya iadeli taahhütlü) gerekiyor. Elden tebliğ yapılması durumunda Genel Kurula tam katılım (asaleten ve vekaleten) sağlanması gerekiyor.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Elden veya adi posta/iadeli taahhütlü posta yoluyla yapılacak tebligatlarda tebligat tarihi Genel Kuruldan en az 32 gün en fazla 60 gün önce olmalıdır. Ortaklara Genel Kurul tebligatı yapılabilmesi için Genel Kurulda görüşülecek gündemlerin de belirlenmiş olması ve tebligatta gündem listesine yer verilmesi gerekir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Genel kurul toplantı tarihi, yeri ve gündemi toplantıdan en az 15 gün önce ilgili bakanlığa ve mülki idare amirliğine yazılı olarak bildirilir. Eğer asaleten ya da vekaleten tam katılım sağlanacaksa bu bildiri zorunlu değildir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Genel kurul bildiriminin tebliğ edildiğini kanıtlayan tebligat listesi, genel kuruldan önce ortakların her birine imzalatılmalı ve imzalı tebligatlı listesi genel kurul günü hazır bulundurulmalıdır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Elden tebliğ ederek 32 gün önceden tebliğ şartına uyulmuyorsa Genel Kurula tam katılım şarttır. Bunun mümkün olabilmesi için Genel Kurula katılamayacak ortaklar, birinci derece bir yakınına veya YK üyesi olmayan bir ortağa vekalet vermelidir (imzalı belge yeterli, noter şart değil)
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Gümrük Bakanlığı'ndan temsilci genel kurul boyunca hazır bulunmak üzere denetim için bir temsilci isteniyor ve bu bir ücret karşılığı oluyor. Genel Kurul süresince hazır bulunan görevliye (temsilci/müfettiş) elden ödeme yapılıyor (~200TL-600TL arasında denetçinin talebine göre).
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Mali Müşavir bu konuda önceden uyarıda bulunarak bizi yönlendiriyor. Genel Kuruldan sonra en geç 15 gün içinde İstanbul Ticaret Odası'na gidip tescil işlemlerini yapmak gerekiyor. Bu tescil evrakları işini mali müşavir yürütüyor. Tescil evrakının bakanlığa gönderilmesinden önce yeni yönetim kurulu üyelerinin noterde imza beyannamesi çıkartması gerekiyor. Bakanlığa gönderilen belgelerle mali müşavir ilgileniyor ve bakanlık artık çevrimiçi bir sistem kullanıyor.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                5. Ortaklık Kabul/İstifa İşlemlerinin Takip Edilmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ortaklığa kabul YK kararı ile gerçekleşir. Ortak olmak isteyenlere gerekli belgeler listesi iletilir, belgelerde bir eksiklik olup olmadığı kontrol edilerek ortaklığa kabul durumunda, Ortaklık Belgelerinin eksiksiz olduğu teyit edildikten sonra ortak bilgisi Ortaklar Defterine kaydedilerek belgeleri diğer ortakların belgeleriyle bir yönetim kurulu üyesinde bulunan ortaklar dosyasında muhafaza edilir. Ortaklık başvuru dilekçesi kopyası Mali Müşavire iletilir. Yeni ortak ayrıca ortaklar e-posta grubuna da eklenir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatife ortak olmak isteyenlerin hazırlaması gereken belgeler arşivde Çalışma Birimleri klasörü içerisindeki Yönetim Kurulu dosyasında yer almaktadır.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                6. Ortakların Aidat Ödemelerinin Takibi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Yönetim kurulu üyeleri kooperatif ortaklarının yıllık yatırması gereken aidat miktarını her yılın Aralık ayında kontrol eder ve aidatı yatırmayan ortaklara hatırlatma yapar.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                7-8. Ortaklar ve Mutfak Listesinin Güncellenmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ortak ve mutfak listeleri her katılımdan ve ayrılıktan sonra düzenlenir ve ortaklara fatura yazımı için TC kimlik numaralarını içeren güncel ortaklar listesi e-posta yoluyla mali birim üyeleriyle paylaşılır. (TC kimlik numaralarının ifşa edilmemesi amacıyla bu listenin TC kimlik numarası içermeyen hali arşivde Yönetim Kurulu dizininde bulunmaktadır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Listenin TC kimlik numaralarını içermeyen hali de güncellenmeli ve arşivde Yönetim Kurulu dizininde tutulmalıdır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ayrıca Yönetim kurulu üyeleri Ortaklar listesinin en güncel halinin Pirot'taki ortaklar listesiyle aynı olduğunun teyit eder. Bir aksaklık olması durumunda Teknik birimi ve Mali birimi konuyla ilgili bilgilendirir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                6 aydır mutfak gönüllülüğü yapan kişilere ortak olmanın uygun zamanda teklif edilmesi ve ayrıntılı bilginin mutfak listesine işlenmesi.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                9. Otomatik Ödeme Talimatı Olan Faturaların Takibi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Otomatik ödeme talimatıyla ödenen faturaların ödendiği bilgisi, Banka Kasa ve Dükkan giderleri isimli excel sekmelerine işlenir. Bu işlemden sonra banka hesabındaki miktarla, Banka Kasa excel tablosundaki miktarın birbiri ile aynı olup olmadığı kontrol edilir. Bir uyuşmazlık varsa nedeni araştırılır.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                10. Yönetim Kurulu İçindeki Rotasyonun Mutfak Gönüllülerine Bildirilmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Yönetim kurulu üyeleri uygun görürlerse 'Yönetim Kurulu Üyelerinin Görevleri' başlığında tariflendiği gibi 4 ayda bir görev rotasyonu yaparlar. Bu rotasyonu e-posta yoluyla mutfak üyelerine bildirirler.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                11. Fire/Gider/Ağırlama Olarak Sınıflandırılan Ürünler Hakkında Karar Yazılması
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bozulan, kırılan veya gider olarak sınıflandırılan ürünlerin vergisel açıdan kooperatife yük bindirmemesi adına bu tür ürünlerin stoktan düşülmesi adına yönetim kurulu kararı alınması gerekmektedir. Fire, masraf, hediye olarak kaydedilecek ürünlerin aylık YK toplantısında yazılması gerekir. Dayanışma ve masraf olarak kullanılacak ürünler hakkında önce mutfakta tartışılmalı, tartışma süreci sehven atlandıysa yönetim kurulu tekrar gündeme getirmeli ve ilgili kararı ancak sonrasında karar defterine yazmalıdır.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                12. %3'lük Payın Kooperatife Ait Ayrı Hesaba Aktarılması
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ayrıntılar belli olduğunda bilgiler güncellenecektir.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                13. E-posta Hesabının Ortak Kullanımı
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                kdkkoop@gmail.com hesabının şifresi YK üyelerinden birinde bulunur, iletişim birimi bu şifreyi bilen kişilerin listesini tutmaktadır. Bazı resmi yazışmalar (Mali müşavirlikten gelen beyannameler, hosting için şifreler ve vergi dairesi vb.) ve dışarıdan gelen faturalar için bu adres kullanılmakta. İnternet faturası veya e-postaya gelen faturaların MM'ye iletildiğinin teyit edilmesi. (İletişim birimi faturaları mutfakla paylaşmayı atlayabiliyor veya mali birim elektronik formattaki faturayı diğer faturalarla birlikte MM'ye iletmeyi atlayabiliyor.)
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                14. Ruhsatın Alınması, Yenilenmesi ve Takibi
              </h3>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Yeni Bir Mekan Kiralanırken
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Yeni bir mekana taşınma durumunda resmi evraklarımızdaki adresimizin değişmesi gerekmektedir. Bu işlemler Mali Müşavirle iletişime geçilerek birlikte yapılmalıdır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Dükkan kiralanmadan önce belediyeye gidip ilgili dükkanın ruhsat ve adresiyle ilgili bir sıkıntının/tutarsızlığın olup olmadığının öğrenilmesi gerekmektedir, çünkü mal sahibinin doğru sandığı adres belediyede gözüken adresle uyuşmayabilir veya mekan dükkan için gereken ruhsat tipini almak için uygun olmayabilir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Bir diğer olası sıkıntı da, dükkanın kapı numarasının belediye kayıtlarında, mal sahibinin bize beyan ettiğinden farklı olması olabilir. Bu durumda belediyenin numarataj bölümüne başvuru yaparak kapı numarasının düzenlenmesi sağlanır. Vergi levhası ve kontrattaki adres bilgileri belediyedeki kayıtlarla aynı olmak durumundadır bu sebeple önce belediyeden bilgi teyit edilmeli, işlemlere sonrasında başlanmalıdır.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Adres Değişikliği Durumunda Ruhsatın Yenilenmesi
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Mevcutta kooperatifimize ait işyeri açma ruhsatımız bulunmaktadır. Olası bir mekan değişikliğinde (yeni yer kiralanması gibi) ruhsat işlemleri yeniden yapılmak durumundadır. Ruhsat işlemine başvurmadan önce yer değişikliği bildirimi öncelikle vergi dairesine ve İstanbul Ticaret Odası'na yapılmalıdır yapılmalıdır. Vergi dairesine yeni adres bildirilirken söz konusu yerin adresi belediyenin numarataj bölümünden kontrol edilmelidir. Vergi dairesine bildirim yapıldıktan sonra, yeni adresin yer aldığı belge/güncel vergi levhası, imza sirküsü, ticari gazete kaydı, dükkanın içeriden ve dışarıdan çekilmiş fotoğrafları, kira kontratı, son 2 ayın kira dekontu (eğer kiralama 2 aydan önce gerçekleşmişse), yangın tüplerinin faturası ve kaşe ile başvuru gerçekleştirilir. Çevre bölümüne gidilerek çevre beyannamesi verilir, çevre vergisinin ödemesi yapılır, dekont alınır. Tüm bu evraklar ruhsat bölümüne teslim edilir. Eğer bir sıkıntı yok ise (kapı numarası, ilgili mekanın uygunluğu gibi) ruhsat harcı, vezne bölümüne yatırılarak dekontun fotokopisi ruhsat bölümüne teslim edilir. Süreç başlamış olur. Ruhsat hazır olduğunda belediyeden başvuruyu yapanın telefonuna gelen bilgilendirme ile ruhsat teslim alınır. Olası solma, kaybolma gibi durumlarda ruhsatın yenilenmesi de uğraştırıcı bir süreç olduğundan ruhsatın orjinali bir dosyada saklanır, renkli fotokopisi dükkana asılır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Daha önce işlemleri tamamlanan ruhsat başvurusunda kullanılan belgeler Yönetim Kurulu Arşiv Klasöründe ayrı bir dosyada toplanmıştır. Aynı şekilde ruhsat ve benzeri süreçlerde kullanılan belgelerin tek bir yerde ve ne için olduğu anlaşılacak bir isimlendirmeyle muhafaza edilmesi bilgilerin eksiksiz ve doğru aktarımı için elzemdir, böyle yapılması önerilmektedir.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                15. Her Ay Düzenli Toplantı Yapılması
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Yönetim kurulu kooperatif işlerini ihmal ediyor görünmemelidir. Bu nedenle her ay düzenli toplandığı belgelenmelidir. Her ay karar almak mümkün olmazsa karar defterinde toplantı yapıldığı ama karar alınmadığı belirtilmelidir. Bu toplantılara 3 ayda bir Denetim Kurulu da katılmalı ve kasa ve banka mevcutlarını kontrol ederek tutanak altına almalıdır.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                16. Sözleşmelerin Mali Müşavire İletilmesi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatif üreticilerle ya da başka herhangi bir tüzel kişilik ya da şahısla sözleşme imzalayacaksa bu süreç Mali Müşavirin denetiminde ilerlemelidir. Sözleşme imzalandıktan sonra bir kopyası Mali Müşavire iletilmelidir.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                17. Avans İçin Yönetim Kurulu Kararı Alınması
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Herhangi bir avans ödemesi durumunda yönetim kurulu karar almalıdır.
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

