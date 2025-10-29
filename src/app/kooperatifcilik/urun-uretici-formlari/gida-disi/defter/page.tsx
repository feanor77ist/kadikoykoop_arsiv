import Link from "next/link";
import Navigation from "../../../../components/Navigation";

export default function DefterFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kooperatifcilik" className="hover:text-blue-600 dark:hover:text-blue-400">Neden ve Nasıl Kooperatifçilik?</Link>
          <span>/</span>
          <Link href="/kooperatifcilik/urun-uretici-formlari" className="hover:text-blue-600 dark:hover:text-blue-400">Ürün & Üretici Formları</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Defter Ürün Bilgi Formu</span>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">📓</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                DEFTER ÜRÜN BİLGİ FORMU
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Üretici Bilgileri */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-600">
                Üretici Bilgileri
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Üretici firma Adı:
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Hazırlayan:
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Üretici firma adresi:
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Telefon:
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    (Varsa) E-posta adresi:
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    (Varsa) Web sayfası:
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Üyesi olunan bir üretici örgütü, dernek/vakıf, sivil inisiyatif var mı?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
              </div>
            </div>

            {/* 1. ÜRÜN İLE İLGİLİ BİLGİLER */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-600">
                1. ÜRÜN İLE İLGİLİ BİLGİLER
              </h2>
              
              {/* a: Ürün ile İlgili Bilgiler */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">a: Ürün ile İlgili Bilgiler</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Stok Kodu:
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Boyut:
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Sayfa Sayısı:
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Basım Yeri:
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Baskı:
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Basım Tarihi:
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Kapak Türü:
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Defterin içinde yazı ya da görsel var mı? Varsa yazılar hangi dilde?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Yazı varsa içeriği ya da konsepti nedir?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Sayfalar renkli mi, tek renk mi, hangi renkler mevcut?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Boş sayfalar düz mü, çizgili mi, kareli mi?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                </div>
              </div>

              {/* b: Üründe Kullanılan Hammaddeler */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">b: Üründe Kullanılan Hammaddeler</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Defterin sayfalarında hangi kağıt türü kullanıldı?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Defter kapağında hangi hammadde kullanıldı?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Defterin yanında veya içinde ek bir materyal(ayraç/broşür/afiş vs.) bulunuyor mu? Bulunuyorsa hangi kağıt türü kullanıldı?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                </div>
              </div>

              {/* c: Ürün Basım Süreci ile İlgili Bilgiler */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">c: Ürün Basım Süreci ile İlgili Bilgiler</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Defter ne amaçla(dayanışma,farkındalık,kar vs.) hazırlandı?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Defteri kaç kişi hazırladı? Birden fazla kişi hazırladıysa görev dağılımı nasıl oldu?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Basım için bir yayıneviyle çalışıldı mı? Çalışıldıysa hangisiyle çalışıldı?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                </div>
              </div>

              {/* d: Ürün Yayın Süreci ile İlgili Bilgiler */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">d: Ürün Yayın Süreci ile İlgili Bilgiler</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Defterin hangi kanallar ve oluşumlar aracılığıyla tanıtılması veya satılması planlanıyor?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Ürün satışı için anlaşılmış dağıtımcı, kitabevi, dernek, vakıf vs. var mı?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Planlamanın hangi aşamalarında hazırlayanların onayı alınıyor?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Defteri hazırlayanlar kaç adet ürün satışının ardından ödeme alıyor?
                    </label>
                    <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. LOJİSTİK İLE İLGİLİ BİLGİLER */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-600">
                2. LOJİSTİK İLE İLGİLİ BİLGİLER
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Nakliyat nasıl yapılıyor?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Paketleme nasıl yapılıyor?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Bu ürünün satıldığı başka bir kooperatif ya da kurumsal alıcı var mı?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Ürün hangi aydan itibaren, ne miktarda ve ne süreyle (bütün sene, mevsimlik vs.) Kadıköy Kooperatifi'ne yollanabilir?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
              </div>
            </div>

            {/* 3. ETİKET İLE İLGİLİ SORULAR */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-600">
                3. ETİKET İLE İLGİLİ SORULAR
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Ürünün satışına ilişkin uygun bir etiketlemesi var mı?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Ürünün uygunluğuna dair hangi kurumlardan izin alınıyor ve sizin ürün için onayınız var mı?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Etiket ve onay konusunda eksiklikler varsa nelerdir? Giderilmesine yönelik bir çalışma yapılıyor mu?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
              </div>
            </div>

            {/* 4. ÇALIŞANLAR İLE İLGİLİ BİLGİLER */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-purple-600">
                4. ÇALIŞANLAR İLE İLGİLİ BİLGİLER
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    İşletmenizde kaç kişi çalışıyor?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Çalışanlar sigortalı mı?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Çalışanların hak eşitliği yaş, cinsiyet ve cinsel yönelimleri farketmeksizin gözetiliyor mu? Nasıl gözetiliyor?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    İşletme, aile işletmesiyse gelir yönetimini kim yapıyor?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Kadın ve eğer çalışıyorsa çocuklar hangi işleri yapıyor?
                  </label>
                  <p className="text-gray-600 dark:text-gray-400 italic">[Boş bırakılacak]</p>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-600">
              <p className="text-sm text-purple-800 dark:text-purple-200">
                <strong>📋 Not:</strong> Bu form, Kadıköy Kooperatifi'ne ürün tedarik etmek isteyen üreticiler tarafından doldurulmalıdır. 
                Formu doldurduktan sonra kooperatif yönetimi ile iletişime geçin.
              </p>
            </div>
          </div>
        </div>

        {/* Geri Dön */}
        <div className="mt-12">
          <Link
            href="/kooperatifcilik/urun-uretici-formlari"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Form Ana Sayfasına Dön
          </Link>
        </div>
      </main>
    </div>
  );
}
