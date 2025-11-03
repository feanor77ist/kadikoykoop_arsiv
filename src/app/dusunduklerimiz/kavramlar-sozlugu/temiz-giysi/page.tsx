"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function TemizGiysi() {
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
            <span className="text-gray-900 dark:text-white font-medium">Temiz Giysi</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Temiz Giysi Kampanyası
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Temiz Giysi Kampanyası 1989 yılından beri uluslararası alanda işçi hakları, özelikle de tekstil sektöründe işçilerin koşullarının düzelmesi için mücadele eden Clean Clothes Campaign'in (CCC) Türkiye koludur. Türkiye, CCC'nin Avrupa'daki 17. Platformudur.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              CCC tekstil üretimi yapan ülkelerdeki yerel sorunları ve hedefleri tespit etmek için 200'den fazla kurum ve sendikadan oluşan ortak bir ağa dayanır. Bu ağ, isçilerin hedeflerine ulaşmasında destek olmak adına yürütülen kampanyalarda strateji geliştirilmesine yardımcı olur.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Temiz Giysi Kampanyası, tekstil sektöründeki işçilerin adil ücret karşılığı, sağlıklı koşullarda çalışması için farkındalık yaratır; hak ihlallerine karşı çıkar, bu alanda mücadele eden işçilere destek sunar. Kampanya düzenleyicileri tüketicileri eğitip mobilize eder, hükümetlere ve şirketlere lobi faaliyetlerinde bulunup, isçilere doğrudan dayanışma desteği sağlar.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Temiz Giysi Kampanyası aşağıdaki prensipler üzerine kurulmuştur:
            </h2>

            <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
              <li>Tüm isçilerin– cinsiyetine, yasına, kökenine, yasal statüsüne, istihdam durumu ve konumuna, veya diğer temellere bakılmaksızın- onurlu bir yaşam sürmelerine izin veren bir geçimlik ücreti kazanarak, toplu pazarlık yapma ve serbestçe örgütlenme temel haklarını kullanabilecekleri iyi ve güvenli bir çalışma koşuluna hakları vardır.</li>
              <li>Bu haklar ile ilgili minimum standartlar ILO Bildirgeleri'nden, 1998'de yılında kabul edilen Çalışmaya İlişkin Temel Haklar ve İlkeler ILO Bildirgesi' den, bunun yansıra Evrensel İnsan Hakları Deklarasyonu'nun 23. Maddesi'nden türetilmiş ve hazır giyim ve spor giyim endüstrileri için çalışma uygulamaları TGK model kodunda listelenmiştir. Bu haklar, kendileri veya iş yerleri resmen tanınmasa bile, bütün işçiler için geçerlidir.</li>
              <li>İsçilerin haklarını bilmeye hakkı vardır. ( ulusal ve uluslararası yasa ve anlaşmalar altında, bunun yanısıra gönüllü girişimler ve anlaşmalar altında) Bu haklara ilişkin eğitim ve kurs alma hakkına sahiptir.</li>
              <li>Kamuoyunun nasıl ve nerede hazır giyim ve spor ayakkabıları üretildiğini bilmeye hakkı vardır.</li>
              <li>İsçiler, kendilerini örgütleme ve güçlendirme konusunda kendileri öncülük etmeli ve edebilmelidir.</li>
              <li>İsçiler, en iyi kendi haklarını savunurken kendi ihtiyaçlarını ve aldıkları riskleri değerlendirirler. Kamuoyu kampanyaları ve hak ihlalleri durumunda harekete geçen diğer girişimler ve bu konulara dikkat çekmek için geliştirilen stratejiler isçilere yada isçi temsilcilerine danışılarak yapılmalıdır.</li>
              <li>Kamuoyu isçilerin haklarının gözetildiğini görmek için harekete geçmeli ve geçebilmelidir. Ancak, TGK genel olarak boykotları eylem için bir araç olarak tevsik etmemekte ve onaylamamaktadır.</li>
              <li>İsçi haklarını elde etmek ve korumak için hak ihlallerinin altında yatan ya da kolaylaştıran toplumsal cinsiyet konuları ele alınmalıdır.</li>
              <li>Hazır giyim ve spor ayakkabı endüstrileri ( fabrika sahipleri, acenteler, üretici firmalar, konfeksiyon markaları şirketleri, perakendeciler ve diğerleri) iyi iş uygulamalarının endüstrilerinin her seviyesinde norm olduğundan emin olma sorumluluğu vardır. Sektörün mevcut yapısı göz önüne alındığında, konfeksiyon markaları ve perakendecilerin iyi çalışma koşullarının yerine getirildiğini sağlamak için konumlarının gücünü kullanmalıdırlar.</li>
              <li>Kural uygulama aktivitelerini geliştirmek, rehberlik etmek ve denetlemek için; konfeksiyon kuruluşları ve perakendeciler, TGK model kurallarında belirtilen standartları takip eden çalışma pratiği kuralları adapte etmeli,konfeksiyon fason üretim zinciri boyunca bu standartları uygulamayı taahhüt etmeli ve güvenilir, şeffaf ve katılımcı çok-paydaşlı doğrulama girişimlerine katılmalıdır.</li>
              <li>Konfeksiyon markaları şirketleri ve perakendeciler sendikalar ile aktif olarak sosyal diyalog sürdürmeli ve bu diyaloglara olanak sağlamak için ise uluslararası çerçeve anlaşmalarını imzalamalıdırlar.</li>
              <li>Şirketler, tedarik zincirlerinin koşulları ve yapısı hakkında ve iyi çalışma koşullarının korunması ile ilgili eylemleri üstlenmek konusunda şeffaf olmalıdır.</li>
              <li>Sendikalar ve sivil toplum örgütleri hazır giyim ve spor ayakkabısı endüstrilerinin koşullarını düzeltmek ve isçilerin yetkinleşmesini kolaylaştırmak için korumacılığa başvurmadan ulusal, küresel ve bölgesel olarak işbirliği yapmalıdır. Bu tarz işbirlikleri, birbirlerinin farklı rolleri ve yöntemlerine karşılıklı saygıya, açık ve aktif iletişime, yapıcı eleştirilere ve katılımcı görüş birliği kurmaya dayalı olmalıdır.</li>
            </ul>
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

