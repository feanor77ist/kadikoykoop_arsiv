"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useState } from "react";

export default function MedyadaCikanlar() {
  // Haber sayıları
  const haberSayilari = {
    2016: 4,
    2017: 7,
    2018: 6,
    2019: 2
  };

  const toplamHaber = Object.values(haberSayilari).reduce((a, b) => a + b, 0);
  
  // Yıl filtreleme state'i
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  
  const years = [2016, 2017, 2018, 2019];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-x-hidden">
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
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/yayinlar" className="hover:text-blue-600 dark:hover:text-blue-400">Kooperatif Yayında</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Medyada Çıkan Haberler</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                  Medyada Çıkan Haberler
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                  Kadıköy Kooperatifi hakkında gazete ve dergilerde çıkan haberler
                </p>
              </div>
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg border border-green-200 dark:border-green-800">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                  {selectedYear ? haberSayilari[selectedYear as keyof typeof haberSayilari] : toplamHaber} haber
                </span>
              </div>
            </div>
            
            {/* Yıl Filtreleri */}
            <div className="w-full mt-6">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer text-center ${
                    selectedYear === null
                      ? "bg-green-600 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  Tümü
                </button>
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year === selectedYear ? null : year)}
                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 cursor-pointer text-center ${
                      selectedYear === year
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {year} <span className="text-xs opacity-75">({haberSayilari[year as keyof typeof haberSayilari]})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Haberler Listesi - Yıllara Göre */}
          <div className="space-y-10">
            {/* 2016 Yılı */}
            {(selectedYear === null || selectedYear === 2016) && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg px-4 py-2 shadow-md">
                    <span className="text-2xl font-bold">2016</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Yayınlanan Haberler
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {haberSayilari[2016]} haber
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/yayinlar/medyada-cikanlar/kadikoyde-mst-ve-gida-egemenligi-uzerine-soylesi"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Kadıköy'de MST ve Gıda Egemenliği Üzerine Söyleşi
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    5 Mart 2016 - Kadıköy Belediyesi Akademi
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Tüketim Kooperatifleri Girişimi'nin düzenlediği, "Brezilya Topraksız Kır İşçileri Hareketi (MST) ile Kooperatifler ve Gıda Egemenliği Üzerine Söyleşi", MST Ulusal Koordinasyonu Üyesi Marina dos Santos'un katılımı ve sunumuyla 5 Mart 2016 Cumartesi günü Caddebostan Kültür Merkezi'nde gerçekleşti. Etkinlikte MST'nin tarım reformu, kooperatifçilik ve gıda egemenliği yaklaşımları tartışıldı.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/banyo-mutfak-dergisi"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📖</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Banyo Mutfak Dergisi
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Eylül 2016 - Banyo Mutfak Dergisi
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Banyo Mutfak Dergisi'nde yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/gazete-karinca"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Gazete Karınca
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Aralık 2016 - Gazete Karınca
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Gazete Karınca'da yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/gazete-kadikoy"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Gazete Kadıköy
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    8 Aralık 2016 - Gazete Kadıköy
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Gazete Kadıköy'de yayınlanan haber.
                  </p>
                </Link>
              </div>
            </div>
            )}

            {/* 2017 Yılı */}
            {(selectedYear === null || selectedYear === 2017) && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg px-4 py-2 shadow-md">
                    <span className="text-2xl font-bold">2017</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Yayınlanan Haberler
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {haberSayilari[2017]} haber
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/yayinlar/medyada-cikanlar/birgun-aralik-2017"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        BirGün
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Aralık 2017 - BirGün
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında BirGün'de yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/dunya-nisan-2017"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Dünya
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Nisan 2017 - Dünya
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Dünya'da yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/gazete-kadikoy-mayis-2017"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Gazete Kadıköy
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Mayıs 2017 - Gazete Kadıköy
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Gazete Kadıköy'de yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/gazete-kadikoy-mayis-2017-2"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Gazete Kadıköy
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Mayıs 2017 - Gazete Kadıköy
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Gazete Kadıköy'de yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/gazete-kadikoy-ocak-2017"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Gazete Kadıköy
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Ocak 2017 - Gazete Kadıköy
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Gazete Kadıköy'de yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/iklimadaleti-temmuz-2017"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">🌐</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Tüketim Kooperatifleri Sadece Sağlıklı Gıda Demek Değildir!
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    25 Temmuz 2017 - İklimAdaleti
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi gönüllüleri Özlem Işıl ve Umut Kocagöz ile gıda egemenliği üzerine söyleşi.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/milliyet-aralik-2017"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Milliyet
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Aralık 2017 - Milliyet
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Milliyet'te yayınlanan haber.
                  </p>
                </Link>
              </div>
            </div>
            )}

            {/* 2018 Yılı */}
            {(selectedYear === null || selectedYear === 2018) && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg px-4 py-2 shadow-md">
                    <span className="text-2xl font-bold">2018</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Yayınlanan Haberler
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {haberSayilari[2018]} haber
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/yayinlar/medyada-cikanlar/adalar-gercek-subat-2018"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Adalar Gerçek
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    27 Şubat 2018 - Adalar Gerçek
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Adalar Gerçek'te yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/gazete-duvar-aralik-2018"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">🌐</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Krize Karşı: Kooperatifler ve Komünler
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    8 Aralık 2018 - Gazete Duvar
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Gazete Duvar'da yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/cumhuriyet-subat-2018"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Cumhuriyet
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Şubat 2018 - Cumhuriyet
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Cumhuriyet'te yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/hurriyet-ocak-2018"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Hürriyet
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Ocak 2018 - Hürriyet
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Hürriyet'te yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/hurriyet-subat-2018"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Hürriyet
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Şubat 2018 - Hürriyet
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Hürriyet'te yayınlanan haber.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/yesilist-mart-2018"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">🌱</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Yeşilist Röportaj
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    Mart 2018 - Yeşilist
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Yeşilist'te yayınlanan röportaj.
                  </p>
                </Link>
              </div>
            </div>
            )}

            {/* 2019 Yılı */}
            {(selectedYear === null || selectedYear === 2019) && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg px-4 py-2 shadow-md">
                    <span className="text-2xl font-bold">2019</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Yayınlanan Haberler
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {haberSayilari[2019]} haber
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/yayinlar/medyada-cikanlar/gazete-yolculuk-2019"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Kooperatifleşme
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    2019 - Gazete Yolculuk
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında Gazete Yolculuk'ta yayınlanan röportaj.
                  </p>
                </Link>
                <Link
                  href="/yayinlar/medyada-cikanlar/kadikoy-kooperatifi-alternatif-tuketim-mayis-2019"
                  className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl">📰</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
                        Alternatif Tüketim Pratiklerine Alan Açıyor
                      </h3>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                    23 Mayıs 2019 - Kübra Yüzüncüyıl
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                    Kadıköy Kooperatifi hakkında yayınlanan haber.
                  </p>
                </Link>
              </div>
            </div>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/yayinlar"
              className="inline-flex items-center px-6 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kooperatif Yayında'ya Dön
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

