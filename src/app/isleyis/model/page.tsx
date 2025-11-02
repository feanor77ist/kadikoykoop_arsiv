"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import { useState, useEffect } from "react";

export default function Model() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/isleyis" className="hover:text-blue-600 dark:hover:text-blue-400">İşleyiş</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Model</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            KADIKÖY KOOPERATİFİ ÖRGÜTLENME MODELİ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Mayıs 2019
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Kadıköy Kooperatifi, resmi bir tüketim kooperatifidir. Aynı zamanda kooperatif dükkanı, kooperatif birimleri, haftalık toplantıları, çalıştayları, kamu etkinlikleri ile; kooperatif ortakları, gönüllüleri, dükkandan alışveriş edenler, ve kooperatif dostlarından oluşan; kooperatifin çalışmaları dolayısıyla birbiriyle ilişkiler kuran insanlardan oluşan bir ağı ifade eder. Bu ağ canlı ve üretkendir; kişiler arasında dayanışma, beraber çalışma ve paylaşım ilişkilerini güçlendirir.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-8">
          
          {/* Birlikte Çalışma Biçimleri */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Birlikte Çalışma Biçimleri
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Kooperatif çalışmaları gönüllülük temelinde yapılır. Kooperatifin pratik işleyişi ve yasal zorunlulukları dolayısıyla, kooperatif ağına pratik olarak katılan kişileri tanımlamak amacıyla aşağıdaki kategoriler kullanılmaktadır.
            </p>

            {/* Kooperatif Ortağı */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Kooperatif Ortağı
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kadıköy Kooperatifi, resmi bir tüketim kooperatifi olarak "ortaklık" sistemine göre çalışır. Ortaklar, kooperatifin amaçlarını benimsemiş, tanımlı resmi görev ve sorumlulukları kabul etmiş katılımcılardır. Resmi bütün organlarda ve kooperatif birimlerinde görev alabilir, bütçeyi inceleyebilirler.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatif ortakları, ortaklık payı ödemekle yükümlüdür. Kooperatifin kolektif sermayesi ortaklık payı üzerinden oluşmaktadır. Bu sermaye, kooperatifin kendisini sürdürebilmesi amacıyla kullanılır. Gerekli olduğu durumlarda kooperatif sermayesinden ayrılan bir kısım eğitim çalışmaları ve toplumsal dayanışma amacıyla kullanılabilir. Kooperatif çalışmalarında yer almak isteyen herkes kooperatif ortağı olmaya teşvik edilir. Kooperatife resmi olarak ortak olmak istemeyen gönüllüler, kooperatif ortaklarının yönlendiriciliği ile kooperatif çalışmalarına katılırlar.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatif ortakları kooperatif işlerini yürütmek için kooperatif gönüllüleri ile birlikte çalışır. Altı ay kooperatif gönüllüsü olarak çalışmış kişilerin kooperatife ortak olması beklenir. Kooperatif Yönetim Kurulu üyeleri altı ay kooperatif gönüllüsü olarak çalışan ve kendi isteğiyle kooperatif ortağı olmak için harekete geçmeyen gönüllülerle konuşarak ortak olmalarını önerir. Eğer gönüllüler yasal bir engel veya özel bir durum dışında, kooperatif işleyişi veya örgütlenmesi ile ilgili bir gerekçeyle ortak olmak istemiyorlarsa, bu durum Yönetim Kurulu tarafından uygun bir biçimde izleyen Pazar toplantısında ele alınır.
              </p>
            </div>

            {/* Kooperatif Gönüllüsü */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Kooperatif Gönüllüsü
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatif ortağı olmadan kooperatif çalışmalarına aktif bir şekilde katılan kişilerdir. Kooperatif gönüllüleri, resmi kooperatifin işleri dışındaki işlerle ilgili karar mekanizmalarında yer alarak kooperatifi fiilen işletir ve dükkanın çalışmasını sağlar. Kooperatifin işleyişine dair kararlar her hafta Perşembe günü yapılan "Mutfak Toplantısı", Çalıştaylar, ve kooperatif birimlerinin yaptığı çalışmalarla şekillenir. Kooperatif gönüllülerinin aşağıda açıklanan ve belirli süreler için geçerliolabilecek özel durumlar dışında mutfak toplantılarına katılması gereklidir.
              </p>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Kooperatif gönüllüsü olma – Mutfak Ekibine katılma
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Kooperatif gönüllüsü olmak isteyen kişiler her ay düzenlenen Kadıköy Kooperatifi Kendini Anlatıyor etkinliğine ve ardından Kooperatif eğitimine katılırlar. Eğer gönüllü adayı için zaman uygun değilse doğrudan eğitime katılarak gönüllülük ve kooperatif hakkında bilgi edinir. Gönüllü adayı daha sonra mutfak toplantısına katılır. Bu toplantıda diğer gönüllülerle tanışır ve kendisine bir eşlikçi belirlenir. Eşlikçi yeni gönüllüye kooperatifin işleyişi, dükkan işleri ve teorik-pratik teamüller konusunda yardımcı olur. Eşlikçilik sürecinde, gönüllünün kooperatif amaç ve ilkelerini tanıması, kooperatifin pratik işleyişine alışması, kooperatif mekanizmasını öğrenmesi amaçlanır. Gönüllü adayı, kooperatifin işleyişi ve mekanizmaları ile ilgili bu eşten yardım alır, onun yönlendiriciliği ile çalışmalara katılır. Eşlikçi yeni gönüllü kendi başına nöbet tutabilene kadar ona eşlik eder. Bu sırada kooperatifi tanıyan gönüllü hangi birimde çalışmak istediğini seçer ve o birimde çalışmaya başlar. Birimde yer alan diğer gönüllüler yeni gönüllüye birim çalışmaları konusunda gerekli bilgileri aktarır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Kooperatif gönüllülerinin başlıca sorumlulukları şunlardır:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-700 dark:text-gray-300">
                  <li>Ürün/Üretici sorumluluğu yürütmek</li>
                  <li>Dükkan nöbeti tutarak dükkanı açık tutmak</li>
                  <li>Kooperatif biriminde çalışmak</li>
                  <li>Kooperatif çalışma gruplarında çalışmak</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Kooperatife yeni katılan bir gönüllünün bu işlerin hepsini işlerini yaparak hem kooperatifi tanıması, hem de tüm bu işlerde deneyim kazanması beklenir. Kooperatif gönüllülerinin deneyimleri sonucunda katılım ile ilgili bazı özel durumlar ortaya çıkabileceği gözlemlenmiştir. Sözkonusu özel durumlar şöyle düzenlenmiştir:
                </p>
                <ul className="list-disc list-inside space-y-4 ml-4 mb-4 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Gönüllü karar mekanizmalarında yer almak istemezse:</strong>
                    <br />
                    En az 6 aylık süre sonrasında kooperatif gönüllüsü eğer karar mekanizmalarında yer almak istemezse toplantılara katılma gerekliliği ortadan kalkar. Gönüllü isterse karar mekanizmalarında yer almadan sorumluluklarını yerine getirerek kooperatif çalışmalarına devam edebilir:
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li>Ürün/Üretici sorumluluğu yürütmek</li>
                      <li>Dükkan nöbeti tutarak dükkanı açık tutmak</li>
                      <li>Kooperatif biriminde çalışmak</li>
                      <li>Kooperatif çalışma gruplarında çalışmak</li>
                    </ul>
                    Bu durumdaki gönüllü eğer karar alma süreçlerine katılmak istiyorsa, konsensüs aşamalarını takip etmeli ve ilgili toplantılara katılmalıdır.
                  </li>
                  <li>
                    <strong>Gönüllü özel bir durum nedeniyle çalışmaların bir kısmında yer alabilecek ise:</strong>
                    <br />
                    Kooperatif gönüllüsü eğer hayatında özel bir durum ortaya çıkarsa, durumunu mutfak grubuna bildirerek bir yıl içinde toplam 6 ay süre ile sorumluluklarını yürüterek kooperatifte yer almaya devam edebilir:
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li>Dükkan nöbeti tutarak dükkanı açık tutmak</li>
                      <li>Kooperatif biriminde çalışmak</li>
                      <li>Ürün/Üretici sorumluluğu yürütmek</li>
                    </ul>
                    Bu durumdaki gönüllü eğer karar alma süreçlerine katılmak istiyorsa, konsensüs aşamalarını takip etmeli ve ilgili toplantılara katılmalıdır. Kooperatif gönüllüsü en geç 3 ayda içinde durumunu ve faaliyetlerini gözden geçirerek hangi biçimde devam edeceğini mutfak grubuna tekrar bildirmelidir.
                  </li>
                  <li>
                    <strong>Gönüllü sadece dükkanda çalışabilecek durumdaysa:</strong>
                    <br />
                    Kooperatife yeterli vakit ayıramayacağını düşünen gönüllü süre sınırı olmaksızın sadece dükkan nöbeti tutarak kooperatif çalışmalarına katılabilir. Bu durumda gönüllünün aksini belirtmedikçe karar süreçlerine dahil olamayacağı varsayılır. Böyle bir durumda gönüllü dükkan ile ilgili konulardaki kararlara konsensüs aşamalarını takip ederek ve ilgili toplantılara gelerek katılabilir.
                    <br />
                    Sadece nöbet tutan gönüllüler kooperatifin kararlarından, işleyişinde oluşabilecek değişikliklerden ve kooperatifin geçirdiği dönüşümden yeterince haberdar olamayabilirler. Kooperatifte gerçekleşebilecek bu tür değişiklikler ve dükkan ile ilgili gelişmeler hakkında bu gönüllülere yardımcı olmak amacıyla bilgilendirici kısa notlar hazırlanır. Haftalık toplantılarda alınan belirleyici kararlar; Çalıştaylar, Pazar toplantıları ve teorik toplantılarda alınan kararlar konusunda bilgilendirici notları Koordinasyon birimi hazırlar. Dükkan işleyişi ile ilgili değişikler dükkan yönergesi üzerinden izlenir. Bu durumdaki bir gönüllü mutfak ile iletişimini sağlıklı biçimde yürütmek ve işleyişe dair oluşabilecek sorunları önlemek amacıyla eşlikçisi ile birlikte çalışmalıdır. Eğer eşlikçisi ayrılmış ise gönüllüye yeni bir eşlikçi belirlenir.
                  </li>
                  <li>
                    <strong>Gönüllü kısa bir süre uzakta bulunacaksa:</strong>
                    <br />
                    Kooperatif gönüllüsü fiziksel koşullar nedeniyle kend dışında bulunacaksa ve bu nedenle nöbet tutamayacaksa, durumunu mutfak grubuna bildirerek bir yıl içinde toplam 6 ay süre ile sorumluluklarını yürüterek kooperatifte yer almaya devam edebilir:
                    <ul className="list-disc list-inside space-y-1 ml-6 mt-2">
                      <li>Kooperatif biriminde çalışmak</li>
                      <li>Ürün/Üretici sorumluluğu yürütmek</li>
                    </ul>
                    Bu durumdaki gönüllü eğer karar alma süreçlerine katılmak istiyorsa, konsensüs aşamalarını takip etmeli ve ilgili toplantılara uzaktan katılabilmek için koordinasyon birimine başvurmalıdır. Kooperatif gönüllüsü en geç 3 ayda içinde durumunu ve faaliyetlerini gözden geçirerek hangi biçimde devam edeceğini mutfak grubuna tekrar bildirmelidir.
                  </li>
                  <li>
                    <strong>Gönüllü kısa bir süre hiçbir kooperatif çalışmasına katılamayacaksa:</strong>
                    <br />
                    Kooperatife vakit ayıramayacağını ve belirli bir süre ara verdiğini söyleyen kişi, karar süreçlerine dahil olamayacağını da beyan etmiş sayılır. Bu şekilde geçici ara verme durumu bir yıl içinde en fazla 3 ay süre ile yapılabilir. Böyle bir durumda kooperatif gönüllüsünün herhangi bir çalışma yapması beklenmez. Eğer ara verme süresi 3 aydan daha uzun sürecek ise gönüllünün ayrılması ve uygun olduğunda geri gelmesi uygun olur. Gönüllülerin kooperatif işlerine katkı yapma biçimleri koordinasyon birimi tarafından takip edilir. Ara veren bir kişi kooperatife geri döndüğünde kendisine kooperatifin işleyişi ve pratik konularda yardımcı olmak amacıyla bir eşlikçi belirlenir. Kişi kendisini tek başına nöbet tutacak kadar yeterli hissedene dek eşlikçisi ile birlikte çalışır.
                    <br />
                    Koordinasyon birimi kooperatif gönüllülerinin aynı anda kitlesel olarak ara verme talepleri karşısında, kooperatifin iş yükünü ve varolan gönüllü sayısını gözönünde bulundurarak mutfağa bilgi verir. Ara vermek isteyenler arasında olanaklı ise bir dönüşüm kurmaya çalışır.
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Tüm bu gönüllülük biçimleri bir arada yer alacağından ve farklı gönüllüler farklı işgücü sağlayacağından tüm bu işlerin ve gönüllülerin durumu koordinasyon ve örgütlenme birimleri tarafından organize edilir. Tüm gönüllüler özel durumları konusunda mutfağı bilgilendirir. İş yükü ve iş gücü konusunda Koordinasyon birimi mutfağa periyodik olarak bilgi verir.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Kooperatif gönüllüsü olmaktan çıkma – Mutfak Ekibinden ayrılma
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Mutfaktan ayrılmak isteyen kişi mutfağa kendisi anlatarak ayrılır, mutfak toplantısına gelerek, gelemiyorsa yazarak mutfağı bilgilendirir. Bu şekilde başlayan süreçte drive yetkileri kaldırılır, gönüllü sorumluluklarını devreder. Eğer anlattığından farklı bir durum varsa ve biliyorsak ayrıldıktan sonraki toplantıda öncelikli gündem yapılarak bunu konuşup gönüllü çıkarsa görüşme yapılabilir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Bir gönüllünün herhangi bir şekilde aklında mutfak ekibinden ayrılma fikri oluştuğunda, bunun nedenleri ile ilgili olarak bir iç değerlendirme yapması ve olası sorunları belirlemesi beklenir. Daha sonra bu sorunları çözebilmek için Pazar toplantısına, gerek görüyorsa Arabuluculuk ekibine konuyu açması ve çözüm araması beklenir. Eğer kişi bunlar sonrasında da birlikte çalışma olanağı kalmadığını düşünüyor ve ayrılmayı istiyorsa, mutfak toplantısına gelerek veya gelemiyorsa yazarak ayrılmasının nedenlerini ve süreçle ilgili söylemek istediklerini sözlü veya yazılı olarak aktarır. Bu aktarımın yapıldığı toplantıdan başlayarak gönüllünün yürüttüğü sorumlulukları, varsa yarım kalan işleri veya takip ettiği konuları, ürün/üretici sorumluluğunu diğer gönüllülere aktarması gerekir. Bu aktarım sonrasında iletişim kanallarından ve ilgili diğer üyeliklerden çıkarılır. Ayrılma ile ilgili işleri takip edip tamamlamak Koordinasyon biriminin görevidir ve neler yapılacağı birim yönergesinde belirtilmiştir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ayrılık gerçekleştikten sonraki mutfak toplantısında bu ayrılış öncelikli gündemlerde ele alınır. Eğer gönüllünün belirttiklerinden farklı bir durum varsa Mutfak ekibi ayrılan gönüllü ile yeniden görüşüp görüşmeyeceğine karar verir. Görüşmenin temel amacı, olası haksızlık ve küskünlükleri gidermek, birlikte çalışma olanaklarının neden ve nasıl ortadan kalktığını anlayarak Kooperatif çalışması içinde olası iyileştirmeleri yapabilmektir. Görüşme kararı alınırsa, görümeyi yapacak gönüllüler belirlenir ve gönüllü görüşme isteğini ayrılan kişiye iletir. Görüşme fikri kabul görür ise görüşmeciler konu ile ilgili değerlendirmelerini görüşmeyi takip eden Mutfak toplantısında aktarırlar. Eğer görüşme gereği duyulmaz veya görüşme yapacak gönüllü çıkmaz ise görüşme yapılmaz.
                </p>
              </div>
            </div>

            {/* Kooperatif Dostu */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Kooperatif Dostu
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatif çalışmalarını çeşitli dayanışma biçimleri ile destekleyen kişilerdir. Bilgi ve becerilerini kooperatif ile paylaşırlar, dönemsel olarak veya uzun vadeli olmak üzere karşılıklı belirlenen biçimlerde kooperatif çalışmalarına katılırlar.
              </p>
            </div>
          </section>

          {/* Kooperatif İşleyişi */}
          <section className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Kooperatif İşleyişi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Kooperatif işleyişi kooperatif ortakları ve gönüllülerinin, oluşturulan hukuk çerçevesinde bütünleşmesini ve devamlılığı gerektirir. Bu açıdan, kooperatif ortakları ve gönüllüleri, örgütlenme faaliyetinin devamlılığı, yaygınlaşması ve genişlemesi için kooperatif birimlerinde çalışmaya teşvik edilir. Kadıköy Kooperatifi işleyişinin tüm aşamalarını ortak ve gönüllülerin konsensüs yöntemiyle aldıkları kararlar ile yönetir. Konsensüs işleyişi ilerde "D-Konsensüs" bölümünde açıklanmıştır. Kooperatif kararları aşağıdaki toplantılarda biraraya gelinerek oluşturulur:
            </p>
            <ul className="list-disc list-inside space-y-4 ml-4 mb-6 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Haftalık Kooperatif Toplantısı</strong>
                <br />
                Haftalık toplantı, kooperatif ortakları, gönüllüler, ortak-adayları ve ilgililere açıktır. Haftalık toplantılarda, birimler kendi çalışmalarının bilgilendirmesini yapar; kooperatifin çalışmaları değerlendirilir; yeni yapılacak çalışmalar konuşulur ve genel yönelimler belirlenir. Haftalık toplantı, kooperatif birimleri dışında, kooperatif çalışmasının toparlandığı, değerlendirildiği ve yürütüldüğü, sürekliliği olan temel mekanizmadır. Mutfak toplantısı adıyla da anılan bu toplantılar haftalık periyotlarda Perşembe günleri yapılır. Her ayın ikinci haftası yapılan toplantılar teorik tartışmalara ayrılmıştır. Çalışay ve Pazar toplantısı olan haftalarda toplantı yapılmaz. Kooperatifin pratik işleyişini aksatmamak amacıyla, teorik perşembe, Çalıştay ve Pazar toplantılarında öncelikli gündemler ilk yarım saatlik süre içerisinde ele alınır. Mutfak toplantılar "Toplantı Usulü Hakkında Yönerge"de belirtildiği biçimde gerçekleştirilir.
              </li>
              <li>
                <strong>Çalıştaylar</strong>
                <br />
                Kooperatifle ilgili yapısal ve bağlayıcılığı olan kararlar (yeni dükkân açmak, üretim atölyesi kurmak, mali ve yasal yükümlülükler altına girmek, ilkeleri geliştirmek, sorunları ele almak vb.) tüm ortakların ve gönüllülerin katılımıyla yapılacak çalıştaylarda alınır. Çalıştaylar iki aylık periyotlarla pazar günleri yapılır. Çalıştaylar "Çalıştay Yönergesi"ne göre gerçekleştirilir. Çalıştayda alınan kararlar kesindir ve başka bir toplantı kararı ile değiştirilemez.
              </li>
              <li>
                <strong>Pazar toplantıları</strong>
                <br />
                Kooperatif içinde insani ilişkiler, duygular, işleyiş sırasında görülen ancak rahatlıkla konuşulamayan konular gibi kooperatifin iç örgütlenmesinden, işleyiş ilkelerinden, yataylıktan ve işleyiş nedeniyle yataylığa uygun düşmeyen olay veya tavırlardan doğan sorunların konuşularak dile getirilebilmesi ve olabildiğince çözüme kavuşturulması için iki ayda bir Pazar günleri yapılan toplantılardır. Pazar toplantıları serbest konuşmaya olanak sağlamak için belirli bir yönteme uymak zorunlu değildir. Ancak toplantılar, toplantı yönergesi ve iletişim yönergesi ilkeleri temel alınarak gerçekleştirilir. Pazar toplantılarında karar alınması zorunlu değildir. Bir uzlaşma oluşursa karar alınır. Gerekirse oluşturulan eğilimler daha sonraki mutfak veya teorik toplantılarda karar bağlanmak üzere ilgili birim veya çalışma gruplarına aktarılır. Pazar toplantılarında alınan kararlara yapılan itirazlar bir sonraki Pazar toplantısında ele alınır. Ancak alınan karar uygulanmaya başlanır.
              </li>
              <li>
                <strong>Kooperatif Genel Kurulu</strong>
                <br />
                Kooperatifin resmi işleyişinin sürdürülebilmesi için her yıl yapılması gereken ortakların katılmasının zorunlu olduğu toplantılardır. Yasal mevzuat gereği türlü kategoride yer alan kararlar genel kurulda alınır ve yeni Yönetim Kurulu belirlenir.
              </li>
            </ul>

            {/* Kooperatif Sorumlulukları */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Kooperatif Sorumlulukları
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatif ortakları ve gönüllüleri kooperatifin genel ve gündelik işlerinin yanısıra aşağıdaki temel sorumlulukları yerine getirir.
              </p>
              <ul className="list-disc list-inside space-y-4 ml-4 mb-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Ürün/Üretici sorumluluğu</strong>
                  <br />
                  Her ürünün düzenli takibi ve siparişlerin verilmesi işlerini ürün veya üretici bazlı "ürün sorumluları" üstlenir. Ürün/Üretici sorumlularının görevleri "Ürün/Üretici Sorumlusu Ne Yapar?" adlı dökümanda açıklanmıştır.
                </li>
                <li>
                  <strong>Dükkan Nöbeti sorumluluğu</strong>
                  <br />
                  Dükkan Kooperatifin ana ticari faaliyetlerini yürüttüğü yerdir. Dükkan gönüllüler tarafından işletilir. Gönüllüler gündüz çalıştıkları için dükkan haftaiçi 19:00 – 21:00 ve haftasonu 10:00 – 18:00 saatleri arasında açılır. Dükkan faaliyetleri ikişer saatlik nöbetler halinde düzenlenir ve gönüllüler nöbet boyunca dükkan yönergesinde tarif edilen tüm faaliyetleri yerine getirir.
                </li>
                <li>
                  <strong>Kooperatif çalışma grupları</strong>
                  <br />
                  Kooperatif herhangi bir konuda inceleme yapmak ya da araştırma yürütmek, bir alanda yürütülecek çalışmaları kooperatif adına koordine etmek, karara bağlanamayan gündemleri/konuları türlü biçimlerde ele alarak gönüllüler için tartışma olanakları yaratmak vb. amaçlardan herhangi biri için dönemsel olarak çalışacak gruplar oluşturabilir. Bir mutfak gönüllüsünün aynı anda birden fazla çalışma grubunda yer almamasina dikkat edilir. Bu gruplara mutfak üyelerinin yanısıra uzmanlığına ihtiyaç duyulan insanlar da katılabilirler. Çalışma grupları üstlendikleri işleri belirlenen sürelerde yerine getirir ve aylık olarak çalışmaları ile ilgili olarak Mutfak grubuna bilgi verir. Grup çalışmasını sonlandırdıktan sonra elde ettiği bilgileri rapor haline getirerek mutfakla paylaşır ve kooperatifin, çalışma grubunun oluşturulmasına sebep olan konuyu tekrar ele alacağı bir toplantıda bu raporu sunar. Çalışma grubu elde ettiği tüm birikimi, hazırladığı rapor ve sunumla birlikte kooperatif arşivine kaydeder.
                </li>
                <li>
                  <strong>Kooperatif Birimleri</strong>
                  <br />
                  Kooperatif birimleri devamlılık, genişleme ve yaygınlaşma ihtiyaçlarına bağlı olarak tanımlanır. Her birimin çalışma alanı ve şeklinin tanımlı olması zaruridir. Böylece kooperatifin toplumla kuracağı ilişkinin tutarlı, bütüncül ve öğretici bir deneyim olması sağlanır. Her kooperatif ortağının bu faaliyetlerde rotasyon usulüne bağlı olarak çalışması öngörülür. Böylece herkesin istediği konuda yetkinleşme, beceri ve kabiliyetlerini aktarabilme hakkı sağlanırken tek konuda uzmanlaşma riskine karşı önlem alınır.
                  <br />
                  Kooperatif Birimlerinin çalışma alanları, görevleri ve çalışma biçimleri birim yönergelerinde tanımlanmıştır. Her birim kendi çalışmaları üzerinden hazırladıkları raporları, toplantı notları vb. belgeleri sanal dizinde saklar. Böylece yapılan her türlü çalışma, her denenmiş yöntem kayıt altına alınarak süreklilik ve devamlılık oluşturulur, kurumsallaşma sağlanır.
                  <br />
                  <ul className="list-disc list-inside space-y-2 ml-6 mt-2">
                    <li><strong>Sosyal Medya ve İletişim Birimi</strong>: Sosyal Medya ve İletişim Birimi'nin görevleri kooperatif üyeleri, üreticiler, dayanışmacılar ve bilgi almak isteyen kişilere doğru bilgi içeren, nitelikli bir bilgi akışı sağlamaktır.</li>
                    <li><strong>Örgütlenme Birimi</strong>: Kooperatif'in örgütlenme mekanizmasının oluşması, kooperatif çalışmalarının sağlıklı bir şekilde ilerlemesi için ortaya çıkan problemlerin tespit edilmesi; kooperatifin yerel birimlerinin kurulması ve işlemesi gibi çalışmalar yürütür. Yurtiçi ve yurtdışındaki kooperatiflerle ilişkiler kurar ve dayanışmayı geliştirmeyi amaçlar.</li>
                    <li><strong>Eğitim ve Araştırma Birimi</strong>: Kadıköy Kooperatifi'nin birliktelik ve dayanışma ilişkilerini geliştirme hedefinden hareketle Eğitim ve Araştırma Birimi, Kooperatif'in çalışma biçimini ve ilkelerini yeni katılımcılara aktarır. Yeni katılımcılar için her ay 1 defa (öngörülen) olmak üzere "genel ortak eğitimi" çalışması organize eder. Bununla birlikte Kooperatif'in ilke ve vizyonunun pekiştirilmesi amacıyla kooperatif ortaklarına yönelik eğitim çalışmaları yürütür. Diğer birimlerle koordineli bir biçimde çalışarak içe ve kamuya dönük etkinlik (atölye, çalıştay vb.) ve döküman (broşür gibi) hazırlar.</li>
                    <li><strong>Gıda Ürünleri Üreticileriyle İlişkiler Birimi</strong>: Ürün temin edilmesi, yeni üreticilerin keşfedilmesi (köylü pazarları araştırması, diğer kooperatif ve üreticilerden bilgi alınması), üreticilerle bağlantı kurulup gerekli bilgilerin alınması (ürün/üretici bilgi formu doldurulması vb.), ürünlerin getirilmesiyle ilgili işlerin koordine edilip gerçekleştirilmesi ve üretici ziyaretlerinin düzenlenmesi etkinliklerini yürütür. Ürün ve üreticilerin denetlenme modelinde üretici ziyaretleri, ilgili meslek odaları ile koordinasyon ve örgütlü üreticilerle çalışma konusunda diğer birimlerle ilişki içinde mekanizma oluşturur.</li>
                    <li><strong>Gıda Dışı Ürünler Birimi</strong>: Gıda dışı ürünlerin araştırılması, üreticilerle iletişim kurulması, ürünlerin test ve temin edilmesi çalışmalarını yürütür. Ürün bilgi formlarını hazırlar, kooperatife yeni ürünler önerir.</li>
                    <li><strong>Teknik Koordinasyon Birimi</strong>: Kooperatifin teknik ve teknolojik konularda duyduğu ihtiyaçlar konusunda gerekli sorumluluğu üstlenir. Kooperatifin kullanacağı bilgisayar sisteminin güncel ve güvende tutulması, kooperatif web sitesiyle stok takip ve ön muhasebe programlarının ihtiyaçlar doğrultusunda geliştirilmeleri ve güncellenmeleri gibi işlerin yanı sıra kurulması gereken teknik altyapılar da bu birimin yükümlülükleri arasındadır.</li>
                    <li><strong>Belge İşleri Koordinasyon ve Arşivleme Birimi</strong>: Kooperatif belgelerinin arşivlenmesi ve arşivin koordine edilmesi işlerini yürütür.</li>
                    <li><strong>Mali İşler Birimi</strong>: Kooperatif varlığı ve faaliyetlerinin gerektirdiği yasal süreçleri izlemek ve yürütmekle yükümlüdür. Kooperatif muhasebesinin kanunlara uygun yürütülmesi için Mali Müşavir, Avukat ve Muhasebeciyle birlikte çalışır ve resmi işler için ortaklarla koordinasyonu yürütür.</li>
                    <li><strong>Koordinasyon Birimi</strong>: Aylık takvim taslaklarını oluşturarak etkinlikleri ve toplantıları takvime işler, takibini yapar. Dükkan nöbet defterini takip ederek dükkan eksik-ihtiyaçları ve yapılacak işleri düzenli olarak listeleyip mutfak grubu ile paylaşır. Tamamlanmamış işleri hatırlatır. Toplantı mekanlarının listesini güncel tutar. Haftalık mutfak toplantısı için gündem maddelerini toparlayarak toplantıların moderasyonunu yapar. Plansız gelişen durumlarda hızlı görev dağılımı için inisiyatif kullanmak ve delege edilen işlerin takibini gerçekleştirmek de bu birimin sorumluluğundadır.</li>
                    <li><strong>Kadın Birimi</strong></li>
                    <li><strong>Arabuluculuk Ekibi</strong></li>
                    <li><strong>Kooperatif Yönetim Kurulu</strong>: Kooperatifin resmi işlerini yürütmek için kurulması yasalarca zorunlu olan Yönetim Kurulu da kooperatifin bir birimi olarak ele alınır. YK'da yer alanların ayrıca bir birimde yer almaları beklenmez. YK, kooperatifin resmi ortakları arasından oluşmak zorundadır. Kooperatif çalışmalarına aktif olarak katılmayan kişiler ortak olsalar da YK'da yer alamazlar. YK rotasyonunda mutfak grubunda yer alan kooperatif ortaklarının kıdemlerine göre bir sıra izlenir. En eski üyelerden başlayarak olağanüstü bir gerekçesi olmayan 3'er kişi YK görevini her genel kurulda eski YK üyelerinden devralır.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          {/* Rotasyon işleyişi */}
          <section className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Rotasyon işleyişi
            </h2>
            <ul className="list-disc list-inside space-y-4 ml-4 mb-6 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Birim içi rotasyon</strong>
                <br />
                Birimler arası rotasyon yapılmadan önce birim üyeleri yönergelerinde belirttikleri işleri birim içinde rotasyon yaparak, birim üyelerinin her iş konusunda deneyim kazanmasını sağlamalıdır. Birim içi rotasyon tamamlanmadan birimler arası rotasyon yapılmamalıdır.
              </li>
              <li>
                <strong>Birimler arası rotasyon</strong>
                <br />
                Bir birimde en az çalışma süresi 6 aydır. Bu nedenle birim rotasyonu en az 6 ay en çok 1 yıl sürelerinde yapılır. Eğer birimde işleri yürütecek yeterlilikte üye yoksa, birimin talebi üzerine eski üyelerden biri geçici olarak - en fazla 3 ay olmak üzere, birime destek olmak amacıyla birimde çalışır. Ancak rotasyon kural ve işleyişine etkide bulunmamak için bu sure boyunca birimin üyesi olarak değerlendirilmez.
                <br />
                Birimler arası rotasyon yapılırken birime yeni gelen kişilere yapılan işlerin aktarımını yapabilecek yeterli deneyime sahip üyeler bulunmalı. Eğer deneyim aktarımı yapacak yeterli üye yoksa, birim üyeleri rotasyon süresi dolmuş olsa dahi aktarım tamamlanana kadar birimde kalmaya devam etmeli. Eğer rotasyon yapacak üye sayısı birden fazla ise birime son katılan kişi deneyim aktarımı yapmak için kalmalı ve daha eski üyeler rotasyona devam edebilmelidir.
                <br />
                Eğer birimde, birime yeni katılacak arkadaşlara aktarım yapabilecek yeterli bilgi ve deneyime sahip gönüllü var ise rotasyon bekleyen bir kişi diğer birimlerde aynı nedenle rotasyon bekleyen bir kişiyle karşılıklı yer değiştirebilir. Birimlerdeki gönüllüler birlikte ve uyumlu hareket ederlerse çok sorun olmadan rotasyon yapılabilir. Her birim sağlıklı çalışabilmek için ihtiyaç duyduğu üye sayısını ve üyeler için minimum birimde çalışma süresini birim yönergesinde belirler. Rotasyon tarihleri hep birlikte belirlenir ve beraberce bütün birimlerin adil iş gücüne sahip olmasını sağlayacak biçimde rotasyon hazırlıkları yapılır. Rotasyon için belirlenen ayın ilk Mutfak toplantısında rotasyon planı birlikte ele alınarak, kolektif olarak karara bağlanır.
              </li>
              <li>
                <strong>YK rotasyonu</strong>
                <br />
                YK üyeliği kooperatfi ortakları arasında kıdem sırasına dönüşümlü olarak yürütülür. Buna göre en eski kooperatfi ortaklarından en yeni üyelere doğru bir rotasyon yürütülür. YK üyeliği 1 yıl süreyle yapılır ve YK rotasyonu, her yıl Genel Kurul toplantısı ile birlikte yapılır. Rotasyon ile birlikte eski yönetim kurulu üyeleri yeni yönetim kuruluna rehberlik eder. YK üyelerinin mali birimin yürüttüğü işlerle ilgili bilgi sahibi olması gerektiğinden, YK üyesi olacak kişilerin YK'ya girmeden önce mali birimde yer alması veya mali birim ile bir süre birlikte çalışması gereklidir. Sırası gelen yönetim kurulu adayları en azından 3 ay öncesinde mali birimle birlikte çalışarak en azından kavramlara aşinalık kazanmalıdır. Bu sırada bu kişiler eğer halihazırda mali birim üyesi değillerse birim üyesi olarak değerlendirilmezler. Kooperatifin resmi kurullarından olan Denetim Kurulu için 2 asıl ve 1 yedek üye belirlenmesi gereklidir. Her genel kurul zamanı Yönetim Kurulu değiştirilirken, bir önceki dönemin yönetim kurulu üyeleri yeni dönemin denetim kurulu üyeleri olarak belirlenir.
              </li>
            </ul>
          </section>

          {/* Konsensüs */}
          <section className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Konsensüs
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>Konsensüs ile karar verme, Kooperatifin tüm üyeleri arasında anlaşmaya varmanın yaratıcı ve dinamik bir yoludur.</strong> Bir maddeye oy vermek ve grubun çoğunluğun fikrine göre ilerlemesini istemek yerine, herkesin aktif olarak desteklediği ya da en azından birlikte yaşayabileceği çözümler bulma konusunda bir fikir birliği oluşturmaktır.Bu, tüm görüşlerin, fikirlerin ve kaygıların dikkate alınmasını sağlar. Birbirlerini yakından dinleyerek, herkes için işe yarayan öneriler bulmayı hedefler.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Konsensüs ne ödün vermektir ne de oybirliğidir - herkesin en iyi fikirlerini ve en önemli kaygılarını bir araya getirerek daha da ileri gitmeyi amaçlamaktır - genellikle hem kişiye hem de gruba ilham veren şaşırtıcı ve yaratıcı çözümlerle sonuçlanan bir süreçtir.
            </p>

            {/* Birlikte çalışma görseli */}
            <div className="my-8 flex justify-center">
              <div className="relative w-full max-w-md aspect-[200/257]">
                <Image
                  src="/isleyis/model/image2.gif"
                  alt="Birlikte çalışma - soyulmuş bir soğan - istemek, gerçekten istemek, gerçekten ihtiyaç işaretli katmanlar"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Birlikte çalışma
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Konsensüsün özünde, eşitler arasında saygılı bir diyalog yer almaktadır. Herkesin - hem bireylerin hem de grubun ihtiyaçlarını karşılamak için birlikte çalışmasıdır. Birbiri için ya da birbirine karşı olmak yerine birbiriyle çalışma, açıklık ve güven gerektirir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Konsensüs herkes için kabul edilebilir olan çözümleri bulmayı amaçlar- bir bireyin veya azınlığın iradesine karşı herhangi bir karar alınmaz. Bunun yerine tüm üyelerin ihtiyaçlarına odaklanır. Eğer herkes karara katılırsa, bunun gerçekleşmesi için herkes daha kararlı olacaktır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Konsensüs ile karar verme, insanların yaşamları üzerinde tam kontrole sahip olması gerektiği ve gücün sadece birkaç kişinin elinde değil, herkes tarafından paylaşılması gerektiği fikrine dayanır. Bu, bir kişinin yaşamda kendi rotasına karar verme özgürlüğüne ve ortak bir gelecek yaratmada eşit rol oynama hakkına sahip olmasıyla ilgilidir.
              </p>
            </div>

            {/* Konsensüs koşulları */}
            <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Konsensüs koşulları
              </h3>
              <ol className="list-decimal list-inside space-y-4 ml-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Ortak Hedef:</strong> Gruptaki herkesin net bir ortak hedefi paylaşması ve buna yönelik birlikte çalışmaya istekli olması gerekir. Hedeflerin ne olduğunu ve oraya nasıl gideceğimizi birlikte değerlendiririz. Farklılıklar daha sonra ortaya çıkarsa, Kooperatife odaklanmaya ve birleşmeye yardımcı olmak için ortak hedefi hatırlarız.
                </li>
                <li>
                  <strong>Mutabakata varma taahhüdü:</strong> Herkes gerçekten ilerleme konusunda istekli olmalıdır. Bu ne istediğiniz veya ne istemediğiniz konusunda dürüst olmak ve başkalarının söyleyeceklerini doğru bir şekilde dinlemek anlamına gelir. Herkes konumlarını değiştirmeye, alternatif çözümlere açık olmaya ve ihtiyaçlarını yeniden değerlendirebilmeye istekli olmalıdır.
                </li>
                <li>
                  <strong>Güven ve açıklık:</strong> Herkesin fikir birliği konusundaki taahhüdü paylaştığına ve herkesin görüşlerimize ve eşit haklarımıza saygı gösterdiğine güvendiğine güvenebilmemiz gerekir. İnsanların en çok istedikleri kararı almak için toplantı sürecini manipüle etmeleri büyük bir güven ihlali olacaktır.
                  <br />
                  Herkes açıkça konuşabiliyorsa, grup herkesin pozisyonunu hesaba katmak ve herkesin destekleyebileceği bir çözüm bulmak için gereken bilgilere sahip olacaktır.
                </li>
                <li>
                  <strong>Karar almak ve uzlaşmayla çalışmayı öğrenmek için yeterli zaman.</strong> Şimdi iyi bir karar vermek için zaman ayırmak, daha sonra kötü bir kararı yeniden ele almak için harcanacak zaman kaybını azaltabilir.
                </li>
                <li>
                  <strong>Net Süreç:</strong> Karar vermek için net bir sürece sahip olmak ve herkesin nasıl çalıştığı konusunda ortak bir anlayışa sahip olduğundan emin olmak çok önemlidir.
                </li>
                <li>
                  <strong>Aktif katılım:</strong> Mutabakata varmak için hepimizin aktif olarak katılması gerekir. Herkesin söyleyeceklerini dinlemeli, konu hakkındaki düşüncelerimizi ve duygularımızı dile getirmeli ve proaktif olarak herkesi içeren çözümleri aramalıyız.
                </li>
              </ol>
            </div>

            {/* Kolaylaştırıcılık */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Kolaylaştırıcılık
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Toplantıların çoğunda, bir veya daha fazla kolaylaştırıcı olur. Görevleri, toplantının düzgün işlemesini, kararların alınmasını ve uygulanmasını sağlamaktır. Ayrıca grubun uyumlu, yaratıcı ve demokratik olarak çalışmasına yardımcı olurlar. Kolaylaştırıcı toplantının doğru konuya odaklanmasını sağlar ve tartışmalara sadece birkaç kişinin hakim olmasını engellemeye çalışır. Grubun hedeflerine ulaşmasına yardımcı olacak bir gündem ve süreç hazırlar. Kolaylaştırıcılar kimseden daha fazla güce sahip değildir ve tartışılan konularda tarafsız kalmalıdır. Öneri yapmak ve kararları biçimlendirmek gibi ayrıcalıklı rolleri yoktur. İşlerini ancak herkesin desteği ve işbirliği ile yapabilirler. Toplantı düzeni ve işleyişi Kooperatfi toplantı yönergesine göre yürütülür.
              </p>
            </div>

            {/* Karar verme süreci */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Karar verme süreci
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Aşağıdaki diyagram, fikir birliği oluşması sürecinde bir tartışmanın nasıl geliştiğini göstermektedir. Başlangıçta, insanlar gruba farklı bakış açıları ve fikirler getirdikçe süreç genişler. Böylece, tüm seçenekleri incelemek ve insanların birbirlerinin kaygılarını anlamalarına yardımcı olmak için yürütülecek geniş kapsamlı bir tartışma için gereken malzeme sağlanır. Bu çalkantılı ve bazen zor bir aşama olabilir - insanlar birbiriyle rekabet eden veya çelişkili birçok fikirle boğuşmak durumunda kalabilir - ama en yaratıcı kısım da buradan sonra gelir. Sonra grup önerileri sentezlemeye başlar. Bu, grubun ortak zeminini bulması, bazı fikirleri ayıklayıp, tüm faydalı parçaları tek bir öneride birleştirmesi anlamına gelir. Son olarak, herkes bu öneriyi kabul ederse bir karara varılır ve uygulamaya geçilir.
              </p>
              
              {/* image3 görseli */}
              <div className="mt-0 mb-0 flex justify-center">
                <div className="relative w-full max-w-lg aspect-[1190/1684]">
                  <Image
                    src="/isleyis/model/image3.png"
                    alt="Karar verme süreci diyagramı"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Konsensus akış şeması görseli */}
              <div className="mt-2 mb-8 flex justify-center">
                <div className="relative w-full max-w-2xl aspect-[1190/1684]">
                  <Image
                    src="/isleyis/model/image4.png"
                    alt="Konsensus akış şeması"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Anlaşma ve Anlaşmazlık */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Anlaşma ve Anlaşmazlık
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Karar aşamasında insanların çeşitli seçenekleri var:
              </p>
              <ul className="list-disc list-inside space-y-3 ml-4 mb-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Tam anlaşma:</strong> Herkesin karar konusunda hemfikir olduğu durumdur.
                </li>
                <li>
                  <strong>Çekinceler:</strong> Önerinin devam etmesine izin vermeye hazırsınız, ancak grubun bundan memnun olmadığınızı fark etmesini istiyorsunuz. Endişeleriniz onaylandıktan sonra onu uygulamaya da katılabilirsiniz.
                </li>
                <li>
                  <strong>Yol verme:</strong> Öneriye itiraz etmek istiyor ancak engellemek istemiyorsunuz. Bu, kararın uygulanmasına yardımcı olamayacağınız anlamına gelir, ancak grubun bu konuda ilerlemesine razısınız. Öneriyi benimsemediğiniz için kenara çekilebilir ya da kararı beğenebilir, ancak zamanınız veya enerjiniz olmadığı için destekleyemezsiniz.
                  <br />
                  Grup, bu tutumu kabul edip devam etmekten mutlu olabilir veya özellikle birkaç farklı açıdan yol verme durumuyla karşılaştığını görürse yeni bir öneri üzerinde çalışabilir.
                </li>
                <li>
                  <strong>Veto:</strong> Her zaman bir öneriye ilişkin temel bir itirazı ifade eder ve ilerlemesini durdurur. Bu durum ilgili öneriyi kabul etmediğiniz anlamına gelir. Grup yeni bir teklif üzerinde çalışmaya başlayabilir veya itirazı aşmak için değişiklik arayabilir.
                  <br />
                  İdeal bir konsensüs sürecinde, bir teklifle ilgili herhangi bir kaygının karar aşamasından önce ele alınması gerektiğinden bir engel oluşmaz. Bununla birlikte, bazen insanlar endişelerini yeterince net bir şekilde ifade edemezler veya grup tarafından duyulmazlar. Bu gibi durumlarda, veto kararların herkes tarafından desteklenmesini sağlamak için bir güvence olarak hareket eder.
                  <br />
                  Engelleyebilmek fikir birliğinin bir parçasıdır, ancak büyük bir sorumlulukla birlikte gelir. Veto, diğer insanların yapmak istedikleri bir şeyi yapmasını engeller ve bu nedenle, yalnızca ciddi endişeler çözülemezse kullanılmalıdır.
                  <br />
                  Herhangi bir konuda bu tür bir veto veya anlaşmazlık ortaya çıktığında o konuda bir karar alınmaz. Konuyu anlaşılan ve anlaşılamayan noktaları ve bağlamlarını belirleyerek değişik açılardan yeniden ele almak amacıyla çalışacak bir araştırma grubu oluşturulur. Bu çalışma grubu iki hafta sonraki toplantıda konuyu ele almak için gerekli tartışma olanaklarıyla yeniden gündeme sunar. Eğer yine bir uzlaşma sağlanamazsa bu konu daha uzun ve detaylı tartışılmak üzere çalıştay gündemlerine eklenir.
                </li>
              </ul>
            </div>

            {/* Konsensusa ulaşmak için rehber */}
            <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Konsensusa ulaşmak için rehber
              </h3>
              <ul className="list-disc list-inside space-y-3 ml-4 text-gray-700 dark:text-gray-300">
                <li>Bir şey anlamıyorsanız, söylemekten korkmayın.</li>
                <li>Sadece sizin için en iyisini değil, herkes için en iyi olan çözüme doğru çalışmaya istekli olun. Bir anlaşmaya varabilmek için esnek ve istekli olun.</li>
                <li>Saygılı ve güven veren bir atmosfer yaratmaya yardımcı olun. Hiç kimse fikirlerini ve fikirlerini ifade etmekten korkmamalıdır. Hepimizin farklı değerlere, geçmişlere ve davranışlara sahip olduğunu ve farklı şeylere sinirlendiğimizi unutmayın.</li>
                <li>Fikirleriniz konusunda açık olun. Bakış açınızın sebepleri konusunda açık ve dürüst olun. Herhangi bir karar önerisi içinde dikkate alınabilmeleri için sürecin başlarında endişelerinizi dile getirin.</li>
                <li>İnsanların ne söylemeye çalıştığını aktif olarak dinleyin. Birinin konumunu ve temel ihtiyaçlarını, kaygılarını ve duygularını anlamak için çaba gösterin. Herkese karar verebilmeleri ve bakış açılarını oluşturmaları için yeterli zaman verin.</li>
                <li>Konuşmadan önce düşünün, itiraz etmeden önce dinleyin. Diğer üyelerin tepkilerini dinleyin ve konuşmaya başlamadan önce bunları dikkatlice düşünün. Konsensusta kendinden korunma esastır - bazen ilerlemenin önündeki en büyük engel bir bireyin bir fikre bağlanmasıdır. Başka bir öneri iyi ise, en sevdiğiniz fikir olmadığı için karşı çıkarak meseleleri karmaşıklaştırmayın! Kendinize sorun: "En iyi beğenmesem bile, bu fikir grup için işe yarıyor mu?" veya "Hangisini seçtiğimiz önemli mi?"</li>
                <li>Anlaşmazlıktan korkma. Konsensüs hepimizin aynı şeyi düşünmesiyle ilgili değil. Fikir farklılıkları doğaldır ve olması beklenir.</li>
                <li>Anlaşmazlıklar bir grubun kararına yardımcı olabilir, çünkü çok çeşitli bilgi ve görüşlerle, grubun iyi çözümler bulma olasılığı daha yüksektir. Kolayca ulaşılan fikir birliği, bazı kişilerin anlaşmazlıklarını ifade edecek kadar güvende veya kendinden emin hissetmediği gerçeğini gizleyebilir.</li>
              </ul>
            </div>

            {/* Konsensüs için temel beceriler */}
            <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Konsensüs için temel beceriler
              </h3>
              <ul className="list-disc list-inside space-y-3 ml-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Aktif Dinleme:</strong> Aktif olarak dinlediğimizde kendi düşünce süreçlerimizi askıya alır ve konuşmacıya tüm dikkatimizi veririz. Birinin konumunu ve ihtiyaçlarını, kaygılarını ve duygularını anlamak için bilinçli olarak çaba gösteririz.
                </li>
                <li>
                  <strong>Özetleme:</strong> Şimdiye kadar söylenenlerin özlü ve doğru bir özeti, bir grubun bir karara doğru ilerlemesine gerçekten yardımcı olabilir. Ortaya çıkan ortak zeminin yanı sıra çözülmemiş farklılıkları ana hatlarıyla belirtin: "Görünüşe göre teklifin bu kısmı üzerinde neredeyse anlaşmaya vardık ama herkesin endişelerini gidermek için bu kısmı daha fazla araştırmamız gerekiyor." Herkese doğru yaptığını kontrol etmesi için olanak tanıyın.
                </li>
                <li>
                  <strong>Sentez:</strong> Ortak zemin ve görünüşte rekabet eden fikirler arasındaki bağlantıları bulun ve öneriler oluşturmak için bunları birbirine bağlayın. Gruptaki kişilerin sahip olduğu temel ihtiyaçları ve temel kaygıları ele alan çözümlere odaklanın.
                </li>
              </ul>
            </div>
          </section>
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
            href="/isleyis" 
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
