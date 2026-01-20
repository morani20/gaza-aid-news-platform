# Gaza Aid News Platform

A full-stack news aggregation platform that scrapes humanitarian and aid-related news about Gaza, stores them in a database, and provides a RESTful API with a simple web interface.

---

## 👨‍🎓 Student Information

- **Name:** Mohamed Rani Mohamed Abu Saada  
- **Student ID:** 120231584  
- **University:** Islamic University of Gaza  
- **Course:** Software Development Frameworks  
- **Instructor:** Dr. Mohammad Al-Agha  

---

## 📌 Project Description

This project is a full-stack web application that:

- Scrapes news articles related to Gaza aid from external websites.
- Stores the scraped data in a MySQL (MariaDB) database.
- Provides REST API endpoints to:
  - Retrieve paginated news.
  - Add likes to news articles.
  - Trigger scraping manually.
- Displays the news in a simple frontend interface with pagination and like functionality.

---

## 🛠️ Technologies Used

### Backend
- Node.js  
- Express.js  
- MySQL (MariaDB)  
- Axios + Cheerio (Web Scraping)  

### Frontend
- HTML5  
- CSS3  
- Vanilla JavaScript (Fetch API)  

### Tools
- Git & GitHub  
- phpMyAdmin  
- VS Code  

---

## ⚙️ Features

- Web scraping and automatic saving into database  
- RESTful API with pagination  
- Like system for each news article  
- Clean and responsive frontend UI  
- Full database integration  

---

## 📂 Project Structure

```
gaza-aid-news-api/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── newsController.js
│   ├── routes/
│   │   └── newsRoutes.js
│   └── services/
│       └── scraperService.js
│
├── index.js
├── package.json
└── README.md
```

---

## 🔗 API Endpoints

### 1. Get News with Pagination

Retrieve paginated news articles from the database.

```
GET /api/news?page=1&limit=5
```

### 2. Like a News Article

Increase the like counter for a specific news article.

```
POST /api/news/:id/like
```

Example:

```
POST /api/news/105/like
```

### 3. Scrape News Manually

Trigger the scraping process manually and store new data into the database.

```
GET /api/news/scrape
```

---

## ▶️ How to Run the Project Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file and add your database configuration:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=gaza_aid_news
PORT=3000
```

### 3. Run the Server

```bash
node index.js
```

The server will run on:

```
http://localhost:3000
```

---

## 🌐 Frontend Usage

Open the frontend file:

```
frontend/index.html
```

Features available in the interface:

* Display news articles with pagination
* Open original news links
* Like any news article and update likes dynamically

---

## 🧪 Example Output

The API returns JSON responses such as:

```json
{
  "status": "success",
  "page": 1,
  "totalPages": 21,
  "totalItems": 105,
  "data": [
    {
      "id": 105,
      "title": "Sample News Title",
      "publish_date": "2025-11-09",
      "link": "https://example.com/news",
      "likes": 2
    }
  ]
}
```

---

## ✅ Learning Outcomes

Through this project, the following skills were practiced:

* REST API development using Express.js
* Database integration with MySQL
* Web scraping using Cheerio and Axios
* Frontend-backend integration
* Git version control and GitHub deployment

---

## 📎 GitHub Repository

[https://github.com/morani20/gaza-aid-news-platform](https://github.com/morani20/gaza-aid-news-platform)

---

## 📝 Conclusion

This project demonstrates a complete full-stack application that integrates web scraping, database storage, RESTful APIs, and a simple frontend interface.

It was developed as part of the **Software Development Frameworks** course at the Islamic University of Gaza under the supervision of **Dr. Mohammad Al-Agha**.

