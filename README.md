# AI Math Question Generator 🎓🤖

An AI-powered math practice platform that:
- Loads questions from MongoDB
- Evaluates student answers
- Generates 2 similar questions using Groq LLM
- Shows step-by-step explanations

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS

### Backend
- FastAPI
- MongoDB
- Groq LLM
- YAML-based prompt configuration

---

## 🧠 Features
- Question bank from database
- Correct / Wrong answer detection
- Explanation shown after attempt
- AI-generated similar questions
- No OpenAI dependency (Groq only)

---

## 🛠️ Setup Instructions

### 1️⃣ Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload

## 📂 Project Structure
- backend/        → FastAPI + AI logic
- src/            → React frontend
- app/config/     → YAML prompts & AI config