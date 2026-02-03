import { useEffect, useState } from "react";

export default function SelectedQuestionCard({ question, onAnswered }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Reset when question changes
  useEffect(() => {
    setSelected(null);
    setShowResult(false);
  }, [question]);

  if (!question) return null;

  // ✅ Handle MongoDB schema
  const correctKey =
    question.correct || question.correct_option;

  const options = question.options || {};

  const handleSelect = (key) => {
    setSelected(key);
    setShowResult(true);

    // ✅ CORRECT PROP NAME
    if (typeof onAnswered === "function") {
      onAnswered(key);
    }
  };

  return (
    <div className="rounded-xl border bg-white dark:bg-slate-900 p-6 shadow">
      <h2 className="text-lg font-semibold mb-4">
        {question.question}
      </h2>

      <div className="space-y-2">
        {Object.entries(options).map(([key, value]) => {
          const isCorrect = key === correctKey;
          const isSelected = key === selected;

          let style =
            "border rounded-md px-4 py-2 cursor-pointer transition";

          if (showResult && isCorrect) {
            style += " bg-green-100 border-green-500";
          } else if (showResult && isSelected && !isCorrect) {
            style += " bg-red-100 border-red-500";
          } else {
            style += " hover:bg-slate-50 dark:hover:bg-slate-800";
          }

          return (
            <div
              key={key}
              onClick={() => handleSelect(key)}
              className={style}
            >
              <strong>{key}.</strong> {value}
            </div>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-4 font-medium">
          {selected === correctKey ? (
            <p className="text-green-700">
              ✅ Correct Answer
            </p>
          ) : (
            <p className="text-red-700">
              ❌ Wrong Answer
            </p>
          )}
        </div>
      )}
    </div>
  );
}