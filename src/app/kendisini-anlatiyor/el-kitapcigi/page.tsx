import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function Bolum2D() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kendisini-anlatiyor" className="hover:text-blue-600 dark:hover:text-blue-400">Kendisini Anlatıyor</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">El Kitapçığı</span>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kooperatif El Kitapçığı
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Temel Kooperatif Eğitimi - Mart 2017
            </p>
          </div>

          {/* TOC */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">İçindekiler</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li className="font-medium">Kooperatif nedir? Neden kooperatif?</li>
              <li className="font-medium">Gıda krizi ve Gıda egemenliği</li>
              <li className="font-medium">Kadıköy Kooperatifi</li>
              <li className="font-medium">Kadıköy Kooperatifi'nin ilkeleri</li>
              <li className="font-medium">Kadıköy Kooperatifi nasıl çalışır?</li>
            </ol>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
              Bu kitapçık, Kadıköy Kooperatifi Eğitim ve Araştırma Birimi tarafından, Temel Kooperatif Eğitimi için kullanılmak üzere hazırlanmıştır.
            </p>
          </div>

          {/* İçerik için okuma uyarısı */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-6 border-l-4 border-yellow-500 mb-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Kapsamlı Rehber İçeriği
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  Bu el kitapçığı, kooperatifçiliğin temelleri, Kadıköy Kooperatifi'nin tarihçesi, ilkeleri ve işleyişi hakkında kapsamlı bilgiler içermektedir. Aşağıda tüm içerik başlıklar halinde sunulmaktadır.
                </p>
              </div>
            </div>
          </div>

          {/* Bölüm İçeriği - Özet kartlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Kooperatif Nedir?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Dayanışma temelli, kolektif karar ve çalışma prensiplerine dayalı örgütlenme biçimi
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">🌾</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Gıda Egemenliği
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tohumdan sofraya, gıda sisteminin bütün aşamalarında halk inisiyatifi
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Yerel Örgütlenme
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Kadıköy merkezli, mahalle dayanışmalarından doğan bir kooperatif modeli
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Yasal Mevzuat
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tüketim kooperatifi yapısı, kuruluş süreci ve işleyiş mekanizmaları
              </p>
            </div>
          </div>

          {/* Detaylı Bilgi Notu */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              El Kitapçığı Hakkında
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kadıköy Kooperatifi El Kitapçığı, yeni ortaklar ve gönüllüler için hazırlanmış kapsamlı bir eğitim materyalidir. Bu kitapçık:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Kooperatifçiliğin tarihsel ve teorik temellerini açıklar</li>
              <li>Küresel ve yerel gıda krizini analiz eder</li>
              <li>Kadıköy Kooperatifi'nin kuruluş hikayesini anlatır</li>
              <li>Kooperatifin 5 temel ilkesini detaylandırır</li>
              <li>Yasal yapı ve pratik işleyişi adım adım gösterir</li>
              <li>Kooperatif birimleri ve sorumlulukları tanımlar</li>
              <li>Üretici seçim kriterleri ve ilişki modelini açıklar</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tam metin, kooperatifin eğitim programlarında ve yeni katılımcıların tanışma sürecinde kullanılmaktadır. Daha detaylı bilgi için kooperatifle iletişime geçebilirsiniz.
            </p>
          </div>

          {/* İletişim Bilgileri */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              İletişim
            </h3>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:kdkkoop@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">kdkkoop@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <a href="https://twitter.com/kadikoykoop" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">@kadikoykoop</a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <a href="https://www.facebook.com/KadikoyKoop" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">facebook.com/KadikoyKoop</a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="http://kadikoykoop.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">kadikoykoop.org</a>
              </p>
            </div>
          </div>

          <Link 
            href="/kendisini-anlatiyor" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline mt-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Geri Dön
          </Link>
        </article>
      </main>
    </div>
  );
}

