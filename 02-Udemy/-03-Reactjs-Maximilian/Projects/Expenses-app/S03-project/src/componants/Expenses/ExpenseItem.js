import React from "react";

import ExpenseData from "./ExpenseData";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <card className="expense-item">
      <ExpenseData data={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="'expense-item__pric">${props.amount}</div>
      </div>
    </card>
  );
};

export default ExpenseItem;
