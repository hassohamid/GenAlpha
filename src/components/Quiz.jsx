import { useCallback, useState } from "react";
import questions from "../questions";
import bgVideo from "../assets/brainrot.mp4";
import Timer from "./Timer";
import Answers from "./Answers";
import Question from "./Question";
import "../App.css";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <>
        <div className="quiz-completed">
          <h1>muuhahaha</h1>
          <img id="wtf" src="./src/assets/giphy.gif" />
        </div>
      </>
    );
  }

  return (
    <div className="quiz-container">
      <video className="bg-video" src={bgVideo} autoPlay loop muted />
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
