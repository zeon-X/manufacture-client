import React from "react";
import { useQuery } from "react-query";
import ProductCard1 from "../../components/ProductCard/ProductCard1";
import ErrorPage from "../../shared/ErrorPage";
import Loading from "../../shared/Loading";
import axiosInstance from "../../utilities/axiosInstance/axiosInstance";

const HomeSection2 = () => {
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery(["productsec2"], async () => {
    let fdata = await axiosInstance.get("product/get?limit=8");
    return fdata.data;
  });

  if (isError) return <ErrorPage msg={error}></ErrorPage>;

  if (isLoading) return <Loading msg="Loading..."></Loading>;

  return (
    <section className="w-full mb-16 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-10 sm:gap-4">
        {products.map((x, index) => {
          return <ProductCard1 key={index} props={x}></ProductCard1>;
        })}
      </div>

      {/* 2 card on same line */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-16">
        <div className="bg1 border border-gray-300 p-10">
          <div className="w-5/12">
            <p className="text-xl font-semibold">Tools Set Adjustable Wrench</p>
            <p className="my-1 text-3xl font-bold">
              <span className="text-lg font-bold">From : </span> $20.87
            </p>
            <p className="text-sm underline hover:cursor-pointer">Shop Now </p>
          </div>
        </div>
        <div className="bg2 border border-gray-300 p-10">
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
