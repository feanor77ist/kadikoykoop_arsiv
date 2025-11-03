"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function UrunUreticiBilgileriPaylasim() {
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
          <span className="text-gray-900 dark:text-white font-medium">Ürün Üretici Bilgileri Paylaşımı Hakkında Yönerge</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ürün Üretici Bilgileri Paylaşımı Hakkında Yönerge
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            21.09.2018
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Kadıköy Kooperatifi'nin, gıda ile ilgili olsun olmasın farklı alanlarda çalışma yürüten topluluklarla, sendikalarla, derneklerle, şirketlerle veya toplu ürün tedarik etmek isteyenlerle ürün ve üretici havuzunu paylaşma kriterlerinin belirlenmesi gerekliliği ortaya çıkmıştır. Bu bakımdan Kooperatif ile bugüne kadar iletişime geçen grupları iki ana başlıkta gruplandırabiliriz:
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              1. Kâr amacı güdenler
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kârını esas olarak ticari bir kazanç hedefiyle maksizmize etmeyi amaçlayanlar ve
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">a.</span>
                <span>Kâr amacı güden grupları marketler gibi paketli ürün satışı yapanlar (tarhana.co gibi) ile</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">b.</span>
                <span>ürünü pişirerek veya pişirmeden tüketime sokanlar (Beyaz Fırın, kafe, restoran vb. işletmeler) olarak ikiye ayırabiliriz.</span>
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bu kategorideki gruplar ile ürün ve üretici bilgisi paylaşımı bugüne kadar yapılan tartışmalarda bir takım endişeler doğurmuştur: Üretici bilgilerinin paylaşımı, üretim biçimini negatif yönde etkileme riski taşımaktadır. Daha önce, Berin Abla gibi üreticilerin de uyardığı üzere, üretici talebi karşılamak için başka üreticilerin ürünlerini kendininmiş gibi gönderebilmekte veya daha fazla üretim yapma çabasına girerek nitelikli ürüne zarar verebilmektedir. Büyük ve zincir işletmeler tüm üretim sürecine hakim olmaya yeltenebilir; üreticileri kendilerine bağımlı hale getirebilir; üretici tüm ürünü bir işletmeye vermeye zorlanabilir (Günaydın restoranın Büyükada Kooperatifi'ne yaptığı teklif).
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                <strong className="font-semibold">Öneri:</strong> bu kategorilere düşen ve Kooperatif ile veya Kooperatif üyesiyle iletişime geçenlere –hazırlanması planlanan- bir form iletilir (formun içeriği henüz netleşmedi ama ÜRÜN ÜRETİCİ FORMU baz alınabilir). Forma verilen yanıtlar gönüllüler tarafından denetlenerek kesin kararın verilmesi için Mutfak gündemine getirilir. Üretici bilgileri üreticinin rızası alınması şartıyla paylaşılır. Paylaşılması söz konusu olabilecek bilgiler yalnızca üreticinin iletişim bilgileridir. Ürüne dair tüm bilgiler ve fiyat paylaşılamaz. Ürün sorumlusu üreticinin onayını –tercihen- yazılı veya sözlü şekilde alabilir. Veya üreticilere iletişim adreslerine gönderilecek matbu formu okuyup onayları yazılı alınabilir.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              2. Kâr amacı gütmeyenler
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kâr amacı gütmeyen grupları kendi içlerinde
            </p>
            <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">a.</span>
                <span>tüketim kooperatifleri (Bükoop, Beşiktaş Kooperatifi Girişimi, Koşuyolu Kooperatifi Girişimi, Şişli Kooperatifi Girişimi) ve</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">b.</span>
                <span>dernekler (Yeryüzü Derneği, Bodrum Tohum Derneği gibi) olarak sınıflandırabiliriz.</span>
              </li>
            </ul>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2.1. Dirsek teması kurulmuş gruplar
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong className="font-semibold">Öneri:</strong> Kadıköy Kooperatifi kâr amacı gütmeyen topluluklar ile ürün ve üretici bilgilerini, dirsek teması kurmuş olma, yüz yüze ve yan yana gelme veya kooperatifçe bilinen bir referans gibi aşinalıklar edindikten sonra mutfak görüşü almaksızın dayanışmacı ekonomileri destekleme ilkesi gereği paylaşabilir. Üretici bilgileri üreticinin rızası alınması şartıyla paylaşılır. Paylaşılması söz konusu olabilecek bilgiler yalnızca üreticinin iletişim bilgileridir. Ürüne dair tüm bilgiler ve fiyat paylaşılamaz. Ürün sorumlusu üreticinin onayını –tercihen- yazılı veya sözlü şekilde alabilir. Veya üreticilere iletişim adreslerine gönderilecek matbu formu okuyup onayları yazılı alınabilir.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2.2. Dirsek teması kurulmamış gruplar
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kişisel bilinirlikler dâhil dirsek teması kurulmamış, yüz yüze ve yan yana gelinmemiş veya kooperatifçe bilinen bir referans gibi aşinalıkların edinilmediği durumlarda bir form iletilir. Forma verilen yanıtlar gönüllüler tarafından denetlenerek kesin kararın verilmesi için Mutfak gündemine getirilir. Gönüllüler denetimi kooperatif paydaşlarından (üretici, çiftçi-sen, ortak çalıştığımız kooperatif ve dernekler vb.) aldıkları bilgilerle yapabilir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Böyle durumlarda ilgili topluluğun bilgileri isteme gerekçesi, üretici ile dayanışmacı bir ilişki kurup kurmayacağı gözetilmelidir.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2.3. Referans kurumlar ve kişiler
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Referansın kişisel olmaması, Kooperatifin diğer üyelerince de bilinir olması önemli. Bu bakımdan, referans kurumlar ve kişilerin belirlenmesi, dirsek temasında olunan grupların (Çiftçi-sen, Bükoop, ZMO gibi) listelenmesi gereklidir. Listenin hazırlanmasındaki ölçüt Kooperatif ilkeleriyle ortaklık kurabilme becerisi belirlenebilir (Buradaki alt ilkeleri tartışmamız yerinde olur). Kooperatif üyesi referans kişi, kurun ve birlikleri önerir. Mutfak kararlaştırır.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mt-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">2.3.1. Referansın kişisel olmaması:</strong> Referans kişisel ilişkilere ve tanışıklığa göre belirlenemez. Bağ Referans kişi ve Kooperatif arasında olmalıdır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">2.3.2. Kooperatifin diğer üyelerince de bilinir olması:</strong> Referans olarak görülen kişinin ilgili konu hakkında uzman bilgisinin Kooperatif üyelerince kabul görmesini ifade etmektedir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">2.3.3. Liste:</strong>
                </p>
                <ul className="list-none space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">2.3.3.1.</span>
                    <span>Çiftçi-Sen,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.3.3.2.</span>
                    <span>BUKOOP,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.3.3.3.</span>
                    <span>Üreticiler,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.3.3.4.</span>
                    <span>Odaların Kooperatif üyelerince benimsenin üyeleri,</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.3.3.5.</span>
                    <span>Dirsek temasında olduğumuz uzman kişiler:</span>
                    <ul className="list-none space-y-1 ml-6 mt-1">
                      <li className="flex items-start">
                        <span className="mr-2">2.3.3.5.1.</span>
                        <span>Bülent Şık,</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">2.3.3.5.2.</span>
                        <span>Tayfun Özkaya</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">2.3.3.5.3.</span>
                        <span>Abdullah Aysu</span>
                      </li>
                    </ul>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.3.3.6.</span>
                    <span>Gıda Toplulukları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.3.3.7.</span>
                    <span>Yeryüzü Derneği</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">2.3.3.8.</span>
                    <span>Eklemeler yapılabilir. Mutfakta görüşülür ve Mutfakta listeye eklenir veya çıkarılır.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2.4. Dost Mekânlar
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Diğer muğlak aktör, <strong className="font-semibold">DOST MEKÂNLAR:</strong> Dost Mekân sadece dostluğumuzun olduğu mekânlar anlamına gelmemektedir. Bu bakımdan Kooperatif'in Dost Mekânı, yalnızca kişisel ilişkilerle belirlenemez. Bu mekânları belirlemede, referans kurum ve kişilerde oluşturduğumuz şekliyle Kooperatif ilkeleridir:
              </p>
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                <li className="flex items-start">
                  <span className="mr-2">2.4.1.</span>
                  <span>Kooperatif ilkeleriyle ortaklık kurabilme,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.4.2.</span>
                  <span>Gıda egemenliği,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.4.3.</span>
                  <span>Dayanışmacı ekonomi,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.4.4.</span>
                  <span>Üreticiyle sürekli birliktelik kurma,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.4.5.</span>
                  <span>Kooperatifle maddi veya manevi karşılık beklemeksizin dayanışma gösterme vb. ilkeler ölçüsünde belirlenmedir.</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bu ilkeler çerçevesinde bu kategorideki mevcut mekanlar listelenmelidir. Dost Mekân kapsamında değerlendirilenlerle mutfak görüşü almaksızın dayanışmacı ekonomileri destekleme ilkesi gereği bilgiler paylaşabilir. Bu liste dışında olan her türlü işletme ile ürün ve üretici bilgisi paylaşmak için Mutfak görüşüne başvurulmalıdır. Üretici bilgileri üreticinin rızası alınması şartıyla paylaşılır. Paylaşılması söz konusu olabilecek bilgiler yalnızca üreticinin iletişim bilgileridir. Ürüne dair tüm bilgiler ve fiyat paylaşılamaz. Ürün sorumlusu üreticinin onayını –tercihen- yazılı veya sözlü şekilde alabilir. Veya üreticilere iletişim adreslerine gönderilecek matbu formu okuyup onayları yazılı alınabilir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bir mekan, Dost Mekân olmaktan çıkarılacaksa yine kişisel ilişkiler baz alınarak değerlendirilme yapılamaz. Sayılan kriterler ışığında Kooperatif Mutfak'ında gündeme alınır ve karara bağlanır. Dost Mekanın ticari mekânlardan ayrı tutmamızın nedeni, kurduğumuz dayanışmacı ilişkidir.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Uyarı:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Hangi kategoride, elimizde bulunan bilgilerin ne kadarını verebileceğimizi de tartışmalar sürecinde karar vermemiz gerekir. Elimizde tuttuğumuz bilgileri yukarıda sıraladığımız kategorilerdeki kişi ve kurumlara şartlara bağlı olarak farklı düzeylerde iletmenin yerinde olduğunu ve karşılıklılık ilkesi bakımdan düşünebiliriz. Kimi bilgilere Kooperatif olmadan da ulaşmaları mümkün iken, kimi bilgilerin Kooperatif ve onun destekçilerinin referansları yoluyla edinildiğini; Kooperatif'e gösterilen iyi niyetin kötüye kullanımını engellemenin de Kooperatif sorumluluğunda olduğunu anımsamak yerinde olur.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kadıköy Kooperatifi dahil tüm dayanışmacı grupların, bir üreticinin üretimininin tümüne alım garantisi veremediği ve üreticilerin pazar arayışının devam ettiği de göz önünde bulundurulmalıdır. Kadıköy Kooperatifi'nin bu ihtiyacın farkında olarak kooperatifleri yaygınlaştırmayı önüne koyduğunu unutmadan, kar amacı güden işletmelerle ürün ve üretici bilgisi paylaşımına dair bir protokol geliştirmesi gerekmektedir.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              3. Siyasi, dini topluluklar
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Siyasi, dini toplulukların ve partilerin talepleri Kooperatif Mutfak'ın gündemine gelir ve karara bağlanır.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="font-semibold">Uyarı:</strong> Buradaki endişemiz öncelikle üreticilerin olası kaygılarıdır. Ayrıca Kooperatif'in bu gibi topluluklarla ve yapılarla ilişkilenme ya da ilişkilenmeme biçimi gözetilmelidir. Bu biçimler henüz netleşmediğ için kararın Kooperatif Mutfak'ında alınması yerinde olacaktır.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              4. Yerel yönetimler
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yerel yönetimler ticari kaygı gütmeyen kamusal etkinliklerinde, üreticilerin rızası doğrultusunda bilgileri paylaşılır.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              5, 6, 7. Karşılıklılık ilkesi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Üretici bilgilerinin paylaşımının "karşılıklılık" ilkesine bağlı olarak şart konulmaması önerilmektedir. Ancak, bilgi paylaşımının yapıldığı gruplardan, kooperatiflerden üretici havuzları talep edilebilir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aksi ve olağandışı bir durum olmadıkça üreticilerin bilgilerinin paylaşım onayı bir kez yapılıp bilginin paylaşımı kooperatif üyelerince gerçekleştirilebilir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kooperatif üyeleri, paylaştığı bilgiyi ve nedenini Mutfak'a sunar.
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

