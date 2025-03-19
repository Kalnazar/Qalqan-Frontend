import React from "react";
import Form from "../components/Form";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="hidden relative lg:flex flex-col items-center justify-center h-full w-1/2 bg-primary">
        <img className="w-60 h-60 animate-pulse" src={assets.logo} alt="" />
        {/* <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div> */}
      </div>

      <div className="absolute top-5 right-5 flex gap-2 text-white">
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="p-5 button-custom bg-primary"
        >
          Login 1
        </button>
        <button
          onClick={() => {
            navigate("/login2");
          }}
          className="p-5 button-custom bg-primary"
        >
          Login 2
        </button>
      </div>
    </div>
  );
};

export default Login;
