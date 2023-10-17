function FinalScreen({ pointsEarned, totalPoints, dispatch }) {
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
