import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function KavramlarSozlugu() {
  const kavramlar = [
    { id: "agroekoloji-ekolojik-tarim", title: "Agroekoloji - Ekolojik Tarım", icon: "🌾" },
    { id: "aile-uretimi", title: "Aile Üretimi", icon: "👨‍👩‍👧‍👦" },
    { id: "aracisiz-tuketim", title: "Aracısız Tüketim", icon: "🚫" },
    { id: "bilge-koylu-tarimi", title: "Bilge Köylü Tarımı", icon: "🧑‍🌾" },
    { id: "egitim-toplanti-notlari", title: "Eğitim Toplantı Notları", icon: "📚" },
    { id: "gdo-tohum", title: "GDO Tohum", icon: "🧬" },
    { id: "geleneksel-tarim", title: "Geleneksel Tarım", icon: "🏞️" },
    { id: "gida-hakki", title: "Gıda Hakkı", icon: "⚖️" },
    { id: "hibrit-tohum", title: "Hibrit Tohum", icon: "🌱" },
    { id: "hobi-bahceciligi", title: "Hobi Bahçeciliği", icon: "🌿" },
    { id: "kent-ariciligi", title: "Kent Arıcılığı", icon: "🐝" },
    { id: "kent-bahceciligi", title: "Kent Bahçeciliği", icon: "🏙️" },
    { id: "kucuk-uretici-orgutlu-uretici", title: "Küçük Üretici ve Örgütlü Üretici", icon: "🤝" },
    { id: "permakultur", title: "Permakültür", icon: "♻️" },
    { id: "temiz-giysi", title: "Temiz Giysi", icon: "👕" },
    { id: "temiz-gida", title: "Temiz Gıda", icon: "🥗" },
    { id: "tuketim-kooperatifi", title: "Tüketim Kooperatifi", icon: "🛒" },
    { id: "uretim-tuketim-karsilikli-inisiyatif", title: "Üretim ve Tüketim Üzerinde Karşılıklı İnisiyatif", icon: "🔄" },
    { id: "yerli-atalik-tohum", title: "Yerli-Atalık Tohum", icon: "🌻" },
    { id: "gida-krizi", title: "Gıda Krizi", icon: "⚠️" },
    { id: "gida-topluluklari", title: "Gıda Toplulukları", icon: "🌍" },
    { id: "kadin-emegi", title: "Kadın Emeği", icon: "👩" },
    { id: "konvansiyonel-uretim", title: "Konvansiyonel Üretim", icon: "🏭" },
    { id: "sifir-cop", title: "Sıfır Çöp", icon: "♻️" },
    { id: "sirket-egemenligi", title: "Şirket Egemenliği", icon: "🏢" },
    { id: "zehirsiz-temizlik", title: "Zehirsiz Temizlik", icon: "🧹" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-x-hidden">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/bg5.webp"
          alt=""
          className="fixed inset-0 w-full h-full object-cover opacity-[0.18] blur-[1px] dark:opacity-[0.22]"
        />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/dusunduklerimiz" className="hover:text-blue-600 dark:hover:text-blue-400">Üzerine Düşündüklerimiz</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Kavramlar Sözlüğü</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kavramlar Sözlüğü
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Kooperatifçilik ve gıda egemenliği kavramları
            </p>
          </div>

          {/* Kavramlar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {kavramlar.map((kavram) => (
              <Link
                key={kavram.id}
                href={`/dusunduklerimiz/kavramlar-sozlugu/${kavram.id}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-3xl sm:text-4xl bg-blue-50 dark:bg-blue-900/20 p-2 sm:p-3 rounded-lg">
                    {kavram.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {kavram.title}
                    </h3>
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
              href="/dusunduklerimiz"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Üzerine Düşündüklerimiz'e Dön
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

