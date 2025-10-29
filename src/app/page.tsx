import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  const mainSections = [
    {
      number: "1",
      title: "Neden ve Nasıl Kooperatifçilik?",
      description: "Kooperatifçiliğin temelleri, yasal süreç, mevzuat ve formlar",
      href: "/kooperatifcilik",
      icon: "📚",
      color: "blue"
    },
    {
      number: "2",
      title: "Kadıköy Kooperatifi Kendisini Anlatıyor",
      description: "Kooperatifin tarihçesi, temelleri, ilkeleri ve dokümantasyonu",
      href: "/kendisini-anlatiyor",
      icon: "🏛️",
      color: "purple"
    },
    {
      number: "3",
      title: "Gönüllülük",
      description: "Gönüllü katılım, eğitim materyalleri ve pratik bilgiler",
      href: "/gonulluluk",
      icon: "🤝",
      color: "green"
    },
    {
      number: "4",
      title: "İşleyiş",
      description: "Kooperatif modeli ve birim yönergeleri",
      href: "/isleyis",
      icon: "⚙️",
      color: "orange"
    },
    {
      number: "5",
      title: "Üzerine Düşündüklerimiz",
      description: "Çalıştay raporları ve kavramlar sözlüğü",
      href: "/dusunduklerimiz",
      icon: "💭",
      color: "pink"
    },
    {
      number: "6",
      title: "İlham Verenler",
      description: "Okuma listesi ve kaynak materyaller",
      href: "/ilham-verenler",
      icon: "✨",
      color: "yellow"
    },
    {
      number: "7",
      title: "Kooperatifçilik Sohbetleri",
      description: "Podcast ve ses kayıtları",
      href: "/sohbetler",
      icon: "🎙️",
      color: "red"
    },
    {
      number: "8",
      title: "Bir Araya Gelince",
      description: "Etkinlikler ve organizasyonlar",
      href: "/etkinlikler",
      icon: "🎉",
      color: "indigo"
    },
    {
      number: "9",
      title: "Kooperatif Yayında",
      description: "Yayınlar ve medyada çıkan haberler",
      href: "/yayinlar",
      icon: "📰",
      color: "teal"
    },
    {
      number: "10",
      title: "Kolektif Hafıza",
      description: "Görseller ve belge arşivi",
      href: "/hafiza",
      icon: "📸",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600",
      purple: "border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600",
      green: "border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600",
      orange: "border-orange-200 dark:border-orange-800 hover:border-orange-400 dark:hover:border-orange-600",
      pink: "border-pink-200 dark:border-pink-800 hover:border-pink-400 dark:hover:border-pink-600",
      yellow: "border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600",
      red: "border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600",
      indigo: "border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600",
      teal: "border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600",
      cyan: "border-cyan-200 dark:border-cyan-800 hover:border-cyan-400 dark:hover:border-cyan-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kadıköy Kooperatifi Arşivi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Kadıköy Kooperatifi'nin belgeleri, yayınları ve kooperatifçilik kaynaklarına buradan erişebilirsiniz.
          </p>
        </div>

        {/* Main Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainSections.map((section) => (
            <Link
              key={section.number}
              href={section.href}
              className={`group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 ${getColorClasses(section.color)} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </div>
              
              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {section.title}
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {section.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                <span>İncele</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            📖 Arşiv Hakkında
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bu arşiv, Kadıköy Kooperatifi'nin belgelerini, yayınlarını ve kooperatifçilik hakkında topladığı kaynakları içermektedir. 
            10 ana bölüm altında düzenlenmiş olan içeriklere kartlara tıklayarak erişebilirsiniz. Her bölümde ilgili alt başlıklar ve 
            dokümanlara ulaşabilirsiniz.
          </p>
        </div>
      </main>
    </div>
  );
}
