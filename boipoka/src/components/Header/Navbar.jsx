import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "w-25 text-center font-medium text-green-500 text-lg border-2 p-2 m-2 rounded-lg border-green-500 active:border-green-500"
            : "w-25 text-center text-gray-600 text-lg border-2 p-2 m-2 rounded-lg border-transparent hover:border-green-500 active:border-green-500"
        }
      >
        <li>Home</li>
      </NavLink>

      <NavLink
        to="/readList"
        className={({ isActive }) =>
          isActive
            ? "w-25 text-center font-medium text-green-500 text-lg border-2 p-2 m-2 rounded-lg border-green-500 active:border-green-500"
            : "w-25 text-center text-gray-600 text-xl border-2 p-2 m-2 rounded-lg border-transparent hover:border-green-500 active:border-green-500"
        }
      >
        <li>ReadList</li>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "w-25 text-center font-medium text-green-500 text-lg border-2 p-2 m-2 rounded-lg border-green-500 active:border-green-500"
            : "w-25 text-center text-gray-600 text-xl border-2 p-2 m-2 rounded-lg border-transparent hover:border-green-500 active:border-green-500"
        }
      >
        <li>About</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar mb-5 h-25">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn hover:bg-green-400 border-0 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-green-400"
          >
            {links}
          </ul>
        </div>
        <a className="rounded-lg text-2xl text-black font-bold">Boipoka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        <a className="btn bg-green-500 border-0">Register</a>
        <a className="btn bg-sky-500 border-0">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
