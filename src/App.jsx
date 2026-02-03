import { useEffect, useState } from "react";
import QuestionSelector from "./components/QuestionSelector";
import SelectedQuestionCard from "./components/SelectedQuestionCard";
import GeneratedQuestions from "./components/GeneratedQuestions";
import GenerateButton from "./components/GenerateButton";

import {
  fetchAllQuestions,
  fetchQuestionById,
  generateSimilarQuestions
} from "./lib/api";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [generated, setGenerated] = useState([]);

  // LOAD QUESTION LIST
  useEffect(() => {
    fetchAllQuestions().then(setQuestions).catch(console.error);
  }, []);

  // SELECT QUESTION
  const handleSelect = async (id) => {
    const q = await fetchQuestionById(id);
    setSelectedQuestion(q);
    setUserAnswer(null);
    setGenerated([]);
  };

  // GENERATE
  const handleGenerate = async () => {
    if (!selectedQuestion || !userAnswer) return;

    const result = await generateSimilarQuestions(
      selectedQuestion,
      userAnswer
    );

    setGenerated(result.similarQuestions || []);
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <QuestionSelector
        questions={questions}
        onSelect={handleSelect}
      />

      <div className="col-span-2 space-y-6">
        <SelectedQuestionCard
          question={selectedQuestion}
          onAnswered={setUserAnswer}
        />

        <GenerateButton
          disabled={!userAnswer}
          onClick={handleGenerate}
        />

        <GeneratedQuestions questions={generated} />
      </div>
    </div>
  );
}