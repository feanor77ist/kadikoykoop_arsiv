"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function GidaHakki() {
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
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/dusunduklerimiz" className="hover:text-blue-600 dark:hover:text-blue-400">Üzerine Düşündüklerimiz</Link>
            <span>/</span>
            <Link href="/dusunduklerimiz/kavramlar-sozlugu" className="hover:text-blue-600 dark:hover:text-blue-400">Kavramlar Sözlüğü</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Gıda Hakkı</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Gıda Hakkı
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kişi hakları iki ana hak kategorisinden oluşur.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Kişinin temel haklarından (yani, her insanın sırf insan olduğu için sahip olduğu haklardan)</li>
              <li>Yurttaşlık haklarından (yani, kişinin bir devletin yurttaşı olmasından dolayı, belirli bir devlet tarafından kişiye tanınan ekonomik, sosyal, siyasal haklardan)</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              İlk kategori için; Yaşam hakkı, düşünce hakkı bu tür haklardır. Bu haklara "doğrudan korunan" temel haklar denir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              İkinci kısmı, kişilerin insan olarak olanaklarını geliştirebilmelerinin önkoşullarıyla ilgili istemlerdir: sağlık hakkı, eğitim hakkı, çalışma hakkı gibi. Bu haklar da, her kişinin sırf insan olduğu için sahip olduğu haklardır; ama ilk grup haklara göre özellikleri şudur: bu haklar ancak dolaylı olarak, yani bir ülkede kişilere devletçe tanınan sosyal, ekonomik, siyasal haklar aracılığıyla ve çeşitli kamu kurum ve kuruluşları aracılığıyla korunabilen haklardır. Gıda hakkı da bu kategoridedir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Gıda Hakkı tanınma süreci:
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>ilk kez 1924 yılındaki Çocuk hakları bildirgesi ile girmiştir</li>
              <li>1948 İnsan Hakları Evrensel Beyannamesinde ise beslenme hakkı hem bireyin kendisi için hem de ailesi için isteyebileceği bir hak olarak belirtilmiştir.</li>
              <li>1976 Ocak tarihinde yürürlüğe giren beslenme hakkının korunmasına ilişkin en etkin ilke ise BM Ekonomik, Sosyal ve Kültürel Haklar Sözleşmesi'dir.</li>
              <li>1974 BM Açlık ve Sefaletin Ortadan Kaldırılmasına dair Evrensel Bildirgesi.</li>
              <li>1981 Anne Sütü Muadillerinin Pazarlanmasıyla İlgili Uluslararası Yasası.</li>
              <li>1986 Kalkınma Hakkı Bildirgesi'nin 8. Maddesi.</li>
              <li>1989 Çocuk Haklarına Dair Sözleşmesinde.</li>
              <li>1990 Çocukların Yaşatılmaları, Korunmaları ve Geliştirilmelerine Yönelik Dünya Bildirgesi ve Eylem Planı'nda, gıda hakkına ilişkin hükümlerde.</li>
              <li>1992 yılında gerçekleştirilen Uluslararası Beslenme Konferansında</li>
              <li>1996 yılında gerçekleştirilen Dünya Gıda Zirvesi'nde, gıda hakkı kararı alındı. 1996 yılında yapılan Birleşmiş milletler gıda zirvesinde herkesin gıdaya ulaşmasının insan hakkı olduğu dile getirilmiş.</li>
              <li>2004 yılında gıda yönergesi Birleşmiş Milletler Gıda ve Tarım Teşkilatı (FAO) konseyi tarafından kabul edilmiştir.</li>
              <li>BM Gıda ve Tarım Teşkilatı (FAO) her yıl kutlanan gıda gününü 2007 yılında gıda hakkına ayırdı.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Gıda Hakkı nedir?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              İnsan Hakları Evrensel Beyannamesi içinde yer alan ve insanın sağlıklı beslenmesini sağlayacak geçim olanaklarından iradesi dışında mahrum kaldığı durumlarda yiyecek ihtiyacının karşılanmasına yönelik güvenceler oluşturulmasının bir hak olarak tanımlanan "gıda hakkı" ve "sağlıklı beslenme" sosyal bir hak olarak tarif edilmektedir. Gıda hakkının üç ana unsuru kullanılabilir, yeterli ve erişebilir olarak tanımlanmakta.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-4">
              <li>Kullanılabilirlik, hem mevcut hem de gelecek nesiller için üretilecek yeterli gıda anlamına gelir; bu nedenle sürdürülebilirlik, uzun süreli kullanılabilirlik ve çevrenin korunması kavramlarını içerir.</li>
              <li>Yeterlilik, bireyin, sadece miktar bakımından değil, erişilebilen gıdaların besleyici niteliği açısından da yerine getirilmesi gereken bireyin beslenme ihtiyaçlarını ifade eder.</li>
              <li>Erişilebilirlik (ekonomik), yeterli bir diyet için gıda alımında ortaya çıkan mali maliyetlerin, diğer temel ihtiyaçların (ör. Konut, sağlık, eğitim) gerçekleştirilmesini tehdit etmediğini veya tehlikeye sokmadığını ima etmektedir. Fiziksel erişilebilirlik, bebekler ve küçük çocuklar, yaşlılar, bedensel engelliler, ölümcül hastalıklar ve akıl hastası olanlar da dahil olmak üzere sürekli tıbbi problemleri olan kişilerin dahil olduğu, fiziksel olarak savunmasız bireyler de dahil olmak üzere, herkesin yeterli gıdaya erişebilmelerini sağlamalıdır.</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
              FAO her yıl düzenlenen Dünya gıda günü etkinlikleri için 2007 Dünya Gıda Günü temasının 'Gıda Hakkı' olarak seçer ve 2007 yılında FAO Türkiye Ofisi yaptığı açıklamadan alıntıdır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              "Gıda hakkı, uluslararası toplum tarafından açlık ve yoksulluğun ortadan kaldırılması, kalkınma sürecinin hızlandırılması ve derinleştirilmesi yönünde önemli bir insan hakkı olduğunun tanınmasının göstergesidir. Gıda hakkı yaklaşımı gıdanın var olması, ulaşılabilir, istikrarlı ve faydalanılabilir olması, insanlığa yakışır ve kültürel olarak kabul edilebilir olması, ayrımcılığa yol açmaması, şeffaf ve güvenilir olması gibi gıda güvencesi etmenleri ile örtüşmektedir. Bu durum, kişileri özellikle de aç ve yoksul kesimi gıda hakkına ulaşma yollarını aramaya ve hükümetleri gıda güvencesi taahhütlerini yerine getirmede sorumlu tutmaya olanak vermektedir. Bu kişiler yardımın nesnesi olmak yerine yasal hakların öznesi durumdadırlar." (gıda mühendisleri odası/2007 gıda günü sempozyum notları)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gıda hakkı için 1948 Gıda Hakkını temel alırsak hak mücadelesinin birçok kazanımı olmasına rağmen halen gıda hakkı sağlanmış değildir ve yakın gelecekte gıda demokrasisinden bahsetmek pek mümkün gözükmemekte. Gıda Hakkını birçok bileşenini dışarıda bırakarak tartışmak ve sadece bir hak mücadelesi üzerine indirgemek, birçok sorunu görmemizi engellemektedir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              2000li yılların ikinci yarısında kendisini gösteren ve gıdaya erişim krizi üzerinden ortaya çıkan mücadeleler, gıdada bir kriz olduğu konusunda küresel durumu ifade etmektedir. Gıda krizi, özellikle ekonomik ve ekolojik bir kriz olarak kendisini gösteriyor. Merkezinde gıdaya erişim/gıdanın bölüşümü hususundaki eşitsizliğin yattığı bu kriz hem küresel çapta, hem de tek tek ülkelerde yaşandığını söyleyebiliriz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gıda hakkı maddelerine bakınca, insanların hapishanede ya da diktatörlük altında güvenli bir şekilde yiyecek olabilmeleri tamamen mümkün gibi gözükmekte. Toplumsallıktan çıkartılan bu tanımlamaya gıdanın temel bir insan hakkı olduğunu dile getirse de erişibilirlik ve gıda sistemini gerçekliğine değmeyen bu tanımlama sadece kağıt üzerinde kalmaktadır.
            </p>
          </div>

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
              href="/dusunduklerimiz/kavramlar-sozlugu" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </Link>
          </div>

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

