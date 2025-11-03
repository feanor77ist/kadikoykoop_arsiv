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
      icon: "🐢"
    },
    {
      id: "stok",
      title: "Stok Yönergesi",
      description: "Stok sayımı ve yönetimi",
      href: "/isleyis/birim-yonergeleri/stok",
      icon: "📦"
    },
    {
      id: "arabuluculuk-ekibi",
      title: "Arabuluculuk Ekibi Yönergesi",
      description: "Çatışma çözümü ve arabuluculuk süreçleri",
      href: "/isleyis/birim-yonergeleri/arabuluculuk-ekibi",
      icon: "🤝"
    },
    {
      id: "askida-uygulamasi",
      title: "Askıda Uygulaması Yönergesi",
      description: "Dayanışma pratiği ve askıda ürün sistemi",
      href: "/isleyis/birim-yonergeleri/askida-uygulamasi",
      icon: "🎁"
    },
    {
      id: "basinla-iliskiler",
      title: "Basınla İlişkiler Yönergesi",
      description: "Basın kuruluşları ile iletişim ve temsiliyet",
      href: "/isleyis/birim-yonergeleri/basinla-iliskiler",
      icon: "📰"
    },
    {
      id: "toplanti-usulu",
      title: "Toplantı Usulü Hakkında Yönerge",
      description: "Toplantı düzeni, gündem belirleme ve karar alma",
      href: "/isleyis/birim-yonergeleri/toplanti-usulu",
      icon: "📋"
    },
    {
      id: "calistay-usulu",
      title: "Çalıştay Usulü Hakkında Yönerge",
      description: "Çalıştay düzeni, gündem belirleme ve karar alma",
      href: "/isleyis/birim-yonergeleri/calistay-usulu",
      icon: "👥"
    },
    {
      id: "dukkan",
      title: "Dükkan Yönergesi",
      description: "Dükkan düzeni, nöbet ve satış işlemleri",
      href: "/isleyis/birim-yonergeleri/dukkan",
      icon: "🏪"
    },
    {
      id: "eposta-whatsapp-iletisim",
      title: "E-Posta ve WhatsApp Kanallarında İletişim Yönergesi",
      description: "Elektronik iletişim kuralları ve yazışma usulleri",
      href: "/isleyis/birim-yonergeleri/eposta-whatsapp-iletisim",
      icon: "💬"
    },
    {
      id: "etiketleme-yeniden-ambalajlama",
      title: "Etiketleme ve Yeniden Ambalajlama Kriterleri Yönergesi",
      description: "Etiketleme ve yeniden ambalajlama kriterleri ve mevzuat",
      href: "/isleyis/birim-yonergeleri/etiketleme-yeniden-ambalajlama",
      icon: "🏷️"
    },
    {
      id: "gida-urun-uretici-birimi",
      title: "Gıda Ürün Üretici Birimi İşleyiş Yönergesi",
      description: "Gıda ürün üretici birimi yapısı, görevleri ve işleyiş",
      href: "/isleyis/birim-yonergeleri/gida-urun-uretici-birimi",
      icon: "🌾"
    },
    {
      id: "gida-dis-urun-uretici",
      title: "Gıda Dışı Ürün ve Üreticileriyle İlişkiler Birimi İşleyiş Yönergesi",
      description: "Gıda dışı ürün araştırması, değerlendirme ve takip süreçleri",
      href: "/isleyis/birim-yonergeleri/gida-dis-urun-uretici",
      icon: "🧴"
    },
    {
      id: "urun-uretici-bilgileri-paylasim",
      title: "Ürün Üretici Bilgileri Paylaşımı Hakkında Yönerge",
      description: "Ürün ve üretici bilgilerinin paylaşım kriterleri",
      href: "/isleyis/birim-yonergeleri/urun-uretici-bilgileri-paylasim",
      icon: "📤"
    },
    {
      id: "gorusme-talepleri",
      title: "Görüşme Talepleri Hakkında Yönerge",
      description: "Mülakat, görüşme ve etkinlik katılım talepleri",
      href: "/isleyis/birim-yonergeleri/gorusme-talepleri",
      icon: "🎤"
    },
    {
      id: "sosyal-medya-iletisim",
      title: "Sosyal Medya ve İletişim Birimi Yönergesi",
      description: "Sosyal medya, iletişim kanalları ve içerik yönetimi",
      href: "/isleyis/birim-yonergeleri/sosyal-medya-iletisim",
      icon: "📱"
    },
    {
      id: "iletisim-paylasim",
      title: "İletişim Birimi Paylaşım Yönergesi",
      description: "Paylaşım yöntemleri ve sorumluluklar",
      href: "/isleyis/birim-yonergeleri/iletisim-paylasim",
      icon: "📢"
    },
    {
      id: "mali-birim",
      title: "Mali Birim Yönergesi",
      description: "Mali süreçler, görevler ve işleyiş",
      href: "/isleyis/birim-yonergeleri/mali-birim",
      icon: "🧾"
    },
    {
      id: "yonetim-kurulu",
      title: "Yönetim Kurulu Yönergesi",
      description: "Yönetim kurulu yapısı, görevleri ve işleyiş",
      href: "/isleyis/birim-yonergeleri/yonetim-kurulu",
      icon: "⚖️"
    },
    {
      id: "orgutlenme-birimi",
      title: "Örgütlenme Birimi Yönergesi",
      description: "Örgütlenme etkinlikleri, KKKA ve yerel faaliyetler",
      href: "/isleyis/birim-yonergeleri/orgutlenme-birimi",
      icon: "🕸️"
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

