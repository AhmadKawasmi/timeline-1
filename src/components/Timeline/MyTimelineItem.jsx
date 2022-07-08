import React from "react";
import { deleteExpense } from "../../services/ApiManager";
const MyTimelineItem = (props) => {
  const { expense, handleGetExpenses } = props;
  const paperstyle = {
    padding: "8px 1px",
    textAlign: "center",
  };
  const handleDelete = async function () {
    try {
      await deleteExpense(expense._id);
      handleGetExpenses();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  return (<div>
    {expense.title} - {expense.amount} NIS
    <button onClick={handleDelete}>delete</button>
  </div>

  );
};

export default MyTimelineItem;
