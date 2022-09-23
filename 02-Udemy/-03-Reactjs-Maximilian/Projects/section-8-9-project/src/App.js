import { useState } from "react";
import React from "react ";
import AddUser from "./componants/AddUser";
import UserList from "./componants/UserList";

function App() {
  const [UserList, setUseresList] = useState([]);
  const addUserHandeler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAdduser={addUserHandeler} />
      <UserList user={userslist} />
    </div>
  );
}

export default App;
