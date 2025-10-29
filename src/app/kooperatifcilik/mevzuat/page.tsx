import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function MevzuatPage() {
  const mevzuatSections = [
    {
      id: "turkiye-mevzuati",
      title: "Türkiye Kooperatifçilik Mevzuatı",
      description: "1163 sayılı Kooperatifler Kanunu, 6102 sayılı TTK, vergi mevzuatı ve son değişiklikler",
      href: "/kooperatifcilik/mevzuat/turkiye-mevzuati",
      icon: "⚖️",
      color: "blue"
    },
    {
      id: "anasoalesme",
      title: "Tüketim Kooperatifi Anasözleşmesi",
      description: "T.C. Gümrük ve Ticaret Bakanlığı tarafından hazırlanmış resmi anasözleşme (93 Madde)",
      href: "/kooperatifcilik/mevzuat/anasoalesme",
      icon: "📜",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kooperatifcilik" className="hover:text-blue-600 dark:hover:text-blue-400">Neden ve Nasıl Kooperatifçilik?</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Mevzuat</span>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mevzuat
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Türkiye kooperatifçilik mevzuatı ve tüketim kooperatifi anasözleşmesi
          </p>
        </div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mevzuatSections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className={`group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-${section.color}-500`}
            >
              <div className="flex items-start gap-4">
                <div className={`text-4xl bg-${section.color}-50 dark:bg-${section.color}-900/20 p-3 rounded-lg`}>
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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

        {/* Geri Dön */}
        <div className="mt-12">
          <Link
            href="/kooperatifcilik"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kooperatifçilik Bölümüne Dön
          </Link>
        </div>
      </main>
    </div>
  );
}
