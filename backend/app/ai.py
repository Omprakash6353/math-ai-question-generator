import json
import subprocess

MODEL = "llama3.2"

def generate_ai_content(question, options, correct, user_answer):
    prompt = f"""
Generate 2 similar math MCQ questions.

Question: {question}
Options: {options}
Correct: {correct}

Return JSON only:

{{
  "generated": [
    {{
      "question": "...",
      "options": {{"A":"..","B":"..","C":"..","D":".."}},
      "correct": "A"
    }},
    {{
      "question": "...",
      "options": {{"A":"..","B":"..","C":"..","D":".."}},
      "correct": "B"
    }}
  ]
}}
"""

    result = subprocess.run(
        ["ollama", "run", MODEL],
        input=prompt,
        text=True,
        capture_output=True
    )

    raw = result.stdout.strip()
    start = raw.index("{")
    end = raw.rindex("}") + 1
    return json.loads(raw[start:end])