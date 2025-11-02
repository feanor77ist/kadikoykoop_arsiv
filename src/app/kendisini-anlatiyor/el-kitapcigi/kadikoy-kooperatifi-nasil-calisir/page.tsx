import Link from "next/link";
import Navigation from "../../../components/Navigation";

export default function KadikoyKooperatifiNasilCalisir() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kendisini-anlatiyor" className="hover:text-blue-600 dark:hover:text-blue-400">Kadıköy Kooperatifi Kendisini Anlatıyor</Link>
          <span>/</span>
          <Link href="/kendisini-anlatiyor/el-kitapcigi" className="hover:text-blue-600 dark:hover:text-blue-400">El Kitapçığı</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Kadıköy Kooperatifi nasıl çalışır?</span>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            5. Kadıköy Kooperatifi nasıl çalışır?
          </h1>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Kadıköy Kooperatifi, ortakları, gönüllüleri, kooperatif dostları, üreticileri, dükkan ziyaretçileri ve kooperatif etkinliklerine katılan kişilerden oluşan geniş bir ağdır. Aynı zamanda, resmi organları, çalışma birimleri, yerel birimleri ve toplantılarından oluşan bir örgütlenmedir.
            </p>

            <p>
              Kooperatif ağına yalnızca alışveriş yaparak veya bir ürünü kooperatife sunarak dahil olunabilir. Kooperatif mekanizması ise, kooperatif ortakları ve gönüllülerinin oluşturulan hukuk çerçevesinde bütünleşmesini ve devamlılığı gerektirmektedir. Bu açıdan, kooperatif ortakları ve gönüllüleri, örgütlenme faaliyetinin devamlılığı, yaygınlaşması ve genişlemesi için kooperatif birimlerinde çalışmaya teşvik edilir.
            </p>

            <p>
              Kooperatif birimlerinde yer almayan kişiler bulundukları yer, yardımcı olabilecekleri konular vb. üzerinden iletişim kanallarını takip edebilir. Böylece, sürekli olarak bir birimde yer almak suretiyle olmasa da ihtiyaç duyulan zamanlarda çalışmalara yardımcı olabilirler.
            </p>

            <p>
              Kooperatifin faaliyetleri gerektirdiğinde bu faaliyetleri yürütmek amacıyla maaşlı çalışacak üyeler istihdam edilebilir. Bu üyeler, insani yaşam koşullarının gerektirdiği adil ücret, sosyal güvenlik ve çalışma yasalarınca belirlenen sosyal ekonomik haklar karşılığında çalışmalıdır.
            </p>

            <div className="space-y-8 mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  a) Yasal Mevzuat
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      1. Kuruluş Süreci
                    </h3>
                    <p>
                      Kooperatif tüzel ve gerçek kişiler arasından en az 7 ortak tarafından kurulur. Farklı yapılarda pek çok kooperatif çeşidi bulunmaktadır. Gümrük ve Ticaret Bakanlığı sitesinde yer alan kooperatiflerden kurulması planlanan kooperatife uygun olarak ana sözleşme örnekleri bulunmaktadır. Bakanlık başkentte olduğundan illerde kooperatif için Sanayi ve Ticaret İl Müdürlüğüne başvurarak kuruluş için gerekli evraklar listesi edinilebilir. Ana sözleşmede değişiklik yapılabilir lakin bunun için bakanlık onayı alınması gerekiyor. Ticari ünvanla ilgili kayıtlara bakılıp aynı isimden kooperatif olup olmadığı kontrol edilip isim ona göre belirleniyor.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      2. Kuruluş Sürecinde Gerekli Evraklar
                    </h3>
                    <p>
                      Kooperatif kuruluşu sırasında mersis (merkezi sicil kayıt sistemi) üzerinden T.C. kimlik no ile e-devlete giriş yapılıyor, ardından kurucu üyelerin TC kimlik noları girilerek merkezi bilgi sisteminden kişilerin adres ve iletişim bilgileri sisteme kaydediliyor. Sonrasında kurulacak kooperatif türü seçilerek bakanlığın ana sözleşmesi otomatik olarak indiriliyor, nace kodu (kooperatifin iş alanı tanımı) belirleniyor ve kuruluş kayıt işlemleri başlatılmış oluyor. Daha sonra kurucu en az yedi (gerçek veya tüzel) kişi notere giderek anasözleşmeyi imzalıyor ve notere tasdik ettiriyorlar. Önceden İl müdürlüğüne gidip istenen evrakları hazırlamak il müdürlüğünün istediği birkaç formunda onaylanan evrakların arasında yer almasını sağlıyor. 7 Kurucu üyeden başvuru dilekçesi, adli sicil kaydı ve 1 fotoğraf alınıyor. 3 üye YK, 2 üye DK ve 2 üye de ortak olacak şekilde kooperatif iş bölümü yapılıyor. İş bölümüne uygun olarak YK ve DK üyeleri ana sözleşmede yer alan şartları yerine getirdiğine dair birer beyan dilekçesi dolduruyor (YK ve DK üyeleri akraba olamaz, terör suçlusu olamaz gibi hükümler bulunuyor). Seçilen bir bankaya gidilerek kooperatif açılacağı belirtiliyor ve noter tasdikli ana sözleşme gösterilerek YK üyelerinin imzalarıyla hesap açılıyor, her bir üye adına en az 1 pay (100 tl) olmak üzere ortaklık payı belirleniyor ve ortak adına en az 1⁄4 i olmak üzere ortaklık payı bankaya yatırılıyor. Banka bu parayı kuruluş işlemleri tamamlanıncaya dek bloke ediyor. O yüzden ihtiyaca göre kuruluş sermayesini min. yatırmak gerekebilir. Her bir kurucu üye adına ayrı banka dekontu ve banka teminat belgesi alınıyor.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      3. Kuruluş izni ve Tescil İşlemleri
                    </h3>
                    <p>
                      Noterce onaylanan ve kurucu üyelerin imzaladığı ana sözleşme (2 asıl+4 fotokopi), banka dekontları, banka teminat yazısı, kurucu üyelerden alınan tüm evraklar il müdürlüğüne teslim ediliyor, 2 gün içinde kuruluş izni alınmış oluyor. Daha sonra Ticaret Sicil Müdürlüğüne gidiliyor, İl müdürlüğünden alınan ana sözleşme, tescil başvuru dilekçesi, (dilekçe için bir mali müşavir veya avukat bilgisi isteniyor, bu durumda bir müşavirler çalışmayı uygun bulduk biz, üye sayısı 100 den az olan kooperatiflerde ayrıca bir avukat istenmiyor) bakanlık izin yazısı, YK imza beyannameleri, fotoğraflı oda kayıt belgesi, kuruluş bildirim formu ile birlikte kooperatif tescil işlemleri yapılıyor. Sonrasında defterler tasdik ediliyor ve kuruluş işlemleri tamamlanmış oluyor. Kuruluştan sonra 6 ay içinde kuruluş genel kurulu yapılması ve atamayla değil seçimle YK'nın seçilmesi gerekiyor.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      4. Kooperatife Yeni Ortak Alımı
                    </h3>
                    <p>
                      Kooperatife yeni girecek ortakların, başvuru dilekçesi doldurması, 1 ad nüfus cüzdan fotokopisi getirmesi, ikametgâh belgesi getirmesi ve ayrıca kooperatifin resmi banka hesabına ortaklık payını yatırması gerekiyor. Ortaklığa kabul YK kararı ile gerçekleşiyor. Daha sonra ilgili kişi ortaklık defterine kaydedilerek ortak olmuş oluyor. Kooperatif ortağı ortaklıktan çıkmak isterse yıl sonundan en az 1 ay önce yazılı olarak ortaklıktan çıkış başvurusu yapar. Ortaklardan şimdilik katkı payı (200 tl) dışında bir ödeme almıyoruz. Biraz elimizde nakip paramız olsun diye 2016 Nisan ayından aralık ayına kadar aidat topladık kendi aramızda bunu da kooperatife borç kaydedip ortaklara ödeme yapacağız. Kâr amacı gütmediğimiz için ortaklara kar payı dağıtmayacağız diye karar aldık Genel Kurulda.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Kooperatifin Organları:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Genel Kurul</li>
                      <li>Yönetim Kurulu</li>
                      <li>Denetim Kurulu</li>
                    </ul>
                    <p className="mt-3">
                      Her sene haziran ayına kadar bir genel kurul yapılması zorunlu, iki senede bir seçimli genel kurul, diğer iki senede bir ise seçimsiz mali genel kurul yapılıyor. Bunun için bütün ortaklara genel kurulu tebliğ etmek (imzayla veya iadeli taahhütlü), Gümrük Bakanlığı'ndan temsilci istemek (genel kurul boyunca denetim için), onların ödemelerini yatırmak gerekiyor. Mali Müşavir bu konuda önceden uyarıda bulunarak bizi yönlendiriyor. Genel Kurul'dan hemen sonra en geç 15 gün içinde İstanbul Ticaret Odası'na gidip tescil işlemlerini yapmak gerekiyor. Sonra tescil belgesi Bakanlığa yollanıyor.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  b) Kooperatif kimlerden oluşur?
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      1. Kooperatif Ortağı
                    </h3>
                    <p>
                      Kadıköy Kooperatifi, resmi bir tüketim kooperatifi olarak "ortaklık" sistemine göre çalışır. Ortaklar, kooperatifin amaçlarını benimsemiş, tanımlı resmi görev ve sorumlulukları kabul etmiş katılımcılardır. Resmi bütün organlarda ve kooperatif birimlerinde görev alabilir, bütçeyi inceleyebilirler.
                    </p>
                    <p>
                      Kooperatif ortakları, ortaklık payı ödemekle yükümlüdür. Kooperatifin kolektif sermayesi ortaklık payı üzerinden oluşmaktadır. Bu sermaye, kooperatifin kendisini sürdürebilmesi amacıyla kullanılır. Gerekli olduğu durumlarda kooperatif sermayesinden ayrılan bir kısım eğitim çalışmaları ve toplumsal dayanışma amacıyla kullanılabilir.
                    </p>
                    <p>
                      Kadıköy Kooperatifi, ortağı olsun veya olmasın, bütün üreticilerle eşit mesafede ilişki kurar.
                    </p>

                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Kooperatife Ortak Olmak
                      </h4>
                      <p>
                        Kadıköy Kooperatifi'nin resmi organları ve çalışma birimleri vardır. Kooperatif ortakları bu birimlerde çalışmalarını sürdürür.
                      </p>
                      <p>
                        Kooperatife ortak olarak katılmak isteyen kişiler için ortaklık payının ödenmesi dışında bir "tanışma süreci" yürütülür. Bu süreçte, "ortak adayının" kooperatif amaç ve ilkelerini tanıması, kooperatifin pratik işleyişine alışması, kooperatif mekanizmasını öğrenmesi amaçlanır. Bu amaçla, mevcut ortaklardan biri ile ortak-adayı eşleşir. Ortak-adayı, kooperatifin işleyişi ve mekanizmaları ile ilgili bu eşten yardım alır, onun yönlendiriciliği ile çalışmalara katılır. Bu süreç içerisinde, Eğitim Birimi'nin organize ettiği eğitim çalışmalarına katılarak kolektif bir tartışma sürecine dahil olur. Resmi bir kooperatif ortağı olunmasına dair hukuki ve mali bilgilendirme yapılır. Ayrıca kooperatif dükkanında çalışmalara katılınması teşvik edilir. Kooperatif çalışmalarında yer almak isteyen herkes kooperatif ortağı olmaya teşvik edilir.
                      </p>
                      <p>
                        Böylece, Kooperatif dükkanında pratik işleyişi öğrenme, kooperatif eğitimlerinde teorik ve politik bilginin yanı sıra mali ve hukuki kapsamı öğrenme, kooperatifin haftalık toplantılarına katılarak karar alma süreçlerinde yer alma ve kooperatifin bir parçası haline gelme süreci, bütünlüklü ve sistematik olarak gerçekleşir.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      2. Kooperatif Gönüllüsü
                    </h3>
                    <p>
                      Herhangi bir sebeple kooperatif ortağı olmayan, ancak kooperatif çalışmalarına aktif bir şekilde katılan kişilerdir. Kooperatif gönüllüleri, kooperatifin resmi işleri ve organları haricinde, kooperatifin bütün çalışmalarına katılır, kooperatif birimlerinde yer alırlar. Kooperatif gönüllüleri de kooperatif ortakları ile aynı süreç çerçevesinde kooperatif çalışmalarına katılır. Kooperatif gönüllülerinin yasal hak ve sorumlulukları bulunmamaktadır.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      3. Kooperatif Dostu
                    </h3>
                    <p>
                      Kooperatif çalışmalarını çeşitli dayanışma biçimleri ile destekleyen kişilerdir. Bilgi ve becerilerini kooperatif ile paylaşırlar, dönemsel olarak veya uzun vaadeli olmak üzere karşılıklı belirlenen biçimlerde kooperatif çalışmalarına katılırlar. Atölye ve etkinliklere katılma, kooperatiften alışveriş yapma, kooperatifi anlatma gibi faaliyetler içerisinde bulunan kişilerdir. Haftalık toplantılara katılmaları beklenmez.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  c) Kooperatif Mekanizması
                </h2>
                <p>
                  Kadıköy Kooperatifi, çalışmalarını bütüncül ve sistematik olarak yürütmek amacıyla bir kooperatif mekanizması geliştirmiştir. Bu mekanizma uyarınca sürekli-haftalık toplantılar yapılmakta ve genel kararlar bu toplantılarda verilmektedir. Bunun yanında kooperatifin çalışma birimleri bulunmakta ve kooperatif çalışmaları bu birimlerin sorumluluğunda yürütülmektedir.
                </p>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Kooperatif Toplantıları
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">1. Haftalık Kooperatif Toplantısı</p>
                      <p>Kooperatif'in her hafta düzenli olarak yaptığı toplantıdır. Toplantı kooperatif ortakları, gönüllüler, ortak-adayları ve ilgililere açıktır. Haftalık toplantılarda, birimler kendi çalışmalarının bilgilendirmesini yapar; kooperatifin çalışmaları değerlendirilir, yeni yapılacak çalışmalar konuşulur ve genel yönelimler belirlenir. Haftalık toplantı, kooperatif birimleri dışında, kooperatif çalışmasının toparlandığı, değerlendirildiği ve dağıldığı, sürekliliği olan temel mekanizmadır.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">2. Çalıştaylar</p>
                      <p>Kooperatifle ilgili yapısal ve bağlayıcılığı olan kararlar (yeni dükkân açmak, üretim atölyesi kurmak, mali ve yasal yükümlülükler altına girmek, ilkeleri geliştirmek, sorunları ele almak vb.) tüm ortakların ve gönüllülerin katılımıyla yapılacak çalıştaylarda alınır.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">3. Eğitimler</p>
                      <p>Eğitim birimi tarafından organize edilir. Diğer birimlerden kişilerin katılımıyla düzenlenir. Teorik ve pratik olmak üzere 2 modülde gerçekleşir. Teorik modülde kooperatifin tarihi, ilkeleri, kavramları ve çalışma biçimi aktarılır. Pratik modülde ise kooperatifin yasal mevzuatı, dükkân işleyişi ve pratik işleyiş aktarılır.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">4. Atölyeler</p>
                      <p>Kooperatifin farklı mahalle ve ilçelerde düzenlediği, katılımcı tartışma etkinlikleridir.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Kooperatif Birimleri
                  </h3>
                  <p className="mb-3">
                    Kooperatif birimleri devamlılık, genişleme ve yaygınlaşma ihtiyaçlarına bağlı olarak tanımlanır. Her birimin çalışma alanı ve şeklinin tanımlı olması zaruridir. Böylece kooperatifin toplumla kuracağı ilişkinin tutarlı, bütüncül ve öğretici bir deneyim olması sağlanır. Her kooperatif ortağının bu faaliyetlerde rotasyon usulüne bağlı olarak çalışması öngörülür. Bir birimde belirli bir süre yer alan bir kişinin daha sonra başka bir birimde görev alması beklenir. Böylece herkesin istediği konuda yetkinleşme, beceri ve kabiliyetlerini aktarabilme hakkı sağlanırken tek konuda uzmanlaşma riskine karşı önlem alınır.
                  </p>
                  <p className="mb-4">
                    Kooperatif Birimlerinin çalışma alanları ve biçimleri, bu birimler tarafından geliştirilen ve bu metin içerisinde sunulmuş önerilerden oluşmuştur. Her birim kendi çalışmaları üzerinden hazırladıkları raporları, toplantı notları vb. belgeleri sanal dizinde saklar. Böylece yapılan her türlü çalışma, her denenmiş yöntem kayıt altına alınarak süreklilik ve devamlılık oluşturulur, kurumsallaşma sağlanır.
                  </p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">1. Sosyal Medya ve İletişim Birimi</p>
                      <p className="mb-2">İletişim biriminin amacı, kooperatif ortakları, üreticiler, gönüllüler ve bilgi almak isteyen herkese doğru, nitelikli, sağlıklı bilgi akışını sağlamaktır. Aynı zamanda Kadıköy Kooperatifi'nin uygun ve konuyla ilgili mecralarda, kooperatifin ilkeleri ve tüm işleyişiyle ilgili bilgilendirme yaparak kooperatifin bilinirliğini ve görünürlüğünü artırmaktır.</p>
                      <p className="mb-2">İletişim biriminde yer alan sorumlular 6 aylık rotasyonla çalışırlar. Rotasyon sürecinde yeni oluşturulan ekipte, deneyimli en az bir kişinin kolaylaştırıcı rolüyle kalması beklenir.</p>
                      <p className="mb-2">İletişim biriminin görevi, Kooperatifin düzenlediği etkinlikleri, kooperatifin ilgi alanına giren ve yapılması uygun görülen duyuruları tüm iletişim kanalları vasıtasıyla duyurmaktır. Bu iletişim kanalları arasında Facebook, Twitter, Youtube, kdkkoop@gmail.com mail hesabı ve Kadıköy Kooperatifi Genel Duyuru Grubu (Google groups) bulunmaktadır.</p>
                      <p className="mb-2">Facebook sayfasına gelen özel mesaj veya eylem gerektiren yorumları, twitter'dan gelen özel mesajları ve e-posta hesabına gelen postalarla ilgili gerekli bilgilendirmeyi mutfak grubuna iletir, takibini yapar ve mesajları cevaplar.</p>
                      <p className="mb-2">İletişim birimi, görev alınan süre boyunca iletişim hesaplarının güvenliğinden sorumludur. Hesaplara erişim için şifre değişikliği yapmak gerekirse, bu durumu birimdeki sorumluların bilgisi dahilinde yapar ve yeni şifreyi onlarla paylaşır. Yeni birim oluşturulduğunda, tüm iletişim hesaplarının erişim bilgilerini yeni birimle doğru ve eksiksiz olarak paylaştığından emin olur.</p>
                      <div className="mt-2 space-y-1">
                        <p className="font-medium text-gray-900 dark:text-white">Sosyal Medya Hesapları</p>
                        <p>Tanışma ve eğitim toplantıları, Kooperatif Dükkanı'na gelen yeni ürünler, çeşitli etkinliklerle ilgili duyurular mümkün olduğunca düzenli olarak paylaşılır. Dükkân saatleriyle ilgili istisnai durum ya da güncelleme mevcutsa konuyla ilgili bilgilendirme yapar.</p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">Kooperatif Postası</p>
                        <p>Üç ayda bir yayınlanacak posta için diğer birimlerle koordineli çalışma yürütür, içeriğine dair program çıkartır, taslak programı mutfak grubuyla paylaşır, dijital formatta hazır hale getirir.</p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">Kooperatif Web Sitesi</p>
                        <p>Kooperatif web sitesine yayın programı çerçevesinde içerik hazırlar, web sitesinin güncellenmesini sağlar ve gerekli teknik desteğin takibini yapar.</p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">Materyal Hazırlanması</p>
                        <p>Kooperatifin duyuru, bilgilendirme konusunda ihtiyaç duyduğu afiş, broşür, internet ortamında kullanılacak çeşitli görsellerin, videoların hazırlanması için yapılan çalışmaların bütününü koordine eder.</p>
                        <p className="font-medium text-gray-900 dark:text-white mt-2">Basın Yayınla İlişkiler</p>
                        <p>Basından gelen röportaj ve haber taleplerini değerlendirir, mutfak grubu ile paylaşır, programa koyar ve sonuçlarını takip eder. Ortaya çıkan malzemeyi drive'da uygun dizinde arşivler ve sosyal medyada paylaşır.</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">2. Örgütlenme ve Kurumsal İlişkiler Birimi</p>
                      <p className="mb-2">Örgütlenme Birimi kooperatifin çalışma alanında bulunan sosyal yapıyı analiz ederek ortaya çıkan Mahalleler, Dayanışmalar vs., Demokratik Kitle Örgütleri, Dost Mekanlar, Gıda toplulukları gibi başlıklara yönelik faaliyet planlar, bu çevrelerin kooperatif faaliyetine nasıl katılacakları konusunda somut öneriler geliştirir.</p>
                      <p className="mb-2">İstanbul'da, Türkiye'de ve Dünya'da benzer faaliyet yürüten kooperatiflerle, gıda topluluklarıyla ilişkileri kurar, birlikte faaliyet kanallarının oluşturulmasına yönelik çalışmalar yapıp kooperatife sunar.</p>
                      <p className="mb-2">Kooperatif deneyimlerini kooperatif çalışmasına yeni başlayacak grup ve topluluklarla paylaşma etkinliklerini planlar. Aylık Kooperatif kendisini anlatıyor toplantıları düzenler.</p>
                      <p className="mb-2">Çalışmanın içinde çıkan örgütlenme sorunlarını yazılı hale getirerek çözüm önerileri geliştirip kooperatife sunar, kooperatifin çalışmalarına aktif katılanlara yönelik eğitim programları eğitim birimi ile paylaşarak mutabakat sonucu kooperatife sunar.</p>
                      <p className="mb-2">Eğitim Biriminin hazırladığı çalışmalarının yerel ölçekte ve faaliyet yürüten kitle örgütlerinde yapılması için eğitim birimi ile çalışır. Yerelden gelen etkinlik taleplerinde kooperatif ile iletişim içinde etkinlikleri planlar.</p>
                      <p className="mb-2">Kooperatif çalışmasının başından günümüze kadar örgütlenme faaliyetinin raporunu tutar, günceller.</p>
                      <p className="mb-2">Kadıköy'de yaşayan ya da öğrenim gören öğrencilerin kooperatif çalışmalarına katılımları için mekanizmalar oluşturur.</p>
                      <p className="mb-2">Ürün birimlerinin üretici ziyaretleri planlamalarına katkıda bulunur.</p>
                      <p className="mb-2">Kooperatif çalışma gruplarının ihtiyaçları doğrultusunda ilgili kurumlarla ilişkiler kurması için gerekli koşulları ve iletişimi sağlar.</p>
                      <p>Kooperatif'e yeni ortak katılımı çalışmalarını yürütür, yeni katılmak isteyen ortak adaylarının örgütlenme sürecini koordine eder.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">3. Eğitim ve Araştırma Birimi</p>
                      <p>Kadıköy Kooperatifi'nin birliktelik ve dayanışma ilişkilerini geliştirme hedefinden hareketle Eğitim ve Araştırma Birimi, Kooperatif'in çalışma biçimini ve ilkelerini yeni katılımcılara aktarır. Yeni katılımcılar için her ay 1 defa olmak üzere "genel ortak eğitimi" çalışması organize eder. Bununla birlikte Kooperatif'in ilke ve vizyonunun pekiştirilmesi amacıyla kooperatif üyelerine yönelik eğitim çalışmaları da yürütür. Diğer birimlerle koordineli bir biçimde çalışarak içe ve kamuya dönük etkinlik (atölye, çalıştay vb.) ve doküman (broşür gibi) hazırlar.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">4. Gıda Ürünleri Üreticileriyle İlişkiler Birimi</p>
                      <p>Ürün temin edilmesi, üreticilerin keşfedilmesi (köylü pazarları araştırması, diğer kooperatif ve üreticilerden bilgi alınması), üreticilerle bağlantı kurulup gerekli bilgilerin alınması (ürün/üretici bilgi formu doldurulması vb.), ürünlerin getirilmesiyle ilgili işlerin koordine edilip gerçekleştirilmesi ve üretici ziyaretlerinin düzenlenmesi etkinliklerini yürütür. Ürün ve üreticilerin denetlenme modelinde üretici ziyaretleri, ilgili meslek odaları ile koordinasyon ve üreticilerle çalışma konusunda diğer birimlerle ilişki içinde mekanizma oluşturur.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">5. Gıda Dışı Ürünler Birimi</p>
                      <p>Gıda dışı ürünlerin araştırılması, üreticilerle iletişim kurulması, ürünlerin test ve temin edilmesi çalışmalarını yürütür. Ürün bilgi formlarının hazırlanması.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">6. Teknik Koordinasyon Birimi</p>
                      <p>Kooperatifin teknik ve teknolojik konularda duyduğu ihtiyaçlar konusunda gerekli sorumluluğu üstlenir. Kooperatifin kullanacağı bilgisayar sisteminin güncel ve güvende tutulması, kooperatif web sitesiyle stok takip ve ön muhasebe programlarının ihtiyaçlar doğrultusunda geliştirilmeleri ve güncellenmeleri gibi işlerin yanı sıra kurulması gereken teknik altyapılar da bu birimin yükümlülükleri arasındadır.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">7. Belge İşleri Koordinasyon ve Arşivleme Birimi</p>
                      <p>Kooperatif belgelerinin arşivlenmesi ve arşivin koordine edilmesi işlerini yürütür.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">8. Mali İşler Birimi</p>
                      <p className="mb-2">Kooperatif varlığı ve faaliyetlerinin gerektirdiği yasal süreçleri izlemek ve yürütmekle yükümlüdür. Kooperatif muhasebesinin kanunlara uygun yürütülmesi için Mali Müşavir, Avukat ve Muhasebeciyle birlikte çalışacak ve üyelerle koordinasyonu yürütecektir. Temel etkinlik alanları şunlardır:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-2">
                        <li>Kooperatif kuruluşu ve sonrasıyla ilgili yasal işlerin takip edilmesi</li>
                        <li>Kooperatif tüzüğünün oluşturulması ve zamanla doğacak ihtiyaçlara göre güncellenmesi</li>
                        <li>Kooperatifin tutmakla yükümlü olduğu yasal defterlerin takibi</li>
                        <li>Yasal olarak yapılması gereken aylık, dönemlik ve yıllık işlemlerin oluşturulması ve takip edilmesi</li>
                        <li>Kooperatif Genel Kurulu süreçlerinin düzenlenmesi</li>
                        <li>Düzenli olarak raporların oluşturulması ve yayımlanması</li>
                        <li>İşlerin takibi ve sürekliliğinin sağlanması için denetleme mekanizmasının kurulması ve işletilmesi</li>
                        <li>Kooperatif gelir-gider tablosu ve bütçe planlaması</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">9. Koordinasyon Birimi</p>
                      <p>Aylık takvim taslaklarını oluşturarak etkinlikleri ve toplantıları takvime işler, takibini yapar. Dükkân nöbet defterini takip ederek dükkân eksik-ihtiyaçları ve yapılacak işleri düzenli olarak listeleyip mutfak grubu ile paylaşır. Tamamlanmamış işleri hatırlatır. Toplantı mekanlarının listesini güncel tutar. Haftalık mutfak toplantısı için gündem maddelerini toparlayarak toplantıların moderatörlüğünü yapar. Plansız gelişen durumlarda hızlı görev dağılımı için inisiyatif kullanmak ve delege edilen işlerin takibini gerçekleştirmek de bu birimin sorumluluğundadır.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  d) Pratik İşleyiş
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Dükkânın İşleyişi
                    </h3>
                    <p>
                      Dükkân gönüllü nöbetçiler tarafından açık tutuluyor. Nöbetlerimiz haftaiçi her gün akşam 19:00-21:00 ve haftasonu 10:00-18:00 arası 2 şer saatlik rotasyonla tutuluyor. Gönüllü nöbetçiler olarak nöbetleri paylaşmada Doodle kullanıyoruz. Boş nöbetler olduğunda koordinasyon birimi iletişim kanallarından uyarıda bulunuyor. Aslında her bir nöbet dilimi için 1-2 kişi ortaklaşa sorumlu oluyor.
                    </p>
                    <p>
                      Kooperatif hem üyelerine hem de üye olmayanlara satış yapıyor. Henüz yazar kasa alamadık, aldığımızda perakende satış için yazar kasayı, ortaklara satış için fatura kesme yöntemini kullanacağız. Muhasebeci bunları arı şekilde işliyor çünkü ortaklar risturn istinasından faydalanıyor. Kısaca ödeyecekleri gelir vergisinin %50 si kendilerine iade ediliyor.
                    </p>
                    <p>
                      Kooperatifin de herhangi bir şirket gibi vergi numarası, ticaret sicil kaydı, tutması gereken resmi defterleri ve düzenli ödemesi gereken vergileri var.
                    </p>
                    <p>
                      Dükkânda her üreticinin bir sorumlusu var. Ürünler bittikçe mali birim veya dükkân nöbetçisi uyarıyor üretici sorumlusu yeni sipariş veriyor. Yeni sipariş verilirken mali birim bir önceki ay ne kadar satış yapılmış gibi bilgileri mutfak grubuyla paylaşıyor. Sipariş edilecek ürün yeni bir ürün ise emniyette kalmak için az miktarda getiriliyor, satış durumuna göre sipariş artırılıp azaltılabiliyor. Bazı ürünler yumurta gibi haftalık sipariş edilirken bazı ürünler sabun gibi 2 aylık sipariş ediliyor. Üründen ürüne sipariş periyodu değişebiliyor.
                    </p>
                    <p>
                      Tüm ödemeleri mali birim takip ediyor ve eldeki nakit durumuna göre sipariş süresine göre belirliyor, öncelik sırasını. Yine de yeni ürün alınan bir üretici ürün gelir gelmez ücretini isteyebiliyor, duruma göre değerlendiriliyor. Genellikle yeni sipariş geldiğinde bir önceki siparişin faturasını ödeyecek şekilde ayarlanıyor ödemeler.
                    </p>
                    <p>
                      Ürünün birim maliyetleri üzerine kooperatif katkı payı konularak ürün satış fiyatını oluşturuyoruz. Konulan bu miktar dükkân giderleri, vergiler, müşavirlik hizmetleri gibi genel giderler hesaplanarak bulunuyor. Şu anki ölçekte bu oran %15 çıktı, bunun üzerine de toplumsal dayanışma+amortisman+kooperatif eğitim masrafları için %3 gibi ufak bir oran belirlenerek ürün ortak satış fiyatını hesaplıyoruz. Biz genelde her ürüne aynı oranda katkı payı koyduk, sadece gider pusulası ve müstahsil makbuzu kestiğimiz üreticiler için ilave KDV vergisi harcını (%5) ürüne ilave ediyoruz. İki ayrı satış fiyatımız olacak yazar kasa ile birlikte.
                    </p>
                    <p>
                      Dükkânda yapılan satışlar ilgili nöbetçi tarafından kasa defterine işleniyor. Günün sonunda kasa defterinin fotoğrafı çekilerek mutfak grubuyla paylaşılıyor. Mutfak grubu gelen bilgileri excel de kendimizin oluşturduğu bir listeye işleyerek kayıt altına alıyor. Stok bilgisi, ödemeler bilgisi, faturalar bilgisi vs. burada mali birim sorumluluğunda hesaplanıyor. Ay sonunda ortaklara yapılan satışlar için fatura kesiliyor, vergiye tabi olmayan üreticiler için banka ödemesine göre gider pusulası ve müstahsil makbuzları kesiliyor. Mali müşavire faturalar ve fişler gönderiliyor, çıkan beyannameye göre vergilerin ödemesi yapılıyor.
                    </p>
                    <p>
                      Ürün siparişi verilirken bir sipariş formumuz var onu dolduruyoruz. Orada ne zaman sipariş edildiği, ürünün ne zaman geleceği, kaç adet sipariş edildiği, fatura kesilip kesilmeyeceği, nasıl dükkâna geleceği gibi sorular var onlar dolduruluyor. Yeni bir üretici ise banka hesap bilgileri ve T.C. kimlik numaraları alınıyor. Mali birim bu bilgileri kasa defterine işliyor. Daha sonra siparişin teslim aşamasına geçiliyor, burada gelen kargo açılıyor, sayılıyor, eksik ürün var mı, sipariş dışı bir ürün var mı, bozuk hasarlı ürün var mı gibi konular tespit ediliyor, ürün faturasının ve kargo fişinin fotoğrafı çekilip mutfak grubuna atılıyor. Siparişi teslim alan kişi sipariş formuna bu bilgileri işliyor. Mali birim tüm bu bilgiler ışığında ürünün birim maliyetini hesaplıyor, hasarlı, bozuk ürün varsa onları stoktan düşerek listesini güncelliyor. Siparişle gelen fatura ve fişleri dükkânda bir kutumuz orada muhafaza ediyor, zamanı geldiğinde mali müşavire fotokopilerini kendimize alarak teslim ediyoruz.
                    </p>
                    <p>
                      Her ayın sonunda mali birim bir bilgilendirme yapıyor, aylık ne kadar ürün satıldığı, toplam üreticiye ne kadar ödeme yapıldığı, dükkân masraflarının ne kadar olduğu ne kadar borcumuz ve kasamızda ne kadar nakit paramız olduğu konusunda. Ayrıca 3 aylık periyotlarla satış ve ödemeler raporlarını mutfak grubuyla paylaşıyor.
                    </p>
                    <p>
                      Her hafta pazar günü akşamı stok sayılıp listeler güncelleniyor. Yeni ürün geldiğinde güncel fiyat listesi yayınlanıp, etiketler kontrol ediliyor, hatalı etiketler var ise düzeltiliyor.
                    </p>
                    <p>
                      Dükkân nöbetçisi, yeni gelen ve etiketsiz ürün varsa onlara etiketleme yapıyor, rafların temizliğine dikkat ediyor, ihtiyaç görürse dükkânda temizlik yapıyor, buz dolabındaki ürünleri arka tarafı soğuk olduğundan öne alıp yerlerini değiştiriyor, kağıt torbalar üzerine sticker yapıştırıyor, eksik ürün varsa ya da azalmışsa mutfak grubunu bilgilendiriyor.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Gıda Ürün-Üretici İletişim Birimi
                    </h3>
                    <p>
                      Kooperatifte her ürün/üretici için bir ürün/üretici sorumlusu bulunmaktadır. Ürün/üretici sorumluları, sorumlu oldukları ürünlerin takibini yapar, yeni ürün siparişlerini verir, üreticiler ile ilişkileri pekiştirir.
                    </p>
                    <p>
                      Kooperatif ilkelerinde ifade edilen modele uygun olan üreticilerle iletişim kurulur. Ürünler, yapılan tartışmalar sonucunda çeşit ve miktar olarak belirlenir ve sorumlu kişi üretici ile temasa geçer. Ürünün hazırlanması, kargoya verilmesi ve kargodan alınması gibi süreçler takip edilir. Mali birimin fiyat hesabı yapması sonrasında ürünler dükkânda satılmaya başlanır.
                    </p>
                    <p>
                      Kooperatif dükkânı gönüllüler tarafından belirli çalışma saatleri içerisinde çalışmaktadır. İki haftalık hazırlanan ajanda içerisinde ortaklar ve gönüllüler uygun vakti belirler ve nöbet sistemine dahil olur. Nöbetçi, nöbet saatleri içerisinde satışları yapma, dükkânda düzeni sağlama, eksiklikleri belirleme ve haber verme sorumluluklarını üstlenir.
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold text-gray-900 dark:text-white">Gıda Ürün ve üretici birimi ne yapıyor?</span> Yeni üreticiler bulup, bağlantı kurularak gerekli bilgilerin alınması ve numune istenmesiyle ilgili işleri koordine ediyor. Aynı zamanda üretici ziyaretleri düzenlenmeyi amaçlıyor.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-white">Bugüne kadar nasıl üretici seçtik?</span> Üretici ve ürün konusunda büyük bir kısmı sipariş paketleri döneminden gelen BÜKOOP ve Çiftçi-Sen referansı üzerinden ilişki kurduğumuz bir listemiz var. Bu liste ekolojik tarım ilkesiyle çalışan, ilaçsız, kimyasal içermeyen üretim yapan kooperatif, dernek, vakıf veya aile biçimlerindeki küçük üreticilerden oluşuyor.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-white">Yeni üreticiler nasıl bulunuyor?</span> Mevcut üretici listesine yeni üreticiler eklenmeye devam ediyor. Bazen dükkâna gelerek, bazen mail veya facebook ya da kişisel tanışıklıklar üzerinden bize ulaşan üreticiler oluyor. Biz bu üreticilere öncelikle ürün ve üretici bilgi formu olmak üzere iki ayrı form gönderiyoruz.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-white">Üretici formunda neler soruyoruz?</span> Üretici formunda nakliye, hukuki statü, faturalandırma gibi ürün teminine ilişkin soruları; üretimin yapıldığı arazinin ölçeği, depolama koşulları ve paketleme aşaması; başka kurumlara satış yapılıp yapılmadığı, çalışma koşulları, çalışanların sigortalı olup olmadıkları, gelir yönetimini kim yaptığı, kadınların ve varsa çocukların ne işleri yaptıklarını soruyoruz.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-white">Ürün formunda neler soruyoruz?</span> Ürün formunda da üretim sürecine dair, sulamanın, gübrelemenin, yabani ot ayrıştırmasının, bahçe bakımının nasıl ve kimlerce yapıldığını; hammaddenin nereden temin edildiğini ve üretim yönetimini; ürün işleniyorsa -zeytinyağı gibi- hangi işleme yöntemi kullanıldığını ve kimlerin işlediğini; nasıl depolandığını, ürünün hangi aylarda tüketime hazır olduğunu ve tüketim süresi ile saklama koşullarını soruyoruz.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-white">Nasıl iletişim kuruluyor?</span> Bu formları bize türlü şekillerde ulaşan üreticilere mail yoluyla ileterek doldurmalarını rica ediyoruz. Gönderdikleri zaman da ürün ve üretici birimi olarak değerlendirme yapıyoruz. Formlardan bir tanesi eksikse değerlendirmeye almıyoruz. Üreticiye tekrar mail atıp doldurmasını rica ediyoruz. Bununla birlikte bazen formlar da tam doldurulmuş olmayabiliyor. Örneğin hammaddenin nereden temin edildiği önemli bir soru, bu eksikse karar vermek güçleşiyor. Bazen formlardaki bilgiler tam olsa da ilkelerimizle çelişebiliyor. Bu durumda buna dair endişemizi mutfak ile paylaşıyoruz ve o üreticiyle iletişimi beklemeye alıyoruz. Referans çoğu zaman belirleyici oluyor. Piyasadan veya haldeki komisyoncudan temin edilmiş hammadde ile üretim yapan ve referansı olmayan üreticilerle şu ana kadar hiç çalışmadık.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-white">Üreticiler ziyaret ediliyor mu?</span> Üretici ziyaretleri yaptığımız yerler oldu: Has Ada, Koray (yumurta), Sındı'ya gidildi. Ancak bunlar bireysel ziyaretler oldu. Organize bir şekilde, üretim sürecini görebileceğimiz, üreticiye sorularımızı sorabileceğimiz bir formata dönüştürmeyi planlıyoruz.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900 dark:text-white">Ürün çeşitlemesi nasıl oluyor?</span> Ürün çeşitlerini genelde üretici belirliyor, ne üretiyorsa alıyoruz gibi. Yeni bir ürün almaya karar verdiğimizde de bazen BÜKOOP'a bazen de Çiftçi-Sen'i arayıp üretici önerisi alıyoruz. Öneri varsa yine aynı şekilde üreticiyle görüşüp, formu doldurup, değerlendirip önce numune istiyoruz, daha sonra da sipariş veriyoruz.
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Gıda Dışı Ürün-Üretici İletişim Birimi
                    </h3>
                    <p>
                      Gıda ürünleri gibi tüketicilerden, dükkânda ürün talebi gelmediği gibi sadece farklı kanallardan üreticilerin talepleri geliyor. Birim olarak Örgütlenme Birimi'nin desteği ile Kimya Mühendisleri Odası (KMO) ile iletişime geçerek danışmanlık talep edildi. KMO özetle, direkt insanların tenine temas etmesi ya da solunması gibi farklı yollarla insan sağlığına zarar verebilecek kozmetik ürünlerden ve temizlik ürünlerinden uzak durmamızı önerdi. Kozmetik ürünlerin dermatolojik testlerinin küçük üreticiler tarafından da tamamlanması gerektiğinden uzun süre kullanımının insan sağlığına etkileri gibi detaylı bir rapor paylaştı. Ek olarak da Kozmetik Ürünlerin içermemesi gereken 1132 maddelik Dünya Sağlık Örgütü'nün listeleriyle ortak 42 sayfalık bir dokuman ve kullanılmasına izin verilen oranlarıyla kullanım alanlarından etiketlerine kadar detaylandırılmış 40 sayfalık bir dokuman daha paylaştı. Birim olarak kozmetik ürünleri dükkânda bulundurmak istemeyişimizi mutfak ekibine aktardık. Tekstil ürünlerinin dükkânda bulunabilmesi için de üreticinin tamamlaması gereken testlerin maliyetli oluşu nedeniyle tekstil ürünlerinden, direkt uzun süre insan tenine temas ederek sağlığa zararlı olabilecek ürünlerden uzak durmayı önerdik. Yeni kooperatif girişimlerinden talep gelmesi durumunda kooperatif dostlarının danışmanlıklarını, yaptığımız araştırmaları, hazırladığımız ürün formlarını, KMO'nun sorularımız üzerine hazırladığı danışmanlık raporunu ve kırkar sayfalık her 2 dokümanını da paylaşabiliriz.
                    </p>
                    <p>
                      Birim olarak gelen taleplere göre araştırmalarımızı yaparak mutfak toplantılarına taşımaya çalışıyoruz. Dükkânda gıda dışı ürünler olarak temizlik malzemelerimiz var. Has Ada'nın yüzey temizleyicisi, Dersim'den Ayşegül Ayvaz'ın zehirsiz temizlik ürünleri olan çamaşır ve bulaşık makinalarında kullanılabilecek toz halinde zehirsiz temizlik malzemeleri ve Has Ada'nın zeytinyağı sabunları bulunuyor. Yırca Kadınları'nın ürettiği sabun ve mum da yakında dükkânda olacaklar. Temizlik malzemelerinde boraks bulunmamasına özellikle dikkat ederek üreticiler için özel temizlik malzemesi ürün formu hazırladık. Boraks bazı ülkelerde hastane gibi kapalı mekanlarda temizlik malzemesi olarak bile kullanılması yasaklanmış ve evdeki böceklerin istilasında yem hazırlanarak böcekleri öldürmekte kullanılıyor. Bilim insanlarının arasında tartışılmaya devam edilmesi sebebiyle de uzak durmayı tercih ettik. Üreticilerden ürünün içeriğinden dükkâna ulaştıktan sonra muhafaza edilmesine kadar detaylı sorularla hazırlanmış ürün bilgi formunu ulaştırmalarını istiyoruz. Dükkândaki her ürünün bilgi kartlarını da bu ürün bilgi formlarımızın yardımıyla hazırlayarak üreticilerimizin üretim safhalarını ve koşullarını bilgi kartlarımızda belirtiyoruz. Dükkânda bulunan temizlik ürünlerimizin etiketlenmesi gibi mevzuata dair konuları birim olarak kendimizi geliştirerek öğrenerek uygulamaya çalışıyoruz.
                    </p>
                    <p>
                      Önümüzdeki günlerde de bilinçli tüketici alışkanlıklarının pekiştirilmesi, şehirden kırsala yerleşmeyi düşünen tüketiciyken üretici olmak isteyen kooperatif dostlarımız için bir kitap rafımız olacak. Kooperatifin kuruluşu öncesinde de bizimle olan kurum ve kişilerin kitaplarının ulaşılabilir olmasını sağlayacağız.
                    </p>
                    <p>
                      Sadece dayanışma rafımızdaki ürünler için ön değerlendirmemizi yapmıyoruz. Dayanışma rafımızda bulundurulabilecek gıda dışı ürünlerle ilgili ilk iletişime geçtiğimizde; kooperatifin ilkelerinden bahsediyoruz ve kimi zaman karşı taraf bize uygun olabilecek geri dönüşüm ürünleri gibi alternatiflerini önerebiliyor. Sosyal medya veya mail yoluyla bize ulaşan üretici taleplerini araştırarak ilkelerimiz doğrultusunda birim olarak değerlendiriyoruz. Mutfak toplantısına değerlendirmelerimizi aktardığımızda şayet üreticiyle çalışmak kabul edilirse üretici ile iletişime geçiyoruz. Değerlendirmelerimiz üzerine kabul edilmemesi durumunda da iletişime geçerek dayanışmayla kalmak üzere gerekli açıklamayı yaparak teşekkür ediyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Back Button */}
        <div className="mt-8 sm:mt-12">
          <Link
            href="/kendisini-anlatiyor/el-kitapcigi"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            El Kitapçığı Ana Sayfasına Dön
          </Link>
        </div>
      </main>
    </div>
  );
}

