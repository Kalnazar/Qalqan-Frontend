import React from "react";
import { assets } from "../assets/assets";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between items-center">
      <div>
        <img
          onClick={() => {
            navigate("/");
          }}
          className="p-2 w-25 cursor-pointer"
          src={assets.logo}
          alt=""
        />
      </div>
      <ul className="text-white hidden md:flex item-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/encrypt">
          <li className="py-1">ENCRYPTION</li>
          <hr className="border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/decrypt">
          <li className="py-1">DECRYPTION</li>
          <hr className="border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contacts">
          <li className="py-1">CONTACTS</li>
          <hr className="border-none outline-none h-0.5 bg-white w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div>
        <div className="flex item-center gap-2 cursor-pointer group relative">
          <img
            className="w-8 rounded-full"
            src={assets.profile_pic}
            alt="Profile picture"
          />
          <img
            className="w-2.5"
            src={assets.dropdown_icon}
            alt="Dropdown icon"
          />
          <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
              <p
                onClick={() => navigate("/")}
                className="hover:text-black cursor-pointer"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate("/login")}
                className="hover:text-black cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
