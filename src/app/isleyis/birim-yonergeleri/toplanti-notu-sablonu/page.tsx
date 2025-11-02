"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function ToplantiNotuSablonu() {
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
          <span className="text-gray-900 dark:text-white font-medium">Toplantı Notu Şablonu</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Toplantı Notu Şablonu
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Aşağıdaki şablon düzeninde tutulan toplantı notları koordinasyon birimine aktarılmalıdır. Birim, gelen notları gözden geçirdikten sonra kdkkoop.belge@gmail.com arşiv hesabını da e-posta alıcılarında bilgi kısmına ekleyerek notları mutfak grubuyla paylaşacaktır.
          </p>

          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <div className="font-mono text-sm text-gray-900 dark:text-gray-100 space-y-4 whitespace-pre-line">
{`GG/AA/YYYY Mutfak Toplantısı Notları

Başlangıç Saati: …:... - Bitiş Saati: …:...

Moderatör: … Yazman: …
Katılımcı sayısı: ...
Duyurular:
	•	...
	•	...
Gündemler:
	•	...
	•	...
	•	…
	•	...
*(Bir sonraki toplantıya kalan gündemleri kalın olarak ya da renklendirerek belirtelim)

Birim Bilgilendirmeleri:

	•	… Birimi:

	Konu: …
	Birimin Bilgilendirmesi/Önerisi: ...
	Sonuç: ...


(Gündemlerin Yazımı)

	•	Konu: … 

*(Konunun adını gündemde de belirtildiği şekliyle, kısa ve anlaşılır biçimde açıklamasını yapalım)

Öneri 1: ...
Öneri 2: ...
Öneri 3: …

*(Önerileri yazarken kişiler üzerinden Ali'nin Önerisi, Ayşe'nin Önerisi şeklinde değil, Öneri 1, Öneri 2 şeklinde fikirler üzerinden yazalım)

Sonuç: … 

*(Sonuçları toplantıda çıkan sonuca göre özet bir şekilde, gerekçeleri de ekleyerek "eğilim ya da karar" olarak yazalım. Gerekli detayları (son tarih, varsa sorumlusu, ertelendiyse tarihi vs gibi) belirtelim.)`}
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

