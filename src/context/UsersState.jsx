import React, { useState } from "react";
import UserContext from "./UserContext";
const UsersState = (props) => {
  let Loginuser = JSON.parse(localStorage.getItem("Login"));
  // console.log(Loginuser);
  const [users, setUsers] = useState({
    login: Loginuser ? Loginuser.login : false,
    email: Loginuser ? Loginuser.email : "",
  });
  // console.log(users);/

  const [search, setSearch] = useState("")
  // console.log(search)

  const loginUser = (ans) => {
    // console.log(ans);
    localStorage.setItem(
      "Login",
      JSON.stringify({ login: true, email: ans.email })
    );
    setUsers({
      login: true,
      email: ans.email,
    });
  };
  let HandleLogout = () => {
    localStorage.removeItem("Login");
    setUsers({
      login: false,
      email: "",
    });
  };
  const handleSearch = (e) => {
    // console.log(e);
    if(e.key === "Enter"){
      // console.log(e.target.value);
      setSearch(e.target.value)
    }
    
  };
  return (
    <UserContext.Provider
      value={{ users, setUsers, loginUser, HandleLogout, handleSearch,search, setSearch }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UsersState;
