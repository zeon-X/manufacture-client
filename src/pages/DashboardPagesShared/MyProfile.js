import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="py-6 px-10 w-full">
      <div className="flex justify-between">
        <p className="text-sm font-bold">Account Details</p>
        <button
          onClick={() => navigate("/dashboard/my-account-update")}
          className="btn btn-circle btn-sm btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
          </svg>
        </button>
      </div>
      <div className="text-sm grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mt-4">
        <div className="mt-4">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <p className="mt-4">Email: {userInfo?.email}</p>
          <p className="my-2">Name: {userInfo?.name}</p>
          <p>Phone: {userInfo?.phone} </p>
          <p className="my-2">UserId: {userInfo?.userId} </p>
          <p>
            Role: <span className="badge">{userInfo?.role}</span>
          </p>
          <p></p>
        </div>
        <div>
          <div>
            <p className=" text-xs font-bold mb-2">Education</p>
            <div className="p-3 text-xs border border-gray-300 border-dashed">
              {userInfo?.education?.map((x) => {
                return <p>{x}</p>;
              })}
            </div>
          </div>
          <div className="my-6">
            <p className=" text-xs font-bold mb-2">Loaction</p>
            <div className="p-3 text-xs  border border-gray-300 border-dashed">
              <p>{userInfo?.address}</p>
            </div>
          </div>
          <div>
            <p className=" text-xs font-bold mb-2">Social Links</p>
            <div className="p-3 text-xs border border-gray-300 border-dashed">
              {userInfo?.socialLinks?.map((x) => {
                return (
                  <div className="flex justify-between">
                    <p className="font-semibold">{x?.key}</p>
                    <a target="_blank" href={x?.value} className="underline">
                      view profile
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {userInfo?.role === "user" && (
            <div>
              <p className=" text-xs font-bold mb-2 mt-4">My Reviews</p>
              <div className="p-3 border border-gray-300 border-dashed">
                {userInfo?.review?.map((x) => {
                  return <p>{x}</p>;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
