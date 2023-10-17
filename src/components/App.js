import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinalScreen from "./FinalScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";

export default function App() {
  const { dispatch, status } = useQuiz();

  useEffect(
    function () {
      async function getQuestions() {
        try {
          // execute npm run server for fake API
          const res = await fetch("http://localhost:8000/questions");
          const data = await res.json();
          dispatch({ type: "dataReceived", payload: data });
        } catch (error) {
          dispatch({ type: "dataFailed" });
        }
      }
      getQuestions();
    },
    [dispatch]
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinalScreen />}
      </Main>
    </div>
  );
}
