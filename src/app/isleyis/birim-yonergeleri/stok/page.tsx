"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function Stok() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/isleyis" className="hover:text-blue-600 dark:hover:text-blue-400">İşleyiş</Link>
          <span>/</span>
          <Link href="/isleyis/birim-yonergeleri" className="hover:text-blue-600 dark:hover:text-blue-400">Birim Yönergeleri</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Stok Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Stok Sayımı Yönergesi
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Dükkandaki stok sayımı tüm mutfağın sorumluluğudur. Çeşitli görevlerle birlikte mali birim ve koordinasyon birimi bu görevin takipçisi konumundadır.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Stok sayımı yapılmadığı takdirde ortaya çıkan sorunlar maddi kayıp, stok sorunlarının ve sebeplerinin tespit edilememesi gibi yalnızca mutfağa dair sorunlar gibi görünse de; ayın sonunda bir stok sayımı yapılarak mali müşavire teslim edilmesi (mali birimin sorumluluğunda) iş kaleminin de gösterdiği gibi devletin takip ettiği mali kalemler içindedir. Stok sorunları ve kayıpların Kooperatif tarafından mali olarak açıklanabilmesi gerekmektedir. Masraf, fire gibi yöntemler zaten masraf ve fire olarak kullanıldıklarından (ve mali müşavir bu yöntemlerin de sık kullanılmaması tavsiyesinde bulunduğundan) ekstra her stok farkı mali ve resmi olarak sorumluluk yaratmaktadır.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bu sebeple stok sayımı tüm mutfağın paylaştığı bir sorumluluktur.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stok Sayım Süreci
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Stok sayımı; dükkanda satışta olan tüm ürünlerin sayılması ve pirotta kayıtlı stok bilgisi ile karşılaştırılmasını içerir. Sayım sonrasında mali birim yapılan sayım bilgisine göre pirotta ve mali birim kayıtlarındaki stok bilgisini güncelleyecektir.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Stok sayımı her ayın son pazarı, nöbet doodle'unda stok sayım nöbetini alan gönüllü tarafından yapılmaktadır. Her ne kadar nöbet 1 saat olarak belirtilmiş olsa da, artan ürün sayısı sebebi ile en az 2 gönüllü tarafından yapılması iyi olur. Eğer bir kişi tek başına sayım yapacaksa sayım iki saat veya ürün durumuna göre daha fazla sürebilir. Gönüllüler aldıkları sayım nöbeti sırasında stok sayımı yapar ve stok sayım dökümanını doldururlar.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Stoklar belirlenirken, ürüne ait pirotta tanımlı birime uygun sayım yapılmalıdır. Örneğin bulgur 1er kilogramlık paketler halinde satıldığı için mevcut paket sayısı belirlenir. Ancak peynir tartılarak satıldığı için dolapta mevcut olan peynirlerin tartılması ve bu miktarın sayım miktarı olarak kaydedilmesi gerekir. Topluca çok miktarda alınıp dükkanda paketlenen ürünlerin sayımı çuvalları tartabilecek uygun bir tartı alınana kadar mümkün olmayabilir.
            </p>

            <div className="space-y-4 mt-6">
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Stok sayımı dökümanı Kadıköy Kooperatifi Arşivi&gt;Dükkan&gt;Stok Sayım Tabloları konumunda sayım yapılan tarihe göre sayımı yapan gönüllü tarafından her ay yeni excel dökümanı açılarak hazırlanır. Sayım yapan nöbetçi bu doküman üzerine bilgileri yazarak kaydeder, mali birime haber verir. Mali birimin stok düzeltmesi yapabilmesi için bu dokümanın sayım yapılan günün akşamı ya da bir sonraki gün nöbetten en az 2 saat önce güncellenmiş ve mali birime iletilmiş olması gerekir.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Stok sayım dökümanı nasıl doldurulur?
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Sayımı yapan nöbetçi pitot/stok durumundan güncel stoğu excele aktarır. Bunun için Ürün sayfasında sol alt köşede yer alan Stok Raporu butonu kullanılır. Buton tıklanınca stokDurumu.csv adlı bir dosya indirilecektir. Bu özel uzantılı dosyayı kullanabilmek için Google Sheets kullanabilirsiniz. Google Sheetsde yeni bir döküman oluşturup açılan yeni pencerede "Dosya" menüsünde "Aç" yaparak dialog penceresi açabilir, bu dialog penceresinin son tabıyla pirottan indirdiğiniz stokDurumu.csv yi düzgün bir şekilde içeri alabilirsiniz. Dosya içeri alındıktan sonra "fiyat" kolonu bilgisi de görülecek, stok sayımı için buna ihtiyaç yoktur, komple o kolon kaldırılabilir. Burada pirottaki miktarın yanına Dükkan ve Fark adında iki kolon eklenir. Dökümana tarih ve isim yazılır.</li>
                  <li>Sayım yapan nöbetçi excelin dükkan kısmına yaptığı sayım sonucu bulduğu miktarı yazar. Fark kolunu için basit bir formül yazılır. (=Pirot-Dükkan) Arada fark varsa, değerler tabloya girilince fark formülle hesaplanır ve fark sütununda görünür.</li>
                  <li>Aktif olarak satılan ürünler sayım yapılan gün dükkanda kalmamış olabilir. Bunların kontrolü yapılarak dükkan kolonlarının doldurulması gerekir.</li>
                  <li>Aktif olmayan ürünler varsa zaten sayım sonucu sıfır çıkacağı için sorun olmaz. Bu ürünler pirotta Q harfi ile başlayan isimlerle işaretlenmiştir.</li>
                  <li>Herhangi bir sorun nedeniyle sayılamayan ürünler dokümana not edilir.</li>
                  <li>Dükkanda satışı olmayan ama pirotta stoğu var görünen ürünler de dökümana not edilir.</li>
                  <li><strong>Dikkat!</strong> Sayımın doğru girildiğinden emin olunuz. Fark bölümündeki formülü değiştirmemeye özen gösteriniz.</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Mali birim, stok sayım belgesinde fark olan ürünleri işaretler. Bu işlem düzeltmelerde yardımcı olacağı gibi yapılan hatalar sonucunda stoktan kaynaklanan kayıp ya da fazlayı mutfağa aktarmakta yararlı olacaktır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Mali birim; döküman üzerindeki stok farklarına ve nöbet defterindeki kasa farkına bakarak stoklarda 3 tür düzeltme yapar:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li><strong>İlk düzeltme;</strong> dükkan kasasında bulunan para ile Pirot'ta görünen para miktarı arasındaki farkı stok farkları ile eşitlemektir. Örneğin; dükkanda 8 mercimek, Pirot'ta 10 mercimek görünmekte ve kasada pirot'tan 25 TL fazla nakit para olduğu görünmektedir. Mercimek satış fiyatını 10 TL kabul edelim. Burada mercimeklerin satıldığı, paranın alındığı fakat Pirot'a işlenmediği senaryosu üzerinden mali birim Pirot'ta 2 mercimek satışı yaparak kasa farkını 5 TL'ye, mercimek stok farkını 0'a indirir.</li>
                  <li><strong>İkinci tür düzeltme,</strong> cevizli-tb ekmek, ince-kalın bulgur, domates-biber salçası gibi birbiriyle karışması muhtemel ve sık rastlanan ürünlerde gözle görülür stok farkları varsa; burada cevizli satılıp tb olarak Pirot'a girildiği senaryosu üzerinden Pirot'taki "stok düzeltme" aracı ile düzeltme yapılır.</li>
                  <li><strong>Üçüncü düzeltme,</strong> satış ile düzeltme ve karışan ürünlerin düzeltilmesinin ardından kalan stok farklarının düzeltilmesidir. İkinci ile aynıdır, fakat ikincide yürütülen tahminin aksine bu stok farklarının neden kaynaklandığına dair bir açıklama bulunmamaktadır.</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Stok düzeltmelerini yapan mali birim mutfağa duyuru yaparak bi sonraki günün nöbetçisini bilgilendirir. Mali birim stok ve satış işlemleri ile ilgili tekrar eden hataları mutfağa bildirerek önlem alınmasını ister. Mutfak satış, stok girme ve stok sayım işlemlerinde her zaman sakin ve dikkatli olmalıdır. En ufak farkın bile kaynağının bulunması uzun saatler süren araştırmaları gerektirmektedir.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Nöbetçiler stok girerken ve satış yaparken doğru ürünü ve miktarı girdiğinden emin olmalıdır. Aynı ürünün farklı üreticilerden temin edilen çeşitleri olduğunda tüm işlemler dikkatle ve doğru ürün seçilerek yapılmalıdır. Ürünlerin fiyatları ve miktarları farklı olduğundan daha sonra geriye dönük düzeltme yapmak hesapları içinden çıkılmaz hale getirir.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-semibold">
              Stoklardaki hatayı en aza indirmek için, stok girişlerini doğru yapmak ve satışları doğru girmek gerekmektedir.
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
      </main>

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
    </div>
  );
}

