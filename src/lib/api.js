const API_BASE = "http://127.0.0.1:8000";

export async function fetchAllQuestions() {
  const res = await fetch(`${API_BASE}/questions`);
  if (!res.ok) throw new Error("Failed to fetch questions");
  return res.json();
}

export async function fetchQuestionById(id) {
  const res = await fetch(`${API_BASE}/question/${id}`);
  if (!res.ok) throw new Error("Failed to fetch question");
  return res.json();
}

export async function generateSimilarQuestions(question, userAnswer) {
  const payload = {
    question: question.question,
    options: question.options,
    correct: question.correct,      // 🔥 REQUIRED
    userAnswer: userAnswer           // 🔥 REQUIRED
  };

  const res = await fetch(`${API_BASE}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  return res.json();
}