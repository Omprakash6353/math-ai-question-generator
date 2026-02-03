from groq import Groq
import os
import json
import re
from dotenv import load_dotenv

load_dotenv()

# ---------- GROQ CLIENT ----------
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# ---------- SOLVE SIMPLE ARITHMETIC ----------
def solve_math(question: str):
    nums = list(map(int, re.findall(r"\d+", question)))

    if len(nums) < 2:
        return None

    if "+" in question:
        return nums[0] + nums[1]
    if "-" in question:
        return nums[0] - nums[1]
    if "x" in question.lower() or "*" in question:
        return nums[0] * nums[1]
    if "÷" in question or "/" in question:
        return nums[0] // nums[1]

    return None

# ---------- VALIDATE CORRECT OPTION ----------
def fix_correct_option(question_obj: dict):
    try:
        answer = solve_math(question_obj["question"])
        if answer is None:
            return question_obj

        for key, value in question_obj["options"].items():
            digits = re.findall(r"\d+", value)
            if digits and int(digits[0]) == answer:
                question_obj["correctAnswer"] = key
                return question_obj

        return question_obj
    except Exception:
        return question_obj

# ---------- MAIN GENERATOR (USED BY ROUTES) ----------
def generate_questions(question: str, options: dict, correct: str):
    prompt = f"""
You are a professional maths question generator for UK primary students.

Generate EXACTLY TWO new questions.
Rules:
- Same concept as original
- Different numbers
- 4 options (A,B,C,D)
- Exactly ONE correct option
- Include step-by-step explanation
- RETURN ONLY VALID JSON
- NO markdown
- NO extra text

JSON FORMAT:
{{
  "similarQuestions": [
    {{
      "question": "string",
      "options": {{
        "A": "string",
        "B": "string",
        "C": "string",
        "D": "string"
      }},
      "correctAnswer": "A",
      "explanation": "string",
      "difficulty": "Easy"
    }}
  ]
}}

Original Question:
{question}

Original Options:
{options}

Correct Option:
{correct}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
        max_tokens=800
    )

    raw = response.choices[0].message.content
    print("AI RAW:", raw)

    try:
        start = raw.find("{")
        end = raw.rfind("}") + 1
        parsed = json.loads(raw[start:end])

        # 🔥 Fix wrong correct options
        fixed = []
        for q in parsed.get("similarQuestions", []):
            fixed.append(fix_correct_option(q))

        return {"similarQuestions": fixed}

    except Exception as e:
        print("AI PARSE ERROR:", e)
        return {"similarQuestions": []}