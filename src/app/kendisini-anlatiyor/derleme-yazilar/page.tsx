import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function Bolum2F() {
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
          <span className="text-gray-900 dark:text-white font-medium">Kooperatifi Anlatan Yazılar</span>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kadıköy Kooperatifi - Derleme Yazı
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Kooperatifin kapsamlı deneyim aktarımı ve değerlendirmesi
            </p>
          </div>

          {/* İçindekiler */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">İçindekiler</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li className="font-medium">Giriş</li>
              <li className="font-medium">Kadıköy Kooperatifinin Temelleri</li>
              <li className="font-medium">Kadıköy Kooperatifi'nin İlkeleri</li>
              <li className="font-medium">Kadıköy Kooperatifi'nin İşleyişi</li>
              <li className="font-medium">Eksiklerimiz, Hatalarımız, Yapamadıklarımız</li>
              <li className="font-medium">Gelecekte Kadıköy Kooperatifi</li>
            </ol>
          </div>

          {/* Notlar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Kapsamlı İçerik
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Kooperatifin kuruluşundan bugüne tüm deneyimi
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <div className="text-3xl mb-3">💭</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Eleştirel Bakış
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Başarılar kadar eksiklikler de ele alınıyor
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Gelecek Vizyonu
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Kooperatifçiliğin geleceğine dair öngörüler
              </p>
            </div>
          </div>

          {/* Ana İçerik Özeti */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-8 border-l-4 border-yellow-500 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Yazı Hakkında
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Bu derleme yazı, Kadıköy Kooperatifi'nin deneyimini, ilkelerini, işleyişini ve karşılaştığı zorlukları derinlemesine ele alan kapsamlı bir dokümandır. Gezi direnişi sonrası mahalle dayanışmalarından doğan kooperatifin:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Kuruluş hikayesi ve motivasyonları</li>
              <li>Beş temel ilkesi ve bunların pratikte uygulanması</li>
              <li>Kolektif çalışma ve karar alma mekanizmaları</li>
              <li>Üreticilerle kurulan aracısız ilişkiler</li>
              <li>Yaşanan zorluklar ve eleştirel değerlendirmeler</li>
              <li>Geleceğe dair hedefler ve beklentiler</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              detaylı bir şekilde anlatılmaktadır.
            </p>
          </div>

          {/* Temel Bölümler */}
          <div className="space-y-6 mb-8">
            {/* İlkeler */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white mr-3">1</span>
                Beş Temel İlke
              </h3>
              <div className="space-y-4 ml-13">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Küçük Üreticiyle Aracısız Çalışmak</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Üretici ve tüketici arasında doğrudan ilişki kurma</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Üretim ve Tüketim Üzerinde Karşılıklı İnisiyatif</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Neyin, nasıl, ne kadar üretileceğine birlikte karar verme</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Kolektif Çalışma ve Paylaşım</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Katılımcı, şeffaf ve eşitlikçi karar alma</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Ekolojik-Toplumsal İlişkiler</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Doğa dostu üretim ve emek sömürüsüne karşı duruş</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Toplumsal Dayanışma</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Kooperatifler arası işbirliği ve toplumsal destek</p>
                </div>
              </div>
            </div>

            {/* İşleyiş */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white mr-3">2</span>
                Çalışma Modeli
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-13">
                Gönüllülük esasına dayanan, eşitlik, şeffaflık, katılımcılık ve güven temelinde yapılanmış yatay bir örgütlenme modeli. Haftalık "mutfak" toplantıları ile kolektif karar alma, konsensus yöntemi, birimler arası koordinasyon ve rotasyon sistemi.
              </p>
            </div>

            {/* Eleştirel Bakış */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600 text-white mr-3">3</span>
                Eksiklikler ve Hatalar
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-13 mb-4">
                Yazı, kooperatifin karşılaştığı zorlukları açık bir şekilde ele alıyor:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-13 text-sm">
                <li>Yasal mevzuata dair yetersiz bilgi</li>
                <li>Vergi yükümlülüklerinin getirdiği zorluklar</li>
                <li>Güven ilişkilerinin zaman zaman zedelenmesi</li>
                <li>Kolektif karar almanın pratikte karşılaşılan engelleri</li>
                <li>Gönüllü emek ve istihdam dengesi</li>
              </ul>
            </div>

            {/* Gelecek Vizyonu */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white mr-3">4</span>
                Gelecek Hedefleri
              </h3>
              <div className="space-y-4 ml-13">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">İşbirlikleri ve Dayanışma</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Diğer kooperatifler ve gıda toplulukları ile ortak alımlar, ortak depo kullanımı, koordineli çalışma
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Üreticileri Desteklemek</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Düzenli üretici ziyaretleri, üreticiler arası işbirliğini sağlama, ekolojik üretime teşvik
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">Alternatif Ekonomi</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Kullanım değerini esas alan, rekabete karşı dayanışma ve işbirliğine dayalı bir ekonomi modeli
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sonuç */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Sonuç: Beraber İnşa Etme
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Yazı, kooperatifin dört yılı aşkın deneyimini eleştirel bir şekilde ele alarak, eksikliklerle birlikte başarılarını da paylaşıyor. Mahalle kooperatiflerinin yaygınlaşması, yerel örgütlenmelerin güçlenmesi ve dayanışmanın gündelik yaşam pratiğine dönüşmesi hedefleniyor.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "Gezi'den gelen bu deneyim, yine Gezi'ye, yani topluma döndüğü sürece toplumsal gerçeklikte bir anlam ve etki yaratacaktır. Hep birlikte, gelişerek ve güçlenerek işte bu anlamın peşinde yürüyoruz."
            </p>
          </div>

          {/* Tam Metin Notu */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800 mb-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Tam Metin Hakkında</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  Bu sayfa, yaklaşık 15.000 kelimelik detaylı yazının özetini sunmaktadır. Yazının tamamı, kooperatifin tarihçesi, ilkeleri, işleyişi, karşılaşılan zorluklar ve gelecek vizyonunu içermektedir. Detaylı bilgi için kooperatifle iletişime geçebilirsiniz.
                </p>
              </div>
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

