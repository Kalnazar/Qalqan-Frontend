import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="px-4 sm:px-[10%] w-full h-screen bg-custom">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
