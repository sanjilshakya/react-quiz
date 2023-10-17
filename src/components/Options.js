import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, index, dispatch, answer } = useQuiz();
  const quiz = questions[index];

  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {quiz.options.map((option, index) => (
        <button
          className={`btn btn-option 
          ${
            hasAnswered
              ? index === quiz.correctOption
                ? "correct"
                : "wrong"
              : ""
          } 
          ${hasAnswered ? (index === answer ? "answer" : "") : ""}
          `}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
