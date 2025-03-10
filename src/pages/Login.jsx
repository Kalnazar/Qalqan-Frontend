import React from "react";
import Form from "../components/Form";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="hidden relative lg:flex flex-col items-center justify-center h-full w-1/2 bg-primary">
        <img className="w-60 h-60 spin-custom" src={assets.logo} alt=""/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  );
};

export default Login;
