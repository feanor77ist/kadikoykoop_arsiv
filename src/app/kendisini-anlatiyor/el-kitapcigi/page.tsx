import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function ElKitapcigi() {
  const sections = [
    {
      id: "kooperatif-nedir",
      title: "Kooperatif nedir? Neden kooperatif?",
      description: "Dayanışma temelli, kolektif karar ve çalışma prensiplerine dayalı örgütlenme biçimi",
      icon: "🤝",
      href: "/kendisini-anlatiyor/el-kitapcigi/kooperatif-nedir"
    },
    {
      id: "gida-krizi-ve-gida-egemenligi",
      title: "Gıda krizi ve Gıda egemenliği",
      description: "Tohumdan sofraya, gıda sisteminin bütün aşamalarında halk inisiyatifi",
      icon: "🌾",
      href: "/kendisini-anlatiyor/el-kitapcigi/gida-krizi-ve-gida-egemenligi"
    },
    {
      id: "kadikoy-kooperatifi",
      title: "Kadıköy Kooperatifi",
      description: "Kadıköy merkezli, mahalle dayanışmalarından doğan bir kooperatif modeli",
      icon: "📍",
      href: "/kendisini-anlatiyor/el-kitapcigi/kadikoy-kooperatifi"
    },
    {
      id: "kadikoy-kooperatifi-ilkeleri",
      title: "Kadıköy Kooperatifi'nin ilkeleri",
      description: "Kooperatifin temel değerleri ve çalışma prensipleri",
      icon: "⚖️",
      href: "/kendisini-anlatiyor/el-kitapcigi/kadikoy-kooperatifi-ilkeleri"
    },
    {
      id: "kadikoy-kooperatifi-nasil-calisir",
      title: "Kadıköy Kooperatifi nasıl çalışır?",
      description: "Yasal mevzuat, kooperatif yapısı ve pratik işleyiş",
      icon: "⚙️",
      href: "/kendisini-anlatiyor/el-kitapcigi/kadikoy-kooperatifi-nasil-calisir"
    }
  ];

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
          <span className="text-gray-900 dark:text-white font-medium">El Kitapçığı</span>
        </div>

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Kooperatif El Kitapçığı
          </h1>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 sm:p-6 border border-blue-200 dark:border-blue-800 mb-6 sm:mb-8">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 italic">
            Bu kitapçık, Kadıköy Kooperatifi Eğitim ve Araştırma Birimi tarafından, Temel Kooperatif Eğitimi için kullanılmak üzere hazırlanmıştır.
          </p>
        </div>

        {/* İçindekiler Listesi */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
            İçindekiler
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {sections.map((section, index) => (
              <li key={section.id} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Link href={section.href} className="hover:underline">
                  {section.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="group bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-3xl sm:text-4xl bg-blue-50 dark:bg-blue-900/20 p-2 sm:p-3 rounded-lg">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
                <svg 
                  className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
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
