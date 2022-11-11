import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard2 = ({ props }) => {
  const navigate = useNavigate();
  const {
    title,
    img,
    gallary_img,
    unit_price,
    description,
    specification,
    mcq,
    categories,
    stock,
    status,
  } = props;
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col justify-center items-center py-4 px-2 border border-gray-200">
      <div className="lg:w-6/12 md:w-6/12 sm:w-full flex justify-center items-center ">
        <img className="w-24 h-24" src={img} alt="product img" />
      </div>
      <div className="lg:w-6/12 md:w-6/12 sm:w-full text-sm flex flex-col justify-center lg:items-start md:items-start sm:items-center">
        <p className="font-semibold">{title}</p>
        <p>Price: ${unit_price}/Unit</p>
        <p>MCQ: {mcq}</p>
        <p>Available: {stock}</p>
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
        {/* btn grp */}
        <div className="gap-3 mt-3 flex flex-row">
          {/* wishlidt  */}
          <button className="btn btn-xs btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
          {/* purchase */}
          <button
            onClick={() => navigate("/purchase")}
            className="btn btn-xs btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
          {/* product details */}
          <button className="btn btn-xs btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
