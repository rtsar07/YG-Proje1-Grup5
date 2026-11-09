# Test Planı - Proje 1 (Sümeyye Erbay)

## Kapsam
Proje 1 teknik dokümanındaki zorunlu gereksinimler (bölüm 4, 7, 8, 12) test edilmiştir.
Ekstra özellikler ve öneriler ayrı etiketle işaretlenmiştir.

Tür açıklamaları:
- **Zorunlu:** Teknik dokümanda açıkça istenen özellik.
- **Ekstra:** Ekip tarafından eklenmiş, dokümanda zorunlu olmayan özellik. Hatalar yine de bildirilir.
- **Öneri:** Dokümanda istenmeyen, iyileştirme olarak yazılan konu.

Test ortamı: Firefox, `index.html` yerel olarak açıldı, Demo Öğrenci hesabı ve kişisel hesapla denendi. Mobil ve tablet testleri Responsive Design Mode (Ctrl+Shift+M) ile yapıldı.

## Test Sonuçları

| No | Test | Tür | Sonuç | Issue | Not |
|---|---|---|---|---|---|
| T-01 | Haftalık ders kartları | Zorunlu | Geçti | | |
| T-02 | Görev işaretleme ve ilerleme güncellemesi | Zorunlu | Geçti | | |
| T-03 | Hafta filtresi | Zorunlu | Geçti | | |
| T-04 | Durum filtresi | Zorunlu | Geçti | | |
| T-05 | Kelime ile arama | Zorunlu | Kaldı | #4 | Görev listesinde arama kutusu yok (7.3, madde 2) |
| T-06 | Tema değişimi | Zorunlu | Geçti | | |
| T-07 | Tema kalıcılığı | Zorunlu | Geçti | | |
| T-08 | Görev durumu kalıcılığı | Zorunlu | Geçti | | |
| T-09 | Mobil görünüm (375 px) | Zorunlu | Kaldı | #7 | Yatay taşma var (scrollWidth - clientWidth = 207). Taşan öğe üst başlık alanı (.header-right) |
| T-10 | Kart ve görev ekleme | Zorunlu | Geçti | | |
| T-11 | Boş form kontrolü | Zorunlu | Geçti | | |
| T-12 | İlerleme tutarlılığı | Zorunlu | Geçti | | %45 üst bar, gösterge paneli ve görev sayısında aynı |
| T-13 | Yanlış giriş bilgileri | Ekstra | Geçti | | Yanlış e-postada "kayıtlı öğrenci bulunamadı" mesajı çıkıyor (güvenlik notu) |
| T-14 | Gösterge paneli ve ders bazlı ilerleme | Zorunlu | Geçti | | BLM301 %75 görevlerle doğrulandı |
| T-15 | Klavye ile gezinme | Zorunlu | Geçti | | Tab, odak vurgusu ve Enter çalışıyor. Esc ile pencere kapanmıyor (öneri, issue açılmadı) |
| T-16 | Okunabilirlik (gece ve aydınlık tema) | Zorunlu | Geçti | | Firefox kontrast uyarısı bazı metinlerde çıkıyor, gözle okunabilir |
| T-17 | İki filtrenin birlikte çalışması | Zorunlu | Geçti | | |
| T-18 | Kayıt ve veri kalıcılığı | Ekstra | Geçti | | Yeni hesap, not ve görev çıkış-giriş sonrası korunuyor |
| T-19 | GNO hesabı | Ekstra | Kısmen | | Vize %50 + final %50 ile 75, GNO 2.50 ile tutarlı. Kredi ağırlığı ve harf notu eşlemesi doğrulanmadı |
| T-20 | Kart ve görev silme | Öneri | Öneri | #5 | Silme seçeneği yok. Dokümanda zorunlu değil |
| T-21 | Yeni dersin görünürlüğü | Ekstra | Geçti | | Sınav Takibi, Haftalık Kartlar ve filtrede görünüyor |
| T-22 | Yeni dersin ortalamaya etkisi | Ekstra | Kısmen | #3 | Notu olmayan ders ortalamaya girmiyor, bu kullanıcıya açıkça söylenmeli |
| T-23 | Ağırlık toplamı %100 kontrolü | Ekstra | Kaldı | #3 | %10 + %40 + %20 + %40 = %110 uyarı çıkmadan kaydedildi. Katkı toplamı 82 iken ağırlıklı not 74.55 |
| T-24 | Ağırlık türleri | Ekstra | Bulgu | | Türler sabit 5 seçenekten seçiliyor. Issue açılmadı |
| T-25 | Ders filtresinde çoklu seçim | Öneri | Öneri | #6 | Dokümanda çoklu ders seçimi istenmiyor |
| T-26 | Devam eden görev filtresi | Zorunlu | Geçti | | Tamamlanmış görevler listeden gizleniyor. Görevi kalmayan kartlar boş kalıyor (öneri) |
| T-27 | Liste anında güncellenir | Zorunlu | Geçti | | Hafta seçimi ve görev işaretleme sayfa yenilenmeden yansıyor |
| T-28 | Haftanın öğrenme hedefleri | Zorunlu | Kaldı | #9 | Hafta seçildiğinde öğrenme hedefleri hiçbir ekranda görünmüyor (7.1, bölüm 6) |
| T-29 | Dashboard'dan görev tamamlama | Zorunlu | Geçti | | |
| T-30 | Form ve kontrol etiketleri | Zorunlu | Düzeltildi, PR bekliyor | #8, PR #10 | Görev onay kutuları (5 adet) ve not arama kutusuna aria-label eklendi. Konsol kontrolü boş. Birleştirme sonrası yeniden doğrulanacak |
| T-31 | İkon düğmelerin adları | Zorunlu | Düzeltildi, PR bekliyor | #8, PR #10 | Şifre göster/gizle (2), mobil menü aç ve kapat düğmelerine aria-label eklendi. Konsol kontrolü boş. Birleştirme sonrası yeniden doğrulanacak |
| T-32 | Tablet görünümü (768 px) | Zorunlu | Geçti | | scrollWidth - clientWidth = 0 |
| T-33 | Temiz ortamda kurulum | Zorunlu | Yapılmadı | | README adımlarıyla sıfırdan kurulum denenecek (bölüm 5, 12) |
| T-34 | Ders programına ders ekleme | Ekstra | Geçti | | Ders takvimde görünüyor, yenilemeden sonra da kalıyor |
| T-35 | Kişisel not ekleme | Ekstra | Geçti | | Not listede görünüyor, kategori doğru |
| T-36 | Kişisel notlarda arama | Ekstra | Geçti | | Yalnızca eşleşen notlar kalıyor |
| T-37 | Kişisel not silme | Ekstra | Geçti | | Silinen not yenilemeden sonra da yok |
| T-38 | Kart ekleme modalı | Ekstra | Geçti | | Kart doğru ders ve haftada görünüyor |
| T-39 | Çıkış yapma | Ekstra | Geçti | | Giriş ekranına dönüyor, tekrar açınca oturum kapalı |
| T-40 | Ders filtresi (tek tek) | Ekstra | Geçti | | Her ders için yalnızca o derse ait kartlar görünüyor |

## Açık Issue'lar
- #3 Ağırlık toplamı kontrolü (T-23, T-22)
- #4 Kelime ile arama yok (T-05)
- #5 Kart ve görev silme (T-20, öneri)
- #6 Ders filtresinde çoklu seçim (T-25, öneri)
- #7 Mobil görünümde yatay taşma (T-09)
- #8 Erişilebilirlik: etiketsiz alanlar ve düğmeler (T-30, T-31), PR #10 birleştirme bekliyor
- #9 Hafta öğrenme hedefleri görünmüyor (T-28)

## Özet
- Zorunlu maddelerde açık kalan hatalar: T-05 (arama, #4), T-09 (mobil taşma, #7), T-28 (öğrenme hedefleri, #9), T-30 ve T-31 (erişilebilirlik, #8) düzeltme PR #10 ile bekliyor.
- Yapılmayan zorunlu kontrol: T-33 (temiz ortamda kurulum).
- Ekstra özelliklerde bulunan hatalar: T-19 ve T-22 (GNO ve ağırlık, #3), T-23 (ağırlık toplamı, #3). Zorunlu teslim listesine girmiyorlar.
- Öneriler: T-20 (silme, #5), T-25 (çoklu ders filtresi, #6), T-15'in Esc kısmı.
- Bu testlerin dışında kalan ekstra özellikler (T-34 ile T-40) geçti.
