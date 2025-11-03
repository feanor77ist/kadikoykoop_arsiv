"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useState, useEffect } from "react";

export default function KooperatifcilikKooperatiflesme() {
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
            <span className="text-gray-900 dark:text-white font-medium">Kooperatifçilik ve Kooperatifleşme</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kooperatifçilik ve Kooperatifleşme Atölye Raporu
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              10 Haziran 2017 - Osmanağa Mahallesi
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi tarafından 10 Haziran 2017 tarihinde Kadıköy'de Osmanağa Mah. Sosyal Dayanışma ve İletişim Derneği (SODİD)'de "Kooperatifçilik ve Kooperatifleşme" başlıklı atölye çalışması gerçekleştirdi. Yaklaşık üç saat süren atölyeye İstanbul'un çeşitli ilçelerinden yaklaşık 50 kişi katıldı.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi'nin daha önce yapmış olan atölyelerinin 4. ve sonuncusu bu atölyenin yapılacağı bilgisinden sonra önceki atölyelerde tartışılan sorunlara çözüm olarak kooperatifçilik ve kooperatifleşmenin birlikte düşünülüp ele alınması için bu atölyenin yapıldığı, konu ile ilgili okuma metinlerinin paylaşıldığı bilgisi verilerek atölye başladı. Daha sonra katılımcılar üç gruba ayrıldılar. Her grup içerisinden gönüllü bir kişi konuşulan meseleleri not aldı. Grup oturumları sonrası bütün katılımcılar tekrar yan yana geldi ve gruplar kendi çıktılarını sundular. Daha sonra bu çıktılar kolaylaştırıcı tarafından derlenerek genel bir tartışmaya açıldı. Üç grubun tartışmalar şu şekilde özetlenebilir:
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Kooperatif ve Kooperatif Hareketi Neden Gereklidir?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Küresel gıda krizinin her yerelde ortaklaşan ve kendine özgü yanlar barındıran etkileri görülüyor. Şirketlerin ve şirket mantığıyla çalışan devletlerin egemenliğindeki gıda sistemi gıdanın üreticisinden taşıyıcısına ve son tüketicisine toplumların çoğunluğunun yaşam şartlarını zorluyor. Giderek zorlaşan şartlara karşı örgütlenme çabasının bir yandan tarım arazilerinin şirketlerin tasarrufuna sevk edilmesini engelleyen, tarım arazilerindeki mevcut ve planlanan tüm monokültür temelli üretim teknolojilerine karşı tohum, ilaç ve gübre gibi girdileri kapsayan şirket egemenliğindeki teknolojilere karşı başka bir insan-doğa ilişkisini kurmamız gerekiyor. Öte yandan son tüketiciler olarak ne yediğini ve ne tükettiğini bilme hakkının, güvenilir, erişilebilir ve adil gıda için örgütlenmenin en önemli ayaklarından biri olduğunu unutmamak, gıdanın nasıl ve kim tarafından üretildiğinin kamusal iddiası olan özne ve kurumların inisiyatifinde olması gerektiği iddiasıyla hareket etmek gerekiyor.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Kooperatif ve Kooperatif Hareketinin Olası Sınırları
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Tüketim ve üretim ilişkilerini dayanışma temelli bir örgütlenme ile dönüştürmek ve geliştirmek kooperatifleşme hareketinin temel hedefi olsa da mevcut ve olası sınırları göz önünde bulundurmak gerekiyor. Bu sınırlardan biri üreticilerin üretim süreçlerine, kendi ürünlerine hatta giderek üretirken kullandıkları araçların bir kısmına yabancı hale gelmesi. Köylülerin çoğu geleneksel tarım yöntemlerini unutmuş durumda. Kullandığı ilaçların doğru ve gerekli olduğuna kani olan önemli bir çoğunluk var. Öte yandan Türkiye'de hala bilge köylü tarımı yapan üçte birlik bir kesim de var. Tüketicilerin örgütlülüğü ile çiftçilerin örgütlenmesi paralel gittiği sürece bilge köylü tarımı ekseninde bir üretici örgütlülüğü gelişecek gibi gözükmektedir. Tüketicilerin kooperasyon temelinde örgütlenmesi çiftçilerin örgütlenmesinin garantisi olmasa da tetikleyicisi olacaktır. Ancak dikkat edilmesi gereken üretici ve tüketici örgütlenmeleri arasındaki karşılıklı inisiyatifin bir taraftan diğerine kaynak aktarımından ibaret görülmemesidir. Çiftçilerin örgütlenmelerini ancak kendi öz sermayeleri ile yaratmalarını teşvik edecek yöntemler bu yapıların devamlılığını sağlayabilir, yabancılaşma olarak tespit ettiğimiz sorunları çözmeye çalışırken aynı hataları tekrar etmemize engel olabilir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Gıdanın güvenliği ile ortaya yepyeni bir sektörün çıkması üretim ve tüketim ilişkilerini dönüştürmüş, gıdanın nasıl üretildiğine dair beklentilerimizi değiştirmiştir. Tükettiğimiz gıdanın temiz ve doğal olduğuna emin olmak için organik ürün etiketlerine, ambalajlardaki özel laboratuvar veya bakanlık onaylarına dikkat eden bir tür tüketici alışkanlığı oluşmaya başladı. Öte yandan sertifikalar, diplomalar, belgeler küçük üreticinin kaldıramayacağı maliyetler yaratan bu yeni sektörün ayakları. Eğer tüm bu sektörel faaliyetlere rağmen güvensizlik hüküm sürüyorsa güven ilişkisini başka bir yerden kuracak başka bir ilişki biçimini bu alışkanlıkların ve yükümlülüklerin yerine geliştirmemiz gerekiyor. Doğal bilge köylü tarımını destekleyen, üreticiye emeğinin karşılığını veren bir örgütlenme biçimini geliştirirken bu sınırları göz önünde bulundurmamız gerekiyor.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bilge köylü tarımı ile üretim yapan üreticilerden son tüketiciye ulaşan ürünlerin fiyatlarının -organik etiketli ürünlerin olmasa da endüstriyel yöntemlerle üretilen ürünlerin- piyasa fiyatlarının üzerinde olduğu aşikâr. Bu gerçek, doğal gıdanın erişilebilirliğini an itibariyle orta ve üst sınıf tüketiciyle sınırlıyor. Dolayısıyla bu sınırlar henüz gelişme aşamasında olan gıda temini üzerine çalışan inisiyatiflerin yayılma ve genişlemesini belirli ölçülerde etkiliyor. Doğal ve adil gıdaya erişimin toplumda gücü sınırlı olan kesimlerin hakkı olduğunu kabul ederek yöntemlerimizi geliştirmeliyiz.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatifleşme oluşum ve girişimlerinin iç işleyişlerine dair gönüllü ve profesyonel başta olmak üzere ortaya koyulan emeğine niteliğine yönelik bazı sınırlar gözükmekte. Gönüllü emek karşılıklı sorumluluk üzerinden verimli sonuçlar alsa da gündelik hayatın zorunluluklarının getirdiği sınırları aşmakta zorlanıldığı da bir gerçek. Belirli aşamalarda bunu aşmak için gönüllü emeğin önemini azaltmayacak ve profesyonelleşmenin getirebileceği sorunları engelleyecek istihdam yöntemleri geliştirmek kooperatifleşmenin dayanışma ilişkilerini geliştirmesine de katkı sağlayacaktır. Ancak istihdam imkanlarının adil ve insani çalışma koşullarını sağlayacak şekilde geliştirilmesi gerekecektir. Bir diğer örgütlenme için sınırlardan biri de farklı siyasi yaklaşımların kooperatif çalışmalarının üzerinde tahakküm kurma ihtimalidir. Her yaklaşımın ortaklaşabileceği karar alma mekanizmalarını geliştirecek örgütlenme yöntemlerinin kooperatifleşme çabalarının karşılaşabileceği sınırlara karşı dikkatli olması gereken konulardan biri olarak gözükmektedir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatifleşmenin bir diğer aşması gereken zorluğu ise kurumsallaşmaya dönük adımlara dönük engeller. İnisiyatif alan gruplar kooperatif veya kolektif prensipleriyle çalışma yürütseler de resmi bir kooperatif kurma konusunda yasal mevzuatların getirdiği bürokratik ve mali yükümlülüklerin insanları adım atma konusunda çekinceye sevk ettiği bir gerçek. Geçmiş ve mevcut kooperatif deyimleri ile ilişkilerin güçlendirilmesi, yasal mevzuatların ve mali yükümlülüklerin detaylarının cesaret kırmadan karşılıklı aktarımı burada önem taşıyor. Öte yandan tecrübe aktarımı önemli olmakla birlikte kooperatifleşme çabalarının devamlılığını sağlamak ve uzmanlaşmanın ve bilen-bilmeyen geriliminin önüne geçmek için sorumluluk paylaşımı ve iş bölümünde rotasyon gibi yöntemlerin teşvik edilmesi bir başka gereklilik.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Kooperatif Örgütlenmesinde Mevcut ve Olası Yöntemler
              </h2>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                Ekonomik Model
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Lojistik ağını ortaklaştırmak kooperatifleşmenin ekonomik modelini geliştirmesinde önemli bir adım olabilir. Aracıları azaltmanın bir adım ötesine geçerek nakliye ve depolamayı çözecek kooperatifleri veya ortak kooperatif stratejileri geliştirmeyi düşünmek gerekecektir. Siparişlerin ortak ve üreticilerin üretim planlamasına belirsizlikler içinde başlamalarından önce verilmesi, ortak depo kullanımı hatta ürünlerin piyasa dolaşımına girmeden dayanışma ekonomisinin içerisinde dolaşabileceği kooperatifler arası bir takas sistemi üzerine kafa yormak geleceğe dair gerçekleştirilebilir hayaller olarak gözükmektedir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bunun yanında ihtiyaçların birlikte belirlenmesiyle neyin gündelik ve acil neyin tali ihtiyaç olduğu üzerine düşünülebilir ve lüks ürünlere daha fazla katkı payı eklenebilir. Orta ve üst gelir grubuna yönelik sayılabilecek ürünlerin üzerine daha fazla kooperatif payı eklenebilir. Kimi kolektif girişimler prensiplerini içerisindeki ekolojik tüketim ilkesini esneterek ürünlere erişimle ilgili kimi aşamaları uzun vadeye yayarak farklı uygulayabilir.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Uzun vadede ekonomik modelin ulaşmayı hedeflediği aşamalardan biri de koordineli bir şekilde mahalle ölçeğinde fırınından mutfağına, çeşitli ürünlerin işlendiği atölyelere tüketimi organize eden oluşumların yerleştiği, çiftçinin ve diğer küçük ve örgütlü üreticilerin ürününü kendi yereline yakın pazarlara satabildiği koşulların oluşmasıdır. Bölgelerin her türlü ihtiyacını karşılayabilecek taban örgütlenmelerinin gelişmesi önem taşımaktadır. Bu hayalin İstanbul'un kendi yerelindeki üretimle ne kadar beslenebileceğini de kapsaması iddiasını geliştirmesi açısından önemlidir.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                Gönüllülük ve İstihdam
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Tüketim kooperatiflerinin üretim kooperatiflerinde ayrı düşünülmeden hareket edilmesi istihdam ilişkisini de bu kolektif çabaların içerisine sokacaktır. Kentlerin yerellerinde kurulabilecek üretim kooperatifleri bu ilişkinin önemli bir parçası olacaktır. Özellikle kadınların dahil olduğu mahalli üretim kooperatifleri kurul yaygınlaşabilirse tüketim kooperatiflerin ve kolektifleri bu oluşumlarla birlikte çalışabilir. Gönüllü ve ücretli çalışma ilişkisine bir ara çözüm yurtdışındaki kooperatif deneyimlerinde aranabilir. Kooperatife ortak olma ve kooperatif hizmetinden faydalanabilmek için kooperatif işlerinde ayda asgari üç gün çalışma şartı gibi uygulamalar bu kolektiflerdeki gönüllü emek ilişkisinin karşılıklı sorumluluk üzerinden gelişmesini sağlayabilir.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                Deneyim Aktarımı ve Dayanışma
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Eğer kooperatifleşmenin yaygınlaşmasını istiyorsak öncelikle geçmiş deneyimlerden ders çıkarmak, mümkünse bu deneyimleri günümüzün ihtiyaçlarına ve gidişatına uygun bir şekilde yeniden canlandırmak gerekmektedir. Sonrasında mevcut deneyimlerin tecrübelerinin yeni çabalara aktarılması önem taşımaktadır. Üreticilerle bu deneyimlerin bir araya gelmesi için farklı alanlarda çalışan ekiplerin hem deneyimlerini aktarımı hem de dayanışması gereklidir. Bunu hem kentte kurulan kolektiflere deneyim aktarımı hem de üreticilerin örgütlenmesini teşvik etmek için düşünmeliyiz. Dünyanın farklı yerellerindeki özgün deneyimlerin takip edilmesi çıkarılacak dersler ve örnek alınacak modeller için önem taşımaktadır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Bu doğrultuda özyönetim prensibiyle çalışan, kooperatifini kurmak isteyen her yerele ve sektöre destek verilmeli. Kooperatif ve kolektifler arasındaki dayanışmanın gerçekleşmesinde her bir ürünün veya üretici grubunun organizasyonun sağlanmasını bir kolektifin üzerine alması gibi sorumluk paylaşımı temelli denemeler yapılabilir. Öte yandan resmi kooperatifleşmeyi tercih etmeyen gıda topluluklarının devlet nezdinde görünmez olması ve bu oluşumların kooperatiflerle iş birliğinde nasıl tasarlanacağı üzerine kafa yormak verimli bir model oluşturmamızı sağlayabilir. Toplumsal dayanışmanın fikri olduğu kadar maddi olarak da geliştirilmesi için ürünlere veya ortaklık paylarına nasıl bir düzenleme getirileceğinin de ayrıca düşünülmesi gerekmektedir. Son olarak gerek dükkân gerek ürün dağıtım yeri gerekse ortak etkinlik alanı dayanışmanın geliştirilmesi için ortak mekanların ne kadar önemli olduğunu deneyimlerimiz üzerinden göstermektedir. Kooperatifleşmenin kendi mekanlarını oluşturması gerekliliği dayanışma için önem taşıyacaktır.
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                Dönüştürücü etki
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatifleşme çabasının sadece ortaklarına hizmet veren bir oluşum olmaması, toplumsal dayanışmayı geliştirmek için yöntemler geliştirmesi önemlidir. Benzer şekilde ürün temininin hitap ettiği kitlenin sadece müşteri olarak kalması dayanışma ilkesinin sadece üretici ile kurulan ilişkinden ibaret kalmasına sebep olacaktır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Üreticileri örgütlenmeye yönlendirme küçük üreticiliğin birbiriyle rekabet etmesinden çok dayanışmasını teşvik etmeyi sağlayabilir. Burada örgütlenmenin belirli ilkeler etrafında devam etmesi de bir o kadar önemlidir. Örneğin tarımsal üretimde yerel, hibrit ve GDO'lu olmayan tohumların kullanımında taviz verilmemelidir ve kadın emeğini öne çıkaracak ilkelerde ısrarcı olunmalıdır. Üreticinin kentteki tüketici örgütleri tarafından dönüştürülmesinin hangi yöntemlerle sağlanacağı önemli bir noktadır.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatiflerin üreticilerin bilgi ve tecrübesini geliştirmesi bir ihtiyaçsa da bunu üretici örgütlerinin kendilerine bırakmak daha tutarlı gözükmektedir. Örneğin çiftçiler Çiftçi-Sen bünyesinde agroekoloji okulları kuruyor. Bu okulların dört duvarsız, kara tahtasız okullar olması ve yaygınlaştırılarak gelişmesi öngörülüyor. Eğitici eğitimi ile her bilgiyi ve tecrübeyi edinenin bunları yakınındakine aktarması ve okulun agroekolojiyi adım adım yayması amaçlanıyor. Kentlerde de tüketimi örgütlemeye çalışan kolektiflerin de yarı üretici/türeticiye dönüşecek bir perspektifte ilerlemeleri gerekecektir.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Sonuç Olarak
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Kooperatifleşme çabasını sadece sağlıklı ve adil gıdaya ulaşacak örgütlenme modellerinin geliştirilmesi değil birlikte yaşamı sağlamlaştıracak kooperatiflerin (yaşlı ve çocuk bakım kooperatifleri, üretim kooperatifleri v.s) kurulabileceği ilişkileri geliştirmek olarak görmek gerekiyor. Gezi'den çıkarmaya çalıştığımız dersleri ve kazanımları ancak bu şekilde devam ettirebiliriz.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Atölye Değerlendirmesi
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Atölyeye katılım sonradan arttı. Çeşitli gıda toplulukları ve kooperatiflerden katılım vardı. Teorik olarak kooperatifçilikten ziyade pratik olarak Kadıköy Kooperatifi konuşuldu. Önceden paylaşılan metinlerin kısmı olarak okunduğu görüldü. Kadıköy kooperatifinden atölye katılımı % 50 civarındaydı.
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

