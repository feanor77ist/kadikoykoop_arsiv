"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useState, useEffect } from "react";

export default function EkolojikTarimAracisizTuketim() {
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
            <span className="text-gray-900 dark:text-white font-medium">Ekolojik Tarım Aracısız Tüketim</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ekolojik Tarım Aracısız Tüketim Atölye Raporu
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              7 Mayıs 2017 - Caferağa Mahallesi
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi tarafından 7 Mayıs 2017 tarihinde Kadıköy'ün Caferağa mahallesinde bulunan Barış Manço Kültür Merkezinde "Ekolojik Tarım Aracısız Tüketim" başlıklı atölye çalışması gerçekleştirdi. Yaklaşık iki buçuk saat süren atölyeye İstanbul'un çeşitli ilçelerinden ve İstanbul dışından yaklaşık 37 kişi katıldı. Ekolojik Tarım Aracısız Tüketim başlıklı 3. atölyenin duyurusu için atölyenin gerçekleşeceği Caferağa mahallesi ve çevre mahallelerde afişler asıldı, el ilanları dağıtıldı. Aynı zamanda Kooperatif'in sosyal medya hesapları ve mail grubu üzerinden atölyenin içeriğine ilişkin makaleler, akış ve yöntemine ilişkin bilgiler paylaşıldı.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Atölye, Kadıköy Kooperatifi'nin kısaca kendisini tanıtması ardından, önceden sosyal medya ile mail grubu üzerinden paylaşılmış olan atölye içeriğinin sunumu ile başladı. Daha sonra katılımcılar ekolojik toplumsal ilişkiler ve üretici-tüketici arasında karşılıklı inisiyatif başlıklarını kapsayacak biçimde dört gruba ayrıldılar. Her grup içerisinden gönüllü bir kişi konuşulan meseleleri not aldı. Grup oturumları sonrası bütün katılımcılar tekrar yan yana geldi ve gruplar kendi çıktılarını sundular. Daha sonra bu çıktılar kolaylaştırıcı tarafından derlenerek genel bir tartışmaya açıldı. Tartışma alternatifler üzerine değerlendirmeler ve Kadıköy Kooperatifi ile ilgili sorularla sürdü.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Dört grubun ekolojik toplumsal ilişkiler ve üretici-tüketici arasında karşılıklı inisiyatif etrafında tartışmaları şu şekilde özetlenebilir:
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Ekolojik Toplumsal İlişkiler
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "Ekolojik Toplumsal İlişkiler" başlığı altında yapılan tartışmalar ilk olarak tüketicinin gıda konusunda bilinçlenmesi gerektiğiyle ilgili; ekolojik üretim nedir, tüketicinin bilinçlendirilmesi ve üretici ile nasıl bir araya gelebiliriz soruları üzerinden ilerledi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Tüketicinin bilinçlenmesi konusunda ilk olarak neyi ne kadar tükettiğimiz, market raflarındaki gıdaların içerikleri, organik sertifikalı gıdaların ne kadar güvenilir olduğu, üreticilerin neden atalık tohumlar yerine hybrid tohumları tercih ettiği tartışıldı.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ekolojik üretim ile ilgili, doğa ve insana dost üretim biçimleri, emek sömürüsünün olmadığı üretim biçimleri, biyoçeşitliliğin korunduğu ve ilaçsız üretim yöntemleri tartışıldı. Ekolojik tarım için doğru bilgiye ulaşmanın zorluklarından bahsedildi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Üreticilerle nasıl ilişki kurulması konusunda önemli konunun karşılıklı güven oluşturulması olduğuna vurgu yapıldı. Ayrıca üreticiler için alım garantisi yaratılmasının iyi olacağı ve gıda toplulukları sayısının arttırılması gerektiği belirtildi. Yerel örgütlendirmeyi güçlendirecek politikaların geliştirilmesinden bahsedildi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Organik sertifikalarda devletin hybrid tohumlara izin veriyor olduğu, üreticinin 1TLye piyasaya sunduğu ürünün soframıza 7 TL olarak gelişinde aracı firmaların karı ve üreticinin hybrid tohumu ilk aşamada tercih etme sebebinin daha fazla verim alıyor oluşu konuşuldu. Bu bağlamda üretici ilk başta hybrid tohumu tercih etse de atalık tohumun aksine ürünün devamını sağlayamayıp bir sonraki yıl yine para vererek şirketlerden tohum alması gerektiği ve şirketlere bağlı kalıp özgürlüğünün kısıtlandığı konuşuldu. Yine tarım ilaçlarının da hybrid tohumlar gibi bağımlı bir ilişki yarattığı ve üretici üzerinde baskı yarattığı vurgulandı. Üreticinin bu bağımlılıktan kurtulabilmesi için örgütlenmesi ve tüketicilerin de kooperatiflere desteklerini arttırması gerektiği sonucuna varıldı.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Belediyelerin gıda krizi konusuna yeterince eğilmediği ve toplumsal bilinçlenmenin özümsenmesi için yine Belediyelerin kooperatifleri desteklemesi gerektiği ve yine üniversitelerde Ekolojik Tarım lisans bölümlerinin açılması önerileri getirildi.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Üretici ve Tüketici Arasında Karşılıklı İnisiyatif
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bu başlık altında öncelikle bazı kilit sorular soruldu; - Üretici ve tüketici ile karşılıklı güven ilişkisi nasıl kurulabilinir? -Üretim sürecleri ile ilgili nasıl bilgi alabiliriz ve ne bilmek istiyoruz? -Yereli konuşmak, yerele nasıl ulaşabiliriz?
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Ürünlerin denetlenmesi, gönüllü emek ile yapılabileceği gibi, sorununlardan bir diğeri daha aktif yöneticiler olduğu söylendi. Bu konuda en etkili işleyisin, üreticiyi üreticiye zimmetlemek olduğuna vurgu yapıldı.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Alım garantisi için atölye katılımcıları, üretici ve tüketici arasında karşılıklı inisiyatifin öncelikle üreticiye alım garantisi vererek güven teşkil etmesi ve tüketicinin üretim sürecine dahil olması gerektiğini vurguladı. Örnek olarak Urla'da planlı patates üretiminden bahsedildi. Ön plan yapılarak üretim miktarı, maliyet ve üretim süreci tüketici ile beraber kararlaştırıldığı, tüketicinin lojistik ağına da katıldığı belirtildi.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Üreticiler arasında rekabeti değil, destek ve dayanışma ruhunu güçlendirmek gerekli. Bu tür oluşumların arttırılması gerektiği ve üretim süreçlerini bilmek istiyoruz ve yerele nasıl ulaşabiliriz sorularına cevaben kooperatif ve gıda örgütlerinin artırılıp destek verilmesi gerektiği sonucuna varıldı. Örgütlü köylü grupları/kooperatifleriyle birlikte çalışmak.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Üretici ile bilimsel bilgi paylaşımın sağlanması, kooperatiflerin saffaflığı ve tabiki yapılmak istenen duyulan niacin yüksek olması konuşlan digger konulardandı.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Sonuç olarak, tüketicilerin üretim süreçlerine dahil olması neyi ne kadar tükettiği konusunda bilinçlenmesini sağlar. Bu bilinç ile beraber ürünün denetlenmesi konusunda gönüllü emek verilmesi, üretici ile bilimsel bilgi paylaşımı ve üreticiler arasında rekabet değil dayanışmanın arttırılması, gıda sistemine hakim olan şirketlerin karşısında tüketicileri güçlü kılar. Tüketici olarak üretim sürecine dahil olup üreticinin doğayla dost ve adil bir üretim yapabilmesi için karşılıklı güven oluşturulması ve gıda topluluklarının arttırılması gerekmektedir. Kooperatifler, örgütlü üreticiler ve köy kooperatifleri ile çalışırsa üreticiler de kendi üretici havuzlarını oluşturur ve birbirlerine referans olurlar.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Atölye Değerlendirmesi
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Atölye öncesi yayınlanan makalelerin tartışmaya katkı sağladığı söylenebilir. Ekolojik Toplumsal İlişkiler ve Üretici-Tüketici Arasında Karşılıklı İnisiyatif başlıkları altında ayrılmış dört grubun genel hatlarıyla vardıkları sonucun tüketicinin bilinçlenmesi gerektiği, üretim sürecine dahil olması ve gıda örgütlerine destek verilip arttırılması olduğu gözlemlenmiştir. Sonuç olarak, tüketicinin nasıl bilinçleneceği ve üretim sürecine dahil olacağına yönelik tartışmalar yapılması, atölyenin temel amaçları açısından son derece verimli sonuçlar doğurmuştur.
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

