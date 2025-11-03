"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function BasinlaIliskiler() {
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
          <span className="text-gray-900 dark:text-white font-medium">Basınla İlişkiler Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Basınla İlişkiler Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Ocak 2019
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Farklı türde basılı-görsel yayın organları ile iletişime dair çerçeve önerisi
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bu metin Kadıköy kooperatifi olarak basınla nasıl, hangi saikler üzerinden ilişkileneceğimize dair bir çerçeve sunmak ve bunu tartışmaya açmak amacıyla olası vakalar karşısında alacağımız tavır ve inisiyatiflerin sınırları hakkında sorular ve yöntemleri tartışmaya açmayı amaçlamaktadır.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Çıkarılan sorular;
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
              <li>basınla görüşme konusundaki deneyimlerimiz ve teamüllerimiz nelerdi?</li>
              <li>kooperatifte basın ve yayım organlarına demeç vermek, söyleşiye katılmak, yazılı ürün oluşturmak konusunda herkesin bilgi, deneyim eşitliği sağlamasını beklemek gerçekçi olmasa da bunu yakınlaştıracak pratikler nasıl olmalıdır?</li>
              <li>basın kuruluşlarını nasıl ayrıştırabiliriz/ayrıştırmalı mıyız?</li>
              <li>etkinlik vs. gibi durumlarda basınla nasıl ilişkileneceğiz?</li>
            </ol>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                1-
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kadıköy Kooperatifi bugüne kadar basınla ilişkilenmesini hangi basın sorusu üzerinden gerçekleştirdi. Uzlaşılan, konsensüse varılan bir konu olmasa da büyük medya kuruluşlarının davetlerini kabul etmedi. Daha çok dirsek temasımızın olduğu, aynı ya da paralel dünya görüşüne sahip basın kuruluşları ile ilişkilendi. Bunu tercih etmesindeki en temel 2 sebep; büyük medyanın bu bilgiyi nasıl kullanacağına dair bilme ve müdahale sürecinde yer almıyor olduğumuz düşüncesi diğeri ise yasal sorunlar ve mevzuatların tamamlanamamış kısmının getireceği sorumluluğu kaldıramayacak olması. Bu nedenle müdahalede bulanabileceğimiz, kendimizi ifade ederken daha rahat olduğumuzu düşündüğümüz basın kuruluşlarıyla ilişkilenmeyi tercih ettik. Buradaki temsiliyetimizi de rotasyon ve eski-yeni gönüllü aktarımı üzerinden kurduk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                2-
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kadıköy Kooperatifi büyüyen, görünürlüğü her geçen gün artan ve deneyimini aktarma konusunda çokça yerden davet alan bir örgütlenme modeli haline geldi. Nihai olarak bizler yaptığımız işi ve örgütlenme modelimizi aktarırken bir örgütlenme modeli olarak kooperatifleşme fikrinin altını sıkça çiziyoruz. Bunu yaparken aslında bir çağrıda da bulunuyoruz; sizde örgütlenin! Bu çağrının aracıları olarak basın kuruluşlarından kooperatife gelen çağrılarda önceliğimiz rotasyon oldu. Yani temsiliyetin görünür kısmında da rotasyon bizim için elzem.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Burada karşılaştığımız sorunlar; gelen davetlere kooperatif olarak katılma kararı aldıysak davetin hangi gün ve saatte olduğu idi. Kooperatifin gönüllüsü olan herkesin aynı zaman dilimde uygun olması mümkün olmadığı için, mümkünse röportaj gibi görsel yayımları hafta içi mesai saatleri dışında (akşam-hafta sonu) yapmayı teklifi getirene önermek önemli. Böylece mesaili çalışan arkadaşlarımızın sürece dahil olmaları önündeki engeli aşmaya çalışmış oluruz. Mümkün değilse uygun olan gönüllünün katılımıyla gerçekleşmiş olur.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Temsiliyet meselesinde kooperatifin işleyişini ve kooperatifleşmeyi bütün gönüllülerin aktarabilir düzeyde olması beklenir. Bu düzeyin hitabetin güçlü, deneyimin fazla olmasından bağımsızlaştırmak için eski ve yeni gönüllülerin birlikte katılımı önemli. Anlattıkça kolaylaşan ve kafamızdaki soruları berraklaştıran bir süreç olduğunu unutmadan gelen davetlere 2 kişilik ve eski-yeni gönüllü olarak icabet etmeliyiz. Herkesin katacağı, ifade edeceği şeyin ayrı bir öneme sahip olduğunu unutmadan "eski gönüllü"lerin de bu rotasyon içinde süreçte yer almaları gerekmektedir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Örnek vaka; 2.yıl etkinliğimizde gelen yayın kuruluşlarına aynı kişi/kişiler tarafından röportaj verilmesi Kadıköy Kooperatifinin katılımcılık esasına uygun olmadığı görüşü. Deneyimlerimizden biliyoruz ki mutlaka röportaj talebi gelecektir. Burada yaşanan temel eksiklik önceden basınla ilgilenecek eski ve yeni gönüllülerden oluşan bir ekibin belirlenmemiş olması. Dışa dönük etkinliklerimizde etkinlik ekibi ya da mutfak (etkinliğin kapsamı ve ölçeğine göre değişebilir) basından sorumlu kişileri belirlerse ve bunun da rotasyonla olması gerektiğini benimserse katılımcılık daha kolaylaşır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bir diğer mesele ise; tarihsel ve politik olarak erkeklerin kendini ifade etme rahatlıkları ve söz söyleme konusunda çok daha istekli olmaları kooperatifte yer alan kadın gönüllülerin önünü tıkamamalı. Buradan beklentimiz erkeklerin kadınlara yol vermesi, kadınlardan gönüllü varsa öncelikle kadın gönüllünün katılımının desteklenmesi teamülü geliştirilebilir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ortak bir dili inşa etmek birlikte düşünme ve tartışma pratiklerinden geçer. İç eğitimlerimiz ve politik tartışmalarımız belirli aralıklarla tekrarlanmalı, bilgi ve deneyim aktarımı bu tartışmalar perspektifinde Kadıköy Kooperatifi ortak fikri haline gelmelidir. Bizleri besleyen, geliştiren ve sadece bir model aktarımından öteye taşıyacak olan şey gıda-tarım-su-hayvancılık-tüketim- kır/kent politikalarına dair tartışmak ve bu tartışmaları bir çıktıya dönüştürmek olacaktır. Böylece ortak bir zemin kolektif olarak inşa edilebilir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Örnek vaka; kavramlar atölyesi. Bu tartışmalar dizisi kooperatifin gönüllüleri tarafından ortak politik bir dil oluşturmak ve temsiliyetimizi inşa ederken hangi kavramlarla tartışacağımızı, ifadelendireceğimizi ve derecelendireceğimizi kolaylaştıracak bir ihtiyaç olarak karşımıza çıkmıştı. Hem yaptığımız işe kattığımız mana ve motivasyon açısından verimli tartışmalar oldu hem de Kadıköy Kooperatifi bu kavramı neden kullanır ve nereye oturtur anlamında çıktılarımız oldu. Bu atölyeyi takip etmek, katılmak tüm gönüllüleri geliştirecek bir araç olarak düşünülebilir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Yaptığımız atölyeler, iç eğitimler ve tartışmalara dair gönüllülerin geriye dönük okumalar yapması kişisel bir çaba olmanın ötesinde bir gerekliliği ifade etmektedir. Burada eşlikçinin desteği ve yol göstermesi oldukça önemlidir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bir diğer mesele, yazılı ürün çıkartmak. Kadıköy Kooperatifine dair aynı kişiler tarafından yazılan yazılar belirli kişileri hızlandırıp, yetkinleştirirken diğer gönüllüler için daha az yapılabilir pratiklere dönüşmekte. Burada Kadıköy Postası ve web sitesi önemli bir işlevi üstlenebilir. Hepimizin rotasyon dahilinde yazdığı yazılar geliştirici olacaktır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Çekinceli olan gönüllüler için ortak yazma pratiği kolaylaştırıcı bir yöntem olabilir. İkili üçlü gruplar halinde yazmaya çalışmak birbirimizin motivasyonunu güçlendirebilir ve yazım sürecini teşvik edebilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                3-
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Basın kuruluşlarını ayrıştırırken ana tartışma eksenimiz ana akım medya ve ana akım medyanın dışında kalan çoklukla alternatif olarak değerlendirebileceğimiz, doğru bilgiye ulaşma konusunda daha güvenilir bir zeminde durduğunu düşündüğümüz basın kuruluşları olarak ayırabiliriz. Bu başlığa dair sorduğumuz sorulara verdiğimiz yanıtlar ve yapacağımız tartışma, alacağımız pozisyonu da belirleyecektir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ana akım basın kuruluşları için öngörümüz; haberin niteliğini manipülatör yansıtma potansiyeli (başımıza gelen örnekler var mı?), içerme stratejisi ile yapılan işin altını boşaltma ihtimali (kaygılarımız neler?), hitap ettiği kesimin bizim hedef kitlemiz olup olmaması (değilse neden?), görünürlüğün artmasının getireceği sıkıntılar (ölçümüz ne?).
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Alternatif basın kuruluşları; belirli bir network içindeki kurumlar olması hasebiyle eğer mevcut bir kaygımız varsa rahatlıkla bunu söyleyebileceğimiz ve ne kadar aktarırsak o kadarının dolaşıma sokulacağı görüşü, yaptığımız işin politik hattına uygun yayın organlarında yer almanın tutarlı olacağı, kişisel olarak (hazirun total olarak aynı siyasi görüşün toplamı olarak var olmadığından) siyasi görüşlerimiz nedeniyle bu yayın organlarıyla ilişkilenmemek gerektiği, Türkiye'nin siyasi konjonktüründe aldıkları pozisyonların belirleyici olduğu görüşü.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Öne çıkan bu tartışmalar ve fikirler ekseninde ortak bir görüşe henüz kooperatif ulaşabilmiş değil.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bu sorulara dair cevaplar üretmeden bir yönerge hazırlamak doğru olmayacaktır. Ancak tartışma eksenine dair kolaylaştıcı bir öneri sunmak adına şu yaklaşım geliştirilebilir:
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kadıköy Kooperatifi'nin yaptığı işin kendisi politiktir. Dolayısıyla total bir siyasi görüşü temsil etmez; ancak, yaptığı çalışmanın politikasını örgütler, yayar, buna yönelik araçların oluşmasına imkan sağlar. Yaptığı politikanın aktarım kanallarını yansıtabileceğini düşündüğü yerlerde (elbette gönüllü varsa) kendini anlatmalı, sözünü çoğaltmalıdır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatif dar bir çevre grubu yahut ortak siyasi görüşleri paylaşan insanlardan oluşan bir siyasi örgütlenme olmadığı için sözünü çeşitliliği ile çoğaltacak araçlar geliştirebilir. Yine benzer şekilde, farklı siyasi çevrelerden ve yatkınlıklardan (bunlar kendi arasında uzlaşmaz veya çatışmalı da olabilir) kişi ve kurumlara kendi görüşlerini ifade edebilir- bunun kanallarını açabilir. Yaptığımız politikayı önemseyen ve buna destek olmak, görünür olmasına katkı sağlamak isteyen yayıncılarla deneyimlerimizi paylaşabiliriz.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatifin mevzuatlar vs gibi kaygılarını tüm kurum ve kuruluşlar için değerlendireceksek başka bir tartışmayı zorunlu kılar. (eksikliklerimizi nasıl gidereceğimiz ve bunun zamanlamasının nasıl olacağı gibi) Ancak anaakıma geldiğinde bu kaygılarımız belirginleşecek ise başka bir tartışmayı yapmak gerektiği ortaya çıkmaktadır. Bize yakın olduğunu düşündüğümüz tüm yayın kurumları devlet aktörleri tarafından çok daha yakından incelenmekte ve takibe alınmaktadır. Örneğin; İmc tv ile programa katılmak ile kanal d den gelen bir program davetine bu nedenle katılmamak arasında hukuksal olarak kaygımızı azaltan bir denklem bulunmamaktadır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bu kurumlardan bizi kimin (kişiye ait program gibi) davet ettiği ve genel perspektifinde nasıl programlar hazırladığı değerlendirilmelidir. Dolayısıyla manipülasyon ihtimaline dair kendi çapımızca önlem almaya çalışabiliriz. Gördüğümüz kadarıyla çeşitli yayın kuruluşlarında buna anaakım medyada dahil olmak üzere haberimiz olmadan haber mahiyeti taşıyarak konu olabiliyoruz. Bunu engellemek gibi bir pozisyonumuzun olması mümkün değil. Ancak fikri ve aktarım şekli olarak bizim için uygun olmayan bir durum gerçekleştiğinde öncelikle bu yayını yapanla düzeltilmesi talebiyle iletişime geçilir ve kendi sosyal medya kanallarımızdan duyurumuzu yapabiliriz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                4-
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bir diğer husus da etkinliklere davetli basın ve haberimiz olmadan etkinliklerimize katılan basın tartışmasıdır. 3. kısımda tartışmaya dair eğilimimiz bu başlığı da belirleyecektir. Etkinliklerimizde basınla ilişkilerden sorumlu olan bir gönüllü ekibinin olması kimin geldiği, nasıl bir ağ üzerinden dahil olduğu gibi konulara dair bilgi sahibi olmamız açısından önemlidir. Ayrıca bu ekip, o spesifik etkinlikteki bütün basın ilişkilerini üstlenebilir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bugün kullanılan sosyal medya araçlarını sınırlandırmak mümkün değildir. Etkinliğimize başlarken kayıt alınmasına dair bir çekince var mı sorusu toplama sorulmalı eğer çekince yoksa kimin kayıt aldığı (kişisel telefonlarından canlı yayın yapanlar, bloggerlar vs.) önemini yitirmektedir. Bildiklerimiz ve bilmediklerimiz, tanıdıklarımız ve tanımadıklarımız üzerinden bunu değerlendiremeyiz. Kayıt alımına dair bir itiraz olup olmadığı sorulmalı- ayrıca kaydı alan kişinin de kaydı ne amaçla aldığını ifade etmesi beklenmelidir. Bu takipte yine etkinlik için basınla ilişkilenecek gönüllü ekibi tarafından yapılmalıdır. Zira gören herkesin sorduğu bir durum katılımcı tarafından rahatsız edici olabillir.
              </p>
            </div>
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

