import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-black text-white p-2">
      <NavLink to="/" className=" normal-case text-xl">
        Home
      </NavLink>
      <NavLink to="/all" className=" normal-case text-xl ml-4">
        All Users
      </NavLink>
      <NavLink to="/add" className=" normal-case text-xl ml-4">
        Add Users
      </NavLink>
    </div>
  );
};

export default Navbar;
