"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useState, useEffect } from "react";

export default function GidaKriziEgemenlik() {
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
          src="/bg5.webp"
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
            <Link href="/dusunduklerimiz" className="hover:text-blue-600 dark:hover:text-blue-400">Üzerine Düşündüklerimiz</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Gıda Krizi ve Gıda Egemenliği</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Gıda Krizi ve Gıda Egemenliği Atölye Raporu
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              22 Ocak 2017 - Yeldeğirmeni Mahallesi
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi tarafından 22 Ocak 2017 tarihinde Kadıköy'ün Yeldeğirmeni mahallesinde "Gıda Krizi ve Gıda Egemenliği" başlıklı atölye çalışması gerçekleştirdi. Yaklaşık iki buçuk saat süren atölyeye İstanbul'un çeşitli ilçelerinden ve İstanbul dışından yaklaşık 50 kişi katıldı. Kadıköy'ün diğer mahallelerinde de devam edecek olan atölye çalışmalarının amacı Kooperatif'in çalışma yürüttüğü temel meseleleri bir arada düşünmek ve Kooperatif'in ağını genişletmek olarak özetlenebilir. Gıda Krizi ve Gıda Egemenliği başlıklı ilk atölyenin duyurusu için atölyenin gerçekleşeceği Yeldeğirmeni mahallesinde afişler asıldı, el ilanları dağıtıldı. Aynı zamanda Kooperatif'in sosyal medya hesapları ve mail grubu üzerinden atölyenin içerik, akış ve yöntemine ilişkin bilgiler paylaşıldı.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Atölye, Kadıköy Kooperatifi'nin kısaca kendisini tanıtması ardından, önceden hazırlanarak ve sosyal medya ile mail grubu üzerinden paylaşılmış olan tartışma metninin sunumu ile başladı. Daha sonra katılımcılar gıda krizi ve gıda egemenliğini kapsayacak biçimde dört gruba ayrıldılar. Her grup içerisinden gönüllü bir kişi konuşulan meseleleri not aldı. Grup oturumları sonrası bütün katılımcılar tekrar yan yana geldi ve gruplar kendi çıktılarını sundular. Daha sonra bu çıktılar kolaylaştırıcı tarafından derlenerek genel bir tartışmaya açıldı. Tartışma alternatifler üzerine değerlendirmeler ve Kadıköy Kooperatifi ile ilgili sorularla sürdü.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Dört grubun gıda krizi ve gıda egemenliği etrafında tartışmalar şu şekilde özetlenebilir:
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Küresel Gıda Krizi
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Gıda krizi" başlığı altında yapılan tartışmalar ilk olarak "bir gıda krizi mi var?" sorusu üzerinden, gıda krizinin ne kadar farkında olup olmadığımızı yanıtlamaya çalıştı. Dünya çapında 1 milyardan fazla insanın yaşadığı açlık; her gün üretilen gıdanın yaklaşık üçte bir oranında çöpe gidiyor olması; 2000li yılların ikinci yarısında kendisini gösteren ve gıdaya erişim krizi üzerinden ortaya çıkan isyanlar, gıdada bir kriz olduğu konusunda küresel durumu ifade ediyordu.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Katılımcılar, gıda krizinin ekolojik kriz ve iktisadi krizle beraber ele alınması gerektiğini, gıda krizinin sistemsel bir kriz olduğunu ve merkezinde gıdaya erişim/gıdanın bölüşümü hususundaki adaletsizliğin/eşitsizliğin yattığını ifade ettiler.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Gıda krizinin küresel/ulusaşırı şirketlerin kâr/kapitalist kâr politikaları sebebiyle yaşandığını, gıda sistemi üzerinde şirket egemenliğinin varlığının bu krizin temelinde olduğu ifade edildi. Şirket egemenliğinin kendisini gösterdiği çeşitli biçimler vurgulandı: bir ülke nüfusunun ihtiyacına göre değil, şirketlerin küresel ihtiyacına göre yapılandırılmış tarımsal üretim modelleri/monokültür (tek ürün bazlı) tarımsal sistemler; GDOlu tarımsal model; küresel çapta küçük çiftçiliğin ve köylülüğün tasfiye edilmesi ve üretimde şirketlerin egemen olması; uluslararası kurum ve kuruluşların şirket tarımcılığını desteklemesi ve yapısal uyumları dayatması.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Türkiye
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Katılımcılar, Türkiye'deki tarımsal modelin küresel gıda sistemindeki yapılanmaya uygun olarak, özellikle OECD, IMF, Dünya Bankası, Dünya Ticaret Örgütü ve Avrupa Birliği politikalarına bağlı olarak yapılandırıldığını, yapısal uyum paketleriyle Türkiye tarımının şirketleştirildiğini ifade etti. Bu durumun aynı zamanda kırsal alanda demografik yapının dönüşümünü beraberinde getirmekte, küçük çiftçiliğin ve köylülüğün tasfiyesini hızlandırdığı dile getirildi. Katılımcılar bu durumu kırsal alanda, köyde üretimin ciddi anlamda bittiği üzerinden ifade etti. Köylü tarımı büyük oranda tasfiye edilmekte, mevcut olan üretim potansiyelinin ise kentteki ihtiyacı karşılamadığını söylendi. Bunun temel nedenlerinden biri olarak, şirket tarımcılığının gelişmesi, çiftçinin sözleşmeli tarım ile kendi tarlasında işçileştirilmesi, bir çoğunun da kentlere göç etmesi olduğu dile getirildi. Bu duruma bağlı olarak kırda gıda girişimciliğinin ortaya çıktığını, bunun hem olumlu hem de olumsuz yanlarının olduğu aktarıldı.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Tarımsal üretimin temel maddesi olan tohumun sertifikalandırılma sürecinin tarımda ciddi bir krize yol açtığı, hayvancılık politikalarının hayvancılığı endüstriyelleştirdiği ve mera hayvancılığını tasfiye ettiği, GDOların ciddi bir tehdit olduğu ifade edildi. 2017 yılı itibariyle uygulanmaya başlanan "Milli Tarım Projesi"nin de bir çok zaaf içerdiği, bu projenin yerel bir tarım politikası olmadığı ve tarımda yaşanan sorunlara bütünlüklü bir çözüm önerisi sunmadığı ifade edildi.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Gündelik Kriz
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Peki gıda krizini gündelik yaşantımızda nasıl hissediyoruz? Katılımcılar, bir çok açıdan bir "gıda krizi" içinde olduğumuzun hissedilmediğini; en azından marketlerin gıdaya erişim konusunda bir çok açığı giderdiğini ifade ettiler. Bunun temel sebebinin, küreselleşen gıda piyasası ile beraber Türkiye'nin temel üretimlerinden buğday, mercimek, fasülye gibi ürünleri dahi ihraç etmeye başladığı, bu açıdan, aslında görünmeyen/hissedilmeyen ancak mevcut bir gıda krizi ile karşı karşıya olduğumuz dile getirildi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bunun yanında, tüketicilerin/kullanıcıların gıda konusunda bilgisiz olduğu; ne yediğimizi tam olarak bilmediğimiz ifade edildi. Bu durum aynı zamanda neyi ne zaman yemek gerektiği, neyin sağlıklı olduğu, neyin güvenilir olduğu gibi sorunları da karşımıza getiriyor. Bu noktada her şeyin erişilebilir olduğu bir gıda pazarında aslında bu erişimin bir çok problem taşıdığının altı çizildi. Örneğin, "organik gıda" olarak ifade edilen, özünde "organik sertifikasına" dayalı bir ürün pazarının oluştuğu, bu sertifikanın ürünlerin niteliği ve doğallığı konusunda gerçek bir güvence yaratmadığının altı çizildi. Mevcut gıda sistemi, hem neyi nereden alacağımızı, hem de neyi tüketeceğimizi/hangi gıdanın "sağlıklı" ve "güvenli" olduğunu da pazar koşullarına göre belirliyor/yönlendiriyor. Atölye katılımcıları bu durumu gerçek bir çıkış olarak görmediklerini ifade ettiler.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Gıda Egemenliği
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Atölye katılımcıları, gıda egemenliği kavramının farklı çağrışımlar yaptığını ifade etti. Gıda sistemine hakim olan şirketlerin, neyin sağlıklı, güvenilir ve yenmesi gerektiği konusunda yaptıkları manipülatif hareketleri ve propagandaları, reklamları çağrıştırdığı söylendi. Buna karşın, gıda egemenliğinin tam da bu dayatmalara karşı, üreticiler ve tüketiciler tarafından tekrar ele geçirilmesi/inşa edilmesi/oluşturulması anlamında okunduğu ifade edildi. Şirketlerin aynı zamanda genel sömürü sistemini de yönettiğine ve gıda egemenliği ile sınıf mücadelesinin arasındaki ilişkiye dikkat çekildi. Bu açıdan gündelik hayatmızın çeşitli biçimlerde düzenlenmiş mevcut durumundan mesafe alabilmek için üretici ve tüketicinin karşılıklı insiyatifle oluşturdukları alternatiflerin önemi vurgulandı. Bu gibi alternatiflerin süpermarketler kadar yaygın ve kolay erişilebilir olmasına duyulan ihtiyaçtan bahsedildi. Benzer çalışmalar yapan grupların birbirileriyle ilişki kurmasının faydalı olacağı ifade edildi. Çalışmalarda ilkelerden ödün verilmemesi konusunda özenli davranılması gerektiği söylendi.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Gıda Egemenliğini tesis etmek: çözüm önerileri
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Atölyenin en ilgi çekici, canlı tartışmaların yapıldığı ve sonuç arandığı kısmı, gıda egemenliğinin nasıl tesis edileceği; gıda sistemi üzerinde üretici ve tüketicilerin nasıl muktedirlik kuracağına yönelik çözüm önerileri kısmı oluşturdu. Bu noktada kişisel çabaların/girişimciliklerin bir çok noktada tıkandığı; bütüncül bir sistem olan gıda sisteminin dönüştürülmesi için kolektif çabaların oluşturulması ve yaygınlaştırılması fikrinde atölye katılımcıları genel olarak uzlaşıyordu. Bu amaçla "beraber örgütlenmek - beraber dönüştürmek" fikrinin bir motto olarak ifade edildiğini söyleyebiliriz.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Çözüm önerilerine dair hem mevcutta var olan çabalar değerlendirildi, hem de var olan çabaların yanında neler yapılabileceği konuşuldu. Üretici kooperatifleri, tüketim kooperatifleri, gıda toplulukları, topluluk destekli tarım projeleri gibi hem kentte hem de kırda küçük üreticileri ve tüketicilerin kolektif örgütlenme pratiklerinin geliştirilmesi, bu pratiklerin beraber ağlar inşa etmesi ve bu ağları yaygınlaştırmasının önemine vurgu yapıldı.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Üreticiler açısından, özellikle ekolojik tarım yapan küçük çiftçilerin desteklenmesi; üreticilerin kooperatiflerde örgütlenmesinin teşvik edilmesinin önemine dikkat çekildi. Kırda yaşanan göç sürecinin karşısında küçük çiftçinin maddi koşullarının desteklenmesinin, üretime devam edilmesinde önemli bir husus olduğunun altı çizildi. Özellikle çiftçilere alım garantisi verecek kooperatif örgütlenmelerinin bu konuda önemli bir rolü olacağı vurgulandı.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Gıdanın üreticiden tüketiciye ulaştırılma noktasında "aracı" mekanizmasını ortadan kaldıracak kooperatif örgütlenmelerinin önemine dikkat çekildi. Bu amaçla, esnaf kooperatifleri, dağıtım kooperatifleri, tüketim kooperatifleri ve gıda topluluklarının önemli bir rol oynadıkları ifade edildi. Gıdaya aracılar olmadan ulaşmanın hem gıda sistemini değiştirmede, hem üreticiyi ekolojik/doğal yöntemlerle üretime teşvik etmede, hem de gıda fiyatlarında inisiyatif almada önemli bir rol oynayacağı ifade edildi. Bunun da, üreten ve tüketenin karşılıklı inisiyatifine ve güvenine dayanan, üreticinin ve tüketicinin temas ettiği bir sistemin oluşmasında önemli bir açılım sunacağı ifade edildi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kent ve tüketiciler kısmında, ihtiyaçlarımız üzerinden yan yana geldiğimiz, bu ihtiyaçlarımızı dayanışma temelli kooperatif ilişkileriyle çözme iradesi gösterdiğimiz modeller geliştirmenin önemli olduğu; bunun aynı zamanda alternatif politikaların hayata geçirilmesinde de etkili olabileceği ifade edildi. Tüketici tercihlerinin gıda politikalarını belirleme etkili olduğu ifade edilirken, "harcadığımız her kuruş tavrımızı belirler" mottosunun bir çok şeyi özetlediğine dikkat çekildi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bu amaçla, aynı zamanda "tüketim çılgınlığına" son verecek bütünsel dönüşümlerin de hedeflenmesi gerektiği ifade edildi. Tüketilen bazı ürünlerin kentlerde de üretilebileceği; kent bahçelerinin/bostanların geliştirilebileceği; yerinde üretim ve tüketim ilişkilerinin ve ağlarının oluşturulabileceği; marketlerden çıkarak bu ilişkiler etrafında daha bütünlüklü olarak tüketim ilişkilerinin değiştirilebileceği ve başka bir tüketim ilişkisinin örgütlenebileceği ifade edildi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Son olarak, kooperatif modelinin sınırları ve yasal zeminin kooperatif modelini yutma tehlikeleri de ifade edildi. Kooperatif ve benzeri farklı gıda topluluklarının ve dayanışma inisiyatiflerinin birbirlerine destek veren, koordineli çalışan ve dayanışmacı bir ağın oluşmasına katkı sunması; daha geniş bir planda alternatif bir gıda sisteminin/ağının oluşturulması ve desteklenmesi gerektiği ifade edildi.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Atölye hedefleri bakımından artılar ve eksiler
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Grupların oluşturulmasıyla ilgili olarak benzer kişilerin (üreticiler, kooperatifçiler gibi) aynı gruplarda yoğunlaştığı gözlemlendi. Farklı grupları ve deneyimleri yan yana getirmek için, gruplar oluşurken farklı kesimleri içermesini sağlamak tartışmaları daha kapsamlı ve bütünlüklü kılacaktır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Atölye öncesi yayınlanan ve sunumu yapılan metnin kavramsal tartışmaya katkı sağladığı, ancak atölye grupları içerisinde kavramsal tartışmaya çok fazla odaklanmadığı söylenebilir. Örneğin "gıda egemenliği" kavramı, tartışmaların yapılabilmesinin zemini olurken, kavram üzerine kapsamlı bir tartışma yapılmadı. Gıda egemenliğinin şirketler tarafından ele geçirildiği ve gıda egemenliğinin nasıl geri alınabileceği somut öneriler bazında tartışıldı. Bunun, gündelik hayat deneyimlerinden beslenen ve somut çözüm önerilerine odaklanan bir atölye açısından doğal olduğu söylenebilir. Sonuç olarak, gıda egemenliğinin nasıl ele alınacağı ve tesis edileceğine yönelik somut tartışmalar yapılması, atölyenin temel amaçları açısından son derece verimli sonuçlar doğurmuştur.
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
              href="/dusunduklerimiz" 
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
    </div>
  );
}

