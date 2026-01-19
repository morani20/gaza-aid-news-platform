const axios = require("axios")
const db = require("../config/db")

exports.scrapeAndSave = async () => {
  const url =
    "https://www.motqdmon.com/feeds/posts/default/-/%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A7%D8%AA?alt=json&max-results=200"

  const { data } = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
    }
  })

  const entries = data.feed.entry || []

  for (const item of entries) {
    const title = item.title.$t
    const publish_date = item.published.$t.split("T")[0]
    const link = item.link.find(l => l.rel === "alternate").href

    const [rows] = await db.query("SELECT id FROM news WHERE title = ?", [title])

    if (rows.length === 0) {
      await db.query(
        "INSERT INTO news (title, publish_date, link) VALUES (?, ?, ?)",
        [title, publish_date, link]
      )
    }
  }

  return true
}
