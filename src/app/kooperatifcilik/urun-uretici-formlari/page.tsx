import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function UrunUreticiFormlariPage() {
  const gidaDisiForms = [
    { id: "cicek", title: "Çiçek Ürün Bilgi Formu", icon: "🌸" },
    { id: "defter", title: "Defter Ürün Bilgi Formu", icon: "📓" },
    { id: "gida-saklama-kumasi", title: "Gıda Saklama Kumaşı Ürün Bilgi Formu", icon: "🧺" },
    { id: "kitap", title: "Kitap Ürün Bilgi Formu", icon: "📚" },
    { id: "mum-balmumu", title: "Mum, Balmumu ve Yan Ürünleri Bilgi Formu", icon: "🕯️" },
    { id: "sabun", title: "Sabun Ürün Bilgi Formu", icon: "🧼" },
    { id: "solucan-gubresi", title: "Solucan Gübresi Bilgi Formu", icon: "🌱" },
    { id: "kozmetik", title: "Kozmetik Ürün Formu", icon: "💄" },
    { id: "tekstil", title: "Tekstil Ürünleri Bilgi Formu", icon: "👕" },
    { id: "tuz", title: "Tuz Ürün Bilgi Formu", icon: "🧂" },
    { id: "sivi-form", title: "Sıvı Form Ürün Bilgi Formu", icon: "🧴" },
  ];

  const gidaForms = [
    { id: "agacta-yetisen-meyveler", title: "Ağaçta Yetişen Meyve Ürünleri Bilgi Formu", icon: "🍎" },
    { id: "ekmek", title: "Ekmek Bilgi Formu", icon: "🍞" },
    { id: "taze-sebze", title: "Taze Sebze Ürünleri Bilgi Formu", icon: "🥬" },
    { id: "bal", title: "Bal Bilgi Formu", icon: "🍯" },
    { id: "hububat", title: "Hububat Ürünleri Bilgi Formu", icon: "🌾" },
    { id: "islenmis-urunler", title: "İşlenmiş Ürünler Bilgi Formu", icon: "🥫" },
    { id: "pirinc", title: "Pirinç Bilgi Formu", icon: "🍚" },
    { id: "sut-urunleri", title: "Süt Ürünleri Bilgi Formu", icon: "🥛" },
    { id: "uretici-on-bilgi", title: "Üretici Ön Bilgi Formu", icon: "📋" },
    { id: "yumurta", title: "Yumurta Bilgi Formu", icon: "🥚" },
    { id: "zeytinyagi", title: "Zeytinyağı Bilgi Formu", icon: "🫒" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kooperatifcilik" className="hover:text-blue-600 dark:hover:text-blue-400">Neden ve Nasıl Kooperatifçilik?</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Ürün & Üretici Formları</span>
        </div>

        {/* Hero Section */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Ürün & Üretici Formları
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Kooperatifimize ürün tedarik etmek isteyen üreticiler için hazırlanmış bilgi formları. Her ürün kategorisi için detaylı bilgi formu ve üretici iletişim formları.
          </p>
        </div>

        {/* Gıda Ürünleri Section */}
        <div className="mb-10 sm:mb-16">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
              <span className="text-3xl sm:text-4xl">🍎</span>
              <span>Gıda Ürünleri Bilgi Formları</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Taze ve işlenmiş gıda ürünleri için üretici bilgi formları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gidaForms.map((form) => (
              <Link
                key={form.id}
                href={`/kooperatifcilik/urun-uretici-formlari/gida/${form.id}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-3xl sm:text-4xl bg-green-50 dark:bg-green-900/20 p-2 sm:p-3 rounded-lg">
                    {form.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {form.title}
                    </h3>
                  </div>
                  <svg 
                    className="w-6 h-6 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" 
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
        </div>

        {/* Gıda Dışı Ürünler Section */}
        <div className="mb-10 sm:mb-12">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
              <span className="text-3xl sm:text-4xl">🧼</span>
              <span>Gıda Dışı Ürünler Bilgi Formları</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Kozmetik, tekstil, kırtasiye ve diğer gıda dışı ürünler için üretici bilgi formları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gidaDisiForms.map((form) => (
              <Link
                key={form.id}
                href={`/kooperatifcilik/urun-uretici-formlari/gida-disi/${form.id}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-3xl sm:text-4xl bg-purple-50 dark:bg-purple-900/20 p-2 sm:p-3 rounded-lg">
                    {form.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {form.title}
                    </h3>
                  </div>
                  <svg 
                    className="w-6 h-6 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0" 
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
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-600 mb-12">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            📝 Üreticiler İçin Bilgilendirme
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Bu formlar, kooperatifimize ürün tedarik etmek isteyen üreticilerin ürünleri hakkında detaylı bilgi vermesi için hazırlanmıştır.
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Her ürün kategorisi için ayrı bir form bulunmaktadır</li>
            <li>Formlar, ürün özellikleri, üretim süreci ve üretici bilgilerini içerir</li>
            <li>Doldurulmuş formlar kooperatif yönetimine iletilmelidir</li>
          </ul>
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

