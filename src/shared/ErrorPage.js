import React from "react";

const ErrorPage = ({ msg }) => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center ">
      <img
        className="w-12 h-12"
        src="https://cdn-icons-png.flaticon.com/512/2581/2581801.png"
        alt="error"
      />
      <p className="text-sm">{msg}</p>
    </div>
  );
};

export default ErrorPage;
