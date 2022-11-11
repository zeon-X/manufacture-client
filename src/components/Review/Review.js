import React from "react";

const Review = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-80 bg-base-100 shadow-xl rounded-none text-sm border border-gray-200 border-dashed">
        <div className="avatar mt-6 ml-6">
          <div className="w-24 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png" />
          </div>
        </div>
        <div className="card-body">
          {/* name + Tick */}
          <div className="flex justify-between items-center">
            <p className="card-title">MR. Elon Musk</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Position + Rating */}
          <div className="flex justify-between items-center">
            <p>CEO Alfa Farma Ltd.</p>
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          {/* divider  */}
          <div className="flex justify-between items-center my-6">
            <div className="text-3xl">
              <img
                className="w-4 h-4 mr-3"
                src="https://cdn-icons-png.flaticon.com/512/32/32371.png"
                alt=""
              />
            </div>

            <div className="border-b border-1.5 border-dashed border-gray-200 w-11/12"></div>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
