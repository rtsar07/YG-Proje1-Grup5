# Test Planı - Proje 1 (Sümeyye Erbay)

## Kapsam
Proje 1 teknik dokümanındaki zorunlu özellikler test edilir.
Test ortamı: Firefox, `index.html` yerel olarak açıldı. Demo hesabı ve kendi hesabımla denendi.
s
## Test Sonuçları

| No | Test | Beklenen | Sonuç | Not |
|---|---|---|---|---|
| T-01 | Haftalık ders kartları | Kartlarda başlık ve açıklama olmalı | Geçti | |
| T-02 | Görev işaretleme, ilerleme güncellemesi | Kart ve genel yüzde değişmeli | Geçti | |
| T-03 | Hafta filtresi | Seçilen haftanın kartları gelmeli | Geçti | |
| T-04 | Görev durumu filtresi | Yalnızca seçilen durumdaki görevler gelmeli | Geçti | |
| T-05 | Kelime ile arama | Yazılan kelimeye uyan görevler gelmeli | Kaldı | Görev listesinde arama kutusu yok |
| T-06 | Tema değişimi | Açık/koyu tema değişmeli | Geçti | |
| T-07 | Tema kalıcılığı | Yenilemeden sonra tema korunmalı | Geçti | |
| T-08 | Görev durumu kalıcılığı | Yenilemeden sonra durum korunmalı | Geçti | |
| T-09 | Responsive görünüm | Taşma olmamalı, kontroller kullanılabilmeli | Geçti | Tarayıcı daraltılarak test edildi, gerçek telefonda denenmedi |
| T-10 | Yeni kart/görev ekleme | Kart ve görev eklenebilmeli | Geçti | |
| T-11 | Boş form kontrolü | Boş başlıkla kayıt engellenmeli | Geçti | |
| T-12 | İlerleme tutarlılığı | Üst bar ve gösterge paneli aynı yüzdeyi göstermeli | Geçti | %45 her iki yerde aynı |
| T-13 | Yanlış giriş bilgileri | Giriş engellenmeli, hata mesajı çıkmalı | Geçti | Yanlış e-postada "kayıtlı öğrenci bulunamadı" mesajı çıkıyor, e-posta kayıtlı mı bilgisi veriyor (güvenlik notu) |
| T-14 | Ana gösterge paneli | Genel ve ders bazlı ilerleme görünmeli | Geçti | Genel yüzde, üst bar ve görev sayısı uyumlu |
| T-14a | Ders bazlı ilerleme | Yüzde görevlerle uyumlu olmalı | Geçti | BLM301 %75 doğrulandı |
| T-15 | Klavye ile gezinme | Tab ile öğelere ulaşılmalı, Enter ile çalışmalı | Kısmen | Tab ile gezinme var. Enter ve Esc davranışı kontrol edilmedi, geri dönüş yok |
| T-16 | Gece modunda okunabilirlik | Yazılar rahat okunmalı | Geçti | |
| T-17 | İki filtreyi birlikte kullanma | Her iki koşulu sağlayan kartlar gelmeli | Geçti | Ders filtresi yalnızca tek seçim, bkz. T-25 |
| T-18 | Kayıt, giriş ve veri kalıcılığı | Yeni hesap açılmalı, veriler çıkış-giriş sonrası korunmalı | Geçti | Not ve görev eklendi, çıkış-giriş sonrası duruyordu |
| T-19 | GNO ve harf notu hesabı | Doğru hesaplanmalı, yöntem açıklanmalı | Kısmen | Vize %50 + final %50 ile 75, GNO 2.50 ile tutarlı. Kredi ağırlığı ve eşleme tablosu doğrulanmadı. Yöntem açıklaması yok |
| T-20 | Kart ve görev silme | Silinebilmeli (zorunluysa) | Kaldı | Oluşturma var, silme yok. Zorunluluk teknik dokümanda kontrol edilecek |
| T-21 | Yeni dersin tüm ekranlarda görünmesi | Ders Sınav Takibi, Haftalık Kartlar ve filtrede görünmeli | Geçti | |
| T-22 | Yeni dersin ortalamaya etkisi | Notlu derslerle ağırlıklı ortalama güncellenmeli | Kısmen | Notu olmayan ders ortalamaya girmiyor. Bu kullanıcıya açıkça söylenmeli. Notlu iki derste ortalama 2.50, kredi ağırlığı ayrıca test edilmeli |
| T-23 | Ağırlık toplamı %100 kontrolü | Toplam %100 değilse uyarı vermeli | Kaldı | %10 + %40 + %20 + %40 = %110 girildi, uyarı çıkmadan kaydedildi |
| T-24 | Ağırlık türleri | Ağırlık türü seçimi | Bulgu | Türler sabit 5 seçenekten seçiliyor, serbest giriş yok. Gereksinime göre karar verilecek |
| T-25 | Ders filtresinde çoklu seçim | Birden fazla ders seçilebilmeli (dokümana göre) | Kontrol edilecek | Şu an tek ders ya da tüm dersler seçilebiliyor |

## Bulunan Hatalar (Issue Adayları)
1. T-05: Görev listesinde arama özelliği yok
2. T-20: Kart ve görev silinemiyor
3. T-23: Ağırlık toplamı kontrolü yok
4. T-25: Ders filtresinde çoklu seçim yok (dokümana göre karar verilecek)
5. T-13: Yanlış e-postada kayıtlı olmadığı bilgisi veriliyor (güvenlik notu)

## Açık Kalan Kontroller
- T-15: Enter ile düğmeler ve Esc ile pencereleri kapatma
- T-19: GNO hesabının kredi ağırlığı ve harf notu eşlemesi
- T-22: Kredi ağırlığının iki notlu derste test edilmesi
- T-20 ve T-25: Teknik dokümanda ilgili maddelerin zorunluluğu
