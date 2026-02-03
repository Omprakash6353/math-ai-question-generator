from fastapi import APIRouter, HTTPException
from pymongo import MongoClient
from app.services.ai_services import generate_questions

router = APIRouter()

# ---------- MONGODB ----------
client = MongoClient("mongodb://localhost:27017")
db = client["math_ai"]
collection = db["questions"]

# ---------- ROOT ----------
@router.get("/")
async def root():
    return {"message": "API running"}

# ---------- GET ALL QUESTIONS ----------
@router.get("/questions")
async def get_all_questions():
    docs = list(
        collection.find(
            {},
            {
                "_id": 1,
                "question": 1,
                "type": 1,
                "difficulty": 1
            }
        )
    )
    return docs

# ---------- GET SINGLE QUESTION ----------
@router.get("/question/{qid}")
async def get_question(qid: str):
    doc = collection.find_one({"_id": qid})
    if not doc:
        raise HTTPException(status_code=404, detail="Question not found")
    return doc

# ---------- GENERATE SIMILAR QUESTIONS ----------
@router.post("/generate")
async def generate(data: dict):
    """
    Expected frontend payload:
    {
      question: string,
      options: {A,B,C,D},
      userAnswer: "A|B|C|D"
    }
    """

    try:
        print("REQUEST PAYLOAD:", data)

        question_text = data.get("question")
        options = data.get("options")
        user_answer = data.get("userAnswer")

        if not question_text or not options or not user_answer:
            raise HTTPException(
                status_code=400,
                detail="Missing question, options or userAnswer"
            )

        # 🔥 FETCH CORRECT ANSWER FROM DB
        doc = collection.find_one({"question": question_text})
        if not doc:
            raise HTTPException(
                status_code=404,
                detail="Original question not found in DB"
            )

        correct = doc.get("correct_option")
        if not correct:
            raise HTTPException(
                status_code=500,
                detail="Correct option missing in DB"
            )

        # 🔥 AI GENERATION
        result = generate_questions(
            question=question_text,
            options=options,
            correct=correct
        )

        return result

    except HTTPException:
        raise
    except Exception as e:
        print("❌ GENERATE ERROR:", e)
        return {"similarQuestions": []}