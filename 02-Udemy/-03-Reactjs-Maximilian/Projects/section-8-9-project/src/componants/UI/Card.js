import React from "react";
import classes './Card.module.css';

const card = (props) => {
  return <div className={'${classes.card} ${props.className}'>{props.childern}</div>;
};

export default card;
