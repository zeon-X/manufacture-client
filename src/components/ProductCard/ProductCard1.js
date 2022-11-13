import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard1 = ({ props }) => {
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
    _id,
  } = props;

  const handlePurchase = () => {
    navigate(`/purchase?_id=${_id}`);
  };

  // console.log(props);

  return (
    <div className="flex flex-col justify-center items-center  p-6 border border-gray-200">
      <img className="w-40 h-40" src={img} alt="product img" />
      <div className="rating rating-xs mt-6">
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
      <p className="my-2 text-sm text-center">{title.slice(0, 25)}..</p>
      <div className="flex lg:flex-row md:flex-row sm:flex-col  justify-center items-center">
        <p className="font-bold">${unit_price}/unit</p>
        <p className="text-xs ml-1">(MCQ: {mcq})</p>
      </div>

      <div className="lg:flex-row sm:flex-col justify-evenly gap-1 mt-4 flex">
        <button className="btn btn-xs btn-accent">
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <button onClick={handlePurchase} className="btn btn-xs btn-accent">
          Purchase
        </button>
        <button className="btn btn-xs btn-accent">
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
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <p className="mt-2 text-xs text-center">
        Available: <span className="font-bold">{stock}</span> pcs
      </p>
      <p className="my-1 text-xs text-center">{description.slice(0, 60)}..</p>
    </div>
  );
};

export default ProductCard1;
