import React from "react";
import Expenses from "./componants/Expenses/Expenses";

const App = () => {
  const Expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "new tv", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "car insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "new desk(wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2> let's get started</h2>
      <Expenses items={Expenses} />
    </div>
  );
};
export default App;
