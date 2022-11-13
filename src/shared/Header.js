import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { auth } from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import "./Header.css";
import LogoutFunc from "../utilities/Functions/LogoutFunc";

const Header = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    LogoutFunc(auth);
    userInfo = {};
    Swal.fire({
      icon: "success",
      title: "You account has been logged out",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  // console.log(userInfo);
  return (
    <div className="w-full  text-sm  bg-white flex flex-col justify-center items-center">
      {/* Nvabar Top */}
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center w-full py-3 lg:px-20 sm:px-2">
        <div className="flex lg:justify-start sm:justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
            />
          </svg>
          Call Us: +8811223300
        </div>
        <div className="flex justify-between items-center border border-gray-400 bg-white max-w-xs mx-auto rounded-3xl p-0">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input  w-full rounded-3xl"
            />
          </div>
          <button className="btn btn-warning rounded-l-none rounded-r-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex lg:justify-end sm:justify-center items-center">
          <p className="text-sm ">Dhaka, Bangladesh (BDT)</p>
        </div>
      </div>

      {/* Navbar Main + sticky */}
      <div className="main_header sticky top-0 z-50 flex justify-evenly items-center navbar w-full border-b border-t border-gray-200 py-5  lg:px-20 sm:px-2">
        {/* menu btn sm */}
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        {/* logo */}
        <div className="navbar-start flex lg:justify-start md:justify-end sm:justify-end items-center px-2 mx-2">
          <img
            className="hover:cursor-pointer"
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
          />
        </div>
        {/* links */}
        <div className="navbar-center flex-none hidden lg:block mx-auto">
          <ul className="menu menu-horizontal justify-center items-center">
            {/* <!-- Navbar menu content here --> */}
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/shop">SHOP</NavLink>
            </li>
            <li>
              <NavLink to="/blog">BLOG</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT US</NavLink>
            </li>
          </ul>
        </div>

        {/* BTN */}
        <div className="navbar-end flex justify-end gap-0 ">
          {/* options btn | db |login |reg | my acc */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </label>
            {/* options.... */}
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow-2xl menu menu-compact dropdown-content bg-base-100  border border-gray-100 rounded-box w-52"
            >
              {!userInfo && (
                <li>
                  <a onClick={() => navigate("/login")}>Login</a>
                </li>
              )}
              {!userInfo && (
                <li>
                  <a onClick={() => navigate("/register")}>Register</a>
                </li>
              )}
              {userInfo && (
                <li>
                  <a
                    onClick={() => navigate("/dashboard")}
                    className="justify-between"
                  >
                    Dashboard
                    <span className="badge">{userInfo?.role}</span>
                  </a>
                </li>
              )}

              {userInfo && (
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              )}
            </ul>
          </div>
          {/* purchase */}
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={2} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={2}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow-2xl border border-gray-100"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View Purchase
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
