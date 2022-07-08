import React from "react";
import MyTimelineItem from "./MyTimelineItem";

const MyTimeLine = (props) => {
  const { expenses, title, handleGetExpenses } = props;
  return (
    <div align="alternate">
      <h1>{title}</h1>
      {expenses.map((expense, i) => (
        <MyTimelineItem key={i} expense={expense} title={expense.title} handleGetExpenses={handleGetExpenses} />
      ))}
    </div>
  );
};

export default MyTimeLine;
