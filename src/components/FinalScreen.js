import { useQuiz } from "../contexts/QuizContext";

function FinalScreen() {
  const { pointsEarned, totalPoints, dispatch } = useQuiz();
  const percentage = (pointsEarned / totalPoints) * 100;
  return (
    <>
      <p className="result">
        You scored {pointsEarned} out of {totalPoints} ({Math.ceil(percentage)}
        %)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinalScreen;
