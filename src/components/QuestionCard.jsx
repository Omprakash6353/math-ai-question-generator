import { useState } from "react";

export default function QuestionCard({ question, onGenerate }) {
  const [chosen, setChosen] = useState(null);

  const correct = question.correctAnswer;

  return (
    <div className="p-6 bg-white rounded-xl shadow space-y-4">
      <h3 className="font-semibold">{question.question}</h3>

      {Object.entries(question.options).map(([k, v]) => (
        <button
          key={k}
          onClick={() => setChosen(k)}
          className={`block w-full text-left p-3 rounded border
            ${chosen && k === correct ? "bg-green-100" : ""}
            ${chosen && k !== correct && k === chosen ? "bg-red-100" : ""}`}
        >
          {k}. {v}
        </button>
      ))}

      {chosen && (
        <div className="p-3 bg-slate-50 rounded">
          {chosen === correct ? "✅ Correct" : "❌ Wrong"}
          <p className="mt-2 text-sm">{question.explanation}</p>
        </div>
      )}

      {onGenerate && (
        <button
          onClick={onGenerate}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Generate Similar Questions
        </button>
      )}
    </div>
  );
}