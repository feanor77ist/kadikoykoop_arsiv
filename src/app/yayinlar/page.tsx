import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Yayinlar() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
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
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Kooperatif Yayında</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kooperatifi Anlatan Yazılar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Kadıköy Kooperatifi hakkında yazılmış yazılar ve medyada çıkan haberler
          </p>
        </div>

        {/* Yazılar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Link
            href="/yayinlar/ekoloji-kolektifi-roportaji"
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌿</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Ekoloji Kolektifi Röportajı
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
              Temmuz 2017
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
              Röportaj
            </p>
          </Link>

          <Link
            href="/yayinlar/aytk-bulteni"
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📰</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              AYTK Bültenine Kadıköy Kooperatifi
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
              Aralık 2018
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
              Bülten yazısı
            </p>
          </Link>

          <Link
            href="/yayinlar/ayrinti-dergi-mulkiyet"
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📖</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Ayrıntı Dergi Güz 32. Sayı - Mülkiyet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
              2019
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
              Dergi yazısı
            </p>
          </Link>

          <Link
            href="/yayinlar/spektrum"
            className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✍️</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Spektrum Kadıköy Kooperatifi
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
              Spektrum Dergisi
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
              Dergi yazısı
            </p>
          </Link>
        </div>

        {/* Medyada Çıkan Haberler */}
        <div className="mb-12 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Medyada Çıkan Haberler
          </h2>
          <Link
            href="/yayinlar/medyada-cikanlar"
            className="group block bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 shadow-lg border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <div className="text-6xl">📰</div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Medyada Çıkan Haberler
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                  Kadıköy Kooperatifi hakkında gazete ve dergilerde çıkan haberler
                </p>
                
                {/* Örnek Kategoriler */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                    <span className="text-lg">📰</span>
                    <span>Gazete Haberleri</span>
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                    <span className="text-lg">📖</span>
                    <span>Dergi Yazıları</span>
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                    <span className="text-lg">📄</span>
                    <span>Basılı Medya</span>
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <span className="text-sm font-medium">Basılı medya haberleri</span>
                  </div>
                  
                  <div className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold text-base group-hover:translate-x-2 transition-transform">
                    <span>Tümünü Gör</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>
      </main>
      </div>
    </div>
  );
}

