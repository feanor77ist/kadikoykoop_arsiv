"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function GDOTohum() {
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
            <span className="text-gray-900 dark:text-white font-medium">GDO'lu Tohum</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GDO'lu Tohum
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              GDO'lu tohum ve GDO'lu gıda tam anlamıyla Pandora'nın Kutusu'dur. Açıldığında neler olacağını gerçekten bilmiyoruz. Yani sadece insanlık için bir risk taşımıyor, aynı şekilde ekosistem için de riskli bir konu. Örneğin mısır 3 km'den döllenebilmektedir ve GDO'lu mısır da şu an dünyada oldukça yaygındır. Bu GDO'lu türlerin, doğadaki diğer türlerle döllenme riski var. Bu döllenmenin ekosistem için nelere yol açabileceği meçhul. Okyanuslardaki bir yosun türünün Akdeniz'e gelmesi bile oradaki ekosistemi tehdit ederken, GDO'lu türlerin döllenmesinin doğa için nelere yol açabileceğini az buçuk tahmin edebilmek mümkün aslında. Ekosistemin bir dengesi var ve genetiği ile oynayıp başkalaştırdığınız bir bitkinin ekosistemi olumsuz olarak etkileyebilmesi oldukça yüksek bir ihtimal. Bunu tam olarak bilmeden, dünyayı ve ekosistemi bir deney alanı olarak kullanıp bunu denemeye kalkışmak oldukça tehlikeli.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Aynı şey insan sağlığı açısından da geçerli. GDO'lu gıdaların insan sağlığı açısından nelere yol açabileceğini test etmeden, bu konuda tam bir bilgi sahibi olmadan GDO'lu gıdaların piyasaya sürülmesi oldukça tehlikeli. Bu, insanlığın tamamının kobay olarak kullanılması anlamına geliyor. Üstelik insan sağlığı açısından tehlikeli olabileceğine dair çeşitli araştırmalar da mevcut. İşte bizim GDO'lu tohumlara karşı çıkma nedenlerimiz bunlar. (Bugday.org)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Genetik değişim (GD) modern biyoteknoloji teknikleri kullanarak bitki veya hayvan gibi bir organizmanın genlerini değiştirmektir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Genetiği değiştirilmiş organizma (GDO) genetik değişim yolu ile farklılaştırılan bir bitki, hayvan ya da diğer bir organizmadır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              GD, geleneksel ıslah teknikleri ile yapılamayacak yollardan bir organizmanın genlerini değiştirebilir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bir bitki veya hayvanın da bir kromozomunda bir bölgenin değiştirilmesi sonucunda "o organizma ne üretir ya da önceden ürettiği neyi üretmeyi keser?" sorularının cevabını yanıtlamak çok çok zordur.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Genetiği değiştirilmiş organizma daha önce hiç bilinmeyen ve bir ihtimal doğada hiç var olmamış yeni maddeler (proteinler) üretebilir. Bunların özellikle uzun dönemde bu canlıları yiyenlerde ne gibi etkilere yol açacağını bulmak çok çok zor ve zaman alıcıdır.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              GDO (transgenik) gıdaların özellikle tüketenin sağlığına zararlı etkilerinin olup olmadığını anlamak için risk analizleri yapılmaktadır. Ancak iyi bir risk analizi yapabilmek için metottan ziyade gerekli en önemli bilgi, olası etkilerdir. Örneğin 20 kromozomunda 50.000 gen içeren 2,5 milyar baz taşıyan mısır DNA' sının bu genler aracılığı ile tam olarak neler ürettiğini, bu genlerin korelasyonu ile neler üretebileceğini, genlerin yeri ve yapısında yapılacak yapay bir değişikliğin ne gibi sonuçlara yol açacağını bilmek mümkün müdür? Bu bilinse bile bundan emin olmak çok ama çok zor olacaktır. Çünkü bu bahsettiğimiz 50.000 gen içeren mısır da çalışmadan çalışmaya farklı çeşitlerde olduğundan (yani farklı mısır türleri ile GDO çalışmaları yapıldığından), ortaya akıl almaz bir olasılıklar listesi çıkacaktır ve bu olasılıkları tam olarak bilmeden, yetkin bir risk değerlendirmesi yapılamaz. Çıkan sonuçlardan bilimsel açıdan, istatistiki güvenilirlik payları ile bile emin olunamaz. (Karasaban.net)
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

