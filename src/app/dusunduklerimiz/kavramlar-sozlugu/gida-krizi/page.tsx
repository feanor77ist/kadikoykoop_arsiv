"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function GidaKrizi() {
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
            <span className="text-gray-900 dark:text-white font-medium">Gıda Krizi</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Gıda Krizi
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              GIDA KRİZİ NASIL GÖRÜNÜR OLDU?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              2007-2008 yılında kapitalizmin dünya ölçeğinde en ağır kriz dönemine girmesi bir çok alanda krizi görünür kılmaya başladı. Yaklaşık 30 ülkede gıda isyanlarının çıkması gıda alanında krizin görünür olmasını sağladı. Temel gıda fiyatlarına yapılan zamlar isyanların ortaya çıkmasını tetikledi.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              KAPİTALİZM NEDİR? VE NEDEN YAPISAL OLARAK KRİZİ DİNAMİĞİ TAŞIR?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kapitalizm azami kar için meta üretimdir. Meta nihai tüketici için kullanım değeri ve ilk üretici için değişim değerinden oluşmaktadır. Üretici kullanmak için değil satmak için üretim yapar. Nihai tüketici ihtiyacını karşılamak için metayı satın alır. Alım satım nesnesi olan metalar piyasada olduğunda alıcı ya da satıcı taraflardan birinin eksik olması durumunda arz fazlası ya da talep eksikliği ile krizi potansiyel olarak içinde taşır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Daha somut bir ifade ile azami karı hedefleyen bir sistem, karlılığı azaltan dinamikleri içinde taşımaktadır. Daha fazla kar etmek için metaların fiyatlarının ucuzlatılması içim rakiplerini rekabet yoluyla piyasadan silmeyi hedeflemektedir. Bunun için üretimin kapitalizasyonu yani makinaların canlı emeğin yerine ikamesi, ileri teknolojilerin icat edilmesi fiyatları kırarak piyasa paylarını arttırmak için yapılır. Rakipleri yok ederek karı maksimuma çıkarmak için her şey mübahtır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Canlı emeğin yerine makinalar ve otomasyon aldıkça kar oranı düşmeye başlar. Üretim alanında düşen kar oranı azami kar için hareket eden sermayenin kısa vadede yüksek karlar kazandığı finans ve spekülasyon alanına kaymasına neden olur. Şişen finans sektörü büyüyerek var olması için gerekli artı değer üretiminin sınırına yaklaştığı 2000'li yılların başından itibaren özellikle emlak sektöründe balonlar hissedilmeye başlamıştı. (Ahmet Tonak, 2004)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Finans alanında emlak sektörü belirgin olarak öne çıkarken gıda sektöründe spekülasyon yapılan alanlardan biri oldu. Üretim alanında sanayiye girdi sağlayan madencilik ve enerji sektöründeki sermaye yoğunlaşması toprak, hava ve suyun metalaşması sürecinin önünü açarak kirliliğin ve tahribatın önünü açtı.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              2010 yılında Çin'in yeterince yağış alamaması sonucu meydana gelen kuraklık sebebiyle buğday stoğunun yeterli olmayacağı yönünde açıklamalar yapılmıştı. Akabinde Rusya'da 130 yılın en kurak yazını geçirdiği için, özellikle hububat üretiminin ancak ülke ihtiyaçlarını karşılayacağı sebebiyle 1 Temmuz 2011 tarihine kadar Rusya ihraç yasağı kararı almıştı. Bunlar haricinde Avustralya'da ki buğday miktarında sıkıntı olmaması ancak buğday kalitesinin düşük olması buna karşılık yüksek proteinli buğdaya olan talebin artması ve Amerika Birleşik Devletleri'nde meydana gelen kuraklık, Karadeniz Bölgesindeki kötü iklim koşulları fiyatını yüksek seviyelerde tutan faktörlerdi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              "Finans piyasalarında yaşanan hareketliliğin hububat piyasalarına kayması ile piyasanın, arz-talep dengesinden uzak bir hareketlilik gösterme riskinin giderek daha da arttığının" altını çizdiler. Buğday üretiminin az olması finansal piyasalarda buğdaya yatırım yapan yatırımcıların sayısını çoğaltırken, buğday işlemlerinden kazanç elde eden yatırımcı sayısının da artmasına sebep oldu. Bu günlerde sakin bir yatırım dönemi geçiren buğday, dünyada üretimi sıkıntıya giren mısır, soya fasulyesi gibi hububatlar arasında en çok tercih edileni olduğu için, arz / talep dengesini 2014 Dünya fiyatları forex piyasasından izlenebilir. Mısırın arkasından dünyada en çok ekimi yapılan buğday, Forex piyasalarının gözde yatırım araçlarından birisidir. Fiyatında yaşanan dalgalanmalar sayesinde altın ve petrol gibi yüksek talep gören emtia ürünlerinden birisi olan buğdayda Forex piyasası yatırımcılar için önemli fırsatlar sunuyor. Kapitalizmin krizinin yarattığı ortamda daha fazla kar için gıda ve hububat sektörüne geçiş yapan fonlar spekülatif karlar yaparken, yerel üretici ürünlerini tüccara teslim ederek değerinin altında elinden çıkarmaktadır.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              GENEL KRİZİN GIDA KRİZİNE YOL AÇAN NEDENLERİNİ 8 BAŞLIK ALTINDA TOPLAYABİLİRİZ.
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              (Gıda Krizi, Tarım, Ekoloji ve Egemenlik, Abdullah Aysu)
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>İklimsel felaketler ve kuraklık,</li>
              <li>Tarımsal ürün stoklarının kaldırılması,</li>
              <li>Tarımda şirketleşme ve tekelleşme,</li>
              <li>İhracata dayalı üretim,</li>
              <li>Gıda tüketim alışkanlıklarındaki değişimler,</li>
              <li>Gıda üzerine finansal spekülasyon ve vurgunların yapılması,</li>
              <li>Tarımsal ürünlerin bitkisel yakıt amaçlı kullanılması,</li>
              <li>Toprak ve su gaspı yoluyla ekolojik tahribat,</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bütün bu nedenlerin birbirleriyle ilişkisini kurmak için kapitalist üretim sisteminin azami kar eksenli üretim sürecinin dinamiklerine bakmak gerekiyor.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Gıda Krizi Nedir?
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Krizi bir şeyin yokluğunda bahsedilir. Normalde bir şekilde ihtiyacımızı karşıladığımız şeyi artık o şekilde karşılayamıyoruz demek. Bütün toplumun besine erişemiyor, ekonomik nedenlerle ve başka nedenlerle. Bir dönem bir afrika ülkesinde fasulye çok kıymetli oluyor, IMF sizin elinizde çok stok var bunları satın diyor. Ülke satıyor ve 2 yıl boyunca kıtlık oluyor ve sonra aç kalıyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gıda bir meta olarak ele alındığı için piyasa koşullarına uygun şekilde hareket etmesi, tüketilmesi, el değiştirmesi gerekiyor. Öte yandan meta olmasının dışında özelliklere sahip bir şey. Hava gibi su gibi: Temel problem buradan kaynaklanıyor. Her canlının ihtiyacı olan bir şey buna bir şekilde ulaşamıyor, bunun birçok nedeni var:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-4">
              <li>Doğal denge ile birlikte gelen azlık ve yokluk</li>
              <li>Plansız üretim (Bir yerde çok üretilmesi, bir yerde üretiminin durması)</li>
              <li>Kötü üretim (Hibrit tohum)</li>
              <li>Bilinçsiz Tüketim</li>
              <li>Adaletsiz Dağıtım</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Topraklara ulaşamaması, gıdanın yatırım olarak kullanılması en temelde bu soruna neden oluyor diye düşünüyorum. Yokluk dışında şu geliyor aklıma, evet toprağı sömürüyoruz, hiçbir şekilde ne ihtiyacımız var ona bakmadan üretim yapıyoruz. Ekolojik tahribata neden oluyor ve sonrasında oluşan gıdaya yönelik krizin olmasına yönelik hibrit tohum gibi şeyler sunuluyor ve biz bunların bize ne şekilde zarar vereceğini bilmiyoruz. Mesela buğday konusunda bir kriz varken, hala ekmekler var veya domatesler pazarda yerini alıyor. Evet gelecekte bir şeyler azalacak ancak giderek daha plastik suni şeyler gelecek. Biz neyi yediğimizi bilemeyeceğiz. Bir yandan kıtlıkla ölüme mahkum ediyor, bir yandan da yokluktaki durumla ilgili bize bir taraftan açlık varken obezite de var. Bir yandan da gıdanın doğru dağıtılmaması gibi bir sorun var aynı para gibi. Bunun tüm canlılar için düşünebildiğimiz gibi tek bir birey üzerinden de düşünebiliriz. Üretimde verimlilik nedeniyle yapılanlarla besin ve vitamin değeri düşük daha kalitesiz ürünlere maruz kalıyor. Abdullah Aysu referansı: 1950'li yıllardaki domates ile şuanki domates arasındaki domatesin gıdanın kalitesi arasında çok fark var. Örneğin 50'lerde 1 kg domatesten aldığımız besini şuan 9 kg ile alabiliyoruz ancak bu gıdayı tüketemiyoruz ve bunu doldurmak için de takviyeler kullanmamız gerekecek.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gıda egemenliği olmadığı için gıda krizi var. Burada yaptığımız şey gıda egemenliği savunması. Üreticiler kar edemediği için, bütün payı büyük şirketler aldığı için ve kendileri piyasaya hakim olduğu için ürün çeşitliliği yerine tek tip ürünü sunmaları onlar için daha kolay.
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

