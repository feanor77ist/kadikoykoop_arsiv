import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function Bolum2C() {
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
          <span className="text-gray-900 dark:text-white font-medium">Genel Perspektif ve Temel İlkeler</span>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Genel Perspektif ve Temel İlkeler
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Nisan 2017
            </p>
          </div>

          {/* Genel Perspektif */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              A- Kadıköy Kooperatifi'nin Genel Perspektifi
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kadıköy Kooperatifi, üretim, dağıtım, paylaşım ve tüketim ilişkilerinin beraber karar alma, beraber çalışma ve uygulama ilkesiyle gerçekleştirdiği bir örgütlenmedir. Kooperatif ortakları ve gönüllüleri, kooperatif çalışması süresince emeklerini ortaklaştırır ve çalışma alanı üzerinden hayatı beraber üretir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kooperatif'in temel felsefesi beraber çalışma, kararları ve uygulamayı ortaklaştırma, ve dayanışmadır. Kooperatif, kolektif çalışma, ortak karar verme ve dayanışma ilişkilerinin gelişmesi için çalışmalarını sürdürür.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kooperatif en temelde gündelik hayattaki temel ihtiyaçları karşılamak için çalışır. Dünya çapında uzun yıllardır güçlü bir dayanışma ekonomileri ve kooperatifçilik geleneği mevcuttur. Kadıköy Kooperatifi, benzer kooperatif, dernek ve kurumların oluşturduğu dayanışmacı ekonomi ağları ve örgütlerinin benimsediği hiyerarşik olmayan yatay ilişkileri, kooperatif örgütlenmesi ile oluşturmayı hedefler.
            </p>
          </div>

          {/* Temel İlkeler */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              B- Temel İlkeler
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Kadıköy Kooperatifi, beraber çalışmak amacıyla birtakım ilkeleri benimsemektedir. Bu ilkeler, kooperatifin oluşmasını amaçladığı toplumsal ilişkileri de ifade etmektedir.
            </p>
          </div>

          {/* İlke 1 */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border-l-4 border-green-500 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white font-bold text-xl">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Küçük Üreticiyle Aracısız Çalışmak
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Bütün tüketim ürünlerini, küçük ölçekli üretim yapan, kolektif örgütlenmiş (kooperatifler, vakıflar, dernekler, sendikalar vb.) veya örgütlenme girişimi içerisinde olan üreticilerden, aracısız olarak almayı hedefler.
                </p>
              </div>
            </div>
          </div>

          {/* İlke 2 */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border-l-4 border-blue-500 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl">
                  2
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Üretim ve Tüketim Üzerinde Karşılıklı İnisiyatif
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Üretim ve tüketim süreçlerini birbirine bağlayabilmek için üreticilerin ve ürünleri kullananların karşılıklı diyalog içinde olmasını sağlayacak mekanizmalar geliştirmeye çalışır. Böylece üreticinin neyi, nasıl, ne kadar üreteceğine bu ürünleri kullananlarla beraber karar verilmesinde rol almayı amaçlar.
                </p>
              </div>
            </div>
          </div>

          {/* İlke 3 */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-8 border-l-4 border-purple-500 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white font-bold text-xl">
                  3
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Kolektif Çalışma ve Paylaşım
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Kooperatif, bir araya gelmiş tüketicilerden ziyade, birlikte karar alan, çalışan ve paylaşım ilişkilerini geliştirmeyi hedefleyen bir örgütlenmedir. Tüm karar alma süreçlerinin denetlenebilir, şeffaf ve katılımcı bir çerçevede işlemesi hedeflenir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Kolektif çalışmanın gelişmesi ve ortakların ve gönüllülerin çalışmalara eşit bir şekilde katılabilmesi için eğitimler düzenler; kendisini yenileyebilecek öğrenme ve aktarım mekanizmaları geliştirir.
                </p>
              </div>
            </div>
          </div>

          {/* İlke 4 */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-8 border-l-4 border-yellow-500 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-white font-bold text-xl">
                  4
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Ekolojik-Toplumsal İlişkiler
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Üretim ve tüketim ilişkilerinde toplumsal faydayı esas alan, doğa ile dost/ekolojik bir çerçeveyi destekler. Bu açıdan, ürün seçiminde ve ürünlerin kullanıcılara ulaştırılma biçimlerinde ekolojik koşulları sağlayan ve kolektif faydayı esas alan ürünler tercih edilir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Emeğin ve doğanın savunulması ve korunmasını destekler. Yerel üretimi, yerinde tüketimi destekler. Sağlıklı ve nitelikli ürünlere herkesin erişebilmesini savunur.
                </p>
              </div>
            </div>
          </div>

          {/* İlke 5 */}
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-8 border-l-4 border-red-500 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold text-xl">
                  5
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Toplumsal Dayanışma
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Kadıköy Kooperatifi, uluslararası kooperatifçilik ilkelerini takip ederek, başta çeşitli kooperatifler, dayanışma ekonomisi temelli topluluklar ve kooperasyon ilişkilerini geliştiren topluluklarla beraber çalışmayı; kooperatifçiliği toplumsal temelde yaygınlaştırmayı amaçlar.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Bunun yanında, imkanları dahilinde afetzedelerle toplumsal dayanışmayı geliştirmeyi, hak arayışı mücadelelerine maddi veya manevi destek sağlamayı amaçlar.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Kooperatif kâr amacı gütmez, ortaklarına kâr payı dağıtmaz. Kendini sürdürebilecek, toplumsal faydayı esas alan pratikler icra eder. Kooperatifin büyümesi ve gelişmesi, dayanışma pratiğinin geliştirilmesi için öncelik teşkil eder.
                </p>
              </div>
            </div>
          </div>

          {/* Özet */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Bu beş temel ilke, Kadıköy Kooperatifi'nin çalışma prensiplerini ve toplumsal dayanışma hedeflerini ortaya koymaktadır. Kooperatif, bu ilkeler doğrultusunda hem üreticilerle hem de tüketicilerle eşitlikçi, şeffaf ve dayanışma temelli ilişkiler kurmayı amaçlamaktadır.
              </p>
            </div>
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

