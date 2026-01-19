let currentPage = 1
const limit = 5

async function loadNews(page) {
  const res = await fetch(`http://localhost:3000/api/news?page=${page}&limit=${limit}`)
  const data = await res.json()

  const container = document.getElementById("news-container")
  container.innerHTML = ""

  data.data.forEach(news => {
    const div = document.createElement("div")
    div.className = "news-card"

    div.innerHTML = `
      <h3>${news.title}</h3>
      <p class="date">${news.publish_date}</p>
      <a href="${news.link}" target="_blank">Read more</a>
      <p>❤️ Likes: <span id="likes-${news.id}">${news.likes}</span></p>
      <button onclick="likeNews(${news.id})">Like</button>
    `

    container.appendChild(div)
  })

  document.getElementById("page-info").innerText =
    `Page ${data.page} of ${data.totalPages}`

  document.getElementById("prev").disabled = data.page === 1
  document.getElementById("next").disabled = data.page === data.totalPages

  currentPage = data.page
}

async function likeNews(id) {
  await fetch(`http://localhost:3000/api/news/${id}/like`, {
    method: "POST"
  })

  const span = document.getElementById(`likes-${id}`)
  span.innerText = parseInt(span.innerText) + 1
}

document.getElementById("prev").onclick = () => {
  if (currentPage > 1) loadNews(currentPage - 1)
}

document.getElementById("next").onclick = () => {
  loadNews(currentPage + 1)
}

loadNews(currentPage)
