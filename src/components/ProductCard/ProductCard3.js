import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard3 = ({ props }) => {
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
  const handlePurchase = () => {
    localStorage.setItem("purchase", JSON.stringify(props));
    navigate("/purchase");
  };
  return (
    <div className=" flex lg:flex-row md:flex-row sm:flex-col justify-center items-center py-4 px-2 rounded-lg border border-gray-200">
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
    </div>
  );
};

export default ProductCard3;
