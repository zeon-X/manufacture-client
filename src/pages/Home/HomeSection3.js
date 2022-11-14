import React from "react";
import Review from "../../components/Review/Review";

const HomeSection3 = () => {
  return (
    <div className="mb-24 w-full ">
      {/* <div className="border border-gray-200 my-6 p-3 flex justify-between items-center"> */}
      <p className="font-bold border border-gray-200 my-6 p-3 ">
        What Our Customers Say
      </p>
      {/* <p className="font-bold">Review</p>
      </div> */}
      <div className="grid gap-6 justify-center items-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 ">
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </div>
    </div>
  );
};

export default HomeSection3;
