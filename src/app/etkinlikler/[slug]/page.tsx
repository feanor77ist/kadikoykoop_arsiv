"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import etkinliklerData from "../../../../public/etkinlikler/etkinlikler.json";

interface Etkinlik {
  slug: string;
  title: string;
  images: Array<{ name: string; path: string }>;
  content: string | null;
  content_type: "text" | "pdf" | null;
  date: string | null;
  thumbnail?: string;
  pdf_pages?: string[];
}

export default function EtkinlikDetay({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const etkinlikler = etkinliklerData as Etkinlik[];
  const etkinlik = etkinlikler.find((e) => e.slug === slug);
  const [textContent, setTextContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (etkinlik?.content && etkinlik.content_type === "text") {
      setLoading(true);
      fetch(`/api/etkinlikler/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setTextContent(data.content);
          setLoading(false);
        })
        .catch((err) => {
          console.error("İçerik yükleme hatası:", err);
          setLoading(false);
        });
    }
  }, [etkinlik, slug]);

  if (!etkinlik) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Etkinlik bulunamadı
            </h1>
            <Link
              href="/etkinlikler"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Etkinliklere dön
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/modal2.webp"
          alt=""
          className="fixed inset-0 w-full h-full object-cover opacity-[0.18] blur-[1px] dark:opacity-[0.22]"
        />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/etkinlikler" className="hover:text-blue-600 dark:hover:text-blue-400">Bir Araya Gelince</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">{etkinlik.title}</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {etkinlik.title}
            </h1>
          </div>

          {/* Görseller */}
          {etkinlik.images.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Görseller
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {etkinlik.images.map((img, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={img.path}
                      alt={img.name}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* İçerik */}
          {etkinlik.content && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                İçerik
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                {etkinlik.content_type === 'pdf' ? (
                  <div className="space-y-6">
                    {(etkinlik.pdf_pages && etkinlik.pdf_pages.length > 0
                      ? etkinlik.pdf_pages
                      : etkinlik.content
                      ? [etkinlik.content]
                      : []
                    ).map((pagePath, index) => (
                      <div key={pagePath} className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
                        <Image
                          src={pagePath}
                          alt={`${etkinlik.title} - Sayfa ${index + 1}`}
                          width={1200}
                          height={1600}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {loading ? (
                      <p className="text-gray-600 dark:text-gray-400">İçerik yükleniyor...</p>
                    ) : textContent ? (
                      <pre className="whitespace-pre-wrap font-sans text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {textContent}
                      </pre>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">İçerik yüklenemedi.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/etkinlikler"
              className="inline-flex items-center px-6 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Etkinliklere Dön
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

