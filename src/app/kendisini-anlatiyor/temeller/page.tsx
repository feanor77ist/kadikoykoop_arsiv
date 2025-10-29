import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function Bolum2B() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kendisini-anlatiyor" className="hover:text-blue-600 dark:hover:text-blue-400">Kendisini Anlatıyor</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Temeller</span>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kadıköy Kooperatifinin Temelleri
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Kooperatifin kuruluş hikayesi ve temel değerleri
            </p>
          </div>

          {/* Giriş */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kadıköy Kooperatifi fikrinin temelleri Gezi direnişi sonrasında oluşan park forumları ve mahalle dayanışmaları döneminde yapılan tartışmalara dayanmaktadır. Bu açıdan kooperatif çalışması ruhunu ve karakterini "mahalle dayanışmaları" olgusundan almıştır. Kısaca özetleyecek olursak, dayanışmalardaki herkese açık olma, katılımcı olma, yatay olma, hiyerarşik olmama, mahalle ölçeğine hitap etme, yerel olma, demokratik olma, somut sorunlara somut çözümler üretmeyi hedefleme, makro ölçekteki politik sorunsallar ile zaman zaman ilişki kurma gibi bir takım nitelik, kooperatif çalışmasının da temel belirleyici özellikleri olarak en başından itibaren sahiplenilmiş ve uygulanmaya başlanmıştır. Bu açıdan kooperatif çalışması kendisini mahalle dayanışmasının bir parçası ve yeri geldiğinde devamcısı olarak da görmüştür.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Mahalle dayanışmalarının zamanla zayıflaması sonucunda kooperatif çalışması bağımsız bir çalışmaya dönüşmüştü. İlk olarak Caferağa Dayanışması içerisinde bir "Organik Pazar" çalışması yapılmış, ardından diğer mahalle ve park dayanışmaları ile bu konuda iletişime geçilmiş ve de bir Kooperatif Çalışma Grubu oluşmuştu. Grup, bir kooperatif modeli üzerine çalışırken genel ilkeleri belirlemek için 1 Şubat 2014 tarihinde bir çalıştay düzenlendi. Bu çalıştay, Kadıköy'de bulunan dayanışma ve forumların katılımı ve organizasyonu ile Çiftçi Sendikaları Konfederasyonu (ÇİFTÇİ-SEN), Boğaziçi Mensupları Tüketim Kooperatifi (BÜKOOP), Tohum İzi Derneği ve Anadolu'da Yaşam Tüketim Kooperatifi (AYTK) katıldı. Yukarıda ifade ettiğimiz bu iklim bu çalıştayın hazırlığı için önemliydi.
            </p>
          </div>

          {/* İlk Çalıştay */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              İlk Çalıştay ve Model Oluşumu
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Alanda hâlihazırda deneyim biriktirmiş olan yapıların katılımıyla yapılan çalıştay, temelde bu deneyimden öğrenmek, deneyimi kendi bulunduğu bölgenin (Kadıköy'ün) özgün dinamikleri ile harmanlamak ve kendine bir model inşa etmek niyeti taşımaktaydı. Tarihi 2002'ye dayanan Anadolu'da Yaşam Tüketim Kooperatifi kendi özgünlüğünü katarak kooperatifçiliğe dair açılımlar geliştirdi. 2009 yılından beri Boğaziçi Üniversitesi Kampüsü'nde faaliyetlerini sürdüren BÜKOOP, gıda ve tarım alanında yaşanan dönüşümlere karşı neden ve nasıl bir tüketim kooperatifçiliği inşa etmek gerekliliği üzerine deneyimlerini paylaştı. 2004 yılından beri resmi sendikalaşma sürecini devam ettiren Çiftçi-SEN, tarımdaki dönüşüme karşı ekolojik tarımı savunmanın gerekliliklerini paylaştı. Tohum İzi Derneği, bu süreçte üstlendikleri kolaylaştırıcı rolü aktardı. Böylece, gelecek tahayyülümüz somut, ayakları yere basan ve yaşayan bir deneyim olarak karşımıza çıktı.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Çalıştay sonrası oluşturduğumuz taslak model, kooperatif için Kadıköy (merkezi) ölçeğine uygun bir kooperatifin nasıl mümkün olacağı konusunda bir yol haritası çıkartmış oldu. Ancak modeli hayata geçirme konusunda izlenecek yol üzerine bir takım anlaşmazlıklar yaşandı. Bu anlaşmazlıklar, çalışmaların resmileşerek bir kooperatif çatısı altında devam edip etmeyeceği, o dönem canlı bir deneyim olan Caferağa Mahalle Evi ile nasıl bir ilişki kuracağı, üretici-tüketici ilişkisinde ne tür bir öncelik tesis edileceği gibi çeşitli başlıkları kapsıyordu. Dolayısıyla, ölçek, ilişki tarzı, sınırlar ve imkanları da belirleyen bir tartışmanın varlığından söz edebiliriz. Mevcut tartışmalar ve anlaşmazlıklar çalışmanın bir süre durmasına sebep oldu.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Verilen bu ara sürecinde başka mecralarda kooperatifleşmeyi düşünen ve tartışan kişilerle tanışıldı. Bu yeni tanışıklıklarla, Kooperatif Çalışma Grubu içerisinde yer alan bir grup 2014 sonu ve 2015 başında yaptıkları bir takım görüşmeler sonucu kendisine Kadıköy Tüketim Kooperatifi Girişimi ismini vererek çalışmaları yeniden başlattı. Kooperatif Çalışma Grubu'nun belirlediği ilkeler gözden geçirildi, revize edildi. Sosyal medya hesapları açıldı ve kooperatif çalışmalarına devam edildiği duyurusu paylaşılmaya başlandı. Kadıköy civarındaki mahalle forumlarına duyuru yapılarak çalışmaya katılma davetinde bulunuldu. Böylece, yine forum ve dayanışmaların karakterini sahiplenen bir çalışma tarzı ile Kadıköy Tüketim Kooperatifi Girişimi yolculuğuna başlamış oldu.
            </p>
          </div>

          {/* Haftalık Toplantılar */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Haftalık Toplantılar ve Meclis Karakteri
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bu dönemde yapılan en temel şeylerden bir tanesi girişimin kendini kamusal olarak ifade etmesi, bir diğeri de kendi sürekliliğini sağlamak amacıyla haftalık toplantılara başlaması oldu. Gelen kişi sayısına bakılmaksızın, örgütlenme ve kurumsallaşmada sürekliliğin temel önemine istinaden her hafta ilgili herkesin katılımına açık bir toplantı düzeneği oluşturuldu. Bu toplantıların açık ve ilgili herkesin katılabilir olduğu hususu özellikle sıkça ifade edildi. İlkeler üzerine yapılan tartışma ve bir takım yönelimlerin belirlenmesi dışında, bu toplantılarda teorik-politik tartışmalara çok fazla yer verilmedi. Daha çok işleyişin güçlendirilmesi, iş bölümünün organizasyonu, pratik işlerin tespit edilmesi ve pratik işlere istinaden sorumlulukların dağıtılması bu toplantıların temelini oluşturmaktaydı.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sürekli toplantı düzeninin oluşturulması, kooperatif çalışmasına ruhunu veren temel etkenlerden biri olmuştur. Herkese açık, demokratik ve katılımcı yapısı ile bu toplantılar esasında bir meclis işlevi görmüştür. Daha geniş bir bakış açısı ve teorik olarak söyleyecek olursak, Kadıköy Tüketim Kooperatifi Girişimi kendisini, Kadıköylü tüketicinin bir araya gelerek kendi tüketimi üzerine söz ve karar hakkını inşa ettiği meclisin bir nüvesi olarak inşa etmeye çabalamıştır. Tam da bu özelliği sebebiyle forum ve dayanışmaların karakterine ve ruhuna uygun bir varlık gösterdiğini söyleyebiliriz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Elbette, bu durum kendi içinde başka türde sınırlılıkları da beraberinde getirmiştir. Mahalle dayanışmalarının bu döneminde, oluşumlara belirli sayıda ve çoğunlukla sosyal pratikleri birbirine yakın kesimden kişilerin katıldığı düşünülecek olursa, kooperatif çalışması bu sınırlılık içerisinde kendi ilk çekirdeğini bulmuştur. Bu çekirdek de, kendi sınırlılığını aşmak ve kooperatif çalışmasını daha geniş kesimlere yaymak, yani örgütlenmek gibi bir zorunlulukla çalışmalarını yürütmüştür.
            </p>
          </div>

          {/* Sipariş Paketleri Dönemi */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-8 border border-yellow-200 dark:border-yellow-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Sipariş Paketleri Dönemi
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Düzenli toplantılar, ilkeler üzerinde uzlaşılmasını ve çalışmanın kamusallaşarak bir görünüm kazanmasını beraberinde getirdi. Ancak, kooperatifçiliğin bir somut görünüm kazanması için pratik olarak ne yapılacağını göstermek gerekiyordu. Bu amaçla "sipariş paketi" olarak ifade edilen çalışma başladı. Çeşitli küçük üreticilerden, belirlenen ürünleri siparişi vermek anlamına gelen "sipariş paketi" dönemi hem üreticilerle ilişki kurmanın hem de potansiyel kooperatif ortakları ile temas etmenin bir aracı olarak düşünüldü. Bu açıdan bir tür "alışveriş grubu" formunda somut çalışmalara başlanıldı.
            </p>

            <div className="bg-white/50 dark:bg-gray-900/50 rounded-lg p-6 mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Genişleme Süreci
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Kadıköy Tüketim Kooperatifi Girişimi, 5 sipariş paketi ile hem gönüllü sayısını hem de etki alanını genişletmeye çalıştı:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>1. Paket:</strong> 50 kişi - şenlikli etkinlikle dağıtıldı</li>
                <li><strong>2. Paket:</strong> 100 kişi</li>
                <li><strong>3. Paket:</strong> 200 kişi</li>
                <li><strong>4. Paket:</strong> 300 kişi</li>
                <li><strong>5. Paket:</strong> 350 kişi</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Haftalık toplantılarda hangi ürünlerin getirileceği ve toplamda kaç paket oluşturulacağı üzerine tartışmalar yapıldı. Bu tartışmalar sürecinde en temel husus, ürün seçimi olarak düşünülebilir. Bir sipariş paketi içinde hangi ürünün yer alacağına karar vermek, tüketim kooperatifçiliğinin temeli olan "ürün tercihi" noktasında çok önemli bir yerde durmaktaydı. Bunun asli sebebi, tüketim üzerinde inisiyatif geliştirme anının, ürün-üretici tercihi noktasında açığa çıkmasıdır. Başka bir ifadeyle, tercih ettiğimiz üretici, aynı zamanda bir üretim modelinin de tercihi anlamına gelmektedir: üretici hangi tohumu kullanıyor, hangi yöntemlerle zirai mücadele uyguluyor, emek organizasyonunu nasıl yapıyor, başka üreticilerle nasıl bir ilişki kuruyor vb. türde soruların hepsi, aslında bir üreticiyi tercih ederken bir paket olarak bir üretim modelini de tercih ettiğinizi göstermektedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Üretici tercihlerimizi yaparken bizden önce bu alanda çalışma yapmış olan BÜKOOP'un ve Çiftçi-SEN'in varlığı ve deneyimleri işimizi çok kolaylaştırdı. Bu iki inisiyatif ile ilişki kurarak onların hem üretici seçim kriterlerinden, hem mevcut üretici havuzlarından, hem de genel perspektiflerinden yararlandık. Böylece, en başta bir çalıştayda faydalandığımız bilgileri bu sefer pratikte uygulama şansımız oldu.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Genişleme ve örgütlenme perspektifi, kooperatifçilik ruhuna uygun olarak dayanışmanın büyümesi ve temellerinin sağlamlaştırılması perspektifine dayanarak yapıldı. Başka bir ifadeyle, 500 bin nüfuslu Kadıköy ilçesinin merkezinde bir kooperatifçilik çalışmasının hem diğer ilçe/mahalle ölçeklerindeki çalışmalara güç vermesi, hem küçük çiftçi oluşumlarını desteklemesi, hem de adil, besleyici ve sağlıklı gıda hakkını gerçekleştirme koşulları yaratması için kendi dar-sınırlı çekirdek grubundan çıkması ve örgütlenerek toplumsallaşabilmesi fikri temel alındı.
            </p>
          </div>

          {/* Kurumsallaşma */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Resmi Kuruluş ve Kurumsallaşma
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bu süreçte Kadıköy'deki temaslar güçlendirildi, kooperatif fikri olgunlaştırıldı, çeşitli etkinliklerle tartışıldı, yaygınlaştırıldı. Dolayısıyla girişim süreci, bir yandan kooperatifleşmeyi pratik olarak tecrübe etme süreci, diğer yandan da kurumsallaşmaya hazırlanma süreci olarak değerlendirilebilir. Bu hazırlık sürecinde çokça yanlışlar yapıldı, aksaklıklar yaşandı, yeni kişiler aramıza katıldı, ayrılanlar veya zaman ayıramayanlar oldu. Birlikte deneyerek, öğrenerek ve kolektif bir çalışma yöntemi geliştirerek, kurumsallaşmanın zemini inşa edilmiş oldu.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Genişleyen gönüllü sayısı ve etki kapasitesi, zaten hedefte olan resmi bir kooperatif kurma sürecini de hızlandırdı. Mevcut organizasyon yapısı, alışveriş topluluğu görünümünden bir satış noktasına sahip resmi kooperatif görünümüne dönüşmeyi de peşinde getiriyordu. Çünkü, sipariş paketlerinin hacminin artması, daha fazla talebi karşılamak ve daha çok kişiye ulaşmak için daha fazla ve çeşitte ürün getirme ihtiyacını beraberinde getirdi.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                <strong>2016 Ekim:</strong> 7 kurucu ortakla Sınırlı Sorumlu Kadıköy Tüketim Kooperatifi'ni kurduk<br/>
                <strong>2016 Kasım:</strong> Kiraladığımız dükkânın açılışını gerçekleştirdik
              </p>
            </div>
          </div>

          {/* Kadıköy Kooperatifi'nin Bugünü */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Kadıköy Kooperatifi'nin Bugünü
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Resmi olarak kuruluşu ve dükkan çalışmalarına başlamasıyla birlikte Kadıköy Kooperatifi -artık bugünü- diyebileceğimiz sürecin içerisine de girmiş oldu. Daha önce haftalık toplantılar, sipariş organizasyonları ve etkinlikler üzerinden yapılan çalışmaya artık her gün düzenli açılan ve ciddi organizasyonel emek ve kapasite gerektiren bir çalışma da eklendi. Bu açıdan kooperatif çalışmasının talep ettiği emeğin ciddi oranda artmış olduğu söylenebilir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kooperatifin resmi kuruluş sürecinin öncesini de sonrasını da belirleyen temel motivasyonlardan biri, kooperatifleşme çalışmasının bir yerel özgülünde yapıldığı ve bu yerelin dinamikleri ve sınırları dahilinde gerçekleştiğidir. Kadıköy Kooperatifi bağlamında bu yerel tarihi Kadıköy ilçe merkezini ifade eden bölge, daha özelde ise Caferağa mahallesidir. Dolayısıyla, Kadıköy Kooperatifi'nin ismi de en başından beri kendi yereline özgülenmiş, mekânsal bir sınır çizilmiş ve bu mekânsallığa bağlı bir perspektif ve anlatı inşa edilmiştir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bunun yanında, daha önce Gezi'den gelen bir takım karakteristik özellikler olarak sıraladığımız ve ilkesel düzeyde önem taşıyan bir dizi ilke de kooperatifin yol alma sürecinde belirleyici olmuştur. 1844'den bugüne uzanan, düzenlemelerle benimsenmiş; gönüllü ve herkese açık üyelik, üyeler tarafından gerçekleştirilen demokratik denetim, üyelerin ekonomik katılımı, özerklik ve bağımsızlık, eğitim, öğrenim ve bilgilendirme, kooperatifler arasında işbirliği, topluma karşı sorumlu olmak gibi, İngiltere'nin Rochdale kasabasındaki 28 dokuma işçisinin öncüsü olup hazırladığı ve Uluslararası Kooperatifler Birliği (ICA)'nın 1995'te yeniden düzenlediği bu uluslararası kooperatifçilik ilkelerinin Kadıköy Kooperatifi için de yer yer açık yer yer örtük bir şekilde benimsendiği söylenebilir.
            </p>
          </div>

          {/* Sonuç */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
              Açık, katılımcı, demokratik, yatay ve patronsuz yapısıyla Kadıköy Kooperatifi, ilkelerini ve çalışma biçimini benimseyen herkesi içine katmayı amaçlayan, kolektif ve toplumsal bir örgütlenme modeli inşa etmeyi amaçlamaktadır.
            </p>
          </div>

          <Link 
            href="/kendisini-anlatiyor" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline mt-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Geri Dön
          </Link>
        </article>
      </main>
    </div>
  );
}

