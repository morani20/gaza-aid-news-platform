# Gaza Aid News Platform

A full-stack news aggregation platform that collects humanitarian and aid-related news about Gaza, stores them in a database, and provides them through a RESTful API with a modern responsive web interface.

---

## 📌 Project Overview

This project was developed as part of the **Software Development Frameworks** course at the **Islamic University of Gaza**.
The platform automatically scrapes and manages news related to humanitarian aid and relief operations in Gaza and presents them in a clean, interactive interface with advanced UI features.

---

## ✨ Features

### Backend

* RESTful API built with **Node.js & Express**
* News scraping service and storage in database
* Pagination support (`page` & `limit`)
* Like system for each news item
* Environment variables using `.env`

### Frontend

* Responsive modern UI using **HTML, CSS, JavaScript**
* Smart automatic image selection based on news title keywords
* News cards with:

  * Title
  * Description
  * Publish date
  * Like counter
  * Read More button
* Pagination controls (Next / Previous)
* 🌙 **Dark Mode & Light Mode toggle**
* Custom humanitarian-themed images for each category
* Logo integrated in the header

---

## 🖼️ Image Mapping System

Each news item is automatically assigned an image based on keywords in the title:

| Category             | Example Keywords                     | Image       |
| -------------------- | ------------------------------------ | ----------- |
| Qatar / Red Crescent | قطر – اللجنة القطرية – الهلال الأحمر | qatar.png   |
| Medical              | مستشفى – إسعاف – صحة – جرحى          | medical.png |
| Youth & Associations | جمعية – مؤسسة – شباب – متطوع         | youth.png   |
| Gaza & War           | غزة – القطاع – قصف – دمار            | gaza.png    |
| Aid & Relief         | مساعدات – إغاثة – توزيع – قوافل      | aid.png     |
| Default              | Other news                           | default.png |

---

## ⚙️ Technologies Used

* **Node.js**
* **Express.js**
* **JavaScript (ES6)**
* **HTML5**
* **CSS3**
* **Git & GitHub**
* **REST API**
* **dotenv**

---

## 🚀 How to Run the Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/morani20/gaza-aid-news-platform.git
cd gaza-aid-news-platform
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file and set your database and API configuration.

### 4️⃣ Run the server

```bash
node index.js
```

Server will run on:

```
http://localhost:3000
```

Open the frontend from:

```
frontend/index.html
```

---

## 🔗 API Endpoints

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| GET    | /api/news?page=&limit= | Get paginated news      |
| POST   | /api/news/:id/like     | Add like to a news item |

---

## 👨‍🎓 Student Information

* **Name:** Mohamed Rani Mohamed Abu Saada
* **University:** Islamic University of Gaza
* **Student ID:** 120231584
* **Course:** Software Development Frameworks

---

## 🧑‍🏫 Supervision

تم تنفيذ هذا المشروع
**تحت إشراف الدكتور الفاضل محمد الأغا**

---

## 📎 GitHub Repository

🔗 [https://github.com/morani20/gaza-aid-news-platform](https://github.com/morani20/gaza-aid-news-platform)

---

## ⭐ Final Notes

This project demonstrates:

* Full-stack integration
* REST API design
* Modern UI/UX practices
* Real-world humanitarian data handling

If you like this project, feel free to ⭐ star the repository!

---

© 2026 – Gaza Aid News Platform
<!----------------------------------------------------------------------------------------------------------------------->

# Gaza Aid News Platform

منصة إخبارية متكاملة (Full-Stack) لعرض وإدارة أخبار المساعدات الإنسانية المتعلقة بقطاع غزة، باستخدام واجهة حديثة وخصائص تفاعلية متقدمة.

---

## 📌 نبذة عن المشروع

تم تطوير هذا المشروع ضمن مساق **Software Development Frameworks** في **الجامعة الإسلامية بغزة**.
يهدف المشروع إلى جمع أخبار المساعدات الإنسانية المتعلقة بقطاع غزة من خلال واجهة برمجية (API) وتخزينها في قاعدة بيانات، ثم عرضها في واجهة ويب أنيقة وتفاعلية.

يعرض النظام الأخبار على شكل بطاقات (Cards) مع صور مناسبة تلقائيًا لكل خبر، ونظام إعجاب، وتقسيم صفحات، ودعم الوضع الليلي.

---

## ✨ مميزات المشروع

### 🔹 في الواجهة الخلفية (Backend)

* إنشاء RESTful API باستخدام Node.js و Express
* تخزين الأخبار في قاعدة بيانات MongoDB
* دعم تقسيم الصفحات (Pagination) باستخدام `page` و `limit`
* نظام إعجاب (Like) لكل خبر
* استخدام متغيرات البيئة عبر ملف `.env`

### 🔹 في الواجهة الأمامية (Frontend)

* واجهة حديثة ومتجاوبة باستخدام HTML و CSS و JavaScript
* عرض الأخبار على شكل بطاقات أنيقة
* اختيار صورة مناسبة تلقائيًا لكل خبر حسب الكلمات المفتاحية في العنوان
* زر إعجاب مع تحديث مباشر
* عرض تاريخ النشر
* زر “Read More” لفتح مصدر الخبر الأصلي
* دعم الوضع الليلي والنهاري (Dark / Light Mode) مع حفظ الاختيار تلقائيًا
* إدراج شعار خاص بالمنصة في أعلى الصفحة

---

## 🖼️ نظام الصور الذكي (Smart Image Mapping)

يتم اختيار صورة لكل خبر تلقائيًا بناءً على الكلمات المفتاحية الموجودة في عنوان الخبر:

* أخبار قطر أو اللجنة القطرية أو الهلال الأحمر → `qatar.png`
* أخبار الصحة والإسعاف والمستشفيات → `medical.png`
* أخبار الجمعيات والشباب والمتطوعين → `youth.png`
* أخبار غزة والقطاع والقصف والدمار → `gaza.png`
* أخبار المساعدات والقوافل والتوزيع → `aid.png`
* أخبار أخرى عامة → `default.png`

---

## 🧾 التقنيات المستخدمة

* Node.js
* Express.js
* MongoDB
* JavaScript (ES6)
* HTML5
* CSS3
* Git & GitHub
* REST API
* dotenv

---

## 📂 هيكل المشروع

```
gaza-aid-news-platform/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── logo.png
│   └── images/
│       ├── aid.png
│       ├── gaza.png
│       ├── medical.png
│       ├── qatar.png
│       ├── youth.png
│       └── default.png
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── services/
│
├── index.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

---

## 🚀 طريقة تشغيل المشروع محليًا

### 1️⃣ تحميل المشروع

```bash
git clone https://github.com/morani20/gaza-aid-news-platform.git
```

### 2️⃣ الدخول إلى مجلد المشروع

```bash
cd gaza-aid-news-platform
```

### 3️⃣ تثبيت المكتبات المطلوبة

```bash
npm install
```

### 4️⃣ إعداد ملف البيئة

إنشاء ملف باسم `.env` ووضع إعدادات قاعدة البيانات والمتغيرات المطلوبة.

### 5️⃣ تشغيل السيرفر

```bash
node index.js
```

سيعمل السيرفر على الرابط:

```
http://localhost:3000
```

ثم افتح الواجهة الأمامية من:

```
frontend/index.html
```

---

## 🔗 أهم واجهات الـ API

* جلب الأخبار مع تقسيم الصفحات:

```
GET /api/news?page=1&limit=5
```

* إضافة إعجاب لخبر معين:

```
POST /api/news/:id/like
```

---

## 👨‍🎓 معلومات الطالب

* الاسم: **Mohamed Rani Mohamed Abu Saada**
* الجامعة: **Islamic University of Gaza**
* الرقم الجامعي: **120231584**
* المساق: **Software Development Frameworks**

---

## 🧑‍🏫 الإشراف الأكاديمي

تم تنفيذ هذا المشروع
**تحت إشراف الدكتور الفاضل محمد الأغا**

---

## 📎 رابط المشروع على GitHub

🔗 [https://github.com/morani20/gaza-aid-news-platform](https://github.com/morani20/gaza-aid-news-platform)

---

## ⭐ ملاحظات ختامية

هذا المشروع يحقق جميع متطلبات الواجب ويعرض:

* نظام Backend متكامل
* واجهة Frontend احترافية
* تنظيم ممتاز للكود والملفات
* استخدام تقنيات حديثة في التطوير

---

© 2026 – Gaza Aid News Platform
مع تحياتي،
**Mohamed Rani Mohamed Abu Saada**
