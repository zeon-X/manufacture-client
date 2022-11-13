import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const DashboardDrawer = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      {/* <!-- Navbar --> */}
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>

          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gray-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            {userInfo && (
              <li>
                <NavLink to="my-account">My Account</NavLink>
              </li>
            )}
            {/* user links */}
            {/* {userInfo.role === "user" && (
              <li>
                <NavLink to="my-wishlist">My Wishlist</NavLink>
              </li>
            )} */}
            {userInfo.role === "user" && (
              <li>
                <NavLink to="my-orders">My Orders</NavLink>
              </li>
            )}
            {userInfo && userInfo?.role === "user" && (
              <li>
                <NavLink to="my-reviews">Add Reviews</NavLink>
              </li>
            )}

            {/* admin links */}
            {userInfo && userInfo?.role === "admin" && (
              <li>
                <NavLink to="manage-orders">Manage All Orders</NavLink>
              </li>
            )}
            {userInfo && userInfo?.role === "admin" && (
              <li>
                <NavLink to="manage-add-product">Add A Product</NavLink>
              </li>
            )}
            {userInfo && userInfo?.role === "admin" && (
              <li>
                <NavLink to="manage-products">Manage Products</NavLink>
              </li>
            )}
            {userInfo && userInfo?.role === "admin" && (
              <li>
                <NavLink to="manage-admin">Make Admin</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* <!-- Footer --> */}
      <Footer></Footer>
    </>
  );
};

export default DashboardDrawer;
