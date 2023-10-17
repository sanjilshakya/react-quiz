import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
function Question() {
  const { questions, index } = useQuiz();
  const quiz = questions[index];
  return (
    <div>
      <h4>{quiz?.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
