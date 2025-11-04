"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Image from "next/image";

const galleryInfo: Record<string, { title: string; icon: string }> = {
  "brosur": { title: "Broşür", icon: "📄" },
  "haftalik-toplanti-duyuru-afisleri": { title: "Haftalık Toplantı Duyuru Afişleri", icon: "📅" },
  "kkka-toplanti-duyuru-afisleri": { title: "KKKA Toplantı Duyuru Afişleri", icon: "🎤" },
  "paylasim-gorselleri": { title: "Paylaşım Görselleri", icon: "📱" },
  "gorseller": { title: "Görseller", icon: "📸" },
  "logo": { title: "Logo", icon: "🎨" }
};

export default function GalleryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    // Görselleri yükle
    const loadImages = async () => {
      try {
        console.log('Görseller yükleniyor, galeri ID:', resolvedParams.id);
        // API route'dan görselleri al (veya statik olarak liste)
        const response = await fetch(`/api/hafiza/${resolvedParams.id}`);
        console.log('API response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('API data:', data);
          console.log('Görseller sayısı:', data.images?.length || 0);
          setImages(data.images || []);
        } else {
          console.error('API response not OK:', response.status, response.statusText);
          // Fallback: public klasöründen direkt yükleme
          // Bu durumda görselleri manuel olarak listelemek gerekir
          setImages([]);
        }
      } catch (error) {
        console.error("Görseller yüklenirken hata:", error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [resolvedParams.id]);

  const gallery = galleryInfo[resolvedParams.id] || { title: "Galeri", icon: "📸" };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/Temmuz 2020.webp"
          alt=""
          className="fixed inset-0 w-full h-full object-cover opacity-[0.18] blur-[1px] dark:opacity-[0.22]"
        />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/hafiza" className="hover:text-blue-600 dark:hover:text-blue-400">Kolektif Hafıza</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">{gallery.title}</span>
          </div>

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="text-5xl mb-4">{gallery.icon}</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {gallery.title}
            </h1>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Görseller yükleniyor...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && images.length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">Bu galeride henüz görsel bulunmuyor.</p>
            </div>
          )}

          {/* Image Grid */}
          {!loading && images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="relative aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer hover:opacity-90 transition-opacity group"
                >
                  <Image
                    src={`/hafiza/${resolvedParams.id}/thumb/${image}`}
                    alt={`${gallery.title} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
              ))}
            </div>
          )}

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <Link
              href="/hafiza"
              className="inline-flex items-center px-6 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Galerilere Dön
            </Link>
          </div>
        </main>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            
            {selectedImage < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
            
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <Image
                src={`/hafiza/${resolvedParams.id}/full/${images[selectedImage]}`}
                alt={`${gallery.title} ${selectedImage + 1}`}
                width={1200}
                height={1200}
                className="max-w-full max-h-[90vh] object-contain"
                priority
              />
            </div>
            
            <div className="absolute bottom-4 text-white text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

