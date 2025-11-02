import Link from "next/link";
import Navigation from "../../../components/Navigation";

export default function KadikoyKooperatifi() {
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
          <span className="text-gray-900 dark:text-white font-medium">Kadıköy Kooperatifi</span>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            3. Kadıköy Kooperatifi
          </h1>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Kadıköy Kooperatifi, İstanbul'un Kadıköy ilçesinde bir kooperatif kurma fikriyle yan yana gelmiş kişilerin oluşturduğu bir inisiyatif olarak 2014 yılında çalışmalarına başladı. Kasım 2016 yılında tüketim kooperatifi tüzel kişiliğini aldı ve ilk kooperatif dükkanını açtı.
            </p>

            <p>
              Kooperatif, son rakamlara göre yaklaşık 500bin nüfuslu büyük bir ilçe olan Kadıköy'de çalışmalarını yürütür. Çalışmalarını tarihi Kadıköy merkezi içerisinde başlatmış olsa da bu bölge ile sınırlamaz. Bu açıdan "yerel" bir kooperatif olarak tanımlanabilir. Ortaklarının ilçe temelli olması tercih edilmekle birlikte farklı ilçelerden katılımlara da açıktır. Ancak çalışmalar Kadıköy temelli, bu ilçeye yönelik gerçekleşir.
            </p>

            <p>
              Diğer yandan farklı kooperatifler, küçük üretici örgütleri ve toplumsal hareketler ile kurduğu ilişkiler dolayısıyla Kadıköy Kooperatifi; ilçesini aşan, ulusal ve uluslararası çaptaki toplumsal hareketlerin de bir parçası olarak konumlanmaktadır. Farklı ilçelerde, farklı yerel birimlerde kooperatif çalışmalarının gelişmesi ve yaygınlaşmasını destekler, maddi destekte ve/veya tecrübe paylaşımında bulunmayı hedefler.
            </p>

            <p>
              Özetle, kooperatif, bir yasal model olarak kooperatif ortaklarının haklarını korur; ticari faaliyetlerde, özellikle büyük ölçekli alışveriş pratiklerinde yasal çerçevenin bağlayıcı hükümlerini kendisine bir koruma kalkanı olarak alır, emek gaspının önüne geçmeyi hedefler. Bunun dışında, kooperatif modelinin tarihsel, meşru, kolektif yapısı, kooperatif çalışmasının temel özelliği olarak düşünülmelidir.
            </p>

            <div className="border-l-4 border-blue-500 pl-4 my-6">
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                ***
              </p>
            </div>

            <p>
              Kadıköy Kooperatifi fikrinin temelleri, Gezi direnişi sonrasında oluşan park, mahalle, üniversite ve iş yeri forum ve dayanışmaları döneminde yapılan tartışmalarda ortaya çıktı. Forum ve Dayanışmalar'ın geri çekilmesi sonrasında bağımsızlaşan kooperatif çalışmasının tarihini 5 aşamada inceleyebiliriz.
            </p>

            <div className="space-y-6 mt-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  a) Mahalle Dayanışmaları Dönemi
                </h2>
                <p>
                  Gezi direnişi ardından Kadıköy'de oluşan mahalle dayanışmalarından biri olan Caferağa Dayanışması içerisinde bir "Organik Pazar" çalışması yapılmış, tartışmanın Kadıköy'de mevcut olan diğer mahalle ve park dayanışmalarına da iletilmesi ve Kadıköy'de bir kooperatif çalışmasının mümkün olup olmayacağının birlikte değerlendirilmesi önerisi geliştirilmişti. Bunun üzerine Caferağa Dayanışması, diğer mahalle ve park dayanışmaları ile iletişime geçti.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  b) Kooperatif Çalışma Grubu
                </h2>
                <p>
                  Kooperatif çalışmasını koordine etmek üzere bir çalışma grubu oluşturuldu. Kooperatif Çalışma Grubu bir yandan bir kooperatif modeli üzerine çalışırken diğer yandan da genel ilkeler ve prensipleri ortaya çıkarmak için bir çalıştay düzenlemeye karar verdi.
                </p>
                <p>
                  Kadıköy'de bulunan dayanışma ve forumlarının katılımı ve organizasyonu ile Çiftçi Sendikaları Konfederasyonu (ÇİFTÇİ-SEN), Boğaziçi Mensupları Tüketim Kooperatifi (BÜKOOP), Tohum İzi Derneği ve Anadolu'da Yaşam Kooperatifi'nin katılımı ile 1 Şubat 2014'de bir çalıştay düzenlendi.
                </p>
                <p>
                  Çalıştay hem görsel hem de yazılı olarak kayıt altına alındı. Ardından yazılı tutanağın özetlenmesiyle çalıştay tartışmalarından hareketle oluşturulan temel ilkeler üzerine ilk kooperatif taslağı ortaya çıktı. Çalışma grubu Kooperatif Model Taslağı çalışması yaptı.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  c) Ara
                </h2>
                <p>
                  Forum ve Dayanışmaların geri çekilme sürecinde Caferağa Dayanışması içinde yaşanan bir takım sorunlar Kooperatif Çalışma Grubu içerisinde de ortaya çıktı. Bunun üzerine kooperatif çalışması bir süreliğine durmuş oldu.
                </p>
                <p>
                  2014 sonbaharında Kooperatif çalışmasının başlaması için bir grup yeniden bir araya geldi. Dayanışmalarda Kazova Kooperatifi'nin üretime başlaması için önden kazak siparişi çalışması yapıldı. Geçmiş dokümanlar yeni katılımcılarla paylaşıldı, ancak birkaç toplantı sonrasında çalışmalar tekrar durdu.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  d) Sipariş Paketleri Dönemi
                </h2>
                <p>
                  2015 yılı başında, kooperatif çalışmasının başından beri içinde olan kişilere yeni kişilerin katılımı ile kooperatif tartışması ve pratik çalışması süreci yeniden başladı. Temel metinler ve çalıştay tutanakları herkesle paylaşıldı. Bir yandan teorik tartışma yürürken diğer yandan pratik çalışma için ilk adım atıldı. Kooperatifleşme çabasının ismi "Kadıköy Tüketim Kooperatifi Girişimi" olarak belirlendi. Sosyal medya hesapları açıldı.
                </p>
                <p>
                  Pratikte bir kooperatifin nasıl çalıştığını anlayabilmek amacıyla birden fazla üründen oluşan paketlerin hazırlanmasına ve kooperatif gönüllülerinin kendi çevreleri ile mevcut dayanışma kanalları üzerinden tüketicilere ulaştırılması kararlaştırıldı. İlk paket için 50 kişi hedeflenerek çalışma başlatıldı. Ürünlerin seçilmesi, nakliyesi, mali işler ve tüketici ile ilişkilerin sorumluluğu, gönüllülerden oluşan paket çalışma grubu tarafından üstlenildi. Bu süreçte BÜKOOP ve Anadolu'da Yaşam Kooperatifi gibi mevcut kooperatifler ihtiyaç halinde deneyim aktarımı yaparak dayanışma gösterdiler.
                </p>
                <p>
                  Birinci paket 50, ikinci paket 100, üçüncü paket 200, dördüncü paket 300 ve beşinci paket 350 kişiyi hedefledi. Her sipariş paketinde hedef biraz daha büyütülerek daha geniş çevrelere ulaşılması sağlandı. 5. paket sonunda, kooperatifin girişim olmaktan çıkması, resmi bir hüviyete kavuşması kararı verildi. 15 Ağustos ayında ilk kooperatif dükkanı tutuldu, 6 Kasım itibariyle Kooperatif Dükkanı çalışmaya başladı.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  e) Kooperatif Dükkanı
                </h2>
                <p>
                  2016 Kasım ayı itibari ile Kadıköy Kooperatifi resmi olarak kurulmuş, çalışmalarını "sipariş paketi" tarzından çıkararak kalıcı bir mekanda satış modeline geçmiştir. Kooperatif Dükkanı, Kadıköy Kooperatifi ortakları ve gönüllülerinin emekleriyle çalışan, nöbet çizelgesine dayalı olarak işleyen, ürün satışı yapılan mekandır.
                </p>
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

