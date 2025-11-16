"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useTranslations } from 'next-intl';

export default function Bolum1A() {
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
          <span className="text-gray-900 dark:text-white font-medium">{t('sections.a.title')}</span>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('sections.a.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('sections.a.subtitle')}
            </p>
          </div>

          {/* GİRİŞ */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('sections.a.content.introduction.p1')}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('sections.a.content.introduction.p2')}
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('sections.a.content.introduction.p3')}
            </p>
          </div>

          {/* Kadıköy Kooperatifi'nin Doğuşu */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('sections.a.content.birth.title')}
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('sections.a.content.birth.p1')}
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('sections.a.content.birth.p2')}
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('sections.a.content.birth.p3')}
            </p>
          </div>

          {/* Kooperatifçilik ve Kooperatifleşme Atölye Raporu */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('sections.a.content.workshop.title')}
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('sections.a.content.workshop.p1')}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('sections.a.content.workshop.p2')}
            </p>
          </div>

          {/* Kooperatif ve Kooperatif Hareketi Neden Gereklidir? */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t('sections.a.content.whyNecessary.title')}
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('sections.a.content.whyNecessary.p1')}
            </p>
          </div>

          {/* Kooperatif ve Kooperatif Hareketinin Olası Sınırları */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t('sections.a.content.limits.title')}
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('sections.a.content.limits.p1')}
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('sections.a.content.limits.p2')}
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('sections.a.content.limits.p3')}
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('sections.a.content.limits.p4')}
            </p>
          </div>

          {/* Kurumsallaşma */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-8 border border-yellow-200 dark:border-yellow-800 mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t('sections.a.content.institutionalization.title')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('sections.a.content.institutionalization.p1')}
            </p>
          </div>

          {/* Kooperatif Örgütlenmesinde Mevcut ve Olası Yöntemler */}
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('sections.a.content.methods.title')}
            </h3>

            {/* Ekonomik Model */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {t('sections.a.content.methods.economicModel.title')}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('sections.a.content.methods.economicModel.p1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                {t('sections.a.content.methods.economicModel.p2')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                {t('sections.a.content.methods.economicModel.p3')}
              </p>
            </div>

            {/* Gönüllülük ve İstihdam */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {t('sections.a.content.methods.volunteering.title')}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('sections.a.content.methods.volunteering.p1')}
              </p>
            </div>

            {/* Deneyim Aktarımı ve Dayanışma */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {t('sections.a.content.methods.experience.title')}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('sections.a.content.methods.experience.p1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                {t('sections.a.content.methods.experience.p2')}
              </p>
            </div>

            {/* Dönüştürücü Etki */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {t('sections.a.content.methods.transformative.title')}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('sections.a.content.methods.transformative.p1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('sections.a.content.methods.transformative.p2')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('sections.a.content.methods.transformative.p3')}
              </p>
            </div>
          </div>

          {/* Sonuç */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('sections.a.content.conclusion.title')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('sections.a.content.conclusion.p1')}
            </p>
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
