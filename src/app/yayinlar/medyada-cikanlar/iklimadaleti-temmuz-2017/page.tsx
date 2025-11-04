"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function IklimAdaletiTemmuz2017() {
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
            <Link href="/yayinlar/medyada-cikanlar" className="hover:text-blue-600 dark:hover:text-blue-400">Medyada Çıkan Haberler</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Tüketim Kooperatifleri Sadece Sağlıklı Gıda Demek Değildir!</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tüketim Kooperatifleri Sadece Sağlıklı Gıda Demek Değildir!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              25 Temmuz 2017 - İklimAdaleti
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Türkiye'de son yıllarda irili ufaklı pek çok kent, çevre hareketinde dağılmalar yaşanırken, yeni oluşumlar da ortaya çıkıyor. Özellikle gıda alanında kendine yeterliliği esas alan gruplar doğuyor. Temel olarak doğrudan üreticiye ulaşarak, sağlıklı gıdaya ulaşma yollarını arayan orta sınıfların beklentilerini aşan bir perspektife çalışan Kadıköy Kooperatifi gönüllülerinden Özlem Işıl ve Umut Kocagöz ile gıda egemenliğimizi konuştuk.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Kooperatife ilgili geçmiş süreci kısaca anlatabilir misin?
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kadıköy Kooperatifi, İstanbul'un Kadıköy ilçesinde bir kooperatif kurma fikriyle yan yana gelmiş kişilerin oluşturduğu bir inisiyatif olarak 2014 yılında çalışmalarına başladı. Ekim 2016 yılında tüketim kooperatifi tüzel kişiliğini aldı ve ilk kooperatif dükkanını açtı.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kadıköy Kooperatifi fikrinin temelleri, Gezi direnişi sonrasında oluşan park, mahalle, üniversite, iş yeri forum ve dayanışmaları döneminde, Kadıköy ilçesindeki mevcut forumlarda yapılan tartışmalarda ortaya çıktı. Forum ve Dayanışmalar'ın geri çekilmesi sonrasında bağımsızlaşan kooperatif çalışmasını şöyle anlatmak mümkün:
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                İlk olarak, Mahalle Dayanışmaları Döneminde fikir ortaya atıldı. Sonrasında Kooperatif Çalışma Grubu kuruldu ve tartışmaları ve çalışmaları koordine etme görevi üstlendi.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kadıköy'de bulunan dayanışma ve forumların katılımı ve organizasyonu ile Çiftçi Sendikaları Konfederasyonu (ÇİFTÇİ-SEN), Boğaziçi Mensupları Tüketim Kooperatifi (BÜKOOP), Tohum İzi Derneği ve Anadolu'da Yaşam Kooperatifi'nin katılımı ile 1 Şubat 2014'de bir çalıştay düzenlendi. Kooperatif için Kadıköy ölçeğine uygun, bahsettiğimiz kurumların deneyimlerinden de faydalanarak bir model oluşturuldu. Lakin Kooperatif hemen o zaman çalışmalarını somutlayamadı. Bir süre ara verildi. Sonbahar'da tekrar yan yana gelindi. Yeni bir grup olarak çalışmalar yeniden başladı. Mevcut birikim, tartışma ve deneyimlere istinaden bir takım ortak ilkeler oluşturuldu ve bizim "sipariş paketleri" diye ifade ettiğimiz dönem başladı. 2015 Mart ayı ile 2016 yaz başına kadar 5 sefer sipariş paketi organizasyonu yaptık. Bu süreçte, Kadıköy'deki temaslarımızı güçlendirdik, kooperatif fikrini olgunlaştırdık, tartıştık, yaygınlaştırdık. Pratikte tecrübe ettik. Resmi bir kooperatif kurmak için düşünsel ve pratik olarak kendimizi hazırlamış olduk. 2016 Ekim ayı itibariyle resmi bir kooperatifiz, bir dükkanımız var. Çalışmalarımıza bu şekilde devam ediyoruz.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bu süreçte gönüllüğü esas aldık; farklı deneyimlerden faydalandık; sürekli öğrenmeye açık olduk; farklı düşünen, farklı arka planlara, alışkanlıklara, dillere, düşüncelere sahip insanların beraber çalışabileceği bir ortak zemin yarattık, ısrarla var ettik. Her hafta düzenli toplantılar yaptık; dışarıya açık olmak, içerisi ile dışarısı ayrımının altını oymak için sürekli etkinlikler yaptık, yapıyoruz. Bir anlamda, içinde bulunduğumuz yerelin özgün koşullarına bağlı olan bir taban çalışması yapıyoruz; dayanışmanın ve gönüllülüğün gücünü pekiştiriyoruz.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Çalışmalarınız ne aşamada? Kaç kişi çalışıyor, kaç ortağı var? Gönüllü desteklerin kapsamı nedir?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Şu an 16 resmi ortağımız bulunuyor; 20-25 kişilik de aktif çalışmalara katılan bir grubumuz var. Bunun dışında, çalışmalarımıza aktif ve düzenli olarak katılmasa da zaman zaman katkı veren, dayanışma gösteren dostlarımız da mevcut. Çekirdek grubumuz çok küçük bir sayı ile başladı, kendisini yenileyen ve geliştiren bir şekilde bu sayıya ulaştı. Yeni gelen ile eskiden beri çalışmanın içinde olan kişiler arasındaki farkı gidermek için sürekli öğrenme, birbirini destekleme, güçlendirme yöntemleri kullanıyoruz. Gönüllülüğün başında, buna açık olmak, öğrenmeye ve beraber çalışmaya "gönlü olmak" geliyor, diyebiliriz.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Çünkü, bir gönüllünün kooperatifte yapabileceği herhangi bir şey, örneğin toplantılara katılmak, karar vermek ve karşılıklı sorumluluk almak, alınan görevleri uygulamak; örneğin zeytinleri paketlemek, bir ürün bittiğinde üreticiyi aramak, kargo görevlisini karşılamak; kooperatife gelen kişilerle ilişki kurmak; başka bir kooperatif çalışması için farklı ilçelere gitmek, yeni insanlarla tanışmak… Bunlara gönlünüz olmadığı zaman yapamazsınız. Başka insanlarla temas kurmak, onları yaptığınız çalışmanın parçası kılmak; en önemlisi de, hakikaten iyi bir şeyler yaptığınızı anlatabilmek gerekir. Buna gönüllü olmak, bunu göze almak gerekir.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Ortakları dışındaki kişilerle- tüketicilerle nasıl iletişim kuruyor kooperatif?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Her hafta düzenli toplantılar yapıyoruz. Bizi tanımak isteyenler toplantılarımıza gelebiliyor. Ayrıca, Kooperatif Dükkanı haftanın her günü açık; alışveriş yapmaya veya çay içmeye gelinebiliyor. Her ayın son Cuması "Kooperatif Kendisini Anlatıyor" başlıklı tanışma toplantıları düzenliyoruz. Ayrıca, düzenli olmasa da, atölyeler, paneller, söyleşiler düzenliyor, bunları da olabildiğince mahalle temelli yapmaya çalışıyoruz. Şu ana kadar Caferağa, Osmanağa, Yeldeğirmeni, Caddebostan mahallelerinde etkinlikler yaptık. Bunları yaygınlaştırmaya çalışıyoruz.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bunlar dışında, sosyal medyada çok aktifiz. Facebook ve Twitter üzerinden çok fazla iletişim kuruyoruz, takipçilerimizin sorularını yanıtlamaya ve görüşlerini almaya özen gösteriyoruz.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Metropol hayatı içinde Kooperatiften alış verişi tercih etmekte zorlanıyor mu insanlar? Sanal ortamdan da mı ulaşıyorlar size?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Metropolleşme, kentsel dönüşüm, iç-dış göç, iş hayatı ve eğlence hayatındaki değişimler elbette insanların tüketim alışkanlıklarını da etkiliyor. Kadıköy, özellikle Beyoğlu bölgesindeki kentsel dönüşümle beraber yeni gözde ilçelerden biri haline geldi. Bunun etkileri gözlemleniyor. Eskiden daha sakin ve daha "yerleşik", daha "mahalli" denilebilecek bir ilçe iken, şu an Kadıköy ilçe merkezi olarak ifade edilebilecek tarihi Kadıköy çarşısı ve civarı, gün içinde kendi nüfusunun çok çok üstünde bir sayıda insanın gelip geçtiği bir yer olma özelliği taşıyor.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ek olarak, Kadıköy her türlü alışveriş seçeneğinin bulunduğu bir ilçe. İnternet, büyük marketler, küçük marketler, gurme marketler, organik shop'lar, tarihi şarküteriler, ucuzcular vs. Bunlar elbette alışveriş ilişkilerini etkiliyor. Kooperatif Dükkanı Kadıköy'ün alışveriş coğrafyasının tam göbeğinde değil; bu sebeple çok çılgınca bir talep olduğu söylenemez. Ayrıca, mevcut alışkanlıklar elbette özellikle internetten alışverişi veya evlere servisi getiriyor.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Biz, yüzyüze iletişime, bu anlamda hakikiliğe, sohbete dayanan bir ilişki geliştirmeye çalışıyoruz. Bu anlamda Kooperatif'ten alışveriş yapmak isteyenleri zorladığımız söylenebilir. Ancak alışveriş yapanlar genellikle memnunlar.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Buraya İstanbul'un her yerinden ziyaretçi geliyor; ama bu bizim hedefimiz değil. Zaten çok makul da değil; daha çok tanımaya geliniyor bu şekilde. Alışveriş yapan kesim daha çok gerçekten mahalle veya Kadıköy sınırları içerisinde kalan kesim.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Örneğin, Avcılar'dan gelip alışveriş yapmak isteyenler olduğunda, biz onlara da kooperatif etrafında örgütlenmelerini, benzer çalışmalar içerisinde yer almalarını öneriyoruz. Sosyal medya üzerinden ilişkilerimiz ise tanımak ve bilgi almak amaçlı oluyor; satış yapmıyoruz.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Kadıköy gibi semtlerde mahalle kültürünün giderek ön plana çıktığı gibi bir söylem var, buna katılır mısınız? Mahalle kültürü ile kooperatif arasında bir ilişki var mı sizce?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Öncelikle, Kadıköy Türkiye'nin en kalabalık ilçelerinden biri (2016 nüfus bilgilerine göre 452.302 nüfusu ile 30. sırada yer alıyor) Dolayısıyla bu tarz bir çalışma yapmanın belirli avantajları ve dezavantajları olduğunu söylemek gerekir. Yerleşik yapısının geçtiğimiz bir kaç sene içerisinde çok hızlı değiştiği söylenebilir. Bir ikincisi, yine belirttiğimiz üzere Kadıköy gün içerisinde çok fazla kişinin gelip geçtiği, çalıştığı, eşi dostuyla buluştuğu, gezdiği, bir ilçe. Bu açıdan yerleşik nüfusu ile burada nefes alan insanların sayısı arasında ciddi bir fark var.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Aynı zamanda Kadıköy, deniz kıyısında olması, sahillerini bir şekilde muhafaza edebilmiş olması, kendince bir nezihliği olması, bir gece yaşamı olması açısından da canlı, aktif, dinamik bir bölge. Bu açıdan yine Türkiye'nin en kozmopolitik ilçelerinden biri. Her kesimden, her inançtan, her politik görüşten, her sınıftan insan gün içinde burada karşılaşıyor.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatif Dükkanı bu kozmopolitliğin gerçekleştiği bölgede, ama onun sınırında yer alıyor. Bu açıdan, kooperatif çalışmasının bu canlılıktan beslenmekle beraber kendi çapında bir yerellik, mahallelik inşa ettiğini söyleyebiliriz. Beraber bir şeyler yapmanın, bunu da bir mekan ölçeğinde yapmanın kendisi bir çeşit aidiyet yaratıyor. Ayrıca, elbette, Caferağa ve Yeldeğirmeni gibi yukarıda bahsettiğimiz canlılığı ve çeşitliliği barındıran, ama aynı zamanda kendi sakinleri ve yaşam kültürü bulunan bir ilçe Kadıköy. Hem mahallelilik, hem de metropollük burada çakışıyor. Bunların mahalle olduğunu söylemek zor; kent merkezleri; ama mahalle dokusu ve özellikleri de taşıyorlar.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatif Dükkanı Caferağa mahallesinde yer alıyor; kooperatiften alış veriş yapan mahallelilerin kooperatife bir tür aidiyet kurduklarını söyleyebiliriz; çünkü burası büyük marketlerden alışveriş yapmaktan farklı. Mesela alışverişe gelenler "komşum da sizden alış-veriş yapıyor" yollu cümleler kurabiliyor. Bunu muhtemelen büyük marketlerde duyamayız. Zaten yapıyordur, kendince fark yaratan bir şey değildir. Ama bizden alışveriş yapılması bu açıdan bir fark oluşturuyor.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatif bu anlamda mahalle ilişkilerine dair pozitif bir katkı sağlayabilir; lakin, elbette, eski tür mahallelik, izole, kapalı, bir mahallede olmadığımızı tekrar ifade edelim. Kooperatif, dayanışma, yüz yüze iletişim, insani ilişkilerin gelişmesi gibi noktalarda, mahalle kültüründen bildiğimiz/hatırladığımız pozitif niteliklerin yeniden inşa edilmesine katkı sağlayacaktır. Lakin, bunu bir "metropol mahalle" içinde yapmanın zorluklarıyla da her daim karşı karşıya kalıyoruz.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Tabi Kadıköy'de de yoğun bir kentsel dönüşüm yaşanıyor, yeni orta sınıfların tüketim alışkanlıkları ile doğal üretim tarzları arasında nasıl bir ilişki kuruyorsunuz?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Orta Sınıf" denilen kesim, maddi gelir, eğitim, entelektüel ve kültürel sermaye açısından bilgi ve metalara erişim konusunda çalışan kesimlerin daha "ayrıcalıklı" kesimini ifade etmek için kullanılıyor. Caferağa mahallesi de, baktığımız zaman bu kesimden kişilerin yaşadığı bir bölgeyi ifade ediyor. Biz de genel hatları itibariyle bu kesimin bir parçasıyız.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bu orta sınıf kesiminin zaman ve maddi imkanlar kaynaklı olarak beslenme tercihlerini bugün bir trend haline gelen "organik" piyasası içinden karşılamaları gözlemlenen bir durum. Lakin, burada altını çizmemiz gereken çok önemli bir olgu var: tüketim alışkanlıklarında bilgiye, maddi imkana, zamana ve tercihe dayalı bir "ayrıcalık" olgusu ortaya çıkmış durumda. Zenginler ve üst orta sınıflar, maddi imkanlarına bağlı olarak bu ayrıcalıktan faydalanıyorlar. Orta ve alt orta sınıf, belirli ölçüde bu imkanlardan faydalanmaya çalışıyor; maddi imkanları tam olarak yeterli olmadığı için araştırıyor, konunun uzmanı olabilecek bir bilgi birikimine sahip hale geliyorlar; pazar içinde tercihlerini belirliyorlar. Bu grup içinde alternatif yaşam ve tüketim alışkanlıkları arayışında olan kesimler de fazlasıyla mevcut. Dolayısıyla, mesela kişisel kâr odaklı bir "organik shop"tan alışveriş yapmak yerine, hakikaten memlekete faydalı bir faaliyet olan kooperatif'ten alışveriş yapmayı tercih edebiliyorlar. Ancak bu durum genel olarak sağlıklı, nitelikli, besleyici gıdaya erişim konusunda mevcutta olan bir gerçekliği değiştirmiyor: bu ülkenin milyonlarca yoksulu, bugün, nitelikli, sağlıklı ve besleyici gıdaya erişemiyor. Türkiye belki "açlık" çeken bir ülke değil; lakin bir beslenme konusunda ciddi anlamda fakir olduğumuzu söylemek gerekir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bizim amacımız, herkesin sağlıklı, nitelikli, adil, besleyici gıdaya erişebildiği bir gıda ve tarım sistemi kurulmasına katkı sunmak. Bunu hem bugünden inşa etmek, hem de bununla ilgili kamuoyunu bilgilendirmek, güçlendirmek. Buna, sizin ifadenizle "orta sınıflar" bugün daha kolay erişebiliyor olabilir; lakin işlerin daha kötüye gitmeyeceğini, gıda sistemi bu şekilde olduğu sürece, kimse garanti edemez.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Kadıköy Kooperatifi gibi bir kooperatif kurmak isteyen tüketiciler ne yapmalı?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Öncelikle, bu çalışmaya başlamak için farklı yollar seçilebilir. Biz "çekirdek grup" dediğimiz bir grup oluşturduk. Kendimize ilkeler belirledik. Düzenli olarak toplantılar yaptık. Yeni gelen kişilere kendimizi açık tuttuk. Farklı kişilerin gelmesini mümkün kıldık, beraber çalışmaya yönelik birbirine karşı saygılı, sorumluluk bilincine sahip bir çalışma ortamı yarattık. Kendimizi gıda sistemi, tarım, bunlara yönelik politikalar konusunda yetiştirdik, sürekli öğrenmeye açık olduk. Farklı deneyimlerden öğrendik, açık olduk. Ve en önemli şeylerden biri, çalışmalarımızı sürekli olarak pratik bir çalışma olarak inşa ettik.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Yani, hem öğrendik, hem yürüdük. İlkelerimizi oluşturduk, ama hep tartışmaya da açık olduk. Kooperatif kurmaya karar vermiş olmak belki en önemli kararımızdı. Bu karar haricinde bir çok şeyimizi tartıştık; ama bu karar ile çalışmalarımızı güçlendirdik.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Biz, kitlesel bir çalışma yapmayı önümüze koyduk; bu amaçla çalışmamızın görünürlüğünü, başka kişilere erişebilmesini sürekli garanti altına almaya çalıştık. Bu en temel şeylerden biriydi. Asgari müşterekler çerçevesinde, farklılıklarımızı da göz önüne alarak, sürekli çalıştık, derinleştik. Ayrıca, yukarıda bahsettiğimiz gibi, bizden önceki deneyimlerden, özellikle BÜKOOP ve Çiftçi-SEN'in deneyimlerinden çok öğrendik. Her şeyi yaparak öğrenmek ve deneyimlerimizden ders çıkarmak önemli bir çalışma tarzımız oldu. Hatalar da yaptık, iyi şeyler de. Bunları mümkün olduğunca kayıt altına alıp birbirimize, yeni gelenlere aktarmaya çalıştık.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Özetle, her grup kendi yolunu çizmekle yükümlü. Bir çekirdek grup oluşturmak; şimdiye kadar gıda, yerel çalışma ve kooperatifçilik alanında yapılan alternatif çalışmaların oluşturduğu birikimden faydalanmak; yapılan çalışmada bir sahiplik ilişkisi kurmadan, açık, demokratik, katılımcı mekanizmalar yaratmak, bilgi hiyerarşisinin önüne geçmek ve sürekli olarak pratik içinde yer almak, bizim deneyimimiz üzerinden farklı gruplara aktarabileceğimiz temel şeyler olabilir. Rotasyon ve gönüllülük temeli bu açıdan esas alınmalıdır.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Üretici ve tüketicilerin kooperatifler aracılığıyla aracısız buluşmasını sağlayan yöntemler temiz gıdanın güvencesi olabilir mi? Neden ? Nasıl?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Temiz gıda" yeterli bir ifade değil. Üretim ve tüketim üzerinde, üretici ve tüketicilerin karşılıklı inisiyatifinin olması gerekir. Bu, bir anlamda "çıkar birliği" geliştirmektir. Bu iki farklı kesim müşterek bir zemin inşa edebilir, karşılıklı güvene dayalı bir ilişki geliştirebilirse, gıda sistemini değiştirebilir. Üretici, sağlıklı, besleyici gıda üretir; bunu adil koşullarda üretir. Tüketiciler de üreticilere hakkını verir; dolayısıyla adaletli ve halkın sağlığını, ekolojiyi esas alan bir gıda sistemi inşa edilmiş olur.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Tabi bir yandan da bu çalışmaların "gıda" ile sınırlı kalmadığını ve kalmaması gerektiğini de hatırlamak gerekir. Örneğin Kadıköy Kooperatifi'nin amaçlarından biri tüketim ilişkilerini dönüştürmek; burada gıda ön planda olsa da bizim Kooperatif Dükkanımızda farklı ihtiyaçlara yönelik ürünler de mevcut. Gıda, hijyen, giyim, ve farklı ihtiyaçlara yönelik her türlü üründe adil, nitelikli ve erişilebilir üretim-tüketim ilişkileri kurabiliriz.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ancak bir yandan da kamuoyu oluşturmak, farklı düzeylerde politikaya katılım kanallarını açmak, tabandan, demokratik ve katılımcı mekanizmalar yaratmak; bahsedilen "aracısız" ve "sağlıklı" gıda sisteminin temelini oluşturur. Çünkü endüstriyel gıda sistemi, tohumdan sofraya örgütlü, sistematik bir sistemdir. Buna karşı, tohumdan sofraya, tarım alanlarının korunması ve kullanımından çiftçinin desteklenmesine; dağıtım kanallarına ve üreticilerin sağlıklı gıdaya ucuz erişim hakkı üzerinden kamu politikaları oluşturmak zorunludur. Halk, kamu olma özelliğini geri kazanmak ve uygulamak zorundadır. En büyük güvence budur.
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <em>Kadıköy Kooperatifi gönüllüleri Özlem Işıl ve Umut Kocagöz ile yapılan söyleşi. Düzeltme ve katkılarından dolayı Selma Eroğlu'na teşekkür ederiz.</em>
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
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
              href="/yayinlar/medyada-cikanlar"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </Link>
          </div>

          {/* Scroll to Top Button */}
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

