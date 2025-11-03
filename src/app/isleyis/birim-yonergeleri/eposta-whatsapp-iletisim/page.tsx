"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function EpostaWhatsappIletisim() {
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
          <span className="text-gray-900 dark:text-white font-medium">E-Posta ve WhatsApp Kanallarında İletişim Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            E-Posta ve WhatsApp Kanallarında İletişim Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            09.12.2018
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Kooperatif çalışmasında yer alan pek çok insanın yardımlaşarak birlikte ve ahenkli hareket etmesinde ve Kooperatif çalışmalarının yürütülmesinde elektronik posta ve WhatsApp grubu yazışmaları önemli yer tutuyor. Bu haberleşme ortamlarının sağlıklı kullanılabilmesi için herkesin aynı usulü kullanması bireylerin sağlığı ve işlerin kolaylığı için gereklidir.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Yazışmalar her zaman saygılı ve samimi bir dil ile yapılmalıdır. Gruplarda bulunan tüm kooperatif gönüllüleri kooperatifin işleyişini sağlamak üzere gönüllü olarak aynı sorumluluğu paylaşma iradesini göstermiş insanlardır. Yazışmalar da bu sorumluluğu yerine getirmek üzere; yapılması gereken işleri gerçekleştirmek, bir ortak akıl oluşturmak, acil durumları çözmek ve aynı yordamla hareket etmek için yapılmaktadır. Bu nedenle saygısız bir tavır, emir verici veya suçlayıcı ifadeler kullanılması, en baştaki ortak amacı yok eden ve kollektif hareketin yerine bireysel varoluş sorunlarını öne çıkaran tavırlar olarak değerlendirilir.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Günlük yazışmalar içinde kullanılan simge ve emojiler ortamın neşelenmesini ve duyguların kolayca ifade edilmesini sağlasa da, sert ifadelerin veya sataşmaların yumuşamasını sağlamaz. Aksine gerilimi artırıcı etki yaratabilir. Yazışmalar içinde yazım kurallarına ve büyük/küçük harf kullanımına dikkat edilmemesi yanlış anlaşılmalara yol açabilir. Elden geldiğince yazım kurallarına uyulması ve noktalama işaretlerine dikkat edilmesi anlaşmayı kolaylaştırır.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Herkesin geniş zamanının olmayabileceğini, hatta genel olarak zamanın kısıtlı olduğunu göz önünde bulundurarak, belirtilmek istenen konu ile ilgili bütün gerekli bilgiyi olabildiğince kısa ve öz bir biçimde aktarmak; insanların okuduklarında kolayca anlayabilecekleri bir dizge içinde olayları ifade etmek herkesin işini kolaylaştırır. E-posta atarken konu bölümünde konu açık ve net biçimde belirtilmeli, konusuz veya kısaltmalardan oluşan ifadeler kullanılmamalıdır. Konuyu hiç bilmediğinizi ve böyle bir yazışmanın içinde yer aldığınızı varsayarak yazılanların doğru anlaşılması için elinizden geleni yapınız.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Çalışmaya katılan kişilerin eski yazışmaları ve tüm ilişkileri bilemeyeceğini akılda tutarak yazışmalarda kooperatifin ilişkide olduğu -kamuoyunda yaygın olarak bilinmeyen- kurumların mümkün olduğunca kısaltma kullanmadan tam ismini yazın. Yazışmalarda kooperatifin ilişkide olduğu/ilişkiye geçeceği kişi isimlerini yer-kurum-bağlantı bilgisiyle birlikte belirtmeye dikkat ediniz.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Eğer herhangi bir biçimde içinde bir itham veya kızgınlık içeren bir yazışma oluşmuş ise, öncelikle sakin olunmalı ve olayların doğru anlaşılması için sabırla konunun açıklığa kavuşturulmasına çalışılmalıdır. Öfkeye kapılıp yazılacaklar geri dönülmez sorunlara veya çözülemeyecek kırgınlıklara yol açabilir. Her zaman öncelikle olayın ne olduğunu, neden olduğunu anlamaya çalışmak herkes için iyi olur. İnsanların kafasının bir konuya takılmış olabileceğini, sizin söylediklerinizin anlaşılamayabileceğini ve sizin de aynı durumda olabileceğinizi aklınızdan çıkarmayınız. Herkesin her şeyi bilemeyeceği gibi, kendinizin de her şeyi bilemeyebileceğinizi hep hatırlayınız.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Yazdıklarınızı göndermeden önce mutlaka en baştan okuyunuz. Bir e-posta gönderiyorsanız alıcıları kontrol ediniz, eklenmesi gereken dosyaların eklendiğini ve doğru dosyalar olduklarını kontrol ediniz. E-posta gönderirken altına adınızı yazınız, alıcılar e-posta adresinizden kim olduğunuzu anlayamayabilir.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Eğer kooperatife ait bir e-posta adresini kullanarak kooperatif dışında insanlarla yazışma yapıyorsanız, bu yazışma için size verilen inisiyatifin dışına çıkmayınız. İletilmesi gereken mesajın içine başka mesajlar eklemeye çalışmayınız. Sadece belirlenen konuda ve belirlenen çerçevede ifadeler kullanınız. Kendi bireysel görüş, serzeniş ve hınçlarınızdan azade bir ifade kullandığınızı, metni bir başka arkadaşınızla veya gerekli ise birimle paylaşarak denetleyiniz. Birim e-posta adresleri, tüm birim adına kullanıldığı için birim üyelerinin onayı olmaksızın kullanılmamalıdır. E-posta sonunda adınızı "Kadıköy Kooperatifi adına "Adı Soyadı" veya "XXX Birimi adına Adı Soyadı" biçiminde belirtiniz.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bir duyuru ve açıklama yapıyorsanız ifadelerin açık ve net olduğundan, bireysel kalıntılar içermediğinden, yazım kurallarına tümüyle uygun olduğundan, gerekli bilgilerin tümünü içerdiğinden, doğru alıcılara gönderildiğinden emin olmadan göndermeyiniz.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            WhatsApp yazışmalarında grupların asıl kullanım amaçları dışındaki yazışmaları olabildiğince kısa tutmaya özen gösteriniz. Harala gürele arasında çok önemli konuların kaynayıp gitmesine veya yardım bekleyen birisinin çaresiz kalmasına neden olabilirsiniz. Mümkün olduğunca insanları geceleri rahatsız etmeyiniz.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Toplantı Usulü yönergesinde yer alan İletişim üslubu kurallarına uyunuz.
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

