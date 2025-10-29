import Link from "next/link";
import Navigation from "../../../components/Navigation";

export default function TurkiyeMevzuatiPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kooperatifcilik" className="hover:text-blue-600 dark:hover:text-blue-400">Neden ve Nasıl Kooperatifçilik?</Link>
          <span>/</span>
          <Link href="/kooperatifcilik/mevzuat" className="hover:text-blue-600 dark:hover:text-blue-400">Mevzuat</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Türkiye Kooperatifçilik Mevzuatı</span>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Türkiye Kooperatifçilik Mevzuatı
          </h1>

          {/* TÜRKİYE'DE KOOPERATİFÇİLİK MEVZUATININ TARİHÇESİ */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              Türkiye'de Kooperatifçilik Mevzuatının Tarihçesi
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Türkiye'de kooperatifçilik alanında ilk düzenleme, Cumhuriyet'in ilanından kısa bir süre sonra, 1924 yılında 442 sayılı Köy Kanunu ile gerçekleştirilmiştir. Bu kanunla köylerin muhtaç oldukları iktisadi ihtiyaçları karşılamak üzere köy kooperatifleri kurulması öngörülmüştür.
              </p>
              <p>
                1929 yılında kabul edilen 1470 sayılı Esnaf ve Ahali Bankaları Kanunu ile kooperatifler bankacılık sistemi içinde ele alınmış ve kredi kooperatifleri düzenlenmiştir.
              </p>
              <p>
                1935 yılında 2834 sayılı Kanunla Tarım Kredi Kooperatifleri, 1936 yılında 3018 sayılı Kanunla Yapı Kooperatifleri ve 1938 yılında 3476 sayılı Kanunla Tüketim ve Satış Kooperatifleri ayrı ayrı düzenlenmiştir.
              </p>
              <p>
                1960 yılında 7408 sayılı Kooperatifler Kanunu kabul edilmiş, ancak bu kanun uygulamada sorunlar yaratmıştır.
              </p>
              <p>
                <strong>1969 yılında kabul edilen 1163 sayılı Kooperatifler Kanunu</strong>, Türkiye'de kooperatifçiliğin modern anlamda düzenlenmesini sağlayan temel kanun olmuştur. Bu kanun, kooperatiflerin kuruluşu, işleyişi, denetimi ve tasfiyesi gibi konuları kapsamlı bir şekilde düzenlemiştir. 1163 sayılı Kanun, günümüzde halen yürürlükte olan temel kanundur.
              </p>
              <p>
                6102 sayılı Türk Ticaret Kanunu'nun 2012 yılında yürürlüğe girmesiyle birlikte, kooperatifler hakkında da önemli değişiklikler yapılmıştır. Yeni TTK, kooperatiflerin ticaret şirketlerine benzer şekilde düzenlenmesini öngörmüştür ve 1163 sayılı Kanunda hüküm bulunmayan hallerde TTK'nın anonim şirketlere ilişkin hükümleri uygulanmaktadır.
              </p>
            </div>
          </div>

          {/* 1163 SAYILI KOOPERATİFLER KANUNU */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              1163 Sayılı Kooperatifler Kanunu
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6">
                <p className="font-semibold mb-2">Kabul Tarihi: 24.04.1969</p>
                <p className="font-semibold mb-4">Yayım Tarihi: 10.05.1969 - Resmi Gazete Sayı: 13195</p>
                <p className="leading-relaxed">
                  1163 sayılı Kooperatifler Kanunu, Türkiye'de tüm kooperatiflerin kuruluş, işleyiş, denetim ve tasfiye işlemlerini düzenleyen ana kanundur. Kanun, değişir ortaklı ve değişir sermayeli kooperatif yapısını, ortaklık şartlarını, organların görev ve yetkilerini, denetim sistemini ve kooperatiflerin birlik kurma esaslarını belirler.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4">Kanunun Temel İlkeleri</h3>
              <ul className="space-y-3 ml-6 list-disc">
                <li><strong>Değişir Ortaklı Yapı:</strong> Kooperatiflerde ortak sayısı sabit değildir, ortaklığa giriş-çıkış serbesttir</li>
                <li><strong>Değişir Sermaye:</strong> Sermaye miktarı ortakların taahhüt ettikleri paylar toplamı kadardır ve değişkendir</li>
                <li><strong>Sınırlı Sorumluluk:</strong> Ortaklar sadece taahhüt ettikleri pay tutarı kadar sorumludur</li>
                <li><strong>Demokratik Yönetim:</strong> Her ortağın bir oy hakkı vardır (sermaye büyüklüğüne bakılmaksızın)</li>
                <li><strong>Ortaklarla İşlem:</strong> Kooperatif öncelikle ortaklarının ihtiyaçlarını karşılar</li>
                <li><strong>Kâr Amacı Gütmeme:</strong> Kooperatifler kâr amacı gütmez, ortaklarına maliyet fiyatıyla hizmet sunar</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4">Kooperatif Türleri</h3>
              <p className="mb-3">1163 sayılı Kanuna göre Türkiye'de faaliyet gösteren başlıca kooperatif türleri:</p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Tüketim Kooperatifleri</li>
                <li>Yapı Kooperatifleri</li>
                <li>Kredi Kooperatifleri</li>
                <li>Taşımacılık Kooperatifleri</li>
                <li>Sulama Kooperatifleri</li>
                <li>Elektrik Kooperatifleri</li>
                <li>Üretim ve İşletme Kooperatifleri</li>
                <li>Tarım Satış Kooperatifleri</li>
              </ul>
            </div>
          </div>

          {/* 6102 SAYILI TTK */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              6102 Sayılı Türk Ticaret Kanunu
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6">
                <p className="font-semibold mb-2">Kabul Tarihi: 13.01.2011</p>
                <p className="font-semibold mb-4">Yürürlük Tarihi: 01.07.2012</p>
                <p className="leading-relaxed">
                  6102 sayılı Türk Ticaret Kanunu, kooperatifler hakkında 1163 sayılı Kanunda hüküm bulunmayan hallerde uygulanır. Özellikle defter tutma, finansal raporlama, denetim, şirket birleşme ve bölünmeleri gibi konularda TTK'nın anonim şirketlere ilişkin hükümleri kooperatiflere de uygulanmaktadır.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-4">Kooperatifleri İlgilendiren TTK Hükümleri</h3>
              <ul className="space-y-3 ml-6">
                <li>
                  <strong>Ticari Defterler (Madde 64-82):</strong> Kooperatifler yevmiye defteri, defteri kebir, envanter defteri, pay defteri, yönetim kurulu ve genel kurul karar defterlerini tutmak zorundadır
                </li>
                <li>
                  <strong>Finansal Tablolar:</strong> Kooperatifler yıllık finansal tablolarını TTK hükümlerine göre hazırlamak zorundadır
                </li>
                <li>
                  <strong>Bağımsız Denetim:</strong> Belirli büyüklükteki kooperatifler bağımsız denetime tabidir
                </li>
                <li>
                  <strong>Elektronik Genel Kurul:</strong> Kooperatifler elektronik ortamda genel kurul yapabilir
                </li>
                <li>
                  <strong>Birleşme ve Bölünme:</strong> Kooperatifler TTK'nın birleşme ve bölünme hükümlerine göre işlem yapabilir
                </li>
              </ul>
            </div>
          </div>

          {/* ÖZEL KANUNLAR */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              Özel Kanunlar
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1581 Sayılı Tarım Kredi Kooperatifleri ve Birlikleri Kanunu</h3>
                <div className="bg-green-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="font-semibold mb-2">Kabul Tarihi: 13.06.1972</p>
                  <p className="leading-relaxed">
                    Tarım kredi kooperatiflerinin kuruluş ve işleyişini düzenleyen özel kanundur. Bu kooperatifler, çiftçilere kredi sağlamak, tarımsal girdileri temin etmek ve tarım ürünlerini pazarlamak amacıyla kurulur. 1163 sayılı Kanunun genel hükümlerine ek olarak, tarım sektörüne özgü özel düzenlemeler içerir.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4572 Sayılı Tarım Satış Kooperatifleri ve Birlikleri Kanunu</h3>
                <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="font-semibold mb-2">Kabul Tarihi: 18.06.2000</p>
                  <p className="leading-relaxed">
                    Tarım ürünlerinin satışını yapan kooperatiflerin örgütlenmesini düzenleyen kanundur. Tarımsal ürünlerin pazarlanması, işlenmesi, depolanması ve değerlendirilmesi konusunda özel hükümler içerir. Üreticilerin ürünlerini daha iyi fiyatlarla satabilmeleri ve pazarlama gücünü artırmaları amaçlanır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* VERGİ MEVZUATI */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              Vergi Mevzuatı
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5520 Sayılı Kurumlar Vergisi Kanunu</h3>
                <div className="bg-yellow-50 dark:bg-gray-700 rounded-lg p-6 mb-4">
                  <p className="font-semibold mb-2">Yürürlük Tarihi: 01.01.2006</p>
                  <p className="leading-relaxed mb-3">
                    Kooperatifler kurumlar vergisi mükellefidir. Ancak, kooperatiflerin ortaklarıyla yaptıkları işlemlerden elde ettikleri kazançlar özel düzenlemelere tabidir.
                  </p>
                </div>

                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Madde 4/1-m: Kooperatiflerde İstisna</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Kooperatiflerin ortaklarına; ortaklık aidatları veya ortakları ile yaptıkları işlemlerden elde ettikleri kazançları, kooperatiflik ilkelerine uygun olarak ortaklarına dağıtmaları veya ortaklar ile olan işlemlerinde bu kazançları göz önünde tutarak uyguladıkları fiyat farklarının ortaklar lehine düzeltilmesi suretiyle iade etmeleri koşuluyla, kurumlar vergisinden istisnadır.
                </p>
                <div className="bg-red-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Önemli Not:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Bu istisna, yalnızca ortaklarla yapılan işlemlerden elde edilen kazançlar için geçerlidir. Ortak olmayan kişilerle yapılan işlemlerden elde edilen kazançlar kurumlar vergisine tabidir.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">3065 Sayılı Katma Değer Vergisi Kanunu</h3>
                <div className="bg-indigo-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="leading-relaxed mb-3">
                    Kooperatiflerin ortaklarına yaptığı mal ve hizmet teslimleri KDV'ye tabidir. Kooperatifler, yaptıkları işlemler üzerinden KDV hesaplamak ve beyan etmek zorundadır.
                  </p>
                  <p className="leading-relaxed">
                    Ancak, bazı tarımsal ürünler ve hizmetler için KDV istisnası uygulanabilir. Ayrıca, kooperatiflerin ortaklarından aldığı aidatlar KDV'ye tabi değildir.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 mt-6">193 Sayılı Gelir Vergisi Kanunu</h3>
                <div className="bg-pink-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="leading-relaxed mb-3">
                    Kooperatiflerin çalışanlarına ödediği ücretler gelir vergisi stopajına tabidir. Kooperatif, ücret ödemesi yaptığında, ilgili vergi dilimlerine göre stopaj yaparak vergi dairesine ödemekle yükümlüdür.
                  </p>
                  <p className="leading-relaxed">
                    Ayrıca, kooperatif ortaklarına dağıtılan kâr payları da gelir vergisi kapsamındadır ve değer artış kazancı olarak vergilendirilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SON DEĞİŞİKLİKLER */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
              Son Yasal Değişiklikler (2018 ve Sonrası)
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7153 Sayılı Kanun ile Yapılan Değişiklikler (2018)</h3>
                <div className="bg-red-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="font-semibold mb-4">Kabul Tarihi: 14.03.2018</p>
                  <p className="leading-relaxed mb-4">
                    7153 sayılı "Kooperatifler Kanunu ile Bazı Kanun ve Kanun Hükmünde Kararnamelerde Değişiklik Yapılmasına Dair Kanun" ile 1163 sayılı Kooperatifler Kanununda önemli değişiklikler yapılmıştır:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Kooperatiflerin denetim sisteminde köklü değişiklikler yapılmıştır</li>
                    <li>Gümrük ve Ticaret Bakanlığı'nın (şimdiki adıyla Ticaret Bakanlığı) denetim yetkileri genişletilmiştir</li>
                    <li>Kooperatif üst kuruluşlarının yapısı ve görevleri yeniden düzenlenmiştir</li>
                    <li>Bağımsız denetim kuruluşlarının kooperatifleri denetlemesi sistemi getirilmiştir</li>
                    <li>Cezai yaptırımlar güncellenmiş ve arttırılmıştır</li>
                    <li>Kooperatiflerin finansal raporlama yükümlülükleri detaylandırılmıştır</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Dijital Dönüşüm ve Yeni Düzenlemeler</h3>
                <div className="bg-cyan-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="leading-relaxed mb-4">
                    2020 sonrası dönemde, COVID-19 pandemisinin de etkisiyle, kooperatiflerin dijital dönüşümü hızlandırılmıştır:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li><strong>Elektronik Genel Kurul:</strong> Kooperatifler, ortaklarının fiziksel olarak bir araya gelmesine gerek kalmadan, elektronik ortamda genel kurul yapabilmektedir</li>
                    <li><strong>Dijital İmza Kullanımı:</strong> Kooperatif işlemlerinde dijital imza kullanımı yaygınlaşmıştır</li>
                    <li><strong>E-Devlet Entegrasyonu:</strong> Kooperatiflerin kuruluş ve tescil işlemleri elektronik ortamda yapılabilmektedir</li>
                    <li><strong>Online İşlemler:</strong> Ortaklar, kooperatif ile olan işlemlerini online platformlar üzerinden gerçekleştirebilmektedir</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Bakanlık Denetimi ve Raporlama</h3>
                <div className="bg-teal-50 dark:bg-gray-700 rounded-lg p-6">
                  <p className="leading-relaxed mb-3">
                    Ticaret Bakanlığı, kooperatiflerin düzenli denetimini sağlamak amacıyla yeni düzenlemeler getirmiştir:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Kooperatifler yıllık faaliyet raporlarını Bakanlığa elektronik ortamda göndermektedir</li>
                    <li>Risk bazlı denetim sistemi getirilmiştir</li>
                    <li>Kooperatif üst kuruluşları, üye kooperatiflerin denetiminden sorumlu tutulmuştur</li>
                    <li>Bağımsız denetim kuruluşlarının yetkilendirilmesi sistemi oluşturulmuştur</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 border-l-4 border-blue-600">
            <p className="text-sm text-gray-700 dark:text-gray-300 italic">
              <strong>Not:</strong> Bu sayfa, Türkiye Kooperatifçilik Mevzuatının özet bilgilerini içermektedir. Detaylı ve güncel bilgi için Resmi Gazete yayınlarına, T.C. Ticaret Bakanlığı Kooperatifçilik Genel Müdürlüğü'nün resmi web sitesine ve ilgili kanunların tam metinlerine başvurulmalıdır.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              * Kaynak: Genç İşi Kooperatif - https://www.gencisi.org/ ve T.C. Ticaret Bakanlığı Kooperatifçilik Genel Müdürlüğü
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
              Mevzuat Bölümüne Dön
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
