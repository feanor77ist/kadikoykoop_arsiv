"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function ToplantiUsulu() {
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
          <span className="text-gray-900 dark:text-white font-medium">Toplantı Usulü Hakkında Yönerge</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Toplantı Usulü Hakkında Yönerge
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            19.11.2018
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Toplantı Usulü
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bu metin, Kadıköy Kooperatifi fikri ortaya çıktığından beri süregelen deneyimlerle oluşturulan toplantı usulünü özetlemek amacıyla hazırlanmıştır. Toplantı usulü hem toplantıların verimli geçmesini hem de herkesin sözünü söyleyebilmesini sağlamak amacıyla oluşturulmuştur. Buna göre toplantı gündemlerinin nasıl belirlendiği, toplantı seyrinin nasıl düzenlendiği, gündemlerin nasıl karara bağlandığı ve toplantı tutanağının nasıl hazırlanıp mutfakla paylaşıldığına dair teamüllerimiz aşağıdaki yönergede açıklanmıştır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              1- Gündemlerin belirlenmesi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Koordinasyon ekibi o haftanın mutfak toplantısında görüşülecek konuları toparlamak amacıyla hafta başında (pazartesi günü) Mutfak grubuna bir e-posta gönderir. Konuşulması istenen konular bu e-postaya yanıt verilerek belirtilir. Gündem olarak önerilen konulardan daha önce konuşulmuş, karara bağlanmış veya bağlanamayarak çalıştaya, 3. perşembe toplantısına veya pazar toplantısına bırakılmış olan konular koordinasyon tarafından gerekçeleri belirtilerek ayırılır. Daha önceki toplantılarda konuşulmuş ve belli bir birimin ya da çalışma grubunun takibinde ilerlemekte olan konular yeniden gündem olarak önerildiğinde koordinasyon bu önerinin nedenini sorar. Eğer karar alınarak işletilmeye başlanan konuların işleyişleri sırasında kooperatifin ilke ve yasal sorumlulukları ile ilgili bir soruna yol açabilecek geçerli bir neden öne sürülmezse gündeme alınmaz.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Koordinasyon toplantılarda zamanın verimli kullanılabilmesi için birlikte konuşulabilecek başlıkları olabildiğince bir araya getirerek gündem oluşturmaya çalışır. Gündemler, bir önceki haftadan, konuşulmadığı veya ortaklaşılamadığı için aktarılmış gündemlerin peşi sıra, önerildikleri sırayla gündeme eklenir. Bu sıralamada bir sonraki toplantıya kadar karara bağlanması gereken ve kooperatifin işleyişi açısından zorunluluk taşıyan (mali yükümlülükler veya bir sonraki toplantı tarihine kadar cevap verilmesi gereken) gündemler sıralamanın başına çekilebilir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Koordinasyonun iş takibi kapsamında olan çalışmalar, iş bitim tarihi yaklaşmakta ise, öncesinde (haftalık veya aylık) hatırlatma amacıyla -gündemlerde önerilmese de- bunlara ayrıca yer verir. Bunlar kooperatifin pratik işleyişi açısından acil işlerse (mali konular, dükkan temizliği, dükkan ilaçlaması vb.) gündem sıralamasının başına çekilebilir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Koordinasyon gündemleri toparladıktan sonra gündemleri mümkün olduğunca rafine ederek perşembe günü sabahı Mutfak grubuna gönderir. Toplantı başında bir itiraz yoksa gündemler bu şekilde görüşülür. Rafine edilmesine veya birleştirilmesine itiraz edilen gündemler belirtildiği sıra ile ele alınır. Gündem e-postası dizisinde Çarşamba günü akşamına kadar belirtilmeyen konular zorunlu bir durum olmadıkça gündeme alınmaz.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Toplantı sürerken yapılan gündem önerileri ve konuşulacağı belirtilmeyen konuların konuşulması toplantıya katılan veya katılamayan kişiler için emrivaki durumu yaratacağından kolaylaştırıcı tarafından ayrıştırılarak kapatılır. Toplantılarda gündemlerin tümünün konuşulması hedeflenir. Kolaylaştırıcı sürenin kullanımında buna dikkat eder, katılımcılara süreyi hatırlatır. Bir gündeme ideal süre sınırı çekilemeyebilir, ancak yeterlik verilebilir. Konuşulamayan, karara bağlanmayan gündemler bir sonraki haftaya aktarılır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              2- Toplantı düzeninin oluşturulması
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Toplantılar Perşembe saat 19:45'de başlar ve 21:30'da biter. Toplantı herkesin katılımına ve fikirlerine açıktır. Ancak eğitim almamış kişiler henüz kooperatifin işleyişi hakkında yeteri kadar bilgi sahibi olamayacağı için toplantıda alınan kararlarda etkin rol alamazlar, kooperatifi temsil durumu söz konusu olan bir sorumluluk alamazlar ve herhangi bir çalışma grubuna katılamazlar.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Toplantıları koordinasyon ekibinden bir kolaylaştırıcı ile bir veya mümkünse iki yazman yürütür. Koordinasyon biriminin eksik kaldığı durumlarda Mutfak ekibinden öncelikle yazmanlık için yardım istenir. Eğer Koordinasyon birimi toplantıya katılamıyorsa Mutfak üyeleri toplantıyı yürütmek amacıyla gönüllülerden bir kolaylaştırıcı ve bir yazman belirlerler.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yazman söylenenleri kısaca özetleyerek not almaya çalışır. Yazmanın özetleme sorumluluğu söylenen her sözün ana fikrini not almaktan ibarettir. Kimin söylediğinden çok ne söylendiği önem teşkil ettiği için sözlerin başına veya sonuna sözlerin sahibi olan kişiler yazılmaz.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kolaylaştırıcı, söz isteyenleri takip ederek konuşma sırasını düzenler. Kolaylaştırıcı aynı zamanda konuların karışması durumunda önlemler alır. Gerektiğinde konuları ayrıştırarak Mutfak grubunun kolay ve hızlı karar almasına yardımcı olur. Konuşulanları zaman zaman özetleyerek söylenmiş olanların tekrar söylenmesiyle doğacak zaman kayıplarını azaltmaya çalışır. Aynı zamanda karar verilirken çok söylenenlerin değil her söylenenin duyulmasını sağlamak amacıyla konuşulanları özetler.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kolaylaştırıcı konuşmak isteyenlere söz isteme sırasıyla söz verilmesini takip eder. Eğer hiç konuşmamış birisi ilk kez söz istiyorsa, sırada daha önce konuşmuş olanların önüne geçer. Toplantının belirli bir anına kadar söz alanlar ikinci kez söz talep etmeye başlamış, ancak toplantıda henüz hiç söz almamış kişiler varsa, kolaylaştırıcı hiç söz almayanlara, onlar talep etmemiş olsalar bile söz hakkı tanıyabilir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kolaylaştırıcı, kişilerin birbirlerine cevap vermek için peşpeşe söz almaları ve toplantının karşılıklı konuşmaya dönüşmesi durumunda, durumu Mutfak grubuna belirterek konuşma sırasında karşılıklı konuşma durumunu ortadan kaldıracak biçimde değişiklik yapar. Eğer karşılıklı konuşma durumu ikinci kez aynı kişiler arasında yinelenirse, bu kişileri uyararak toplantı düzeninin sağlanmasını ister.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bir konuda söz aldıktan sonra başka konular hakkında konuşmaya başlayan kişi kolaylaştırıcı tarafından uyarılır. Eğer bu kişi yine de başka konu hakkında konuşmaya devam ederse kolaylaştırıcı sözü sıradaki konuşmacıya verir. Kolaylaştırıcı, şiddet, hakaret, aşağılama, tehdit, cinsel eşitsizlik gibi unsurlar içeren konuşmalar olduğunda müdahale ederek konuşmacının sözünü keser.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Konuşmalar için belirli bir süre sınırı konulmamıştır. Ancak herkesin konuşmak isteyeceği göz önünde bulundurularak konuşmaların kısa ve öz tutulması beklenir. Eğer bir kişi görece daha uzun süre kullanıyor ve konuyu dağıtıyorsa kolaylaştırıcı konuşmacıyı toparlaması için uyarır. Herkesin aynı seviyede konuşma yeteneği olamayabileceğinden bir kişinin daha uzun konuşmuş olması emsal oluşturmaz. Katılımcılar elden geldiğince kısa ve öz konuşmaya gayret etmelidir. Amaç herkesin konuşabilmesi ve sesini duyurabilmesidir.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mt-6 mb-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong className="font-semibold">Örnek olarak, Marea Feminista'nın, kooperatifte de onay gören meclis toplantılarına katılım usulüne yönelik önerileri</strong><sup>1</sup> aşağıdaki gibidir:
              </p>
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Toplantıya geldiğinizde en önemli yere oturmaktan kaçınmaya çalışın</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Politik olarak size en yakın insanlarla oturmak istediğinizde bile, politik olarak size daha az yakın insanlarla, özellikle de kadınlarla karışmaya çalışın</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Tartışma gündemi açıldığında, ilk söz alan siz olmayın ve kendisini ifade etme konusunda daha fazla zorluk yaşayan insanların birkaç dakika düşüncelerini toparlamasına izin vermenin bir zararı olmayacağını unutmayın</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Bir tartışmaya dahil olduğunuzda, söylemek üzere olduğunuz şeyin bir başkası tarafından zaten söylenip söylenmediğini ve üzerine bir şey eklemek için tekrarlamanın gerekli olup olmadığını düşünün. Eklemek iyi olacaksa, fikri daha önce ifade etmiş olan kişiye gönderme yapın ve katkınızı zaten söylenmiş olanı tekrarlamadan yapın</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Başka birinin, özellikle de bir kadının söylediklerini tercüme etmeye (açıklamaya), netleştirmeye veya yorumlamaya asla çalışmayın. Bir şeyin net olmadığını düşünüyorsanız, tekrar açıklamasını rica edin veya karışık bulduğunuz konu hakkında somut sorular sorun</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Bir tartışmaya dahil olduğunuzda her şeyi tek seferde söylemeye çalışmayın, geri bildirimlerinizi toplantıya yayın, belirli aralıklarla katkıda bulunun</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Tartışmaya kaç erkek ve kadının katıldığını daima aklınızda bulundurmaya çalışın</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Gruptaki diğer erkek ve kadınların müdahalelerinin (konuşma ve katkılarının) ne kadar sürdüğünü tahmin etmeye ve kendi katkınızı bunun ortalaması olacak şekilde ayarlamaya çalışın</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Sözsüz iletişiminizi, fiziksel pozisyonunuzu, nasıl hissettiğinizi/hissettirdiğinizi ve nasıl jestlerle kendinizi ifade ettiğinizi aklınızda bulundurun</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">●</span>
                  <span>Ses tonunuzu ılımlı tutun; bağırmak veya kendini dayatmak bir fikri daha doğru yapmaz</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 mb-2">
                Meclisler fikir teatisi yapılan ve herkesin katılım sağlayabiliyor olması gereken yerlerdir. Tüm cevapları bildiğinizi düşünebilirsiniz ama başkalarının da katılımına yer açmazsanız tartışmayı tekelinize almış olursunuz.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                Kolaylaştırıcılar olmasının bir nedeni var: tartışmanın tek taraflı olmamasını, bir karar verilmeden önce tüm seslerin ve perspektiflerin ifade edilebilmesini ve her birimizin kendi perspektifimizin ötesini görebilmesini sağlamaya çalışırlar. Rolleri budur ve bu role saygı gösterilmelidir.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                <sup>1</sup> Dünyadan Çeviri, Toplantı katılımına dair feminist öneriler. URL: <a href="https://dunyadanceviri.wordpress.com/2017/10/25/toplanti-katilimina-dair-feminist-oneriler/amp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://dunyadanceviri.wordpress.com/2017/10/25/toplanti-katilimina-dair-feminist-oneriler/amp/</a>
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 mt-6">
              Toplantı başında öncelikle, toplantıya ilk defa dinleyici-gözlemci olarak gelen ve çalışmaya yeni katılan kişilerle tanışılır. Yeni katılanlardan eğitim çalışmasını tamamlayanların eşlikçileri seçilir. Toplantı, birimler arası rotasyon dönemine denk düşüyorsa (3 ayda bir) koordinasyon birimi kişilerin hangi birimlerde devam etmek istediğini, birimler arası rotasyon çizelgesine işlemek üzere not eder. Sonrasında, varsa genel duyurular alınır. Duyurular birim bilgilendirmeleri ya da gündemlerden bağımsızdır ve kooperatifin toplantıda alacağı kararlarda bağlayıcılığı yoktur; karar alınacak bir içeriğe sahip ise kolaylaştırıcı bunun sıradaki toplantı için gündem olarak önerilmesini ister.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Toplantıların ilk gündemi genellikle birim bilgilendirmeleridir. Birimlerin bilgilendirmelerini özet olarak vermesi beklenir. Bilgilendirme faslı birimlerin gündemler önerip görüşme açacakları zamanlar değildir. Birimler kendi içlerinde tartışmasını bitirdikleri konuları mutfak grubuna sunarlar. Tartışması bitmemiş konular mutfak grubunda açılacak kadar olgunlaşmamış demektir. Bu durumda konuyu Mutfak grubuna getirmek Mutfak grubunu birimin yerine ikame etmek anlamına gelir ki, Mutfak toplantıları bu işleri yürütmek için uygun ve yeterli olmaz. Bu tür durumlarda moderasyon durumu özetleyerek birimin konu üzerinde çalışarak daha sonraki bir toplantıda gündem olarak açmasını ister.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Birimler ilkeler çerçevesinde karara bağlanamayan, Mutfak iradesine ihtiyaç duyulan, uzlaşmazlık veya uygunsuzlukların çözümü için Mutfakta karar alınması gereken konuları ve duyurular haricinde görüşülmesini gerekli gördükleri konuları daha önceden, birim bilgilendirmesinden ayrı, gündem olarak belirtmelidir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bir üye konuşurken, her türlü söz kesme, araya girip cümle söyleme, sesli onaylama veya itiraz etme girişimleri konuşmacıya müdahale olarak değerlendirilir. Moderatör müdahale edeni uyarır ve özür dileyerek toplantı düzenine uymaya davet eder. Toplantı sırasında herhangi bir gönüllü konuşurken dinleyenlerin konuşmacıyı rencide edecek şekilde oflayıp puflaması; başkalarına, koordinasyon üyelerine ya da konuşmacıya bakarak küçümser şekilde gülmesi; beden diliyle rahatsızlığını belirtmesi ve söz kesmesi gibi durumlarda koordinasyon duruma müdahale edebilir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Toplantılarda ya da toplantı mekanında cevap gerektiren suçlamalar yapılması ya da karşılıklı bağırılması durumunda koordinasyon konuşmayı keserek, toplantı kurallarını hatırlatır ve buna uygun davranılmasını ister. Eğer konuşma bu şekilde sürdürülüyorsa konuşmacının sözü kesilir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Toplantı devam ederken mutfak gönüllülerinin toplantıyı bırakıp sigara içmeye çıkması uygun görülmez. Eğer bir ara ihtiyacı olursa ara beraber verilir. Toplantılar, ara vermeye ihtiyaç duyulmayacak şekilde 1 saat 45 dakikada bitirilmeye çalışılır. Söz alındığı halde, söz sırasını beklerken ısrarla söz istenmeye devam edilmesi uygun görülmez.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              3- İletişim üslubu
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Tüm kooperatif faaliyetleri ve dolayımıyla oluşan sosyal ortamlarda iletişim açısından aşağıdaki unsurlara özen gösterilmelidir:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed ml-4 mb-4">
              <li>Hitap edilirken kişilerin isimleri kullanılmalı, işaret zamiri veya sıfatı kullanılmamalıdır.</li>
              <li>Konuşurken ses tonu insanların duymasını sağlayacak seviyenin üzerine çıkarılmamalıdır. Yazarken özel bir durum yoksa sözcüklerin büyük harfle yazılmasının bağırmak anlamına gelebileceği gözönünde bulundurulmalıdır.</li>
              <li>Her türlü rencide edici söz, tavır, benzetme ve anıştırmadan uzak durulmalı, serzenişte bulunan, iğneleyici ifade veya söyleyiş tarzları kullanılmamalıdır. Söylenmek istenen durum, fikir veya tespit, içinde suçlayıcı ifadeler bulundurulmadan yalın olarak ifade edilmelidir.</li>
              <li>Herhangi bir iş, durum veya olay ile ilgili uyarı bildirileceği zaman önlem almak amacıyla sorunun ne olduğu, nasıl ortaya çıktığı, olası zararlı etkileri dile getirilmeli; konunun derinlemesine tartışılması için koordinasyon birimine bildirimde bulunulurak durumun veya olayın ilgili toplantıda genel çerçevede ele alınması sağlanmalı; kişisel diyalog veya karşılıklı tartışmadan uzak durulmalıdır.</li>
              <li>Gönüllülük dışında kişilere iş yapmaları söylenmemeli; yapılması gereken işler ilgili toplantılarda belirlenerek işlerin takibi koordinasyon tarafından yürütülmelidir. Zamanında yetiştirilmeyen veya birbiri ile bağlantılı işlerin takip edilmesi gerektiğinde koordinasyon biriminden yardım istenmelidir.</li>
              <li>Herhangi bir işle ilgili olarak görev almamış ancak o işin gidişatından rahatsızlık duyan veya ilgili işin yapılmasına dair yol göstermek isteyen kişi, haberleşme araçları üzerinden karşıdaki kişilerin 'akıl vermek' biçiminde algılayabileceği biçimde fikir beyan etmek yerine, ilgili kişilerle birlikte çalışmak amacıyla onlara destek olma önerisinde bulunmalıdır.</li>
              <li>Herhangi bir birim veya kişiye 'şöyle yapın', 'bunu sormadınız mı?', 'bunların araştırılması gerekir' gibi masum gibi görülen ancak aslında iş yapılmasını isteyen tarzda ifadeler kullanılmamalı. İşleri yürütmenin herkesin sorumluluğunda olduğu bilinciyle, fikir, kaygı veya bilgi sahibi olduğunu düşünen kişi, yapılması gereken neyse gerekçeleri ile birlikte açıklamalı ve yapılmasını istediği işlerin gerçekleştirilmesi için görev almaya gönüllü olmalıdır.</li>
              <li>Yazılan ve söylenenlerin farklı biçimlerde anlaşılabileceğini, kişilerin çalışma ve birlikte hareket etme şevkinin istenmeden de olsa kırılabileceğini, deneyim farklılıkları nedeniyle insanları pasifleştirebileceğini ve katılımcılığı azaltabileceğini düşünülerek ifadelerin açıklayıcı ve yapıcı olmasına özen gösterilmelidir.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              4- Kararların oluşturulması
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Konuşmalarda belirli bir doygunluk ve fikirlerde olgunluk seviyesi oluştuğunda kolaylaştırıcı uzlaşılan ve ayrışılan noktaları özetleyerek karar alınabilmesi için harekete geçilmesini önerir. Bu sırada uzlaşılan noktaları toplantı bileşenlerine özetleyerek bir itiraz olup olmadığını sorar. Eğer itiraz yok ise ortaklaşılan fikir eğilim olarak belirtilerek kayıtlara geçirilir. Kolaylaştırıcı ayrışılan noktaların da hangi koşullarla uzlaşmaya vardırılabileceğini sorgular. Eğer uzlaşma koşulları katı veya uzlaşma kısa sürede varılacak bir noktada değilse, karar alma yöntemlerimize dair bir soruna işaret ediyorsa pazar toplantısında, tartışmak için daha uzun zaman gerektiren ve görüşlerin birbirini ikna edebilecekleri bir süre yaratabilmek için 3. perşembe toplantısında veya çalıştayda görüşülmek üzere ilgili gündemi erteler ve yazman varılan detayları kayıt altına alır.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Eğilim olarak belirlenen fikre sonraki bir hafta boyunca herhangi bir itiraz gelmez ise eğilim artık bir karara dönüşür. Toplantıda olan veya olmayan kişiler sonraki bir hafta içinde itiraz veya çekincelerini, e-posta grubuna yollanan toplantı notlarına cevap vererek dile getirebilir. Bu durumda ilgili konu ve eğilim bir sonraki hafta yeniden gündem olarak ele alınır. Eğer ikinci hafta tartışmalardan da bir uzlaşma çıkmazsa, konu çalıştay, 3. perşembe toplantısı veya pazar toplantısında görüşülmek üzere geçici olarak kapatılır.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kararların mümkün olduğunca kim tarafından (sorumlu kişiler, birim veya çalışma grubu), ne zaman (tahmini tamamlanma tarihi) ve nasıl uygulanacağının detayları ile oluşturulması ve ilgililerin zamanı geldiğinde mutfak toplantısında konuyla ilgili bilgilendirme yapması beklenir. Belirlenen işi yapmayı üstlenen kişi, işten ve takibinden sorumludur. İşlerin takibi Trello uygulaması aracılığıyla yapılmaktadır. Koordinasyon Trello'da bitiş tarihi geldiği halde tamamlanmayan işleri gönüllüsüne hatırlatır, eğer gönüllüden bir dönüş alamazsa işi tamamlayacak diğer gönüllüler için çağrı yapar.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              5- Toplantı notlarının oluşturulması
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Tüm toplantı boyunca belirtilen fikir ve öneriler özet olarak, Ek 1'deki şablona göre kayıt altına alınır. Bunlar isim belirtilmeksizin kayıtlarda yer alır. Her gündem ile ilgili tartışmaların sonunda eğilim veya karar olarak varılan noktalar belirtilir. Yazman veya yazmanlar tarafından oluşturulan toplantı notları koordinasyon birimi tarafından gözden geçirildikten sonra kolaylaştırıcı tarafından gruba e-posta aracılığıyla atılır. Toplantı notları hem e-posta kutusuna metin olarak yapıştırılır hem de .doc ve .pdf eklentili belgelerle ekte gönderilir. Notlar hem mutfak (kadikoy_koop_mutfak@googlegroups.com) hem arşiv (kdkkoop.belge@gmail.com) e-posta adreslerine gönderilmelidir. Toplantı notlarının Cuma günü akşamına kadar gruba gönderilmesi beklenir. Gecikmesinde sorun olacak olan konular varsa toplantı notlarının tamamlanması beklenmeksizin yazım ve dizgi hataları olsa bile toplantı çıkışında yine e-posta ile mutfak grubuna ilgili gündem ve varılan eğilim/karar bildirilir, notlar tamamlandıktan sonra arşivlenir.
            </p>

            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg border border-gray-200 dark:border-gray-600 mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Ek 1: Toplantı Tutanağı Şablonu
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Aşağıdaki şablon düzeninde tutulan toplantı notları koordinasyon birimine aktarılmalıdır. Birim, gelen notları gözden geçirdikten sonra kdkkoop.belge@gmail.com arşiv hesabını da e-posta alıcılarında bilgi kısmına ekleyerek notları mutfak grubuyla paylaşacaktır.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-300 dark:border-gray-600 font-mono text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words">
{`GG/AA/YYYY Mutfak Toplantısı Notları

Başlangıç Saati: …:... - Bitiş Saati: …:...

Moderatör: … Yazman: …

Katılımcı sayısı: ...

Duyurular:

1. ...

2. ...

Gündemler:

3. ...

4. ...

5. …

6. ...

*(Bir sonraki toplantıya kalan gündemleri kalın olarak ya da renklendirerek belirtelim)

Birim Bilgilendirmeleri:

1. … Birimi:

Konu: …

Birimin Bilgilendirmesi/Önerisi: ...

Sonuç: ...

(Gündemlerin Yazımı)

1. Konu: …

*(Konunun adını gündemde de belirtildiği şekliyle, kısa ve anlaşılır biçimde açıklamasını yapalım)

Öneri 1: ...

Öneri 2: ...

Öneri 3: …

*(Önerileri yazarken kişiler üzerinden Ali'nin Önerisi, Ayşe'nin Önerisi şeklinde değil, Öneri 1, Öneri 2 şeklinde fikirler üzerinden yazalım)

Sonuç: …

*(Sonuçları toplantıda çıkan sonuca göre özet bir şekilde, gerekçeleri de ekleyerek "eğilim ya da karar" olarak yazalım. Gerekli detayları (son tarih, varsa sorumlusu, ertelendiyse tarihi vs gibi) belirtelim.)`}
              </div>
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

