import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Bolum10() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/Temmuz 2020.webp"
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
          <div className="text-6xl mb-6">📸💭</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kolektif Hafıza
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Hafıza sandığı - Aramızda kalan anlar
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-8 border border-pink-200 dark:border-pink-800">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Görseller
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Kooperatifin yolculuğundan fotoğraflar, etkinlik anları ve unutulmaz kareler.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  Şimdilik eklenmeyecek.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  İletişim & Röportajlar
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Kooperatif ortakları ve gönüllüleriyle yapılan röportajlar ve sohbetler.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                  İçerik hazırlanma aşamasında. Gerekirse eklenecektir.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              <strong>Not:</strong> Bu bölüm, kooperatifin yaşayan tarihi ve kolektif hafızasını oluşturan öğeleri barındıracaktır. İçerik zamanla genişletilecek ve zenginleştirilecektir.
            </p>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}

