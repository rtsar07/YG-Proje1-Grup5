/**
 * ============================================================================
 * EduTrack - Etkileşimli Ders Deneyimi ve Takip Panosu
 * MİMARİ: ER Veritabanı Modelleri & Akış Şeması Mantığı (Frontend LocalStorage ORM)
 * ============================================================================
 * ER TABLOLARI:
 * 1. OGRENCI:          [ogrenci_id, ad, soyad, email, sifre_hash]
 * 2. AYARLAR:          [ayar_id, ogrenci_id, tema]
 * 3. DERSLER:          [ders_id, ders_adi, ders_kodu, kredi]
 * 4. DERS_PROGRAMI:    [program_id, ders_id, gun, baslangic_saati, bitis_saati, derslik]
 * 5. HAFTALIK_KARTLAR: [kart_id, ders_id, hafta_no, baslik, icerik]
 * 6. GOREVLER:         [gorev_id, kart_id, ders_id, baslik, tur]
 * 7. OGRENCI_GOREV:    [ogrenci_id, gorev_id, durum]
 * 8. SINAV_NOTLARI:    [not_id, ogrenci_id, ders_id, sinav_turu, puan, agirlik_yuzdesi]
 * 9. KISISEL_NOTLAR:   [not_id, ogrenci_id, baslik, icerik, kategori, tarih]
 * ============================================================================
 */

// --- 1. VERİTABANI VE DEPOLAMA YÖNETİCİSİ (STORAGE & MOCK SEED) ---
const DB_STORAGE_KEY = 'EDUTRACK_DATABASE_V1';
const CURRENT_USER_KEY = 'EDUTRACK_CURRENT_USER';

class DatabaseService {
  constructor() {
    this.data = this.loadDatabase();
    if (!this.data || !this.data.OGRENCI || this.data.OGRENCI.length === 0) {
      this.initDefaultSeed();
    }
  }

  // Veritabanını LocalStorage'dan yükle
  loadDatabase() {
    try {
      const stored = localStorage.getItem(DB_STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.error('Veritabanı okuma hatası:', e);
      return null;
    }
  }

  // Veritabanını LocalStorage'a kaydet
  saveDatabase() {
    try {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Veritabanı kaydetme hatası:', e);
    }
  }

  // Varsayılan Başlangıç Verileri (Tohum / Seed Veri)
  initDefaultSeed() {
    this.data = {
      OGRENCI: [
        {
          ogrenci_id: 'ogr_101',
          ad: 'Ahmet',
          soyad: 'Yılmaz',
          email: 'demo@edutrack.edu.tr',
          sifre_hash: this.hashPassword('123456')
        }
      ],
      AYARLAR: [
        {
          ayar_id: 'set_101',
          ogrenci_id: 'ogr_101',
          tema: 'light'
        }
      ],
      DERSLER: [
        {
          ders_id: 'd_1',
          ders_kodu: 'BLM301',
          ders_adi: 'Algoritmalar ve Veri Yapıları',
          kredi: 5
        },
        {
          ders_id: 'd_2',
          ders_kodu: 'BLM305',
          ders_adi: 'Veritabanı Yönetim Sistemleri',
          kredi: 5
        },
        {
          ders_id: 'd_3',
          ders_kodu: 'BLM311',
          ders_adi: 'Modern Web Programlama',
          kredi: 4
        },
        {
          ders_id: 'd_4',
          ders_kodu: 'MAT201',
          ders_adi: 'Olasılık ve İstatistik',
          kredi: 4
        }
      ],
      DERS_PROGRAMI: [
        {
          program_id: 'prg_1',
          ders_id: 'd_1',
          gun: 'Pazartesi',
          baslangic_saati: '09:00',
          bitis_saati: '11:50',
          derslik: 'Amfi-1 (Mühendislik)'
        },
        {
          program_id: 'prg_2',
          ders_id: 'd_2',
          gun: 'Salı',
          baslangic_saati: '13:00',
          bitis_saati: '15:50',
          derslik: 'D-304 (Lab-2)'
        },
        {
          program_id: 'prg_3',
          ders_id: 'd_3',
          gun: 'Çarşamba',
          baslangic_saati: '10:00',
          bitis_saati: '12:50',
          derslik: 'Yazılım Lab-1'
        },
        {
          program_id: 'prg_4',
          ders_id: 'd_4',
          gun: 'Perşembe',
          baslangic_saati: '14:00',
          bitis_saati: '16:50',
          derslik: 'D-102'
        },
        {
          program_id: 'prg_5',
          ders_id: 'd_1',
          gun: 'Cuma',
          baslangic_saati: '10:00',
          bitis_saati: '11:50',
          derslik: 'Uygulama Lab-3'
        }
      ],
      HAFTALIK_KARTLAR: [
        {
          kart_id: 'k_1',
          ders_id: 'd_1',
          hafta_no: 1,
          baslik: 'Algoritma Analizi ve Big-O Notasyonu',
          icerik: 'Zaman ve alan karmaşıklığı analiz yöntemleri, asimptotik notasyonlar (O, Ω, Θ) ve örnek algoritmaların karşılaştırılması.'
        },
        {
          kart_id: 'k_2',
          ders_id: 'd_1',
          hafta_no: 2,
          baslik: 'Ağaçlar ve Dengeli Arama Ağaçları',
          icerik: 'İkili arama ağaçları (BST), AVL ve Red-Black ağaçlarında rotasyon işlemleri ve arama maliyetleri.'
        },
        {
          kart_id: 'k_3',
          ders_id: 'd_2',
          hafta_no: 1,
          baslik: 'İlişkisel Veri Modeli ve SQL Dili',
          icerik: 'Varlık-İlişki (ER) diyagramından ilişkisel şemalara dönüşüm, DDL ve DML komutları.'
        },
        {
          kart_id: 'k_4',
          ders_id: 'd_2',
          hafta_no: 2,
          baslik: 'Normalizasyon ve Normal Formlar',
          icerik: '1NF, 2NF, 3NF ve BCNF kuralları ile veri tekrarını önleme ve anormallikleri giderme stratejileri.'
        },
        {
          kart_id: 'k_5',
          ders_id: 'd_3',
          hafta_no: 1,
          baslik: 'DOM Manipülasyonu ve Modern ES6+ Yapıları',
          icerik: 'JavaScript ES6 özellikleri, Arrow fonksiyonlar, Destructuring, Promises ve Fetch API mimarisi.'
        },
        {
          kart_id: 'k_6',
          ders_id: 'd_4',
          hafta_no: 1,
          baslik: 'Olasılık Dağılımları ve Bayes Teoremi',
          icerik: 'Ayrık ve sürekli rastgele değişkenler, Binom, Poisson ve Normal dağılım pratikleri.'
        }
      ],
      GOREVLER: [
        {
          gorev_id: 'g_1',
          kart_id: 'k_1',
          ders_id: 'd_1',
          baslik: 'Big-O Notasyonu ders sunumunu ve makaleyi oku',
          tur: 'Okuma'
        },
        {
          gorev_id: 'g_2',
          kart_id: 'k_1',
          ders_id: 'd_1',
          baslik: 'Sıralama Algoritmaları Karşılaştırma Ödevi teslimi',
          tur: 'Ödev'
        },
        {
          gorev_id: 'g_3',
          kart_id: 'k_2',
          ders_id: 'd_1',
          baslik: 'AVL Ağacı Ekleme/Silme C++ Simülasyonu',
          tur: 'Laboratuvar'
        },
        {
          gorev_id: 'g_4',
          kart_id: 'k_3',
          ders_id: 'd_2',
          baslik: 'PostgreSQL kurulumu ve Üniversite DB şeması oluşturma',
          tur: 'Laboratuvar'
        },
        {
          gorev_id: 'g_5',
          kart_id: 'k_3',
          ders_id: 'd_2',
          baslik: 'İlişkisel Cebir ve SQL Alıştırma Quizini tamamla',
          tur: 'Quiz'
        },
        {
          gorev_id: 'g_6',
          kart_id: 'k_4',
          ders_id: 'd_2',
          baslik: 'Dönem Projesi 1. Faz ER Şeması ve Normalizasyon Raporu',
          tur: 'Proje'
        },
        {
          gorev_id: 'g_7',
          kart_id: 'k_5',
          ders_id: 'd_3',
          baslik: 'Etkileşimli To-Do List Web Arayüzü Geliştir',
          tur: 'Ödev'
        },
        {
          gorev_id: 'g_8',
          kart_id: 'k_6',
          ders_id: 'd_4',
          baslik: 'Bölüm sonu Bayes teoremi 10 problem çözümü',
          tur: 'Ödev'
        }
      ],
      OGRENCI_GOREV: [
        { ogrenci_id: 'ogr_101', gorev_id: 'g_1', durum: 'tamamlandi' },
        { ogrenci_id: 'ogr_101', gorev_id: 'g_4', durum: 'tamamlandi' },
        { ogrenci_id: 'ogr_101', gorev_id: 'g_2', durum: 'devam_ediyor' },
        { ogrenci_id: 'ogr_101', gorev_id: 'g_3', durum: 'devam_ediyor' },
        { ogrenci_id: 'ogr_101', gorev_id: 'g_5', durum: 'devam_ediyor' },
        { ogrenci_id: 'ogr_101', gorev_id: 'g_6', durum: 'devam_ediyor' },
        { ogrenci_id: 'ogr_101', gorev_id: 'g_7', durum: 'tamamlandi' },
        { ogrenci_id: 'ogr_101', gorev_id: 'g_8', durum: 'devam_ediyor' }
      ],
      SINAV_NOTLARI: [
        {
          not_id: 'sn_1',
          ogrenci_id: 'ogr_101',
          ders_id: 'd_1',
          sinav_turu: 'Vize',
          puan: 82,
          agirlik_yuzdesi: 40
        },
        {
          not_id: 'sn_2',
          ogrenci_id: 'ogr_101',
          ders_id: 'd_1',
          sinav_turu: 'Final',
          puan: 88,
          agirlik_yuzdesi: 60
        },
        {
          not_id: 'sn_3',
          ogrenci_id: 'ogr_101',
          ders_id: 'd_2',
          sinav_turu: 'Vize',
          puan: 90,
          agirlik_yuzdesi: 40
        },
        {
          not_id: 'sn_4',
          ogrenci_id: 'ogr_101',
          ders_id: 'd_3',
          sinav_turu: 'Vize',
          puan: 75,
          agirlik_yuzdesi: 30
        },
        {
          not_id: 'sn_5',
          ogrenci_id: 'ogr_101',
          ders_id: 'd_3',
          sinav_turu: 'Proje',
          puan: 95,
          agirlik_yuzdesi: 30
        }
      ],
      KISISEL_NOTLAR: [
        {
          not_id: 'not_1',
          ogrenci_id: 'ogr_101',
          baslik: 'Veritabanı 3NF Özet Notu',
          icerik: 'Üçüncü Normal Form kuralı: Şema 2NF olmalı ve hiçbir asal olmayan nitelik, diğer bir asal olmayan niteliğe geçişli olarak (transitive dependency) bağlı olmamalıdır.',
          kategori: 'Sınav Hazırlığı',
          tarih: '02.11.2026'
        },
        {
          not_id: 'not_2',
          ogrenci_id: 'ogr_101',
          baslik: 'Algoritma Projesi Fikirleri',
          icerik: 'Dijkstra algoritmasını harita rota optimizasyonu üzerinde görselleştiren interaktif bir canvas arayüzü tasarımı yapılacak.',
          kategori: 'Ödev/Proje',
          tarih: '03.11.2026'
        },
        {
          not_id: 'not_3',
          ogrenci_id: 'ogr_101',
          baslik: 'Haftalık Çalışma Rutini',
          icerik: 'Pazartesi ve Salı günleri ders tekrarları yapılacak. Çarşamba günleri ise laboratuvar kodları gözden geçirilecek.',
          kategori: 'Genel',
          tarih: '04.11.2026'
        }
      ]
    };
    this.saveDatabase();
  }

  // Güvenlik Hash simülasyonu
  hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      const char = password.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    return 'h_' + Math.abs(hash).toString(16);
  }
}

// Global DB Nesnesi
const db = new DatabaseService();

// --- 2. KULLANICI DOĞRULAMA VE OTURUM YÖNETİMİ (AUTH SERVICE) ---
class AuthService {
  static getCurrentUser() {
    try {
      const userStr = localStorage.getItem(CURRENT_USER_KEY);
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }

  static setCurrentUser(user) {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }

  static login(email, password) {
    const user = db.data.OGRENCI.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (!user) {
      return { success: false, message: 'Bu e-posta adresiyle kayıtlı bir öğrenci bulunamadı!' };
    }

    const hashed = db.hashPassword(password);
    if (user.sifre_hash !== hashed) {
      return { success: false, message: 'Girdiğiniz şifre hatalı. Lütfen tekrar deneyin.' };
    }

    this.setCurrentUser(user);
    return { success: true, user };
  }

  static register(ad, soyad, email, password) {
    const existing = db.data.OGRENCI.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (existing) {
      return { success: false, message: 'Bu e-posta adresi zaten kullanımda!' };
    }

    const newStudent = {
      ogrenci_id: 'ogr_' + Date.now(),
      ad: ad.trim(),
      soyad: soyad.trim(),
      email: email.trim().toLowerCase(),
      sifre_hash: db.hashPassword(password)
    };

    // OGRENCI Tablosuna Ekle
    db.data.OGRENCI.push(newStudent);

    // AYARLAR Tablosuna Varsayılan Tema Tercihi Ekle
    db.data.AYARLAR.push({
      ayar_id: 'set_' + Date.now(),
      ogrenci_id: newStudent.ogrenci_id,
      tema: 'light'
    });

    // Kayıt olan öğrenci için varsayılan ders görev durumlarını başlat
    db.data.GOREVLER.forEach(g => {
      db.data.OGRENCI_GOREV.push({
        ogrenci_id: newStudent.ogrenci_id,
        gorev_id: g.gorev_id,
        durum: 'devam_ediyor'
      });
    });

    db.saveDatabase();
    this.setCurrentUser(newStudent);
    return { success: true, user: newStudent };
  }

  static logout() {
    this.setCurrentUser(null);
  }
}

// --- 3. UYGULAMA ARAYÜZ VE HESAPLAMA MOTORU (APP CONTROLLER) ---
let currentUser = null;
let currentCategoryFilter = 'ALL';

// Sayfa Yüklendiğinde Başlat
document.addEventListener('DOMContentLoaded', () => {
  currentUser = AuthService.getCurrentUser();
  if (currentUser) {
    showMainApp();
  } else {
    showAuthScreen();
  }
});

// Arayüz Değiştirme (Auth <-> Dashboard)
function showAuthScreen() {
  document.getElementById('authScreen').classList.remove('hidden');
  document.getElementById('mainApp').classList.add('hidden');
}

function showMainApp() {
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');

  // Kullanıcı Temasını Yükle
  loadUserTheme();

  // Profil Bilgilerini Doldur
  updateProfileUI();

  // Ana Gösterge Paneli ve İlgili Sekmeleri Yükle
  refreshAllData();
  navigateTo('dashboard');
}

function updateProfileUI() {
  if (!currentUser) return;
  const fullName = `${currentUser.ad} ${currentUser.soyad}`;
  const initials = `${currentUser.ad[0] || ''}${currentUser.soyad[0] || ''}`.toUpperCase();

  document.getElementById('welcomeUserName').textContent = currentUser.ad;
  document.getElementById('sidebarStudentName').textContent = fullName;
  document.getElementById('sidebarStudentEmail').textContent = currentUser.email;
  document.getElementById('headerUserName').textContent = fullName;
  document.getElementById('sidebarAvatar').textContent = initials;
  document.getElementById('headerAvatar').textContent = initials;
}

// --- 4. TEMA VE AYARLAR YÖNETİMİ (AYARLAR TABLOSU İLE SENKRONİZE) ---
function loadUserTheme() {
  if (!currentUser) return;
  const ayar = db.data.AYARLAR.find(a => a.ogrenci_id === currentUser.ogrenci_id);
  const theme = ayar ? ayar.tema : 'light';

  document.documentElement.setAttribute('data-theme', theme);
  const checkbox = document.getElementById('themeToggleCheckbox');
  if (checkbox) {
    checkbox.checked = (theme === 'dark');
  }
}

function toggleTheme() {
  if (!currentUser) return;
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  const checkbox = document.getElementById('themeToggleCheckbox');
  if (checkbox) {
    checkbox.checked = (newTheme === 'dark');
  }

  // AYARLAR Tablosunda Güncelle
  let ayar = db.data.AYARLAR.find(a => a.ogrenci_id === currentUser.ogrenci_id);
  if (ayar) {
    ayar.tema = newTheme;
  } else {
    db.data.AYARLAR.push({
      ayar_id: 'set_' + Date.now(),
      ogrenci_id: currentUser.ogrenci_id,
      tema: newTheme
    });
  }
  db.saveDatabase();
  showToast(`Tema ${newTheme === 'dark' ? 'Karanlık Mod' : 'Aydınlık Mod'} olarak güncellendi.`, 'info');
}

// --- 5. NAVİGASYON VE SEKME YÖNETİMİ ---
function navigateTo(viewName) {
  // Tüm view bölümlerini gizle
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  // İlgili view'ı göster
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  // Menü buton aktifliğini güncelle
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => btn.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.sidebar-nav .nav-item')).find(btn => 
    btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(viewName)
  );
  if (activeBtn) activeBtn.classList.add('active');

  // Üst Başlık Değişimi
  const viewTitles = {
    dashboard: 'Ana Gösterge Paneli',
    cards: 'Haftalık Kartlar & Görev Takibi',
    schedule: 'Haftalık Ders Programı',
    exams: 'Sınav Takibi & Ortalama Hesaplama',
    notes: 'Kişisel Çalışma Notları'
  };
  document.getElementById('currentViewTitle').textContent = viewTitles[viewName] || 'Panel';

  // İlgili Görünüm Verilerini Yenile
  if (viewName === 'dashboard') renderDashboard();
  if (viewName === 'cards') renderWeeklyCards();
  if (viewName === 'schedule') renderSchedule();
  if (viewName === 'exams') renderExams();
  if (viewName === 'notes') renderNotes();

  // Mobilde menüyü kapat
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// --- 6. HESAPLAMA MOTORU: İLERLEME VE ORTALAMALAR (ER TABLOLARI İLİŞKİLERİ) ---
class AcademicCalculator {
  // Genel Görev İlerlemesi ve Yüzdesi
  static getProgress(studentId) {
    const studentTasks = db.data.OGRENCI_GOREV.filter(og => og.ogrenci_id === studentId);
    const total = studentTasks.length;
    if (total === 0) return { total: 0, completed: 0, pending: 0, percentage: 0 };

    const completed = studentTasks.filter(og => og.durum === 'tamamlandi').length;
    const pending = total - completed;
    const percentage = Math.round((completed / total) * 100);

    return { total, completed, pending, percentage };
  }

  // Ders Bazında Görev İlerlemesi
  static getCourseProgress(studentId, courseId) {
    const courseTaskIds = db.data.GOREVLER.filter(g => g.ders_id === courseId).map(g => g.gorev_id);
    const total = courseTaskIds.length;
    if (total === 0) return { total: 0, completed: 0, percentage: 0 };

    const completed = db.data.OGRENCI_GOREV.filter(og => 
      og.ogrenci_id === studentId && 
      courseTaskIds.includes(og.gorev_id) && 
      og.durum === 'tamamlandi'
    ).length;

    const percentage = Math.round((completed / total) * 100);
    return { total, completed, percentage };
  }

  // Ders Ağırlıklı Sınav Ortalaması ve Harf Notu Hesabı
  static getCourseExamAverage(studentId, courseId) {
    const exams = db.data.SINAV_NOTLARI.filter(sn => sn.ogrenci_id === studentId && sn.ders_id === courseId);
    if (exams.length === 0) return { hasExams: false, average: 0, totalWeight: 0, letterGrade: '-', passed: false };

    let totalWeightedScore = 0;
    let totalWeight = 0;

    exams.forEach(ex => {
      totalWeightedScore += (ex.puan * ex.agirlik_yuzdesi);
      totalWeight += ex.agirlik_yuzdesi;
    });

    const average = totalWeight > 0 ? (totalWeightedScore / totalWeight) : 0;
    const letter = this.calculateLetterGrade(average);

    return {
      hasExams: true,
      average: parseFloat(average.toFixed(2)),
      totalWeight,
      letterGrade: letter.grade,
      gpaPoints: letter.points,
      passed: letter.passed
    };
  }

  // Harf Notu ve 4'lük Katsayı Skalası
  static calculateLetterGrade(score) {
    if (score >= 90) return { grade: 'AA', points: 4.0, passed: true };
    if (score >= 85) return { grade: 'BA', points: 3.5, passed: true };
    if (score >= 80) return { grade: 'BB', points: 3.0, passed: true };
    if (score >= 75) return { grade: 'CB', points: 2.5, passed: true };
    if (score >= 70) return { grade: 'CC', points: 2.0, passed: true };
    if (score >= 60) return { grade: 'DC', points: 1.5, passed: true };
    if (score >= 50) return { grade: 'DD', points: 1.0, passed: true };
    return { grade: 'FF', points: 0.0, passed: false };
  }

  // Dönem Genel Not Ortalaması (GNO / GPA)
  static calculateSemesterGPA(studentId) {
    let totalQualityPoints = 0;
    let totalCredits = 0;
    let gradedCoursesCount = 0;

    db.data.DERSLER.forEach(course => {
      const examResult = this.getCourseExamAverage(studentId, course.ders_id);
      if (examResult.hasExams) {
        totalQualityPoints += (examResult.gpaPoints * course.kredi);
        totalCredits += course.kredi;
        gradedCoursesCount++;
      }
    });

    if (totalCredits === 0) return { gpa: '0.00', gradedCoursesCount: 0 };
    const gpa = (totalQualityPoints / totalCredits).toFixed(2);
    return { gpa, gradedCoursesCount };
  }
}

// --- 7. VERİLERİ YENİLEME VE GÖSTERGE PANELİ (DASHBOARD) ---
function refreshAllData() {
  if (!currentUser) return;
  populateModalCourseDropdowns();
  populateFilterDropdowns();
  renderDashboard();
  updateBadges();
}

function updateBadges() {
  if (!currentUser) return;
  const prog = AcademicCalculator.getProgress(currentUser.ogrenci_id);
  const pendingBadge = document.getElementById('pendingTasksBadge');
  if (pendingBadge) pendingBadge.textContent = prog.pending;

  const notesCount = db.data.KISISEL_NOTLAR.filter(n => n.ogrenci_id === currentUser.ogrenci_id).length;
  const notesBadge = document.getElementById('notesCountBadge');
  if (notesBadge) notesBadge.textContent = notesCount;

  const headerPct = document.getElementById('headerProgressPct');
  if (headerPct) headerPct.textContent = `${prog.percentage}%`;
}

function renderDashboard() {
  if (!currentUser) return;
  const studentId = currentUser.ogrenci_id;

  // 1. Genel İlerleme Metrikleri
  const prog = AcademicCalculator.getProgress(studentId);
  document.getElementById('dashOverallProgressBar').style.width = `${prog.percentage}%`;
  document.getElementById('dashProgressPercentageText').textContent = `${prog.percentage}%`;
  document.getElementById('dashCompletedTasksCount').textContent = `${prog.completed}/${prog.total} Görev Tamamlandı`;
  document.getElementById('dashCourseCount').textContent = db.data.DERSLER.length;
  document.getElementById('dashPendingTasksCount').textContent = prog.pending;
  document.getElementById('dashCompletedTasksSummary').textContent = `${prog.completed} görev başarıyla bitti`;

  // 2. Sınavlar ve GNO Metrikleri
  const exams = db.data.SINAV_NOTLARI.filter(sn => sn.ogrenci_id === studentId);
  document.getElementById('dashExamsCount').textContent = exams.length;
  
  const gpaInfo = AcademicCalculator.calculateSemesterGPA(studentId);
  document.getElementById('dashGpaValue').textContent = `${gpaInfo.gpa} / 4.00`;
  
  let avgExamScore = 0;
  if (exams.length > 0) {
    const sum = exams.reduce((acc, curr) => acc + curr.puan, 0);
    avgExamScore = (sum / exams.length).toFixed(1);
  }
  document.getElementById('dashAverageScoreSummary').textContent = `Genel Sınav Ort.: ${avgExamScore}`;

  // 3. Ders Bazlı İlerleme Çubukları
  const courseProgressList = document.getElementById('dashCourseProgressList');
  courseProgressList.innerHTML = '';
  db.data.DERSLER.forEach(course => {
    const cp = AcademicCalculator.getCourseProgress(studentId, course.ders_id);
    const item = document.createElement('div');
    item.className = 'course-progress-item';
    item.innerHTML = `
      <div class="cp-header">
        <div>
          <span class="cp-code">${escapeHtml(course.ders_kodu)}</span>
          <span class="cp-name">${escapeHtml(course.ders_adi)}</span>
        </div>
        <span class="cp-pct">${cp.percentage}%</span>
      </div>
      <div class="cp-bar-wrap">
        <div class="cp-bar-fill" style="width: ${cp.percentage}%"></div>
      </div>
    `;
    courseProgressList.appendChild(item);
  });

  // 4. Bugünün Dersleri
  const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  const todayName = days[new Date().getDay()];
  const displayDay = (todayName === 'Cumartesi' || todayName === 'Pazar') ? 'Pazartesi' : todayName;
  document.getElementById('todayDayName').textContent = displayDay;

  const todayClasses = db.data.DERS_PROGRAMI.filter(dp => dp.gun === displayDay);
  const todayContainer = document.getElementById('todayScheduleList');
  todayContainer.innerHTML = '';

  if (todayClasses.length === 0) {
    todayContainer.innerHTML = `<p class="text-muted" style="font-size: 0.85rem;"><i class="fa-solid fa-mug-hot"></i> Bugün için planlanmış dersiniz bulunmuyor.</p>`;
  } else {
    todayClasses.forEach(item => {
      const course = db.data.DERSLER.find(c => c.ders_id === item.ders_id);
      const row = document.createElement('div');
      row.className = 'schedule-mini-item';
      row.innerHTML = `
        <span class="s-time">${escapeHtml(item.baslangic_saati)} - ${escapeHtml(item.bitis_saati)}</span>
        <div class="s-details">
          <h4>${escapeHtml(course ? course.ders_adi : 'Bilinmeyen Ders')}</h4>
          <span><i class="fa-solid fa-location-dot"></i> ${escapeHtml(item.derslik)} (${escapeHtml(course ? course.ders_kodu : '')})</span>
        </div>
      `;
      todayContainer.appendChild(row);
    });
  }

  // 5. Öncelikli Görevler (Dashboard Hızlı Tamamlama)
  const priorityList = document.getElementById('dashPriorityTasksList');
  priorityList.innerHTML = '';

  const studentTaskMap = {};
  db.data.OGRENCI_GOREV.filter(og => og.ogrenci_id === studentId).forEach(og => {
    studentTaskMap[og.gorev_id] = og.durum;
  });

  const allTasks = db.data.GOREVLER.slice(0, 5); // İlk 5 görevi listele
  allTasks.forEach(task => {
    const course = db.data.DERSLER.find(c => c.ders_id === task.ders_id);
    const isCompleted = studentTaskMap[task.gorev_id] === 'tamamlandi';

    const row = document.createElement('div');
    row.className = `task-item-row ${isCompleted ? 'completed' : ''}`;
    row.innerHTML = `
      <div class="task-item-left">
        <input type="checkbox" class="task-checkbox" ${isCompleted ? 'checked' : ''} aria-label="${escapeHtml(task.baslik)}" onchange="toggleTaskStatus('${task.gorev_id}')">
        <div class="task-label-info">
          <span class="task-title-text">${escapeHtml(task.baslik)}</span>
          <div class="task-meta-text">
            <span><i class="fa-solid fa-book"></i> ${escapeHtml(course ? course.ders_kodu : '')}</span>
            <span class="badge-tag ${getTaskTypeClass(task.tur)}">${escapeHtml(task.tur)}</span>
          </div>
        </div>
      </div>
      <div>
        <span class="badge ${isCompleted ? 'badge-primary' : 'badge-secondary'}">
          ${isCompleted ? 'Tamamlandı' : 'Devam Ediyor'}
        </span>
      </div>
    `;
    priorityList.appendChild(row);
  });
}

// Görev Türü Badge Sınıfı
function getTaskTypeClass(type) {
  switch (type) {
    case 'Okuma': return 'reading';
    case 'Ödev': return 'homework';
    case 'Quiz': return 'quiz';
    case 'Proje': return 'project';
    case 'Laboratuvar': return 'lab';
    default: return 'reading';
  }
}

// --- 8. HAFTALIK DERS VE ÖĞRENME KARTLARI (FİLTRELEME & GÖREV TOGGLE) ---
function renderWeeklyCards() {
  if (!currentUser) return;
  const studentId = currentUser.ogrenci_id;
  const container = document.getElementById('weeklyCardsContainer');
  container.innerHTML = '';

  const courseFilter = document.getElementById('filterCourseSelect').value;
  const weekFilter = document.getElementById('filterWeekSelect').value;
  const statusFilter = document.getElementById('filterTaskStatus').value;

  // Öğrencinin görev durumları haritası
  const studentTaskMap = {};
  db.data.OGRENCI_GOREV.filter(og => og.ogrenci_id === studentId).forEach(og => {
    studentTaskMap[og.gorev_id] = og.durum;
  });

  // Filtreleri uygula
  let filteredCards = db.data.HAFTALIK_KARTLAR.filter(card => {
    if (courseFilter !== 'ALL' && card.ders_id !== courseFilter) return false;
    if (weekFilter !== 'ALL' && card.hafta_no.toString() !== weekFilter) return false;
    return true;
  });

  if (filteredCards.length === 0) {
    container.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; padding: 3rem; text-align: center;">
        <i class="fa-solid fa-filter-circle-xmark" style="font-size: 2.5rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <h4 style="font-weight: 700;">Seçilen kriterlere uygun öğrenme kartı bulunamadı.</h4>
        <p class="text-muted">Filtreleri temizleyebilir veya yeni bir öğrenme kartı oluşturabilirsiniz.</p>
      </div>
    `;
    return;
  }

  filteredCards.forEach(card => {
    const course = db.data.DERSLER.find(c => c.ders_id === card.ders_id);
    let tasks = db.data.GOREVLER.filter(g => g.kart_id === card.kart_id);

    // Görev durum filtresi
    if (statusFilter === 'pending') {
      tasks = tasks.filter(t => studentTaskMap[t.gorev_id] !== 'tamamlandi');
    } else if (statusFilter === 'completed') {
      tasks = tasks.filter(t => studentTaskMap[t.gorev_id] === 'tamamlandi');
    }

    // Kart Tamamlanma Yüzdesi
    const allCardTasks = db.data.GOREVLER.filter(g => g.kart_id === card.kart_id);
    let cardPct = 0;
    if (allCardTasks.length > 0) {
      const completedCount = allCardTasks.filter(t => studentTaskMap[t.gorev_id] === 'tamamlandi').length;
      cardPct = Math.round((completedCount / allCardTasks.length) * 100);
    }

    const cardElement = document.createElement('div');
    cardElement.className = 'weekly-card';
    cardElement.innerHTML = `
      <div class="weekly-card-header">
        <div class="wc-course-tag">
          <span class="wc-course-code">${escapeHtml(course ? course.ders_kodu : '')}</span>
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">${escapeHtml(course ? course.ders_adi : '')}</span>
        </div>
        <span class="wc-week-badge">${card.hafta_no}. Hafta</span>
      </div>

      <div class="weekly-card-body">
        <h3 class="wc-title">${escapeHtml(card.baslik)}</h3>
        <p class="wc-desc">${escapeHtml(card.icerik)}</p>

        <div class="wc-tasks-section">
          <div class="wc-tasks-heading">
            <span>Bağlı Görevler (${tasks.length})</span>
            <span>${cardPct}% Bitti</span>
          </div>
          <div class="wc-task-list">
            ${tasks.length === 0 ? '<p class="text-muted" style="font-size: 0.78rem;">Bu karta ait görev bulunmuyor.</p>' : ''}
            ${tasks.map(task => {
              const isChecked = studentTaskMap[task.gorev_id] === 'tamamlandi';
              return `
                <div class="task-item-row ${isChecked ? 'completed' : ''}" style="padding: 0.55rem 0.75rem;">
                  <div class="task-item-left">
                    <input type="checkbox" class="task-checkbox" ${isChecked ? 'checked' : ''} aria-label="${escapeHtml(task.baslik)}" onchange="toggleTaskStatus('${task.gorev_id}')">
                    <div class="task-label-info">
                      <span class="task-title-text" style="font-size: 0.82rem;">${escapeHtml(task.baslik)}</span>
                    </div>
                  </div>
                  <span class="badge-tag ${getTaskTypeClass(task.tur)}">${escapeHtml(task.tur)}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <div class="weekly-card-footer">
        <div class="wc-progress-status">
          <i class="fa-solid fa-bars-progress text-primary"></i>
          <span>İlerleme Çubuğu:</span>
        </div>
        <div style="width: 120px;">
          <div class="cp-bar-wrap">
            <div class="cp-bar-fill" style="width: ${cardPct}%"></div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(cardElement);
  });
}

// Görev Durumu Değiştirme (Checkbox Toggle - Anlık Güncelleme)
function toggleTaskStatus(taskId) {
  if (!currentUser) return;
  const studentId = currentUser.ogrenci_id;

  let record = db.data.OGRENCI_GOREV.find(og => og.ogrenci_id === studentId && og.gorev_id === taskId);
  if (!record) {
    record = {
      ogrenci_id: studentId,
      gorev_id: taskId,
      durum: 'tamamlandi'
    };
    db.data.OGRENCI_GOREV.push(record);
  } else {
    record.durum = (record.durum === 'tamamlandi') ? 'devam_ediyor' : 'tamamlandi';
  }

  db.saveDatabase();
  
  // Arayüzleri Anında Yenile
  updateBadges();
  renderDashboard();
  renderWeeklyCards();

  const isDone = record.durum === 'tamamlandi';
  showToast(isDone ? '🎉 Görev tamamlandı! İlerleme yüzdeniz arttı.' : 'Görev devam ediyor olarak işaretlendi.', isDone ? 'success' : 'info');
}

// --- 9. HAFTALIK DERS PROGRAMI (TAKVİM MODÜLÜ) ---
function renderSchedule() {
  const grid = document.getElementById('scheduleDaysGrid');
  grid.innerHTML = '';

  const weekDays = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];

  weekDays.forEach(day => {
    const dayCol = document.createElement('div');
    dayCol.className = 'schedule-day-column';

    const dayClasses = db.data.DERS_PROGRAMI.filter(dp => dp.gun === day);

    dayCol.innerHTML = `
      <div class="day-column-header">
        <span>${day}</span>
        <span class="day-badge">${dayClasses.length} Ders</span>
      </div>
      <div class="day-courses-list">
        ${dayClasses.length === 0 ? '<div class="empty-day-state"><i class="fa-regular fa-calendar-xmark"></i><br>Ders yok</div>' : ''}
      </div>
    `;

    const list = dayCol.querySelector('.day-courses-list');
    dayClasses.forEach(item => {
      const course = db.data.DERSLER.find(c => c.ders_id === item.ders_id);
      const card = document.createElement('div');
      card.className = 'schedule-card';
      card.innerHTML = `
        <div class="sc-time"><i class="fa-regular fa-clock"></i> ${escapeHtml(item.baslangic_saati)} - ${escapeHtml(item.bitis_saati)}</div>
        <div class="sc-title">${escapeHtml(course ? course.ders_adi : 'Ders')}</div>
        <div class="sc-code">${escapeHtml(course ? course.ders_kodu : '')} (${course ? course.kredi : 0} AKTS)</div>
        <div class="sc-room"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(item.derslik)}</div>
      `;
      list.appendChild(card);
    });

    grid.appendChild(dayCol);
  });
}

// --- 10. SINAV TAKİBİ VE ORTALAMA HESAPLAMA MODÜLÜ ---
function renderExams() {
  if (!currentUser) return;
  const studentId = currentUser.ogrenci_id;
  const container = document.getElementById('courseExamCardsContainer');
  container.innerHTML = '';

  // Genel Başarı Kartı (GNO / GPA)
  const gpaData = AcademicCalculator.calculateSemesterGPA(studentId);
  document.getElementById('examGpaDisplay').textContent = gpaData.gpa;
  document.getElementById('totalExamPill').textContent = db.data.SINAV_NOTLARI.filter(sn => sn.ogrenci_id === studentId).length;

  let passedCount = 0;
  let failedCount = 0;

  db.data.DERSLER.forEach(course => {
    const examStats = AcademicCalculator.getCourseExamAverage(studentId, course.ders_id);
    if (examStats.hasExams) {
      if (examStats.passed) passedCount++;
      else failedCount++;
    }

    const courseExams = db.data.SINAV_NOTLARI.filter(sn => sn.ogrenci_id === studentId && sn.ders_id === course.ders_id);

    const box = document.createElement('div');
    box.className = 'course-exam-box';
    box.innerHTML = `
      <div class="ce-header">
        <div class="ce-title-group">
          <h4>${escapeHtml(course.ders_kodu)} - ${escapeHtml(course.ders_adi)}</h4>
          <span>Kredi: ${course.kredi} AKTS | Toplam Değerlendirme Ağırlığı: %${examStats.totalWeight}</span>
        </div>
        <div class="ce-average-badge">
          <div class="ce-avg-pill">
            Ağırlıklı Not: <strong>${examStats.hasExams ? examStats.average : '-'}</strong>
          </div>
          <div class="letter-grade-badge ${examStats.passed ? 'passed' : 'failed'}">
            Harf: ${examStats.letterGrade} (${examStats.hasExams ? (examStats.passed ? 'Geçti' : 'Kaldı') : 'Girilmedi'})
          </div>
        </div>
      </div>

      <div style="overflow-x: auto;">
        <table class="ce-table">
          <thead>
            <tr>
              <th>Sınav / Değerlendirme</th>
              <th>Puan (0-100)</th>
              <th>Ağırlık Yüzdesi</th>
              <th>Ağırlıklı Katkı</th>
              <th style="text-align: right;">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            ${courseExams.length === 0 ? '<tr><td colspan="5" class="text-muted" style="text-align: center; padding: 1.5rem;">Bu derse henüz sınav veya değerlendirme notu girilmedi.</td></tr>' : ''}
            ${courseExams.map(ex => {
              const contribution = ((ex.puan * ex.agirlik_yuzdesi) / 100).toFixed(1);
              return `
                <tr>
                  <td><strong>${escapeHtml(ex.sinav_turu)}</strong></td>
                  <td>${ex.puan}</td>
                  <td>%${ex.agirlik_yuzdesi}</td>
                  <td>+${contribution} puan</td>
                  <td style="text-align: right;">
                    <button class="action-icon-btn" onclick="deleteExam('${ex.not_id}')" title="Sınav Notunu Sil">
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
    container.appendChild(box);
  });

  document.getElementById('passedCoursesPill').textContent = passedCount;
  document.getElementById('failedCoursesPill').textContent = failedCount;
}

// Sınav Notu Silme
function deleteExam(notId) {
  if (!confirm('Bu sınav notunu silmek istediğinize emin misiniz?')) return;
  db.data.SINAV_NOTLARI = db.data.SINAV_NOTLARI.filter(sn => sn.not_id !== notId);
  db.saveDatabase();
  renderExams();
  renderDashboard();
  showToast('Sınav notu başarıyla silindi.', 'info');
}

// --- 11. KİŞİSEL ÇALIŞMA NOTLARI MODÜLÜ ---
function filterNotesCategory(cat) {
  currentCategoryFilter = cat;
  document.querySelectorAll('#noteCategoryTabs .cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === (cat === 'ALL' ? 'Tümü' : cat));
  });
  renderNotes();
}

function renderNotes() {
  if (!currentUser) return;
  const studentId = currentUser.ogrenci_id;
  const container = document.getElementById('notesContainer');
  container.innerHTML = '';

  const searchText = (document.getElementById('noteSearchInput').value || '').toLowerCase();

  let notes = db.data.KISISEL_NOTLAR.filter(n => n.ogrenci_id === studentId);

  // Kategori Filtresi
  if (currentCategoryFilter !== 'ALL') {
    notes = notes.filter(n => n.kategori === currentCategoryFilter);
  }

  // Arama Filtresi
  if (searchText) {
    notes = notes.filter(n => 
      n.baslik.toLowerCase().includes(searchText) || 
      n.icerik.toLowerCase().includes(searchText)
    );
  }

  if (notes.length === 0) {
    container.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; padding: 3rem; text-align: center;">
        <i class="fa-regular fa-note-sticky" style="font-size: 2.5rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <h4 style="font-weight: 700;">Henüz kayıtlı kişisel not bulunmuyor.</h4>
        <p class="text-muted">Yukarıdaki "Yeni Not Oluştur" butonunu kullanarak çalışma notlarınızı ekleyebilirsiniz.</p>
      </div>
    `;
    return;
  }

  notes.forEach(note => {
    const card = document.createElement('div');
    card.className = 'note-card';
    card.innerHTML = `
      <div>
        <div class="note-top">
          <span class="note-cat-tag">${escapeHtml(note.kategori)}</span>
          <button class="action-icon-btn" onclick="deleteNote('${note.not_id}')" title="Notu Sil">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
        <h4>${escapeHtml(note.baslik)}</h4>
        <p>${escapeHtml(note.icerik)}</p>
      </div>
      <div class="note-bottom">
        <span><i class="fa-regular fa-calendar"></i> ${escapeHtml(note.tarih)}</span>
        <span><i class="fa-solid fa-user"></i> Öğrenci Notu</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function deleteNote(noteId) {
  if (!confirm('Bu notu silmek istediğinize emin misiniz?')) return;
  db.data.KISISEL_NOTLAR = db.data.KISISEL_NOTLAR.filter(n => n.not_id !== noteId);
  db.saveDatabase();
  renderNotes();
  updateBadges();
  showToast('Kişisel not silindi.', 'info');
}

// --- 12. MODAL DİYALOG VE FORM İŞLEMLERİ ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}

// Modal Dropdown Doldurma Yardımcıları
function populateModalCourseDropdowns() {
  const taskCourseSelect = document.getElementById('taskCourseId');
  const examCourseSelect = document.getElementById('examCourseId');

  if (taskCourseSelect) {
    taskCourseSelect.innerHTML = db.data.DERSLER.map(c => 
      `<option value="${c.ders_id}">${escapeHtml(c.ders_kodu)} - ${escapeHtml(c.ders_adi)}</option>`
    ).join('');
  }

  if (examCourseSelect) {
    examCourseSelect.innerHTML = db.data.DERSLER.map(c => 
      `<option value="${c.ders_id}">${escapeHtml(c.ders_kodu)} - ${escapeHtml(c.ders_adi)}</option>`
    ).join('');
  }
}

function populateFilterDropdowns() {
  const filterSelect = document.getElementById('filterCourseSelect');
  if (filterSelect) {
    filterSelect.innerHTML = `<option value="ALL">Tüm Dersler</option>` + 
      db.data.DERSLER.map(c => `<option value="${c.ders_id}">${escapeHtml(c.ders_kodu)} - ${escapeHtml(c.ders_adi)}</option>`).join('');
  }
}

// Form: Yeni Görev ve Kart Ekle
function handleCreateTask(e) {
  e.preventDefault();
  if (!currentUser) return;

  const ders_id = document.getElementById('taskCourseId').value;
  const hafta_no = parseInt(document.getElementById('taskWeekNo').value, 10);
  const tur = document.getElementById('taskType').value;
  const baslik = document.getElementById('taskTitle').value.trim();
  const icerik = document.getElementById('taskContent').value.trim() || 'Açıklama girilmedi.';

  // İlgili ders ve hafta için mevcut kart var mı kontrol et
  let card = db.data.HAFTALIK_KARTLAR.find(k => k.ders_id === ders_id && k.hafta_no === hafta_no);
  if (!card) {
    card = {
      kart_id: 'k_' + Date.now(),
      ders_id,
      hafta_no,
      baslik: `${hafta_no}. Hafta Çalışma Kartı`,
      icerik
    };
    db.data.HAFTALIK_KARTLAR.push(card);
  }

  // Yeni Görev Oluştur
  const newTaskId = 'g_' + Date.now();
  db.data.GOREVLER.push({
    gorev_id: newTaskId,
    kart_id: card.kart_id,
    ders_id,
    baslik,
    tur
  });

  // Öğrenci Görev Tablosuna Ekle
  db.data.OGRENCI_GOREV.push({
    ogrenci_id: currentUser.ogrenci_id,
    gorev_id: newTaskId,
    durum: 'devam_ediyor'
  });

  db.saveDatabase();
  closeModal('modalNewTask');
  document.getElementById('formNewTask').reset();

  refreshAllData();
  renderWeeklyCards();
  showToast('Yeni görev ve öğrenme kartı başarıyla eklendi!', 'success');
}

// Form: Yeni Sınav Notu Ekle
function handleCreateExam(e) {
  e.preventDefault();
  if (!currentUser) return;

  const ders_id = document.getElementById('examCourseId').value;
  const sinav_turu = document.getElementById('examType').value;
  const puan = parseFloat(document.getElementById('examScore').value);
  const agirlik_yuzdesi = parseFloat(document.getElementById('examWeight').value);

  // Aynı derste aynı sınav türü varsa uyar veya güncelle
  const existingExam = db.data.SINAV_NOTLARI.find(sn => 
    sn.ogrenci_id === currentUser.ogrenci_id && 
    sn.ders_id === ders_id && 
    sn.sinav_turu === sinav_turu
  );

  if (existingExam) {
    existingExam.puan = puan;
    existingExam.agirlik_yuzdesi = agirlik_yuzdesi;
    showToast(`${sinav_turu} notu güncellendi!`, 'info');
  } else {
    db.data.SINAV_NOTLARI.push({
      not_id: 'sn_' + Date.now(),
      ogrenci_id: currentUser.ogrenci_id,
      ders_id,
      sinav_turu,
      puan,
      agirlik_yuzdesi
    });
    showToast('Yeni sınav notu başarıyla kaydedildi!', 'success');
  }

  db.saveDatabase();
  closeModal('modalNewExam');
  document.getElementById('formNewExam').reset();

  renderExams();
  renderDashboard();
}

// Form: Yeni Kişisel Not Ekle
function handleCreateNote(e) {
  e.preventDefault();
  if (!currentUser) return;

  const kategori = document.getElementById('noteCategory').value;
  const baslik = document.getElementById('noteTitle').value.trim();
  const icerik = document.getElementById('noteContent').value.trim();

  const now = new Date();
  const dateStr = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;

  db.data.KISISEL_NOTLAR.unshift({
    not_id: 'not_' + Date.now(),
    ogrenci_id: currentUser.ogrenci_id,
    baslik,
    icerik,
    kategori,
    tarih: dateStr
  });

  db.saveDatabase();
  closeModal('modalNewNote');
  document.getElementById('formNewNote').reset();

  renderNotes();
  updateBadges();
  showToast('Kişisel çalışma notunuz kaydedildi!', 'success');
}

// Form: Yeni Ders ve Program Ekle
function handleCreateCourse(e) {
  e.preventDefault();

  const ders_kodu = document.getElementById('courseCode').value.trim().toUpperCase();
  const ders_adi = document.getElementById('courseName').value.trim();
  const kredi = parseInt(document.getElementById('courseCredit').value, 10);
  const gun = document.getElementById('courseDay').value;
  const derslik = document.getElementById('courseRoom').value.trim();
  const baslangic_saati = document.getElementById('courseStart').value;
  const bitis_saati = document.getElementById('courseEnd').value;

  const newCourseId = 'd_' + Date.now();
  db.data.DERSLER.push({
    ders_id: newCourseId,
    ders_kodu,
    ders_adi,
    kredi
  });

  db.data.DERS_PROGRAMI.push({
    program_id: 'prg_' + Date.now(),
    ders_id: newCourseId,
    gun,
    baslangic_saati,
    bitis_saati,
    derslik
  });

  db.saveDatabase();
  closeModal('modalNewCourse');
  document.getElementById('formNewCourse').reset();

  refreshAllData();
  renderSchedule();
  showToast(`"${ders_kodu}" dersi ve programı sisteme eklendi!`, 'success');
}

// --- 13. AUTH EKRANI İŞLEMLERİ VE SEKME GEÇİŞLERİ ---
function switchAuthTab(type) {
  const loginForm = document.getElementById('loginForm');
  const regForm = document.getElementById('registerForm');
  const tabLogin = document.getElementById('tabLoginBtn');
  const tabReg = document.getElementById('tabRegisterBtn');
  const authTitle = document.getElementById('authTitle');
  const authSub = document.getElementById('authSubtitle');

  if (type === 'login') {
    loginForm.classList.remove('hidden');
    regForm.classList.add('hidden');
    tabLogin.classList.add('active');
    tabReg.classList.remove('active');
    authTitle.textContent = 'Öğrenci Girişi';
    authSub.textContent = 'Lütfen hesabınıza giriş yaparak derslerinizi takip edin.';
  } else {
    loginForm.classList.add('hidden');
    regForm.classList.remove('hidden');
    tabLogin.classList.remove('active');
    tabReg.classList.add('active');
    authTitle.textContent = 'Yeni Öğrenci Kaydı';
    authSub.textContent = 'EduTrack platformuna katılarak ders sürecinizi hemen planlayın.';
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const result = AuthService.login(email, password);
  if (result.success) {
    currentUser = result.user;
    showMainApp();
    showToast(`Hoş geldin, ${currentUser.ad}! Başarılı bir dönem dileriz.`, 'success');
  } else {
    showToast(result.message, 'danger');
  }
}

function handleRegister(e) {
  e.preventDefault();
  const ad = document.getElementById('regAd').value;
  const soyad = document.getElementById('regSoyad').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  const result = AuthService.register(ad, soyad, email, password);
  if (result.success) {
    currentUser = result.user;
    showMainApp();
    showToast(`Kaydınız tamamlandı. Hoş geldin, ${currentUser.ad}!`, 'success');
  } else {
    showToast(result.message, 'danger');
  }
}

function loginDemoUser() {
  const demo = db.data.OGRENCI.find(o => o.email === 'demo@edutrack.edu.tr');
  if (demo) {
    AuthService.setCurrentUser(demo);
    currentUser = demo;
    showMainApp();
    showToast('Demo öğrenci oturumu başarıyla açıldı!', 'success');
  }
}

function handleLogout() {
  if (confirm('Oturumunuzu kapatmak istediğinize emin misiniz?')) {
    AuthService.logout();
    currentUser = null;
    showAuthScreen();
    showToast('Güvenli bir şekilde çıkış yapıldı.', 'info');
  }
}

function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}

// --- 14. TOAST VE YARDIMCI GÖRSEL GERİBİLDİRİM SİSTEMİ ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconMap = {
    success: 'fa-solid fa-circle-check',
    danger: 'fa-solid fa-circle-exclamation',
    info: 'fa-solid fa-circle-info'
  };

  toast.innerHTML = `
    <i class="${iconMap[type] || iconMap.info}"></i>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3200);
}

// XSS Koruması İçin HTML Kaçış Fonksiyonu
function escapeHtml(text) {
  if (!text) return '';
  return text
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
