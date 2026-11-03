# Proje 1: Etkileşimli Ders Deneyimi Panosu - Gereksinim Analizi

## 1. Hedef Kullanıcı Profili ve İhtiyaçlar
* **Öğrenci:** Ders haftalarını, konuları, mini görevleri ve kişisel ilerlemesini tek bir etkileşimli ekrandan takip etmek ister[cite: 1].
* **Ders Sorumlusu:** Öğrencilerin haftalık akışı anlaşılır şekilde görebilmesini ve görev durumlarını takip edebilmesini ister[cite: 1].

## 2. Kullanıcı Hikâyeleri (User Stories)
* **US-01 (Haftalık Akış):** Bir öğrenci olarak, haftalık ders konularını ve öğrenme hedeflerini responsive kartlar halinde görmek istiyorum ki ders akışını kolayca takip edebileyim[cite: 1].
* **US-02 (Görev Durumu ve İlerleme):** Bir öğrenci olarak, tamamladığım görevleri işaretleyip genel ilerleme yüzdemi görmek istiyorum ki ne kadar tamamladığımı anlık takip edebileyim[cite: 1].
* **US-03 (Arama ve Filtreleme):** Bir öğrenci olarak, görevler arasında arama yapabilmek ve sadece tamamlanmayan işlerimi listeleyebilmek istiyorum ki odaklanmam kolaylaşsın[cite: 1].
* **US-04 (Tema ve Kalıcılık):** Bir öğrenci olarak, karanlık/aydınlık tema tercih edebilmek ve sayfayı yenilesem bile verilerimin kaybolmamasını istiyorum[cite: 1].

## 3. Kabul Kriterleri (Acceptance Criteria)
* **AC-01:** Uygulama masaüstü, tablet ve mobil cihazlarda taşma olmadan kullanılabilir (responsive) olmalıdır[cite: 1].
* **AC-02:** Tamamlanan görev sayısı / toplam görev sayısı oranı sayfanın üstünde dinamik bir progress bar (ilerleme çubuğu) ile gösterilmelidir[cite: 1].
* **AC-03:** Görev durumları ve seçilen tema `localStorage` kullanılarak tarayıcı hafızasında saklanmalıdır[cite: 1].
* **AC-04:** Arama çubuğuna yazılan metne göre görevler anlık olarak süzülmelidir[cite: 1].