import React from "react";
import userList from "../../constants/usersList";
function ActiveUser(props) {
  const handleChange = event => {
    props.onActiveUserChange(event.target.value);
  };
  const usersOptions = userList.map((user, index) => (
    <option key={`${user}-${index}`} value={user}>
      {user}
    </option>
  ));
  return (
    <div>
      <label>
        Select Active User:
        <select value={props.activeUser} onChange={handleChange}>
          {usersOptions}
        </select>
      </label>
    </div>
  );
}

export default ActiveUser;
