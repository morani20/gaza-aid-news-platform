let currentPage = 1;
const limit = 5;

async function loadNews(page = 1) {
  const res = await fetch(`http://localhost:3000/api/news?page=${page}&limit=${limit}`);
  const data = await res.json();

  const container = document.getElementById("news-container");
  container.innerHTML = "";

  data.data.forEach(news => {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
      <h3><a href="${news.link}" target="_blank">${news.title}</a></h3>
      <div class="date">Published: ${news.publish_date}</div>
      <div class="actions">
        <span>❤️ Likes: ${news.likes}</span>
        <button class="like-btn" onclick="likeNews(${news.id})">Like</button>
      </div>
    `;

    container.appendChild(card);
  });

  document.getElementById("page-number").innerText =
    `Page ${data.page} of ${data.totalPages}`;

  currentPage = data.page;
}

async function likeNews(id) {
  await fetch(`http://localhost:3000/api/news/${id}/like`, {
    method: "POST"
  });

  loadNews(currentPage);
}

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) loadNews(currentPage - 1);
});

document.getElementById("next").addEventListener("click", () => {
  loadNews(currentPage + 1);
});

loadNews();
