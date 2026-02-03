export default function QuestionSelector({ questions, onSelect }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">Question Bank</h2>
      {questions.map(q => (
        <div
          key={q._id}
          onClick={() => onSelect(q._id)}
          className="p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-slate-50"
        >
          {q.question}
        </div>
      ))}
    </div>
  );
}