# Sunum Taslağı & Konuşma Metni
## Yazılım Geliştirme Dersi — Proje 1
### Etkileşimli Ders Deneyimi Panosu

---

**Sunum Süresi:** ~10–12 dakika  
**Ekip:** Rasih Talha Sarıca · Sümeyye Erbay · Berfin Dere · Elanur Kılıç  

---

## 🎯 Slayt Planı Özeti

| Slayt | Başlık | Süre | Konuşmacı |
|-------|-------|------|-----------|
| 1 | Kapak | 30 sn | Tüm ekip |
| 2 | Projeye Genel Bakış | 1 dk | Lider (Rasih Talha) |
| 3 | İhtiyaç Analizi & Kullanıcı Hikayeleri | 1.5 dk | Analist (Berfin) |
| 4 | Sistem Mimarisi & Teknoloji Seçimleri | 1.5 dk | Geliştirici (Rasih Talha) |
| 5 | Canlı Demo | 4 dk | Tüm ekip |
| 6 | Test Süreci & Sonuçlar | 1 dk | Kalite (Sümeyye) |
| 7 | Ekip Katkıları & GitHub | 1 dk | Dokümantasyon (Elanur) |
| 8 | Öğrendiklerimiz & Sonuç | 1 dk | Tüm ekip |

---

## 📄 SLAYT 1 — Kapak

**Başlık:** Etkileşimli Ders Deneyimi Panosu  
**Alt Başlık:** Yazılım Geliştirme Dersi · Proje 1

**Görseller:** Uygulama ekran görüntüsü veya logo

**Ekip adları (hepsi birden listelenir):**
- Rasih Talha Sarıca — Lider & Geliştirici
- Sümeyye Erbay — Test / Kalite & Geliştirici
- Berfin Dere — Analist & Geliştirici
- Elanur Kılıç — Dokümantasyon / Sunum & Geliştirici

---

## 📄 SLAYT 2 — Projeye Genel Bakış
**Konuşmacı: Rasih Talha Sarıca**

**Slayt içeriği:**
- Projenin amacı (1–2 madde)
- Hedef kullanıcı: Ders öğrencileri
- Ne sorunu çözüyor? (1 cümle)

**Konuşma metni:**
> "Merhaba. Proje 1 olarak geliştirdiğimiz **Etkileşimli Ders Deneyimi Panosu**, öğrencilerin haftalık ders içeriklerini, görevlerini, sınav notlarını ve öğrenme ilerlemelerini tek bir modern arayüzden takip etmelerini sağlayan bir web uygulamasıdır.
>
> Projeyi yaparken kendimize şu soruyu sorduk: 'Bir öğrenci olarak, dersle ilgili her şeyi takip etmek için kaç farklı yere bakmam gerekiyor?' Bu uygulamayla bunu tek bir sayfaya topladık."

---

## 📄 SLAYT 3 — İhtiyaç Analizi & Kullanıcı Hikayeleri
**Konuşmacı: Berfin Dere**

**Slayt içeriği:**
- Paydaşlar tablosu (Öğrenci / Ders Sorumlusu)
- Temel kullanıcı hikayeleri (3 tanesini maddeler halinde göster)
- Kabul kriterleri nedir? (kısa açıklama)

**Konuşma metni:**
> "Analist olarak ilk hafta ihtiyaç analizinden başladık. Temel paydaşımız olan öğrencinin beklentilerini kullanıcı hikayeleri formatında yazdık.
>
> Örneğin: 'Öğrenci olarak görevlerimi tamamlandı olarak işaretlemek istiyorum; böylece ilerleme durumumu takip edebileyim.' Bu hikayeden yola çıkarak checkbox sistemi, anlık ilerleme çubuğu ve localStorage kalıcılığı özelliklerini tasarladık.
>
> Her hikaye için kabul kriterleri belirledik — yani 'bu özellik ne zaman tamamlanmış sayılır?' sorusunu yanıtladık. Bu, test aşamasında bize çok yardımcı oldu."

---

## 📄 SLAYT 4 — Sistem Mimarisi & Teknoloji Seçimleri
**Konuşmacı: Rasih Talha Sarıca**

**Slayt içeriği:**
- Mimari diyagramı (Frontend → localStorage)
- Kullanılan teknolojiler tablosu
- Neden backend/veritabanı kullanmadık? (kısa gerekçe)

**Konuşma metni:**
> "Teknik mimari konusunda bilinçli bir karar aldık: Backend ve veritabanı kullanmamaya.
>
> Proje belgesi, uygulamanın tarayıcı üzerinde çalışmasını yeterli gördüğünü belirtiyordu. Bu nedenle tüm verileri tarayıcının **localStorage** mekanizmasıyla sakladık. Böylece kurulum gerektirmeden, sadece HTML dosyasını açarak çalışan bir uygulama ortaya çıkardık.
>
> Teknoloji olarak **HTML5, CSS3, JavaScript ES6+** ve **Bootstrap 5** kullandık. Bootstrap'in grid ve hazır bileşen desteği, responsive tasarımı çok daha hızlı kurmamızı sağladı."

---

## 📄 SLAYT 5 — Canlı Demo
**Konuşmacı: Tüm ekip (rotasyonla)**

**Demo Sırası:**

### Demo 1 — Giriş ve Dashboard (Rasih Talha)
> "Uygulamayı açıyorum. Bizi giriş ekranı karşılıyor. Kayıt olup giriş yapıyorum ve ana panoya geliyorum. Üstte ilerleme çubuğu, istatistik kartları ve dairesel ilerleme göstergesi görüyorsunuz."

### Demo 2 — Haftalık Dersler (Berfin)
> "Sol menüden Haftalık Dersler'e geçiyorum. 14 haftalık kart listelendi. Şu haftanın kartına tıklıyorum — öğrenme hedefleri ve bu haftanın görevleri modal pencerede açılıyor."

### Demo 3 — Görevler, Arama ve İlerleme (Rasih Talha)
> "Görevlerim sekmesine geçiyorum. Arama kutusuna yazıyorum — anlık filtreleme çalışıyor. Şimdi bir görevi tamamlıyorum — üst bardaki ilerleme çubuğunun değiştiğini görüyorsunuz."

### Demo 4 — Sınav Takibi (Sümeyye)
> "Sınav Takibi'ne geçiyorum. Final notumu ekliyorum — ortalama ve harf notu otomatik hesaplandı."

### Demo 5 — Kişisel Notlar ve Tema (Elanur)
> "Kişisel Notlar'da hızlıca bir not ekleyip kaydediyorum. Son olarak sağ üstteki tema butonuyla aydınlık moduna geçiyorum — tüm renkler değişiyor."

---

## 📄 SLAYT 6 — Test Süreci & Sonuçlar
**Konuşmacı: Sümeyye Erbay**

**Slayt içeriği:**
- Test senaryoları tablosu (özet)
- Bulunan ve çözülen hatalar (1–2 örnek)

**Konuşma metni:**
> "Test / Kalite sorumlusu olarak üçüncü ve dördüncü haftalarda sistematik test senaryoları uyguladım.
>
> Her kullanıcı hikayesi için kabul kriterlerini test ettim: giriş akışı, görev durumu değişikliği, veri kalıcılığı ve mobil görünüm.
>
> Karşılaştığımız ilginç bir sorun: Arama kutusunda büyük harf küçük harf duyarlılığı vardı. Örneğin 'GitHub' yazarken 'github' yazdığımda sonuç çıkmıyordu. Bu sorunu `.toLowerCase()` normalleştirmesiyle çözdük."

---

## 📄 SLAYT 7 — Ekip Katkıları & GitHub
**Konuşmacı: Elanur Kılıç**

**Slayt içeriği:**
- Ekip rol dağılımı tablosu
- GitHub commit grafiği veya örnek screenshot
- Herkesin bireysel katkısını gösteren kısa liste

**Konuşma metni:**
> "Dokümantasyon ve sunum sorumlusu olarak bu süreçte proje raporunu, kullanıcı kılavuzunu ve bu sunum taslağını hazırladım. Aynı zamanda CSS tema sistemini ve kişisel notlar modülünü geliştirdim.
>
> GitHub'da her ekip üyesinin kendi commit'leri görünmektedir. Görev dağılımımız GitHub Issues üzerinden yönetildi ve her bireysel katkı izlenebilir durumdadır.
>
> 4 kişilik bir ekip olarak 4 hafta boyunca tutarlı biçimde birbirimizi destekledik."

---

## 📄 SLAYT 8 — Öğrendiklerimiz & Sonuç
**Konuşmacı: Tüm ekip (sırayla 1'er cümle)**

**Slayt içeriği:**
- Teknik öğrenmeler
- Takım çalışması öğrenmeleri
- Gelecek geliştirmeler

**Konuşma metni:**

**Rasih Talha:**
> "Bu projede en çok öğrendiğim şey, büyük bir projeyi küçük parçalara bölmenin ve her birini ayrı ayrı test etmenin ne kadar kritik olduğu oldu."

**Berfin:**
> "İhtiyaç analizini baştan doğru yapmak, geliştirme aşamasında çok daha az sorunla karşılaşmamızı sağladı. 'Önce anla, sonra yaz' prensibi gerçekten işe yarıyor."

**Sümeyye:**
> "Test yazmayı geliştirmenin sonuna bırakmak yerine, her özellikten hemen sonra test etmek çok daha verimli oldu."

**Elanur:**
> "Dokümantasyonu projenin sonunda değil, süreç boyunca tutmak hem benim işimi hem de tüm ekibin işini kolaylaştırdı."

**Tüm ekip birlikte:**
> "Sonuç olarak; tüm zorunlu gereksinimleri karşılayan, modern bir arayüze sahip, çalışır ve kullanılabilir bir uygulama geliştirdik. Dinlediğiniz için teşekkürler — sorularınızı bekliyoruz."

---

## 🎤 Olası Sorulara Hazırlık

**S: Neden React gibi bir framework kullanmadınız?**  
> Proje kapsamı istemci tarafı etkileşime odaklanıyordu. Vanilla JS ile proje gereksinimlerinin tamamını karşıladık. Framework öğrenme eğrisi olmadan temel JavaScript mantığını pekiştirme fırsatı bulduk.

**S: Güvenlik açısından localStorage güvenli mi?**  
> Bu bir ders projesi ve üretim ortamı değil. localStorage, tarayıcı ortamında basit veri saklama için uygundur. Gerçek bir üretim sisteminde backend + token tabanlı auth kullanılırdı.

**S: Çevrimdışı çalışıyor mu?**  
> Temel işlevler çevrimdışı çalışır. Yalnızca Google Fonts ve Bootstrap CDN'i için başlangıçta internet bağlantısı önerilir.

**S: Sınav ortalaması nasıl hesaplanıyor?**  
> Her sınav türünün önceden tanımlanmış bir ağırlığı var: Vize %40, Final %60, Proje %20, Quiz %10. Formül: toplam ağırlıklı puan ÷ toplam ağırlık. Birden fazla sınav girildiğinde normalize edilerek hesaplanıyor.
