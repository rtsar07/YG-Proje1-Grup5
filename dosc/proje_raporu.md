# Proje Raporu
## Yazılım Geliştirme Dersi — Proje 1
### Etkileşimli Ders Deneyimi Panosu

---

**Ders:** Yazılım Geliştirme  
**Proje Adı:** Etkileşimli Ders Deneyimi Panosu  
**Proje Dönemi:** 1. Dönem (4 Hafta)  
**Teslim Tarihi:** 2026  
**Repository:** https://github.com/sumeyye-61/Yazilim-Gelistirme-Proje1

---

## Ekip Üyeleri ve Rolleri

| İsim | Rol | Sorumluluk |
|------|-----|------------|
| Rasih Talha Sarıca | Lider & Geliştirici | Koordinasyon, görev paylaşımı, GitHub düzeni, teslim kontrolü ve aktif geliştirme |
| Sümeyye Erbay | Test / Kalite & Geliştirici | Test senaryoları, hata takibi, kalite kontrol, doğrulama ve aktif geliştirme |
| Berfin Dere | Analist & Geliştirici | İhtiyaç analizi, kullanıcı hikayeleri, kabul kriterleri, kapsam yönetimi ve aktif geliştirme |
| Elanur Kılıç | Dokümantasyon / Sunum & Geliştirici | Proje raporu, kullanıcı kılavuzu, README, sunum materyali, teslim paketi ve aktif geliştirme |

---

## 1. Giriş

Bu rapor, Yazılım Geliştirme dersinin birinci proje dönemi kapsamında geliştirilen **Etkileşimli Ders Deneyimi Panosu** web uygulamasının tasarım, geliştirme ve test süreçlerini belgelemektedir.

Proje, öğrencilerin ders sürecinde ihtiyaç duydukları bilgilere (haftalık ders içerikleri, ödevler, sınav notları, kişisel notlar) tek bir modern arayüzden erişebilmelerini, ilerleme durumlarını takip edebilmelerini ve kişisel çalışma alışkanlıklarını geliştirmelerini hedeflemektedir.

### 1.1 Projenin Amacı

- Öğrencilerin haftalık ders içeriklerine kolayca erişimini sağlamak
- Görev ve mini etkinliklerin takibini görsel ve etkileşimli hale getirmek
- Sınav notlarını ve genel not ortalamalarını anlık hesaplayıp göstermek
- Kişisel not alma alışkanlığını destekleyen bir ortam sunmak
- Öğrencinin genel ilerlemesini motivasyonu artıracak biçimde görselleştirmek

### 1.2 Kapsam

Proje bir **istemci tarafı (frontend)** web uygulamasıdır. Herhangi bir sunucu (backend) veya ilişkisel veri tabanı gerektirmez; tüm veriler tarayıcının `localStorage` mekanizması ile saklanır. Uygulama yalnızca bir tarayıcıda açılarak çalıştırılabilir.

---

## 2. İhtiyaç Analizi

### 2.1 Paydaş Analizi

| Paydaş | İhtiyaç | Öncelik |
|--------|---------|---------|
| Öğrenci | Haftalık ders içeriklerini görüntülemek, görev durumunu takip etmek, ilerlemeyi ölçmek | Birincil |
| Ders Sorumlusu | Dersin anlaşılır ve takip edilebilir bir yapıda sunulması | İkincil |
| Ekip Üyeleri | Geliştirme sürecinde net görev dağılımı ve GitHub üzerinden katkı takibi | İkincil |

### 2.2 Kullanıcı Hikayeleri

**US-01:** Öğrenci olarak, haftalık ders kartlarını görmek istiyorum; böylece her haftada ne öğreneceğimi ve hangi hedeflerin beklediğini önceden bilebiliyorum.  
*Kabul Kriteri:* 14 haftalık kart listelenmeli, her kartta başlık, özet ve öğrenme hedefleri bulunmalıdır.

**US-02:** Öğrenci olarak, görevlerimi tamamlandı/devam ediyor olarak işaretlemek istiyorum; böylece hangi görevlerin bittiğini takip edebiliyorum.  
*Kabul Kriteri:* Görev durumu değiştiğinde ilerleme çubuğu anlık güncellenmeli, durum sayfa yenilendiğinde korunmalıdır.

**US-03:** Öğrenci olarak, görevler arasında arama yapmak istiyorum; böylece ilgili görevi hızla bulabiliyorum.  
*Kabul Kriteri:* Kullanıcı yazdıkça liste filtrelenmeli, büyük/küçük harf duyarsız olmalıdır.

**US-04:** Öğrenci olarak, sınav notlarımı girip ağırlıklı ortalamamı görmek istiyorum.  
*Kabul Kriteri:* Vize %40, Final %60 ağırlıklarına göre ortalama hesaplanmalı ve harf notu gösterilmelidir.

**US-05:** Öğrenci olarak, dersle ilgili kişisel notlar eklemek, düzenlemek ve silmek istiyorum.  
*Kabul Kriteri:* Notlar tarih damgasıyla kaydedilmeli ve sayfa yenilendiğinde korunmalıdır.

**US-06:** Öğrenci olarak, karanlık ve aydınlık tema arasında geçiş yapmak istiyorum; böylece göz konforumu sağlayabiliyorum.  
*Kabul Kriteri:* Tema tercihi `localStorage`'da saklanmalı ve sayfa yenilendiğinde hatırlanmalıdır.

**US-07:** Öğrenci olarak, kayıt olup giriş yapabilmek istiyorum; böylece kişisel verilerim diğer kullanıcılardan ayrı tutulsun.  
*Kabul Kriteri:* E-posta ve şifre ile kayıt ve giriş çalışmalı, oturum `localStorage`'da saklanmalıdır.

### 2.3 Fonksiyonel Gereksinimler

| ID | Gereksinim | Durum |
|----|-----------|-------|
| FR-01 | Haftalık ders kartları listelenmeli | ✅ Tamamlandı |
| FR-02 | Görev durumu değiştirilebilmeli | ✅ Tamamlandı |
| FR-03 | Görevlerde arama ve filtreleme yapılabilmeli | ✅ Tamamlandı |
| FR-04 | Genel ilerleme görsel olarak gösterilmeli | ✅ Tamamlandı |
| FR-05 | Sınav notları eklenmeli ve ortalama hesaplanmalı | ✅ Tamamlandı |
| FR-06 | Kişisel not CRUD işlemleri yapılabilmeli | ✅ Tamamlandı |
| FR-07 | Dark/Light tema desteği bulunmalı | ✅ Tamamlandı |
| FR-08 | Kayıt ol ve giriş yapma sistemi çalışmalı | ✅ Tamamlandı |
| FR-09 | Mobil uyumluluk sağlanmalı | ✅ Tamamlandı |
| FR-10 | Veriler sayfa yenilendiğinde korunmalı (localStorage) | ✅ Tamamlandı |

### 2.4 Fonksiyonel Olmayan Gereksinimler

| ID | Gereksinim |
|----|-----------|
| NFR-01 | Uygulama yalnızca tarayıcıda çalışmalı, kurulum gerektirmemeli |
| NFR-02 | Arayüz tutarlı ve hızlı tepki vermeli |
| NFR-03 | Temel erişilebilirlik ilkeleri uygulanmalı (kontrast, klavye navigasyonu) |
| NFR-04 | Kod yapısı anlaşılır ve tekrar içermemeli |
| NFR-05 | Mobil, tablet ve masaüstü ekranlarda kullanılabilir olmalı |

---

## 3. Sistem Mimarisi

### 3.1 Genel Mimari

Uygulama tamamen **istemci tarafında (client-side)** çalışan tek sayfalı bir web uygulamasıdır (SPA — Single Page Application). Herhangi bir sunucu bağlantısı gerekmez.

```
┌─────────────────────────────────────────────┐
│              TARAYICI (Browser)              │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │index.html│  │style.css │  │  app.js  │  │
│  │ (Yapı)   │  │ (Tasarım)│  │  (Mantık)│  │
│  └──────────┘  └──────────┘  └────┬─────┘  │
│                                    │        │
│  ┌──────────┐                 ┌────▼─────┐  │
│  │ data.js  │◄───────────────►│localStorage│ │
│  │(Veri Mdl)│                 │ (Kalıcılık)│ │
│  └──────────┘                 └──────────┘  │
└─────────────────────────────────────────────┘
```

### 3.2 Dosya Yapısı

```
proje/
├── src/
│   ├── index.html       # Ana HTML iskeleti — tüm bölümler ve modaller
│   ├── style.css        # CSS değişkenleri, tema sistemi, bileşen stilleri
│   ├── data.js          # Veri modeli, mock data ve localStorage CRUD katmanı
│   └── app.js           # Uygulama mantığı — auth, modüller, render fonksiyonları
├── dosc/
│   ├── proje_raporu.md  # Bu rapor
│   └── kullanici_kilavuzu.md
├── presentation/
│   └── sunum_taslagi.md
└── README.md
```

### 3.3 Kullanılan Teknolojiler

| Teknoloji | Versiyon | Kullanım Amacı |
|-----------|---------|----------------|
| HTML5 | — | Sayfa yapısı ve semantic işaretleme |
| CSS3 | — | Stil, animasyonlar, responsive tasarım |
| JavaScript | ES6+ | Uygulama mantığı, DOM manipülasyonu |
| Bootstrap | 5.3.3 | UI bileşenleri ve grid sistemi |
| Bootstrap Icons | 1.11.3 | Arayüz ikonları |
| Google Fonts (Inter) | — | Tipografi |
| localStorage API | — | İstemci tarafı veri kalıcılığı |

### 3.4 Veri Modeli

Uygulamanın veri modeli, projede verilen ER şemasından uyarlanmış ve `localStorage` uyumlu JavaScript nesnelerine dönüştürülmüştür.

#### Temel Veri Yapıları

**Haftalık Kart:**
```json
{
  "id": 1,
  "hafta": 1,
  "baslik": "Yazılım Geliştirme Sürecine Giriş",
  "ozet": "...",
  "hedefler": ["...", "..."]
}
```

**Görev:**
```json
{
  "id": 1,
  "hafta_id": 1,
  "baslik": "GitHub repository'si oluştur",
  "tur": "Proje",
  "durum": "completed"
}
```

**Sınav Notu:**
```json
{
  "id": 1,
  "tur": "Vize",
  "agirlik": 40,
  "puan": 78,
  "tarih": "2026-11-15"
}
```

**Kişisel Not:**
```json
{
  "id": 1,
  "baslik": "Git Komutları",
  "icerik": "...",
  "tarih": "2026-10-15T10:30:00"
}
```

---

## 4. Kullanıcı Senaryoları

### Senaryo 1: Haftalık İçerikleri İnceleme
1. Öğrenci tarayıcıda `index.html`'i açar ve giriş yapar.
2. Sol menüden "Haftalık Dersler"e tıklar.
3. 14 haftalık kart listesini görür; ilgili haftanın kartına tıklar.
4. Haftalık konunun özeti ve öğrenme hedefleri modal penceresinde açılır.
5. Bu hafta için tanımlı görevleri de modal içinde görür.

### Senaryo 2: Görev İlerlemesini Takip Etme
1. Öğrenci "Görevlerim" sekmesine geçer.
2. Arama kutusuna "GitHub" yazar; ilgili görevler anlık filtrelenir.
3. Tamamladığı görevin yanındaki onay kutusuna tıklar.
4. Görev "Tamamlandı" durumuna geçer; navbar'daki ilerleme çubuğu güncellenir.
5. Sayfa yenilendiğinde durum korunur.

### Senaryo 3: Sınav Notunu Takip Etme
1. Öğrenci "Sınav Takibi" sekmesine geçer.
2. "Not Ekle" butonuna tıklar; Final için 85 puan girer.
3. Ağırlıklı not ortalaması otomatik hesaplanır ve harf notu gösterilir.

### Senaryo 4: Kişisel Not Ekleme
1. Öğrenci "Kişisel Notlar" sekmesine geçer.
2. "Not Ekle" butonuna tıklar; başlık ve içerik girer.
3. Not tarih damgasıyla kart olarak görünür.
4. Düzenleme veya silme işlemi yapabilir.

---

## 5. Ekip Katkıları ve Görev Dağılımı

| Görev | Sorumlu | Durum |
|-------|---------|-------|
| Repository yapısı ve README | R.T. Sarıca | ✅ |
| HTML iskelet ve Bootstrap entegrasyonu | Tüm Ekip | ✅ |
| CSS tema sistemi (Dark/Light) | E. Kılıç | ✅ |
| localStorage veri modeli | B. Dere | ✅ |
| Auth sistemi (kayıt/giriş) | R.T. Sarıca | ✅ |
| Haftalık kartlar modülü | B. Dere | ✅ |
| Görev takibi ve ilerleme | R.T. Sarıca | ✅ |
| Sınav takibi modülü | S. Erbay | ✅ |
| Kişisel notlar (CRUD) | E. Kılıç | ✅ |
| Test senaryoları ve hata düzeltme | S. Erbay | ✅ |
| Proje raporu ve kullanıcı kılavuzu | E. Kılıç | ✅ |
| Sunum materyali | E. Kılıç | ✅ |

---

## 6. Karşılaşılan Zorluklar ve Çözümler

| Zorluk | Çözüm |
|--------|-------|
| localStorage veri bütünlüğünü korumak | Merkezi `DB` nesnesi ile tüm CRUD işlemleri tek noktadan yönetildi |
| Dark/Light tema geçişinde ani renk değişimi (flash) | `<script>` ile sayfa yüklenmeden önce tema class'ı HTML'e eklendi |
| Arama kutusunda büyük/küçük harf sorunu | `.toLowerCase()` ile normalleştirme yapıldı |
| Mobil ekranlarda sidebar genişliği | 768px altında sidebar yalnızca ikonları gösterecek şekilde daraltıldı |
| Ağırlıklı sınav ortalamasında yanlış hesaplama riski | Toplam ağırlığa göre normalize eden formül yazıldı |

---

## 7. Test Sonuçları

| Test | Beklenen | Sonuç |
|------|---------|-------|
| Kayıt ve giriş akışı | Başarıyla giriş yapılmalı | ✅ Başarılı |
| Görev durum değiştirme | Durum güncellenmeli, bar değişmeli | ✅ Başarılı |
| Sayfa yenileme sonrası veri kalıcılığı | Veriler silinmemeli | ✅ Başarılı |
| Canlı arama | Gerçek zamanlı filtreleme | ✅ Başarılı |
| Sınav notu ekleme ve ortalama hesabı | Doğru ağırlıklı hesaplama | ✅ Başarılı |
| Not ekleme, düzenleme ve silme | Tüm CRUD işlemleri çalışmalı | ✅ Başarılı |
| Dark/Light tema kalıcılığı | Sayfa yenilendiğinde tema korunmalı | ✅ Başarılı |
| Mobil görünüm (< 768px) | Kullanılabilir düzen | ✅ Başarılı |

---

## 8. Sonuç ve Değerlendirme

Bu proje kapsamında ekibimiz, Yazılım Geliştirme dersinde ele alınan **web geliştirme**, **kullanıcı etkileşimi**, **veri yönetimi** ve **takım çalışması** konularını pratiğe dökmüş; gerçekçi bir yazılım sürecini deneyimlemiştir.

Proje, dökümanda belirlenen tüm zorunlu fonksiyonel gereksinimleri karşılamaktadır. Tek sayfalı uygulama (SPA) mimarisi, `localStorage` tabanlı veri kalıcılığı ve bileşen tabanlı JavaScript yapısıyla modern frontend geliştirme prensiplerine uygun bir çözüm ortaya konmuştur.

**Öne çıkan başarılar:**
- Tüm gereksinimler eksiksiz tamamlanmıştır.
- Karanlık/Aydınlık tema desteği, circular progress bar ve toast bildirimleri ile kullanıcı deneyimi zenginleştirilmiştir.
- Merkezi `DB` katmanı ile veri yönetimi düzenli ve genişletilebilir bir yapıda kurulmuştur.

**Gelecek geliştirmeler (ekstra özellikler):**
- Takvim görünümü ve hatırlatıcı bildirimleri
- PWA (Progressive Web App) desteği ile offline çalışma
- Grafik tabanlı sınav not analizi (Chart.js entegrasyonu)
- Çoklu kullanıcı oturumlarının birbirinden izolasyonu
