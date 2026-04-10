<img width="1235" height="682" alt="image" src="https://github.com/user-attachments/assets/5ef2df93-2824-4fe1-956a-1082f1d12f98" />
# Task Manager — MERN Stack

## Setup & Run

### Prerequisites
- Node.js 18+
- MongoDB running locally (or use Docker)

### Backend
```bash
cd backend
npm install
# Edit .env → set MONGO_URI if needed
npm run dev        # runs on http://localhost:5000
```

### Frontend
```bash
cd frontend
npm install
npm run dev        # runs on http://localhost:5173
```

### Docker (optional)
```bash
docker-compose up --build
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| POST | /tasks | Create task `{ title }` |
| PATCH | /tasks/:id | Update `{ completed?, title? }` |
| DELETE | /tasks/:id | Delete task |

## Assumptions & Trade-offs
- MongoDB with Mongoose used for persistence (satisfies the bonus persistence requirement)
- In-memory storage was considered but MongoDB better reflects real-world MERN usage
- No auth — out of scope for this exercise
- Vite proxy used so frontend/backend run on separate ports without CORS issues in dev
- No CSS framework — all styles are inline for portability and zero extra deps
- Edit is triggered by double-clicking a task title or the Edit button
