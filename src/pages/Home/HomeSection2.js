import React from "react";
import ProductCard1 from "../../components/ProductCard/ProductCard1";

const HomeSection2 = () => {
  return (
    <section className="w-full mb-16">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-10 sm:gap-4">
        <ProductCard1></ProductCard1>
        <ProductCard1></ProductCard1>
        <ProductCard1></ProductCard1>
        <ProductCard1></ProductCard1>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mt-16">
        <div className="border border-gray-300 p-10">
          <div className="w-5/12">
            <p className="text-xl font-semibold">Tools Set Adjustable Wrench</p>
            <p className="my-1 text-3xl font-bold">
              <span className="text-lg font-bold">From : </span> $20.87
            </p>
            <p className="text-sm underline hover:cursor-pointer">Shop Now </p>
          </div>
        </div>
        <div className="border border-gray-300 p-10">
          <div className="w-5/12">
            <p className="text-xl font-semibold">Tools Set Adjustable Wrench</p>
            <p className="my-1 text-3xl font-bold">
              <span className="text-lg font-bold">From : </span> $20.87
            </p>
            <p className="text-sm underline hover:cursor-pointer">Shop Now </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
