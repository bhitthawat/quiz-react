import React from "react";

export default function Quiz({ problem, handleChange, isShowScore }) {
  return (
    <>
      <h1>{problem.ques}</h1>
      {problem.ans.map((item) => (
        <React.Fragment key={item.id}>
          <input
            disabled={isShowScore}
            key={item.id}
            value={item.id}
            type="radio"
            checked={item.id == problem.ansId}
            onChange={(e) => handleChange(problem.id, +e.target.value)}
          />
          <span>{item.value}</span>
        </React.Fragment>
      ))}
    </>
  );
}
