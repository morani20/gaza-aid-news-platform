const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.json())

// Serve Frontend Files
app.use(express.static(path.join(__dirname, "../frontend")))

// Routes
const newsRoutes = require("./routes/newsRoutes")
app.use("/api/news", newsRoutes)

// Default Route -> Open Frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"))
})

module.exports = app
