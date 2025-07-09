# 📺 YouTube Data API Fetcher

A full-stack web application that fetches data from the **YouTube Data API**, processes it through a **Spring Boot** backend, and stores the results in **MongoDB Atlas** using `MongoRepository`. The frontend is built with HTML, CSS, and JavaScript for a simple and clean UI.

---

## 🚀 Features

- 🔍 Fetch video details using YouTube Data API
- 💡 Display video metadata (title, description, channel, etc.)
- 🌐 RESTful API built with Spring Boot
- ☁️ Store video information in MongoDB Atlas
- ⚙️ Frontend to trigger fetch and view results

---

## 🛠️ Tech Stack

### Frontend:
- HTML5
- CSS3
- JavaScript

### Backend:
- Java 17+
- Spring Boot
- Spring Web
- Spring Data MongoDB

### Database:
- MongoDB Atlas (Cloud-based)

### API:
- YouTube Data API v3

---

## 🗂️ Project Structure

youtube_data_api_fetcher/
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── backend/
│ ├── src/
│ │ ├── main/java/com/example/
│ │ │ ├── controller/
│ │ │ ├── model/
│ │ │ ├── repository/
│ │ │ └── service/
│ │ └── resources/
│ │ └── application.properties
│ └── pom.xml
│
├── LICENSE
└── README.md

---

## ⚙️ Setup Instructions

### 🧰 Prerequisites

- Java 17+  
- Maven  
- MongoDB Atlas Account  
- YouTube API Key  
- Any IDE (IntelliJ, VS Code)

---

### 🚀 Backend Setup

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/youtube-data-api-fetcher.git
cd youtube-data-api-fetcher/backend
```

### 2. Add your MongoDB URI and YouTube API Key in application.properties:
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db
youtube.api.key=YOUR_YOUTUBE_API_KEY

### 3. Run the backend:
```bash
mvn spring-boot:run
```

---


## 🌐 Frontend Setup

Open the frontend/index.html file in your browser:
```bash
start index.html
```

Use the UI to fetch and view YouTube video data.

---

### 🧪 Sample API Endpoint

POST /video/save – Saves video data to MongoDB

GET /video/{id} – Retrieves video by YouTube ID

GET /videos – Lists all saved videos

---

### 🖼️ Screenshots

## 🖼️ Screenshots

### 🎯 1. Index Page – Enter YouTube Video URL
This is the main input page where users can submit a YouTube video link.
![Index Page](https://github.com/user-attachments/assets/a9e5bc2e-f26d-4df7-9a6b-d86f38dbafef)

### 📥 2. Data Inserted Confirmation – Same Page
Once a valid video URL is submitted, the corresponding video details are displayed below the form.
![Inserted Data](https://github.com/user-attachments/assets/47dc2fb5-5b7a-4522-87d0-1ce61cf01ad7)

### 📋 3. View All Inserted Data
A page that displays all previously inserted video entries stored in the database.
![All Data Page](https://github.com/user-attachments/assets/3852997c-b015-4199-a520-cee6355a997b)

### ☁️ 4. MongoDB Atlas – Video Data Stored
A view of MongoDB Atlas showing the `videos` collection with inserted documents.
![MongoDB Atlas](https://github.com/user-attachments/assets/7fcb193c-91ab-4ed7-96a8-a7c5d01ad732)

---

## 🧑‍💻 Author

**Prasanth M**  
📧 prasanthtito@gmail.com  
📌 [LinkedIn](https://www.linkedin.com/in/prasanth85)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).