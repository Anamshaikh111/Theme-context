

function QuestionCard({ question, options, handleAnswer }) {
  return (
    <div className="card p-4 shadow">
      <h4>{question}</h4>

      <div className="mt-3">
        {options.map((option, index) => (
          <button
            key={index}
            className="btn btn-outline-primary d-block w-100 mb-2"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;