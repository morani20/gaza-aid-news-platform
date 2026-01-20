const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../config/db");

exports.scrapeAndSave = async () => {
  try {
    // نقرأ أول 10 صفحات من موقع المتقدمون
    for (let page = 1; page <= 10; page++) {
      const url =
        page === 1
          ? "https://www.motqdmon.com/search/label/المساعدات"
          : `https://www.motqdmon.com/search/label/المساعدات?updated-max=&max-results=20&start=${(page - 1) * 20}`;

      const response = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        },
      });

      const $ = cheerio.load(response.data);

      const posts = $("article");

      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const title = $(post).find("h3 a").text().trim();
        const link = $(post).find("h3 a").attr("href");
        const publish_date = $(post)
          .find("time")
          .attr("datetime")
          ?.split("T")[0];

        if (!title || !link || !publish_date) continue;

        // منع التكرار حسب العنوان
        const [rows] = await db.query(
          "SELECT id FROM news WHERE title = ?",
          [title]
        );

        if (rows.length === 0) {
          await db.query(
            "INSERT INTO news (title, publish_date, link) VALUES (?, ?, ?)",
            [title, publish_date, link]
          );
        }
      }
    }

    console.log("✅ Scraping first 10 pages completed successfully");
    return true;
  } catch (error) {
    console.error("❌ Scraping error:", error.message);
    return false;
  }
};
