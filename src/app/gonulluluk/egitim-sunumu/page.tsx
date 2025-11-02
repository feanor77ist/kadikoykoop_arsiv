"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function EgitimSunumu() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Slayt dosyaları
  const images: string[] = [
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.001.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.002.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.003.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.004.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.005.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.006.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.007.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.008.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.009.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.010.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.011.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.012.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.013.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.014.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.015.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.016.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.017.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.018.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.019.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.020.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.021.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.022.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.023.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.024.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.025.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.026.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.027.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.028.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.029.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.030.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.031.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.032.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.033.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.034.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.035.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.036.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.037.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.038.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.039.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.040.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.041.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.042.jpeg",
    "/eğitim sunumu/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020/Kadıköy_Koop_Eğitim_Sunumu-güncel_2020.043.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/gonulluluk" className="hover:text-blue-600 dark:hover:text-blue-400">Gönüllülük</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Eğitim Sunumu</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kadıköy Kooperatifi Eğitim Sunumu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            2020 Güncel Eğitim Sunumu
          </p>
        </div>

        {/* Images Grid */}
        {images.length > 0 ? (
          <div className="space-y-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={image}
                    alt={`Eğitim sunumu slayt ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index < 3}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                  Slayt {index + 1}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              JPG imajlar yüklendikten sonra buraya görüntülenecektir.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors no-underline cursor-pointer active:cursor-grabbing"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Başa Dön
          </button>
          <Link 
            href="/gonulluluk" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline cursor-pointer"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Geri Dön
          </Link>
        </div>
      </main>

      {/* Floating "Başa Dön" Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 z-50 cursor-pointer active:cursor-grabbing"
          aria-label="Başa Dön"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}

