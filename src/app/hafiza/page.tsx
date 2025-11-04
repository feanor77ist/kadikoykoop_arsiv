import Link from "next/link";
import Navigation from "../components/Navigation";

const galleries = [
  {
    id: "brosur",
    title: "Broşür",
    description: "Kooperatif broşürleri ve tanıtım materyalleri",
    icon: "📄",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-indigo-50",
    darkBgColor: "from-blue-900/20 to-indigo-900/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    id: "haftalik-toplanti-duyuru-afisleri",
    title: "Haftalık Toplantı Duyuru Afişleri",
    description: "Haftalık toplantılar için hazırlanan duyuru afişleri",
    icon: "📅",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    darkBgColor: "from-green-900/20 to-emerald-900/20",
    borderColor: "border-green-200 dark:border-green-800"
  },
  {
    id: "kkka-toplanti-duyuru-afisleri",
    title: "KKKA Toplantı Duyuru Afişleri",
    description: "Kooperatif Kendini Anlatıyor toplantı duyuru afişleri",
    icon: "🎤",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    darkBgColor: "from-purple-900/20 to-pink-900/20",
    borderColor: "border-purple-200 dark:border-purple-800"
  },
  {
    id: "paylasim-gorselleri",
    title: "Paylaşım Görselleri",
    description: "Sosyal medya ve iletişim için hazırlanan görseller",
    icon: "📱",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    darkBgColor: "from-orange-900/20 to-red-900/20",
    borderColor: "border-orange-200 dark:border-orange-800"
  },
  {
    id: "gorseller",
    title: "Görseller",
    description: "Kooperatif etkinlikleri, ürün fotoğrafları ve görsel arşiv",
    icon: "📸",
    color: "from-pink-500 to-rose-600",
    bgColor: "from-pink-50 to-rose-50",
    darkBgColor: "from-pink-900/20 to-rose-900/20",
    borderColor: "border-pink-200 dark:border-pink-800"
  },
  {
    id: "logo",
    title: "Logo",
    description: "Kadıköy Kooperatifi logo ve marka görselleri",
    icon: "🎨",
    color: "from-indigo-500 to-violet-600",
    bgColor: "from-indigo-50 to-violet-50",
    darkBgColor: "from-indigo-900/20 to-violet-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800"
  }
];

export default function Hafiza() {
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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        {/* Galeri Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((gallery) => (
            <Link
              key={gallery.id}
              href={`/hafiza/${gallery.id}`}
              className={`group bg-gradient-to-br ${gallery.bgColor} dark:${gallery.darkBgColor} rounded-xl p-6 shadow-lg border-2 ${gallery.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`bg-gradient-to-br ${gallery.color} text-white rounded-2xl p-4 shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-4xl">{gallery.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {gallery.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {gallery.description}
                </p>
                <div className="mt-4 inline-flex items-center text-gray-700 dark:text-gray-300 font-medium text-sm group-hover:translate-x-1 transition-transform">
                  <span>Galeriyi Görüntüle</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      </div>
    </div>
  );
}
