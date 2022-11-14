import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { auth } from "../firebase.init";
import Swal from "sweetalert2";
import "./Header.css";
import LogoutFunc from "../utilities/Functions/LogoutFunc";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";

const Header = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [user, loading, error] = useAuthState(auth);
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
  // console.log(user);
  // console.log(userInfo);
  if (loading) return <Loading msg={"loading..."}></Loading>;
  return (
    <div className="w-full main_header shadow-lg relative text-sm bg-white z-50 flex flex-col justify-center items-center">
      {/* Navbar Main + sticky */}
      <div className=" bg-white z-50 flex justify-evenly items-center navbar w-full border-b border-t border-gray-200 py-5  lg:px-20 sm:px-2">
        {/* menu btn sm */}
        <div className="flex-none lg:hidden">
          <label htmlFor="normalmenusm" className="btn btn-square btn-ghost">
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
          <label
            htmlFor="dashboardnavigationlinks"
            className="btn btn-circle btn-warning btn-sm drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </label>
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
              {!userInfo && !user && (
                <li>
                  <a onClick={() => navigate("/login")}>Login</a>
                </li>
              )}
              {!userInfo && !user && (
                <li>
                  <a onClick={() => navigate("/register")}>Register</a>
                </li>
              )}
              {user && userInfo && (
                <li>
                  <a
                    onClick={() => navigate("/dashboard")}
                    className="justify-between"
                  >
                    Dashboard
                    <span className="badge">{user && userInfo?.role}</span>
                  </a>
                </li>
              )}

              {user && userInfo && (
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              )}
              {user && !userInfo && (
                <li>
                  <a onClick={logout}>Error Logout</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
