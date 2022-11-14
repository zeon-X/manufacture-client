import React from "react";
import { useQuery } from "react-query";
import Review from "../../components/Review/Review";
import ErrorPage from "../../shared/ErrorPage";
import Loading from "../../shared/Loading";
import axiosInstance from "../../utilities/axiosInstance/axiosInstance";

const HomeSection3 = () => {
  const {
    isLoading,
    isError,
    data: reviews,
    error,
  } = useQuery(["reviewhome"], async () => {
    let fdata = await axiosInstance.get("review/get?limit=4");
    return fdata.data;
  });

  if (isError) return <ErrorPage msg={error}></ErrorPage>;

  if (isLoading) return <Loading msg="Loading..."></Loading>;

  return (
    <div className="mb-24 w-full ">
      <div className="border border-gray-200 my-6 p-3 flex justify-between items-center">
        <p className="font-bold">What Our Customers Say</p>
        <div className="grid grid-cols-2 gap-1">
          <button className="btn btn-sm border border-gray-100 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="btn btn-sm  border border-gray-100 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid gap-6 justify-center items-center 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 ">
        {reviews.map((x, index) => {
          return <Review key={index} props={x}></Review>;
        })}
      </div>
    </div>
  );
};

export default HomeSection3;
