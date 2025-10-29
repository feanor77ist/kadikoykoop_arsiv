import Link from "next/link";
import Navigation from "../../../../components/Navigation";

export default function AgactaYetisenMeyvelerFormPage() {
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
          <span className="text-gray-900 dark:text-white font-medium">AĞAÇTA YETİŞEN MEYVE ÜRÜNLERİ BİLGİ FORMU</span>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🍎</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                AĞAÇTA YETİŞEN MEYVE ÜRÜNLERİ BİLGİ FORMU
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="prose prose-lg dark:prose-invert max-w-none">

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-600">
              <p className="text-sm text-green-800 dark:text-green-200">
                <strong>📋 Not:</strong> Bu form, Kadıköy Kooperatifi'ne ürün tedarik etmek isteyen üreticiler tarafından doldurulmalıdır. 
                Formu doldurduktan sonra kooperatif yönetimi ile iletişime geçin.
              </p>
            </div>
          </div>
        </div>

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
