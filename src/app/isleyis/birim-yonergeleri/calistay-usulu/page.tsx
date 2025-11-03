"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import { useState, useEffect } from "react";

export default function CalistayUsulu() {
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
          <span className="text-gray-900 dark:text-white font-medium">Çalıştay Usulü Hakkında Yönerge</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Çalıştay Usulü Hakkında Yönerge
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            03.12.2018
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 space-y-6 break-words overflow-x-hidden">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Bu metin, Kadıköy Kooperatifi fikri ortaya çıktığından beri süregelen deneyimlerle oluşturulan çalıştay usulünü özetlemek amacıyla hazırlanmıştır. Çalıştay usulü hem toplantıların verimli geçmesini hem herkesin sözünü söyleyebilmesini hem de alınan kararlarda mutabakatı sağlayabilmek amacıyla oluşturulmuştur. Buna göre çalıştay gündemlerinin nasıl belirlendiği, çalıştay seyrinin nasıl düzenlendiği, gündemlerin nasıl karara bağlandığı ve çalıştay tutanağının nasıl hazırlanıp mutfakla paylaşıldığına dair teamüllerimiz aşağıdaki yönergede açıklanmıştır.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                1- GÜNDEMLERİN BELİRLENMESİ
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Kooperatifte bir konunun çalıştay gündemi olarak öne çıkması birkaç şekilde olabilir. Bunlardan biri Toplantı Usulü Yönergesi'nin Kararların Oluşturulması başlığında belirtildiği biçimde mutfak toplantılarında iki toplantı üst üste tartışılıp karara bağlanamayan konulardır. Bir diğeri yine mutfak toplantılarına gündem olarak önerilen ve/veya konuşulan ancak bir toplantı süresinde tartışılamayacak kadar ayrıntılı olduğu kabul gören konulardır. Mutfak toplantısının kolaylaştırıcısı ve yazmanı çalıştay gündemi haline gelen konuları toplantı tutanağına not düşer. Üçüncü olarak çalışma birimleri, birimlerin işleyişleri için veya birimin çalışma alanı ile kooperatifi ilgilendiren ve mutfak toplantısında karara bağlanamayacak kadar ayrıntılı konularda e-posta grubuna çalıştay gündemi önerebilir. Son olarak kişiler kooperatifin işleyişinde ayrıntılı konuşulması ve üzerinde anlaşılması gerektiğini düşündükleri konuları çalıştay gündemi olarak e-posta grubunda önerebilir. Son iki örnekteki gibi e-posta grubuna gelen birim ve kişi önerileriyle birlikte koordinasyon birimi iş takip yazılımı Trello'daki ilgili kısma çalıştay gündem önerilerini sıraya dizer.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Çalıştay gündemleri kooperatif işleyişi içinde ayrıntı sayılabilecek, çeşitli vakalardan türeyen içerikte olabilir. Ancak çalıştayların kooperatif genel işleyişine yönelik veya bu işleyişi tamamlayacak şekilde tartışma gerektiren konulardan oluşması beklenir. Bu nedenle gündem önerileri, özgünlükleri de göz önünde bulundurarak, koordinasyon birimi tarafından kooperatifin ilkeleri, modeli ve işleyişi içerisinde ele alınacak şekilde genel bir gündem başlığı haline getirilir. Gündemler, önerilme sırasıyla ele alınır. Gündem sıralamasının değiştirilmesi veya bir gündem önerisinin çalıştay konuları içinden çıkarılması için, birey hukukunu korumak amacıyla koordinasyon birimi öncelikle gündemi öneren kişi veya çalışma biriminin, sonrasında da mutfağın onayını alır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Koordinasyon birimi çalıştay hazırlık grubunun belirlenmesini mutfak toplantısına gündem olarak taşır. Çalıştay içeriğinin, gündem önerileri çerçevesinde ve sırasında geliştirilmesi, ayrıntılandırılması ve çalıştayda kolaylaştırıcılık-yazmanlık yapılması için her çalıştayda ayrı bir hazırlık grubuna mutfak üyelerinin gönüllü olması beklenir. Gönüllü olan hazırlık grubu, çalıştay içeriği belirli bir doygunluğa ulaştığında zaman planlamasıyla birlikte mutfakla paylaşır. İçeriği gelen öneriler üzerine güncelleyip, bu içeriğe çalıştay öncesinde son halini verip mutfakla paylaşır. Çalıştay hazırlık grubu kooperatif üyelerinin konuları verimli tartışacağı ve karara bağlayabileceği bir planlamasıyla gündem içeriğini hazırlar.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Çalıştaydan önce gerekliyse, çalıştay hazırlık grubu veya bir başka çalışma grubu karara varmayı kolaylaştıracak hazırlıkları yapıp sonuçlarını toplantı öncesinde mutfağa e-posta yoluyla sunar.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Karara bağlanamayan veya çalıştay süresinin tartışmaya yetmediği gündemler -gündemi öneren kişi veya çalışma biriminin, sonrasında da mutfağın onayıyla- aksi kabul görmediği sürece, bir sonraki çalıştayda (veya kabul görürse 3. Perşembe toplantısında) tartışılmak üzere gündem sırasındaki yerini korur.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Koordinasyon birimi her karara bağlanan çalıştay gündemini arşivler. Çalıştayda alınan her kararın uygulaması koordinasyon birimi tarafından takip edilir. Uygulamaya geçilmeyen kararlar koordinasyon birimi tarafından hatırlatılır. Koordinasyon birimi sıradaki çalıştay gündemlerini çalıştay tarihinden önce mutfağa hatırlatır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                2- ÇALIŞTAY DÜZENİNİN OLUŞTURULMASI
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Çalıştaylar iki ayda bir, istisnai durumlar haricinde ayın son pazar günü gerçekleştirilir. Yine istisnai durumlar haricinde çalıştaylar 11:00'da başlayıp 15:00'da biter. Genel olarak aynı haftasonu kooperatifin, tarihinin değiştirilmesi pek mümkün olmayan başka bir etkinliğinin olmamasına dikkat edilir. Çalıştaylar mutfak toplantılarından en az bir oturum daha fazla olduğu için ara verilecek şekilde zaman planlaması yapılır.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Çalıştaylarda her oturum için farklı bir kolaylaştırıcı ve -en az bir- yazman grubu rotasyonla görev alır. Çalıştay hazırlık grubu yeterli sayıda ise kendi içinde bu sorumluluk dağılımını yapar. Çalıştay hazırlık grubunun, içeriği hazırlayan kişilerden oluşması ve konuya hakim olmaları nedeniyle oturumların kolaylaştırıcıları olmaları tercih edilir. Grup yeterli sayıda değilse kooperatif üyelerinden çalıştay oturumları için bu sorumluluklarda destek alır. Yazmanlığın çoğunlukla erkekler, kolaylaştırıcılığın da çoğunlukla kadınlar tarafından yapılmasına özen gösterilir. Toplantı Usulü Yönergesi'nin Toplantı Düzeninin Oluşturulması ve İletişim Üslubu başlıklarında belirtilen kolaylaştırıcılık, yazmanlık ve tartışma biçimi, çalıştay oturumlarında da geçerlidir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                3- KARARLARIN OLUŞTURULMASI
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Oturum kolaylaştırıcıları gündemin neticelenmesi için tartışmada dile getirilenleri tasnif ederek çalıştay katılımcılarına sunar. Kolaylaştırıcı veya çalıştay katılımcıları gündemin karara bağlanmasında birkaç seçenek sunabilir.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bunlardan biri alınan kararı göz önünde bulundurarak, kararı uygulanabilir biçime kavuşturmak üzere ayrıntılandıracak bir çalışma grubunun kurulmasını önermek olabilir. Kabul gördüğü takdirde kolaylaştırıcı çalışma grubu için gönüllülerin isimlerini ve çalışma grubunun sunum için tahmini son tarihini alarak kararlara işler.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Bir diğeri kooperatifin ilgili konu başlığındaki işleyiş teamülünde bir güncellemenin karara bağlanması olabilir. Kolaylaştırıcı bu teamülün bir çalışma biriminin görev tanımı içine mi girdiğini, çalışma birimi için yeni bir işleyiş mi olacağını, öyleyse birimin bu yeni işleyişin nasıl uygulamaya geçeceğinin detaylarının netleştirilmesi için ilgili birime konunun takibinin devredildiğini kararlara işler. Eğer işleyişe yönelik bir güncelleme eğilimi herhangi bir birime devredilemeyecek kapsamda ise kooperatif modeline, ilgili mevcut yönergelere veya yeni yazılacak yönergeye aktarılmak üzere çalıştay kararlarına işlenebilir. Bu kararın hangi kooperatif sorumlulukları çerçevesinde uygulanacağı (mevcut çalışma birimi/birimleri, çalışma grubu/grupları ve/veya kişilerin sorumluluk alması da dahil olmak üzere) ve ne zaman işlerliğe gireceği kolaylaştırıcı tarafından netleştirilerek kararlara işlenir. Çalıştay kararlarına itiraz olduğunda konu, sıradaki birikmiş çalıştay gündem önerilerinin peşi sıra gündeme alınır. Bir sonrakinde aksi yönde karar alınana kadar çalıştay kararları nihaidir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                4- ÇALIŞTAY NOTLARININ OLUŞTURULMASI
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Çalıştay oturumlarının kolaylaştırıcı ve yazmanları, çalıştay notlarında alınan söz ve kararları özetleyerek, sözlerin sahibi kişi isimlerini yazmadan not ederler. Bu notlar -ayrı tutulduysa birleştirilip- gözden geçirildikten sonra çalıştay hazırlık grubundan bir kişi tarafından gruba e-posta aracılığıyla atılır. Toplantı notları hem e-posta kutusuna metin olarak yapıştırılır hem de .doc ve .pdf eklentili belgelerle ekte gönderilir. Notlar hem mutfak (kadikoy_koop_mutfak@googlegroups.com) hem arşiv (kdkkoop.belge@gmail.com) e-posta adreslerine gönderilmelidir. Çalıştay notlarının mutfakla en fazla bir hafta içerisinde paylaşılması beklenir.
              </p>
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

