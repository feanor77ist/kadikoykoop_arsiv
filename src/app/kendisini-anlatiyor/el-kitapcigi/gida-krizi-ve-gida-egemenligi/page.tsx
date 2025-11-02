import Link from "next/link";
import Navigation from "../../../components/Navigation";

export default function GidaKriziVeGidaEgemenligi() {
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
          <span className="text-gray-900 dark:text-white font-medium">Gıda krizi ve Gıda egemenliği</span>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            2. Gıda krizi ve Gıda egemenliği
          </h1>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Küresel Gıda Krizi
              </h2>
              <p>
                Dünya çapında 1 milyardan fazla insanın yaşadığı açlık; her gün üretilen gıdanın yaklaşık üçte bir oranında çöpe gidiyor olması; 2000li yılların ikinci yarısında kendisini gösteren ve gıdaya erişim krizi üzerinden ortaya çıkan isyanlar, gıdada bir kriz olduğu konusunda küresel durumu ifade ediyor. Gıda krizi, özellikle ekonomik ve ekolojik bir kriz olarak kendisini gösteriyor. Merkezinde gıdaya erişim/gıdanın bölüşümü hususundaki eşitsizliğin yattığı bu kriz hem küresel çapta, hem de tek tek ülkeler içerisinde kendini göstermektedir.
              </p>
              <p>
                Gıda krizi küresel/ulusaşırı şirketlerin kâr politikaları sebebiyle yaşanmaktadır. Başka bir ifadeyle, gıda sistemi üzerinde bir "şirket egemenliği" bulunmaktadır: bir ülke nüfusunun ihtiyacına göre değil, şirketlerin küresel ihtiyacına göre yapılandırılmış tarımsal üretim modelleri/monokültür (tek ürün bazlı) tarımsal sistemler; GDOlu tarımsal model; küresel çapta küçük çiftçiliğin ve köylülüğün tasfiye edilmesi ve üretimde şirketlerin egemen olması; uluslararası kurum ve kuruluşların şirket tarımcılığını desteklemesi ve yapısal uyumları dayatması, gıda sisteminin şirket egemenliği altında olduğunun ifadesidir.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Türkiye
              </h2>
              <p>
                Türkiye'deki tarımsal modelin küresel gıda sistemindeki yapılanmaya uygun olarak, özellikle OECD, IMF, Dünya Bankası, Dünya Ticaret Örgütü ve Avrupa Birliği politikalarına bağlı olarak yapılandırılmıştır. Özellikle 2002 yılından itibaren IMF uzmanları tarafından tasarlanan ve yürürlüğe konulan Tarımsal Uyum Paketi ve AB Ortak Tarım Politikası kriterlerine göre tarımsal politikalar geliştirilmesi, Türkiye'de tarımsal nüfusun düşmesi, küçük çiftçilerin tarımı terk etmesi, tarımın şirketleşmesi ve şirketlerin egemenliğine geçmesi sonuçlarını doğurdu.
              </p>
              <p>
                Küçük çiftçilerin köyü terk etmesiyle beraber esasında geleneksel köylü tarımı da ortadan kalkmaya başladı. Köylü tarımı, kuşakların geleneksel bilgisine dayanan, yerli ve geleneksel tohumlarla yapılagelen, tek tip değil çok çeşitli ürüne dayalı tarım pratiği idi. Bu tip tarımsal üretim yerine, tek tip ürüne dayalı (monokültür), şirketlerle sözleşme usulü yapılan ve küçük çiftçinin tarımı terk etmesine sebep olan bir tarımsal model yerleşti. Bu tarımsal model aynı zamanda geleneksel köylülüğün kırı terk etmesine sebep olurken, bir yandan da yeni kır girişimcilerinin ortaya çıkmasına yol açtı. Çoğunlukla kentten kıra göç eden girişimcilerden oluşan bu kesim, sağlıklı gıda üretimini mevcut pazar ihtiyaçları çerçevesinde gerçekleştirmeye de aday oldu.
              </p>
              <p>
                Tarımsal üretimin temel maddesi olan tohumun sertifikalandırılma sürecinin tarımda ciddi bir krize yol açtığı, hayvancılık politikalarının hayvancılığı endüstriyelleştirdiği ve mera hayvancılığını tasfiye ettiği, GDO'ların ciddi bir tehdit olduğunu da söylemek gerekir. Velhasıl, Türkiye tarımı toprağa erişim sorunlarından tohumun sertifikalandırılmasına, ortak varlıkların özelleştirilmesinden gıda aracılarına kadar bütünlüklü bir gıda sistemi krizi içerisindedir. Tüketim pazarında mevcut olan "organik" gıda, "doğal gıda" vb. ifadelerle tüketicilerin erişimine sunulan ürünler, bu sorunu çözmek konusunda yetersizdir.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Gıda Egemenliği
              </h2>
              <p>
                En geniş ifadesi ile gıda egemenliği, gıdanın nasıl üretileceği, kim tarafından üretileceği, kim için üretileceği, ne kadar üretileceği meselesidir. Tohumdan sofraya, tarımsal üretimin ve gıda sisteminin bütün aşamaları gıda egemenliği kapsamındadır. Bu açıdan, yukarıda ifade ettiğimiz nedenlerden kaynaklı olarak, gıda egemenliğinin büyük oranda şirketlerin eline geçtiğini söyleyebiliriz.
              </p>
              <p>
                Gıda egemenliği, son tüketiciye ulaşan gıdanın niteliğini ifade eden gıda güvenliği kavramını da içine alır. Türkiye'de gıda güvenliği de yine kâr amaçlı şirketlerin eline terk edilmiş durumdadır. Bu açıdan, Türkiye'de gıda egemenliğini tesis etmek, küçük çiftçilerin, köylülerin, gıda üreticilerinin, tüketicilerin doğrudan sorunu haline gelmiştir. Bir yandan, kamu yararını gözetecek sosyal politikalar geliştirilmesi, bir yandan da alternatif gıda sistemleri ve ağlarının kurulması ve yaygınlaştırılması; kolektif ve katılımcı bir modelin geliştirilmesi, gıda egemenliği için hayati hale gelmiştir.
              </p>
              <p>
                Üretici kooperatifleri, tüketim kooperatifleri, gıda toplulukları, topluluk destekli tarım projeleri gibi hem kentte hem de kırda küçük üreticileri ve tüketicilerin kolektif örgütlenme pratiklerinin geliştirilmesi, bu pratiklerin beraber ağlar inşa etmesi ve bu ağları yaygınlaştırması, bunun önemli bir stratejisi olarak düşünülebilir.
              </p>
              <p>
                Üreticiler açısından, özellikle ekolojik tarım yapan küçük çiftçilerin desteklenmesi; üreticilerin kooperatiflerde örgütlenmesinin teşvik edilmesi, kırda yaşanan göç sürecinin karşısında küçük çiftçinin maddi koşullarının desteklenmesinin, üretime devam edilmesinde önemli bir husus olması; özellikle çiftçilere alım garantisi verecek kooperatif örgütlenmelerinin bu konuda önemli bir rolünün olacağı söylenebilir.
              </p>
              <p>
                Gıdaya aracılar olmadan ulaşmanın hem gıda sistemini değiştirmede hem üreticiyi ekolojik/doğal yöntemlerle üretime teşvik etmede, hem de gıda fiyatlarında inisiyatif almada önemli bir rol oynayacağını söyleyebiliriz. Bu da üreten ve tüketenin karşılıklı inisiyatifine ve güvenine dayanan, üreticinin ve tüketicinin temas ettiği bir sistemin oluşmasında önemli bir açılım sunacaktır.
              </p>
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

