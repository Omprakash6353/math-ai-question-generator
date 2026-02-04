🧮 AI-Powered Math Question Generator & Practice System

An intelligent, full-stack web application that allows students to practice math questions, receive instant feedback with step-by-step explanations, and generate similar questions using AI.
Built with React + FastAPI + MongoDB + Groq LLM, designed for scalability, correctness, and clarity.

⸻

📌 What This Project Does (In Simple Words)
• Loads math questions from a database
• Shows them in a clean, interactive UI
• Lets the user select an answer
• Instantly tells whether the answer is correct or wrong
• Shows step-by-step explanation
• Generates two new similar questions using AI
• Lets users practice generated questions the same way

This is not a demo project — it is structured like a real production system.

⸻

📋 Table of Contents
• 🌟 Features
• 🏗️ Architecture
• 🔧 Technologies Used
• 📋 Prerequisites
• 🚀 Installation (Mac / Linux / Windows)
• ⚙️ Configuration
• 📖 Usage
• 🎯 API Endpoints
• 🖥️ Frontend UI Overview
• 📁 Project Structure
• 🧪 Testing
• 🐛 Troubleshooting
• 🤝 Contributing
• 📄 License

⸻

🌟 Features

🧠 Intelligent Question Practice
• Questions loaded dynamically from MongoDB
• Supports MCQ format with labeled options (A, B, C, D)
• Correct / wrong answer detection
• Answer locking after selection

📘 Step-by-Step Explanations
• Displays explanation after answering
• Works for both correct and wrong answers
• Helps students understand the concept, not just the answer

🤖 AI-Generated Similar Questions
• Uses Groq LLM to generate 2 similar questions
• Ensures:
• Same concept
• Same difficulty
• Different numbers (not identical to original)
• Includes:
• Correct answer
• Full explanation
• Difficulty tag

🎨 Modern Frontend UI
• Built with React + Vite + Tailwind
• Card-based layout
• Dark / light friendly design
• Skeleton loaders for better UX

🧪 Validation & Reliability
• AI outputs validated programmatically
• Auto-correction of wrong AI answers
• Unit tests for math logic
• Clean error handling

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
• React
• Vite
• Tailwind CSS
• JavaScript (ES6+)

Backend
• FastAPI
• Python 3.9+
• Pydantic
• Uvicorn

Database
• MongoDB (question storage)

AI
• Groq LLM API
• YAML-based prompt management
• Output validation & correction

Testing
• Pytest

⸻

📋 Prerequisites

System Requirements
• Node.js 18+
• Python 3.9+
• MongoDB (local or Atlas)
• Internet connection (for AI generation)

Supported OS

✅ macOS
✅ Linux (Ubuntu / Debian)
✅ Windows 10 / 11

⸻

🚀 Installation

1️⃣ Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

⸻

2️⃣ Backend Setup (FastAPI)

Create Virtual Environment

cd backend
python -m venv venv

Activate Environment
macOS / Linux

source venv/bin/activate

Windows

venv\Scripts\activate

Install Dependencies

pip install -r requirements.txt

⸻

3️⃣ Frontend Setup (React)

cd ..
npm install

⸻

⚙️ Configuration

1️⃣ Environment Variables

Create .env inside backend/:

GROQ_API_KEY=your_groq_api_key_here
MONGO_URI=mongodb://localhost:27017

(Use .env.example as reference)

⸻

📖 Usage

Start Backend Server

cd backend
source venv/bin/activate # macOS/Linux

# or venv\Scripts\activate # Windows

uvicorn app.main:app --reload

Backend runs at:

http://localhost:8000

Swagger Docs:

http://localhost:8000/docs

⸻

Start Frontend Server

Open new terminal:

cd your-project-root
npm run dev

Frontend runs at:

http://localhost:5173
(or 5174 if port is busy)

⸻

🎯 API Endpoints

Questions
• GET /questions – List all questions
• GET /question/{id} – Get full question

AI Generation
• POST /generate

{
"question": "string",
"options": { "A": "...", "B": "...", "C": "...", "D": "..." },
"correct": "A",
"userAnswer": "B"
}

⸻

🖥️ Frontend UI Overview

Sections
• Question List Panel
• Selected Question Card
• Answer Options with feedback
• Explanation Panel
• Generated Questions Section (same page)

UX Highlights
• Answer locking
• Color feedback (green/red)
• Skeleton loaders
• Clean card layout

⸻

📁 Project Structure

Math_Om/
│
├── backend/
│ ├── app/
│ │ ├── main.py
│ │ ├── routes.py
│ │ ├── db.py
│ │ ├── services/
│ │ │ └── ai_services.py
│ │ ├── config/
│ │ │ ├── ai_config.yaml
│ │ │ └── prompts.yaml
│ ├── tests/
│ │ └── test_solve_math.py
│ ├── requirements.txt
│ └── .env.example
│
├── src/
│ ├── components/
│ ├── lib/
│ ├── App.jsx
│ └── main.jsx
│
├── package.json
├── README.md
└── vite.config.js

⸻

🧪 Testing

Run backend tests:

cd backend
pytest

⸻

🐛 Troubleshooting

❌ Backend not starting
• Check Python version
• Ensure venv is activated
• Reinstall requirements

❌ AI not generating
• Verify GROQ_API_KEY
• Check API quota
• Check backend logs

❌ Frontend blank page
• Ensure backend is running
• Check API base URL
• Restart Vite server

⸻

🤝 Contributing

Contributions are welcome! 1. Fork the repo 2. Create feature branch 3. Commit changes 4. Open Pull Request

⸻

📄 License

MIT License
Free to use, modify, and distribute.

⸻

⭐ Final Note

This project is designed to be:
• Mentor-ready
• Interview-ready
• Production-structured
