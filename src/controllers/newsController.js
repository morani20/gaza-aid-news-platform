const db = require("../config/db")
const scraper = require("../services/scraperService")

exports.getAllNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const offset = (page - 1) * limit

    const [countRows] = await db.query("SELECT COUNT(*) as total FROM news")
    const total = countRows[0].total
    const totalPages = Math.ceil(total / limit)

    const [rows] = await db.query(
      "SELECT * FROM news ORDER BY id DESC LIMIT ? OFFSET ?",
      [limit, offset]
    )

    res.json({
      status: "success",
      page,
      totalPages,
      totalItems: total,
      data: rows
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: "error", message: "Database error" })
  }
}

exports.scrapeNews = async (req, res) => {
  try {
    await scraper.scrapeAndSave()
    res.json({ status: "success", message: "Scraping completed" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: "error", message: "Scraping failed" })
  }
}
exports.likeNews = async (req, res) => {
  try {
    const id = req.params.id

    await db.query("UPDATE news SET likes = likes + 1 WHERE id = ?", [id])

    res.json({ status: "success", message: "Like added successfully" })
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: "error", message: "Like failed" })
  }
}

