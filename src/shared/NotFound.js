import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center ">
      <img
        className="w-12 h-12"
        src="https://cdn-icons-png.flaticon.com/512/2998/2998221.png"
        alt="error"
      />
      <p className="text-sm">404 | Not Found</p>
    </div>
  );
};

export default NotFound;
