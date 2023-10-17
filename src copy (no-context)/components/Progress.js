function Progress({ pointsEarned, totalPoints, index, questions, answer }) {
  return (
    <header className="progress">
      <progress
        max={questions.length}
        value={index + +(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{questions.length}
      </p>
      <p>
        <strong>{pointsEarned}</strong>/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
