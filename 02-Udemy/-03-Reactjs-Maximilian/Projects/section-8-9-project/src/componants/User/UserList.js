import React from "react";
import card from "./Card";
import classes from "./UserList.css";
const UserList = (props) => {
  return (
    <card className={classes.user}>
      <ul>
        {props.users.map((user) => (
          <li key="user.id">
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </card>
  );
};

export default UserList;
