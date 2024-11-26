import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userContext from "./context/UserContext";

const App = () => {
  const ctx2 = useContext(userContext);
  // console.log(ctx2.users.login);
  let loginValue = ctx2.users.login;
  // console.log(loginValue);  
  return (
    <div>
      <BrowserRouter>
        <div className="pb-16">
          <Navbar  />
        </div>
        <Routes>
          <Route
            path="/"
            element={loginValue === true ? <Home />:<Navigate to="/login" />}/>
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={loginValue === false ? <Login /> :<Navigate to="/" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={loginValue === true ? <Cart /> : <Navigate to="/login" />}
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
