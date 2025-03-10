import React from "react";
import { assets } from "../assets/assets";

const Login2 = () => {
  return (
    <div className="w-full h-screen bg-custom flex justify-center items-end pb-4">
      <div className="relative bg-[#6A78E2] px-10 pb-10 pt-20 rounded-3xl">
        <img
          className="absolute right-1/3 -top-25 w-40"
          src={assets.logo}
          alt=""
        />
        <h1 className="text-white text-5xl font-semibold">Welcome to QALQAN</h1>
        <div className="mt-8">
          <div>
            <label className="text-white text-lg font-medium">Email</label>
            <input
              className="bg-white w-full rounded-xl p-4 mt-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-2">
            <label className="text-white text-lg font-medium">Password</label>
            <input
              className="bg-white w-full rounded-xl p-4 mt-2"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="flex mt-8 justify-between items-center">
          <div className="flex gap-2 items-center">
            <input className="accent-secondary" type="checkbox" id="accept" />
            <label className="text-white font-medium text-base" for="accept">
              Accept Terms and Conditions
            </label>
          </div>
          <button className="font-medium text-base text-secondary">
            Forgot password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <button className="bg-button text-white text-lg font-bold button-custom">
            Sign in
          </button>
          <button className="bg-white flex items-center justify-center gap-2 button-custom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center gap-2">
          <p className="font-medium text-base text-white">
            Don't have an account?
          </p>
          <button className="text-secondary text-base underline">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login2;
