import { useState } from "react";

export default function GeneratedQuestions({ questions }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Similar Questions</h3>

      {questions.map((q, index) => (
        <GeneratedCard key={index} q={q} />
      ))}
    </div>
  );
}

function GeneratedCard({ q }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="rounded-xl border bg-white p-6 shadow">
      <p className="font-medium mb-3">{q.question}</p>

      <div className="space-y-2">
        {Object.entries(q.options).map(([key, value]) => {
          const isCorrect = key === q.correctAnswer;
          const isSelected = key === selected;

          let style = "border hover:bg-slate-50";
          if (selected) {
            if (isCorrect) style = "border-green-600 bg-green-100";
            else if (isSelected) style = "border-red-600 bg-red-100";
          }

          return (
            <div
              key={key}
              onClick={() => setSelected(key)}
              className={`cursor-pointer rounded-lg p-3 ${style}`}
            >
              <strong>{key}.</strong> {value}
            </div>
          );
        })}
      </div>

      {selected && (
        <div className="mt-4">
          {selected === q.correctAnswer ? (
            <p className="font-semibold text-green-700">✅ Correct</p>
          ) : (
            <p className="font-semibold text-red-700">❌ Wrong</p>
          )}

          <div className="mt-2 rounded-md bg-slate-100 p-3 text-sm">
            {q.explanation}
          </div>
        </div>
      )}
    </div>
  );
}