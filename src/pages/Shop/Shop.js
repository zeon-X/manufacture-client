import React from "react";
import { useQuery } from "react-query";
import ProductCard1 from "../../components/ProductCard/ProductCard1";
import ErrorPage from "../../shared/ErrorPage";
import Loading from "../../shared/Loading";
import axiosInstance from "../../utilities/axiosInstance/axiosInstance";

const Shop = () => {
  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery(["shopproductsec2"], async () => {
    let fdata = await axiosInstance.get("product/get");
    return fdata.data;
  });

  if (isError) return <ErrorPage msg={error}></ErrorPage>;

  if (isLoading) return <Loading msg="Loading..."></Loading>;
  return (
    <div className="w-full mb-16 flex flex-col justify-center items-center lg:px-20 py-16 sm:px-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-10 sm:gap-4">
        {products.map((x, index) => {
          return <ProductCard1 key={index} props={x}></ProductCard1>;
        })}
      </div>
    </div>
  );
};

export default Shop;
