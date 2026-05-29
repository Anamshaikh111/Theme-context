

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Quiz App</h1>

      <button
        className="btn btn-primary"
        onClick={() => navigate("/quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Home;