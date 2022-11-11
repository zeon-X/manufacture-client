import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Drawer = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <Header></Header>
          <div className="relative">
            {/* <!-- Page content here --> */}
            {children}
            {/* <!-- Footer --> */}
            <Footer></Footer>
          </div>
        </div>

        {/* drawer for mobile */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
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
            <li>
              <NavLink to="/Login">LOGIN</NavLink>
            </li>
            <li>
              <NavLink to="/register">REGISTER</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">DASHBOARD</NavLink>
            </li>
            <li>
              <NavLink to="/register">LOGOUT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
