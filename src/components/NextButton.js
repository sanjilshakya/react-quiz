import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, questions, index } = useQuiz();
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({
          type: index < questions.length - 1 ? "nextQuestion" : "finished",
        })
      }
    >
      {index < questions.length - 1 ? "Next" : "Finish"}
    </button>
  );
}

export default NextButton;
