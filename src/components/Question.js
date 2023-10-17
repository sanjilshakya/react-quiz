import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
function Question() {
  const { questions, index, dispatch, answer } = useQuiz();
  const quiz = questions[index];
  return (
    <div>
      <h4>{quiz?.question}</h4>
      <Options quiz={quiz} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
