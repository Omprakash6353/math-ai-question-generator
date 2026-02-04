🧮 AI-Powered Math Question Generator & Practice System

An intelligent, full-stack web application that allows students to practice math questions, receive instant feedback with step-by-step explanations, and generate similar questions using AI.

Built with React + FastAPI + MongoDB + Groq LLM, designed for scalability, correctness, and clarity.

⸻

📌 What This Project Does
	•	Loads math questions from a database
	•	Displays them in an interactive UI
	•	Allows users to select an answer
	•	Instantly evaluates correctness
	•	Shows step-by-step explanations
	•	Generates two similar questions using AI
	•	Allows practicing generated questions the same way

⚠️ This is not a demo project — it follows real production structure.

⸻

📋 Table of Contents
	•	🌟 Features
	•	🏗️ Architecture
	•	🔧 Technologies Used
	•	📋 Prerequisites
	•	🚀 Installation
	•	⚙️ Configuration
	•	📖 Usage
	•	🎯 API Endpoints
	•	🖥️ Frontend UI Overview
	•	📁 Project Structure
	•	🧪 Testing
	•	🐛 Troubleshooting
	•	🤝 Contributing
	•	📄 License

⸻

🌟 Features

🧠 Intelligent Question Practice
	•	Dynamic question loading from MongoDB
	•	MCQ format (A, B, C, D)
	•	Correct / wrong answer detection
	•	Answer locking after selection

📘 Step-by-Step Explanations
	•	Explanation shown after answer selection
	•	Works for both correct and wrong answers
	•	Focused on learning, not guessing

🤖 AI-Generated Similar Questions
	•	Uses Groq LLM
	•	Generates 2 new questions
	•	Ensures:
	•	Same concept
	•	Same difficulty
	•	Different numbers
	•	Includes:
	•	Correct option
	•	Explanation
	•	Difficulty tag

🎨 Modern UI
	•	React + Vite + Tailwind
	•	Card-based layout
	•	Skeleton loaders
	•	Clean UX

⸻

🏗️ Architecture

graph TB
    A[User - Browser] --> B[React Frontend]
    B --> C[FastAPI Backend]

    C --> D[MongoDB Question Bank]
    D --> C

    C --> E[Answer Validation Logic]
    E --> F[Correct / Wrong + Explanation]
    F --> B

    C --> G[AI Question Generator Service]
    G --> H[Groq LLM API]
    H --> G

    G --> I[Generated Similar Questions]
    I --> C
    C --> B


⸻

🔧 Technologies Used

Frontend
	•	React
	•	Vite
	•	Tailwind CSS
	•	JavaScript (ES6+)

Backend
	•	FastAPI
	•	Python 3.9+
	•	Pydantic
	•	Uvicorn

Database
	•	MongoDB

AI
	•	Groq LLM API
	•	YAML-based prompt management
	•	Output validation

Testing
	•	Pytest

⸻

📋 Prerequisites

System Requirements
	•	Node.js 18+
	•	Python 3.9+
	•	MongoDB (local or Atlas)
	•	Internet connection

Supported OS

✅ macOS
✅ Linux
✅ Windows 10 / 11

⸻

🚀 Installation

1️⃣ Clone Repository

git clone https://github.com/Omprakash6353/math-ai-question-generator.git
cd math-ai-question-generator


⸻

2️⃣ Backend Setup

cd backend
python -m venv venv

Activate venv:

macOS / Linux

source venv/bin/activate

Windows

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt


⸻

3️⃣ Frontend Setup

cd ..
npm install


⸻

⚙️ Configuration

Create .env inside backend/:

GROQ_API_KEY=your_groq_api_key_here
MONGO_URI=mongodb://localhost:27017


⸻

📖 Usage

Start Backend

cd backend
source venv/bin/activate   # macOS/Linux
uvicorn app.main:app --reload

Backend:

http://localhost:8000

Swagger:

http://localhost:8000/docs


⸻

Start Frontend

npm run dev

Frontend:

http://localhost:5173


⸻

🎯 API Endpoints

Questions
	•	GET /questions
	•	GET /question/{id}

AI Generation
	•	POST /generate

{
  "question": "string",
  "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
  "correct": "A",
  "userAnswer": "B"
}


⸻

📁 Project Structure

math-ai-question-generator/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes.py
│   │   ├── db.py
│   │   ├── services/
│   │   │   └── ai_services.py
│   │   └── config/
│   │       ├── ai_config.yaml
│   │       └── prompts.yaml
│   ├── tests/
│   ├── requirements.txt
│   └── .env.example
├── src/
├── package.json
├── README.md
└── vite.config.js


⸻

🧪 Testing

cd backend
pytest


⸻

🐛 Troubleshooting
	•	Backend not starting → check venv + Python version
	•	AI not generating → check GROQ_API_KEY
	•	Frontend blank → backend must be running

⸻

📄 License

MIT License — free to use and modify.

⸻

⭐ Final Note

This project is:
	•	✅ Interview-ready
	•	✅ Mentor-ready
	•	✅ Production-structured

