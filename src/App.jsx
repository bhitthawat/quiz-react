import { useState } from "react";
import { quizData } from "./store/data";
import Quiz from "./compenent/Quiz";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function App() {
  const [data, setData] = useState(shuffle(quizData));

  const handleChange = (quesId, ansId) => {
    setData((prev) =>
      prev.map((item) => (item.id == quesId ? { ...item, ansId } : item))
    );
  };

  const score = data.reduce(
    (acc, cur) => (cur.ansId == cur.solutionId ? acc + 1 : acc),
    0
  );

  const isShowScore = data.every((item) => item.ansId !== null);

  return (
    <>
      {isShowScore && (
        <h1>
          Your Score is {score} / {data.length}
        </h1>
      )}
      {data.map((problem) => (
        <Quiz
          key={problem.id}
          problem={problem}
          handleChange={handleChange}
          isShowScore={isShowScore}
        />
      ))}
    </>
  );
}

export default App;
