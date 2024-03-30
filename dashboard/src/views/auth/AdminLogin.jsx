import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle, FcPrivacy } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import {
  admin_login,
  clearMessage,
  getAuthData,
} from "../../store/Reducers/authReducer";

const AdminLogin = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, successMessage, errorMessage } = useSelector(getAuthData);

  const inputHandle = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(admin_login(input));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      navigate("/");
      dispatch(clearMessage());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
    }
  }, [successMessage, errorMessage, dispatch, navigate]);

  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-blue-500 to-emerald-400 flex items-center justify-center">
      <div className=" w-11/12 sm:w-9/12 md:w-7/12 lg:w-4/12 px-5 py-8 bg-white rounded-md">
        <div className=" bg-gray-100 w-fit mx-auto py-2 px-8 hover:bg-slate-200 hover:rounded-2xl cursor-pointer duration-500 rounded-md flex flex-col items-center justify-center gap-2">
          <FcPrivacy size={40} />{" "}
          <span className="text-gray-600 text-lg font-bold">Admin</span>
        </div>

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
            disabled={loader}
            className="text-white bg-gradient-to-bl from-blue-400 via-blue-500 to-emerald-400 p-2 font-semibold w-full rounded-md"
          >
            {loader ? <PulseLoader color="white" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
