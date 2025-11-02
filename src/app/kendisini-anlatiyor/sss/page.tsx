import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function SSS() {
  const questions = [
    {
      id: 1,
      question: "Ürün ve üreticiyi nasıl seçiyorsunuz?",
      answer: "Ekolojik tarımı, yerli üretimi savunan referanslı üreticilerle çalışmaya dikkat ediyoruz. Ancak, ister referanslı olsun ister olmasın bizimle iletişime geçen her üreticiye 'Ürün ve Üretici Bilgi Formu' gönderiyoruz. Bu formlarda ürün teminine ilişkin sorulardan, üretimin yapıldığı arazinin koşullarına, çalışma koşullarından, çalışanların sigortalı olup olmadıklarına, gelir yönetimini kimin yaptığına, kadın ve çocuk emeği sömürüsünün olup olmadığına yönelik sorular soruyoruz. Üretim sürecine dair ise sulama, gübreleme, yabani ot ayrıştırması yöntemlerini, hammaddenin nereden temin edildiğini, ürünlerin nasıl depolandığını, ürünün hangi aylarda tüketime hazır olduğunu ve tüketim süresi ile saklama koşulları gibi sorularımızı soruyoruz. Üretici tercihlerimizde ise dayanışmaya önem veriyoruz. Önceliğimiz kadın üreticiler, örgütlü üretim yapanlar (kooperatifler, dernekler, sendikalar, vakıflar, inisiyatifler, kolektifler), bizim gibi örgütlü tüketici grupları ile dayanışma gösterenler, dezavantajlı gruplar (LGBTİ+, güvencesizler, göçmenler, direnişteki gruplar), tekil ve geçimlik üretim yapan küçük üreticiler olarak sıralıyoruz."
    },
    {
      id: 2,
      question: "Ürünlerin doğal (ekolojik) olduğundan nasıl emin oluyorsunuz?",
      answer: "Birinci önceliğimiz üreticilerimizle karşılıklı güven. Üreticilerimizi ziyaret edip ürünleri gözleme şansımız oluyor. Aynı zamanda da beraber çalıştığımız, danıştığımız çiftçilere yeni ürünler için de danışıyoruz. Çiftçilerin bilgi, birikim, deneyiminden faydalanıyor, kendimiz de gözlemliyoruz. Ayrıca ürünlerimize analiz yapmaya da başladık, hedefimiz dükkandaki tüm ürünler için yaptırabilmek."
    },
    {
      id: 3,
      question: "Ürünlerde aranan kriterler nelerdir?",
      answer: (
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Yerel/yadigâr tohumun kullanılması</li>
          <li>Üretim sürecinde kimyasal girdi kullanılmaması</li>
          <li>Üreticilerin kadın üreticiler, örgütlü üretim yapanlar, örgütlü tüketici grupları ile dayanışma gösterenler, dezavantajlı gruplar, tekil ve geçimlik üretim yapan küçük üreticiler olması</li>
          <li>Şirket tarımının benimsenmemiş olması</li>
          <li>Kadın ve çocuk emeğinin sömürülmemesi</li>
        </ul>
      )
    },
    {
      id: 4,
      question: "Üretim sürecini gördünüz mü?",
      answer: "Üretici ziyaretlerine başladık. Elimizden geldiğince ziyaret etmeye çalışıyoruz."
    },
    {
      id: 5,
      question: "Neden kooperatif kurmayı tercih ettiniz?",
      answer: "Ürünleri toplu olarak getirmek istediğimizde yasal bir yapı olmadığımız takdirde bazı sıkıntılarla karşılaşacağımız bilgisini edindik. Benzeri yasal sorunlar dükkan açmak istediğimizde de karşımıza çıkacaktı. Ayrıca gıda topluluğu niteliğinin de ötesine geçebilmek için sadece sağlıklı gıdaya erişimi değil toplumsal dayanışmayı da önemsiyorduk. Tüm bu etkenler çözüm olarak en uygun yapının kooperatif olduğunu düşündürttü. Bu sırada tarımda ve gıdada yaşanan krizler çeşitli başarılı örnekleriyle kooperatifçiliği bir alternatif olarak yeniden gündeme getirdi. Kadıköy Kooperatifi somut ve kurumsal bir deneyim haline gelmeden önce kooperatifçilik; kolektif çalışmayı ve dayanışmayı pekiştiren, güven ilişkilerini tesis eden, ortaklarının ve toplumun çıkarlarını koruyan bir örgütlenme modeli olarak bizleri gıda konusunda bir inisiyatifleşme içerisinde olmaya sevk etti. Diğer yandan tarım, gıda, ekoloji vb alanlarda kolektif işletme deneyimleri olarak tartışılır hale geldiğinde ilgimizi çekmeyi de başardı."
    },
    {
      id: 6,
      question: "Herkes ortak olabiliyor mu?",
      answer: "Toplantıları düzenli takip eden, dükkanda nöbet tutan, sorumluluk alan, kooperatif ilkelerini benimseyen vb ortaklığın en temel prensiplerini yerine getiren gönüllüler aramıza katıldıktan 6 ay sonra istekleri doğrultusunda kooperatifimize ortak olabiliyor."
    },
    {
      id: 7,
      question: "Nasıl para kazanıyorsunuz?",
      answer: "Kadıköy Kooperatifi, sermaye birikim amaçlı değil gıda egemenliği mücadelesini yükseltme temeline dayanan bir işleyişe sahiptir. Var olan tüm gelir bu mücadele için gerekli masraflara sarf edilir. Hali hazırda gönüllülük esasına göre işleyen bir mekanizmaya sahibiz. Kooperatif dükkanında satış yapıyoruz. Buradan elde edilen gelir üretici ödemeleri, vergiler, dükkan masrafları olarak dağıtılıyor. Ürün fiyatı üzerine ayrıca %1'lik bir pay toplumsal dayanışma, %1'lik bir pay amortisman ve %1'lik bir pay kooperatif etkinlikleri için ekleniyor. Toplumsal dayanışma için biriken bedeli her 4 ayda bir toplumsal dayanışma ilkemize uyan gruplarla paylaşıyoruz."
    },
    {
      id: 8,
      question: "Üretim kooperatifi ile tüketim kooperatifi arasında fark var mı?",
      answer: (
        <>
          Üretim kooperatifleri üretim amaçlı kurulan kooperatiftir. Üreticilere sunulan çeşitli teşvik ve desteklerden faydalanır. Dolayısıyla faaliyet itibariyle bir fark olduğu söylenebilir. Detaylı bilgi için aşağıdaki linke bakınız;<br/>
          <a href="http://koop.gtb.gov.tr/kooperatifler-hakkinda/kooperatif-nedir" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
            http://koop.gtb.gov.tr/kooperatifler-hakkinda/kooperatif-nedir
          </a>
        </>
      )
    },
    {
      id: 9,
      question: "Kendi içinizde anlaşmazlıkları nasıl hallediyorsunuz?",
      answer: "Belirli asgari müştereklerimiz var. Toplantılarda birbirini dinlemeye ve anlamaya özen gösteriyoruz. Kadıköy Kooperatifi işleyişinin tüm aşamalarını ortak ve gönüllülerin konsensüs yöntemiyle aldıkları kararları ile yönetiyor. Anlaşmazlık, kısa vadede karar vermek zorunda olmadığımız, tartışmalı ve çok çeşitli konularda ortaya çıkabiliyor. Bunları gidermek amacıyla belirli aralıklarla çalıştaylar düzenliyoruz. Anlaşamadığımız konuları çalıştay gündeminde değerlendirmeye alıp karara bağlıyoruz. Ayrıca aramızda insani ilişkilerden olan rahatsızlıkları gidermek için serbest konuşmaya olanak sağlayan iki ayda bir pazar toplantıları düzenliyoruz."
    },
    {
      id: 10,
      question: "Üç yıl kooperatif kurmak için mutlaka olması gereken bir süre mi?",
      answer: "Kooperatif kurmak için gerekli süre girişimin kendi dinamiklerine göre değişebilir. Öyle bir grup yan yana gelir ki on gün sonra kooperatif kurabilir. Ancak beraber çalışmak, beraber toplantılar yapmak, beraber ilkeler geliştirmek, bunlar önemli süreçler. Demokratik ve katılımcı mekanizmalar geliştirmek de. Bu nedenle 3 yıl fazla olabilir, ama bir süre beraber çalışmayı öğrenmekte fayda var."
    },
    {
      id: 11,
      question: "Bireysel olarak ekolojik ürünler satın alıyorum. Kooperatif kursam ya da kooperatiften alsam fiyat olarak avantajlı olur mu? (Toplu alımlarda indirim olur mu?)",
      answer: "Üreticisine bağlı olarak toplu alım yaptığınızda ya da üreticiye alım garantisi verdiğinizde fiyatlar düşüyor olabilir. Ancak biz üreticilerimizin bireylere satışlarda talep ettiği fiyatları bilmiyoruz. Bu nedenle bir karşılaştırma yapma imkanımız olmayabilir. Öte yandan Kadıköy Kooperatifine ortak yada gönüllü olanlar da ürünlerin üzerine konulan paylarla oluşturulan satış fiyatı üzerinden alım yapmaktadır. Herhangi bir farklı satış fiyatımız yoktur."
    },
    {
      id: 12,
      question: "Kooperatif işleyişinde kâr payı ve ürün kârı nasıl oluyor?",
      answer: "Yasal çerçeveye göre kooperatif işleyişinde kâr payı yıl sonunda elde edilen fazlanın ortaklara dağıtılması şeklinde oluyor. Buna karşın Kadıköy Kooperatifi, genel kurulunda ortaklara kâr payı dağıtmama ve elde edilecek fazlayı toplumsal dayanışmaya aktarma kararı aldı. Peki ürün neden üreticiden gelen bedele satılmıyor? Çünkü kooperatifin kendi masraflarını karşılamasının yanı sıra kooperatif çalışmalarının devam etmesi, amortisman masraflarının karşılanması ve toplumsal dayanışma için fon elde edilmesi üzerine belirli oranlar belirlenmiştir. Bu da kâr değildir."
    },
    {
      id: 13,
      question: "Stopaj ödüyor musunuz?",
      answer: "Kooperatif kira ve mali müşavir hizmetleri üzerinden stopaj ödemektedir."
    },
    {
      id: 14,
      question: "Yasal etiketlemeyi takip ediyor musunuz?",
      answer: "Üreticilerimizin, ürünlerini üzerine işletme numarası, üretim tarihi, son kullanma tarihi, üretim yeri gibi etiket mevzuatına uygun bilgileri içeren etiketlemeyi yaparak göndermesini sağlamaya çalışıyoruz. Eksik etiketleme yapan üreticilerimizi muhakkak arayıp ikaz ediyoruz. Etiketsiz ürün satışı yapamıyoruz."
    },
    {
      id: 15,
      question: "Yasal yükümlülükler neler?",
      answer: (
        <>
          Kooperatifin de herhangi bir şirket gibi vergi numarası, ticaret sicil kaydı, tutması gereken resmi defterleri ve ödemesi gereken vergileri var. Ayrıca her yıl genel kurul yapıyor. Kooperatif kurulması için 7 kurucu ortak olması gerekiyor. Bunların yanı sıra gıda tedarik eden her şirket gibi etiket ve ambalaj mevzuatı, hijyen kuralları gibi ilgili yasal mevzuatlara uymamız gerekiyor. İlgili mevzuatlar;<br/>
          <a href="https://www.resmigazete.gov.tr/eskiler/2017/01/20170126M1-6.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline block mt-2">
            https://www.resmigazete.gov.tr/eskiler/2017/01/20170126M1-6.htm
          </a>
          <a href="https://www.resmigazete.gov.tr/eskiler/2011/12/20111217-5.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline block mt-2">
            https://www.resmigazete.gov.tr/eskiler/2011/12/20111217-5.htm
          </a>
        </>
      )
    },
    {
      id: 16,
      question: "Herkes (Ortak dışındaki, tüketici) kooperatiften satın alma yapabiliyor mu?",
      answer: "Evet. Kooperatif dükkanımızdan dileyen herkes ürün satın alabilir. Perakende satışımız mevcuttur."
    },
    {
      id: 17,
      question: "Öğrenciler kooperatifte nasıl çalışılabilir?",
      answer: "Kooperatife ilgi duyan üniversite öğrencilerine, kooperatifle ilgili tezi ya da araştırması olan lisans sonrası öğrenci çalışmalarına destek oluyoruz. Herkes gibi kooperatif gönüllüsü olmak isteyen gençlerin katılımını teşvik etmeye çalışıyoruz."
    },
    {
      id: 18,
      question: "Yaptığınız çalışma çok güzel ama topluma nasıl ulaşacaksınız?",
      answer: "Kadıköy Kooperatifi olarak Kadıköy ilçesini faaliyet alanı olarak belirledik ancak bizler gibi çalışan kooperatif girişimleri, kolektifler ile ortak çalışmalarımız devam ediyor. Bulunduğumuz bölgede kendimizi ifade edebilecek bütün imkanları kullanmaya özen gösteriyoruz: atölyeler, film gösterimleri, ilgili festivallere katılım vb. Her ayın ilk Salı günü 'Kadıköy Kooperatifi Kendisini Anlatıyor' örgütlenme etkinliğimizle tanışmaya, kendimizi anlatmaya, fikrimizi yaygınlaştırmaya devam ediyoruz."
    },
    {
      id: 19,
      question: "Kooperatif başka kurumlarla çalışıyor mu?",
      answer: "Kadıköy Kooperatifi kendisi gibi örgütlü diğer kooperatifler ve gıda topluluklarıyla beraber ortak çalışmalar yapmaya devam ediyor. Anadoluda Yaşam Kooperatifi, Beşiktaş Kooperatifi, Boğaziçi Üniversitesi Mensupları Tüketim Kooperatifi, Koşuyolu Kooperatif Girişimi, Maltepe Kooperatif Girişimi, Birarada Derneği, Salkım Kooperatifi, Ovacık Kooperatifi, Üsküdar Kooperatif Girişimi, Kadıköy Gıda Topluluğu ile ortaklaşa çalıştığımız bir grubumuz var. Bu kooperatifler ve gıda toplulukları ile birlikte 2019-2020 yılı için üreticilerden temel bakliyatların toplu şekilde alımı yapıldı. Yine bu gruplar bilgi, deneyim ve üretici paylaşımlarında birbirleriyle iletişim halinde bu ve benzeri çalışmalarını çoğaltarak dayanışmaya devam etmektedirler."
    },
    {
      id: 20,
      question: "Kooperatif kurma ve sonrasındaki yasal süreçlerde dikkat etmemiz gereken konular nelerdir?",
      answer: (
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Öncelikle kooperatifçilik deneyimi olan profesyonel bir mali müşavir ile süreci yönetmenizi öneririz. Kooperatifler vergi ve denetim konularında şirketlere göre çok daha sıkı denetim ve yaptırımlara maruz kalmaktadırlar.</li>
          <li>Kooperatifler her sene genel kurul yapmak durumunda oldukları için kooperatif kuracaksanız yıl sonunda değil, yılın ilk aylarında kurmanızı öneririz. Böylece yeni yılda tekrar genel kurul yapmak zorunda kalmaz ve genel kurul masraflarından kaçınabilirsiniz. Üst birliğe kayıtlı olan ve genel kuruldan bu şekilde karar alan kooperatifler her yıl genel kurul yapmak zorunda değil. Ancak bu kooperatiflerin dışında kalan kooperatifler her yıl Haziran ayı sonuna kadar genel kurul yapmak zorundadır.</li>
          <li>Eğer vaktiniz varsa genel sözleşme yerine sizlerin ilkelerinize ve taleplerinize uygun bir sözleşmeyle bakanlığa başvurmanız sonraki yıllarda daha rahat etmenizi sağlayacaktır.</li>
        </ul>
      )
    },
    {
      id: 21,
      question: "Kooperatif kurulurken ve genel kurul süreçlerinde yapılacak olan masraflar nelerdir?",
      answer: (
        <>
          <p className="mb-2">Bu süreçte:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Ticaret odası masrafları</li>
            <li>Genel kurul tescil masrafları</li>
            <li>İmza sirküleri masrafları söz konusu olmaktadır.</li>
          </ul>
          <p className="mt-2">Masraflar her sene değiştiği için bu dökümanda net bir tutar belirtmedik. Özellikle kooperatifin ilk genel kurulunun kooperatifler mevzuatını bilen danışmanlarla gerçekleştirilmesini öneririz. Aksi takdirde devam eden süreçte mali ve hukuki riskler söz konusu olabilir.</p>
        </>
      )
    }
  ];

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
          <span className="text-gray-900 dark:text-white font-medium">Sık Sorulan Sorular</span>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Sık Sorulan Sorular (SSS)
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Kadıköy Kooperatifi hakkında merak edilenler
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-6 sm:space-y-8">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-start gap-2 sm:gap-3">
                <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400">
                  {q.id}
                </span>
                <span className="flex-1">{q.question}</span>
              </h2>
              <div className="ml-10 sm:ml-12 sm:ml-14 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {typeof q.answer === 'string' ? (
                  <p className="whitespace-pre-wrap">{q.answer}</p>
                ) : (
                  q.answer
                )}
              </div>
            </div>
          ))}
        </div>

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

