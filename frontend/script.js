let currentPage = 1;
const limit = 5;

/* ===== اختيار الصورة حسب عنوان الخبر ===== */
function getImageByTitle(title) {
  const text = title.toLowerCase();

  // قطر – اللجنة القطرية – الهلال الأحمر
  if (
    text.includes("قطر") ||
    text.includes("قطرية") ||
    text.includes("اللجنة القطرية") ||
    text.includes("الهلال الأحمر")
  ) {
    return "./images/qatar.png";
  }

  // إسعاف – صحة – جرحى – مستشفى
  if (
    text.includes("إسعاف") ||
    text.includes("صحة") ||
    text.includes("مستشفى") ||
    text.includes("جرح") ||
    text.includes("طبي")
  ) {
    return "./images/medical.png";
  }

  // شباب – جمعيات – مؤسسات – متطوعين
  if (
    text.includes("شباب") ||
    text.includes("جمعية") ||
    text.includes("مؤسسة") ||
    text.includes("متطوع") ||
    text.includes("الأشبال")
  ) {
    return "./images/youth.png";
  }

  // غزة – القطاع – قصف – عدوان – دمار
  if (
    text.includes("غزة") ||
    text.includes("القطاع") ||
    text.includes("قصف") ||
    text.includes("عدوان") ||
    text.includes("دمار")
  ) {
    return "./images/gaza.png";
  }

  // مساعدات – إغاثة – توزيع – معبر – قوافل
  if (
    text.includes("مساعدة") ||
    text.includes("مساعدات") ||
    text.includes("إغاثة") ||
    text.includes("توزيع") ||
    text.includes("معبر") ||
    text.includes("قافلة")
  ) {
    return "./images/aid.png";
  }

  // صورة افتراضية لأي خبر آخر
  return "./images/default.png";
}

/* ===== تحميل الأخبار ===== */
async function loadNews(page = 1) {
  const res = await fetch(`http://localhost:3000/api/news?page=${page}&limit=${limit}`);
  const data = await res.json();

  const container = document.getElementById("news-container");
  container.innerHTML = "";

  data.data.forEach(news => {
    const card = document.createElement("div");
    card.className = "news-card";

    const imageUrl = getImageByTitle(news.title);

    card.innerHTML = `
      <img src="${imageUrl}" alt="news">

      <div class="news-content">
        <h3>${news.title}</h3>
        <p>${news.description || "No description available for this news item."}</p>

        <div class="meta">
          <span>📅 ${news.publish_date}</span>
          <span>❤️ ${news.likes}</span>
        </div>

        <div class="actions">
          <a href="${news.link}" target="_blank">Read More</a>
          <button class="like-btn" onclick="likeNews(${news.id})">👍 Like</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  document.getElementById("page-number").innerText =
    `Page ${data.page} of ${data.totalPages}`;

  currentPage = data.page;
}

/* ===== لايك ===== */
async function likeNews(id) {
  await fetch(`http://localhost:3000/api/news/${id}/like`, {
    method: "POST"
  });

  loadNews(currentPage);
}

/* ===== Pagination ===== */
document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) loadNews(currentPage - 1);
});

document.getElementById("next").addEventListener("click", () => {
  loadNews(currentPage + 1);
});

/* ===== DARK MODE TOGGLE ===== */
const toggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.innerText = "☀️ Light";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.innerText = "☀️ Light";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerText = "🌙 Dark";
    localStorage.setItem("theme", "light");
  }
});

loadNews();
