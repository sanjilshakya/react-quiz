import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const SECOND_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  pointsEarned: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: SECOND_PER_QUESTION * state.questions.length,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        pointsEarned:
          question.correctOption === action.payload
            ? state.pointsEarned + question.points
            : state.pointsEarned,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return { ...state, status: "finished" };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, pointsEarned, secondsRemaining } =
    state;
  const totalPoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        pointsEarned,
        secondsRemaining,
        totalPoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Context is being outside the Context Provider");
  return context;
}

export { QuizProvider, useQuiz };
