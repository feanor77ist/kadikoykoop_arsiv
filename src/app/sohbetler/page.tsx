import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Bolum7() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/modal.webp"
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
          <div className="text-6xl mb-6">🎙️🎧</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kooperatifçilik Sohbetleri
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Podcast kayıtları ve sohbet arşivi
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Podcast Arşivi
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Kooperatifçilik, gıda egemenliği ve dayanışma ekonomisi üzerine yapılmış podcast sohbetlerinin kayıtları.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">
                  Kayıtların linkleri yakında bu sayfaya eklenecektir.
                </p>
                <div className="bg-white/50 dark:bg-gray-900/50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Not:</strong> Ham kayıtlar yerine podcast platformlarındaki yayınların linkleri paylaşılacaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}

