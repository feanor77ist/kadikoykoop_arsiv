"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useTranslations } from 'next-intl';

export default function TurkiyeMevzuatiPage() {
  const t = useTranslations('cooperativism.sections.d.subsections.turkiye-mevzuati.content');
  const tCommon = useTranslations('common');
  const tCooperativism = useTranslations('cooperativism');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">{tCommon('home')}</Link>
          <span>/</span>
          <Link href="/kooperatifcilik" className="hover:text-blue-600 dark:hover:text-blue-400">{tCooperativism('title')}</Link>
          <span>/</span>
          <Link href="/kooperatifcilik/mevzuat" className="hover:text-blue-600 dark:hover:text-blue-400">{tCooperativism('sections.d.title')}</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">{tCooperativism('sections.d.subsections.turkiye-mevzuati.title')}</span>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {tCooperativism('sections.d.subsections.turkiye-mevzuati.title')}
          </h1>

          {/* TÜRKİYE'DE KOOPERATİFÇİLİK MEVZUATININ TARİHÇESİ */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              {t('history.title')}
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>{t('history.p1')}</p>
              <p>{t('history.p2')}</p>
              <p>{t('history.p3')}</p>
              <p>{t('history.p4')}</p>
              <p>{t('history.p5')}</p>
              <p>{t('history.p6')}</p>
            </div>
          </div>

          {/* 1163 SAYILI KOOPERATİFLER KANUNU */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              {t('law1163.title')}
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6">
                <p className="font-semibold mb-2">{t('law1163.acceptanceDate')}</p>
                <p className="font-semibold mb-4">{t('law1163.publicationDate')}</p>
                <p className="leading-relaxed">
                  {t('law1163.description')}
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4">{t('law1163.principles.title')}</h3>
              <ul className="space-y-3 ml-6 list-disc">
                <li><strong>{t('law1163.principles.variableMembership')}</strong></li>
                <li><strong>{t('law1163.principles.variableCapital')}</strong></li>
                <li><strong>{t('law1163.principles.limitedLiability')}</strong></li>
                <li><strong>{t('law1163.principles.democraticManagement')}</strong></li>
                <li><strong>{t('law1163.principles.memberTransactions')}</strong></li>
                <li><strong>{t('law1163.principles.nonProfit')}</strong></li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4">{t('law1163.types.title')}</h3>
              <p className="mb-3">{t('law1163.types.description')}</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>{t('law1163.types.list.1')}</li>
                <li>{t('law1163.types.list.2')}</li>
                <li>{t('law1163.types.list.3')}</li>
                <li>{t('law1163.types.list.4')}</li>
                <li>{t('law1163.types.list.5')}</li>
                <li>{t('law1163.types.list.6')}</li>
                <li>{t('law1163.types.list.7')}</li>
                <li>{t('law1163.types.list.8')}</li>
              </ul>
            </div>
          </div>

          {/* 6102 SAYILI TTK */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              {t('ttk6102.title')}
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6">
                <p className="font-semibold mb-2">{t('ttk6102.acceptanceDate')}</p>
                <p className="font-semibold mb-4">{t('ttk6102.effectiveDate')}</p>
                <p className="leading-relaxed">
                  {t('ttk6102.description')}
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4">{t('ttk6102.provisions.title')}</h3>
              <ul className="space-y-3 ml-6">
                <li>
                  <strong>{t('ttk6102.provisions.books')}</strong>
                </li>
                <li>
                  <strong>{t('ttk6102.provisions.financialStatements')}</strong>
                </li>
                <li>
                  <strong>{t('ttk6102.provisions.audit')}</strong>
                </li>
                <li>
                  <strong>{t('ttk6102.provisions.electronicGeneralAssembly')}</strong>
                </li>
                <li>
                  <strong>{t('ttk6102.provisions.mergerDivision')}</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* ÖZEL KANUNLAR */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              {t('specialLaws.title')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('specialLaws.law1581.title')}</h3>
                <div className="bg-green-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="font-semibold mb-2">{t('specialLaws.law1581.acceptanceDate')}</p>
                  <p className="leading-relaxed">
                    {t('specialLaws.law1581.description')}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('specialLaws.law4572.title')}</h3>
                <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="font-semibold mb-2">{t('specialLaws.law4572.acceptanceDate')}</p>
                  <p className="leading-relaxed">
                    {t('specialLaws.law4572.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* VERGİ MEVZUATI */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              {t('taxLegislation.title')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('taxLegislation.law5520.title')}</h3>
                <div className="bg-yellow-50 dark:bg-gray-700 rounded-lg p-6 mb-4">
                  <p className="font-semibold mb-2">{t('taxLegislation.law5520.effectiveDate')}</p>
                  <p className="leading-relaxed mb-3">
                    {t('taxLegislation.law5520.description')}
                  </p>
                </div>

                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{t('taxLegislation.law5520.article4.title')}</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {t('taxLegislation.law5520.article4.text')}
                </p>
                <div className="bg-red-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{t('taxLegislation.law5520.article4.note.title')}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t('taxLegislation.law5520.article4.note.text')}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">{t('taxLegislation.law3065.title')}</h3>
                <div className="bg-indigo-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="leading-relaxed mb-3">
                    {t('taxLegislation.law3065.description1')}
                  </p>
                  <p className="leading-relaxed">
                    {t('taxLegislation.law3065.description2')}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">{t('taxLegislation.law193.title')}</h3>
                <div className="bg-pink-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="leading-relaxed mb-3">
                    {t('taxLegislation.law193.description1')}
                  </p>
                  <p className="leading-relaxed">
                    {t('taxLegislation.law193.description2')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SON DEĞİŞİKLİKLER */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              {t('recentChanges.title')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('recentChanges.law7153.title')}</h3>
                <div className="bg-red-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="font-semibold mb-4">{t('recentChanges.law7153.acceptanceDate')}</p>
                  <p className="leading-relaxed mb-4">
                    {t('recentChanges.law7153.description')}
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>{t('recentChanges.law7153.changes.1')}</li>
                    <li>{t('recentChanges.law7153.changes.2')}</li>
                    <li>{t('recentChanges.law7153.changes.3')}</li>
                    <li>{t('recentChanges.law7153.changes.4')}</li>
                    <li>{t('recentChanges.law7153.changes.5')}</li>
                    <li>{t('recentChanges.law7153.changes.6')}</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('recentChanges.digitalTransformation.title')}</h3>
                <div className="bg-cyan-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="leading-relaxed mb-4">
                    {t('recentChanges.digitalTransformation.description')}
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li><strong>{t('recentChanges.digitalTransformation.changes.1')}</strong></li>
                    <li><strong>{t('recentChanges.digitalTransformation.changes.2')}</strong></li>
                    <li><strong>{t('recentChanges.digitalTransformation.changes.3')}</strong></li>
                    <li><strong>{t('recentChanges.digitalTransformation.changes.4')}</strong></li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('recentChanges.ministryAudit.title')}</h3>
                <div className="bg-teal-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="leading-relaxed mb-3">
                    {t('recentChanges.ministryAudit.description')}
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>{t('recentChanges.ministryAudit.changes.1')}</li>
                    <li>{t('recentChanges.ministryAudit.changes.2')}</li>
                    <li>{t('recentChanges.ministryAudit.changes.3')}</li>
                    <li>{t('recentChanges.ministryAudit.changes.4')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 border-l-4 border-blue-600">
            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
              <strong>{t('note.text')}</strong>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              {t('note.source')}
            </p>
          </div>

          {/* Geri Dön */}
          <div className="mt-12">
            <Link
              href="/kooperatifcilik/mevzuat"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('backToLegislation')}
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
