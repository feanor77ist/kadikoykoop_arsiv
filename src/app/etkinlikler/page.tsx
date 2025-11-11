"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import Script from "next/script";
import etkinliklerData from "../../../public/etkinlikler/etkinlikler.json";

interface Etkinlik {
  slug: string;
  title: string;
  images: Array<{ name: string; path: string }>;
  content: string | null;
  content_type: "text" | "pdf" | null;
  date: string | null;
  thumbnail?: string;
}

interface SocialMediaPost {
  type: "instagram" | "facebook";
  url: string;
}

export default function Etkinlikler() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Her sayfada gösterilecek öğe sayısı
  const [loadedEmbeds, setLoadedEmbeds] = useState<Set<string>>(new Set());
  const embedRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const processInstagramEmbeds = useCallback(() => {
    if (typeof window === "undefined") return;
    const instgrm = (window as any).instgrm;
    if (instgrm && instgrm.Embeds) {
      try {
        instgrm.Embeds.process();
      } catch (error) {
        // ignore
      }
    }
  }, []);

  const processFacebookEmbeds = useCallback(() => {
    if (typeof window === "undefined") return;
    const FB = (window as any).FB;
    if (FB && FB.XFBML) {
      try {
        FB.XFBML.parse();
      } catch (error) {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }
  }, []);
  
  const etkinlikler = etkinliklerData as Etkinlik[];
  const toplamEtkinlik = etkinlikler.length;

  // Sayfa değiştiğinde embed'leri temizle (sadece sayfa değiştiğinde)
  useEffect(() => {
    if (currentPage === 1) {
      // İlk sayfada mevcut yüklemeyi koru
      return;
    }

    setLoadedEmbeds(new Set());
  }, [currentPage]);

  // Lazy loading için Intersection Observer
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const embedId = entry.target.getAttribute('data-embed-id');
            if (embedId) {
              setLoadedEmbeds((prev) => {
                if (!prev.has(embedId)) {
                  return new Set([...prev, embedId]);
                }
                return prev;
              });
            }
          }
        });
      },
      {
        rootMargin: '100px', // 100px önceden yükle
        threshold: 0.1
      }
    );

    // DOM render edildikten sonra observer'ı başlat
    const timer = setTimeout(() => {
      embedRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
      
      // İlk sayfada tüm embed'leri hemen yükle, diğer sayfalarda sadece görünür olanları
      if (currentPage === 1) {
        // İlk sayfada tüm embed'leri yükle
        embedRefs.current.forEach((ref) => {
          if (ref) {
            const embedId = ref.getAttribute('data-embed-id');
            if (embedId) {
              setLoadedEmbeds((prev) => {
                if (!prev.has(embedId)) {
                  return new Set([...prev, embedId]);
                }
                return prev;
              });
            }
          }
        });
      } else {
        // Diğer sayfalarda sadece görünür olanları yükle
        embedRefs.current.forEach((ref) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
            if (isVisible) {
              const embedId = ref.getAttribute('data-embed-id');
              if (embedId) {
                setLoadedEmbeds((prev) => {
                  if (!prev.has(embedId)) {
                    return new Set([...prev, embedId]);
                  }
                  return prev;
                });
              }
            }
          }
        });
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      embedRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [currentPage]); // Sadece sayfa değiştiğinde yeniden kur

  useEffect(() => {
    if (loadedEmbeds.size === 0) {
      return;
    }

    const instagramRetry = setTimeout(() => {
      processInstagramEmbeds();
    }, 250);

    const facebookRetry = setTimeout(() => {
      processFacebookEmbeds();
    }, 250);

    return () => {
      clearTimeout(instagramRetry);
      clearTimeout(facebookRetry);
    };
  }, [loadedEmbeds, processFacebookEmbeds, processInstagramEmbeds]);

  useEffect(() => {
    const timer = setTimeout(() => {
      processInstagramEmbeds();
      processFacebookEmbeds();
    }, 300);

    return () => clearTimeout(timer);
  }, [currentPage, processFacebookEmbeds, processInstagramEmbeds]);

  const instagramPostUrls = [
    "https://www.instagram.com/p/CrBtHZsImjQ/?img_index=1",
    "https://www.instagram.com/p/CmObgnVIDKZ/",
    "https://www.instagram.com/p/ClbbKo7ITwG/",
    "https://www.instagram.com/p/CjC8_Y3gnuq/",
    "https://www.instagram.com/p/ChHkuyEsgrc/",
    "https://www.instagram.com/p/CgE_11FjNUv/?img_index=1",
    "https://www.instagram.com/p/Cfgx9NXN3xO/",
    "https://www.instagram.com/p/CdsXlOQo1ov/?img_index=1",
    "https://www.instagram.com/p/Cd2yXqcgUYl/",
    "https://www.instagram.com/p/Cd3BIghgWC_/?img_index=1",
    "https://www.instagram.com/p/CdyHHuVAkQM/",
    "https://www.instagram.com/p/CdyFEsaIgyk/",
    "https://www.instagram.com/p/CaffbzOgzRx/",
    "https://www.instagram.com/p/Cakx_b3ggkr/?img_index=6",
    "https://www.instagram.com/p/CWxlxZQgkuP/?img_index=1",
    "https://www.instagram.com/p/CUhGI1bgzRA/",
    "https://www.instagram.com/p/CUlEmbLg9dS/",
    "https://www.instagram.com/p/CUPbrrIgBC4/?img_index=1",
    "https://www.instagram.com/p/CPTN7NLAhzP/",
    "https://www.instagram.com/p/CPQCqOGgjKW/",
    "https://www.instagram.com/p/COUp5wVAyLm/",
    "https://www.instagram.com/p/CMosJxJAuS5/",
    "https://www.instagram.com/p/CMeVOxwgn__/",
    "https://www.instagram.com/p/CLoQxTmgcFq/",
    "https://www.instagram.com/p/CLXD3HlAkYx/",
    "https://www.instagram.com/p/CKrABIzAJn9/",
    "https://www.instagram.com/p/CJ1bnKugj2C/",
    "https://www.instagram.com/p/CIyXfsMg8b6/",
    "https://www.instagram.com/p/CCTlDeOg9n9/",
    "https://www.instagram.com/p/CBkvU81Ad6s/",
    "https://www.instagram.com/p/CBNSYe9gVMg/",
    "https://www.instagram.com/p/B_qLKiNAVVh/",
    "https://www.instagram.com/p/B9ELYUGAgfU/",
    "https://www.instagram.com/p/B4hSKvDA7aZ/",
    "https://www.instagram.com/p/B55W9VVg2z_/?img_index=1",
    "https://www.instagram.com/p/B5xHDOqAabc/?img_index=1",
    "https://www.instagram.com/p/B3CNfbGAADW/?img_index=1",
    "https://www.instagram.com/p/B3gxHnyAAVN/",
    "https://www.instagram.com/p/B4DfA69A8i7/",
    "https://www.instagram.com/p/B2y0FZ7A17c/",
    "https://www.instagram.com/p/B2mU0KFA2uU/",
    "https://www.instagram.com/p/B2WyHQ3ABwS/?img_index=1",
    "https://www.instagram.com/p/B1s3yEOgImz/",
    "https://www.instagram.com/p/B2EbWi4gb1y/?img_index=1",
    "https://www.instagram.com/p/B2Eo4f-gm5y/",
    "https://www.instagram.com/p/B2H3y3MACvn/?img_index=1",
    "https://www.instagram.com/p/B184AMTgEhg/?img_index=1",
    "https://www.instagram.com/p/B1wdY1Ig_i5/",
    "https://www.instagram.com/p/Bz-2OukAV_7/",
    "https://www.instagram.com/p/BzLs12SgaVC/",
    "https://www.instagram.com/p/Bx47PhfgR9v/",
    "https://www.instagram.com/p/Bx7EOgsgCnQ/?img_index=1",
    "https://www.instagram.com/p/BxsNgQ7BF9j/",
    "https://www.instagram.com/p/BxAXPAiAhYc/",
    "https://www.instagram.com/p/Bw7bSydAa-y/",
    "https://www.instagram.com/p/BuKDgKggXBL/",
    "https://www.instagram.com/p/BvCD6eGgMp2/?img_index=1",
    "https://www.instagram.com/p/Bs3WuQkhnlJ/",
    "https://www.instagram.com/p/Bs21QV1BWX9/",
    "https://www.instagram.com/p/Bsd05ZPhxl_/",
    "https://www.instagram.com/p/BsjUdHuhJP-/?img_index=1",
    "https://www.instagram.com/p/BsM9qPvhGjL/?img_index=1",
    "https://www.instagram.com/p/Br-e1DSBWjb/",
    "https://www.instagram.com/p/BrsepAwhl-x/?img_index=1",
    "https://www.instagram.com/p/Brhnq5SBTVL/",
    "https://www.instagram.com/p/BrpcXcfhEAS/?img_index=1",
    "https://www.instagram.com/p/BrcxxPehRRP/?img_index=1",
    "https://www.instagram.com/p/BrcfrUcBK26/?img_index=1",
    "https://www.instagram.com/p/Bq_0GNegJon/",
    "https://www.instagram.com/p/BrU6DVih_ul/?img_index=1",
    "https://www.instagram.com/p/BrSrhlDh5oz/",
    "https://www.instagram.com/p/BrLWyzKh6jB/",
    "https://www.instagram.com/p/BqnUk3zlkSB/",
    "https://www.instagram.com/p/BqMzVocBlE6/",
    "https://www.instagram.com/p/BqSCA-3hqQM/",
    "https://www.instagram.com/p/BqSCpEpBrsR/?img_index=1",
    "https://www.instagram.com/p/BpRbLfGhcnV/",
    "https://www.instagram.com/p/BpHHpkAhWMM/?img_index=1",
    "https://www.instagram.com/p/BpGtQOJBxCL/?img_index=1",
    "https://www.instagram.com/p/Boq3zpChd_L/?img_index=1",
    "https://www.instagram.com/p/BoTaCfIhuwn/",
    "https://www.instagram.com/p/Bn5wFZBBV_C/",
    "https://www.instagram.com/p/BnyyfMYBTKz/?img_index=1",
    "https://www.instagram.com/p/BnlggKchvfw/",
    "https://www.instagram.com/p/BnvkeiXhjTD/?img_index=1",
    "https://www.instagram.com/p/BnUFjkMhw5z/",
    "https://www.instagram.com/p/BnVX6E-BsyU/",
    "https://www.instagram.com/p/BnVw_s2Bkd6/?img_index=1",
    "https://www.instagram.com/p/Bna-p8nhIjx/",
    "https://www.instagram.com/p/BndTvXph_fs/?img_index=1",
    "https://www.instagram.com/p/Bnd9y_whx59/",
    "https://www.instagram.com/p/BlnLWM2hkeK/",
    "https://www.instagram.com/p/Blxi77rhhtu/",
    "https://www.instagram.com/p/Bjui9MABP5_/",
    "https://www.instagram.com/p/Bjhsf1mhRDs/",
    "https://www.instagram.com/p/BiZqmuJh8cu/",
    "https://www.instagram.com/p/BiweUYWhAhp/",
    "https://www.instagram.com/p/BimUmVRBG14/",
    "https://www.instagram.com/p/BiUPSr2hkl7/",
    "https://www.instagram.com/p/BiB6rA3hwgw/",
    "https://www.instagram.com/p/BgbMiI-AFOA/",
    "https://www.instagram.com/p/BfnlthhAeom/",
    "https://www.instagram.com/p/BfYS-3UgL6z/",
    "https://www.instagram.com/p/Bb69vLPAOkh/?img_index=1",
    "https://www.instagram.com/p/BceauqPljK1/",
    "https://www.instagram.com/p/Bcesd_El9An/",
    "https://www.instagram.com/p/BbFJFkxgf4G/?img_index=1",
    "https://www.instagram.com/p/BbRNtLfg3id/?img_index=1",
    "https://www.instagram.com/p/BbHDeuag9Gk/",
    "https://www.instagram.com/p/BbHJdvkAxJg/",
    "https://www.instagram.com/p/BbCnbdKgPVc/",
    "https://www.instagram.com/p/BbHACJ5gZ-U/",
    "https://www.instagram.com/p/BbHBZ-2Amtb/?img_index=1"
  ];

  const facebookPostUrls = [
    "https://www.facebook.com/photo/?fbid=828660202628416&set=pcb.828660225961747",
    "https://www.facebook.com/photo/?fbid=800151855479251&set=pcb.800151898812580",
    "https://www.facebook.com/photo/?fbid=800078695486567&set=pcb.800078732153230",
    "https://www.facebook.com/photo/?fbid=784979233663180&set=pcb.784979283663175",
    "https://www.facebook.com/photo/?fbid=668531715307933&set=pcb.668531765307928",
    "https://www.facebook.com/photo/?fbid=634352045392567&set=a.551917883635984",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/2341720615989469/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/2298477860313745/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/2263829583778573/?type=3",
    "https://www.facebook.com/photo/?fbid=2061953180632882&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1902890536539148/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1665756756919195/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1433904750104398/?type=3",
    "https://www.facebook.com/photo/?fbid=1406344052860468&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/photo/?fbid=1406382036190003&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/photo/?fbid=1406382116189995&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1344643882363819/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1191460007682208/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/1191460067682202/?type=3",
    "https://www.facebook.com/photo/?fbid=1191460144348861&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/photo/?fbid=1084384898389720&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/photo/?fbid=1084384901723053&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/photo/?fbid=1084385011723042&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/965086120319599/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/954780418016836/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/783741218454091/?type=3",
    "https://www.facebook.com/photo/?fbid=759824510845762&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/759358317559048/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/722763884551825/?type=3",
    "https://www.facebook.com/photo/?fbid=722770471217833&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/711096515718562/?type=3",
    "https://www.facebook.com/photo/?fbid=671735842987963&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/photo/?fbid=671735852987962&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/photo/?fbid=671735896321291&set=pb.100064533318835.-2207520000",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/624327367728811/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/539950582833157/?type=3",
    "https://www.facebook.com/KadikoyKoop/photos/pb.100064533318835.-2207520000/503253196502896/?type=3"
  ];

  const instagramPosts: SocialMediaPost[] = instagramPostUrls
    .slice()
    .reverse()
    .map((url) => ({ type: "instagram" as const, url }));

  const facebookPosts: SocialMediaPost[] = facebookPostUrls
    .slice()
    .reverse()
    .map((url) => ({ type: "facebook" as const, url }));

  const socialMediaPosts: SocialMediaPost[] = [...instagramPosts, ...facebookPosts];

  // Tüm öğeleri birleştir (ilk 23 etkinlik + sosyal medya postları)
  const allItems = [
    ...etkinlikler.slice(0, 23).map(etkinlik => ({ type: 'etkinlik' as const, data: etkinlik })),
    ...socialMediaPosts.map(post => ({ type: 'social' as const, data: post }))
  ];

  // Pagination hesaplamaları
  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allItems.slice(startIndex, endIndex);

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    window.scrollTo({ top: 0 });
    setCurrentPage(page);
  };

  return (
    <>
      <Script
        id="instagram-embed"
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          processInstagramEmbeds();
        }}
      />
      <Script id="facebook-sdk-init" strategy="afterInteractive">
        {`
          window.fbAsyncInit = function() {
            if (window.FB) {
              window.FB.init({
                xfbml: true,
                version: 'v18.0'
              });
            }
          };
        `}
      </Script>
      <Script
        id="facebook-sdk"
        src="https://connect.facebook.net/tr_TR/sdk.js#xfbml=1&version=v18.0"
        strategy="afterInteractive"
        onLoad={() => {
          processFacebookEmbeds();
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-x-hidden">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/bg6.webp"
          alt=""
          className="fixed inset-0 w-full h-full object-cover opacity-[0.18] blur-[1px] dark:opacity-[0.22]"
        />
      </div>
      
        <div className="relative z-10">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Bir Araya Gelince</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                  Bir Araya Gelince...
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                  Kooperatif etkinlikleri ve bir arada olma anları
                </p>
              </div>
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg border border-green-200 dark:border-green-800">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                  {allItems.length} etkinlik
                </span>
              </div>
            </div>
          </div>

          {/* Etkinlikler Listesi */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {currentItems.map((item, index) => {
                  if (item.type === 'etkinlik') {
                    const etkinlik = item.data as Etkinlik;
                    const thumbnail = etkinlik.thumbnail || (etkinlik.images.length > 0 ? etkinlik.images[0].path : null);
                    
                    return (
                      <Link
                        key={etkinlik.slug}
                        href={`/etkinlikler/${etkinlik.slug}`}
                        className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1 h-full"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                              <div className="text-2xl sm:text-3xl">🎉</div>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2 line-clamp-2">
                              {etkinlik.title}
                            </h3>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        {thumbnail && (
                          <div className="mb-3 rounded-lg overflow-hidden">
                            <img
                              src={thumbnail}
                              alt={etkinlik.title}
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-auto">
                          {etkinlik.content && (
                            <span className="inline-flex items-center gap-1">
                              {etkinlik.content_type === 'pdf' ? '📄' : '📝'}
                              {etkinlik.content_type === 'pdf' ? 'PDF' : 'Metin'}
                            </span>
                          )}
                          {etkinlik.images.length > 0 && (
                            <span className="inline-flex items-center gap-1">
                              📸 {etkinlik.images.length} görsel
                            </span>
                          )}
                        </div>
                      </Link>
                    );
                  } else {
                    const post = item.data as SocialMediaPost;
                    const embedId = `${post.type}-${post.url}`;
                    // İlk sayfada tüm embed'leri yükle, diğer sayfalarda lazy loading
                    const isLoaded = currentPage === 1 || loadedEmbeds.has(embedId);
                    
                    return (
                      <div
                        key={`${post.type}-${index}`}
                        className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 sm:p-6 border-2 border-gray-200 dark:border-gray-700 h-full"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="flex-shrink-0">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-md">
                              <div className="text-2xl sm:text-3xl">{post.type === "instagram" ? "📱" : "📘"}</div>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                              {post.type === "instagram" ? "Instagram Duyurusu" : "Facebook Duyurusu"}
                            </h3>
                          </div>
                        </div>
                        
                        <div 
                          ref={(el) => {
                            if (el) {
                              embedRefs.current.set(embedId, el);
                              // İlk sayfada hemen yükle
                              if (currentPage === 1) {
                                setLoadedEmbeds((prev) => {
                                  if (!prev.has(embedId)) {
                                    return new Set([...prev, embedId]);
                                  }
                                  return prev;
                                });
                              }
                            } else {
                              embedRefs.current.delete(embedId);
                            }
                          }}
                          data-embed-id={embedId}
                          className="mb-3 rounded-lg overflow-hidden bg-white dark:bg-gray-800 p-2 min-h-[400px] flex items-center justify-center"
                          key={`embed-${embedId}-${currentPage}`}
                        >
                          {isLoaded ? (
                            post.type === "instagram" ? (
                              <blockquote
                                className="instagram-media"
                                data-instgrm-permalink={post.url}
                                data-instgrm-version="14"
                                key={`ig-${embedId}-${currentPage}`}
                              >
                                <a href={post.url} target="_blank" rel="noopener noreferrer">
                                  Instagram gönderisi yükleniyor...
                                </a>
                              </blockquote>
                            ) : (
                              <div
                                className="fb-post"
                                data-href={post.url}
                                data-width="500"
                                data-show-text="true"
                                style={{ width: '100%' }}
                                key={`fb-${embedId}-${currentPage}`}
                              >
                                <blockquote cite={post.url} className="fb-xfbml-parse-ignore">
                                  <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">
                                    Facebook gönderisi yükleniyor...
                                  </a>
                                </blockquote>
                              </div>
                            )
                          ) : (
                            <div className="text-center text-gray-400 dark:text-gray-500">
                              <div className="text-sm">Kaydırınca yüklenecek...</div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-auto">
                          <span className="inline-flex items-center gap-1">
                            {post.type === "instagram" ? "📱 Instagram" : "📘 Facebook"}
                          </span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Sayfa {currentPage} / {totalPages} (Toplam {allItems.length} öğe)
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Önceki Sayfa */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
                  >
                    Önceki
                  </button>
                  
                  {/* Sayfa Numaraları */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      // İlk sayfa, son sayfa, mevcut sayfa ve yakındaki sayfaları göster
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                              currentPage === page
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      } else if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                      ) {
                        return (
                          <span key={page} className="px-2 text-gray-500 dark:text-gray-400">
                            ...
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>
                  
                  {/* Sonraki Sayfa */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer"
                  >
                    Sonraki
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors font-medium group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Ana Sayfaya Dön
            </Link>
          </div>
        </main>
      </div>
      
        <div id="fb-root"></div>
      </div>
    </>
  );
}
