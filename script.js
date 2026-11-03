// Örnek Ders ve Görev Verileri (Mock Data)
const initialWeeksData = [
    {
        id: 1,
        title: "Hafta 1: Web Geliştirmeye Giriş",
        description: "Temel HTML yapıları ve CSS temellerinin öğrenilmesi.",
        tasks: [
            { id: 101, title: "HTML semantik etiketlerini incele", completed: false },
            { id: 102, title: "Temel CSS seçicilerini uygula", completed: false }
        ]
    },
    {
        id: 2,
        title: "Hafta 2: JavaScript ve DOM Manipülasyonu",
        description: "Dinamik web öğeleri ve olay yönetiminin kavranması.",
        tasks: [
            { id: 201, title: "JavaScript değişkenler ve fonksiyonlar", completed: false },
            { id: 202, title: "DOM element seçimi ve olay dinleyicileri", completed: false }
        ]
    },
    {
        id: 3,
        title: "Hafta 3: Arama, Filtreleme ve LocalStorage",
        description: "İstemci tarafında veri kalıcılığı ve filtreleme mantığı.",
        tasks: [
            { id: 301, title: "LocalStorage ile veri saklama", completed: false },
            { id: 302, title: "Anlık arama ve filtreleme kodlama", completed: false }
        ]
    }
];

// LocalStorage'dan Verileri Çek veya Varsayılanı Kullan
let weeksData = JSON.parse(localStorage.getItem("dashboard_data")) || initialWeeksData;
let currentFilter = "all";
let searchQuery = "";

const weeksContainer = document.getElementById("weeks-container");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const themeToggleBtn = document.getElementById("theme-toggle");

// Sayfayı Yükle
function init() {
    loadTheme();
    render();
    setupEventListeners();
}

// Arayüzü Güncelleme ve Çizme
function render() {
    weeksContainer.innerHTML = "";
    let totalTasks = 0;
    let completedTasks = 0;

    weeksData.forEach(week => {
        // Filtreleme ve arama mantığı
        let filteredTasks = week.tasks.filter(task => {
            const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = 
                currentFilter === "all" ? true :
                currentFilter === "completed" ? task.completed :
                !task.completed;
            return matchesSearch && matchesFilter;
        });

        // Eğer aramaya uyan görev varsa haftayı göster
        if (filteredTasks.length > 0 || searchQuery === "") {
            const card = document.createElement("div");
            card.className = "week-card";
            
            let tasksHtml = "";
            week.tasks.forEach(task => {
                totalTasks++;
                if (task.completed) completedTasks++;

                // Eğer mevcut filtreye uyuyorsa listede göster
                const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesFilter = 
                    currentFilter === "all" ? true :
                    currentFilter === "completed" ? task.completed :
                    !task.completed;

                if (matchesSearch && matchesFilter) {
                    tasksHtml += `
                        <li class="task-item ${task.completed ? 'completed' : ''}">
                            <input type="checkbox" data-task-id="${task.id}" ${task.completed ? 'checked' : ''}>
                            <span>${task.title}</span>
                        </li>
                    `;
                }
            });

            if (tasksHtml !== "") {
                card.innerHTML = `
                    <h3>${week.title}</h3>
                    <p>${week.description}</p>
                    <ul class="task-list">${tasksHtml}</ul>
                `;
                weeksContainer.appendChild(card);
            }
        }
    });

    // Toplam ilerleme hesaplama
    // Not: Toplam görev sayısını genel veri üzerinden hesaplayalım
    let absoluteTotal = 0;
    let absoluteCompleted = 0;
    weeksData.forEach(w => {
        w.tasks.forEach(t => {
            absoluteTotal++;
            if (t.completed) absoluteCompleted++;
        });
    });

    const percent = absoluteTotal === 0 ? 0 : Math.round((absoluteCompleted / absoluteTotal) * 100);
    progressBar.style.width = `${percent}%`;
    progressText.innerText = `%${percent} Tamamlandı (${absoluteCompleted}/${absoluteTotal})`;
}

// Olay Dinleyicileri (Event Listeners)
function setupEventListeners() {
    // Görev durumunu değiştirme (Checkbox)
    weeksContainer.addEventListener("change", (e) => {
        if (e.target.type === "checkbox") {
            const taskId = Number(e.target.getAttribute("data-task-id"));
            const isChecked = e.target.checked;

            // Veride güncelle
            weeksData.forEach(week => {
                week.tasks.forEach(task => {
                    if (task.id === taskId) {
                        task.completed = isChecked;
                    }
                });
            });

            saveAndRender();
        }
    });

    // Arama Çubuğu
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        render();
    });

    // Filtre Butonları
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentFilter = e.target.getAttribute("data-filter");
            render();
        });
    });

    // Tema Değiştirici
    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
}

// Veriyi Kaydet ve Yeniden Çiz
function saveAndRender() {
    localStorage.setItem("dashboard_data", JSON.stringify(weeksData));
    render();
}

// Kaydedilmiş Temayı Yükle
function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
}

// Uygulamayı Başlat
init();