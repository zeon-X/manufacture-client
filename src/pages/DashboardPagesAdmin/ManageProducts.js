import React, { useState } from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import ErrorPage from "../../shared/ErrorPage";
import Loading from "../../shared/Loading";
import axiosInstance from "../../utilities/axiosInstance/axiosInstance";

const ManageProducts = () => {
  const [changes, increaseChanges] = useState(0);
  const {
    isLoading,
    isError,
    data: product,
    error,
  } = useQuery(["products", changes], async ({ changes }) => {
    console.log(changes);
    return await axiosInstance.get("product/get");
  });

  if (isError) return <ErrorPage msg={error}></ErrorPage>;

  const handleDeleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`product/delete?_id=${_id}`).then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            ).then(() => {
              increaseChanges(changes + 1);
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: res.response.data.message || res.response.data,
            });
          }
        });
      }
    });
  };

  if (isLoading) return <Loading msg="Loading..."></Loading>;

  return (
    <div className="py-6 lg:px-10 md:px-10 sm:px-2  w-full">
      <p className="text-sm font-semibold ">Manage Products</p>
      {/* purchase products */}
      <div className="overflow-auto   rounded mt-4">
        <table className="border-collaspe text-xs border border-gray-300 w-full ">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300 ">Image</th>
              <th className="p-2 border border-gray-300 ">Title</th>
              <th className="p-2 border border-gray-300 ">Unit price</th>
              <th className="p-2 border border-gray-300 ">MCQ</th>
              <th className="p-2 border border-gray-300 ">stock</th>
              <th className="p-2 border border-gray-300 ">product _id</th>
              <th className="p-2 border border-gray-300 ">Details</th>
              <th className="p-2 border border-gray-300 ">Update</th>
              <th className="p-2 border border-gray-300 ">Delete</th>
            </tr>
          </thead>
          <tbody>
            {product?.data?.map((x, index) => {
              return (
                <tr key={index}>
                  {/* product discription */}
                  <td align="center" className="p-2 border border-gray-300">
                    <img className=" w-16 h-16" src={x?.img} alt="" />
                  </td>
                  <td className="p-2 border border-gray-300 ">{x?.title}</td>
                  <td align="center" className="p-2 border border-gray-300">
                    {x?.unit_price}
                  </td>
                  <td align="center" className="p-2 border border-gray-300">
                    {x?.mcq}
                  </td>
                  <td align="center" className="p-2 border border-gray-300">
                    {x?.stock}
                  </td>
                  <td align="center" className="p-2 border border-gray-300">
                    {x?._id}
                  </td>
                  {/* BTNS FROM HERE */}
                  {/* details */}
                  <td
                    align="center"
                    className="hover:cursor-pointer p-2 border bg-success border-gray-300 mx-auto content-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="white"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </td>
                  {/* update */}
                  <td
                    align="center"
                    className="hover:cursor-pointer p-2 border bg-warning border-gray-300 mx-auto content-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="white"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </td>
                  {/* delete */}
                  <td
                    onClick={() => handleDeleteProduct(x?._id)}
                    align="center"
                    className="hover:cursor-pointer p-2 border bg-red-500 border-gray-300 mx-auto content-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3.5}
                      stroke="white"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
