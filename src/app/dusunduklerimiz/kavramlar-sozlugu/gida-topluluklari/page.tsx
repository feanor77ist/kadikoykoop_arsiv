"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function GidaTopluluklari() {
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
            <span className="text-gray-900 dark:text-white font-medium">Gıda Toplulukları</span>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Gıda Toplulukları
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Tarihçe
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              1970'li yılların başından itibaren endüstrileşme, tarımda yoğun kimyasal kullanımı, çevresel kirlenme ve biyoçeşitliliğin kaybı, artan şirket hegemonyası gibi nedenlerle ortaya çıkan olumsuzluklara karşı, tüketilen gıda ve gıdaya erişimde yeni modeller oluşturulmuştur. Temiz ve adil gıdaya aracısız ulaşmak amacıyla bir araya gelen insanlar, "Gıda Topluluklarını" oluşturmuştur. Gıda Toplulukları'nın bir kısmı sağlıklı ve nitelikli gıdaya erişim için, bir kısmı ise daha ziyade ekonomik kaygılarla, gıdaya daha ucuz erişebilmek için kurulmuştur.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Gıda topluluğu nedir?
            </h2>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
              Tanımlar:
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sağlıklı gıda arayışındaki bilinçli tüketicilerin –daha doğrusu 'türeticiler'– piyasa şartlarının zorluklarına inat doğa dostu yöntemlerle küçük ölçeklerde üretmeye devam eden üreticilerle bir araya geldiği, aracıların bulunmadığı, üretenle kullananın doğrudan iletişime geçebildiği bir sistemi hayata geçirenlerin oluşturduğu topluluklardır. (Buğday Derneği)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Topluluk Destekli Tarım, Katılımcı Onay Sistemleri ve benzeri modeller dahilinde doğal ve yerel gıdayı üretenlerle, bu gıdayı talep edenler arasında köprü olan toplulukların oluşturduğu sistemdir. (Yeryüzü Derneği)
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gıda Toplulukları, merkezinde gıda üretimi ve gıdaya erişim olan ve gönüllü birliktelik temelinde işleyen topluluklardır. (Ceyhun Temürcü)
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Gıda Toplulukları Neler Yapar?
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Yoğun ilaç, suni gübre kullanımı ve monokültür üretim özellikleriyle tanımlanabilecek endüstriyel gıda üretimine alternatif, doğal ve ekolojik üretim yöntemlerini destekler.</li>
              <li>Küçük aile çiftçiliğinin varlığını sürdürebilmesine katkı sağlar.</li>
              <li>Tüketicilerin/türeticilerin sağlıklı, mevsiminde ve doğal gıdaya ulaşımını sağlar.</li>
              <li>Üreticiler için adil bir fiyatın oluşmasını mümkün kılmaya çalışır.</li>
              <li>Aracıyı ortadan kaldırarak üretici ile tüketici arasında güven oluşturur.</li>
              <li>Tüketicinin kendisine sunulan ürünü satın almanın ötesine geçip üretim sürecinde sorumluluk almasına ve yarı üretici olmasına vesile olur.</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
              <strong>Kısaca tanımlarsak (taslak):</strong>
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Topluluk Destekli Tarım, Katılımcı Onay Sistemleri ve benzeri modeller kullanarak gıda üretimi ve gıdaya erişim konusunda aracıyı ortadan kaldırarak üretici ve tüketiciyi bir araya getiren, yarı üretici olmayı teşvik eden, gönüllülük temelinde bir araya gelmiş topluluklardır.
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

