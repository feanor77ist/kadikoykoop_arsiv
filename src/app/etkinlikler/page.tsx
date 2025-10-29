import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Bolum8() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
          <div className="text-6xl mb-6">🎉🤝</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bir Araya Gelince...
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Kooperatif etkinlikleri ve bir arada olma anları
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Etkinlikler
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Kooperatifin düzenlediği atölyeler, çalıştaylar, üretici ziyaretleri, ortak yemekler ve diğer sosyal etkinlikler.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  Etkinlik arşivi şu anda hazırlanmaktadır. Yakında eklenecektir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

