import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";

export default function KKKA() {
  // 22 slide görseli
  const slides = Array.from({ length: 22 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kendisini-anlatiyor" className="hover:text-blue-600 dark:hover:text-blue-400">Kadıköy Kooperatifi Kendisini Anlatıyor</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">KKKA Sunumu</span>
        </div>

        {/* Hero Section */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            KKKA Sunumu
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Kadıköy Kooperatifi Kendisini Anlatıyor sunumu
          </p>
        </div>

        {/* Slides */}
        <div className="space-y-8 sm:space-y-12">
          {slides.map((slideNum) => (
            <div
              key={slideNum}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md border-2 border-gray-200 dark:border-gray-700"
            >
              {/* Slide Number */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400">
                    {slideNum}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Slide {slideNum}
                </h2>
              </div>

              {/* Slide Image */}
              <div className="w-full flex justify-center">
                <div className="relative max-w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-700">
                  <img
                    src={`/kkka-slides/slide${slideNum}.jpg`}
                    alt={`Slide ${slideNum}`}
                    className="max-w-full h-auto block"
                    style={{ maxHeight: '80vh' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8 sm:mt-12">
          <Link
            href="/kendisini-anlatiyor"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kadıköy Kooperatifi Kendisini Anlatıyor Bölümüne Dön
          </Link>
        </div>
      </main>
    </div>
  );
}
