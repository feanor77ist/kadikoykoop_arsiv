import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Gonulluluk() {
  const subSections = [
    {
      id: "egitim-envanteri",
      title: "Eğitim Envanteri",
      description: "Nöbet nasıl tutulur ve yeni gönüllü katılım dosyası",
      href: "/gonulluluk/egitim-envanteri",
      icon: "📋"
    },
    {
      id: "egitim-sunumu",
      title: "Eğitim Sunumu",
      description: "Kadıköy Kooperatifi eğitim sunumu (2020)",
      href: "/gonulluluk/egitim-sunumu",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/bg7.webp"
          alt=""
          className="fixed inset-0 w-full h-full object-cover opacity-[0.18] blur-[1px] dark:opacity-[0.22]"
        />
      </div>
      
      <div className="relative z-10">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Gönüllülük</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Gönüllülük
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Gönüllü katılım, eğitim materyalleri ve pratik bilgiler
          </p>
        </div>

        {/* Sub-sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subSections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {section.description}
              </p>
              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                <span>İncele</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
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

