"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useTranslations } from 'next-intl';

export default function Bolum1B() {
  const t = useTranslations('cooperativism');
  const tCommon = useTranslations('common');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">{tCommon('home')}</Link>
          <span>/</span>
          <Link href="/kooperatifcilik" className="hover:text-blue-600 dark:hover:text-blue-400">{t('title')}</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{t('sections.b.title')}</span>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('sections.b.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('sections.b.subtitle')}
            </p>
          </div>

          {/* Mali Müşavire Giderken */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white mr-3">1</span>
              {t('sections.b.steps.1.title')}
            </h2>
            
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold mr-3 flex-shrink-0 mt-1">{num}</span>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>{t(`sections.b.steps.1.items.${num}`)}</strong>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Notere Giderken */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white mr-3">2</span>
              {t('sections.b.steps.2.title')}
            </h2>
            
            <div className="space-y-4">
              {[1, 2, 3, 4].map((num) => {
                const itemText = t(`sections.b.steps.2.items.${num}`);
                return (
                  <div key={num} className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 font-bold mr-3 flex-shrink-0 mt-1">{num}</span>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {itemText.includes('(') ? (
                        <>
                          <p className="mb-2">
                            <strong>{itemText.split('(')[0].trim()}</strong>
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                            {itemText.split('(')[1]?.replace(')', '').trim()}
                          </p>
                        </>
                      ) : (
                        <p>
                          <strong>{itemText}</strong>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* İpuçları */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800 mb-8">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>{t('sections.b.tip').split(':')[0]}:</strong> {t('sections.b.tip').split(':').slice(1).join(':').trim()}
              </p>
            </div>
          </div>

          <Link 
            href="/kooperatifcilik" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline mt-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('back')}
          </Link>
        </article>
      </main>
    </div>
  );
}

