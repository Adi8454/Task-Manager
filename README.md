<img width="1269" height="685" alt="image" src="https://github.com/user-attachments/assets/4ed3d62b-0397-4d6c-8196-9db9f76a6df0" />
# 🚀 Task Manager — Full Stack MERN Application

A modern and minimal **Task Manager web application** built using the MERN stack. This project demonstrates full-stack development skills including API design, CRUD operations, state management, and clean code practices.

---

## 🌟 Overview

This application allows users to efficiently manage their daily tasks by providing features like creating, updating, completing, and deleting tasks. It focuses on **functionality, performance, and clean architecture** rather than heavy UI design.

---

## 🛠️ Tech Stack

### 💻 Frontend

* React (Vite)
* JavaScript (ES6+)
* CSS (Custom styling)

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB (Mongoose ODM)

### 🔧 Tools & Extras

* REST API
* Docker (optional)
* Vite Proxy (for seamless API calls)

---

## ✨ Key Features

✅ Create new tasks
✅ View all tasks in real-time
✅ Mark tasks as completed
✅ Edit task titles (double-click / edit button)
✅ Delete tasks
✅ Persistent storage using MongoDB
✅ Error handling and loading states

---

## 📂 Project Structure

```id="j3qf6o"
task-manager/
│
├── backend/        # Express server & API
├── frontend/       # React app (Vite)
└── README.md
```

---

## ⚙️ Setup & Installation

### 📌 Prerequisites

* Node.js (v18+)
* MongoDB (local or cloud)

---

### ▶️ Run Backend

```bash id="zx09hr"
cd backend
npm install
```

Create a `.env` file:

```env id="63x57n"
MONGO_URI=your_mongodb_connection_string
```

Start server:

```bash id="y80rmk"
npm run dev
```

📍 Runs on: http://localhost:5000

---

### ▶️ Run Frontend

```bash id="4a6p6v"
cd frontend
npm install
npm run dev
```

📍 Runs on: http://localhost:3000

---

### 🐳 Run with Docker (Optional)

```bash id="gk5k2r"
docker-compose up --build
```

---

## 📡 API Documentation

| Method | Endpoint   | Description                          |
| ------ | ---------- | ------------------------------------ |
| GET    | /tasks     | Retrieve all tasks                   |
| POST   | /tasks     | Create new task `{ title }`          |
| PATCH  | /tasks/:id | Update task `{ completed?, title? }` |
| DELETE | /tasks/:id | Delete a task                        |

---

## ⚖️ Design Decisions & Trade-offs

* MongoDB chosen for realistic full-stack architecture
* Focus on backend logic and API correctness over UI complexity
* No authentication to keep scope minimal
* Vite proxy used to simplify frontend-backend communication
* Lightweight styling for faster development

---

## 🎯 Learning Outcomes

* Building RESTful APIs with Express
* Integrating frontend with backend services
* Managing application state in React
* Handling async operations and errors
* Structuring scalable full-stack applications

---

## 🚀 Future Enhancements

🔹 Add user authentication (JWT)
🔹 Implement task filtering (completed/incomplete)
🔹 Improve UI with a component library
🔹 Add unit and integration tests
🔹 Deploy to cloud (Vercel + Render)

---

## 📸 Preview (Add Screenshot Here)

> Add a screenshot of your app for better presentation
> Example: `![App Screenshot](./screenshot.png)`

---

## 📌 Conclusion

This project reflects a practical implementation of full-stack development concepts and demonstrates the ability to build scalable, maintainable web applications.

---


