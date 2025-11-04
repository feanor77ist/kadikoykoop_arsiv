"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useState, useEffect } from "react";

export default function AyrintiDergiMulkiyet() {
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
          src="/modal2.webp"
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
            <Link href="/yayinlar" className="hover:text-blue-600 dark:hover:text-blue-400">Kooperatif Yayında</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Ayrıntı Dergi Güz 32. Sayı - Mülkiyet</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ayrıntı Dergi Güz 32. Sayı - Mülkiyet
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              2019
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold text-lg mb-6">
              "Önemli olan paylaşım modelinin ne olduğu ve yapının nasıl işlediğidir"
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold text-base mb-4">
              Kadıköy Kooperatifi ile Söyleşi
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              <strong>DUYGU TANIŞ ZAFEROĞLU:</strong> Kadıköy Kooperatifi neden, nasıl ve ne zaman kuruldu? İlkeleri, yapılanması ve örgütlenmesi hakkında kısaca bilgi verebilir misiniz?
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>KADIKÖY KOOPERATİFİ:</strong> Kadıköy Kooperatifi'nin fikri temelleri, Gezi Direnişi sonrasında mahallelerde oluşan forum ve dayanışmalar döneminde yapılan tartışmalarda ortaya çıktı. Kadıköy'de bulunan dayanışma ve forumların organizasyonu, Çiftçi Sendikaları Konfederasyonu (ÇİFTÇİ-SEN), Boğaziçi Mensupları Tüketim Kooperatifi (BÜKOOP), Tohum İzi Derneği ve Anadolu'da Yaşam Kooperatifi'nin katılımı ile 1 Şubat 2014'de bir çalıştay düzenlendi. Kooperatif için Kadıköy ölçeğine uygun, bahsettiğimiz kurumların deneyimlerinden de faydalanarak bir model tartışıldı.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sonbaharda tekrar yan yana gelindi. Yeni bir grup olarak çalışmalar yeniden başladı ve 2015 yılından itibaren Kadıköy Kooperatifi bağımsız olarak çalışmalarını sürdürdü. Mevcut birikim, çalıştaydaki tartışmalardan beslenerek bir takım ortak ilkeler ve model taslağı oluşturuldu. Pratik olarak bizim "sipariş paketleri" diye ifade ettiğimiz dönem başladı. 2015 Mart ayı ile 2016 yaz başına kadar 5 sefer sipariş paketi organizasyonu yaptık. 2015 Mart ayında ilk sipariş paketi dağıtıldı. 50 paket ile başlayan siparişler, 2016 yazında 350 paket sayısına ulaştı. Bu süreçte, Kadıköy'deki temaslarımızı güçlendirdik, kooperatif fikrini olgunlaştırdık, tartıştık, yaygınlaştırdık. Pratikte tecrübe ettik. Resmi bir kooperatif kurmak için düşünsel ve pratik olarak kendimizi hazırlamış olduk. Ağustos 2016'da dükkân kiralandı, resmi başvuru için hazırlıklar başladı Ekim ayında başvuru yapıldı Kasım 2016'dan itibaren resmi bir kooperatifiz, bir dükkanımız var. Çalışmalarımıza bu şekilde devam ediyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatifin ilkelerine ve örgütlenmesine gelince, uzunca tartışmalardan ve deneyimlerden sonra bir örgütlenme modelimiz hazırlandı tabi ki örgütlenme modelimiz sürekli değişim ve yeniliklere açık olarak görüyoruz. Bu modelde kooperatifin felsefesi, ilkeleri ve çalışma şekli belirlendi. Temel olarak 5 ilke belirlendi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>1- Üreticiler ile Aracısız Birliktelikler Kurma ve Dayanışma:</strong> Bütün ürünlerimizi üreticiden aracısız alıyor geliri doğrudan üreticiye aktarıyoruz. Çalışacağımız üreticileri kolektif bir tartışma ile belirliyoruz. Üretici tercihlerimizde dayanışmaya önem veriyoruz. Önceliğimiz kadın üreticiler, örgütlü üretim yapanlar (kooperatifler, dernekler, sendikalar, vakıflar, inisiyatifler, kolektifler), bizim gibi örgütlü tüketici grupları ile dayanışma gösterenler, dezavantajlı gruplar (LGBTİ+, güvencesizler, göçmenler, direnişteki gruplar), tekil ve geçimlik üretim yapan küçük üreticiler olarak sıralıyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>2- Üretim ve Tüketim Üzerinde Karşılıklı İnisiyatif:</strong> Üretici ve kullanıcıların iletişim içinde olmasını sağlayacak mekanizmaları geliştirerek ve üretim ile tüketim süreçlerini birbirine bağlayarak, neyin, nasıl ve ne kadar üretileceğine bu ürünleri kullananlarla üretenlerin beraber karar vermesinde rol almayı hedefliyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>3- Kolektif Çalışma ve Paylaşım:</strong> Birlikte karar alan, çalışan ve paylaşım ilişkilerini geliştirmeyi hedefleyen bir örgütlenme olan Kooperatif'in tüm karar alma süreçlerini kolektif bir çerçevede sürdürüyoruz. Bu amaçla kolektif çalışmanın gelişmesi, ortakların ve gönüllülerin çalışmalara eşit bir şekilde katılabilmesi için eğitimler düzenleyerek Kooperatif'i yenileyebilecek öğrenme ve aktarım mekanizmaları geliştiriyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>4- Ekolojik ve Adil Toplumsal İlişkiler:</strong> Üretim ve tüketim ilişkilerinde toplumsal faydayı esas alan, doğa ile dost ve ekolojik bir çerçeveyi destekliyoruz. Ürün seçiminde ekolojik koşulları sağlayan, üretim süreçlerinde kadın emeğinin ikincilleştirilmediği, her türlü emek sömürüsünden uzak üretilmiş adil ürünleri tercih ediyoruz. Bu açıdan emeğin ve doğanın savunulması ve korunmasını, yerel üretimi, sağlıklı ve nitelikli ürünlere herkesin erişebilmesini savunuyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>5- Toplumsal Dayanışma:</strong> Kâr amacı gütmüyoruz; Kadıköy Kooperatifinin kendini sürdürebilmesini ve toplumsal faydayı esas alıyoruz. Kooperatifin yarattığı değerleri imkânlar dâhilinde emek ve demokrasi mücadelesi temelli direniş gruplarıyla, bir afet durumunda olası ihtiyaç sahipleri ile, toplumsal cinsiyet eşitsizliği nedeniyle desteğe ihtiyacı olan, cinsel yönelim ve cinsiyet kimliği nedeniyle dışlanan gruplar ve ötekileştirilen tüm canlılar ile paylaşmayı hedefliyoruz. Çeşitli alanlardaki kooperatifler ve dayanışma ekonomisi temelli topluluklarla beraber çalışmayı; iş birliğini ve kooperatifçiliği toplumsal alanda yaygınlaştırmayı amaçlıyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi, çalışmalarını sistemli biçimde yürütmek için mekanizmalar geliştirdi. Bu amaçla haftalık ve aylık düzenli toplantılar yapıyor, bir dizi çalışma birimi bulunuyor. Kooperatife katılmak isteyen bir gönüllü, öncelikle Kadıköy Kooperatifi Kendisini Anlatıyor toplantısına geliyor, ardından da bir eğitime katılıyor. Bunun üzerine kooperatifin haftalık toplantılarına katılmaya başlıyor. Temel pratik işlerin konuşulduğu bu toplantılar, tüm ortaklara, gönüllülere ve katılmak isteyen herkese açık. Ayrıca kooperatif belli konuları daha ayrıntılı tartışmak için ayda bir çalıştay da düzenliyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Her gönüllü arkadaşın kooperatifin görünen yüzü olan dükkanı açması ve bir biriminde aktif olarak yer alması bekleniyor. Yabancılaşma olmaması için de kişiler belli sürelerle birimler arasında görev değiştiriyor. Yeni gelen ile eskiden beri çalışmanın içinde olan kişiler arasındaki farkı gidermek için sürekli öğrenme, birbirini destekleme, güçlendirme yöntemleri kullanıyoruz. Genel işleyişte ise her hafta düzenli toplantılar yapıyoruz. Kooperatifte tüm işler gönüllülük esasında yapılıyor. Gönüllülüğün başında, buna açık olmak, öğrenmeye ve beraber çalışmaya "gönüllü olmak" geliyor, diyebiliriz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Çünkü, bir gönüllünün kooperatifte yapabileceği herhangi bir şey olabiliyor. Örneğin toplantılara katılmak, karar vermek ve karşılıklı sorumluluk almak, alınan görevleri uygulamak; örneğin zeytinleri paketlemek, bir ürün bittiğinde üreticiyi aramak, kargo görevlisini karşılamak; kooperatife gelen kişilerle ilişki kurmak; başka bir kooperatif çalışması için farklı ilçelere gitmek, yeni insanlarla tanışmak... Bunlara gönlünüz olmadığı zaman yapamazsınız. Başka insanlarla temas kurmak, onları yaptığınız çalışmanın parçası kılmak; en önemlisi de, iyi bir şeyler yaptığınızı anlatabilmek gerekir. Buna gönüllü olmak, bunu göze almak gerekir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
              <strong>DUYGU TANIŞ ZAFEROĞLU:</strong> Sizce Kooperatiflerin toplumsal dayanışmadaki rolü nedir? Kadıköy Kooperatifini "modern bir işletmeden" ayıran en önemli özellikler nelerdir? Kooperatifleri "başarılı girişim" araçları olarak gören zihniyetle mücadele için Kadıköy Kooperatifi nasıl politikalar benimsiyor?
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>KADIKÖY KOOPERATİFİ:</strong> Birkaç farklı soruyu bir arada sormuşsunuz. İlk sorunuzla başlarsak, kooperatiflerin temeli yardımlaşma üzerine kurulmuştur. Bir işi kolektif olarak yapma biçimidir. Ya da bir kişinin yapamadığı bir iş ya da hizmette diğerinin destek atması ve sonrasında birlikte bir dayanışma geliştirmesi de olabilir. Bu dayanışmaya kooperatif ayrıca bir ekonomik birim olarak da girebilir. Kooperatif yasal olarak bir işletme statüsündedir. Kâr etmesi kooperatifin kendi vereceği bir karardır. Bunun yerine ortak değerin dağıtımını da sağlayabilir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Mevzuat olarak bir kooperatifi işletmeden ayıran tek şey karar almada oy hakkının sahip olunan hisseye göre olmamasıdır. Yani kooperatifte her üye bir oya sahiptir. İşletmede ise oylar hissenizin oranına göre değişir. Bunun dışında kooperatif ortaklık sayısı bir anonim şirketteki gibi (halka açılan şirketlerde örneğin) istediği sayıda olabilir. Çalışma organları temelde benzerdir. Peki biz neden kooperatif için bu kadar ısrar ediyoruz? Çünkü kooperatif ilkesel olarak ortak faydayı sağlama temelinde hareket eder.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatif tek başına bir anlam taşımıyor elbette. Asıl önemli olan kooperatifin işleyiş ve ilkeleriyle birlikte kooperatifte çalışacak kişilerin içini doldurmasıyla mümkün olur. Burada kooperatif ortak çalışma ve kamusal alan yaratmada kooperatifçilik iyi bir yapı oluşturuyor ve buna imkân sağlıyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatifler ya da şirketler birer araç, önemli olan bahsettiğimiz gibi nasıl yönetildiği ve yapının ne olduğu. Sosyal girişimcilik diye bir kavram da var, bu doğrultuda kâr amacı gütmeyen şirketler de var. Tam tersi kâr amaçlı kooperatifler de var. Önemli olan paylaşım modelinin ne olduğu ve yapının nasıl işlediği. Kooperatif kurmak tek başına yatay, ortak üretim ve paylaşımın bir göstergesi değil.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
              <strong>DUYGU TANIŞ ZAFEROĞLU:</strong> Türkiye'de Kooperatif hareketlerinin karşılaştığı zorluklar nelerdir? Karşınıza hukuki engeller mi toplumsal engeller mi daha çok çıktı?
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>KADIKÖY KOOPERATİFİ:</strong> Kooperatif sürecinde her iki alanda da sıkıntılar yaşandı. Öncelikle toplumsal hafızadaki kooperatif algısı çok sıkıntılı bir yerdeydi. Belki yaşı daha genç olan kişiler hatırlayamayabilirler ancak yaşı ileri kişiler Türkiye'nin yaşadığı sıkıntılı kooperatifler sürecini hatırlıyordu. Özellikle de yapı kooperatifleri ve bir dönem belirli koşullar için kurulan ve sonra atıl kalan kooperatifler hatırlanmaktaydı. Biz de kooperatifi gönüllü iş üzerinden yaptığımızı söylediğimizde bizi pek ciddiye almadılar.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Diğer konu ise yasal yani kooperatif mevzuatının çok eski ve zorlayıcı olmasıydı. Kooperatifin ilk zamanlarında bu konuda BÜKOOP ve AYTK'dan (Anadoluda Yaşam Kooperatifi) çokça destek gördük. Bununla birlikte mevzuat için uzunca bir süre çalışıp araştırma yapmak zorunda kaldık. Sonunda yasal olarak bir kooperatif kurduk ancak kooperatifin her sürecinde düzenlemelere uygun hareket etmek birçok konuda bağlayıcı oldu.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gıda tüketim kooperatifinin satışa dair uygulama mevzuatı kooperatifi bir şirket olarak görmekte ve aynı süreçleri işletmekte. Bu durum kooperatiflere maddi yük getirmekte. Akılda tutulmalı ki bizler kooperatifçiliğin gıda alanına dair çalıştığımız için buradan cevap verebiliriz. Yasal olarak karşılaştığımız zorlukların yanı sıra yatay bir yapılanmada bilgi üretmenin ve bu bilgi ile hareket etmenin yapısını oluşturmak da zorlayıcı bir süreç oldu. Hiyerarşisiz bir yapıdaki hantallığı aşmak sıkı ilişkiler ve her atılan adımı yönergeler ile belirleyerek hareket etme gerekliliği ve bu kararların alınma süreçleri yorucu oluyor elbette.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
              <strong>DUYGU TANIŞ ZAFEROĞLU:</strong> Gıda krizi ve ekonomik krizlerle mücadelede eşitlikçi bir örgütlenme modeli olarak kooperatifler nasıl bir rol üstlenmeliler?
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>KADIKÖY KOOPERATİFİ:</strong> Günümüz gıda krizi, şirketlerin egemen olduğu birçok alan gibi kâr amacı hareket sistemin bir çıktısıdır. Ve bu sistemin geldiği nokta ekolojik ve ekonomik krizlerdir. Tam da bu nedenle şirket egemenliğine karşı, üretimin ve tüketimin ayrı ayrı ve birlikte örgütlenmesini sağlamak gerekli. Kooperatif bu örgütlenme modeline uygun bir yapıya sahip. Hem ekonomik anlamda işlerliği olan hem de sosyal alanda dezavantajlı konumda olanların birlikteliklerini sağlayabilecek ikili yapıya sahip.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi kuruluş amacı gıda krizine karşı gıda egemenliğini savunmak ve bunun yayılmasını sağlamak. Bir yandan üreticilerin kendi aralarında örgütlenmelerini desteklerken, diğer yandan aracısız satış kanallarını arttırmak için çaba harcıyoruz. Gıda egemenliğini sağlamak için türetici olmak, adil gıdanın hakkını savunmak ve bunun için örgütlü olarak mücadele etmek önemli. Burada kooperatiflere önemli rol düşüyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatifçilik elbetteki tek başına çözümü getirmiyor. Bu nedenle kooperatifin hangi amaç ve ilkelerle çalıştığını bilmek ve bu amaçla kooperatife üye olan kişilerin hareket etmesi gerekli. Bunu sağlamak, yatay ve hiyerarşi olmadan örgütlenmenin oluşması zahmetli bir süreci gerekiyor. Bu süreç farklı farklı insanların bir arada ortak bir amaç için çalışmayı öğrenmesine bağlı.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
              <strong>DUYGU TANIŞ ZAFEROĞLU:</strong> Yerel kalkınmada kooperatiflerin ne gibi sorumlulukları var? Son dönemde yerel yönetimlerin kooperatiflere ilgisi ve kooperatiflerle ilgili vaatleri hakkında neler düşünüyorsunuz?
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>KADIKÖY KOOPERATİFİ:</strong> İki soruyu ayrı düşünmek gerekli. "Yerel kalkınma" sözü asimetrik ilişkiye vurgu yapmakta. Yani bir yerde kalkınmış "gelişmişlik" olmasına rağmen diğer yerde oluşmadığı ve bu gelişmişliğin sağlanması adına uygulamalar gerektiği savı ileri sürülmekte. "Kalkınma" kavramı modernleşme, sanayileşme ve ilericilik olarak bizlere sunuluyor. Oysaki kalkınma söylemi tarih boyunca kapitalist üretim ilişkilerinin yerleşmesi için kullanılmış bir uygulamalar bütünü olmuştur. İkinci dünya savaşından sonra 1960'lara belki 1970'leri de içine alabileceğimiz bir dönem içerisinde az gelişmiş olarak adlandırılan ülkelere sunulan reçetelerin ismine "kalkınma programları" dendi. Bu reçeteler sayesinde az gelişmiş olan ülkeler lineer bir ilerleme gösterdiği iddia edilen gelişmişlik düzeyine gelecek yani kapitalist ilerlemeye uyum sağlayabilecek ve gelişecekti. Ancak birçok çalışmanın bize gösterdiği gibi kapitalist ülkeler bu yarışta hep "kalkınmış-ileri" konumunu korudu. Şimdi bu karşılaştırmalı durum yerel bölgeler arasında da söylenmeye başlandı. Bizim bu gibi kavramlara daha dikkatli yaklaşmamız gerekli. Yerel'in kendi öz varlıkları ile yaşamlarını organize edebilecek ve ileri geri gibi tanımlamalardan öte kendine insana, doğaya ve etik değerlere ulaşabilecek yollar bulmamız mümkün. Bu niyetle doğru ilerlerken kooperatif örgütlenmeleri bir adım olabilir. Her yereli aynı ortak yönetim biçimi ya da sosyal ortama benzetmek zorunda değiliz. Her yerelin kendi dinamikleri ile farklılaşan yapılarını ve isteklerini görmek gerekli.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Diğer sorunuza gelince son dönemde yerel yönetimler kooperatif örgütlenmelerine özel bir önem vermekte. Bunun bir nedeni yerde oluşan inisiyatifler olmakla birlikte diğer nedeni de hem devlet hem de uluslararası kurumların işsizlik ve ekonomik krizlere baş etme yöntemi olarak kooperatifçiliği işaret etmeleridir.
            </p>

            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm italic">
                <strong>Kooperatife ulaşmak için:</strong> Bahariye Caddesi üzerindeki Kadıköy Halk Eğitim Merkezi ile Moda Sahnesi arasında kalan ve Yoğurtçu Parkı yönüne inen sokaktan (Halil Ethem Sk.) aşağıya doğru inin. Sokağın diğer sokak (Hacı Ahmet Bey Sk.) ile kesiştiği noktada sağ çaprazda kalan bina. (Hacı Ahmet Bey Sokak No:1)
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
              href="/yayinlar" 
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

