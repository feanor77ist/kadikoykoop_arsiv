import Link from "next/link";
import Navigation from "../../../components/Navigation";

export default function AnasozlesmePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kooperatifcilik" className="hover:text-blue-600 dark:hover:text-blue-400">Neden ve Nasıl Kooperatifçilik?</Link>
          <span>/</span>
          <Link href="/kooperatifcilik/mevzuat" className="hover:text-blue-600 dark:hover:text-blue-400">Mevzuat</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Tüketim Kooperatifi Anasözleşmesi</span>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">T.C.</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">GÜMRÜK VE TİCARET BAKANLIĞI</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">Kooperatifçilik Genel Müdürlüğü</p>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              TÜKETİM KOOPERATİFİ ANASÖZLEŞMESİ
            </h1>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              Bu Anasözleşme, 1163 sayılı Kooperatifler Kanununun 88 inci maddesi uyarınca hazırlanmıştır.
            </p>
          </div>

          {/* BİRİNCİ BÖLÜM */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              BİRİNCİ BÖLÜM
            </h2>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              KURULUŞ, TÜZEL KİŞİLİĞİN KAZANILMASI VE ANASÖZLEŞME DEĞİŞİKLİĞİ, UNVAN, MERKEZ VE ŞUBELER, SÜRE, AMAÇ VE FAALİYET KONULARI
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">KURULUŞ:</h4>
                <p className="font-semibold mb-2">Madde 1-</p>
                <p className="leading-relaxed">
                  Bu anasözleşmede isimleri, tabiiyetleri, adresleri ve taahhüt ettikleri sermaye payları gösterilen, kişiler tarafından, 1163 sayılı Kooperatifler Kanunu hükümlerine göre değişir ortaklı, değişir sermayeli ve sınırlı sorumlu bir Tüketim Kooperatifi kurulmuştur.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">TÜZEL KİŞİLİĞİN KAZANILMASI VE ANASÖZLEŞME DEĞİŞİKLİĞİ:</h4>
                <p className="font-semibold mb-2">Madde 2-</p>
                <p className="leading-relaxed">
                  Kooperatif ticaret siciline tescil ile tüzel kişilik kazanır. Tescilden önce kooperatif namına iş ve işlem yapanlar bunlardan şahsen ve zincirleme olarak sorumludur. Anasözleşmede yapılacak değişiklikler kuruluştaki usule bağlıdır.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">UNVAN:</h4>
                <p className="font-semibold mb-2">Madde 3-</p>
                <p className="leading-relaxed">
                  Kooperatifin unvanı, Sınırlı Sorumlu …………………….……………….…… Tüketim Kooperatifi'dir.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">MERKEZ VE ŞUBELER:</h4>
                <p className="font-semibold mb-2">Madde 4-</p>
                <p className="leading-relaxed mb-2">
                  Kooperatif merkezi [belirtilecek]'dır.
                </p>
                <p className="leading-relaxed">
                  Kooperatif gerekli gördüğü takdirde yurt içinde ve yurt dışında şubeler açabilir. Şubeler, merkezin sicil kaydına atıf yapılmak suretiyle bulundukları yer Ticaret Siciline tescil olunurlar.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">SÜRE:</h4>
                <p className="font-semibold mb-2">Madde 5-</p>
                <p className="leading-relaxed">
                  Kooperatif süresizdir.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">AMAÇ VE FAALİYET KONULARI:</h4>
                <p className="font-semibold mb-2">Madde 6-</p>
                <p className="leading-relaxed mb-3">
                  Kooperatifin amacı, ortakların tüketim maddelerine olan ihtiyaçlarını karşılamaktır.
                </p>
                <p className="font-semibold mb-2">Bu amaçla kooperatif;</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Üretim merkezlerinden, ilk ellerden ve diğer satıcılardan ucuza satın alacağı tüketim maddelerini peşin veya kredili olarak ortaklarına satar.</li>
                  <li>Konusu ile ilgili işletmeler kurarak ortaklarının ihtiyaçları için üretim faaliyetlerinde bulunur, bu konuda kurulmuş teşebbüslere katılır.</li>
                  <li>Ortaklarının tüketime yönelik ihtiyaçlarından gerekli görülenleri yurtdışından ithal suretiyle temin eder. Bu konuda tüketim kooperatifleri üst kuruluşlarıyla işbirliği yapabilir.</li>
                  <li>Kooperatifin kredi ihtiyacının karşılanması amacıyla ilgili finansman kuruluşlarına başvuruda bulunur, borçlanır, açılan kredinin zamanında ve amacına uygun kullanılmasını sağlayıcı tedbirleri alır.</li>
                  <li>Diğer kooperatiflerle işbirliği yapar.</li>
                  <li>Amaçları doğrultusunda gerekli araçlar ile gayrimenkul ve işletmeler satın alır, kiralar veya yaptırır, gerekirse satar.</li>
                  <li>Amaçları doğrultusunda faaliyet gösteren şirketlere ortak olabilir.</li>
                  <li>Tüketim kooperatifleri üst kuruluşlarına girer.</li>
                  <li>Ortakların sigorta ihtiyaçlarına aracı olur.</li>
                  <li>Yurt içinde ve yurt dışında şubeler açabilir.</li>
                  <li>Kooperatifin faaliyetleri kapsamında verilen hizmetin etkinliğinin artırılmasına yönelik araştırmalar yapar, bu konuda danışmanlık hizmeti alır, ortaklarını eğitir ve bu amaçla gerekli personel istihdam eder.</li>
                  <li>Gerektiğinde konusu ile ilgili eğitim, yayın, araştırma ve benzeri faaliyetlerde bulunur.</li>
                  <li>Amaçları doğrultusunda fonlar oluşturabilir.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* İKİNCİ BÖLÜM */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              İKİNCİ BÖLÜM
            </h2>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              SERMAYE VE PAYLAR
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">SERMAYE:</h4>
                <p className="font-semibold mb-2">Madde 7-</p>
                <p className="leading-relaxed mb-2">
                  Kooperatifin sermayesi, ortakların taahhüt ettikleri payların toplam tutarlarından ibaret olup değişkendir. Ancak, sermayenin en az haddi [belirtilecek] TL'dır. Kuruluşta bu sermayenin tamamının taahhüt edilmesi ve 1/4'ünün peşin ödenmesi zorunludur.
                </p>
                <p className="leading-relaxed">
                  Ayni sermaye konabilir. Kooperatif mevcut bir işletmeyi veya ayınları devralabilir Ayın nev'inden sermaye konması halinde 1163 sayılı Kooperatifler Kanunu'nun 21 ve 22 nci maddelerine göre hareket olunur.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">PAYLAR:</h4>
                <p className="font-semibold mb-2">Madde 8-</p>
                <p className="leading-relaxed mb-2">
                  Bir ortaklık payının değeri 100.-TL'dir. Ortaklar en çok 5.000 pay taahhüt edebilirler. Ancak, her ortağın en az [belirtilecek] pay taahhüt etmesi zorunludur.
                </p>
                <p className="leading-relaxed">
                  Ortaklık payları, bu anasözleşmenin 19'uncu maddesine göre düzenlenen ortaklık senedinde gösterilir. Senetle temsil edilmeyen paylar 100.-TL olarak itibar olunur.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">PAYLARIN ÖDENMESİ:</h4>
                <p className="font-semibold mb-2">Madde 9-</p>
                <p className="leading-relaxed mb-2">
                  Kurucuların taahhüt ettikleri pay bedellerinin en az ¼'ü tescilden önce, gerisi de kooperatifin tescilini izleyen yirmi dört ay içinde ödenir.
                </p>
                <p className="leading-relaxed mb-2">
                  Nakdî ödemeler, 19/10/2005 tarihli ve 5411 sayılı Bankacılık Kanunu'na bağlı bir bankada, kurulmakta olan kooperatif adına açılacak özel bir hesaba, sadece kooperatifin kullanabileceği şekilde yatırılır. Taahhüt edilen payların, kanunda veya anasözleşmede öngörülmüş bulunan ve kanunda yazılı olandan daha yüksek olan tutarlarının ödendiği, ticaret siciline yöneltilecek bir banka mektubu ile ispatlanır. Banka, bu tutarı, kooperatifin tüzel kişilik kazandığını bildiren bir sicil müdürlüğü yazısının sunulması üzerine, sadece kooperatife öder.
                </p>
                <p className="leading-relaxed">
                  Kurucuların sermayenin tamamını ödemeyi şartsız kabul ettikleri ve anasözleşmedeki imzaların noterce onaylandığı tarihten itibaren kooperatif üç ay içinde tüzel kişilik kazanamadığı takdirde, bu hususu doğrulayan bir sicil müdürlüğü yazısının sunulması üzerine, bedeller banka tarafından sahiplerine geri verilir.
                </p>
              </div>
            </div>
          </div>

          {/* ÜÇÜNCÜ BÖLÜM */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              ÜÇÜNCÜ BÖLÜM
            </h2>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              ORTAKLIK İŞLEMLERİ
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAKLIK ŞARTLARI:</h4>
                <p className="font-semibold mb-2">Madde 10-</p>
                <p className="leading-relaxed">
                  Kooperatife ortak olabilmek için medeni hakları kullanma ehliyetine sahip gerçek kişi ya da kamu veya özel hukuk tüzel kişisi olmak gerekir.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAKLIĞA KABUL:</h4>
                <p className="font-semibold mb-2">Madde 11-</p>
                <p className="leading-relaxed mb-2">
                  Gerekli şartları taşıyıp da kooperatife ortak olmak isteyenler, yazılı olarak yönetim kuruluna başvururlar. Bu başvuru yazısına 10'uncu maddede belirtilen ortaklık şartlarının taşındığını gösteren belgeler eklenir. Ayrıca, bu başvuruda, anasözleşmenin tüm hükümlerinin ve getirilen yükümlülüklerinin kabul edildiği açıkça belirtilir.
                </p>
                <p className="leading-relaxed mb-2">
                  Ortaklığa kabul yönetim kurulunun kararı ile gerçekleşir. Yönetim kurulu, ortaklar ile ortak olmak için başvuranların 10 uncu maddede gösterilen şartları taşıyıp taşımadığını araştırmak zorundadır.
                </p>
                <p className="leading-relaxed mb-2">
                  Ortaklığa kabul veya ret kararı, ilgiliye 15 gün içinde yazı ile bildirilir, istekli, ortaklığa alındığı takdirde, kararın kendisine bildirildiği tarihten itibaren bir ay içinde sermaye taahhüdünün, diğer ortaklarca ödenmiş taksiti ile diğer ortakların her birinin o tarihe kadar ödemiş oldukları paralara (site yönetiminden aldıkları hizmet karşılığı bedeller haricindeki) eşit tutarı bir defada öder.
                </p>
                <p className="leading-relaxed">
                  17'nci madde uyarınca devir yolu ile ortaklığa alınanlar hariç olmak üzere daha sonra ortaklığa kabul edileceklerden, yukarıdaki fıkrada belirtilen tutarın üzerinde para talep edilmesi, genel kurulun bu hususta karar alması halinde mümkündür.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAK SAYISI:</h4>
                <p className="font-semibold mb-2">Madde 12-</p>
                <p className="leading-relaxed">
                  Kooperatifin ortak sayısı en az 7 kişidir.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAKLIKTAN ÇIKMA:</h4>
                <p className="font-semibold mb-2">Madde 13-</p>
                <p className="leading-relaxed mb-2">
                  Her ortak, hesap senesi sonundan en az bir ay önce yönetim kuruluna yazı ile başvurmak suretiyle ortaklıktan çıkabilir. Yönetim kurulu bu hükme uygun olarak yapılacak isteğe rağmen, yazılı başvurunun kooperatif kayıtlarına girişinden itibaren bir ay içinde kabulden kaçınırsa, ortak, çıkma dileğini noter aracılığı ile yönetim kuruluna bildirir. Bildiri tarihinden itibaren çıkma gerçekleşir.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAKLIKTAN ÇIKARMA:</h4>
                <p className="font-semibold mb-2">Madde 14-</p>
                <p className="leading-relaxed mb-2">
                  Durumları aşağıda gösterilen hallere uyanlar yönetim kurulu kararı ile ortaklıktan çıkarılır.
                </p>
                <ul className="space-y-2 ml-6 list-disc mb-3">
                  <li>10'uncu maddede belirtilen ortaklık şartlarından herhangi birini kaybedenler,</li>
                  <li>Parasal yükümlülüklerini 30 gün geciktirmeleri üzerine, yönetim kurulunca noter aracılığı ile yapılacak ihtarı takip eden 10 gün içinde bu yükümlülüklerini yerine getirmeyenlere yine aynı kurulca ikinci ihtar yapılır. İkinci ihtarı takip eden bir ay içerisinde de yükümlülüklerini yerine getirmeyenler,</li>
                  <li>Kooperatifin para, mal ve belgeleri üzerinde işledikleri suçlardan dolayı mahkûm olanlar. Çıkarma kararı gerekçeli olarak yönetim kurulu karar defteri ile ortaklar defterine kaydedilir.</li>
                </ul>
                <p className="leading-relaxed mb-2">
                  Kararın onaylı örneği, çıkarılan ortağa tebliğ edilmek üzere 10 gün içinde notere tevdi edilir. Ortak, çıkarma kararının tebliğ tarihinden itibaren üç ay içinde itiraz davası açabilir veya genel kurula itiraz edebilir. Bu itiraz, ilk toplanacak genel kurula sunulmak üzere yönetim kuruluna noter aracılığı ile tebliğ ettirilecek bir yazı ile yapılır. Genel kurula itiraz edildiği takdirde, yönetim kurulunun çıkarma kararı aleyhine itiraz davası açılamaz. Genel kurulca verilecek karara karşı itiraz davası hakkı saklıdır.
                </p>
                <p className="leading-relaxed">
                  Üç aylık süre içinde genel kurula veya mahkemeye başvurmak suretiyle itiraz edilmeyen çıkarma kararları kesinleşir. Ortaklar, bu maddede gösterilmeyen sebeplerle ortaklıktan çıkarılmazlar. Haklarındaki çıkarma kararı kesinleşmeyen ortakların ortaklık hak ve yükümlülükleri, çıkarma kararı kesinleşinceye kadar devam eder.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAKLIĞI SONA ERENLERLE HESAPLAŞMA:</h4>
                <p className="font-semibold mb-2">Madde 15-</p>
                <p className="leading-relaxed mb-2">
                  Devir dışında bir nedenle ortaklığı sona erenlerin sermaye ve diğer alacakları, o yılın bilançosuna göre hesaplanarak bilanço tarihinden itibaren bir ay içinde geri verilir.
                </p>
                <p className="leading-relaxed mb-2">
                  Ancak, ortaklığı sona erenlerin yerine yeni ortak alınması halinde eski ortağın 21'inci madde uyarınca ödediği gider taksitleri derhal geri verilir.
                </p>
                <p className="leading-relaxed mb-2">
                  Ayrılan ortaklar kooperatifin yedek akçeleri üzerinde bir hak iddia edemezler.
                </p>
                <p className="leading-relaxed">
                  Ortaklığı sona erenlerin alacak ve hakları, bunları isteyebilecekleri günden itibaren beş yıl geçmekle zaman aşımına uğrar.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ÖLEN ORTAĞIN DURUMU:</h4>
                <p className="font-semibold mb-2">Madde 16-</p>
                <p className="leading-relaxed mb-2">
                  Ölen ortağın kanuni mirasçılarının üç ay içinde 10'uncu maddedeki ortaklık şartlarını taşıyan bir temsilci tayin ederek kooperatife bildirmeleri halinde ortaklık hak ve yükümlülükleri kanuni mirasçıları lehine devam eder.
                </p>
                <p className="leading-relaxed">
                  Mirasçıların temsilci tayin etmemeleri veya ortaklığa devam etmek istememeleri halinde ölen ortağın alacak ve borçları 15'inci madde hükümlerine göre tasfiye edilir.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAKLIĞIN DEVRİ:</h4>
                <p className="font-semibold mb-2">Madde 17-</p>
                <p className="leading-relaxed mb-2">
                  Ortaklık, yazılı olarak yönetim kuruluna bildirilmek suretiyle 10'uncu maddede gösterilen ortaklık şartlarını taşıyan kişilere devredilebilir.
                </p>
                <p className="leading-relaxed mb-2">
                  Yönetim kurulu, bu şekilde ortaklığı devralan kişiyi ortaklığa kabulden kaçınamaz.
                </p>
                <p className="leading-relaxed mb-2">
                  Devir halinde eski ortağın kooperatife karşı tüm hak ve yükümlülükleri yeni ortağa geçer.
                </p>
                <p className="leading-relaxed">
                  Kooperatifçe, bu devir sebebiyle taraflardan ayrıca bir ödemede bulunmaları istenemez.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAKLIĞA TEKRAR GİRME:</h4>
                <p className="font-semibold mb-2">Madde 18-</p>
                <p className="leading-relaxed mb-2">
                  Ortaklığı sona erenler, ayrılma sebeplerinin ortadan kalkması halinde yeniden ortaklığa kabul edilebilirler.
                </p>
                <p className="leading-relaxed">
                  Bu anasözleşmenin 14'üncü maddesinin 1'inci fıkrasının 3 numaralı bendi gereğince çıkarılanlar, kooperatife yeniden ortak olamazlar.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAKLIK SENEDİ:</h4>
                <p className="font-semibold mb-2">Madde 19-</p>
                <p className="leading-relaxed">
                  Her ortağın ortaklık haklarının, ada yazılı ortaklık senedi ile temsil olunması şarttır. Bu senede kooperatifin unvanı, senet sahibinin adı ve soyadı, iş ve konut adresi, kooperatife girdiği ve çıktığı tarihler yazılır. Bu hususlar, senet sahibi ile kooperatifi temsile yetkili olan kimseler tarafından imzalanır. Ortağın yatırdığı veya çektiği paralar tarih sırası ile kaydedilir. Bu kayıtlar kooperatifin ödediği paralara ait ise ortak imza eder. İmzalı ortak senedi makbuz hükmündedir. Mezkûr senet anasözleşmeyi ihtiva etmek şartıyla ortaklık cüzdanı şeklinde de düzenlenebilir. Ortaklık senetleri kıymetli evrak niteliğinde olmayıp sadece ispat vesikası hükmündedir.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ORTAKLARIN ŞAHSİ SORUMLULUKLARI:</h4>
                <p className="font-semibold mb-2">Madde 20-</p>
                <p className="leading-relaxed mb-2">
                  Her ortak, kooperatifin borçlarına karşı, taahhüt ettiği pay tutarı kadar sorumludur.
                </p>
                <p className="leading-relaxed mb-2">
                  Kooperatiften ilişkisi kesilen ortağın sorumluluğu, ayrıldığı tarihten itibaren iki yıl devam eder.
                </p>
                <p className="leading-relaxed mb-2">
                  Kooperatife giren her ortak, girişinden önce doğmuş olan kooperatif borçlarından dolayı diğer ortaklar gibi sorumlu olur.
                </p>
                <p className="leading-relaxed">
                  Yönetim kurulu üyeleri ile denetçilerin sorumlulukları hakkındaki hükümler saklıdır.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">EK ÖDEME YÜKÜMLÜLÜĞÜ:</h4>
                <p className="font-semibold mb-2">Madde 21-</p>
                <p className="leading-relaxed">
                  Bilanço açıkları, yedek akçelerden ve bunların yetmemesi halinde 61'inci maddeye göre oluşturulan özel fondan karşılanamadığı takdirde, ortaklar, bilanço açıklarını kapatmada kullanılmak şartıyla sermaye paylarının [belirtilecek] katına kadar ek ödeme ile yükümlüdürler. Ortaklardan istenecek ek ödemeler toplamı, o yılın bilanço açığı miktarını geçemez.
                </p>
              </div>
            </div>
          </div>

          {/* DÖRDÜNCÜ BÖLÜM */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              DÖRDÜNCÜ BÖLÜM
            </h2>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              KOOPERATİFİN ORGANLARI VE YÖNETİMİ
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">KOOPERATİFİN ORGANLARI:</h4>
                <p className="font-semibold mb-2">Madde 22-</p>
                <p className="leading-relaxed mb-2">Kooperatifin organları şunlardır:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Genel Kurul,</li>
                  <li>Yönetim Kurulu,</li>
                  <li>Denetim Kurulu.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-4 mt-8">GENEL KURUL</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Görev ve Yetkileri:</h5>
                    <p className="font-semibold mb-2">Madde 23-</p>
                    <p className="leading-relaxed mb-2">En yetkili organ olan Genel Kurulun görev ve yetkileri şunlardır:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Bilânço, bilânço hesaplarının dökümü, gelir- gider farkı hesapları ile yönetim kurulu ve denetçiler tarafından verilen raporları inceleyerek kabul veya reddetmek,</li>
                      <li>Yönetim kurulu üyeleri ile denetim kurulu üyelerini seçmek, ibra etmek veya sorumluluklarına karar vermek, gerektiğinde bunları azletmek,</li>
                      <li>Yönetim ve denetim kurulu üyelerine verilecek aylık ücret, huzur hakkı ve yolluk miktarı ile bütçeyi görüşerek karara bağlamak,</li>
                      <li>Yönetim kurulu tarafından verilen ortaklıktan çıkarma kararlarına karşı yapılan itirazları inceleyip karara bağlamak,</li>
                      <li>Kanun, (6102 sayılı TTK'nın 391'inci maddesinde sayılanlar hariç), anasözleşme ve iyi niyet esasları ile genel kurul kararlarına aykırı olduğu ileri sürülen yönetim kurulu kararlarının iptal edilip edilmeyeceği konusunda karar vermek,</li>
                      <li>Ortaklardan tahsil edilecek taksit miktar ve ödeme esasları ile gecikme halinde uygulanacak esasları tespit etmek,</li>
                      <li>Üst kuruluşa girme ve çıkma kararı almak ve bu kuruluşta görevlendirilecek temsilcileri seçmek,</li>
                      <li>Amaçlarını gerçekleştirmeye yönelik uygun faaliyet konusu bulunan kooperatif, şirket ve diğer teşekküllere girme ve çıkmaya karar vermek,</li>
                      <li>Anasözleşmede yapılması öngörülen değişiklikler hakkında karar almak,</li>
                      <li>Kooperatifin dağılması hakkında karar almak, tasfiye kurulunu seçmek,</li>
                      <li>Kanun ve anasözleşme ile genel kurula tanınmış olan diğer konular hakkında karar almak.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Oy Hakkı ve Temsil:</h5>
                    <p className="font-semibold mb-2">Madde 24-</p>
                    <p className="leading-relaxed mb-2">
                      Toplantı tarihinden üç ay evvel ortak olmayanlar hariç her ortak genel kurula katılma hakkına sahiptir. Her ortak yalnız bir oya sahip olup yazı ile izin verilmek suretiyle bir ortak diğer bir ortağı, oyunu kullanmak üzere temsilci tayin edebilir.
                    </p>
                    <p className="leading-relaxed mb-2">
                      Ortak sayısı 1.000'i geçtiğinde her ortak en çok 9 olmak üzere birden fazla ortağı temsil edebilir. Ancak yönetim ve denetim kurulu seçimlerinde her ortak en fazla bir ortağı temsilen oy kullanabilir.
                    </p>
                    <p className="leading-relaxed">
                      Eş ve birinci derece (ortağın; çocuğu, anne ve babası, eşinin annesi ve babası) akrabalar için temsilde ortaklık şartı aranmaz.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Toplantı Şekilleri ve Zamanı:</h5>
                    <p className="font-semibold mb-2">Madde 25-</p>
                    <p className="leading-relaxed mb-2">
                      Genel kurul, olağan ve olağanüstü olmak üzere iki şekilde toplanır. Olağan genel kurul toplantısının her yılın ilk altı ayı içinde yapılması zorunludur.
                    </p>
                    <p className="leading-relaxed">
                      Olağanüstü genel kurul, kooperatif işlerinin ve anasözleşme hükümlerinin gerektirdiği zaman ve surette toplanır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Toplantı Yeri:</h5>
                    <p className="font-semibold mb-2">Madde 26-</p>
                    <p className="leading-relaxed">
                      Genel kurul, kooperatif merkezinin bulunduğu yerleşim birimi dahilindeki uygun bir yerde toplanır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Çağrıya Yetkili Olanlar:</h5>
                    <p className="font-semibold mb-2">Madde 27-</p>
                    <p className="leading-relaxed mb-2">
                      Genel kurul, yönetim kurulunca toplantıya çağrılır. Gerekli hallerde denetim kurulu, kooperatifin ortağı bulunduğu üst birlik ve tasfiye memurları genel kurulu toplantıya çağırma yetkisine sahiptirler.
                    </p>
                    <p className="leading-relaxed">
                      Genel kurul yukarıdaki şekilde toplanamadığı takdirde Gümrük ve Ticaret Bakanlığı'nca toplantıya çağrılabilir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Çağrının Şekli:</h5>
                    <p className="font-semibold mb-2">Madde 28-</p>
                    <p className="leading-relaxed mb-2">
                      Olağan ve olağanüstü toplantılara çağrı; taahhütlü mektupla, ayrıca gerektiğinde gazete ile gazete olmayan yerlerde mahalli örf ve âdete göre ilan yoluyla yapılır. Çağrının sadece yazılı olarak imza karşılığında yapılması da mümkündür.
                    </p>
                    <p className="leading-relaxed">
                      Çağrının, toplantı gününden en az 30 gün önce ve en çok iki ay içinde yapılması, toplantının gün ve saati ile yerinin ve gündem maddelerinin bildirilmesi zorunludur.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Bütün Ortakların Hazır Bulunması:</h5>
                    <p className="font-semibold mb-2">Madde 29-</p>
                    <p className="leading-relaxed">
                      Kooperatifin bütün ortaklarının veya temsilcilerinin hazır bulunması ve itirazın olmaması halinde genel kurul toplantılarına ilişkin diğer hükümlersaklı kalmak şartı ile toplantıya çağrı hakkındaki hükümlere uyulmamış olsa dahi kararlar alınabilir. Ancak, kararların muteber olabilmesi için toplantıda Bakanlık temsilcisi bulundurulması hususunda gerekli işlemlerin yapılmış olması şarttır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Bakanlığa Müracaat ve Gönderilecek Belgeler:</h5>
                    <p className="font-semibold mb-2">Madde 30-</p>
                    <p className="leading-relaxed">
                      Genel kurul tarihi ile yeri ve gündemi toplantıdan en az 15 gün önce kooperatif merkezinin bulunduğu yerdeki Valiliğe (Bakanlık Taşra Teşkilatı) yazılı olarak bildirilir. Bu bildirime, Bakanlıkça tespit edilen temsilci ücretinin ilgili maliye veznesine yatırıldığını gösteren belge eklenerek toplantıda temsilci bulundurulması talep edilir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Gündem:</h5>
                    <p className="font-semibold mb-2">Madde 31-</p>
                    <p className="leading-relaxed mb-2">Olağan genel kurul toplantısının gündeminde sırasıyla şu hususlar bulunur:</p>
                    <ul className="space-y-2 ml-6 list-disc mb-3">
                      <li>Açılış ve toplantı başkanlığının oluşturulması.</li>
                      <li>Yönetim ve denetim kurulunca hazırlanan raporların okunması ve müzakeresi.</li>
                      <li>Finansal tabloların okunması, müzakeresi ve tasdiki.</li>
                      <li>Yönetim ve denetim kurulu üyelerinin ibrası.</li>
                      <li>Görev süreleri sona ermiş olan yönetim ve denetim kurulu üyelerinin seçilmesi ve bunların görev sürelerinin tespiti.</li>
                      <li>Yönetim ve denetim kurulu üyelerinin ücret, huzur hakkı gibi parasal hakların belirlenmesi.</li>
                      <li>Gelecek yılın bütçe ve çalışma programının görüşülmesi ve karara bağlanması.</li>
                      <li>Gerekli görülecek diğer hususlar.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Ortaklar Cetveli:</h5>
                    <p className="font-semibold mb-2">Madde 32-</p>
                    <p className="leading-relaxed">
                      Her genel kurul toplantısından önce, çıkarılma kararı kesinleşmemiş olanlar dahil tüm ortakların, ortak numaraları, isim, unvan ve adresleri ile asaleten ve vekâleten (temsilen) imzalanacak yerleri gösterir, yönetim kurulu başkanınca imzalı bir ortaklar cetveli hazırlanır ve toplantıdan önce genel kurulun yapılacağı yerde bulundurulur.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Görüşme ve Karar Nisabı:</h5>
                    <p className="font-semibold mb-2">Madde 33-</p>
                    <p className="leading-relaxed mb-2">
                      Genel kurulun toplanabilmesi ve gündemdeki konuları görüşebilmesi için kooperatife kayıtlı ortaklardan genel kurula katılma hakkına sahip olanların en az 1/4'ünün şahsen veya temsilen toplantıda hazır bulunması gerekir. İlk ve müteakip toplantılarda aynı nisap aranır.
                    </p>
                    <p className="leading-relaxed mb-2">
                      Genel kurulda kararlar toplantı nisabının sağlanması koşuluyla oylama sırasındaki mevcudun yarıdan fazlasının oyu ile alınır.
                    </p>
                    <p className="leading-relaxed">
                      Ancak, kooperatifin dağılması, diğer bir kooperatifle birleşmesi ve anasözleşmede değişiklik yapılması ile ilgili kararlar ortaklar cetvelinde imzası bulunanların 2/3 çoğunluğu ile alınır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Toplantının Açılması ve Toplantı Başkanlığı:</h5>
                    <p className="font-semibold mb-2">Madde 34-</p>
                    <p className="leading-relaxed">
                      Genel kurul toplantısı; Bakanlık Temsilcisi bulundurulması hususunda usulüne uygun başvurunun ve 1163 sayılı Kooperatifler Kanunu'nun 87'nci maddesine göre işlem yapıldığının tespiti ile toplantı nisabının sağlanması üzerine ve çağrıyı yapan organca yetkili kılınan kimseler tarafından açılır. Müteakiben bir genel kurul toplantı başkanı ile kararlaştırılacak sayıda sekreter üye ve gerektiğinde oy toplayıcı üye seçilir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Oy Kullanmanın Şekli:</h5>
                    <p className="font-semibold mb-2">Madde 35-</p>
                    <p className="leading-relaxed mb-2">
                      Oylamalar genel olarak el kaldırmak suretiyle yapılır. Genel kurula katılanların yarıdan fazlasının talebi halinde gizli oya başvurulur. Ancak, kooperatifin ortak sayısı 500'ü geçtiği takdirde yönetim ve denetim kurulu seçimlerinde oylamalar gizli oy açık tasnif esasına göre yapılır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Bilânçonun Tasdiki ve İbra:</h5>
                    <p className="font-semibold mb-2">Madde 36-</p>
                    <p className="leading-relaxed">
                      Bilançonun onaylanmasına ilişkin genel kurul kararı, kararda aksine açıklık bulunmadığı takdirde, yönetim kurulu üyelerinin ve denetçilerin ibrası sonucunu doğurur. Bununla birlikte, bilançoda bazı hususlar hiç veya gereği gibi belirtilmemişse veya bilanço kooperatifin gerçek durumunun görülmesine engel olacak bazı hususları içeriyorsa ve bu hususta bilinçli hareket edilmişse onama ibra etkisini doğurmaz.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">İbranın Etkisi:</h5>
                    <p className="font-semibold mb-2">Madde 37-</p>
                    <p className="leading-relaxed">
                      İbra kararı genel kurul kararıyla kaldırılamaz. Bu konuda 1163 sayılı Kooperatifler Kanunu'nun 53'üncü maddesi hükmü saklıdır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Kooperatifin Uğradığı Zararın Tazmini:</h5>
                    <p className="font-semibold mb-2">Madde 38-</p>
                    <p className="leading-relaxed">
                      Kooperatifin uğradığı zararın tazminini, kooperatif ve her bir ortak isteyebilir. Ortaklar tazminatın ancak kooperatife ödenmesini isteyebilirler.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Kararların Tesiri:</h5>
                    <p className="font-semibold mb-2">Madde 39-</p>
                    <p className="leading-relaxed">
                      Kanun ve anasözleşmeye uygun surette toplanmış genel kurulda alınan kararlar toplantıda bulunmayanlar veya aleyhte oy kullananlar hakkında da geçerli ve bağlayıcıdır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Kararların İptali:</h5>
                    <p className="font-semibold mb-2">Madde 40-</p>
                    <p className="leading-relaxed mb-2">
                      Aşağıda yazılı kimseler kanuna, anasözleşme hükümlerine ve iyi niyet esaslarına aykırı olduğu iddiası ile genel kurul kararları aleyhine, toplantıyı izleyen günden başlamak üzere bir ay içinde kooperatif merkezinin bulunduğu yerdeki mahkemeye başvurabilirler.
                    </p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Toplantıda hazır bulunup da kararlara muhalif kalarak keyfiyeti tutanağa geçirten veya oyunu kullanmasına haksız olarak müsaade edilmeyen yahut toplantıya çağrının usulü dairesinde yapılmadığını veyahut gündemin gereği gibi ilan veya tebliğ edilmediğini yahut da genel kurul toplantısına katılmaya yetkili olmayan kimselerin karara katılmış bulunduklarını iddia eden pay sahipleri,</li>
                      <li>Yönetim kurulu,</li>
                      <li>Kararların yerine getirilmesi yönetim kurulu üyeleri ile denetçilerin şahsi sorumluluklarını mucip olduğu takdirde bunların her biri.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Genel Kurul Tutanağı:</h5>
                    <p className="font-semibold mb-2">Madde 41-</p>
                    <p className="leading-relaxed">
                      Genel kurul toplantılarının muteber olması için, ortaklar ve temsilcilerin sayısı, genel kurulda sorulan soruları, verilen cevapları, alınan kararları, her karar için kullanılan olumlu ve olumsuz oyların sayılarını içeren bir tutanak düzenlenir. Genel kurul tutanağı, genel kurul başkanlığı ve Bakanlık Temsilcisi tarafından imzalanır; aksi halde geçersizdir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Genel Kurul Kararlarının Tescil ve İlanı:</h5>
                    <p className="font-semibold mb-2">Madde 42-</p>
                    <p className="leading-relaxed">
                      Yönetim kurulu, genel kurul toplantı tutanağının noterce onaylanmış bir suretini derhal Ticaret Sicili Müdürlüğüne vermek ve bu tutanakta yer alan tescil ve ilana tabi hususları tescil ve ilan ettirmekle yükümlüdür.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Bakanlığa Gönderilecek Belgeler:</h5>
                    <p className="font-semibold mb-2">Madde 43-</p>
                    <p className="leading-relaxed">
                      Toplantı gününden itibaren en geç bir ay içinde, yönetim ve denetim kurulları raporları ile bilânço ve gelir-gider cetvelleri genel kurul toplantı tutanağı ile ortaklar cetvelinin ve istenebilecek diğer belgelerin onaylı birer örneği, kooperatifin ticaret siciline tescil edildiği yerdeki Bakanlık Taşra Teşkilatına tevdi edilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-4">YÖNETİM KURULU</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Seçimi ve Süresi:</h5>
                    <p className="font-semibold mb-2">Madde 44-</p>
                    <p className="leading-relaxed mb-2">
                      Yönetim kurulu, genel kurulca en az bir, en çok dört yıl için seçilir ve en az üç üyeden oluşur.
                    </p>
                    <p className="leading-relaxed">
                      Genel kurulca böyle bir süre tespiti yapılmaması halinde bir yıl için seçilmiş sayılır. Yönetim kuruluna seçilen üye sayısı kadar da yedek üye seçilir. Süresi sona eren üyeler yeniden seçilebilir. Genel kurul lüzum görürse yönetim kurulu üyelerini her zaman değiştirebilir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Seçilme Şartları ve Bağdaşmayan Görevler:</h5>
                    <p className="font-semibold mb-2">Madde 45-</p>
                    <p className="leading-relaxed mb-2">Yönetim kurulu üyelerinde aşağıdaki şartlar aranır:</p>
                    <ul className="space-y-2 ml-6 list-disc mb-3">
                      <li>Türk vatandaşı olmak,</li>
                      <li>Kooperatif ortağı olmak ve medeni hakları kullanma ehliyetine sahip bulunmak,</li>
                      <li>Aynı türde başka bir kooperatifin yönetim kurulu üyesi olmamak,</li>
                      <li>Devletin güvenliğine karşı suçlar, zimmet, irtikâp, rüşvet, hırsızlık, dolandırıcılık, sahtecilik, güveni kötüye kullanma gibi suçlardan mahkûm olmamak,</li>
                      <li>Aynı zamanda kooperatifte denetçi olmamak,</li>
                      <li>Aynı zamanda diğer yönetim kurulu üyelerinden birinin eşi olmamak ve birbirleri ile ikinci derece dahil kan ve kayın hısımlığı bulunmamak.</li>
                    </ul>
                    <p className="leading-relaxed">
                      Yönetim kurulu üyeleri, kooperatifin ve kooperatifin bağlı olduğu üst kuruluşların hissedarı oldukları şirketlerde yönetim kurulu üyesi veya denetçi olamazlar, personel olarak yahut başka bir şekilde ücretli görev alamazlar.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Görev ve Yetkileri:</h5>
                    <p className="font-semibold mb-2">Madde 46-</p>
                    <p className="leading-relaxed mb-2">Yönetim kurulu kooperatifin en yüksek idare organıdır ve başlıca görev ve yetkileri şunlardır:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Kooperatifi temsil etmek ve kooperatifin işlerini yönetmek,</li>
                      <li>Genel kurul toplantılarını hazırlamak ve genel kurul kararlarını uygulamak,</li>
                      <li>Ortakların yazılı başvurularını incelemek, kabul veya reddetmek,</li>
                      <li>Kooperatifin çalışma programını ve bütçesini hazırlamak,</li>
                      <li>Kooperatifin hesap işlerini görmek, bilanço ve hesapları düzenlemek,</li>
                      <li>Kooperatif defterlerinin tutulmasını sağlamak,</li>
                      <li>Personelin işe alınması, görevlendirilmesi ve işine son verilmesi.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Görev Bölümü ve Toplantılar:</h5>
                    <p className="font-semibold mb-2">Madde 47-</p>
                    <p className="leading-relaxed mb-2">
                      Yönetim kurulu üyeleri; seçimi takiben yapacakları ilk toplantıda ve her yıl aralarından bir başkan, bir başkan vekili, gereğine göre de birer kâtip ve muhasip üye seçerek görev bölümü yaparlar.
                    </p>
                    <p className="leading-relaxed mb-2">
                      Yönetim kurulu en az ayda bir defa ve üye tam sayısının çoğunluğu ile toplanır. Kararlar toplantıda bulunanların çoğunluğu ile alınır.
                    </p>
                    <p className="leading-relaxed">
                      Özürsüz olarak üst üste üç toplantıda hazır bulunmayan üye çekilmiş sayılır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Müzakereye Katılma Yasağı:</h5>
                    <p className="font-semibold mb-2">Madde 48-</p>
                    <p className="leading-relaxed">
                      Yönetim kurulu üyesi, kendisinin kooperatif dışı kişisel menfaatiyle veya alt ve üst soyundan birinin ya da eşinin yahut üçüncü derece dâhil üçüncü dereceye kadar kan ve kayın hısımlarından birinin, kişisel ve kooperatif dışı menfaatiyle kooperatifin menfaatinin çatıştığı konulara ilişkin müzakerelere katılamaz.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Kooperatifin Temsil ve İlzamı:</h5>
                    <p className="font-semibold mb-2">Madde 49-</p>
                    <p className="leading-relaxed">
                      Kooperatif adına düzenlenecek evrakın muteber olması veya kooperatifin ilzamı için, kooperatif unvanı altında temsile yetkili olanlardan ikisinin imzası gereklidir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Üyeliğin Boşalması:</h5>
                    <p className="font-semibold mb-2">Madde 50-</p>
                    <p className="leading-relaxed">
                      Yönetim kurulu üyeleri, istifa etmek suretiyle her zaman çekilebilirler. Herhangi bir sebeple yönetim kurulu üyeliğinin boşalması halinde, yönetim kurulunca aldıkları oy sırasına göre yedek üyeler çağrılır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Sorumluluk ve Yasak Muameleler:</h5>
                    <p className="font-semibold mb-2">Madde 51-</p>
                    <p className="leading-relaxed mb-2">
                      Yönetim kurulu, kooperatif işlerinin yönetimi için gereken titizliği gösterir ve kooperatifin başarısı ve gelişmesi yolunda bütün gayretini sarf eder.
                    </p>
                    <p className="leading-relaxed">
                      Yönetim kurulu üyeleri, kendi kusurlarından ileri gelen zararlardan müteselsilen sorumlu olup, kooperatife tazmin etmekle yükümlüdürler.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Yönetim Kurulu Üyelerinin Ücretleri:</h5>
                    <p className="font-semibold mb-2">Madde 52-</p>
                    <p className="leading-relaxed">
                      Yönetim kurulu başkan ve üyeleri ile murahhas üyelere bu sıfatla yapacakları hizmet için aylık ücret veya katılacakları her toplantı için bir huzur hakkı ve yapacakları görev seyahatleri için yolluk ödenir. Ödemenin miktar ve şekli genel kurulca kararlaştırılır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Murahhas Üye:</h5>
                    <p className="font-semibold mb-2">Madde 53-</p>
                    <p className="leading-relaxed">
                      Yönetim kurulu kararı ile üyelerden bir veya bir kaçı kooperatifi temsil yetkisini haiz murahhas üye seçilebilir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Müdür ve Diğer Personel:</h5>
                    <p className="font-semibold mb-2">Madde 54-</p>
                    <p className="leading-relaxed">
                      Yönetim kurulu, kooperatifin mali ve idari işlerini yürütmek üzere kendi aralarından veya hariçten bir müdür ile kooperatif işlerinin gerekli kıldığı diğer personeli istihdam edebilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-4">DENETİM KURULU</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Seçimi ve Süresi:</h5>
                    <p className="font-semibold mb-2">Madde 55-</p>
                    <p className="leading-relaxed">
                      Genel Kurulca, en az bir yıl için ortaklar arasından veya dışarıdan en az iki veya daha fazla denetim kurulu üyesi ile bir o kadar da yedeği seçilir. Genel kurulca süre tespiti yapılmaması halinde bir yıl için seçilmiş sayılır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Seçilme Şartları:</h5>
                    <p className="font-semibold mb-2">Madde 56-</p>
                    <p className="leading-relaxed mb-2">Denetim kurulu üyelerinde aşağıdaki şartlar aranır:</p>
                    <ul className="space-y-2 ml-6 list-disc mb-3">
                      <li>Türk vatandaşı olmak ve medeni hakları kullanma ehliyetine sahip bulunmak,</li>
                      <li>Devletin güvenliğine karşı suçlar, Anayasal düzene ve bu düzenin işleyişine karşı suçlar, zimmet, irtikâp, rüşvet, hırsızlık, dolandırıcılık, sahtecilik, güveni kötüye kullanma gibi suçlardan mahkûm olmamak,</li>
                      <li>Aynı zamanda kooperatifte yönetim kurulu üyesi, bu üyelerden birinin eşi, kooperatif personeli veya yönetim kurulu üyeleriyle üçüncü derece dahil kan ve sıhri hısım olmamak,</li>
                      <li>Aynı zamanda diğer denetim kurulu üyelerinden birinin eşi olmamak ve birbirleri ile ikinci derece dahil kan ve kayın hısımlığı bulunmamak.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Görevi ve Yetkileri:</h5>
                    <p className="font-semibold mb-2">Madde 57-</p>
                    <p className="leading-relaxed mb-2">Denetim kurulunun başlıca görev ve yetkileri şunlardır:</p>
                    <ul className="space-y-2 ml-6 list-disc">
                      <li>Yıllık bilanço ve sonuç hesaplarını inceleyerek bu husustaki görüşlerini birlikte veya tek başına genel kurula bir raporla bildirmek,</li>
                      <li>Kooperatif işlemlerinden bilgi edinmek ve gerekli kayıtların düzenli olarak tutulmasını sağlamak amacıyla en az üç ayda bir defa kooperatifin defterlerini incelemek,</li>
                      <li>En az üç ayda bir defa kooperatifin nakit mevcudu ile menkul değerlerini kontrol etmek,</li>
                      <li>Bütçe, bilanço ve gelir-gider cetvelini denetlemek,</li>
                      <li>Yönetim kurulunun ihmali halinde genel kurulu olağan veya olağanüstü toplantıya davet etmek,</li>
                      <li>Yönetim kurulu üyelerinin kanun ve anasözleşme hükümleri ile iyi niyet esaslarına uygun davranmalarına nezaret etmek.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Denetçi Raporunun Değiştirilmesi:</h5>
                    <p className="font-semibold mb-2">Madde 58-</p>
                    <p className="leading-relaxed">
                      Kooperatifin finansal tabloları ile yönetim kurulunun yıllık faaliyet raporu, denetim raporunun sunulmasından sonra değiştirilmişse ve değişiklik denetim raporlarını etkileyebilecek nitelikteyse, finansal tablolar ile yönetim kurulunun yıllık faaliyet raporu yeniden denetlenir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Sorumluluk:</h5>
                    <p className="font-semibold mb-2">Madde 59-</p>
                    <p className="leading-relaxed">
                      Kooperatifin yılsonu ve konsolide finansal tablolarını, raporlarını, hesaplarını denetleyen denetçiler; kanuni görevlerinin yerine getirilmesinde kusurlu hareket ettikleri takdirde, hem kooperatife hem de ortaklar ile kooperatif alacaklılarına karşı verdikleri zarar dolayısıyla sorumludur.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Denetim Kurulu Üyeliğinin Boşalması:</h5>
                    <p className="font-semibold mb-2">Madde 60-</p>
                    <p className="leading-relaxed">
                      Denetim kurulu üyeleri istifa etmek suretiyle her zaman görevlerinden çekilebilirler. Üyeliğin herhangi bir nedenle boşalması halinde yerlerine en çok oy alan yedekleri geçer.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Denetim Kurulu Üyelerinin Ücretleri:</h5>
                    <p className="font-semibold mb-2">Madde 61-</p>
                    <p className="leading-relaxed">
                      Denetim kurulu üyelerine verilecek ücretin miktarı ile ödeme şekli, genel kurul tarafından tespit olunur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BEŞİNCİ BÖLÜM */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              BEŞİNCİ BÖLÜM
            </h2>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              KOOPERATİFİN HESAPLARI VE DEFTERLERİ
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-4">HESAPLAR</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Hesap Dönemi, Bilanço ve Netice Hesapları:</h5>
                    <p className="font-semibold mb-2">Madde 62-</p>
                    <p className="leading-relaxed mb-2">
                      Kooperatifin hesap dönemi takvim yılıdır. İlk faaliyete geçildiği yıldaki hesap dönemi kooperatifin kurulduğu tarihten başlar ve aynı yılın 31 Aralık tarihinde sona erer.
                    </p>
                    <p className="leading-relaxed mb-2">
                      Yönetim kurulu her yıl 31 Aralık tarihi itibariyle envanter yapar, bilançoyu ve gelir-gider hesaplarını hazırlayıp genel kurul toplantısından en az bir ay önce denetim kurulu üyelerine verir. Denetim kurulu üyeleri bunları en çok 10 gün içinde inceleyerek müştereken düzenleyecekleri raporla birlikte yönetim kuruluna iade ederler.
                    </p>
                    <p className="leading-relaxed">
                      Bilanço ve netice hesapları genel kurul toplantısından en az 15 gün önce kooperatif merkezinde ortakların incelemesine sunulur ve isteyenlere birer sureti verilir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Muhasebe Usulü:</h5>
                    <p className="font-semibold mb-2">Madde 63-</p>
                    <p className="leading-relaxed">
                      Kooperatifin hesapları, genel kabul görmüş muhasebe prensip ve usullerine uygun olarak tutulur ve mali durum tabloları buna uygun şekilde hazırlanır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Gelir Gider Farkı ve Dağıtımı:</h5>
                    <p className="font-semibold mb-2">Madde 64-</p>
                    <p className="leading-relaxed mb-2">
                      Gelir-gider farkı genel kurulca onaylanan yıllık bilançoya göre tespit edilir.
                    </p>
                    <p className="leading-relaxed mb-2">
                      Müspet gelir- gider farkının %15'i yedek akçe olarak ayrıldıktan sonra, genel kurul, geri kalan miktarın, ortaklarla muamelelerden doğan kısmının ilgili ortaklara muameleleri oranında risturn olarak; ortak dışı işlemlerden doğan kısmının ise ortakların sermaye payları ile orantılı olarak dağıtılmasına karar verebileceği gibi yedek akçe, özel fon, ortaklar ve personel için yardım fonu arasında da bölüştürülebilir.
                    </p>
                    <p className="leading-relaxed mb-2">
                      Gelir-gider farkı menfi olduğu takdirde ortaya çıkan açık yedek akçelerden, bunların yetmemesi halinde 64'üncü maddeye göre oluşturulan özel fon ile veya ortak sermaye paylarından karşılanır.
                    </p>
                    <p className="leading-relaxed">
                      Menfi neticeler ortadan kaldırılmadıkça gelir-gider farkı dağıtımı yapılamaz. Yedek akçeler ortaklara dağıtılamaz. Sermaye üzerinden kazanç dağıtılamaz. Yönetim ve denetim kurulu üyelerine kazanç üzerinden pay verilemez.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Özel Fon ile Ortaklar ve Personel İçin Yardım Fonu:</h5>
                    <p className="font-semibold mb-2">Madde 65-</p>
                    <p className="leading-relaxed mb-2">
                      Kooperatifin ortaklarla muamele ve ortak dışı işlemlerden elde etmiş olduğu olumlu fark 64'üncü maddenin 2'nci fıkrası çerçevesinde dağıtılmamasına karar verilmişse bunlar kooperatifin gelişmesine yarayacak işlerde kullanılmak üzere özel bir fon ile ortaklar ve personel için yardım fonu hesaplarında toplanır.
                    </p>
                    <p className="leading-relaxed">
                      Bu fonlarda toplanan hasılanın kullanımına ilişkin esaslar genel kurulca kararlaştırılır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Yedek Akçelerin ve Fonların Nemalandırılması:</h5>
                    <p className="font-semibold mb-2">Madde 66-</p>
                    <p className="leading-relaxed">
                      Yedek akçelerin ve özel fonların nemalandırılmasına ilişkin şekil ve şartlar genel kurulca kararlaştırılır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Devir Teslim Tutanağı:</h5>
                    <p className="font-semibold mb-2">Madde 67-</p>
                    <p className="leading-relaxed">
                      Yönetim kurulu üyeleri ve memurları, görev devir ve teslimleri sırasında sorumlulukları altındaki para, mal, defter, belge ve diğer kooperatif varlıklarını bir tutanakla yeni görevlilere teslim etmekle yükümlüdürler.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Avanslar ve Ödemeler:</h5>
                    <p className="font-semibold mb-2">Madde 68-</p>
                    <p className="leading-relaxed mb-2">
                      Kooperatifin amaç ve işleri dışında avans verilemez ve ödeme yapılamaz. Her türlü ödemelerin geçerli belgelere dayandırılması şarttır.
                    </p>
                    <p className="leading-relaxed">
                      Verilecek avansın sebebi, miktarı, süresi, geri alınma şartları, kapatılması şekli ile kasada günlük olarak bulundurulacak azami para miktarı ve kooperatif parasının amaçlara uygun şekilde değerlendirilmesi usulü yönetim kurulu tarafından belirlenir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Kooperatifin Aczi Halinde Yapılacak İşler:</h5>
                    <p className="font-semibold mb-2">Madde 69-</p>
                    <p className="leading-relaxed mb-2">
                      Kooperatifin aciz halinde bulunduğunu kabul ettirecek ciddi sebepler mevcut ise, yönetim kurulu piyasada cari fiyatlar esas olmak üzere, derhal bir ara bilançosu tanzim eder.
                    </p>
                    <p className="leading-relaxed mb-2">
                      Son yılın bilançosu veya daha sonra yapılan bir tasfiye bilançosu veyahut yukarıda sözü geçen ara bilançosu kooperatif mevcudunun borçlarını artık karşılamayacağını gösteriyorsa yönetim kurulu Gümrük ve Ticaret Bakanlığı'na durumu bildirir ve genel kurulu derhal olağanüstü toplantıya çağırır.
                    </p>
                    <p className="leading-relaxed">
                      Son yılın bilançosunda kooperatif varlığının yarısı karşılıksız kalırsa yönetim kurulu derhal genel kurulu toplantıya çağırarak durumu ortaklara arz eder. Aynı zamanda ilgili mahkeme ile Gümrük ve Ticaret Bakanlığına bilgi verir. Ancak, bilançoda tespit edilen açık, üç ay içinde ortakların ek ödemeleri ile kapanmadığı takdirde yine Bakanlık haberdar edilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-4">DEFTERLER</h4>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Tutulacak Defterler:</h5>
                    <p className="font-semibold mb-2">Madde 70-</p>
                    <p className="leading-relaxed mb-2">Kooperatifte aşağıdaki defterlerin tutulması zorunludur:</p>
                    <ul className="space-y-2 ml-6 list-disc mb-3">
                      <li>Yevmiye Defteri,</li>
                      <li>Defteri Kebir,</li>
                      <li>Envanter Defteri,</li>
                      <li>Ortaklar (Pay) Defteri,</li>
                      <li>Yönetim Kurulu Karar Defteri,</li>
                      <li>Genel Kurul Karar ve Müzakere Defteri.</li>
                    </ul>
                    <p className="leading-relaxed">
                      Kooperatifte bu defterlerden başka 6102 sayılı Türk Ticaret Kanunu'nun 64/5'inci maddesi gereği işin mahiyeti ve öneminin gerektirdiği diğer defterler de tutulur.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Yevmiye Defteri:</h5>
                    <p className="font-semibold mb-2">Madde 71-</p>
                    <p className="leading-relaxed mb-2">
                      Yevmiye defteri, kayda geçirilmesi gereken işlemlerin ilgili belge veya ispata dayanan evraktan çıkarılarak tarih sırasıyla ve "madde" halinde düzenli olarak yazıldığı defterdir.
                    </p>
                    <p className="leading-relaxed mb-2">Yevmiye maddelerinin en az aşağıdaki bilgileri içermesi şarttır:</p>
                    <ul className="space-y-2 ml-6 list-disc mb-3">
                      <li>Madde sıra numarası,</li>
                      <li>Tarih,</li>
                      <li>Borçlu hesap,</li>
                      <li>Alacaklı hesap,</li>
                      <li>Tutar,</li>
                      <li>Her kaydın dayandığı belgelerin türü ile varsa tarihleri ve sayıları.</li>
                    </ul>
                    <p className="leading-relaxed">
                      Yevmiye defteri ciltli ve sayfaları müteselsil sıra numaralı olur; vergi kanunlarına uygun olmak şartıyla müteharrik yapraklı defterler de kullanılabilir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Defteri Kebir:</h5>
                    <p className="font-semibold mb-2">Madde 72-</p>
                    <p className="leading-relaxed mb-2">
                      Defteri kebir, yevmiye defterine geçirilmiş olan işlemleri buradan alarak sistemli bir şekilde ilgili olduğu hesaplara dağıtan ve tasnifli olarak bu hesaplarda toplayan defterdir.
                    </p>
                    <p className="leading-relaxed mb-2">Defteri kebirdeki kayıtların en az aşağıdaki bilgileri içermesi şarttır:</p>
                    <ul className="space-y-2 ml-6 list-disc mb-3">
                      <li>Tarih,</li>
                      <li>Yevmiye defteri madde sıra numarası,</li>
                      <li>Tutar,</li>
                      <li>Toplu hesaplarda yardımcı nihai hesapların isimleri.</li>
                    </ul>
                    <p className="leading-relaxed">
                      71'inci maddenin üçüncü fıkrası hükmü defteri kebir hakkında da uygulanır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Envanter Defteri:</h5>
                    <p className="font-semibold mb-2">Madde 73-</p>
                    <p className="leading-relaxed mb-2">
                      Envanter defteri, kooperatifin açılışında ve açılıştan sonra her hesap döneminin sonunda taşınmazların, alacakların, borçların, nakit para tutarının ve varlıklar ile borçların değerlerinin teker teker kaydedildiği ciltli ve sayfaları müteselsil sıra numaralı defterdir.
                    </p>
                    <p className="leading-relaxed mb-2">
                      Hesap dönemi on iki ayı geçemez. Vergi Usul Kanunu'nun ilgili hükümleri saklı kalmak kaydıyla envanter, düzenli bir işletme faaliyetinin akışına uygun düşen süre içinde ve her halükarda hesap döneminin sonundan itibaren üç ay içinde çıkarılır ve deftere kaydedilir.
                    </p>
                    <p className="leading-relaxed">
                      71'inci maddenin üçüncü fıkrası hükmü envanter defteri hakkında da uygulanır.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Pay/Ortaklar Defteri:</h5>
                    <p className="font-semibold mb-2">Madde 74-</p>
                    <p className="leading-relaxed mb-2">
                      Pay/Ortaklar defteri; kooperatif ortaklarının bilgilerinin kaydedildiği ciltli ve sayfaları müteselsil sıra numaralı defterdir.
                    </p>
                    <p className="leading-relaxed mb-2">Pay/Ortaklar defterine yapılacak kayıtların en az aşağıdaki bilgileri içermesi şarttır:</p>
                    <ul className="space-y-2 ml-6 list-disc mb-3">
                      <li>Kooperatifin unvanı,</li>
                      <li>Ortağın adı soyadı veya unvanı,</li>
                      <li>Ortağın iş ve konut adresi,</li>
                      <li>Ortağın diğer iletişim bilgileri,</li>
                      <li>Ortağın kooperatife girdiği ve çıktığı tarihler,</li>
                      <li>Ortaklığın edinimi ve devrine ilişkin gerekli açıklamalar.</li>
                    </ul>
                    <p className="leading-relaxed mb-2">
                      Ortaklığın usulüne uygun olarak devredildiği ispat edilmediği sürece, devralan pay/ortaklar defterine yazılamaz.
                    </p>
                    <p className="leading-relaxed">
                      Her ortak defterde ayrı bir sayfada izlenir. Ortaklığı devralan yeni ortak da ayrı bir sayfada izlenir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Yönetim Kurulu Karar Defteri:</h5>
                    <p className="font-semibold mb-2">Madde 75-</p>
                    <p className="leading-relaxed mb-2">
                      Yönetim kurulu karar defteri, kooperatif yönetim kurulunun, kooperatif yönetimi ile ilgili olarak aldığı kararların yazılacağı ciltli ve sayfa numaraları teselsül eden defterdir.
                    </p>
                    <p className="leading-relaxed mb-2">Karar defterindeki kayıtların en az aşağıdaki bilgileri içermesi şarttır:</p>
                    <ul className="space-y-2 ml-6 list-disc mb-3">
                      <li>Karar tarihi,</li>
                      <li>Karar sayısı,</li>
                      <li>Toplantıda hazır bulunanlar,</li>
                      <li>Kararın içeriği,</li>
                      <li>Üyelerin imzaları.</li>
                    </ul>
                    <p className="leading-relaxed">
                      Her yönetim kurulu üyesi alınan karara ilişkin muhalefetinin bir şerh ile karar metnine geçirilmesini isteyebilir. Üyelerin şerh yazma talebi hiçbir sebeple reddedilemez; şerh yazılmasına engel olunamaz. Şerh, sahibi dışında hiç kimse tarafından değiştirilemez.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Genel Kurul Toplantı ve Müzakere Defteri:</h5>
                    <p className="font-semibold mb-2">Madde 76-</p>
                    <p className="leading-relaxed mb-2">
                      Genel kurul toplantı ve müzakere defteri, kooperatifin genel kurul toplantılarında görüşülen hususların ve alınan kararların kaydedildiği ciltli ve sayfa numaraları teselsül eden defterdir.
                    </p>
                    <p className="leading-relaxed">
                      Genel kurul toplantı ve müzakere defteri, kooperatif genel kurul toplantısı yapılırken genel kurulda sorulan sorular, verilen cevaplar, sunulan önergeler, alınan kararlar işlenerek düzenlenebileceği gibi hazırlanan toplantı tutanağının deftere yapıştırılması şeklinde de tutulabilir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Saklama Zorunluluğu:</h5>
                    <p className="font-semibold mb-2">Madde 77-</p>
                    <p className="leading-relaxed mb-2">
                      Kooperatif; tutmakla yükümlü olduğu ticari defterleri ve bu defterlere yapılan kayıtların dayandığı belgeleri sınıflandırılmış bir şekilde on yıl saklamakla yükümlüdür.
                    </p>
                    <p className="leading-relaxed">
                      Saklama süresi, ticari defterlere son kaydın yapıldığı veya muhasebe belgelerinin oluştuğu takvim yılının bitişiyle başlar.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Açılış Onayı Yapılacak Defterler ve Onay Zamanı:</h5>
                    <p className="font-semibold mb-2">Madde 78-</p>
                    <p className="leading-relaxed mb-2">
                      Kooperatifin tutmakla yükümlü olduğu yevmiye defteri, defteri kebir, envanter defteri, pay/ortaklar defteri, yönetim kurulu karar defteri ile genel kurul toplantı ve müzakere defterinin açılış onayları kuruluş sırasında ve kullanmaya başlamadan önce, izleyen faaliyet dönemlerindeki açılış onayları ise defterlerin kullanılacağı faaliyet döneminin ilk ayından önceki ayın sonuna kadar noter tarafından yapılır.
                    </p>
                    <p className="leading-relaxed">
                      Yevmiye defteri, defteri kebir, envanter defteri ile yönetim kurulu karar defterinin açılış onaylarının her hesap dönemi için yapılması zorunludur. Pay/ortaklar defteri ile genel kurul toplantı ve müzakere defteri yeterli yaprakları bulunmak kaydıyla izleyen hesap dönemlerinde de açılış onayı yaptırılmaksızın kullanılmaya devam edilebilir.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Kapanış Onayı Yapılacak Defterler ile Onay Zamanı ve Şekli:</h5>
                    <p className="font-semibold mb-2">Madde 79-</p>
                    <p className="leading-relaxed">
                      Yevmiye defteri ile yönetim kurulu karar defteri 6102 sayılı Türk Ticaret Kanunu'nun 64/3'üncü maddesinde belirlenen süreler dahilinde notere ibraz edilip, son kaydın altına noterce "Görülmüştür" ibaresi yazılarak mühür ve imza ile onaylanması zorunludur.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Onay Yenileme:</h5>
                    <p className="font-semibold mb-2">Madde 80-</p>
                    <p className="leading-relaxed">
                      Yönetim kurulu karar defteri, yevmiye defteri, envanter defteri ve defteri kebir yeterli yaprakları bulunması halinde yeni hesap döneminin ilk ayı içerisinde onay yenilemek suretiyle kullanılmaya devam edilebilir. Onay yenilemede defterlerin türü değiştirilemez.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ALTINCI BÖLÜM */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              ALTINCI BÖLÜM
            </h2>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              DAĞILMA VE TASFİYE
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Birleşme, Bölünme ve Tür Değiştirme:</h5>
                <p className="font-semibold mb-2">Madde 81-</p>
                <p className="leading-relaxed mb-2">
                  Genel kurul, kooperatifin konu ve amaçları ile ilgili diğer bir kooperatifle birleşmesine veya bir kamu tüzel kişisine ya da herhangi bir derneğe devredilmesine karar verebilir. Bu hallerde 1163 sayılı Kanunun 84 ve 85'inci maddelerine göre işlem yapılır.
                </p>
                <p className="leading-relaxed">
                  Ayrıca, kooperatif bir ticaret şirketi ile de birleşebilir, bölünebilir ve tür değiştirebilir. Bu hallerde 6102 sayılı Türk Ticaret Kanunu'nun 134 ilâ 194'üncü maddeleri arasındaki hükümler uygulanır.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Dağılma Sebepleri:</h5>
                <p className="font-semibold mb-2">Madde 82-</p>
                <p className="leading-relaxed mb-2">Kooperatif:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Ortak sayısının 7'den aşağı düşmesi üzerine,</li>
                  <li>Genel kurul kararıyla,</li>
                  <li>İflasın açılmasıyla,</li>
                  <li>Kanunlarda öngörülen diğer hallerde, Gümrük ve Ticaret Bakanlığı'nın mahkemeden alacağı karar üzerine,</li>
                  <li>Diğer bir kooperatifle birleşmesi veya devralınması suretiyle,</li>
                  <li>Üç yıl olağan genel kurul toplantısını yapmaması halinde,</li>
                  <li>Amacına ulaşma imkânı kalmadığının Gümrük ve Ticaret Bakanlığı'nca tespiti halinde mahkemeden alınacak kararla dağılır.</li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Tasfiye Kurulunun Oluşumu:</h5>
                <p className="font-semibold mb-2">Madde 83-</p>
                <p className="leading-relaxed mb-2">
                  Tasfiye kurulu genel kurul tarafından seçilecek en az iki kişiden oluşur. Genel kurul bu hususta yönetim kurulunu da görevlendirebilir. Genel kurulca tasfiye kurulu için bir görevlendirme veya seçim yapılmadığı takdirde, tasfiye işlerini yönetim kurulu yürütür.
                </p>
                <p className="leading-relaxed">
                  Tasfiye kurulu üyelerine atamayı yapan merci tarafından tespit edilecek miktarda ücret ödenir.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Tasfiye Memurlarının Yetkilerinin Sınırlandırılması ve Genişletilmesi:</h5>
                <p className="font-semibold mb-2">Madde 84-</p>
                <p className="leading-relaxed mb-2">
                  Tasfiye memurlarına Kanunla tanınmış yetkiler devredilemez; ancak, belirli uygulama işlemlerinin yapılabilmesi için, tasfiye memurlarından biri diğerine veya üçüncü bir kişiye temsil yetkisi verebilir.
                </p>
                <p className="leading-relaxed">
                  Tasfiye hâlindeki kooperatifi tasfiye ile ilgili konularda mahkemelerde ve dış ilişkide tasfiye memurları temsil eder.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Tasfiye Kurulunun Görevleri ve Tasfiyenin Yürütülmesi:</h5>
                <p className="font-semibold mb-2">Madde 85-</p>
                <p className="leading-relaxed mb-2">
                  Tasfiye memurları, tasfiye işlerinin bir an önce bitirilmesi için çalışmakla yükümlüdür. Bu amaçla, görevlerine başlar başlamaz, kooperatifin tasfiyenin başlangıcındaki durumunu incelerler; gerekirse kooperatif mallarına değer biçmek için uzmanlara başvurarak, kooperatifin malvarlığına ilişkin durumu ile finansal durumunu gösteren bir envanter ile bilanço düzenler ve genel kurulun onayına sunarlar.
                </p>
                <p className="leading-relaxed mb-2">
                  Alacaklı oldukları kooperatif defterlerinden veya diğer belgelerden anlaşılan ve yerleşim yerleri bilinen kişiler taahhütlü mektupla, diğer alacaklılar Türkiye Ticaret Sicili Gazetesinde birer hafta arayla yapılacak üç ilanla kooperatifin sona ermiş bulunduğu konusunda bilgilendirilirler ve alacaklarını tasfiye memurlarına bildirmeye çağrılırlar.
                </p>
                <p className="leading-relaxed">
                  Kooperatifin borçlarının ve pay bedellerinin ödenmesinden sonra kalan miktar, dağılma anında kayıtlı ortaklar veya hukuki halefleri arasında sermaye payları ile orantılı olarak dağıtılır.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Diğer Tasfiye İşleri:</h5>
                <p className="font-semibold mb-2">Madde 86-</p>
                <p className="leading-relaxed mb-2">Tasfiye memurları;</p>
                <ul className="space-y-2 ml-6 list-disc mb-3">
                  <li>Kooperatifin süregelen işlemlerini tamamlamak, gereğinde pay bedellerinin henüz ödenmemiş olan kısımlarını tahsil etmek, aktifleri paraya çevirmek ve kooperatif borçlarının, ilk tasfiye bilançosundan ve alacaklılara yapılan çağrı sonucunda anlaşılan duruma göre, kooperatif varlığından fazla olmadığı saptanmışsa, bu borçları ödemekle yükümlüdürler.</li>
                  <li>Tasfiyenin gerektirmediği yeni bir işlem yapamazlar.</li>
                  <li>Kooperatif borçları kooperatif varlığından fazla olduğu takdirde durumu derhâl kooperatifin merkezinin bulunduğu yerdeki asliye ticaret mahkemesine bildirirler; mahkeme iflasın açılmasına karar verir.</li>
                  <li>Tasfiyenin uzun sürmesi hâlinde, her yılsonu için tasfiyeye ilişkin finansal tabloları ve tasfiye sonunda da kesin bilançoyu düzenleyerek genel kurula sunarlar.</li>
                  <li>Tasfiye işlemlerinin düzenli yürütülmesi ve güvenliği için gereken defterleri tutarlar.</li>
                  <li>Tasfiye sırasında elde edilen paralardan kooperatifin süregelen harcamaları için gerekli olan para dışında kalan paraları, bir bankaya kooperatif adına yatırırlar.</li>
                  <li>Ortaklara tasfiye işlerinin durumu hakkında bilgi ve istedikleri takdirde bu konuda imzalı belge verirler.</li>
                  <li>Kooperatifin borçlarının ve pay bedellerinin ödenmesinden sonra kalan miktarın, dağılma anında kayıtlı ortaklar veya hukuki halefleri arasında sermaye payları ile orantılı olarak dağıtırlar.</li>
                  <li>Tasfiyenin sona ermesi üzerine kooperatif unvanının sicilden silinmesini sicil müdürlüğünden talep ederler.</li>
                </ul>
                <p className="leading-relaxed">
                  Tasfiyenin sonunda defterler ve tasfiyeye ilişkin olanlar da dâhil, belgeler Sulh Hukuk Mahkemesi tarafından saklanır.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Ek Tasfiye:</h5>
                <p className="font-semibold mb-2">Madde 87-</p>
                <p className="leading-relaxed mb-2">
                  Tasfiyenin kapanmasından sonra ek tasfiye işlemlerinin yapılmasının zorunlu olduğu anlaşılırsa, son tasfiye memurları, yönetim kurulu üyeleri, ortaklar veya alacaklılar, kooperatif merkezinin bulunduğu yerdeki asliye ticaret mahkemesinden, bu ek işlemler sonuçlandırılıncaya kadar, kooperatifin yeniden tescilini isteyebilirler.
                </p>
                <p className="leading-relaxed">
                  Mahkeme istemin yerinde olduğuna kanaat getirirse, kooperatifin ek tasfiye için yeniden tesciline karar verir ve bu işlemlerini yapmaları için son tasfiye memurlarını veya yeni bir veya birkaç kişiyi tasfiye memuru olarak atayarak tescil ve ilan ettirir.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Tasfiyeden Dönülmesi:</h5>
                <p className="font-semibold mb-2">Madde 88-</p>
                <p className="leading-relaxed mb-2">
                  Kooperatif anasözleşmede belirlenen sürenin dolmasıyla veya genel kurul kararıyla sona ermiş ise ortaklar arasında kooperatif malvarlığının dağıtımına başlanılmış olmadıkça, genel kurul kooperatifin devam etmesini kararlaştırabilir. Devam kararının tüm ortakların 3/5'inin oyu ile alınması gerekir.
                </p>
                <p className="leading-relaxed">
                  Tasfiyeden dönülmesine ilişkin genel kurul kararını tasfiye memurları tescil ve ilan ettirir.
                </p>
              </div>
            </div>
          </div>

          {/* YEDİNCİ BÖLÜM */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              YEDİNCİ BÖLÜM
            </h2>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              ÇEŞİTLİ HÜKÜMLER
            </h3>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Bakanlık ile Diğer Kurum ve Kuruluşların Denetimi:</h5>
                <p className="font-semibold mb-2">Madde 89-</p>
                <p className="leading-relaxed mb-2">
                  Kooperatif, Gümrük ve Ticaret Bakanlığı'nın denetimine tabidir. Bakanlık; kooperatif üst kuruluşlarını, ilgili müesseseleri ve bağımsız denetim kuruluşlarını kooperatifi denetlemekle görevlendirebilir.
                </p>
                <p className="leading-relaxed mb-2">
                  Kooperatif görevlileri; kooperatife ait mal, para ve para hükmündeki kâğıtları ve gizli de olsa bunlarla ilgili defter ve belgeleri istenildiğinde müfettişlere, denetimle görevlendirilen personele ve kredi kuruluşlarının denetim görevlilerine göstermek, saymasına ve incelenmesine yardımda bulunmak, istenilen bilgileri gerçeğe uygun ve eksiksiz olarak vermek ve doğru beyanda bulunmakla yükümlüdürler.
                </p>
                <p className="leading-relaxed">
                  Kooperatif, denetim sonuçlarına göre Bakanlıkça verilecek talimata uymak zorundadır.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Kanun Hükümlerinin Uygulanması:</h5>
                <p className="font-semibold mb-2">Madde 90-</p>
                <p className="leading-relaxed">
                  Bu anasözleşmede açıklık olmayan hallerde 1163 sayılı Kooperatifler Kanunu ile Türk Ticaret Kanunu'nun anonim şirketlerine ait hükümleri uygulanır.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">İlk Yönetim Kurulu Üyeleri:</h5>
                <p className="font-semibold mb-2">Madde 91-</p>
                <p className="leading-relaxed mb-2">
                  İlk genel kurul toplantısına kadar görev yapmak üzere, aşağıdaki kurucu ortaklar yönetim kurulu üyeliğine seçilmişlerdir.
                </p>
                <p className="leading-relaxed italic text-sm">
                  [Kurucu ortakların isimleri kurulacak kooperatif tarafından doldurulacaktır]
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">İlk Denetim Kurulu Üyeleri:</h5>
                <p className="font-semibold mb-2">Madde 92-</p>
                <p className="leading-relaxed mb-2">
                  İlk genel kurul toplantısına kadar görev yapmak üzere, aşağıdaki kişiler denetim kurulu üyeliğine seçilmişlerdir.
                </p>
                <p className="leading-relaxed italic text-sm">
                  [Denetim kurulu üyelerinin isimleri kurulacak kooperatif tarafından doldurulacaktır]
                </p>
              </div>

              <div>
                <h5 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Kurucular:</h5>
                <p className="font-semibold mb-2">Madde 93-</p>
                <p className="leading-relaxed mb-2">
                  Aşağıda isimleri, tabiiyetleri, adresleri, taahhüt ve tediye ettikleri sermaye payları ile imzaları bulunan;
                </p>
                <ul className="space-y-2 ml-6 list-disc mb-3">
                  <li>Kurucu ortaklar, bu anasözleşmenin 10'uncu maddesinde belirtilen ortaklık şartlarını taşıdıklarını,</li>
                  <li>İlk yönetim kurulu üyeleri ile denetim kurulu üyeleri, bu anasözleşmenin 45 ve 56'ncı maddelerinde belirtilen seçilme şartlarını taşıdıklarını,</li>
                </ul>
                <p className="leading-relaxed">beyan ederler.</p>
                <p className="leading-relaxed italic text-sm mt-4">
                  [Kurucular tablosu kurulacak kooperatif tarafından doldurulacaktır: Adı-Soyadı/Unvan, Tabiiyeti, T.C. Kimlik No/Sicil No, Adresi, Sermaye Taahhüdü, Ödediği Sermaye, İmza]
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 border-l-4 border-blue-600 mt-12">
            <p className="text-sm text-gray-700 dark:text-gray-300 italic mb-4">
              <strong>Not:</strong> Bu anasözleşme, T.C. Gümrük ve Ticaret Bakanlığı Kooperatifçilik Genel Müdürlüğü tarafından 1163 sayılı Kooperatifler Kanununun 88 inci maddesi uyarınca hazırlanmış örnek anasözleşmedir.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
              Kurulacak kooperatiflerde, köşeli parantez [ ] içinde belirtilen bölümler kooperatifin özel durumuna göre doldurulmalıdır.
            </p>
          </div>

          {/* Geri Dön */}
          <div className="mt-12">
            <Link
              href="/kooperatifcilik/mevzuat"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Mevzuat Bölümüne Dön
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}

