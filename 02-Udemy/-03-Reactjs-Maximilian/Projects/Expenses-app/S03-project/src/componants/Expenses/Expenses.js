import React from "React ";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].date}
        date={props.items[0].date}
      />

      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].date}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].date}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].date}
        date={props.items[3].date}
      />
    </card>
  );
};

export default Expenses;
