/**
 * ==========================================================================
 * ETKİLEŞİMLİ DERS DENEYİMİ PANOSU (INTERACTIVE COURSE DASHBOARD)
 * ==========================================================================
 * Mimari: Clean Code, ES6+ Standartları, Modüler ve Ayrık Fonksiyonel Yapı
 * Özellikler:
 *  - 1. Hafta: Semantik Veri Modeli ve Dinamik DOM Üretimi
 *  - 2. Hafta: Kart Bileşenleri, Accordion Mekanizması ve Tema Yönetimi (Dark/Light)
 *  - 3. Hafta: Canlı Arama, Çok Kriterli Filtreleme, localStorage Kalıcılığı & İlerleme Takibi
 */

// Global Değişken Kapsüllemesi (IIFE Pattern)
(function () {
    'use strict';

    /* ==========================================================================
       1. MOCK VERİ YAPISI (JSON BENZERİ JAVASCRIPT VERİ MODELİ)
       En az 5 haftalık zengin ders içeriği, öğrenme hedefleri ve görevler.
       ========================================================================== */
    const COURSE_DATA = [
        {
            id: 1,
            weekNumber: 1,
            title: "Web Temelleri ve Modern Semantik HTML5",
            description: "Web standartları, semantik etiketleme mimarisi, form erişilebilirliği (a11y) ve DOM ağaç yapısı.",
            objectives: [
                "HTML5 semantik etiketlerinin (header, main, section, article, footer) doğru kullanımını öğrenmek.",
                "Web İçeriği Erişilebilirlik Yönergeleri (WCAG) ve ARIA rollerine uygun formlar tasarlamak.",
                "Tarayıcı render motorunun DOM ağacını nasıl oluşturduğunu kavramak.",
                "Modern meta etiketleri ve temel SEO pratiklerini uygulamak."
            ],
            tasks: [
                {
                    id: "task-1-1",
                    title: "Semantik HTML5 İskeletinin Kurgulanması",
                    description: "Ders panosu için header, main, section ve footer etiketleri içeren erişilebilir semantik şablon oluşturun.",
                    dueDate: "12 Mart 2026",
                    status: "completed",
                    category: "Kodlama"
                },
                {
                    id: "task-1-2",
                    title: "Erişilebilirlik (ARIA & Form) Doğrulaması",
                    description: "Ekran okuyucu uyumluluğu için tüm form kontrollerine aria-label ve anlamlı etiketler (label) tanımlayın.",
                    dueDate: "14 Mart 2026",
                    status: "completed",
                    category: "Laboratuvar"
                },
                {
                    id: "task-1-3",
                    title: "W3C Web Standartları ve SEO Okuması",
                    description: "W3C kılavuzundaki semantik etiketleme farklarını ve tarayıcı uyumluluk standartlarını inceleyin.",
                    dueDate: "15 Mart 2026",
                    status: "completed",
                    category: "Okuma"
                }
            ]
        },
        {
            id: 2,
            weekNumber: 2,
            title: "Modern CSS Mimarisi ve Responsive Tasarım",
            description: "CSS Değişkenleri (Variables), Flexbox, CSS Grid sistemleri ve mobil öncelikli responsive yaklaşım.",
            objectives: [
                "CSS Custom Properties ile aydınlık/karanlık tema (Light/Dark Mode) renk paleti tanımlamak.",
                "CSS Grid ve Flexbox ile esnek, kart tabanlı dashboard düzeni oluşturmak.",
                "Mobil, tablet ve masaüstü için optimize edilmiş CSS Media Queries yazmak.",
                "BEM veya atomik CSS tasarım disiplinlerine uygun clean code yazımı gerçekleştirmek."
            ],
            tasks: [
                {
                    id: "task-2-1",
                    title: "CSS Custom Properties ile Tema Değişkenlerinin Hazırlanması",
                    description: ":root ve [data-theme='dark'] seçicileri altında renk, gölge ve boşluk değişkenlerini tanımlayın.",
                    dueDate: "19 Mart 2026",
                    status: "completed",
                    category: "Kodlama"
                },
                {
                    id: "task-2-2",
                    title: "CSS Grid ile İstatistik ve Kart Izgarası Tasarımı",
                    description: "Farklı ekran boyutlarında otomatik kolon kırılımları yapan esnek bir Grid sistemi kodlayın.",
                    dueDate: "21 Mart 2026",
                    status: "in-progress",
                    category: "Ödev"
                },
                {
                    id: "task-2-3",
                    title: "Mobil Uyumlu Hamburger Menü ve Toolbar Düzeni",
                    description: "Ekran genişliği 768px altına düştüğünde arama ve filtreleme araç çubuğunu dikey akışa adapte edin.",
                    dueDate: "22 Mart 2026",
                    status: "in-progress",
                    category: "Laboratuvar"
                }
            ]
        },
        {
            id: 3,
            weekNumber: 3,
            title: "Modern JavaScript ES6+ ve DOM Manipülasyonu",
            description: "Dinamik eleman üretimi, Event Delegation, Dizi Metotları (filter, map, reduce) ve anlık filtreleme.",
            objectives: [
                "Modern ES6+ sözdizimini (Arrow Functions, Destructuring, Template Literals) etkin kullanmak.",
                "Dizi metotları (filter, map, reduce, find) ile dinamik veri sorguları ve hesaplamalar yapmak.",
                "Event Delegation mekanizması ile tek bir dinleyici üzerinden performanslı tıklama yönetimi sağlamak.",
                "Kullanıcı girdilerine anında yanıt veren (real-time) arama motoru geliştirmek."
            ],
            tasks: [
                {
                    id: "task-3-1",
                    title: "Dinamik Arama ve Çoklu Filtreleme Motoru",
                    description: "Arama kutusuna yazılan kelimeye ve seçilen duruma göre görev listesini anlık filtreleyen fonksiyonu yazın.",
                    dueDate: "26 Mart 2026",
                    status: "in-progress",
                    category: "Kodlama"
                },
                {
                    id: "task-3-2",
                    title: "Dizi Metotları ile İlerleme Yüzdesi Hesaplama",
                    description: "Array.reduce ve filter metotları ile toplam görev ve tamamlanan oranını matematiksel olarak hesaplayın.",
                    dueDate: "28 Mart 2026",
                    status: "in-progress",
                    category: "Ödev"
                },
                {
                    id: "task-3-3",
                    title: "Accordion Kart Aç/Kapa Etkileşimi",
                    description: "Haftalık modül başlıklarına tıklandığında hedefleri ve görevleri yumuşakça açıp kapatan mekanizmayı kurun.",
                    dueDate: "29 Mart 2026",
                    status: "in-progress",
                    category: "Laboratuvar"
                }
            ]
        },
        {
            id: 4,
            weekNumber: 4,
            title: "Veri Kalıcılığı (localStorage) ve Asenkron JavaScript",
            description: "localStorage durum yönetimi, JSON serileştirme, async/await ve veri hata yönetimi.",
            objectives: [
                "Tarayıcı yerel hafızası (localStorage API) ile kullanıcı tercihlerini ve görev durumlarını kalıcı hale getirmek.",
                "JSON.stringify ve JSON.parse kullanarak güvenli veri saklama ve okuma işlemleri yürütmek.",
                "Sayfa yeniden yüklendiğinde (refresh) kullanıcı verilerini kayıpsız olarak restore etmek.",
                "Asenkron mock veri akışlarını simüle etmek ve try/catch ile hata toleransı sağlamak."
            ],
            tasks: [
                {
                    id: "task-4-1",
                    title: "localStorage Görev Durumu Senkronizasyonu",
                    description: "Her checkbox tıklamasında güncellenen durumu localStorage içerisindeki state nesnesine kaydedin.",
                    dueDate: "02 Nisan 2026",
                    status: "in-progress",
                    category: "Kodlama"
                },
                {
                    id: "task-4-2",
                    title: "Karanlık Tema Tercihinin Kalıcı Yapılması",
                    description: "Kullanıcının seçtiği temanın sayfa yenilendiğinde veya yeni sekmede açıldığında hatırlanmasını sağlayın.",
                    dueDate: "04 Nisan 2026",
                    status: "in-progress",
                    category: "Ödev"
                },
                {
                    id: "task-4-3",
                    title: "İlerlemeyi Sıfırla (Reset) Fonksiyonu",
                    description: "Kullanıcı onayından sonra tüm görevleri sıfırlayan ve depolamayı temizleyen güvenli fonksiyonu geliştirin.",
                    dueDate: "05 Nisan 2026",
                    status: "in-progress",
                    category: "Laboratuvar"
                }
            ]
        },
        {
            id: 5,
            weekNumber: 5,
            title: "Proje Entegrasyonu, Test ve Performans Optimizasyonu",
            description: "Lighthouse audit testleri, clean code prensipleri, refactoring ve sunum hazırlığı.",
            objectives: [
                "Lighthouse ile Erişilebilirlik, SEO ve Performans puanlarını 95+ seviyesine yükseltmek.",
                "Clean Code ilkelerine göre kod tekrarını (DRY) önlemek ve fonksiyonları tek sorumluluk (SRP) ile yapılandırmak.",
                "Mikro etkileşimler ve animasyonlar ile kullanıcı deneyimini (UX) zenginleştirmek.",
                "Ekip içi görev dağılımı doğrultusunda sunum ve dokümantasyon sürecini tamamlamak."
            ],
            tasks: [
                {
                    id: "task-5-1",
                    title: "Lighthouse Audit ve Erişilebilirlik Testi",
                    description: "Chrome DevTools ile kontrast oranlarını, klavye erişilebilirliğini ve sayfa hızını analiz edin.",
                    dueDate: "09 Nisan 2026",
                    status: "in-progress",
                    category: "Laboratuvar"
                },
                {
                    id: "task-5-2",
                    title: "Clean Code ve Modüler Refactoring",
                    description: "Script ve CSS dosyalarını kod standartlarına göre denetleyin; gereksiz seçicileri optimize edin.",
                    dueDate: "11 Nisan 2026",
                    status: "in-progress",
                    category: "Proje"
                },
                {
                    id: "task-5-3",
                    title: "Sunum ve Canlı Demo Hazırlığı",
                    description: "Ekip üyelerinin görev dağılımına göre anlatacağı 1., 2. ve 3. hafta adımlarını prova edin.",
                    dueDate: "12 Nisan 2026",
                    status: "in-progress",
                    category: "Proje"
                }
            ]
        }
    ];

    /* ==========================================================================
       2. DEPOLAMA YÖNETİCİSİ (STORAGE MANAGER)
       localStorage API soyutlaması: Görev durumları ve Tema tercihi
       ========================================================================== */
    const StorageManager = {
        STORAGE_KEYS: {
            TASK_STATES: 'edudashboard_task_states_v1',
            THEME: 'edudashboard_theme_v1',
            COLLAPSED_WEEKS: 'edudashboard_collapsed_weeks_v1'
        },

        // Görev durumlarını getir
        getTaskStates() {
            try {
                const data = localStorage.getItem(this.STORAGE_KEYS.TASK_STATES);
                return data ? JSON.parse(data) : {};
            } catch (error) {
                console.error("localStorage görev durumları okunurken hata:", error);
                return {};
            }
        },

        // Tek bir görevin durumunu kaydet
        saveTaskState(taskId, status) {
            try {
                const states = this.getTaskStates();
                states[taskId] = status;
                localStorage.setItem(this.STORAGE_KEYS.TASK_STATES, JSON.stringify(states));
            } catch (error) {
                console.error("localStorage görev durumu kaydedilirken hata:", error);
            }
        },

        // Tema tercihini getir
        getTheme() {
            try {
                return localStorage.getItem(this.STORAGE_KEYS.THEME) || 'light';
            } catch (error) {
                return 'light';
            }
        },

        // Tema tercihini kaydet
        saveTheme(theme) {
            try {
                localStorage.setItem(this.STORAGE_KEYS.THEME, theme);
            } catch (error) {
                console.error("localStorage tema kaydedilirken hata:", error);
            }
        },

        // Tüm görev durumlarını sıfırla
        clearAllTaskStates() {
            try {
                localStorage.removeItem(this.STORAGE_KEYS.TASK_STATES);
            } catch (error) {
                console.error("localStorage sıfırlama hatası:", error);
            }
        }
    };

    /* ==========================================================================
       3. UYGULAMA DURUMU (APPLICATION STATE)
       ========================================================================== */
    const AppState = {
        weeks: [],
        searchQuery: '',
        statusFilter: 'all', // 'all' | 'in-progress' | 'completed'
        weekFilter: 'all',   // 'all' | hafta id (sayı)
        collapsedWeeks: new Set(), // Kapalı olan haftaların id'leri
        allCollapsed: false
    };

    /* ==========================================================================
       4. DOM SEÇİCİLERİ (ELEMENT REFERENCES)
       ========================================================================== */
    const DOM = {
        html: document.documentElement,
        themeToggleBtn: document.getElementById('theme-toggle-btn'),
        resetProgressBtn: document.getElementById('reset-progress-btn'),
        
        // Progress ve İstatistikler
        mainProgressBar: document.getElementById('main-progress-bar'),
        completionPercentage: document.getElementById('completion-percentage'),
        progressStatusText: document.getElementById('progress-status-text'),
        progressMotivation: document.getElementById('progress-motivation'),
        statTotalWeeks: document.getElementById('stat-total-weeks'),
        statTotalTasks: document.getElementById('stat-total-tasks'),
        statCompletedTasks: document.getElementById('stat-completed-tasks'),
        statPendingTasks: document.getElementById('stat-pending-tasks'),

        // Toolbar & Filtreler
        searchInput: document.getElementById('search-input'),
        searchBox: document.querySelector('.search-box'),
        searchClearBtn: document.getElementById('search-clear-btn'),
        weekSelect: document.getElementById('week-select'),
        statusPills: document.querySelectorAll('.pill-btn'),
        countAll: document.getElementById('count-all'),
        countPending: document.getElementById('count-pending'),
        countCompleted: document.getElementById('count-completed'),
        toggleAllWeeksBtn: document.getElementById('toggle-all-weeks-btn'),
        toggleAllText: document.getElementById('toggle-all-text'),
        filterStatusBanner: document.getElementById('filter-status-banner'),
        filterStatusText: document.getElementById('filter-status-text'),
        resetFiltersBtn: document.getElementById('reset-filters-btn'),

        // Konteynerlar
        weeksContainer: document.getElementById('weeks-container'),
        emptyState: document.getElementById('empty-state'),
        emptyClearBtn: document.getElementById('empty-clear-btn')
    };

    /* ==========================================================================
       5. VERİ BAŞLATMA VE DURUM SENKRONİZASYONU
       ========================================================================== */
    function initializeData() {
        const savedStates = StorageManager.getTaskStates();

        // COURSE_DATA klonlanır ve localStorage'daki durumlar ile senkronize edilir
        AppState.weeks = COURSE_DATA.map(week => ({
            ...week,
            tasks: week.tasks.map(task => {
                const savedStatus = savedStates[task.id];
                return {
                    ...task,
                    status: savedStatus !== undefined ? savedStatus : task.status
                };
            })
        }));

        // Hafta filtresi dropdown'ını dinamik doldur
        populateWeekFilterOptions();
    }

    function populateWeekFilterOptions() {
        DOM.weekSelect.innerHTML = '<option value="all">Tüm Haftalar (1 - 5)</option>';
        AppState.weeks.forEach(week => {
            const option = document.createElement('option');
            option.value = week.id;
            option.textContent = `${week.weekNumber}. Hafta: ${week.title}`;
            DOM.weekSelect.appendChild(option);
        });
    }

    /* ==========================================================================
       6. İLERLEME VE İSTATİSTİK HESAPLAMA (PROGRESS CALCULATOR)
       ========================================================================== */
    function calculateGlobalProgress() {
        let totalTasksCount = 0;
        let completedTasksCount = 0;

        AppState.weeks.forEach(week => {
            week.tasks.forEach(task => {
                totalTasksCount++;
                if (task.status === 'completed') {
                    completedTasksCount++;
                }
            });
        });

        const pendingTasksCount = totalTasksCount - completedTasksCount;
        const percentage = totalTasksCount === 0 ? 0 : Math.round((completedTasksCount / totalTasksCount) * 100);

        // Arayüzü Güncelle
        DOM.completionPercentage.textContent = `${percentage}%`;
        DOM.mainProgressBar.style.width = `${percentage}%`;
        DOM.progressStatusText.innerHTML = `<strong>${completedTasksCount}</strong> / <strong>${totalTasksCount}</strong> görev tamamlandı`;

        // Motivasyon mesajı
        if (percentage === 0) {
            DOM.progressMotivation.textContent = "Başlamak için ilk görevinizi işaretleyin! 🚀";
        } else if (percentage < 40) {
            DOM.progressMotivation.textContent = "Harika bir başlangıç, öğrenmeye devam edin! 💪";
        } else if (percentage < 80) {
            DOM.progressMotivation.textContent = "Yolun yarısını geçtiniz, süper gidiyorsunuz! 🔥";
        } else if (percentage < 100) {
            DOM.progressMotivation.textContent = "Neredeyse bitti! Son adımlar! ⭐";
        } else {
            DOM.progressMotivation.textContent = "Tebrikler! 3. hafta hedeflerinin tümünü başarıyla tamamladınız! 🏆";
        }

        // İstatistik kartlarını güncelle
        DOM.statTotalWeeks.textContent = AppState.weeks.length;
        DOM.statTotalTasks.textContent = totalTasksCount;
        DOM.statCompletedTasks.textContent = completedTasksCount;
        DOM.statPendingTasks.textContent = pendingTasksCount;

        // Toolbar üzerindeki sayaçları güncelle
        DOM.countAll.textContent = totalTasksCount;
        DOM.countCompleted.textContent = completedTasksCount;
        DOM.countPending.textContent = pendingTasksCount;
    }

    /* ==========================================================================
       7. KARTLARI VE GÖREVLERİ OLUŞTURMA (HTML TEMPLATES / RENDER ENGINE)
       ========================================================================== */
    function render() {
        const query = AppState.searchQuery.toLowerCase().trim();
        const selectedStatus = AppState.statusFilter;
        const selectedWeek = AppState.weekFilter;

        let visibleTasksCount = 0;
        let visibleWeeksCount = 0;

        DOM.weeksContainer.innerHTML = '';

        AppState.weeks.forEach(week => {
            // Hafta filtresi kontrolü
            if (selectedWeek !== 'all' && week.id.toString() !== selectedWeek.toString()) {
                return;
            }

            // Görev filtreleme: Arama metni ve durum filtresi
            const filteredTasks = week.tasks.filter(task => {
                const matchesSearch = query === '' || 
                    task.title.toLowerCase().includes(query) || 
                    task.description.toLowerCase().includes(query) ||
                    task.category.toLowerCase().includes(query);

                const matchesStatus = 
                    selectedStatus === 'all' || 
                    task.status === selectedStatus;

                return matchesSearch && matchesStatus;
            });

            // Eğer arama veya durum filtresi yapılmışsa ve bu haftada eşleşen görev yoksa haftayı gösterme
            const hasFilterActive = query !== '' || selectedStatus !== 'all';
            if (hasFilterActive && filteredTasks.length === 0) {
                return;
            }

            visibleWeeksCount++;
            visibleTasksCount += filteredTasks.length;

            // Hafta Kartı Oluşturma
            const weekCard = createWeekCardElement(week, filteredTasks);
            DOM.weeksContainer.appendChild(weekCard);
        });

        // Boş Durum (Empty State) Yönetimi
        if (visibleTasksCount === 0) {
            DOM.emptyState.classList.remove('hidden');
        } else {
            DOM.emptyState.classList.add('hidden');
        }

        // Filtre bilgilendirme çubuğu yönetimi
        updateFilterStatusBanner();

        // Genel ilerleme çubuğu ve sayaçları güncelle
        calculateGlobalProgress();
    }

    /**
     * Tekil Hafta Kartı HTML Bileşeni
     */
    function createWeekCardElement(week, filteredTasks) {
        const isCollapsed = AppState.collapsedWeeks.has(week.id);
        const totalWeekTasks = week.tasks.length;
        const completedWeekTasks = week.tasks.filter(t => t.status === 'completed').length;
        const weekPercentage = totalWeekTasks === 0 ? 0 : Math.round((completedWeekTasks / totalWeekTasks) * 100);
        const isAllCompleted = totalWeekTasks > 0 && completedWeekTasks === totalWeekTasks;

        const card = document.createElement('article');
        card.className = `week-card ${isCollapsed ? 'collapsed' : ''} ${isAllCompleted ? 'is-completed' : ''}`;
        card.setAttribute('data-week-id', week.id);

        card.innerHTML = `
            <div class="week-header" role="button" tabindex="0" aria-expanded="${!isCollapsed}" aria-label="${week.weekNumber}. Hafta Başlığı">
                <div class="week-title-area">
                    <span class="week-number-pill">${week.weekNumber}. Hafta</span>
                    <div class="week-title-group">
                        <h3 class="week-title">${escapeHTML(week.title)}</h3>
                        <p class="week-description">${escapeHTML(week.description)}</p>
                    </div>
                </div>
                <div class="week-meta-area">
                    <div class="week-progress-box">
                        <span class="week-progress-text">${completedWeekTasks}/${totalWeekTasks} (${weekPercentage}%)</span>
                        <div class="week-progress-bar">
                            <div class="week-progress-fill" style="width: ${weekPercentage}%;"></div>
                        </div>
                    </div>
                    <svg class="week-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>

            <div class="week-body">
                <!-- Öğrenme Hedefleri Bölümü -->
                <div class="learning-objectives-box">
                    <h4 class="objectives-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                        Öğrenme Hedefleri
                    </h4>
                    <ul class="objectives-list">
                        ${week.objectives.map(obj => `
                            <li class="objective-item">
                                <svg class="objective-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                <span>${escapeHTML(obj)}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <!-- Görevler ve Aktiviteler Bölümü -->
                <div class="tasks-section">
                    <div class="tasks-section-title">
                        <span>Haftalık Görevler ve Aktiviteler</span>
                        <span class="pill-count">${filteredTasks.length} görev</span>
                    </div>
                    <div class="tasks-list">
                        ${filteredTasks.map(task => createTaskItemHTML(task)).join('')}
                    </div>
                </div>
            </div>
        `;

        // Hafta Başlığına Tıklama ile Accordion Aç/Kapa
        const header = card.querySelector('.week-header');
        header.addEventListener('click', () => {
            toggleWeekAccordion(week.id);
        });

        // Klavye ile gezinme (Enter ve Boşluk tuşu)
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleWeekAccordion(week.id);
            }
        });

        // Görev Checkbox'larına Event Bağlama
        const checkboxButtons = card.querySelectorAll('.task-checkbox-btn');
        checkboxButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const taskId = btn.getAttribute('data-task-id');
                toggleTaskStatus(taskId);
            });
        });

        return card;
    }

    /**
     * Tekil Görev Satırı HTML Şablonu
     */
    function createTaskItemHTML(task) {
        const isCompleted = task.status === 'completed';
        const tagClass = getTagClass(task.category);

        return `
            <div class="task-item ${isCompleted ? 'completed' : ''}" id="item-${task.id}">
                <button 
                    class="task-checkbox-btn" 
                    data-task-id="${task.id}" 
                    aria-label="${task.title} görevini ${isCompleted ? 'tamamlanmadı' : 'tamamlandı'} olarak işaretle"
                    title="${isCompleted ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}"
                >
                    <svg class="checkbox-check-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </button>

                <div class="task-content">
                    <div class="task-header-row">
                        <span class="task-title">${escapeHTML(task.title)}</span>
                        <span class="task-status-badge ${task.status}">
                            ${isCompleted ? 'Tamamlandı' : 'Devam Ediyor'}
                        </span>
                    </div>
                    <p class="task-description">${escapeHTML(task.description)}</p>
                    <div class="task-footer-meta">
                        <span class="task-tag ${tagClass}">${escapeHTML(task.category)}</span>
                        <span class="task-due-date">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            Son Teslim: ${escapeHTML(task.dueDate)}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }

    /* ==========================================================================
       8. GÖREV VE ACCORDION ETKİLEŞİMLERİ (INTERACTIONS)
       ========================================================================== */
    /**
     * Görev Tamamlama Durumunu Değiştir
     */
    function toggleTaskStatus(taskId) {
        for (const week of AppState.weeks) {
            const task = week.tasks.find(t => t.id === taskId);
            if (task) {
                // Durumu tersine çevir
                task.status = (task.status === 'completed') ? 'in-progress' : 'completed';
                
                // localStorage'a kalıcı olarak yaz
                StorageManager.saveTaskState(task.id, task.status);
                break;
            }
        }

        // Arayüzü yeniden render et
        render();
    }

    /**
     * Hafta Kartını Aç / Kapat
     */
    function toggleWeekAccordion(weekId) {
        if (AppState.collapsedWeeks.has(weekId)) {
            AppState.collapsedWeeks.delete(weekId);
        } else {
            AppState.collapsedWeeks.add(weekId);
        }
        render();
    }

    /**
     * Tüm Haftaları Aç / Kapat
     */
    function toggleAllWeeks() {
        if (AppState.allCollapsed) {
            AppState.collapsedWeeks.clear();
            AppState.allCollapsed = false;
            DOM.toggleAllText.textContent = "Tümünü Daralt";
        } else {
            AppState.weeks.forEach(w => AppState.collapsedWeeks.add(w.id));
            AppState.allCollapsed = true;
            DOM.toggleAllText.textContent = "Tümünü Genişlet";
        }
        render();
    }

    /* ==========================================================================
       9. TEMA YÖNETİMİ (DARK / LIGHT MODE CONTROLLER)
       ========================================================================== */
    function initTheme() {
        const savedTheme = StorageManager.getTheme();
        setTheme(savedTheme);
    }

    function setTheme(theme) {
        DOM.html.setAttribute('data-theme', theme);
        StorageManager.saveTheme(theme);
    }

    function toggleTheme() {
        const currentTheme = DOM.html.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    }

    /* ==========================================================================
       10. FİLTRE VE ARAMA YÖNETİMİ
       ========================================================================== */
    function updateFilterStatusBanner() {
        const isSearchActive = AppState.searchQuery.trim() !== '';
        const isStatusActive = AppState.statusFilter !== 'all';
        const isWeekActive = AppState.weekFilter !== 'all';

        if (isSearchActive || isStatusActive || isWeekActive) {
            const parts = [];
            if (isSearchActive) parts.push(`"${AppState.searchQuery}" araması`);
            if (isStatusActive) parts.push(`Durum: ${AppState.statusFilter === 'completed' ? 'Tamamlananlar' : 'Devam Edenler'}`);
            if (isWeekActive) parts.push(`${AppState.weekFilter}. Hafta`);

            DOM.filterStatusText.textContent = `Aktif Filtreler: ${parts.join(' • ')}`;
            DOM.filterStatusBanner.classList.remove('hidden');
        } else {
            DOM.filterStatusBanner.classList.add('hidden');
        }
    }

    function clearAllFilters() {
        AppState.searchQuery = '';
        AppState.statusFilter = 'all';
        AppState.weekFilter = 'all';

        DOM.searchInput.value = '';
        DOM.searchBox.classList.remove('has-text');
        DOM.weekSelect.value = 'all';

        DOM.statusPills.forEach(pill => {
            const isAll = pill.getAttribute('data-filter') === 'all';
            pill.classList.toggle('active', isAll);
            pill.setAttribute('aria-checked', isAll.toString());
        });

        render();
    }

    /* ==========================================================================
       11. TÜM İLERLEMEYİ SIFIRLAMA (RESET)
       ========================================================================== */
    function resetAllProgress() {
        const confirmation = confirm("Tüm ders görev ilerlemenizi sıfırlamak istediğinize emin misiniz? Bu işlem geri alınamaz.");
        if (!confirmation) return;

        StorageManager.clearAllTaskStates();

        // Tüm görevleri "in-progress" durumuna döndür
        AppState.weeks.forEach(week => {
            week.tasks.forEach(task => {
                task.status = 'in-progress';
            });
        });

        render();
    }

    /* ==========================================================================
       12. YARDIMCI VE GÜVENLİK METOTLARI
       ========================================================================== */
    // XSS Açıklarını Önlemek İçin HTML Escape Fonksiyonu
    function escapeHTML(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Kategoriye Uygun CSS Sınıfı Eşleştirmesi
    function getTagClass(category) {
        const cat = category.toLowerCase();
        if (cat.includes('kodlama')) return 'tag-kodlama';
        if (cat.includes('ödev')) return 'tag-ödev';
        if (cat.includes('okuma')) return 'tag-okuma';
        if (cat.includes('laboratuvar')) return 'tag-laboratuvar';
        if (cat.includes('proje')) return 'tag-proje';
        return 'tag-kodlama';
    }

    /* ==========================================================================
       13. EVENT LISTENERS (OLAY DİNLEYİCİLERİ)
       ========================================================================== */
    function setupEventListeners() {
        // Tema Değiştirici Buton
        DOM.themeToggleBtn.addEventListener('click', toggleTheme);

        // İlerlemeyi Sıfırlama Butonu
        DOM.resetProgressBtn.addEventListener('click', resetAllProgress);

        // Arama Çubuğu Olayı (Canlı arama)
        DOM.searchInput.addEventListener('input', (e) => {
            AppState.searchQuery = e.target.value;
            DOM.searchBox.classList.toggle('has-text', AppState.searchQuery.length > 0);
            render();
        });

        // Arama Temizleme Butonu
        DOM.searchClearBtn.addEventListener('click', () => {
            DOM.searchInput.value = '';
            AppState.searchQuery = '';
            DOM.searchBox.classList.remove('has-text');
            DOM.searchInput.focus();
            render();
        });

        // Hafta Seçim Dropdown'ı
        DOM.weekSelect.addEventListener('change', (e) => {
            AppState.weekFilter = e.target.value;
            render();
        });

        // Durum Filtresi (Pills) Olayı
        DOM.statusPills.forEach(pill => {
            pill.addEventListener('click', () => {
                DOM.statusPills.forEach(p => {
                    p.classList.remove('active');
                    p.setAttribute('aria-checked', 'false');
                });
                pill.classList.add('active');
                pill.setAttribute('aria-checked', 'true');
                AppState.statusFilter = pill.getAttribute('data-filter');
                render();
            });
        });

        // Tüm Haftaları Aç / Daralt
        DOM.toggleAllWeeksBtn.addEventListener('click', toggleAllWeeks);

        // Filtreleri Temizle Butonları
        DOM.resetFiltersBtn.addEventListener('click', clearAllFilters);
        DOM.emptyClearBtn.addEventListener('click', clearAllFilters);
    }

    /* ==========================================================================
       14. UYGULAMA BAŞLANGIÇ NOKTASI (ENTRY POINT)
       ========================================================================== */
    function init() {
        initTheme();
        initializeData();
        setupEventListeners();
        render();
        console.log("EduDashboard Başarıyla Yüklendi! (Hafta 1-3 Tam Entegrasyon)");
    }

    // DOM hazır olduğunda başlat
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
