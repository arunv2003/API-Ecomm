import { Password } from "@mui/icons-material";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  let email=useRef();
  let Password=useRef();
  let CurrentPassword=useRef();
  let Name=useRef();
  let LastName=useRef();
  let PhoneNumber=useRef();


  let arr= JSON.parse(localStorage.getItem('usersData'))||[]
  let navigate=useNavigate()
  console.log(arr)
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj={
      email:email.current.value,
      Password:Password.current.value,
      CurrentPassword:CurrentPassword.current.value,
      Name:Name.current.value,
      LastName:LastName.current.value,
      PhoneNumber:PhoneNumber.current.value,
    }
    // console.log(obj);
    let existingUser=arr.find((item)=>item.email===obj.email)
    if(existingUser){
      toast.error("User already exist",{position:"top-center",theme:"dark"})
      // console.log(arr)
    }
    else{
      arr.push(obj)
      toast.success("User Signup successfully",{position:"top-center",theme:"dark"})
      // console.log(arr)
      localStorage.setItem("usersData",JSON.stringify(arr))
      navigate('/login')
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // let obj={
  //   //   email:e.target.value,
  //   //   Password:e.target.value,
  //   //   // currentPassword:e.target.currentPassword.value,
  //   //   // Name:e.target.Name.value,
  //   //   // PhoneNumber:e.target.PhoneNumber.value,
  //   // }
  //   // console.log(obj);
  //   console.log(e);
  //   // console.log(e.target.value);
  // };



  return (
    <div className="mt-10 pt-10">
      <form className="max-w-md mx-auto bg-gray-700 pt-3 pb-2 pl-3 " onSubmit={(e)=>handleSubmit(e)}>
        <h2 className="text-red-500 size-2xl mb-4">Sign UP</h2>
        <div className="relative z-0 w-full mb-5 group mt-3">
          <input
            ref={email}
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-1 mt-3 px-2  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
          />
          <label
            htmlFor="floating_email"
             className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group ">
          <input
          ref={Password}
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-3 mt-3 px-2  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
        <div className="relative z-0 w-full mb-5 group">
          <input
          ref={CurrentPassword}
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-3 mt-3 px-2  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
            ref={Name}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-1 mt-3 px-2  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
            ref={LastName}
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-1 mt-3 px-2  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
            ref={PhoneNumber}
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-1 mt-3 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          
        </div>
        <button
          type="submit"
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[95%] px-5 py-2.5  m-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <p className="text-sm  mt-2 text-white dark:text-green-400 text-center font-bold">Click here to <Link className="text-blue-600 " to={"/login"}> Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
