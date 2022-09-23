import React from "react";
import "./ExpenseData.css";

const ExpenseData = (props) => {
  const month = props.data.tolocaleString("en-US", { month: "long" });
  const day = props.data.tolocaleString("en-US", { day: "2-digit" });
  const year = props.data.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
export default ExpenseData;
