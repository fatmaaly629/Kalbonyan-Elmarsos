import React, { useState } from "react";
import Card from "../UI/card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import Classes from "./AddUser.Module.css";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandeler = (Event) => {
    Event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === o) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age (non empty value)",
      });

      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age ",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);

    // console.log(enteredUsername,enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const usernamechangeHandler = (Event) => {
    setEnteredUsername(Event.target.value);
  };
  const agechangehandler = (Event) => {
    setEnteredAge(Event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onconfirm={errorHandler}
        />
      )}
      <card className={classes.input}>
        <form onSubmit={addUserHandeler}>
          <label htmlFor="Username">username</label>
          <input
            id="username"
            type="text "
            value={enteredUsername}
            onchange={usernamechangeHandler}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number "
            value={enteredAge}
            onchange={agechangehandler}
          ></input>
          <button onclick={props.onconfirm} type="submit">
            Add User
          </button>
        </form>
      </card>
    </div>
  );
};

export default AddUser;
