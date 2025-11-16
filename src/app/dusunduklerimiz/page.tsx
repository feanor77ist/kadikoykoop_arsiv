"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";
import { useTranslations } from 'next-intl';

export default function Bolum5() {
  const t = useTranslations('thoughts');
  const tCommon = useTranslations('common');
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
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
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t('backToHome')}
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t('workshopReports.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/dusunduklerimiz/gida-krizi-egemenlik"
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌾</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t('workshopReports.items.gida-krizi-egemenlik.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                {t('workshopReports.items.gida-krizi-egemenlik.date')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {t('workshopReports.items.gida-krizi-egemenlik.type')}
              </p>
            </Link>

            <Link
              href="/dusunduklerimiz/ekolojik-tarim-aracisiz-tuketim"
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t('workshopReports.items.ekolojik-tarim-aracisiz-tuketim.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                {t('workshopReports.items.ekolojik-tarim-aracisiz-tuketim.date')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {t('workshopReports.items.ekolojik-tarim-aracisiz-tuketim.type')}
              </p>
            </Link>

            <Link
              href="/dusunduklerimiz/kooperatifcilik-kooperatiflesme"
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t('workshopReports.items.kooperatifcilik-kooperatiflesme.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
                {t('workshopReports.items.kooperatifcilik-kooperatiflesme.date')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                {t('workshopReports.items.kooperatifcilik-kooperatiflesme.type')}
              </p>
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t('conceptsDictionary.title')}
          </h2>
          <Link
            href="/dusunduklerimiz/kavramlar-sozlugu"
            className="group block bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 shadow-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <div className="text-6xl">📖</div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t('conceptsDictionary.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                  {t('conceptsDictionary.description')}
                </p>
                
                {/* Örnek Kavram İkonları */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                    <span className="text-lg">🌾</span>
                    <span>{t('conceptsDictionary.examples.ekolojik-tarim')}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                    <span className="text-lg">🥗</span>
                    <span>{t('conceptsDictionary.examples.temiz-gida')}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                    <span className="text-lg">🤝</span>
                    <span>{t('conceptsDictionary.examples.kooperatifcilik')}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                    <span className="text-lg">🌱</span>
                    <span>{t('conceptsDictionary.examples.tohum')}</span>
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm font-medium">{t('conceptsDictionary.conceptCount')}</span>
                  </div>
                  
                  <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-base group-hover:translate-x-2 transition-transform">
                    <span>{t('conceptsDictionary.viewAll')}</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
      </div>
    </div>
  );
}

