import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const inputHandle = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-blue-500 to-emerald-400 flex items-center justify-center">
      <div className=" w-11/12 sm:w-9/12 md:w-7/12 lg:w-4/12 px-5 py-8 bg-white rounded-md">
        <p className="text-2xl font-bold text-gray-800 ">Login your account</p>
        <p className="text-sm font-semibold text-gray-500 ">
          A Muiltivendor Ecommerce
        </p>

        <form onSubmit={submitHandle}>
          {/* <-----------Single field-----------> */}
          <div className="py-2 space-y-1">
            <label
              htmlFor="email"
              className="block text-gray-600 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              value={input.email}
              onChange={inputHandle}
              name="email"
              id="email"
              placeholder="Type your email"
              required
              className="border outline-none focus:bg-blue-50  border-x-2  focus:border-x-blue-500     ease-linear  duration-200 rounded-md w-full p-2 text-gray-700"
            />
          </div>
          {/* <-----------Single field-----------> */}
          <div className="py-2 space-y-1">
            <label
              htmlFor="password"
              className="block text-gray-600 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              value={input.password}
              onChange={inputHandle}
              name="password"
              id="password"
              placeholder="Type your passowd"
              required
              className="border outline-none focus:bg-blue-50  border-x-2  focus:border-x-blue-500     ease-linear  duration-200 rounded-md w-full p-2 text-gray-700"
            />
          </div>

          {/* <-----------------sign up button --------------> */}
          <button
            type="submit"
            className="text-white bg-gradient-to-bl from-blue-400 via-blue-500 to-emerald-400 p-2 font-semibold w-full rounded-md"
          >
            Sign In
          </button>
          <Link
            className="font-semibold text-blue-400 my-2 block"
            to="/register"
          >
            create an account ?
          </Link>
          <button className="w-full text-gray-700 font-semibold flex  gap-4 bg-gray-100 p-2 rounded-md hover:bg-gray-200 duration-300 cursor-pointer   items-center   ">
            {" "}
            <FcGoogle className=" text-2xl " />
            with Google
          </button>
          <button className="w-full mt-4 text-gray-700 font-semibold flex   gap-4 bg-gray-100 p-2 rounded-md hover:bg-gray-200 duration-300 cursor-pointer  items-center   ">
            {" "}
            <FaFacebook className=" text-2xl text-blue-600 " />
            with Facebook
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
