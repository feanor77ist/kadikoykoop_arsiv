"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function KadikoydeMSTVeGidaEgemenligi() {
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden relative">
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
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/yayinlar" className="hover:text-blue-600 dark:hover:text-blue-400">Kooperatif Yayında</Link>
            <span>/</span>
            <Link href="/yayinlar/medyada-cikanlar" className="hover:text-blue-600 dark:hover:text-blue-400">Medyada Çıkan Haberler</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Kadıköy'de MST ve Gıda Egemenliği Üzerine Söyleşi</span>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kadıköy'de MST ve Gıda Egemenliği Üzerine Söyleşi
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              5 Mart 2016 - Kadıköy Belediyesi Akademi
            </p>
          </div>

          {/* Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Tüketim Kooperatifleri Girişimi'nin düzenlediği, "Brezilya Topraksız Kır İşçileri Hareketi (MST) ile Kooperatifler ve Gıda Egemenliği Üzerine Söyleşi", MST Ulusal Koordinasyonu Üyesi Marina dos Santos'un katılımı ve sunumuyla 5 Mart 2016 Cumartesi günü Caddebostan Kültür Merkezi'nde gerçekleşti.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Etkinliğin giriş konuşmasını gerçekleştiren Kadıköy Tüketim Kooperatifleri Girişimi'nden Evren Kocabıçak, kooperatifleşme süreci hakkında bilgi verdi. Girişimin her hafta Perşembe akşamları toplantı yaptığını, kurulma sürecinde 300 kadar kurucu üyeye ihtiyaç duyacaklarını, bu arada Kadıköy'deki Moda Gezi Bostanı'nın kurulma aşamasında olduğunu ve kooperatif girişiminin de mekan ve destek ihtiyacının devam ettiğini ve tüketicilerin de mevsimlik paketlerden satın alarak destek olabileceğini aktardı.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              La Via Campesina Hareketi
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Tüketim Kooperatifinden bir diğer konuşmacı Umut Kocagöz, sözü Marina dos Santos'a bırakmadan önce MST ve La Via Campesina hakkında bilgi aktarımında bulundu.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              La Via Campesina'nın Afrika, Asya, Avrupa ve Amerika kıtasında (Kuzey, Orta ve Güney Amerika) 88 ülkede 183 örgütü bir araya getiren, 200 milyondan fazla köylü, küçük çiftçi, topraksız, kadın, genç, yerli, göçmen, tarım ve gıda emekçisinden oluşan uluslararası bir köylü hareketi olduğunu ifade eden Kocagöz, hareketin amacının "ne için, kimin için ve neyin üretileceğine karar vermek" anlamında kullanılan gıda egemenliğini ("food sovereignty") elde etmek olduğunu söyledi.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              La Via Campesina 4 yılda bir genel kurulu yaparak kendi geleceğine karar veriyor ve bu genel kurullara kadın ve genç çiftçilerin katılımı önemseniyor. La Via Campesina Yarıyıl Konferansını geçtiğimiz Kasım ayında Çiftçi-Sen'in ev sahipliğinde Seferihisar'da gerçekleştirmişti.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              MST Topraksızlar Hareketi
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              MST Topraksız Kır İşçileri Hareketi, Brezilya'da kırda tarımla uğraşan köylülerin diktatörlük döneminde başlattıkları hareketin ismi. 1984 yılı öncesinde var olan eylemlilikleri birleştirerek bu adı aldı. Hareketin birincil eylem aracı olan toprak işgallerini gerçekleştirerek, MST toprağın adil dağılımının ve ekolojik tarımın savunuculuğunu yapıyor. Şimdiye dek Belçika yüzölçümü kadar toprak işgal edildi ve 300 bin aile işgal edilen topraklarda yaşamlarını sürdürüyor. Ekolojik, sağlıklı, nitelikli gıda üretimi ve çiftçilerin bütün toplum için üretim yapması hareketin hedefleri arasında. MST, yalnızca tarım yapmanın dışında politik bir konuma da sahip ve yasal düzlemde savunuculuk faaliyetleri de gerçekleştiriyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              MST'nin öngördüğü tarım reformu, yalnızca gıdayı değil eğitim, sağlık ve tüketim modellerini ve alternatif bir yaşam pratiğini de kapsıyor. Bir yandan ürünlerini kooperatif vasıtasıyla topluma ulaştırırken, diğer yanda alternatif festivaller düzenleniyor ve alternatif bir pedagoji ve eğitim sistemi inşasına dair çabalar da devam ettiriliyor. Dolayısıyla MST, sistemi değiştirmeye yönelik bir pratik de inşa etmeye çalışıyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Marina dos Santos MST'yi şöyle anlattı: "MST, özellikle topraksız işçi ve çiftçileri örgütlüyor. Atıl bırakılan toprakları işgal ediyor ve işliyoruz. İkinci bir hedefimiz de toplumun daha adil bir gelişim izlemesini sağlamak. 32 yıl boyunca verdiğimiz mücadele boyunca devlet çok direndi ve çok sayıda yoldaşımız öldürüldü ancak birçok kazanım da elde ettik. En önemli kazanım 15 bin kişinin toprak sahibi oldu, 57 bin insan bu şekilde geçimini sağlıyor ve bu da verdiğimiz mücadele sayesinde gerçekleşti. Başka bir tip tarımsal üretim modelini ortaya koymuş olduk. Doğaya zarar vermeyen ve su kaynaklarını tüketmeyen bir model oluşturduk. Ailelerin örgütlenme biçiminde değişiklik yapmamız gerekti. Kooperativist bir biçimde örgütlenme ve okulların inşa edilmesi üzerine yoğunlaştık. Gençlere ve aktivistlere yönelik ideolojik eğitim programımız var ve kamu üniversiteleriyle işbirliği yapıyoruz ve 5 bin kadar öğrenci mevcutta bu eğitimi alıyor."
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Dos Santos, 32 yıllık süreçte tarımsal üretim için 4 temel nokta belirlediklerini söyledi:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
              <li>Merkezsizleştirilmiş toprak,</li>
              <li>Yeni bir üretim biçimi agro-ekolojik programda ailelerin gıda egemenliği,</li>
              <li>Eğitim tarımla uğraşan gençler için eğitim ve</li>
              <li>Tarımsal endüstri alternatifi üretmek.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              MST Kooperatifleri
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tarımsal program ekseninde toprak işgal eden aileler yeni bir ulusal tarım üretimi modeli yaratmaya çalışıyor. Yerleşimlerdeki tarım kooperatifleri geleneksel modele bir alternatif teşkil ediyor. Yeni bir teknolojik sistem, toksik madde karşıtı ve sosyal örgütlenme modeli içeriyor. MST'nin Tarım Reformu Kooperatifleri Birliği adında bir ağı bulunuyor. Marina dos Santos, üretim kooperatiflerinden bazılarının gıda dışı ancak birçoğunun da tarım üzerine olduğunu ifade ediyor. Kooperatifler MST prensiplerini yerele tercüme ediyor ve yerel düzeyde uyguluyor. Ticari ürünlerin satışını kolaylaştırmanın yanı sıra kent ile üretici arasındaki bağları da kuruyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bu bağlamda tarımsal üreticiyle kentli tüketicinin buluşması için büyük kentlerde festivaller düzenleniyor ve son olarak bir ulusal festival de düzenlenmiş durumda. Bu tür festivallerin amacı, kentlerdeki sosyal hareketlerle ve işçi kültürüyle köylü ve kırsal üretici kültürü arasında bir geçişlilik sağlamak. MST, kooperatiflerdeki ürünleri büyük marketlerde dolaşıma sokma yönünde bir çaba da gösteriyor ancak dos Santos fiyat denetimi konusunda yetkinin ve mekanizmaların MST'de olmadığını ve MST logosu taşıyan ürünlerin marketlere kabul edilmediğini aktarıyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              MST'nin aynı zamanda bir Tarımsal Eğitim ve Gelişim Enstitüsü kurduğunu ve burada kendi uzmanlarını yetiştirerek kendi kültürünü inşa ettiğini ifade eden dos Santos, şunları söylüyor: "Bizim için önemli olan ortaklaşa çalışma ilkesinin benimsenmesi. Beraber yapmayı öğrenme amacıyla atölye ve eğitimler düzenliyoruz. MST için toprak işgalinde önemli olan sadece toprağın işgal edilmesi değil. İşgallerin kalabalıklar halinde ve kolektif bir mantıkla yapılması önemli. Bunun ötesinde bu ailelerin yeni bir hayatın içine dahil edilmesi çok önemli. Dolayısıyla sadece toprağın işgali değil, ailelerin yeni bir ideoloji içinde olmaları önemli. Brezilya'da veya dünyada topraksız insanlar oldukça bizim mücadelemiz de devam edecek. Kooperatifleşme süreci de bunun bir parçası olmak zorunda. Dolayısıyla kooperatifler de MST gibi örgütlenme faaliyetlerinin içinde yer almalı. MST nasıl La Via Campesina içinde yer alıyorsa, kooperatifler de aynı şekilde uluslararası bir bakış açısı ve küresel ağlar içinde olmalı."
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Kadıköy Tüketim Kooperatifi Girişimi Hakkında
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Tüketim Kooperatifi Girişimi, İstanbul'un Kadıköy bölgesinde yaşayan, farklı yaş, cinsiyet ve meslek gruplarından kişilerin oluşturduğu bir kooperatif girişimidir. Girişimin temel amacı Kadıköy bölgesinde, belirlenen ilkeler doğrultusunda çalışan bir tüketim kooperatifi kurmak olarak tarif ediliyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Tüketim Kooperatifi Girişimi'nin çalışmalarına herkes gönüllü olarak katılabilir. Kadıköy'de bir kooperatif kurma fikri "mahalle forumları ve dayanışmaları" içerisinde yapılan tartışmalarda ortaya çıkmış, üretim ve tüketim alanlarında çalışan farklı kooperatifler ve sendikalarla yapılan fikir alışverişleriyle gelişmiş.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Tüketim Kooperatifi Girişimi, çalışma ilkelerini şöyle belirliyor:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed ml-4">
              <li>Doğrudan küçük üreticiyle çalışmak,</li>
              <li>Üretim ve tüketim üzerinde karşılıklı insiyatif</li>
              <li>Kolektif çalışma ve paylaşım</li>
              <li>Ekolojik toplumsal ilişkiler</li>
              <li>Toplumsal dayanışma</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
              Nasıl Çalışıyor?
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Tüketim Kooperatifi Girişimi'nde gönüllülük esasına göre çalışılıyor. Kadıköy Tüketim Kooperatifi Girişimi her hafta düzenli olarak toplanıyor ve organizasyonel çalışmasını yapıyor. Ayrıca, çeşitli periyotlarda kooperatifleşme sürecinin tartışıldığı genel toplantılar ve kooperatif fikriyle bağlantılı olarak kamusal toplantılar da düzenliyor.
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
              Girişime Nasıl Katılabilirsiniz?
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kadıköy Tüketim Kooperatifi Girişimi'nin kuruluş sürecine katılmak için farklı yollar izlenebiliyor.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Kurucu Üye:</strong> Kooperatifleşme sürecinde yapılan çalışmalara aktif olarak katılarak kooperatifin kurucu üyesi olmak mümkün. Bunun için her hafta yapılan toplantılara katılmak koşulu var.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Kooperatif Dostu:</strong> Kooperatifleşme sürecinde yapılan çalışmalara aktif olarak katılmasa da çalışmaları takip edebilir, alışveriş paketi siparişlerine katılabilir, aktif kooperatifin parçası olabilir.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Girişimin e-posta adresi: kdkkoop@gmail.com
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Girişime aynı zamanda Twitter ve Facebook'tan ulaşmak da mümkün.
            </p>
          </div>

          {/* Back and Scroll to Top Buttons */}
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
              href="/yayinlar/medyada-cikanlar" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors no-underline cursor-pointer"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </Link>
          </div>

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
        </main>
      </div>
    </div>
  );
}


