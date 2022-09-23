import React from "react";
import classes from "./Button.css";
const Button = (props) => {
  return (
    <button
      button
      className={classes.button}
      type={props.type}
      onClick={props.onclick}
    ></button>
  );
};

export default Button;
