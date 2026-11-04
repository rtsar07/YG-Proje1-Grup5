# Kullanıcı Kılavuzu
## Etkileşimli Ders Deneyimi Panosu

---

**Versiyon:** 1.0  
**Hazırlayan:** Elanur Kılıç (Dokümantasyon / Sunum Sorumlusu)  
**Proje:** Yazılım Geliştirme Dersi — Proje 1

---

## Uygulamayı Başlatma

Uygulamanın herhangi bir kurulum veya internet bağlantısı gerektirmez. Çalıştırmak için:

1. Proje klasöründe `src/` dizinine gidin.
2. `index.html` dosyasına çift tıklayın.
3. Dosya herhangi bir modern web tarayıcısında (Chrome, Firefox, Edge) otomatik açılır.

---

## 1. Giriş Ekranı — Kayıt Ol ve Giriş Yap

Uygulamayı ilk kez açtığınızda karşınıza **Giriş Yap / Kayıt Ol** ekranı gelir.

### 1.1 Yeni Hesap Oluşturma (Kayıt Ol)

1. Ekranın üst kısmındaki **"Kayıt Ol"** sekmesine tıklayın.
2. Aşağıdaki alanları doldurun:
   - **Ad Soyad:** Tam adınızı girin (örn: Elanur Kılıç)
   - **E-posta:** Geçerli bir e-posta adresi girin (örn: elanur@ornek.com)
   - **Şifre:** En az 6 karakterden oluşan bir şifre belirleyin
3. **"Kayıt Ol"** butonuna tıklayın.
4. Kayıt başarılı olursa sizi ana panoya yönlendirir ve hoş geldin mesajı görürsünüz.

> **Not:** Aynı e-posta adresiyle ikinci bir hesap oluşturulamaz.

### 1.2 Mevcut Hesapla Giriş Yapma

1. **"Giriş Yap"** sekmesinde kalın (varsayılan olarak bu sekme açıktır).
2. Kayıtlı e-posta adresinizi ve şifrenizi girin.
3. **"Giriş Yap"** butonuna tıklayın.
4. Başarılı girişin ardından ana panoya yönlendirilirsiniz.

### 1.3 Çıkış Yapma

Sağ üst köşedeki çıkış ikonuna ( ↪ ) tıklayarak oturumunuzu kapatabilirsiniz. Verileriniz silinmez.

---

## 2. Ana Panel (Özet / Dashboard)

Giriş yaptıktan sonra **Özet** sayfası açılır. Bu sayfa size güncel durumu özetler.

### Üst Çubuk (Navbar)
- **Sol:** Uygulama logosu ve adı
- **Orta:** Görev tamamlama yüzdenizi gösteren ilerleme çubuğu
- **Sağ:** Kullanıcı adınız, tema değiştirme butonu (🌙 / ☀️) ve çıkış butonu

### İstatistik Kartları
Sayfanın üst kısmında 4 istatistik kartı bulunur:
- **Toplam Hafta:** Ders planındaki toplam hafta sayısı (14)
- **Tamamlanan Görev:** Tamamlandı olarak işaretlediğiniz görev sayısı
- **Devam Eden:** Henüz tamamlamadığınız görev sayısı
- **Not Ortalaması:** Girdiğiniz sınav notlarından hesaplanan ağırlıklı ortalama

### Dairesel İlerleme Göstergesi
- Tamamladığınız görevlerin toplam görevlere oranını yüzde olarak ve dairesel grafik ile gösterir.
- Görev tamamladıkça veya geri aldıkça anlık güncellenir.

### Son Görevler
- En son 5 göreviniz listelenir.
- Yeşil nokta = Tamamlandı, Sarı nokta = Devam Ediyor.

---

## 3. Haftalık Dersler

Sol menüden **"Haftalık Dersler"** sekmesine tıklayarak erişin.

### Kartları Görüntüleme
- Her hafta için bir kart listelenir (14 kart toplam).
- Her kartta **hafta numarası**, **ders konusu**, **kısa özet** ve **haftalık görev sayısı** görünür.

### Filtreleme
- Sağ üstteki açılır menüden belirli bir haftayı seçerek yalnızca o haftanın kartını görebilirsiniz.
- "Tüm Haftalar" seçeneği tüm kartları gösterir.

### Detay Görüntüleme
1. Herhangi bir karta tıklayın.
2. Açılan pencerede şunları görürsünüz:
   - Haftanın **öğrenme hedefleri** (ok işaretli liste)
   - Haftanın **konusu ve özeti**
   - O haftaya ait **görevlerin listesi** ve durumları
3. Pencereyi kapatmak için sağ üstteki **✕** butonuna veya pencere dışına tıklayın.

---

## 4. Görevlerim

Sol menüden **"Görevlerim"** sekmesine tıklayarak erişin.

### Görev Listesi
Tüm görevler kart biçiminde listelenir. Her görev kartında:
- **Onay kutusu:** Sol tarafta
- **Görev başlığı:** Orta alanda
- **Hafta ve tür etiketi:** Renk kodlu küçük rozetler
- **Durum rozeti:** Sağ tarafta ("Tamamlandı" / "Devam Ediyor")

### Görev Tamamlama / Geri Alma
1. Tamamladığınız görevin sol tarafındaki **onay kutusuna** tıklayın.
2. Görev kartı soluklaşır ve üzeri çizilir; durum "Tamamlandı" olarak değişir.
3. Navbar'daki ilerleme çubuğu anlık güncellenir.
4. Aynı kutuya tekrar tıklayarak görevi "Devam Ediyor" durumuna geri alabilirsiniz.

> Değişiklikler otomatik kaydedilir; sayfa kapanıp açılsa bile durum korunur.

### Arama
- Sayfanın üst kısmındaki **arama kutusuna** yazmaya başlayın.
- Siz yazdıkça görevler anlık olarak filtrelenir.
- Aramayı temizlemek için kutuyu boşaltın.

### Filtre Butonları
Arama kutusunun altındaki filtre butonları:
- **Tümü:** Tüm görevleri listeler
- **Devam Edenler:** Yalnızca tamamlanmamış görevleri gösterir
- **Tamamlananlar:** Yalnızca tamamlanmış görevleri gösterir

---

## 5. Ders Programı

Sol menüden **"Ders Programı"** sekmesine tıklayarak erişin.

- Haftanın her günü için ayrı bir kart bulunur.
- Her kart; **gün adı**, dersin **başlangıç–bitiş saatlerini**, **ders adını**, **derslik** ve **ders türünü** (Teorik / Laboratuvar) gösterir.
- Ders olmayan günlerde "Ders yok" bilgisi görünür.

---

## 6. Sınav Takibi

Sol menüden **"Sınav Takibi"** sekmesine tıklayarak erişin.

### Not Ortalaması Özet Kutusu
Sayfanın üstünde büyük bir özet kutusu bulunur:
- **Ortalama puanınız** (sol daire içinde)
- **Harf notunuz** (AA, BA, BB, CC, FF vb.)
- Ağırlık bilgisi (Vize %40, Final %60, Proje %20, Quiz %10)

### Sınav Tablosu
Girdiğiniz tüm notlar tabloda listelenir:
- Sınav türü, aldığınız not, ağırlık yüzdesi, ağırlıklı puan ve tarih görünür.
- Tablodan not silmek için ilgili satırdaki 🗑️ (çöp kutusu) ikonuna tıklayın.

### Yeni Not Ekleme
1. Sağ üstteki **"Not Ekle"** butonuna tıklayın.
2. Açılan pencerede:
   - **Sınav Türü:** Vize, Final, Proje, Quiz veya Ödev seçin
   - **Not:** 0–100 arasında bir değer girin
   - **Tarih:** Sınav tarihini seçin
3. **"Kaydet"** butonuna tıklayın.
4. Not tabloya eklenir ve ortalama otomatik güncellenir.

---

## 7. Kişisel Notlar

Sol menüden **"Kişisel Notlar"** sekmesine tıklayarak erişin.

### Not Listeleme
- Eklediğiniz tüm notlar kart biçiminde listelenir.
- Her kartta not **başlığı**, **içeriği** ve **eklenme tarihi** görünür.

### Yeni Not Ekleme
1. Sağ üstteki **"Not Ekle"** butonuna tıklayın.
2. Açılan pencerede:
   - **Başlık:** Notunuzun kısa bir başlığını girin
   - **İçerik:** Not içeriğini yazın
3. **"Kaydet"** butonuna tıklayın.
4. Not otomatik olarak günün tarih damgasıyla eklenir.

### Not Düzenleme
1. İlgili notun kart üzerindeki **✏️ (kalem)** ikonuna tıklayın.
2. Açılan pencerede başlığı veya içeriği düzenleyin.
3. **"Kaydet"** butonuna tıklayın.

### Not Silme
1. İlgili notun kart üzerindeki **🗑️ (çöp kutusu)** ikonuna tıklayın.
2. Not listeden kaldırılır.

---

## 8. Tema Değiştirme (Karanlık / Aydınlık)

1. Sağ üst köşede bulunan **🌙 / ☀️** butonuna tıklayın.
2. Karanlık temadan aydınlık temaya, aydınlık temadan karanlık temaya geçiş yapılır.
3. Tercih kaydedilir; uygulamayı kapatıp açsanız bile tercih korunur.

---

## 9. Sık Sorulan Sorular (SSS)

**S: Verilerim kaybolur mu?**  
C: Hayır. Tüm veriler tarayıcınızın `localStorage` belleğine kaydedilir. Tarayıcı önbelleğini temizlediğinizde veriler silinebilir; bu nedenle önemli notlarınızı yedeklemeniz önerilir.

**S: Şifremi unuttum, ne yapmalıyım?**  
C: Uygulama şu an şifre sıfırlama özelliği sunmamaktadır. Tarayıcı geliştirici araçlarından (`F12 → Application → localStorage`) kayıtlı kullanıcı verilerine ulaşabilirsiniz.

**S: Birden fazla kişi aynı bilgisayarda kullanabilir mi?**  
C: Evet, farklı e-posta adresleriyle ayrı hesaplar oluşturulabilir; ancak veriler aynı `localStorage`'da tutulur.

**S: Uygulama internet bağlantısı ister mi?**  
C: Yalnızca ilk açılışta Google Fonts ve Bootstrap için internet bağlantısı önerilir. Bağlantı olmadan da temel görünümle çalışır.

**S: Mobil cihazdan kullanabilir miyim?**  
C: Evet. Uygulama tam responsive tasarıma sahiptir; mobil ve tablet cihazlarda sorunsuz çalışır.
