import { SignalLow, SignalMedium, SignalHigh } from "lucide-react";

export function Badge({ children, variant = "default" }) {
  // Normalize text (Easy / Medium / Hard)
  const value = typeof children === "string" ? children.toLowerCase() : "";

  const difficultyMap = {
    easy: {
      icon: <SignalLow className="h-3.5 w-3.5" />,
      styles: "bg-green-100 text-green-700",
    },
    medium: {
      icon: <SignalMedium className="h-3.5 w-3.5" />,
      styles: "bg-yellow-100 text-yellow-700",
    },
    hard: {
      icon: <SignalHigh className="h-3.5 w-3.5" />,
      styles: "bg-red-100 text-red-700",
    },
  };

  const isDifficulty = variant === "difficulty" && difficultyMap[value];

  return (
    <span
      className={`
        inline-flex items-center gap-1
        rounded-md px-2 py-0.5 text-xs font-medium
        ${
          isDifficulty
            ? difficultyMap[value].styles
            : "bg-gray-100 text-gray-700"
        }
      `}
    >
      {isDifficulty && difficultyMap[value].icon}
      {children}
    </span>
  );
}