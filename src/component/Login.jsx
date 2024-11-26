import React, { useContext, useRef } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userContext from "../context/UserContext";
const Login = () => {
   let ctx2=useContext(userContext)
   console.log(ctx2)


  let arr=JSON.parse(localStorage.getItem("usersData"))||[]
  let EmailRef=useRef();
  let PasswordRef=useRef();
  let navigator=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    let obj={
      email:EmailRef.current.value,
      Password:PasswordRef.current.value,
    }
    console.log(obj)
    let existingUser=arr.find((item)=>item.email===obj.email)
    if(existingUser){
      if(existingUser.Password===obj.Password){
        toast.success("Login successfully",{position:"top-center",theme:"dark"})
        navigator("/")
        ctx2.loginUser({
          login:true,
          email:obj.email
        })
      }
      else{
        toast.error("Wrong Password",{position:"top-center",theme:"dark"})
      }
    }
    else{
      toast.error("User not found",{position:"top-center",theme:"dark"})
    }
  }

  // console.log(arr)
  return (
    <div className="mt-10">
      <form className="max-w-md mx-auto bg-gray-700 pt-5 pb-2 pl-3">
        <h2 className="text-red-500 mb-5">Login</h2>
        <div className="relative z-0 w-full mb-5 group">
          <input ref={EmailRef}
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-1 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input ref={PasswordRef}
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
     
        <button onClick={(e)=>handleLogin(e)}
          type="submit"
         className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[95%] px-5 py-2.5  m-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <p className="text-sm  text-white dark:text-green-400 text-center font-bold">Click here to <Link className="text-blue-500" to={"/signup"}>Signup</Link></p>
      </form>
    </div>
  );
};

export default Login;
