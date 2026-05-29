

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data";
import QuestionCard from "./QuestionCard";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      localStorage.setItem("quizScore", score + (selectedOption === questions[currentQuestion].answer ? 1 : 0));

      navigate("/result", {
        state: {
          score:
            score +
            (selectedOption === questions[currentQuestion].answer ? 1 : 0),
          total: questions.length,
        },
      });
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Quiz</h2>

      <div className="progress mb-4">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        >
          {Math.round(progress)}%
        </div>
      </div>

      <QuestionCard
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}

export default Quiz;