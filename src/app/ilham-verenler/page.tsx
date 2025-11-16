"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";
import { useTranslations } from 'next-intl';

export default function IlhamVerenler() {
  const t = useTranslations('inspiration');
  const kitaplar = [
    "GIDA KRİZİ - Tarım, Ekoloji ve Egemenlik - Abdullah Aysu (syf. 271-287)",
    "TERRA MADRE - Carlo Petrini (syf.13-23)",
    "ETOBUR - OTOBUR İKİLEMİ - Michael Pollan (syf. 63-70)",
    "EKOKÖYLER - Sürdürülebilirliğin Yeni Ufukları - Jonathan Dawson",
    "DEĞİŞEN KARADENİZ'İ ANLAMAK - Deniz Yıldırım, Evren Haspolat (syf.421-443, 485-500)",
    "YEREL YÖNETİM KENT ve EKOLOJİ - Aykut Çoban (syf. 399-452)",
    "ÖLÜM TOHUMLARI - Genetik Biliminin Arkasındaki Karanlık Oyunlar - F.William Engdahl",
    "ORGANİK ÖTESİ TARIM - Hakan Ozan Erzincanlı",
    "GIDA TOPLULUKLARI ÇALIŞTAYI - Yeryüzü Derneği",
    "EKOKÖYLER - Yeni Rotamız - Julian Rose",
    "FOOD SOVEREIGNTY NOW! - A Guide to Food Sovereignty - European Coordination Via Campesina",
    "DÜNYA TARIM TARİHİ - Neolitik Çağ'dan günümüzdeki Krize - Marcel Mazoyer & Laurence Roudart",
    "KÜÇÜK KÖYLÜLÜĞE SERMAYE KAPANI - Türkiye'de Tarım Çalışmaları ve Köylülük Üzerine Gözlemler - Metin Özuğurlu",
    "SÜTLE GELEN EMEĞİN DAYANIŞMASI - Tire Süt Kooperatifi",
    "THE MYTH OF MONDRAGON - Cooperatives, Politics and Working-Class Life in a Basque Town - Sharryn Kasmir",
    "TOOLKIT - Peasant Agroecology Schools and the Peasant-to-Peasant Method of Horizontal Learning - La Via Campesina",
    "YEMEKTE TARİH VAR - Yemek Kültürü ve Tarihçiliği - Ayşe Avcı, Seda Erkoç, Elvin Otman (syf. 223-230)",
    "DEMOCRACY IN SMALL GROUPS - Participation, Decision Making and Communication - John Gastil",
    "TOOL KIT FOR WORKING IN A FEMINIST ORGANISATION - Women's Health West",
    "WORLD HUNGER - Frances Moore Lappe, Joseph Collins"
  ].sort((a, b) => a.localeCompare(b, 'tr', { sensitivity: 'base' }));

  const makaleler = [
    { 
      title: "Sofradaki Yemeğin Ötesi: Gıda Müşterekleri ve Feminizm Üzerine", 
      author: "Bengi Akbulut",
      link: "https://feministyaklasimlar.org/sayi-26-haziran-2015-2/sofradaki-yemegin-otesi-gida-musterekleri-ve-feminizm-uzerine/"
    },
    { 
      title: "Bildiğimiz Ekonominin Sonuna Bir Örnek: İntegral Kooperatifi", 
      author: "Bengi Akbulut",
      link: "https://umutsen.org/index.php/2017/09/bildigimiz-ekonominin-sonuna-bir-ornek-integral-kooperatifi-bengi-akbulut/"
    },
    { title: "Yerel / Doğal Üretim ve Aracısız Erişim", author: "Ceyhan Temürcü & Durukan Dudu" },
    { title: "Ekoloji Mücadelesinin Sınıfsallığı", author: "Mehmet HORUŞ" },
    { title: "İŞÇİ KOOPERATİFLERİ YENİ BİR TOPLUMUN TEMELİ OLABİLİR Mİ?", author: "Abstrakt Dergi, Çeviri: Canan Kaplan" },
    { title: "İŞÇİ YÖNETİMİNDEKİ KOOPERATİF İŞLETMELER ÜZERİNE", author: "marxists.org, Çeviri: Canan Kaplan" },
    { 
      title: "Sosyolojik Açıdan Kooperatifçilik Teorisinin Niteliğine İlişkin Düşünceler", 
      author: "Zeynep SINA & Serap SOYER",
      link: "https://silo.tips/download/sosyolojk-adan-kooperatflk-teorsnn-ntelcne-lkn-dnceler"
    },
    { 
      title: "KOOPERATİFÇİLİĞİN DÜNYADA VE TÜRKİYE'DEKİ NİCEL GELİŞİMİ", 
      author: "Prof. Dr. Cevat GERAY",
      link: "https://dergipark.org.tr/tr/pub/ausbf/issue/3117/43283"
    },
    { 
      title: "TÜRKİYE'DE KOOPERATİFÇİLİK DÜŞÜNCESİNİN GELİŞİMİ", 
      author: "Özlem YILDIRIR KOCABAŞ",
      link: "https://dergipark.org.tr/tr/pub/tarekoder/issue/25841/272430"
    },
    { 
      title: "Anarşistlerin Ekonomi Tartışmaları(7) : \"Görünmez Eli Kesmek: Pazarların İçsel Problemleri ve Anarşist Teori, Strateji ve Vizyon\"", 
      author: "Deric Shannon (Çeviri:Özgür Oktay)",
      link: "https://tr.anarchistlibraries.net/library/deric-shannon-gorunmez-eli-kesmek"
    },
    { 
      title: "Direnişi Kooperatifte Dokumak", 
      author: "Umut Kocagöz",
      link: "https://bianet.org/yazi/direnisi-kooperatifte-dokumak-151522"
    },
    { title: "Kooperatif Fikrini Strateji Bağlamında Düşünebilir Miyiz?", author: "Umut Kocagöz" },
    { 
      title: "Gıdanın Müşterekler Siyaseti", 
      author: "Umut Kocagöz",
      link: "https://musterekler.sehak.org/2018/12/03/gidanin-musterekler-siyaseti-umut-kocagoz/"
    },
    { 
      title: "Tüketiciler gıda sistemini nasıl değiştirebilir?", 
      author: "Umut Kocagöz",
      link: "https://www.karasaban.net/tuketiciler-gida-sistemini-nasil-degistirebilir-umut-kocagoz/"
    },
    { 
      title: "Tüketici Topluluklarından Gıda Egemenliğine: Tüketim Kooperatiflerinin İmkânı", 
      author: "Umut Kocagöz",
      link: "https://yesilgazete.org/tuketici-topluluklarindan-gida-egemenligine-tuketim-kooperatiflerinin-imkani-umut-kocagoz/"
    },
    { 
      title: "Gıda Toplulukları ve Aracısız Ürün Ağı Analizi", 
      author: "Zerrin Çelik",
      link: "https://dergipark.org.tr/tr/pub/meyve/issue/27294/287370"
    },
    { 
      title: "Tarımda Alternatif Kamusallığın Olanakları: İzmir Tire Süt Kooperatifi Örneği", 
      author: "Uygar Dursun Yıldırım",
      link: "https://www.meltemizmeda.org/wp-content/uploads/DergiNo-2/Yildirim.pdf"
    },
    { 
      title: "Böcek Öldüren Klorpirifos Stoğunu Çocuklarımıza Yedirecek miyiz?", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/bocek-olduren-klorpirifos-stogunu-cocuklarimiza-yedirecek-miyiz-184249"
    },
    { 
      title: "Ekmekte Pestisit ve Ağartıcı Madde Kalıntısı Var mı?", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/ekmekte-pestisit-ve-agartici-madde-kalintisi-var-mi-184659"
    },
    { 
      title: "GDO'lar Üç Yıl Önce Zararlıydı, Şimdi Zararsız Oldu", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/gdo-lar-uc-yil-once-zararliydi-simdi-zararsiz-oldu-166270"
    },
    { 
      title: "Gıdada Pestisit Kalıntısı ve Sağlık", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/gidada-pestisit-kalintisi-ve-saglik-165871"
    },
    { 
      title: "Gıdalardaki Antibiyotik: Sorular ve Sorunlar", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/gidalardaki-antibiyotik-sorular-ve-sorunlar-184466"
    },
    { 
      title: "Glifosat Kalıntısı GDO'lu Ekmek Kadar Önemli Bir Halk Sağlığı Sorunu", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/glifosat-kalintisi-gdo-lu-ekmek-kadar-onemli-bir-halk-sagligi-sorunu-184902"
    },
    { 
      title: "Küresel Isınma Çağında Pestisitler ve Gıda Güvenliği", 
      author: "Bülent Şık",
      link: "https://tr.boell.org/tr/2014/06/16/kuresel-isinma-caginda-pestisitler-ve-gida-guvenligi-yayinlar"
    },
    { 
      title: "Ot Öldürücü Glifosat Sorununda Bilinmesi Gerekenler", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/ot-oldurucu-glifosat-sorununda-bilinmesi-gerekenler-175028"
    },
    { 
      title: "Sivil Toplum Örgütleri Bir Araştırma Laboratuvarı Kurabilir mi?", 
      author: "Bülent Şık",
      link: "https://www.stgm.org.tr/sivil-toplum-orgutleri-arastirma-laboratuvari-kurabilir-mi"
    },
    { 
      title: "Tarladan Çatala Glifosat Sorunu", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/tarladan-catala-glifosat-sorunu-168595"
    },
    { 
      title: "Mesele Sadece Zeytin Ağaçları Değil", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/mesele-sadece-zeytin-agaclari-degil-187151"
    },
    { 
      title: "Zeytin Yasasının Değiştirilmesine 7. Kez Karşı Çıkmazsak Ne Olacak?", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/zeytin-yasasinin-degistirilmesine-7-kez-karsi-cikmazsak-ne-olacak-186917"
    },
    { 
      title: "Oyuncaklarda Az Bilinen Tehlike - Fitalatlar", 
      author: "Bülent Şık",
      link: "https://yesilgazete.org/oyuncaklarda-az-bilinen-tehlike-fitalatlar-bulent-sik/"
    },
    { 
      title: "Palm Yağı ve Nutella Yemeli mi Meselesi", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/palm-yagi-ve-nutella-yemeli-mi-meselesi-182802"
    },
    { 
      title: "Streç Filmler, Alkil Fenoller ve İyi bir Hayat", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/strec-filmler-alkil-fenoller-ve-iyi-bir-hayat-185602"
    },
    { 
      title: "Barbarlık Çağına Doğru Koşar Adım", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/barbarlik-cagina-dogru-kosar-adim-186709"
    },
    { 
      title: "Biberon ve Damacana Sulardaki Bisfenol A Sorunu Çözüldü mü?", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/biberon-ve-damacana-sulardaki-bisfenol-a-sorunu-cozuldu-mu-185328"
    },
    { 
      title: "Evde Konserve Yapmalı mı?", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/evde-konserve-yapmali-mi-185872"
    },
    { 
      title: "Gıdalarda At ve Eşek Eti Bulunması Gerçek Bir Sorun mu?", 
      author: "Bülent Şık",
      link: "https://bianet.org/yazi/gidalarda-at-ve-esek-eti-bulunmasi-gercek-bir-sorun-mu-166486"
    },
    { 
      title: "Non-hierarchical Organizing and International Women's NGO's: An Exploratory Study", 
      author: "Natalya Timoshkina",
      link: "https://www.researchgate.net/publication/273521197_Non-Hierarchical_Organizing_and_International_Women%27s_NGOs_An_Exploratory_Study"
    },
    { 
      title: "The Collectivist Organization: An Alternative To Rational-Bureaucratic Models", 
      author: "Joyce Rothschild-Whitt",
      link: "https://www.jstor.org/stable/2094585"
    },
    { 
      title: "The Tyranny of Structurelessness", 
      author: "Jo Freeman",
      link: "https://www.jofreeman.com/joreen/tyranny.htm"
    },
    { 
      title: "Collective Organisation", 
      author: "John Englart",
      link: "https://organizingforpower.wordpress.com/wp-content/uploads/2009/06/working-in-collective-organizations.pdf"
    },
    { 
      title: "Japon Kooperatifçilik Hareketi ve Toyohiko Kagawa", 
      author: "Kaynak",
      link: "http://blog.milliyet.com.tr/japon-kooperatifcilik-hareketi-ve-toyohiko-kagawa/Blog/?BlogNo=390914"
    },
    { 
      title: "Hayvansal Üretim-Çevre İlişkileri ve Organik Hayvancılık", 
      author: "Nihat Özen, Yılmaz Şayan, İbrahim Ak, İ.Yaman Yurtman, Muazzez Polat",
      link: "https://api2.zmo.org.tr/uploads/portal/resimler/ekler/e98410c45ea98ad_ek.pdf"
    },
    { 
      title: "Hayvancılık ve Küresel Isınma", 
      author: "M. Görgülü, N.Koluman Darcan, S.Göncü",
      link: "https://www.ruminantbesleme.com/2018/07/20/kuresel-isinma-ve-hayvancilik/#google_vignette"
    },
    { 
      title: "Çiftlik Hayvanları ve Küresel İklim Değişikliği Arasındaki Etkileşim", 
      author: "Mehmet Koyuncu, Hilal Akgün",
      link: "https://dergipark.org.tr/tr/pub/ziraatuludag/issue/37182/429394"
    },
    { 
      title: "Boğaziçi Üniversitesi Mensupları Tüketim Kooperatifi Bülteni", 
      author: "Sayı 7, 9",
      link: "https://bukoop.org/bultenler/"
    },
    { title: "Özyönetimsel Müşterek Yapılarda Temel Sorunsallar", author: "FelsefeLogos Dergisi - Fikret Adaman" },
    { 
      title: "Katalonya Kooperatifçilik Tarihinden Güncel Sosyal Ekonomi ve Dayanışma Ekonomisi Pratiklerine: Mücadeleler Arası Köprü Kurmak", 
      author: "Birikim Dergisi - Pelin Doğan, Irmak Ertör, Baybars Kulebi",
      link: "https://www.researchgate.net/publication/310279435_Mucadeleler_arasi_kopru_kurmak_Katalunya_kooperatifcilik_tarihinden_guncel_sosyal_ekonomi_ve_dayanisma_ekonomisi_pratiklerine"
    },
    { 
      title: "Konvansiyonel ve Ekolojik Hayvancılık Sistemlerinin Sürdürülebilirliği ve Türkiye Üzerine Bir Değerlendirme", 
      author: "ADÜ Ziraat Fakültesi Dergisi 2005 - Figen Çukur, Gamze Saner",
      link: "http://adudspace.adu.edu.tr:8080/xmlui/handle/11607/2402"
    },
    { 
      title: "Dayanışma Ekonomisi Temelinde Bütünleşik Bir Ekonomik Sistem Önerisi", 
      author: "Arda Arlı - İlk yayın: Yeniemek.org / Temmuz 2020",
      link: "https://www.academia.edu/75817491/Dayan%C4%B1%C5%9Fma_Ekonomisi_Temelinde_B%C3%BCt%C3%BCnle%C5%9Fik_Bir_Ekonomik_Sistem_%C3%96nerisi?source=swp_share"
    }
  ].sort((a, b) => a.title.localeCompare(b.title, 'tr', { sensitivity: 'base' }));

  const dijitalPlatformlar = [
    {
      title: "Stories Coop",
      link: "https://ica.coop/en/online-library/resources"
    }
  ].sort((a, b) => a.title.localeCompare(b.title, 'tr', { sensitivity: 'base' }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Arka plan görseli */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/bg3.webp"
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

        <div className="mb-12 text-center">
          <div className="text-6xl mb-6">📚✨</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {/* Kitaplar */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg px-4 py-2 shadow-md">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('sections.books.title')}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {kitaplar.length} {t('sections.books.count')}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3">
              {kitaplar.map((kitap, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                    {kitap}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Makaleler / Köşe Yazıları / Sunumlar */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg px-4 py-2 shadow-md">
                <span className="text-2xl">📄</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('sections.articles.title')}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {makaleler.length} {t('sections.articles.count')}
                </p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {makaleler.map((makale, index) => (
                <li 
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 dark:text-green-400 mt-1 flex-shrink-0">•</span>
                    <div className="flex-1 min-w-0">
                      {makale.link ? (
                        <h3 className="text-base sm:text-lg font-semibold mb-1">
                          <a 
                            href={makale.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:underline inline-flex items-start gap-2 transition-colors"
                          >
                            <span className="flex-1">{makale.title}</span>
                            <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </h3>
                      ) : (
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {makale.title}
                        </h3>
                      )}
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {makale.author}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Dijital Platformlar */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg px-4 py-2 shadow-md">
                <span className="text-2xl">🌐</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('sections.digitalPlatforms.title')}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {dijitalPlatformlar.length} {t('sections.digitalPlatforms.count')}
                </p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {dijitalPlatformlar.map((platform, index) => (
                <li 
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-purple-500 dark:text-purple-400 mt-1 flex-shrink-0">•</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        <a 
                          href={platform.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:underline inline-flex items-center gap-2"
                        >
                          {platform.title}
                          <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      </div>
    </div>
  );
}

