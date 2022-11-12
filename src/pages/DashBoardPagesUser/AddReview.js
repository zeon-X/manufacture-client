import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  return (
    <div className="py-6 px-10 w-full">
      <p className="text-sm font-bold">Add a Review</p>

      <div className="text-sm grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mt-4"></div>
    </div>
  );
};

export default AddReview;
