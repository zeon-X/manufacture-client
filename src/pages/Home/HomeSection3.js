import React from "react";
import Review from "../../components/Review/Review";

const HomeSection3 = () => {
  return (
    <div className="mb-16 w-full flex flex-col justify-center items-center">
      <div>
        <p className="text-3xl font-bold text-center mb-6">
          What Our Customers Say About Us
        </p>
        <div className="grid gap-10 justify-center items-center lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ">
          <Review></Review>
          <Review></Review>
          <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
