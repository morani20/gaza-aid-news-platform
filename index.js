const app = require("./src/app")
const db = require("./src/config/db")

const PORT = 3000

db.query("SELECT 1")
  .then(() => {
    console.log("Database connected successfully")
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch(err => {
    console.log("Database connection failed")
    console.log(err)
  })
