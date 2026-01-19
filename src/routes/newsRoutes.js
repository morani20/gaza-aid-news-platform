const express = require("express")
const router = express.Router()
const newsController = require("../controllers/newsController")

router.get("/", newsController.getAllNews)
router.get("/scrape", newsController.scrapeNews)
router.post("/:id/like", newsController.likeNews)

module.exports = router
