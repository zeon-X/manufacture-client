import React from "react";
import Review from "../../components/Review/Review";

const HomeSection3 = () => {
  return (
    <div className="mb-24 w-full flex flex-col justify-center items-center">
      <div>
        <div className="border border-gray-200 my-6 p-3 flex justify-between items-center">
          <p className="font-bold">What Our Customers Say</p>
          <p className="font-bold">Review</p>
        </div>
        <div className="grid gap-10 justify-center items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
          <Review></Review>
          <Review></Review>
          <Review></Review>
          <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
