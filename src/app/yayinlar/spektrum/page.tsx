"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useState, useEffect } from "react";

export default function Spektrum() {
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
            <span className="text-gray-900 dark:text-white font-medium">Spektrum Kadıköy Kooperatifi</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ekoloji ve Gıda Arakesitinde bir Sivil İnisiyatif: Kadıköy Kooperatifi
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Spektrum Dergisi
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Özellikle son yarım yüzyılda diğer tüm üretim alanları gibi gıda endüstrisi de küreselleşerek ciddi ölçüde ucuz hammaddeye, zehirli kimyasal girdilere ve makinelere bağımlı hale getirildi. Güçleri gittikçe artan bir avuç küresel şirketin tekelindeki küresel gıda sistemi, kendi çıkarları gereği dünya halklarını açlığa ve sefalete sürüklemekte. Zehirli girdilere dayanan endüstriyel tarım sistemi, bir yandan üreticiyi kendisine bağımlı kılarken bir yandan da doğaya ve onun bir parçası olan insana ölümcül veya geri dönüşü olmayan zararlar veriyor. Tüketicinin, gıda üretimi süreçlerine olan ilgisizliği ve bu süreçler hakkındaki bilgi eksikliği, kimyasalların ve katkı maddelerinin gittikçe daha yoğun kullanımıyla sonuç buluyor. Bunun paralelinde hastalıkların artışı; tarım kimyasallarının doğaya verdiği zarar; yerel gıda üretiminin üzerinde kurulan ölümcül baskı; bir yanda açlıkla boğuşan halklar varken diğer yanda muazzam bir israfın son derece normal karşılanması gibi örnekler gidişatın akıldışılığını ortaya seriyor.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kooperatif Fikrinin Temelleri
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kamu kaynaklarının tarımsal sistemi koruma ve lojistik ağını organize etme süreçlerinden çekilmesi, küresel gümrük tarifelerinin asli belirleyen haline gelmesi, tarım-gıda sektöründe şirketlerin ve genel itibariyle şirket modelinin hâkim hale gelmesi, kamunun bu süreçte piyasayı şirketler lehine düzenleyici bir aktör olarak kendini sınırlandırması ile sonuçlandı. Böylece üreticiler ve tüketiciler, devletin, şirketlerin çıkarlarını korumak amacıyla oluşturduğu kurallar çerçevesinde şirketlerle baş başa kaldı. Yaşanan bu süreç küresel bir olgu olarak karşımıza çıkarken, Türkiye'de benzer bir süreci kendi özgün dinamikleri ile yaşamakta. İşte böylesi bir konjonktür, Gezi sonrası başka saiklerle bir araya gelmiş mahalle forumlarında bir arada durmaya çalışan insanları gıda meselesine yönelten asli unsurların başında geliyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Kooperatifi de bu iklim içerisinde ortaya çıktı. Kooperatif fikrinin temelleri Gezi direnişi sonrasında oluşan park forumları ve mahalle dayanışmaları döneminde yapılan tartışmalara dayanmaktadır. Bu açıdan kooperatif çalışması ruhunu ve karakterini "mahalle dayanışmaları" olgusundan almıştır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kadıköy Kooperatifi'nin Bugünü
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Açık, katılımcı, demokratik, yatay ve patronsuz yapısıyla Kadıköy Kooperatifi, ilkelerini ve çalışma biçimini benimseyen herkesi içine katmayı amaçlayan, kolektif ve toplumsal bir örgütlenme modeli inşa etmeyi amaçlamaktadır. Bir araya geldiğimiz günden itibaren yapılan tartışmalar ve toplantılar süresince ortaklaşarak belirlediğimiz, ana motivasyonumuz diyebileceğimiz, aşağıda kısaca tarif edilen ilkeler, kooperatifimizin zeminini oluşturuyor. Bu ilkeler, fikir alışverişi ile başlayan yolculuğun resmiyete varmasını ve çalışmaların sürdürülmesini sağlamakta etken oluyor; öte yandan birlikteliğimizin ve çalışmalarımızın kişilerden bağımsız, bir yapı olarak devam etmesi de yine kooperatifin bu ilkeler zemininde hareket etmeyi sürdürüyor olmasıyla sağlanıyor.
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
              <li><strong>Üreticiler ile Aracısız Birliktelikler Kurmak:</strong> Bütün ürünlerimizi üreticiden aracısız alıyor ve geliri doğrudan üreticiye aktarıyoruz. Çalışacağımız üreticileri kolektif bir tartışma ile belirliyoruz.</li>
              
              <li><strong>Üreticiler ile Dayanışma:</strong> Üretici tercihlerimizde dayanışmaya önem veriyoruz. Önceliğimiz kadın üreticiler, örgütlü üretim yapanlar (kooperatifler, dernekler, sendikalar, vakıflar, inisiyatifler, kolektifler), bizim gibi örgütlü tüketici grupları ile dayanışma gösterenler, dezavantajlı gruplar (LGBTİ+, güvencesizler, göçmenler, direnişteki gruplar), tekil ve geçimlik üretim yapan küçük üreticiler olarak sıralıyoruz.</li>
              
              <li><strong>Üretim ve Tüketim Üzerinde Karşılıklı İnisiyatif:</strong> Üretici ve kullanıcıların iletişim içinde olmasını sağlayacak mekanizmaları geliştirerek ve üretim ile tüketim süreçlerini birbirine bağlayarak, neyin, nasıl ve ne kadar üretileceğine bu ürünleri kullananlarla üretenlerin beraber karar vermesinde rol almayı hedefliyoruz.</li>
              
              <li><strong>Kolektif Çalışma ve Paylaşım:</strong> Birlikte karar alan, çalışan ve paylaşım ilişkilerini geliştirmeyi hedefleyen bir örgütlenme olan Kooperatifin tüm karar alma süreçlerini kolektif bir çerçevede sürdürüyoruz. Bu amaçla kolektif çalışmanın gelişmesi, ortakların ve gönüllülerin çalışmalara eşit bir şekilde katılabilmesi için eğitimler düzenleyerek Kooperatifi yenileyebilecek öğrenme ve aktarım mekanizmaları geliştiriyoruz.</li>
              
              <li><strong>Ekolojik ve Adil Toplumsal İlişkiler:</strong> Üretim ve tüketim ilişkilerinde toplumsal faydayı esas alan, doğa ile dost ve ekolojik bir çerçeveyi destekliyoruz. Ürün seçiminde ekolojik koşulları sağlayan, üretim süreçlerinde kadın emeğinin ikincilleştirilmediği, her türlü emek sömürüsünden uzak üretilmiş adil ürünleri tercih ediyoruz. Bu açıdan emeğin ve doğanın savunulması ve korunmasını, yerel üretimi, sağlıklı ve nitelikli ürünlere herkesin erişebilmesini savunuyoruz.</li>
              
              <li><strong>Toplumsal Cinsiyet Eşitliği:</strong> Kadıköy Kooperatifi toplumsal cinsiyet eşitliğini temel ilkelerinden biri olarak benimsiyor. Hiç kimseye cinsiyeti, cinsel kimliği, cinsel yönelimi nedeniyle ayrımcılık yapılamaz; LGBTİ+'ların Kadıköy Kooperatifi yapısı içinde güvenle var olmalarına ve kendilerini ifade etmelerine olanak sağlanır. Kadıköy Kooperatifi ve gönüllüleri her türlü cinsel şiddete karşıdır ve buna uygun davranıyor. Toplumsal cinsiyet üzerinden kurgulanan hiyerarşik ilişkilerin sonlandırılmasını ve değerlerin dönüştürülmesini hedefliyor.</li>
              
              <li><strong>Toplumsal Dayanışma:</strong> Kâr amacı gütmüyoruz; Kadıköy Kooperatifinin kendini sürdürebilmesini ve toplumsal faydayı esas alıyoruz. Kooperatifin yarattığı değerleri imkanlar dâhilinde emek ve demokrasi mücadelesi temelli direniş gruplarıyla, bir afet durumunda olası ihtiyaç sahipleri ile, toplumsal cinsiyet eşitsizliği nedeniyle desteğe ihtiyacı olan, cinsel yönelim ve cinsiyet kimliği nedeniyle dışlanan gruplar ve ötekileştirilen tüm canlılar ile paylaşmayı hedefliyoruz. Çeşitli alanlardaki kooperatifler ve dayanışma ekonomisi temelli topluluklarla beraber çalışmayı; iş birliğini ve kooperatifçiliği toplumsal alanda yaygınlaştırmayı amaçlıyoruz.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              İş birlikleri ve Dayanışma Pratikleri
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Çevremizde irtibatta olduğumuz kooperatif ve gıda toplulukları ile birlikte çalışma ve dayanışma pratiklerini hem nitelik hem nicelik olarak daha üst düzeylere çıkarmak istiyoruz. Bu amaçla yürüttüğümüz ortak ürün alımları, ürün çeşitliliği ve tedarik hacmi bazında çok daha üst seviyelere çıkarmayı önümüze koyuyoruz. Ürün maliyetlerini azaltmanın yanı sıra üreticilere mevsimsel planlama olanağı yaratmanın bu yoldan geçtiğini düşünüyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ayrıca bu iş birliği deneyimlerini, yerel inisiyatiflerin dayanışması olmanın ötesine taşımamız gerektiğini düşünüyoruz. Her yerelin kendi gerçekliği içinde oluşan inisiyatiflerin daha da yaygınlaşmasını ve farklılıklarını da ortaya koyarak ortaklaşabildiği zeminde bir model çerçevesinde bütünleşik hareket edebilmesini gelecek için oldukça değerli buluyoruz. Bu sayede hem üretim hem de tüketim ayağının örgütlenip, rekabetçiliğe dayalı ve gıda güvenliğini hiçe sayan egemen endüstrinin karşısında güçlü bir alternatif ekonomi zeminini oluşturabileceğimizi düşünüyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu amaçlar doğrultusunda ortak depo kullanımı, etiket ve gıda mevzuatına dair diğer konulara ortak çözüm getirilmesi ve ürün/üretici seçim kriterlerinin ortaklaştırılması çalışmalarımız devam ediyor. Ayrıca etki alanında olduğumuz yasal düzenlemelere dair ortak görüş oluşturup bir arada hareket etmeye devam etmeye çalışıyoruz. Bu bir arada hareket etmenin birtakım toplumsal sonuçları olabileceğini de öngörebiliriz: Örneğin, mevcuttaki anti-demokratik kooperatifçilik yasasının değişimine dair bir toplumsal talep ve basınç oluşturmak; "tüketim kooperatifleri birliği" kurarak, tüketim alanında güç birliğinin yasal platformunu inşa etmek ve tüketicilerin ihtiyaç ve taleplerini daha güçlü bir şekilde kamuoyuyla paylaşmak; tarım ve gıda alanında mevcut inisiyatiflerin bir araya gelmesi ile oluşacak bir "gıda egemenliği ağı"nın katılımcısı ve inşa edicisi olmak; bu ağın güçlenmesiyle birlikte alternatif bir gıda-tarım modelinin hayata geçmesini sağlamak, ve benzeri örnekler sıralanabilir. Kooperatifçiliğin Türkiye'de gelişmesi, taban inisiyatiflerinin kooperatifçilik ile kendini güçlendirmesi, üretim ve tüketimin örgütlenerek planlı, ekolojik, dayanışmacı bir model inşa edilmesi amaçlarımızın özünü oluşturuyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Yine bu bağlamda yerel yönetimlerin gerek stratejik planlarını oluşturma noktalarında gerek yönetim kapsamı dahilindeki olanaklarını kullanarak kooperatifçilik faaliyetlerini desteklemeleri gerektiğini düşünüyoruz. Bu konuda kendi içinde bulunduğumuz ilçede yerel yönetimle çeşitli temaslar geliştirmiş olsak da, mevcuttaki gıda hareketinin yerel yönetimlerle kurdukları çekinik ilişkiyi biz de paylaşıyoruz. Şu anki mevcut durumda, gıda inisiyatiflerinin çoğunun olduğu gibi biz de kendi öz-örgütlenmemiz ve öz-güçlenmemiz üzerinden bir çalışma yürütüyoruz ve bunun yaratacağı toplumsal güçlenme sonucunda yerel yönetimlerin politika yapım süreçlerine katılımda bir taban inisiyatifi olarak yer alabileceğimizi öngörüyoruz. Bu amaçla, yurttaşların kendilerini ifade edebilecekleri ve üzerine söz söyleyebilecekleri katılım mekanizmalarının inşa edilmesi gerektiğini düşünüyoruz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Gelecekte Kadıköy Kooperatifi
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Üretim ve tüketim ilişkilerinin dönüşmüş olduğu bir gelecek tahayyülümüz var. Bu tahayyülün gerçekleşmesi için bir takım stratejik adımlar atmak ve çaba sarf etmek gerekiyor. Bunun için de daha çok sayıda gönüllünün ve bileşenin bu hayalde buluşması ve katılımlarıyla, kurulu mevcut düzenin değiştirilebileceğine inanması gerekiyor. Kooperatif temelinde yapılan çalışmanın daha fazla toplumsallaşması, Kadıköy sakinlerinin daha çok özörgütü haline gelmesi anlamını taşıyor. Dolayısıyla "büyüme" olgusu bizim için sadece sayının artması değil, daha fazla kişinin üretim ve tüketim üzerinde karşılıklı inisiyatif kazanması anlamına geliyor. Kooperatif ise bu inisiyatifin formal yapısı olarak kendini konumlandırıyor. Bu bağlamda, kooperatifin büyümesini, daha katılımcı modeller geliştirmeyi, daha fazla ve farklı türde satış alanında üreticilerin ürünlerinin doğrudan satışının yapıldığı, daha çok dayanışma temelli ilişkinin kurulduğu bir dünya için istiyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kooperatif dükkanını da nöbet ve gönüllülük temelinde işletiyoruz. Önümüzdeki süreçte nasıl bir yönelime gireceğimizi bilemesek de daha yüksek kapasite ile istihdam olanakları yaratan bir örgütlenme ve dayanışma ekonomisi hayalimiz olduğunu söyleyebiliriz. Hizmet ilişkisi üretmeden, kendi emeğini sömürmeyecek yöntemlerin nasıl olabileceğini araştırıyoruz.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Potansiyel Gıda Krizi ve Kullanım Değerini Esas Alan Bir Alternatif Ekonomi
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Daha da derinleşmesi beklenen gıda krizinden çıkış yolunun var olduğunu, insanlığın dar bir örgütlü kesiminin dahi inisiyatif alıp iş birliği yaparak değişimin öncüsü olabileceğini düşünüyoruz. Hâkim endüstrinin tektipleştirici tarım yaklaşımına karşı çeşitliliği artırmayı, katı merkeziyetçiliğine karşı yerel iradeyi güçlendirmeyi, iklim değişikliği ve kuraklık riskine karşı ekolojik tarımın uygulanmasını savunuyoruz. Tam da bu yüzden gıda egemenliğini toplumsal fayda lehine inşa etmemiz gerektiğini düşünüyoruz.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bir diğer önemli müdahalenin de değer zinciri üzerinde olması gerektiğini düşünüyoruz. Tarım endüstrisinde yaratılan değerin önemli bir bölümüne tüccarlar, komisyoncular ve gıda tekelleri el koyarken değeri asıl yaratan üretici ise geçinmekte zorlanıyor ve hak ettiğini alamıyor. Bununla da kalmayıp, metalaştırılan ürünlere mesafe arttıkça gıda güvenliği ortadan kalkarken bir yandan da kullanım değeri üzerinden gıdaya ulaşılmasının önü kesilmiş oluyor. İşte bu noktada gıda toplulukları, inisiyatifleri ve kooperatiflerin öneminin ortaya çıktığını görüyoruz. Rekabete karşı dayanışma ve iş birliği, bireysel riske karşı kolektif faydayı önüne koyan ağların gittikçe güçlendiği bir ülke ve dünya hayal ediyoruz.
            </p>
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
              href="/yayinlar" 
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

