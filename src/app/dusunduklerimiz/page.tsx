import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Bolum5() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/bg5.webp"
          alt=""
          className="fixed inset-0 w-full h-full object-cover opacity-[0.18] blur-[1px] dark:opacity-[0.22]"
        />
      </div>
      
      <div className="relative z-10">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Ana Sayfaya Dön
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Üzerine Düşündüklerimiz
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Kooperatifin zihni, çalıştay raporları ve kavramlar sözlüğü
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/dusunduklerimiz/a"
            className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💭</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Çalıştay Raporları
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              Kooperatif çalıştaylarından çıkan raporlar ve tartışmalar
            </p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
              <span>Oku</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            href="/dusunduklerimiz/b"
            className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📖</div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Kavramlar Sözlüğü
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              Kooperatifçilik ve gıda egemenliği kavramları
            </p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
              <span>Oku</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </main>
      </div>
    </div>
  );
}

