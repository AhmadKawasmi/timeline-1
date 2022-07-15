import React, { useState } from "react";
import "./style.css";
import MyTimeLine from "../Timeline/MyTimeLine";

const Body = (props) => {
  const { user,expenses,handleGetExpenses } = props;


  return (
    <div className="body">
      Body
      <br />

      <MyTimeLine expenses={expenses} title="my timeline" handleGetExpenses={handleGetExpenses}/>
    </div>
  );
};

export default Body;
