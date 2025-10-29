import Link from "next/link";
import Navigation from "../../../../components/Navigation";

export default function CicekFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/kooperatifcilik" className="hover:text-blue-600 dark:hover:text-blue-400">Neden ve Nasıl Kooperatifçilik?</Link>
          <span>/</span>
          <Link href="/kooperatifcilik/urun-uretici-formlari" className="hover:text-blue-600 dark:hover:text-blue-400">Ürün & Üretici Formları</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Cicek</span>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">🌸</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                CICEK ÜRÜN BİLGİ FORMU
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300"> 	 	
                                      ÇİÇEK - ÜRÜN BİLGİ FORMU
	
Üretici:
Üretim/işleme yapılan yer (tam adres):
Telefon:
(Varsa) E-posta adresi:
(Varsa) Web sayfası:
Üyesi olduğu bir üretici örgütü var mı:


ÜRÜN İLE İLGİLİ BİLGİLER 
Bitkinin türü/cinsi nedir? 

Bitkinin latince ismi nedir? 

Bitkinin ortalama ağırlığı veya boyutları nedir? 

Türün nesli (tükenmek üzere, yaygın vb.) hakkında bilginiz var mı?

Bitkinin kullanılan kısımları hangi bölümleri? (Çiçek, tohum, herba, kök, kabuk vb.)

Kullanılan kısım var ise nasıl kullanılabilir? (kurutup çay yapma, aromatik yağ yapma vb.)
ÜRETİM İLE İLGİLİ BİLGİLER
Bitki hangi bölgesinden hasat ediliyor? (Kökünden, yapraktan vb.)

Bitki nasıl hasat ediliyor? (Elle, bıçakla, makineyle vb.)

Yılın hangi dönemlerinde hasat ediliyor? 

Hasat işlemi günün hangi saatlerinde yapılıyor? 

Türün devamlılığıyla ilgili dikkat edilmesi gereken noktalar nelerdir? 

Bitkiler nereden toplanıyor? (Çitflik, tarla, dağ, orman vb.) 

Eğer bitkinin ekimi/dikimi yapılıyorsa ;
	•	Üretim süresince zararlılarla ilgili önlem alınıyor mu? Alınıyorsa ne gibi yöntemler uygulanıyor? 

	•	Gübre kullanılıyor mu? Kullanılıyorsa ne gübresi kullanılıyor? 

	•	Aynı arazide başka hangi bitkiler yer alıyor? 

Doğadan toplanıyorsa toplanan bölgenin bir statüsü var mı? (sit alanı, milli park vb.)

DEPOLAMA İLE İLGİLİ SORULAR
Hasattan sonra depolama ihtiyacı oluyor mu? Oluyorsa nerede, hangi koşullarda, ne kadar süre depolanıyor?

Bitkinin uzun süre muhafaza edilebilmesi için nelere dikkat edilmesi gerekiyor? Saklama koşulları nasıl olmalı?

ETİKET İLE İLGİLİ SORULAR
Ürünün satışına ilişkin yasal mevzuatla uyuşmayan bir durum var mı? 

Ürünün uygunluğuna dair hangi kurumlardan izin alınıyor ve sizin ürün için onayınız var mı?

LOJİSTİK İLE İLGİLİ BİLGİLER
Bitkiler ne şekilde paketleniyor? (Demet olarak, koli olarak vb.)

Bitkiler muhafaza için nasıl ambalajlanıyor? (Islak kağıda sararak, poşet içinde vb.)

Nakliyat nasıl yapılıyor?

Bu ürünün satıldığı başka bir kooperatif ya da kurumsal alıcı var mı?

Ürün her sene hangi aylarda dağıtıma hazır oluyor?

Ürün hangi aydan itibaren, ne miktarda ve ne süreyle (bütün sene, mevsimlik vs.) Kadıköy Kooperatifi'ne yollanabilir?

ÇALIŞANLAR İLE İLGİLİ BİLGİLER
İşletmede kaç kişi çalışıyor? Üretim ya da hasatta mevsimlik işçi çalışıyor mu?


Çalışanlar sigortalı mı?


İşletme aile işletmesiyse gelir yönetimini kim yapıyor?


Kadın ve eğer çalışıyorsa çocuklar hangi işleri yapıyor?


Kadıköy Kooperatifi'ne iletilmesi istenen ek notlar:

</div>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/kooperatifcilik/urun-uretici-formlari"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Form Ana Sayfasına Dön
          </Link>
        </div>
      </main>
    </div>
  );
}
