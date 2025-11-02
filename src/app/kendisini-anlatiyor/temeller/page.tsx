import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function Temeller() {
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
          <span className="text-gray-900 dark:text-white font-medium">Temeller</span>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Kadıköy Kooperatifinin Temelleri
          </h1>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Kadıköy Kooperatifi fikrinin temelleri Gezi direnişi sonrasında oluşan park forumları ve mahalle dayanışmaları döneminde yapılan tartışmalara dayanmaktadır. Bu açıdan kooperatif çalışması ruhunu ve karakterini "mahalle dayanışmaları" olgusundan almıştır. Kısaca özetleyecek olursak, dayanışmalardaki herkese açık olma, katılımcı olma, yatay olma, hiyerarşik olmama, mahalle ölçeğine hitap etme, yerel olma, demokratik olma, somut sorunlara somut çözümler üretmeyi hedefleme, makro ölçekteki politik sorunsallar ile zaman zaman ilişki kurma gibi bir takım nitelik, kooperatif çalışmasının da temel belirleyici özellikleri olarak en başından itibaren sahiplenilmiş ve uygulanmaya başlanmıştır. Bu açıdan kooperatif çalışması kendisini mahalle dayanışmasının bir parçası ve yeri geldiğinde devamcısı olarak da görmüştür.
            </p>

            <p>
              Mahalle dayanışmalarının zamanla zayıflaması sonucunda kooperatif çalışması bağımsız bir çalışmaya dönüşmüştü. İlk olarak Caferağa Dayanışması içerisinde bir "Organik Pazar" çalışması yapılmış, ardından diğer mahalle ve park dayanışmaları ile bu konuda iletişime geçilmiş ve de bir Kooperatif Çalışma Grubu oluşmuştu. Grup, bir kooperatif modeli üzerine çalışırken genel ilkeleri belirlemek için 1 Şubat 2014 tarihinde bir çalıştay düzenlendi. Bu çalıştay, Kadıköy'de bulunan dayanışma ve forumların katılımı ve organizasyonu ile Çiftçi Sendikaları Konfederasyonu (ÇİFTÇİ-SEN), Boğaziçi Mensupları Tüketim Kooperatifi (BÜKOOP), Tohum İzi Derneği ve Anadolu'da Yaşam Tüketim Kooperatifi (AYTK) katıldı. Yukarıda ifade ettiğimiz bu iklim bu çalıştayın hazırlığı için önemliydi.
            </p>

            <p>
              Alanda hâlihazırda deneyim biriktirmiş olan yapıların katılımıyla yapılan çalıştay, temelde bu deneyimden öğrenmek, deneyimi kendi bulunduğu bölgenin (Kadıköy'ün) özgün dinamikleri ile harmanlamak ve kendine bir model inşa etmek niyeti taşımaktaydı. Tarihi 2002'ye dayanan Anadolu'da Yaşam Tüketim Kooperatifi kendi özgünlüğünü katarak kooperatifçiliğe dair açılımlar geliştirdi. 2009 yılından beri Boğaziçi Üniversitesi Kampüsü'nde faaliyetlerini sürdüren BÜKOOP, gıda ve tarım alanında yaşanan dönüşümlere karşı neden ve nasıl bir tüketim kooperatifçiliği inşa etmek gerekliliği üzerine deneyimlerini paylaştı. 2004 yılından beri resmi sendikalaşma sürecini devam ettiren Çiftçi-SEN, tarımdaki dönüşüme karşı ekolojik tarımı savunmanın gerekliliklerini paylaştı. Tohum İzi Derneği, bu süreçte üstlendikleri kolaylaştırıcı rolü aktardı. Böylece, gelecek tahayyülümüz somut, ayakları yere basan ve yaşayan bir deneyim olarak karşımıza çıktı.
            </p>

            <p>
              Çalıştay sonrası oluşturduğumuz taslak model, kooperatif için Kadıköy (merkezi) ölçeğine uygun bir kooperatifin nasıl mümkün olacağı konusunda bir yol haritası çıkartmış oldu. Ancak modeli hayata geçirme konusunda izlenecek yol üzerine bir takım anlaşmazlıklar yaşandı. Bu anlaşmazlıklar, çalışmaların resmileşerek bir kooperatif çatısı altında devam edip etmeyeceği, o dönem canlı bir deneyim olan Caferağa Mahalle Evi ile nasıl bir ilişki kuracağı, üretici-tüketici ilişkisinde ne tür bir öncelik tesis edileceği gibi çeşitli başlıkları kapsıyordu. Dolayısıyla, ölçek, ilişki tarzı, sınırlar ve imkanları da belirleyen bir tartışmanın varlığından söz edebiliriz. Mevcut tartışmalar ve anlaşmazlıklar çalışmanın bir süre durmasına sebep oldu.
            </p>

            <p>
              Verilen bu ara sürecinde başka mecralarda kooperatifleşmeyi düşünen ve tartışan kişilerle tanışıldı. Bu yeni tanışıklıklarla, Kooperatif Çalışma Grubu içerisinde yer alan bir grup 2014 sonu ve 2015 başında yaptıkları bir takım görüşmeler sonucu kendisine Kadıköy Tüketim Kooperatifi Girişimi ismini vererek çalışmaları yeniden başlattı. Kooperatif Çalışma Grubu'nun belirlediği ilkeler gözden geçirildi, revize edildi. Sosyal medya hesapları açıldı ve kooperatif çalışmalarına devam edildiği duyurusu paylaşılmaya başlandı. Kadıköy civarındaki mahalle forumlarına duyuru yapılarak çalışmaya katılma davetinde bulunuldu. Böylece, yine forum ve dayanışmaların karakterini sahiplenen bir çalışma tarzı ile Kadıköy Tüketim Kooperatifi Girişimi yolculuğuna başlamış oldu.
            </p>

            <p>
              Bu dönemde yapılan en temel şeylerden bir tanesi girişimin kendini kamusal olarak ifade etmesi, bir diğeri de kendi sürekliliğini sağlamak amacıyla haftalık toplantılara başlaması oldu. Gelen kişi sayısına bakılmaksızın, örgütlenme ve kurumsallaşmada sürekliliğin temel önemine istinaden her hafta ilgili herkesin katılımına açık bir toplantı düzeneği oluşturuldu. Bu toplantıların açık ve ilgili herkesin katılabilir olduğu hususu özellikle sıkça ifade edildi. İlkeler üzerine yapılan tartışma ve bir takım yönelimlerin belirlenmesi dışında, bu toplantılarda teorik-politik tartışmalara çok fazla yer verilmedi. Daha çok işleyişin güçlendirilmesi, iş bölümünün organizasyonu, pratik işlerin tespit edilmesi ve pratik işlere istinaden sorumlulukların dağıtılması bu toplantıların temelini oluşturmaktaydı.
            </p>

            <p>
              Sürekli toplantı düzeninin oluşturulması, kooperatif çalışmasına ruhunu veren temel etkenlerden biri olmuştur. Herkese açık, demokratik ve katılımcı yapısı ile bu toplantılar esasında bir meclis işlevi görmüştür. Daha geniş bir bakış açısı ve teorik olarak söyleyecek olursak, Kadıköy Tüketim Kooperatifi Girişimi kendisini, Kadıköylü tüketicinin bir araya gelerek kendi tüketimi üzerine söz ve karar hakkını inşa ettiği meclisin bir nüvesi olarak inşa etmeye çabalamıştır. Tam da bu özelliği sebebiyle forum ve dayanışmaların karakterine ve ruhuna uygun bir varlık gösterdiğini söyleyebiliriz. Elbette, bu durum kendi içinde başka türde sınırlılıkları da beraberinde getirmiştir. Mahalle dayanışmalarının bu döneminde, oluşumlara belirli sayıda ve çoğunlukla sosyal pratikleri birbirine yakın kesimden kişilerin katıldığı düşünülecek olursa, kooperatif çalışması bu sınırlılık içerisinde kendi ilk çekirdeğini bulmuştur. Bu çekirdek de, kendi sınırlılığını aşmak ve kooperatif çalışmasını daha geniş kesimlere yaymak, yani örgütlenmek gibi bir zorunlulukla çalışmalarını yürütmüştür.
            </p>

            <p>
              Düzenli toplantılar, ilkeler üzerinde uzlaşılmasını ve çalışmanın kamusallaşarak bir görünüm kazanmasını beraberinde getirdi. Ancak, kooperatifçiliğin bir somut görünüm kazanması için pratik olarak ne yapılacağını göstermek gerekiyordu. Bu amaçla "sipariş paketi" olarak ifade edilen çalışma başladı. Çeşitli küçük üreticilerden, belirlenen ürünleri siparişi vermek anlamına gelen "sipariş paketi" dönemi hem üreticilerle ilişki kurmanın hem de potansiyel kooperatif ortakları ile temas etmenin bir aracı olarak düşünüldü. Bu açıdan bir tür "alışveriş grubu" formunda somut çalışmalara başlanıldı.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Sipariş Paketleri Dönemi
            </h2>

            <p>
              Kadıköy Tüketim Kooperatifi Girişimi, 5 sipariş paketi ile hem gönüllü sayısını hem de etki alanını genişletmeye çalıştı. Haftalık toplantılarda hangi ürünlerin getirileceği ve toplamda kaç paket oluşturulacağı üzerine tartışmalar yapıldı. Bu tartışmalar sürecinde en temel husus, ürün seçimi olarak düşünülebilir. Bir sipariş paketi içinde hangi ürünün yer alacağına karar vermek, tüketim kooperatifçiliğinin temeli olan "ürün tercihi" noktasında çok önemli bir yerde durmaktaydı. Bunun asli sebebi, tüketim üzerinde inisiyatif geliştirme anının, ürün-üretici tercihi noktasında açığa çıkmasıdır. Başka bir ifadeyle, tercih ettiğimiz üretici, aynı zamanda bir üretim modelinin de tercihi anlamına gelmektedir: üretici hangi tohumu kullanıyor, hangi yöntemlerle zirai mücadele uyguluyor, emek organizasyonunu nasıl yapıyor, başka üreticilerle nasıl bir ilişki kuruyor vb. türde soruların hepsi, aslında bir üreticiyi tercih ederken bir paket olarak bir üretim modelini de tercih ettiğinizi göstermektedir.
            </p>

            <p>
              Üretici tercihlerimizi yaparken bizden önce bu alanda çalışma yapmış olan BÜKOOP'un ve Çiftçi-SEN'in varlığı ve deneyimleri işimizi çok kolaylaştırdı. Bu iki inisiyatif ile ilişki kurarak onların hem üretici seçim kriterlerinden, hem mevcut üretici havuzlarından, hem de genel perspektiflerinden yararlandık. Böylece, en başta bir çalıştayda faydalandığımız bilgileri bu sefer pratikte uygulama şansımız oldu.
            </p>

            <p>
              Sipariş paketleri döneminin ikinci temel özelliği ise her seferinde sipariş hacmini büyütmemizdir. İlk sipariş paketi için 50 kişiden alınan siparişler şenlikli bir etkinlikle dağıtıldı. Birinci paketin ardından ikinci paket 100, üçüncü paket 200, dördüncü paket 300 ve beşinci paket 350 kişiye ulaştı. Böylece, 50 kişi ile başlayan serüven 350 kişiye ulaşan bir ağa dönüşmüş oldu. Bu süreçte merkezi mahallelerde apartmanlara ve çeşitli kafelere de broşür dağıtılarak duyuru çalışması yapıldı. Genişleme ve örgütlenme perspektifi, kooperatifçilik ruhuna uygun olarak dayanışmanın büyümesi ve temellerinin sağlamlaştırılması perspektifine dayanarak yapıldı. Başka bir ifadeyle, 500 bin nüfuslu Kadıköy ilçesinin merkezinde bir kooperatifçilik çalışmasının hem diğer ilçe/mahalle ölçeklerindeki çalışmalara güç vermesi, hem küçük çiftçi oluşumlarını desteklemesi, hem de adil, besleyici ve sağlıklı gıda hakkını gerçekleştirme koşulları yaratması için kendi dar-sınırlı çekirdek grubundan çıkması ve örgütlenerek toplumsallaşabilmesi fikri temel alındı. Bununla beraber, Kadıköy özelinde bir dayanışma ekonomisi kurabilmek ve toplumsal dayanışmayı güçlendirebilmek de en başından konuşulan niyetlerden, motivasyon kaynağı olan fikirlerden biriydi. Bu bakış açısı, kooperatif çalışmasının "başarıya ulaşabilmesi" için her daim örgütlenmesini ve dayanışma temelli ilişkiler inşa etmesini bir zorunluluk olarak görmeyi de beraberinde getirmiştir. Bu açıdan 50 paketten 350 pakete giden sürecin kendisi aynı zamanda kooperatif girişiminin kooperatifleşmesinin inşa edilmesi süreci olarak da düşünülebilir.
            </p>

            <p>
              Bu süreçte Kadıköy'deki temaslar güçlendirildi, kooperatif fikri olgunlaştırıldı, çeşitli etkinliklerle tartışıldı, yaygınlaştırıldı. Dolayısıyla girişim süreci, bir yandan kooperatifleşmeyi pratik olarak tecrübe etme süreci, diğer yandan da kurumsallaşmaya hazırlanma süreci olarak değerlendirilebilir. Bu hazırlık sürecinde çokça yanlışlar yapıldı, aksaklıklar yaşandı, yeni kişiler aramıza katıldı, ayrılanlar veya zaman ayıramayanlar oldu. Birlikte deneyerek, öğrenerek ve kolektif bir çalışma yöntemi geliştirerek, kurumsallaşmanın zemini inşa edilmiş oldu. Genişleyen gönüllü sayısı ve etki kapasitesi, zaten hedefte olan resmi bir kooperatif kurma sürecini de hızlandırdı. Mevcut organizasyon yapısı, alışveriş topluluğu görünümünden bir satış noktasına sahip resmi kooperatif görünümüne dönüşmeyi de peşinde getiriyordu. Çünkü, sipariş paketlerinin hacminin artması, daha fazla talebi karşılamak ve daha çok kişiye ulaşmak için daha fazla ve çeşitte ürün getirme ihtiyacını beraberinde getirdi. Bunu bir durum tespiti olarak da kavramak mümkün. Buna istinaden, 2016 Ekim ayında 7 kurucu ortakla Sınırlı Sorumlu Kadıköy Tüketim Kooperatifi'ni kurarak Kasım ayında da kiraladığımız dükkânın açılışı gerçekleştirdik. Sipariş paketlerinden kazandığımız deneyim, yolda öğrendiklerimiz ve hayallerimizle artık resmi bir kooperatif olarak çalışmalarımız başladı.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kadıköy Kooperatifi'nin Bugünü
            </h2>

            <p>
              Resmi olarak kuruluşu ve dükkan çalışmalarına başlamasıyla birlikte Kadıköy Kooperatifi -artık bugünü- diyebileceğimiz sürecin içerisine de girmiş oldu. Daha önce haftalık toplantılar, sipariş organizasyonları ve etkinlikler üzerinden yapılan çalışmaya artık her gün düzenli açılan ve ciddi organizasyonel emek ve kapasite gerektiren bir çalışma da eklendi. Bu açıdan kooperatif çalışmasının talep ettiği emeğin ciddi oranda artmış olduğu söylenebilir.
            </p>

            <p>
              Kooperatifin resmi kuruluş sürecinin öncesini de sonrasını da belirleyen temel motivasyonlardan biri, kooperatifleşme çalışmasının bir yerel özgülünde yapıldığı ve bu yerelin dinamikleri ve sınırları dahilinde gerçekleştiğidir. Kadıköy Kooperatifi bağlamında bu yerel tarihi Kadıköy ilçe merkezini ifade eden bölge, daha özelde ise Caferağa mahallesidir. Dolayısıyla, Kadıköy Kooperatifi'nin ismi de en başından beri kendi yereline özgülenmiş, mekânsal bir sınır çizilmiş ve bu mekânsallığa bağlı bir perspektif ve anlatı inşa edilmiştir.
            </p>

            <p>
              Bunun yanında, daha önce Gezi'den gelen bir takım karakteristik özellikler olarak sıraladığımız ve ilkesel düzeyde önem taşıyan bir dizi ilke de kooperatifin yol alma sürecinde belirleyici olmuştur. 1844'den bugüne uzanan, düzenlemelerle benimsenmiş; gönüllü ve herkese açık üyelik, üyeler tarafından gerçekleştirilen demokratik denetim, üyelerin ekonomik katılımı, özerklik ve bağımsızlık, eğitim, öğrenim ve bilgilendirme, kooperatifler arasında işbirliği, topluma karşı sorumlu olmak gibi, İngiltere'nin Rochdale kasabasındaki 28 dokuma işçisinin öncüsü olup hazırladığı ve Uluslararası Kooperatifler Birliği (ICA)'nın 1995'te yeniden düzenlediği bu uluslararası kooperatifçilik ilkelerinin Kadıköy Kooperatifi için de yer yer açık yer yer örtük bir şekilde benimsendiği söylenebilir.
            </p>

            <p className="font-medium text-gray-800 dark:text-gray-200">
              Açık, katılımcı, demokratik, yatay ve patronsuz yapısıyla Kadıköy Kooperatifi, ilkelerini ve çalışma biçimini benimseyen herkesi içine katmayı amaçlayan, kolektif ve toplumsal bir örgütlenme modeli inşa etmeyi amaçlamaktadır.
            </p>
          </div>
        </article>

        {/* Back Button */}
        <div className="mt-8 sm:mt-12">
          <Link
            href="/kendisini-anlatiyor"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kadıköy Kooperatifi Kendisini Anlatıyor Bölümüne Dön
          </Link>
        </div>
      </main>
    </div>
  );
}
