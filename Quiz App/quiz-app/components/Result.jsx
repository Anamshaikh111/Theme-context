

import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 0;

  const savedScore = localStorage.getItem("quizScore");

  return (
    <div className="container text-center mt-5">
      <h1>Quiz Result</h1>

      <h3 className="mt-4">
        Your Score: {score} / {total}
      </h3>

      <h5 className="mt-3">
        Previous Saved Score: {savedScore}
      </h5>

      <button
        className="btn btn-success mt-4"
        onClick={() => navigate("/quiz")}
      >
        Retake Quiz
      </button>
    </div>
  );
}

export default Result;