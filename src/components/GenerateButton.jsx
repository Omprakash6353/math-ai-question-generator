export default function GenerateButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg px-5 py-3 font-semibold text-white
        ${disabled ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
    >
      Generate Similar Questions
    </button>
  );
}