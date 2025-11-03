import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Bolum6() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/bg3.webp"
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

        <div className="mb-12 text-center">
          <div className="text-6xl mb-6">📚✨</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            İlham Verenler / Olanlar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Kooperatifçilik ve gıda egemenliği üzerine okuma listesi
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-8 border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Okuma Listesi
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Kooperatifçilik, gıda egemenliği, ekolojik tarım ve dayanışma ekonomisi üzerine önerilen kitaplar, makaleler ve kaynaklar.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  Bu içerik şu anda hazırlanma aşamasındadır. Yakında eklenecektir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}

