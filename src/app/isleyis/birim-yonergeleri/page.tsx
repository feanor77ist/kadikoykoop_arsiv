import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function BirimYonergeleri() {
  const yonergeler = [
    {
      id: "belge-takip-arsiv",
      title: "Belge Takip ve Arşiv Birimi Çalışma Yönergesi",
      description: "Belgelerin sistematik arşivlenmesi ve takibi",
      href: "/isleyis/birim-yonergeleri/belge-takip-arsiv",
      icon: "📁"
    },
    {
      id: "egitim-aras-tirma",
      title: "Eğitim ve Araştırma Birimi Yönergesi",
      description: "Eğitim toplantıları ve araştırma faaliyetleri",
      href: "/isleyis/birim-yonergeleri/egitim-aras-tirma",
      icon: "🎓"
    },
    {
      id: "etkinlik",
      title: "Etkinlik Yönergesi",
      description: "Etkinlik organizasyonu ve yönetimi",
      href: "/isleyis/birim-yonergeleri/etkinlik",
      icon: "🎉"
    },
    {
      id: "koordinasyon",
      title: "Koordinasyon Birimi Yönergesi",
      description: "Koordinasyon birimi işleyişi ve sorumlulukları",
      href: "/isleyis/birim-yonergeleri/koordinasyon",
      icon: "🔄"
    },
    {
      id: "stok",
      title: "Stok Yönergesi",
      description: "Stok sayımı ve yönetimi",
      href: "/isleyis/birim-yonergeleri/stok",
      icon: "📦"
    },
    {
      id: "toplanti-notu-sablonu",
      title: "Toplantı Notu Şablonu",
      description: "Toplantı notları için şablon",
      href: "/isleyis/birim-yonergeleri/toplanti-notu-sablonu",
      icon: "📝"
    },
    {
      id: "yonerge-sablonu",
      title: "Yönerge Şablonu",
      description: "Yönerge hazırlama için şablon",
      href: "/isleyis/birim-yonergeleri/yonerge-sablonu",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/isleyis" className="hover:text-blue-600 dark:hover:text-blue-400">İşleyiş</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Birim Yönergeleri</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Birim Yönergeleri
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Kooperatif birimlerinin çalışma yönergeleri
          </p>
        </div>

        {/* Yönergeler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {yonergeler.map((yönerge) => (
            <Link
              key={yönerge.id}
              href={yönerge.href}
              className="group bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-3xl sm:text-4xl bg-blue-50 dark:bg-blue-900/20 p-2 sm:p-3 rounded-lg">
                  {yönerge.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {yönerge.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {yönerge.description}
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
        <div className="mt-12">
          <Link
            href="/isleyis"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            İşleyişe Dön
          </Link>
        </div>
      </main>
    </div>
  );
}

