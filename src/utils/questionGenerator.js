// src/utils/questionGenerator.js

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function generateOptions(correct) {
  const distractors = [
    "Option A",
    "Option B",
    "Option C",
    "Option D",
    "Option E",
  ];

  const options = shuffle(
    [correct, ...distractors.filter((d) => d !== correct)]
  ).slice(0, 5);

  return shuffle(options);
}

function createQuestion(baseQuestion, index) {
  const correctAnswer = "Option C"; // hidden correct answer

  return {
    question: `Similar question ${index} based on "${baseQuestion.question}"`,
    type: baseQuestion.type,
    difficulty: baseQuestion.difficulty,
    options: generateOptions(correctAnswer),
    correctAnswer,

    // 🧠 STEP BY STEP EXPLANATION
    explanationSteps: [
      "Identify what the question is asking.",
      "Recall the relevant formula or concept.",
      "Apply the values given in the question.",
      "Solve step by step to reach the result.",
    ],

    finalExplanation:
      "Following these steps leads to the correct answer.",
  };
}

export function generateQuestions(baseQuestion) {
  return [
    createQuestion(baseQuestion, 1),
    createQuestion(baseQuestion, 2),
  ];
}