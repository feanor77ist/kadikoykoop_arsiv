"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function GidaUrunUreticiBirimi() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-hidden">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8 break-words flex-wrap">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/isleyis" className="hover:text-blue-600 dark:hover:text-blue-400">İşleyiş</Link>
          <span>/</span>
          <Link href="/isleyis/birim-yonergeleri" className="hover:text-blue-600 dark:hover:text-blue-400">Birim Yönergeleri</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Gıda Ürün Üretici Birimi İşleyiş Yönergesi</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Gıda Ürün Üretici Birimi İşleyiş Yönergesi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            05.04.2022
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Birimin Yapısı:
            </h2>
            <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Birim, kooperatif gönüllülerinden oluşur ve birime en az 6 ayda bir rotasyon ile katılım ve çıkışlar olur.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Birimin sağlıklı işleyebilmesi için en az 3, ideal olarak 4 gönüllü gerekmektedir. Rotasyon sırasında yeni katılımcılara işleyişin aktarılabilmesi için en az 2 kişinin, 2 ay boyunca birimde yer almaya devam etmesi gerekir.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Birim görevleri, gönüllüler arasında dönüşümlü olarak da gerçekleştirilebilir. Bu durumda Birim Görevleri altındaki alt başlıklar, iş bölümünü kolaylaştırmaya yardımcı olur.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Birim içi iletişim, whatsapp grubu, e-posta ya da düzenli yaptığı toplantılar yoluyla kurulur.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Birimin beyni İş Takip dosyasıdır (Ürün Üretici - İş Takip 1 - 05-03-2021.xlsx). Bu dosya, üretici portföyünün ve üreticilerle ilgili yürütülen tüm eylemlerin güncel olarak izlenebildiği dosyadır. Bu dosyanın güncel tutulması, birimdeki gönüllüler değişse dahi, sürecin hızla devam ettirilebilmesine yardimcı olur.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Gönüllü, birimden ayrılmadan önce gerekli aktarımı İş Takip dosyasına ve birimdeki gönüllülere yapar.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
              Birimin Görevleri:
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="font-semibold">1)</strong> Dayanışmaya girilecek üretici sayısını ve dükkanda bulunan ürün çeşidini (hayvansal ürünleri önceliklendirmeyecek şekilde, Mutfak ile eşgüdüm içinde) arttırır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="font-semibold">2)</strong> Kooperatife (gönüllüler, kooperatif veya birim e-posta adresi, sosyal medya kanalları vs. yollarla) ulaşan üreticiler ile iletişim kurulur. Bu sebeple birim, e-posta adresini düzenli kontrol etmekle yükümlüdür.
              </p>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">3) Üreticilerle İletişim</strong>
                </p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üreticinin, öncelikle uygun koşulları sağladığından emin olunur (etiket, aracısızlık, ödeme vadesi, vb.). Ardından üretici ile form süreci başlatılır (bkz B.).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üreticiler ile iletişim, birim gönüllülerinin kendi telefonları ve gida@kadikoykoop.org adresi kullanılarak sağlanır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üretici ile e-posta iletişimini kolaylaştıran bazı şablonlar bulunmaktadır. Bunlara, e-posta yazma kutusundaki üç nokta'dan ulaşılabilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>İletişimin sağlıklı yürümesi için bir üretici ile hep ayni gönüllü görüşür. Gönüllüler birimden ayrılmadan önce, takip ettikleri ürün/üreticiler ile ilgili İş Takip dosyasının güncel tutulduğundan emin olmalıdır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Çeşitli sebeplerle (yasal, bürokratik engeller, hammadde sorunu vb.) artık çalışılamayan üreticiler, daha sonra tekrar iletişim kurulmak üzere beklemeye alınabilir. Üreticinin kendi öznel şartlarına göre, bir daha ne zaman iletişime geçileceği ve takibinin kim tarafından yapılacağı belirlenir.</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">4) Form Süreci</strong>
                </p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üreticiye, Üretici Ön Bilgi Formu (üretici_ön_bilgi_formu.docx) ve ürettiği ürüne uygun boş bilgi formları gönderilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>(<a href="https://drive.google.com/drive/folders/1RmkU0xFxsV8TN35dPEQldkTQ3N9OPKME" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://drive.google.com/drive/folders/1RmkU0xFxsV8TN35dPEQldkTQ3N9OPKME</a>)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Form talebinin 1 ay içinde karşılanmaması halinde üretici ile tekrar iletişime geçilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üreticilerin form talebini karşılayamadığı hallerde, gönüllü, üreticiden telefonda bilgi alarak, formları kendisi doldurabilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üreticiden gerekli bilgilerin hiçbir şekilde alınamaması durumunda, İş Takip dosyasına iletişimin kurulamadığı belirtilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üreticilerden gelen formlar, üreticinin adıyla bir klasör açılarak Değerlendirme Aşamasındaki Üreticiler klasörüne aktarılır (<a href="https://drive.google.com/drive/folders/1i5oU8gbI9E6aA4sD0Vys3iOe6t6kGZnA" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://drive.google.com/drive/folders/1i5oU8gbI9E6aA4sD0Vys3iOe6t6kGZnA</a>). Ayni üretici için farklı isimler kullanılmasını önlemek adına, klasör ismi şu şekilde oluşturulur:</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Marka adı varsa, MARKA ADI - ÜRÜN olarak isimlendirilir. Marka adı olmaması durumunda, ÜRETİCİ ADI SOYADI - ÜRÜN olarak isimlendirilir. (örnek: OTAMA - KOZMETIK; ALEV CAGLAR - AVOKADO).</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">5) Ürün / Üretici Değerlendirme Süreci</strong>
                </p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Form değerlendirmeleri birim içi konsensus ile yapılır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Form incelemesi sonrası, cevaplarla ilgili sorulması gereken başka sorular varsa (eksik kalan, kuşku uyandıran cevaplar vb.), üretici ile tekrar iletişime geçilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Kooperatif ilkelerine uygun üretim yapmayan üreticiye, çalışamama nedenlerimiz e-posta ya da telefon yoluyla bildirilir. Bu üreticilerin dosyaları arşivde bulunan İptal Üreticiler klasöründe dosyalanır. (<a href="https://drive.google.com/drive/folders/1aN4k65swzh-ThxGiDCAq1-J-QhAEdvF7?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://drive.google.com/drive/folders/1aN4k65swzh-ThxGiDCAq1-J-QhAEdvF7?usp=sharing</a>)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üretici yasal işletme kaydına sahip olmadığı için etiket basamıyorsa, ilgili mevzuat ve yöntem konusunda bilgilendirilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üreticinin işletme kaydı alamadığı bazı istisnai durumlarda kooperatif, ürününe etiket basılması için inisiyatif alabilir. Bu üreticiler aşağıdaki gibidir:</span>
                  </li>
                  <li className="flex items-start ml-8">
                    <span className="mr-2">-</span>
                    <span>kadın üreticiler,</span>
                  </li>
                  <li className="flex items-start ml-8">
                    <span className="mr-2">-</span>
                    <span>örgütlü üretim yapanlar (kooperatifler, dernekler, sendikalar, vakıflar, inisiyatifler, kolektifler vb.),</span>
                  </li>
                  <li className="flex items-start ml-8">
                    <span className="mr-2">-</span>
                    <span>Kadıköy Koop. gibi örgütlü tüketici grupları ile dayanışma gösterenler,</span>
                  </li>
                  <li className="flex items-start ml-8">
                    <span className="mr-2">-</span>
                    <span>dezavantajlı gruplar (KHK, LGBTİ+, güvencesizler, göçmenler, direnişteki gruplar vb.),</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Bunun dışındaki üreticiler değerlendirme kapsamı dışındadır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Yukarıda sıralanan gruplardan dayanışma amacıyla gönüllülerimiz ve dostları ile birlikte alım yapabiliriz. Bunun için de mutfağa önerilerek kararlaştırılan bu üreticiler arşivde Aktif Üreticiler klasöründe, Dayanışma Alımı Yaptığımız Üreticiler dosyasında arşivlenir. (<a href="https://drive.google.com/drive/folders/1xvL0xpVocxXmdqrRYtPYMGi5WxH-V1LU?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://drive.google.com/drive/folders/1xvL0xpVocxXmdqrRYtPYMGi5WxH-V1LU?usp=sharing</a>)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Form sürecini tamamlayan üreticiden, ürünü Mutfak'ın onayına sunmadan önce, numune istenir. Gönüllüler temin edilen numuneyi denedikten sonra görüşlerini bildirirler.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Numune sürecinden sonra, birim ilk Mutfak toplantısında, üretici, ürünü ve ürünle ilgili bilgilendirmeyi yapar. Ayni zamanda ürün fiyatı, lojistik gibi hususları Mutfak'ın onayına sunar. Mutfak'ın onaylaması halinde, ürün/üretici sorumlusu belirlenir. Birim, bu kişiye üretici ile ilgili bilgileri aktardıktan sonra, üretici ile iletişim ve sipariş süreçleri gönüllü tarafından yürütülür.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Ürün/üretici sorumlusu, ilk sipariş miktarını Mutfak'la belirler. Bu noktadan sonra Birim'in üretici ile ilgili (üretim şartları değişmedikçe) sorumluluğu kalmaz.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Süreci tamamlanan üreticinin bilgileri, Aktif Üreticiler klasörüne alınır. (<a href="https://drive.google.com/drive/folders/1mO9iqAPeHvO0UhiHaMHxQpzdkFi0l3Xl?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://drive.google.com/drive/folders/1mO9iqAPeHvO0UhiHaMHxQpzdkFi0l3Xl?usp=sharing</a>)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Aktif üreticiler üretim şartlarının değişmesi yahut sair sebeplerle pasif konuma gelebilir. Bu durumda üretici bilgi ve ürün formları, takip kolaylığı için ilgili klasörlere aktarılmalıdır.</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">6) Birim İçi İletişim</strong>
                </p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Birim, ideal olarak haftada 1, aksi halde 2 haftada bir toplanır. Toplanamadığı durumlarda ve gerekli görüldüğü takdirde, görevlerle ilgili işleyiş hakkındaki bilgilendirmeleri, diğer iletişim kanallarını kullanarak yapabilir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Toplantı sonunda oluşturulan toplantı notları, birimin kullandığı e-posta adresi (gida@kadikoykoop.org) ya da gönüllülerin kendi adresi ile mutfak grubuna (kadikoy_koop_mutfak@googlegroups.com) e-posta atılır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Toplantı notları dosyaları YIL- AY- GÜN olarak isimlendirilir. Örnek: 20190129. Drive'da Birim klasörü içindeki Toplantı Notları klasöründe arşivlenir (<a href="https://drive.google.com/drive/folders/1FgZArxx0FbY0VrjcWoDTHgahAgcJqsGi" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://drive.google.com/drive/folders/1FgZArxx0FbY0VrjcWoDTHgahAgcJqsGi</a>).</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">7) Birim Belleği (Drive)</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  Birim belleği, drive'dadır. Üretici klasörünün yapısı aşağıdaki gibidir:
                </p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-8">
                  <li className="flex items-start">
                    <span className="mr-2"><strong>1_Aktif Üreticiler:</strong></span>
                  </li>
                  <li className="flex items-start ml-4">
                    <span className="mr-2">-</span>
                    <span>Form sürecini tamamlamış ve ürün alınan üretici</span>
                  </li>
                  <li className="flex items-start ml-4">
                    <span className="mr-2">-</span>
                    <span>Beklemeye Alınan Üreticiler: ürün temini geçici olarak durdurulan üretici</span>
                  </li>
                  <li className="flex items-start ml-4">
                    <span className="mr-2">-</span>
                    <span>Dayanışma Alımı Yaptığımız Üreticiler</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2"><strong>2_Değerlendirme Aşamasındakı Üreticiler:</strong> Form sürecindeki üretici</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2"><strong>3_İptal Üreticiler:</strong></span>
                  </li>
                  <li className="flex items-start ml-4">
                    <span className="mr-2">-</span>
                    <span>Aktif İptal: Koşullarının değişmesi sebebiyle iptal konumuna gelen üretici</span>
                  </li>
                  <li className="flex items-start ml-4">
                    <span className="mr-2">-</span>
                    <span>İptal Aktif: Mevcut durumda şartları sağlamayan ancak sağlaması halinde ürün alınabilecek üretici</span>
                  </li>
                  <li className="flex items-start ml-4">
                    <span className="mr-2">-</span>
                    <span>İptal İptal: Kooperatif ilkelerine katiyen uygun olmayan üretici</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Ürün ve Üretici listesinde (<a href="https://docs.google.com/spreadsheets/d/1oovZGWAkFLFMBuI7lPeyci5Qi31dkNOhEf2kiLeim0g/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://docs.google.com/spreadsheets/d/1oovZGWAkFLFMBuI7lPeyci5Qi31dkNOhEf2kiLeim0g/edit?usp=sharing</a>) iletişim ve ürün bilgileri tutulur.</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong className="font-semibold">8) Mutfakla İlişkiler</strong>
                </p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ml-4">
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Birim, gönüllülerin üretici ziyaretlerinde bulunmaların için kolaylaştırıcılık sağlar. Gerçekleştirilen ziyaretlere dair izlenimler Üretici Ziyaret Formu'nda (ÜRETİCİ_ZİYARET_FORMU.xlsx) ziyaretçiler tarafından doldurulur ve Birim tarafından klasörlenir (<a href="https://drive.google.com/drive/folders/1LLtjOjkXLgkPMyr7osGtPPQCVcDedHsB" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://drive.google.com/drive/folders/1LLtjOjkXLgkPMyr7osGtPPQCVcDedHsB</a>).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Birimin, ürün ve üreticiler ile ilgili kararsız kaldığı konularda, mutfağa gündem önererek bu konuların kooperatif gönüllüleri ile birlikte konuşulmasını ve konsensus ile bir karara bağlanmasını sağlar.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Birim, ürün sorumlusunun, sorumlusu olduğu ürünle ilgili süreci bittikten sonra, bir sonraki ürün sorumlusuna aktarmak amacıyla, üretici ile ilgili deneyimlerini ÜRETİCİ AKTARIM FORMLARI'na doldurmasını hatırlatmalıdır (BOŞ FORM Ürün Üretici Sorumluluğu Bilgi ve Aktarım Formu).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Birim, her rotasyon döneminde, yeni ürün sorumlusunun, sorumlusu olduğu ürünün bilgi formlarının güncelleştirmesini hatırlatmalıdır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>Üretici, ürün sorumlusuna, yeni bir ürünü ile ilgili bilgi vermek istemesi halinde, ürün sorumlusu konuyu doğrudan Gıda Birimi'ne iletmelidir. Söz konusu yeni ürünün tüm süreci Birim tarafından yönetilmelidir.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
            href="/isleyis/birim-yonergeleri" 
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
  );
}

