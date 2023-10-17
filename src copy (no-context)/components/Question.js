import Options from "./Options";
function Question({ questions, index, dispatch, answer }) {
  const quiz = questions[index];
  return (
    <div>
      <h4>{quiz?.question}</h4>
      <Options quiz={quiz} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
