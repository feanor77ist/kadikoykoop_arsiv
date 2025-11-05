import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Bolum7() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/modal.webp"
          alt=""
          className="fixed inset-0 w-full h-full object-cover opacity-[0.18] blur-[1px] dark:opacity-[0.22]"
        />
      </div>
      
      <div className="relative z-10">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          <div className="text-6xl mb-6">🎙️🎧</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kooperatifçilik Sohbetleri
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Podcast kayıtları ve sohbet arşivi
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Podcast Başlık */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-3 shadow-md flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Kadıköy Kooperatifi
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Kadıköy Kooperatifi'nde kooperatifçilik, gıda politikaları, deneyimler, aracısız ekolojik üretim, tüketim, dükkân ve birçok konuda konuşuyoruz.
                </p>
                <a 
                  href="https://open.spotify.com/show/0L02yRyQ4vww8SwBhwx3Nr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                >
                  Spotify'ta Dinle
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bölümler Listesi */}
          <div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Tüm Bölümler
            </h4>
              <div className="space-y-4">
                {/* Bölüm 5 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="mb-4">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Kooperatifçilik #5 - Ekolojik nedir? Organik miyiz?
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Kadıköy Kooperatifi'nde ekolojik&organik kavramları ne anlama geliyor? Ekolojik ürün ve üretim biçimleri derken neden bahsediyoruz? Organik ve ekolojik aynı şey mi, farkları neler? Bu bölümde gönüllülerle Kadıköy Kooperatifi'nin alternatif üretim biçimlerine bakışını ve ekolojik kavramının kooperatifteki karşılığını konuşuyoruz.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      Haziran 14, 2021 • 22 dakika
                    </p>
                    <a
                      href="https://open.spotify.com/show/0L02yRyQ4vww8SwBhwx3Nr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                    >
                      Spotify'ta Dinle
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <iframe
                      src="https://open.spotify.com/embed/show/0L02yRyQ4vww8SwBhwx3Nr?utm_source=generator&theme=0"
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="w-full rounded-lg"
                      title="Kooperatifçilik #5 - Ekolojik nedir? Organik miyiz?"
                    ></iframe>
                  </div>
                </div>

                {/* Bölüm 4 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="mb-4">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Kooperatifçilik #4 - Gönüllülük
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Kadıköy Kooperatifi'nde gönüllü olmak nasıl bir şey? Gönüllüler olarak neler yapıyoruz, neler yapmıyoruz? Ne kadar vakit ayırmak gerekiyor? Herkes aynı şekilde mi gönüllülük yapıyor? Bu bölümde gönüllülerle deneyimlerimizi ve kooperatifte gönüllülük üzerine konuşuyoruz.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      Mayıs 16, 2021 • 17 dakika
                    </p>
                    <a
                      href="https://open.spotify.com/episode/07NNFzkzCjIyFlIVmpFhtx?si=cb46c5f0e0de41dd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                    >
                      Spotify'ta Dinle
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <iframe
                      src="https://open.spotify.com/embed/episode/07NNFzkzCjIyFlIVmpFhtx?utm_source=generator&theme=0"
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="w-full rounded-lg"
                      title="Kooperatifçilik #4 - Gönüllülük"
                    ></iframe>
                  </div>
                </div>

                {/* Bölüm 3 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="mb-4">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Kooperatifçilik #3 - Dükkanda hangi ürünler var?
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Kadıköy Kooperatifi dükkânında bulunan ürünlerle ilgili konuşuyoruz. Dükkandaki ürünleri nasıl alıyoruz, getiriyoruz, ürün çeşitliliğini neye göre belirliyoruz, hangi üreticilerle çalışıyoruz? Bu bölümde gönüllülerle dükkanı ve dükkandaki ürünleri konuşuyoruz.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      Nisan 25, 2021 • 21 dakika
                    </p>
                    <a
                      href="https://open.spotify.com/episode/2bGuIulGy9LvBosL7ELoWj?si=Dc04hyU_QNC9Hbv-zquTCw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                    >
                      Spotify'ta Dinle
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <iframe
                      src="https://open.spotify.com/embed/episode/2bGuIulGy9LvBosL7ELoWj?utm_source=generator&theme=0"
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="w-full rounded-lg"
                      title="Kooperatifçilik #3 - Dükkanda hangi ürünler var?"
                    ></iframe>
                  </div>
                </div>

                {/* Bölüm 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="mb-4">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Kooperatifçilik #2 - Kadıköy Kooperatifi'ne Sık Sorulan Sorular
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Kadıköy Kooperatifi'ne en çok sorulan soruları cevaplıyoruz. Kooperatifin işleyişi, dükkandaki ürünler, açık olduğumuz saatler ve bize sorulan diğer soruları bu bölümde iletişim birimi gönüllüleri ile cevaplıyoruz.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      Nisan 15, 2021 • 16 dakika
                    </p>
                    <a
                      href="https://open.spotify.com/episode/3FwKH1zblo3Xil7E5OkrVV?si=GIAM8GGCSl-YGXKwbOuzaw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                    >
                      Spotify'ta Dinle
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <iframe
                      src="https://open.spotify.com/embed/episode/3FwKH1zblo3Xil7E5OkrVV?utm_source=generator&theme=0"
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="w-full rounded-lg"
                      title="Kooperatifçilik #2 - Kadıköy Kooperatifi'ne Sık Sorulan Sorular"
                    ></iframe>
                  </div>
                </div>

                {/* Bölüm 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="mb-4">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Kooperatifçilik #1 - Kadıköy Kooperatifi Kendisini Anlatıyor
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Kadıköy Kooperatifi ne işler yapar? Kimler vardır, bu işler nasıl yapılır? Her ay yaptığımız Kadıköy Kooperatifi Kendisini Anlatıyor toplantılarında olduğu gibi bu bölümde kooperatifi, işlerimizi, gönüllülüğü anlatıyoruz.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      Nisan 3, 2021 • 12 dakika
                    </p>
                    <a
                      href="https://open.spotify.com/episode/0nI46nEJXNCSoomrjlkk9d?si=8XwBHkIORa-R7VS7HOY1mQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                    >
                      Spotify'ta Dinle
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <iframe
                      src="https://open.spotify.com/embed/episode/0nI46nEJXNCSoomrjlkk9d?utm_source=generator&theme=0"
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="w-full rounded-lg"
                      title="Kooperatifçilik #1 - Kadıköy Kooperatifi Kendisini Anlatıyor"
                    ></iframe>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}

