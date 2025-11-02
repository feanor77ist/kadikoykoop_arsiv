"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import { useState, useEffect } from "react";

export default function EgitimEnvanteri() {
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
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Ana Sayfa</Link>
          <span>/</span>
          <Link href="/gonulluluk" className="hover:text-blue-600 dark:hover:text-blue-400">Gönüllülük</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">Eğitim Envanteri</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Eğitim Envanteri
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            <a href="#nobet-nasil-tutulur" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">Nöbet Nasıl Tutulur</a> ve <a href="#yeni-gonullu-katilim" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">Yeni Gönüllü Katılım Süreci</a>
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 overflow-x-hidden">
          {/* Nöbet Nasıl Tutulur */}
          <div id="nobet-nasil-tutulur" className="scroll-mt-24 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 overflow-x-hidden">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Nöbet Nasıl Tutulur:
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed break-words overflow-x-hidden">
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Koordinasyon biriminin hazırladığı 2 haftalık nöbet listesi linkinden (Doodle'dan) uygun gün seçilir</li>
                <li>Anahtar Kadıköy Muaf'tan (Osmanağa Mahallesi, Kırtasiyeci Sk. 15/A, Kadıköy/İstanbul) ya da Dükkân yakınında oturan bir Koop Gönüllüsünden alınır.
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Hafta içi nöbet alınması durumunda, Dükkân açılış saatinden 15-20 dakika önce Muaf'tan anahtarın alınması gerekmektedir.</li>
                    <li>Hafta sonu 10:00-12:00 nöbeti alınması durumunda, öncesinde müsait olunan bir gün Muaf'tan anahtar alınmalıdır. Çünkü Muaf öğleden sonra açılmaktadır. Hafta sonu 12:00 ve sonrasındaki nöbetlerin alınması durumunda, anahtar önceki nöbetçiden alınır. Son nöbet alınmamışsa sonraki nöbetçiye de mutlaka anahtar bırakılmalıdır. Kapanışı yani son nöbeti alan nöbetçi anahtarı Muaf'a bırakmalıdır.</li>
                  </ul>
                </li>
                <li>Kadıköy Koop Mutfak whatsapp grubuna "x nolu anahtarı aldım" yazılır</li>
                <li>Nöbet için 10-15 dk önce dükkanda olmaya gayret edilir Dükkan açılış saatine kadar kapı kilitli tutulur ki nöbet öncesi işleri rahatça yapabilelim.</li>
                <li>Bir önceki günün Z raporu -bilgisayarın arka tarafındaki rafta yer alan- üzerinde Z raporu yazan kutuya koyulur. Z raporu 21.15te otomatik olarak çıkıyor. Bazen nöbetçiler o saatte dükkandaysa yarınki nöbetçiye bırakmadan raporu kutuya koyabiliyorlar. Nöbete başlarken Z raporunu yazar kasadan çıkmış halde göremezsek, önce kutuya bakarız. Yoksa dünkü Z raporunun çıkmadığını Kadıköy Koop Mutfak whatsapp grubuna yazıp, Z raporu çıktısını alırız.</li>
              </ol>
              
              <div className="ml-4 my-4">
                <p className="font-medium mb-2">(Z Raporu Nasıl Alınır</p>
                <p className="ml-4 mb-2">⬇ Yönetici şifresi 0000 -tüm şifreler için 0000-</p>
                <p className="ml-4">F tuşuna basılır Raporlar seçilir Oklarla ilerleyip Z raporu seçilir Günlük seçilir / istenilen tarih aralığı seçilir</p>
                <p className="ml-4">Tamam denir)</p>
              </div>

              <p className="ml-4">6. Bilgisayar açılırFişi prize takılır</p>
              
              <p className="ml-4">7. Koop muhasebe sayfası açılır</p>
              <p className="ml-4 mb-2">⬇ <a href="http://muhasebe.kadikoykoop.org/koopmuhasebe" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">http://muhasebe.kadikoykoop.org/koopmuhasebe</a></p>
              <p className="ml-4 italic mb-4">NOT: Güvenlik için bilgisayarı temiz tutuyoruz. Tarayıcıyı (Firefox) hiçbir şekilde veri saklamayacak şekilde ayarlandı. Bu yüzden her nöbette "http://muhasebe.kadikoykoop.org/koopmuhasebe" sayfasını yazmamız gerekiyor.</p>

              <p className="ml-4">8. Kasa sayılır</p>
              
              <p className="ml-4">9. Kasa defterine yazılması gerekenler yazılır</p>
              
              <div className="ml-4 my-4">
                <p className="font-medium mb-2">Her Nöbette Kasa açılırken:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kasadaki para sayılır (Her durumda)</li>
                  <li>Defterde bir önceki nöbetten kalan son sayım tutarı "Kasa " olarak deftere yazılır (Her durumda)</li>
                  <li>Pirot'taki "Para Durumu" bölümünden, uygulama açısından, kasada olması gereken tutar "Pirot" olarak deftere yazılır (Her durumda)</li>
                  <li>Arada fark olsa da olmasa da "Fark" bunların altına yazılır (Fark önceki üç adımdan herhangi ikisi ya da tümü arasında olabilir. Karışıklık olduğunu düşündüğümüz durumlarda mümkün olduğunca deftere bunları, açıklamalarıyla birlikte, yazmaya çalışalım)</li>
                </ul>
              </div>

              <p className="ml-4">10. Dolabın ışığı açılır (Soldaki dolabın üstteki ışığı bozuk, bazen yanmayabiliyor ya da yandıktan bir süre sonra sönebiliyor.:) )</p>
              
              <p className="ml-4">11. Dükkan açılış saatine 1-2 dakika kala jaluziler açılır, kilitli olan kapı açılır ve anahtar cebe ya da çantaya koyulur.</p>

              <p className="ml-4 mb-2">12. Her satış mutlaka pirota kaydedilir. Örneğin bir müşteri geldi,</p>
              <p className="ml-4 mb-2">1 adet kahve 15 adet yumurta 1 adet koop çantası aldı</p>
              <p className="ml-4 mb-2">1 satış işleminde 3 ürün oldu. KDV oranları Pirot'ta satış işleminin alt kısmında çıkıyor. Gelen müşteri kooperatif ortağı değilse fiş kesiyoruz. Bazen müşteriler fişlerini almak istemiyorlar. Kasanın etrafında duran fiş kutusunda fişleri biriktiriyoriz. Müşteri koop ortağıysa pirotta sol yukarıda yer alan 'ortağa satış' sekmesine tıklıyoruz ve fiş kesmiyoruz.</p>
              
              <p className="ml-4 mb-2">Fiş kesimine dair??</p>
              
              <p className="ml-4 italic mb-4">NOT: Satış yaparken yazar kasa ile sadece fiş kesiyoruz. Kart geçtiğini düşünenler olabiliyor. Böyle bir durumda sadece nakit çalıştığımızı söylüyoruz.</p>
              
              <p className="ml-4 mb-2">13. Satış yapılırken peynirler, tereyağ ve taze ürünler(limon,elma vs.) tartılarak satılıyor. Pirottaki adet kısmına gramajı, fiyat kısmına da aşağıdaki hesaptan çıkan tutar yazılıyor.</p>
              <p className="ml-4 mb-2">Örneğin;</p>
              <p className="ml-4 mb-2">Taze kaşarın kilosu 30 lira diyelim, kaşarı tarttık 456 gram geldi. Satış fiyatını bulmak için hesap makinesinden şu işlemi yapıyoruz,</p>
              <p className="ml-4 mb-2">0,456×30=13,68</p>
              <p className="ml-4 mb-2">13,68'i 14'e yuvarlıyoruz.</p>
              <p className="ml-4 mb-4">13,38 çıksaydı 13,5'e yuvarlardık.</p>
              
              <p className="ml-4 mb-2">14. Dükkanda azaldığını ya da bittiğini farkettiğimiz ürünleri Kadıköy Koop Mutfak whatsapp grubuna,</p>
              <p className="ml-4 mb-2">"Ürün sorumlularının dikkatine,</p>
              <p className="ml-4 mb-2">x ürününden 2 adet</p>
              <p className="ml-4 mb-2">y ürününden 0 adet</p>
              <p className="ml-4 mb-4">kaldı" gibi bir bilgilendirme olarak geçeriz.</p>
              
              <p className="ml-4">15. Gün sonunda jaluziler kapatılır. Kapanış esnasında işleri rahatça yapabilmek için kapı kilitlenir</p>
              
              <p className="ml-4">16. Dolabın ışığı kapatılır</p>
              
              <p className="ml-4 mb-2">17. Yaz döneminde, havalar çok sıcak olduğu zamanlar Klima kurulur</p>
              <p className="ml-4 mb-4">ON yaptıktan sonra kumandanın ön panelini açıp TIMER tuşuna, sonra da SET tuşuna basıyoruz. Klimadaki turuncu ışık yanıyor olmalı.</p>
              
              <p className="ml-4 mb-2">18. Kapanış esnasında aşağıdaki adımlar uygulanır.</p>
              
              <div className="ml-4 my-4">
                <p className="font-medium mb-2">Her Nöbette Kasa Kapatılırken:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pirot'a da girilmiş olması gereken, kasadan çıkışlar ("Masraf", ödeme vb.) ve kasaya girişler ("Satış" vb.) yazılır. (Varsa)</li>
                  <li>Sistemde karşılığı olmayan ya da o an sınıflandıramadığımız hareketler yanlarına açıklamayla yazılır (Ör: birinin borcunu ödemesi vb.)</li>
                  <li>Bir önceki nöbetten devreden tutar (Defterde yazan, Pirot'taki değil!) "Kasa" olarak yazılır (Her durumda)</li>
                  <li>Yukarıdaki üç adımın (1,2,3) toplamı hesaplanır ve "Toplam" olarak deftere yazılır (Olması gereken toplam) (Her durumda)</li>
                  <li>Kasadaki para sayılır (Her durumda)</li>
                  <li>4. ve 5. adımda hesaplanan tutarlar arasında fark varsa nöbet boyunca yapılan satışlar incelenir ve mümkünse açık bulunmaya çalışılır. (2. adımda belirtilen türden hareketler sebebiyle fark oluşmuş olabilir)</li>
                  <li>Pirot'taki "Para Durumu" bölümünden, uygulama açısından, kasada olması gereken tutar "Pirot" olarak deftere yazılır (Her durumda)</li>
                  <li>5. ve 7. adımda hesaplanan tutarlar (Kasadaki para ve Pirot'ta görünen para) arasında fark olsa da olmasa da "Fark" bunların altına yazılır.</li>
                </ul>
                <p className="mt-4">Neticede kasa açılırken ve kasa kapatılırken yukarıda kalın olarak belirtmiş olduğum tutarların deftere yazılmasına dikkat edelim.</p>
                <p className="mt-2">Bu kontrolleri yalnızca mali birim değil nöbet tutan herkesin yapması iyi olur. Böylelikle uyaranlar belli kişiler olmaz ve bilgi daha çabuk yayılabilir (:)</p>
              </div>
              
              <p className="ml-4">19. Defterin fotoğrafını, Kadıköy Koop Mutfak whatsapp grubuna göndeririz. Fotoğrafın net olması mali birimdeki arkadaşları sevindirecektir (:)</p>
              
              <p className="ml-4">20. Bilgisayar kapatılıpfişi prizden çekilir. Ama yazar kasanın fişini hep prizde takılı tutuyoruz.</p>
              
              <p className="ml-4">21. Bulaşık çıkardıysak yıkayıp, çöp varsa atıp, ışıkları söndürüp, dükkanı kapatırız</p>
              
              <p className="ml-4">22. Anahtarı muafa bırakıp, koop mutfak whatsapp grubuna "x nolu anahtarı muafa bıraktım" yazarız</p>
              
              <p className="ml-4 mb-2">23. Kargo geldiyse, Pirot'a kargo masrafını işlenir</p>
              
              <p className="ml-4 mb-2">24. Kargo makbuzunun , gelen ürünlerin ve kargonun içinden çıkmasını dilediğimiz "ürün faturasının" fotoğrafları çekilip Kadıköy Koop Mutfak whatsapp grubuyla paylaşılır</p>
              
              <p className="ml-4 mb-4">*Ürün faturaları -arka tarafta kaloriferin üzirinde duran- üzerinde fatura kutusu yazan kutuya koyulur</p>
              
              <p className="ml-4 italic mb-4">Not: Kargolar koli ile geliyor ve koli gazete kağıdı dükkanda böceklenmeye neden oluyor. Bu yüzden bunları bir an önce ya da nöbet bitiminde dükkandan çıkarıp çöpe veya geri dönüşüme atmalıyız. ♻</p>
              
              <p className="ml-4 mb-2">25. Mali birimin onayıyla ürünleri satışa çıkarırız. Mali birimden onay gelmediyse arka tarafta yer varsa ürünleri arka raflara dizeriz. Yer yoksa satışa çıkan ürünlerin olduğu boş raflardan birine dizip, müşteriden satın alma talebi geldiğinde henüz satışa çıkarmadığımızı belirtiriz (:)</p>
              
              <div className="ml-4 my-6">
                <p className="font-medium mb-2">Gerekli Kontaklar:</p>
                <p><a href="https://docs.google.com/spreadsheets/d/1-1TfHoCTg3hC5TrX_AA9gziDy4OkbUfKehevNPzNvXo/htmlview" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://docs.google.com/spreadsheets/d/1-1TfHoCTg3hC5TrX_AA9gziDy4OkbUfKehevNPzNvXo/htmlview</a></p>
              </div>
            </div>
          </div>

          {/* Yeni Gönüllü Katılım Dosyası */}
          <div id="yeni-gonullu-katilim" className="scroll-mt-24 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700 overflow-x-hidden">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Yeni Gönüllü Katılım Dosyası
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed break-words overflow-x-hidden">
              <p>Bu dosya, Kadıköy Kooperatifine yeni katılan gönüllülerin işleyişi anlamak ve çalışmalarını kolaylaştırmak amacıyla hazırlanmıştır. Yeni katılan gönüllülerin, eşlikçileriyle birlikte inceleyerek ve tartışarak süreçlere ve işleyişe hakim olana kadar yardımcı olması hedeflenmiştir.</p>
              
              <p>Elbette ki, zaman içerisinde bazı bilgileri tekrar hatırlamak isteyen tüm gönüllülerin de faydalanması yararlı olacaktır. Daha ayrıntılı bilgi ve destek ihtiyacı halinde, başta gönüllünün eşlikçisi olmak üzere tüm kooperatif gönüllülerinden destek istenebilir.</p>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Toplantı Usulü:</h3>
                <p className="mb-2">Mutfak toplantılarının ve karar alma mekanizmalarının nasıl işlediği ile ilgili yönergeye aşağıdaki linkten ulaşabilirsiniz:</p>
                <p><a href="https://drive.google.com/file/d/1hTtASbRs2wUkUGxizgyF4vWFHakvZ7nj/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/file/d/1hTtASbRs2wUkUGxizgyF4vWFHakvZ7nj/view?usp=sharing</a></p>
              </div>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">İletişim Hakkında:</h3>
                <p className="mb-2">Tüm mutfak gönüllülerinin dahil olduğu whatsapp ve e-mail gibi araçları kullanırken, iletişimin sağlıklı olması için önerilere aşağıdaki linkten ulaşabilirsiniz:</p>
                <p><a href="https://drive.google.com/file/d/1AqkdgoBkwwUdN5hbPl_cJHcA3dVkpTPY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/file/d/1AqkdgoBkwwUdN5hbPl_cJHcA3dVkpTPY/view?usp=sharing</a></p>
              </div>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Dükkân Nöbeti:</h3>
                <p className="mb-2">Kendinizi hazır hissedene kadar eşlikçinizle beraber tutacağınız dükkan nöbetlerinde size yardımcı olacak Dükkan Yönergesine aşağıdaki linkten ulaşabilirsiniz:</p>
                <p className="mb-4"><a href="https://drive.google.com/file/d/16Y3j3FhmNBzEXLe7pDb9TRva1gSu52Sy/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/file/d/16Y3j3FhmNBzEXLe7pDb9TRva1gSu52Sy/view?usp=sharing</a></p>
                <p className="mb-2">Her ayın son pazar günü yapılan stok sayımına ilişkin yönergeye aşağıdaki linkten erişebilirsiniz:</p>
                <p><a href="https://drive.google.com/file/d/1xKiAFiEMI6V58203ZnsJCkp7Kv6kGKpf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/file/d/1xKiAFiEMI6V58203ZnsJCkp7Kv6kGKpf/view?usp=sharing</a></p>
              </div>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ürün-Üretici Bilgileri:</h3>
                <p className="mb-2">Ürün ve üretici katalogu, <a href="https://www.kadikoykoop.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">www.kadikoykoop.org</a> web sitesinden erişilebilir olacaktır. Katalog dışında tüm ürün ve üreticilere ait son durum bilgilerine Gıda Ürün-Üretici birimi klasöründe yer alan aşağıdaki linkten erişebilirsiniz:</p>
                <p><a href="https://docs.google.com/spreadsheets/d/1oovZGWAkFLFMBuI7lPeyci5Qi31dkNOhEf2kiLeim0g/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://docs.google.com/spreadsheets/d/1oovZGWAkFLFMBuI7lPeyci5Qi31dkNOhEf2kiLeim0g/edit?usp=sharing</a></p>
              </div>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ürün-Üretici Sorumluluğu:</h3>
                <p className="mb-2">Ürün-üretici sorumluluğuna yönelik detaylı bilgiye aşağıdaki linkten erişebilirsiniz:</p>
                <p className="mb-4"><a href="https://drive.google.com/file/d/1zDnf1OQfHIse6WzR5XjM0IYgVojdGtTo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/file/d/1zDnf1OQfHIse6WzR5XjM0IYgVojdGtTo/view?usp=sharing</a></p>
                <p className="mb-2">Sipariş formunun nasıl doldurulacağına şu linkten ulaşabilirsiniz:</p>
                <p className="mb-2"><a href="https://drive.google.com/file/d/1CkpOjCyhhl4vkX3kAo8VpaKK7TyzZ0m5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/file/d/1CkpOjCyhhl4vkX3kAo8VpaKK7TyzZ0m5/view?usp=sharing</a></p>
                <p className="italic">*Aynı zamanda bir ürünün ilk seçim adımından satış anına kadar geçen süreci Yönergeler ve Süreçler dosyasının altında yer alan Süreçler klasöründen erişebilirsiniz: <a href="https://drive.google.com/drive/u/0/folders/1bRP4dCYl9VxvsPgem_tUwS1UX2A8EYML" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/drive/u/0/folders/1bRP4dCYl9VxvsPgem_tUwS1UX2A8EYML</a></p>
              </div>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Arşiv tanıtımı ve bilgilendirmesi:</h3>
                <p className="mb-2">Kadıköy Kooperatifi Arşivi, hem mevcut işleyişle ilgili dokümanların bulunduğu hem de geçmişte kullanılan ve gerektiğinde ulaşmak için saklanan dosyalardan oluşmaktadır.</p>
                <p className="mb-2">Arşive erişebilmek için arşiv birimine yetki talebinde bulunulduğuna dair mail atılması gerekir.</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
                  <li>Arşiv birimi mail adresi: <a href="mailto:kdkkoop.belge@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">kdkkoop.belge@gmail.com</a></li>
                  <li>Arşiv linki: <a href="https://drive.google.com/drive/u/0/folders/11r1ftsWDnZ9UEUjQv9tcJAaPW5ajrR_J" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/drive/u/0/folders/11r1ftsWDnZ9UEUjQv9tcJAaPW5ajrR_J</a></li>
                </ul>
                <p className="italic mb-2">*Özellikle geçmiş döneme dair sorulara yanıt bulabilmek için, mutfak toplantı notlarının olduğu dosyanın incelenmesini öneririz:</p>
                <p className="mb-2">Toplantı notları</p>
                <p><a href="https://drive.google.com/drive/u/0/folders/1qsXJ8kHKqD4BNz7KTnwPIxVYQYGgkpNM" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/drive/u/0/folders/1qsXJ8kHKqD4BNz7KTnwPIxVYQYGgkpNM</a></p>
              </div>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Kadıköy Kooperatifi Kitapçığı:</h3>
                <p className="mb-2">Eğitim toplantısı mailinde de almış olduğunuz, kooperatifin amacı, işleyişi ve ilkelerinin anlatıldığı kitapçığa aşağıdaki linkten erişebilirsiniz:</p>
                <p><a href="https://drive.google.com/file/d/1KCpShw5plXHSR_vPDxWimjbfP-Lx28ZP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/file/d/1KCpShw5plXHSR_vPDxWimjbfP-Lx28ZP/view?usp=sharing</a></p>
              </div>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sıkça Sorulan Sorular:</h3>
                <p className="mb-2">Şimdiye dek kooperatife en sık sorulmuş sorular ve cevaplarından oluşan dosyaya aşağıdaki linkten erişebilirsiniz:</p>
                <p><a href="https://docs.google.com/document/d/1Tl6U2wXeeZ6cAqCe3HQGNL1Bjk8_-Rexy6mvPWdNtyY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://docs.google.com/document/d/1Tl6U2wXeeZ6cAqCe3HQGNL1Bjk8_-Rexy6mvPWdNtyY/edit?usp=sharing</a></p>
              </div>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Model:</h3>
                <p className="mb-2">Kooperatif işleyiş modeline ilişkin son güncellemeyi şu linkten görüntüleyebilirsiniz:</p>
                <p><a href="https://drive.google.com/file/d/15d8bXsWqJjmZuJyXM-kap8rPsay9cms3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/file/d/15d8bXsWqJjmZuJyXM-kap8rPsay9cms3/view?usp=sharing</a></p>
              </div>
              
              <div className="my-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Yönergeler ve Süreçler:</h3>
                <p className="mb-2">Kooperatif ve işleyişiyle ilgili mevcut tüm yönerge ve süreçlere aşağıdaki linkten erişebilirsiniz:</p>
                <p><a href="https://drive.google.com/drive/u/0/folders/1Y8MPA8MX2AgDzqag5b5i0pzBUiyIreiX" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline break-all">https://drive.google.com/drive/u/0/folders/1Y8MPA8MX2AgDzqag5b5i0pzBUiyIreiX</a></p>
              </div>
            </div>
          </div>
        </div>

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
