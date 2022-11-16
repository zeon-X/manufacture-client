import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorPage from "../../shared/ErrorPage";
import Loading from "../../shared/Loading";
import axiosInstance from "../../utilities/axiosInstance/axiosInstance";
import ProductCard2 from "../ProductCard/ProductCard2";
import ProductCard3 from "../ProductCard/ProductCard3";
import Swal from "sweetalert2";

const ProductDetails1 = () => {
  const navigate = useNavigate();
  // const product = JSON.parse(localStorage.getItem("purchase"));
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
  }, []);
  const [q, setQ] = useState(0);
  const [st, setST] = useState(0);
  const [gt, setGT] = useState(0);
  const [dc, setDC] = useState(0);
  const [_id, setId] = useState("");

  const location = useLocation();
  useEffect(() => {
    setId(location?.search?.split("=")[1]);
  }, [location]);

  const [imgDis, setImgDis] = useState("");
  const handleDisImg = (img) => {
    setImgDis(img);
  };

  const {
    isLoading1,
    isError1,
    data: product,
    error1,
  } = useQuery(["productdetails", _id], async () => {
    console.log(_id);
    let fdata = await axiosInstance.get(
      `product/find?_id=${location.search.split("=")[1]}`
    );
    setImgDis(fdata?.data?.img);
    let returndata = fdata?.data;
    let gImg = returndata.gallary_img;
    gImg = [returndata.img, ...gImg];
    returndata.gallary_img = gImg;
    return returndata;
  });

  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    userInfo?.name
      ? (data.buyer_name = userInfo?.name)
      : (data.buyer_name = "");
    userInfo?.phone ? (data.phone = userInfo?.phone) : (data.phone = "");
    userInfo?.email ? (data.email = userInfo?.email) : (data.email = "");
    data.userId = userInfo?._id;
    data.productId = product?._id;
    data.amount = product?.unit_price * data.quantity;

    Swal.fire({
      title: "Place an order?",
      text: "You will be ordering this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes! Place Order",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axiosInstance.post("order/create", data).then((res) => {
          // console.log(res.data);
          setLoading(false);
          if (res.status === 201) {
            Swal.fire(
              "Order Placed!",
              "To confirm order please make payment",
              "success"
            ).then(() => {
              navigate("/dashboard/my-orders");
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: res.response.data.message || res.response.data,
            });
          }
        });
        // setLoading(false);
      }
    });

    // console.log(data);
  };

  const {
    isLoading,
    isError,
    data: products,
    error,
  } = useQuery(["productpd1"], async () => {
    let fdata = await axiosInstance.get("product/get?limit=4");
    return fdata.data;
  });

  if (isError || isError1) return <ErrorPage msg={error || error1}></ErrorPage>;

  if (isLoading || isLoading1) return <Loading msg="Loading..."></Loading>;
  if (loading) return Swal.showLoading();

  return (
    <div className="w-full lg:px-20 sm:px-4 my-20">
      {/* starting part */}
      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-start gap-10">
        {/* image part */}
        <div className="lg:w-5/12 md:w-5/12 sm:w-full flex flex-col gap-6 justify-centers items-center">
          <img className="w-auto  border border-gray-300" src={imgDis} alt="" />
          <div className="grid grid-cols-4 gap-2 ">
            {product?.gallary_img?.map((x, index) => {
              return (
                <button onClick={() => handleDisImg(x)} key={index}>
                  <img className="border border-gray-300" src={x} alt="" />
                </button>
              );
            })}
          </div>
        </div>
        {/* des part */}
        <div className="lg:w-7/12 md:w-7/12 sm:w-full">
          <p className="text-2xl font-bold">{product?.title}</p>
          {/* rating */}
          <div className="flex justify-start items-center my-1">
            <div className="rating rating-xs ">
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
            <p className="text-sm ml-4">No Reviews</p>
          </div>
          <p className="mt-4 text-lg font-bold">
            Price: ${product?.unit_price}/unit.
            <span className="text-xs font-normal">( MCQ: {product?.mcq} )</span>
          </p>
          <p className="text-sm font-normal mb-4">
            Available: {product?.stock} unit
          </p>
          <p className="my-4 text-sm ">
            SKU:
            <br /> {product?.description}
          </p>
          <div className="flex justify-start items-center gap-5 mt-14">
            {/* <input
              type="text"
              placeholder="Quantity"
              className="input input-bordered input-primary w-24 max-w-xs rounded-none input-sm"
            /> */}
            <label
              htmlFor="my-modal-5"
              className="btn btn-sm btn-warning rounded-none text-white"
            >
              Purchase
            </label>
            <button className="btn btn-sm btn-warning rounded-none text-white">
              Add To Wishlish
            </button>
          </div>
        </div>
      </div>

      {/* MODALLLLLLLLLLL */}
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-5 top-5"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-center">
            Fill to purchase The product
          </h3>

          <p className="p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="underline text-gray-500 text-sm font-bold">
                Buyer Information
              </p>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                {/* name */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text  text-xs">Your Name?</span>
                  </label>
                  <input
                    {...register("buyer_name", {
                      required: userInfo?.name ? false : true,
                    })}
                    type="text"
                    disabled={userInfo?.name ? true : false}
                    value={userInfo?.name}
                    placeholder="Type here"
                    className="input input-bordered  text-xs w-full max-w-xs "
                  />
                  <label className="label">
                    {errors.name && (
                      <span className="label-text-alt text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </label>
                </div>
                {/* phone */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text  text-xs">Phone Number</span>
                  </label>
                  <input
                    {...register("phone", {
                      required: userInfo?.phone ? false : true,
                    })}
                    type="text"
                    disabled={userInfo?.phone ? true : false}
                    value={userInfo?.phone}
                    placeholder="Type here"
                    className="input input-bordered  text-xs w-full max-w-xs "
                  />
                  <label className="label">
                    {errors.phone && (
                      <span className="label-text-alt text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </label>
                </div>
                {/* email  */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text  text-xs">Your Email?</span>
                  </label>
                  <input
                    {...register("email", {
                      required: userInfo?.email ? false : true,
                    })}
                    type="email"
                    value={userInfo?.email}
                    disabled={userInfo?.email ? true : false}
                    placeholder="Type here"
                    className="input input-bordered  text-xs w-full max-w-xs "
                  />
                  <label className="label">
                    {errors.email && (
                      <span className="label-text-alt text-sm text-red-500">
                        This field is required
                      </span>
                    )}
                  </label>
                </div>
              </div>

              {/* address  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-xs">Your Address</span>
                </label>
                <textarea
                  {...register("address", {
                    required: true,
                  })}
                  className="textarea textarea-bordered h-24 text-xs"
                  placeholder="Type Here"
                ></textarea>
                <label className="label">
                  {errors.address && (
                    <span className="label-text-alt text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </label>
              </div>

              <p className="underline text-gray-500 text-sm font-bold mt-6">
                Product Information
              </p>

              <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-between items-center gap-10 mt-10 ">
                {/* product info */}
                <ProductCard3 props={product ? product : {}}></ProductCard3>
                {/* Quantity Calculating  */}
                <div className="h-full flex flex-col justify-center items-center ">
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text  text-xs">
                        Purchase Quantity
                      </span>
                    </label>
                    <input
                      {...register("quantity", {
                        required: true,
                        min: product?.mcq,
                        max: product?.stock,
                      })}
                      onChange={(event) => {
                        event.preventDefault();
                        setQ(event.target.value);
                      }}
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered text-xs w-full max-w-xs "
                    />
                    <label className="label">
                      {errors.quantity && (
                        <span className="label-text-alt text-sm text-red-500">
                          Quantity is required. Put a value between{" "}
                          {product?.mcq} and {product?.stock}.
                        </span>
                      )}
                    </label>
                  </div>
                  {/* <button
                    onClick={() => {
                      setST(q * product?.unit_price);
                      setGT(q * product?.unit_price + dc);
                    }}
                    className="btn btn-outline  w-full max-w-xs "
                  >
                    Calculate Cost
                  </button> */}
                </div>
                {/* price  calcu*/}
                <div className=" text-gray-700 border border-gray-300 p-6 px-10 h-full rounded-lg">
                  <p className="text-lg font-bold underline">Purchase Totals</p>
                  <div className="text-xs flex justify-between items-center mt-2">
                    <p>SUBTOTAL:</p>
                    <p className="text-warning">${q * product?.unit_price}</p>
                  </div>
                  <div className="text-xs flex justify-between items-center">
                    <p>Delivery Cost:</p>
                    <p className="text-warning">${dc}</p>
                  </div>
                  <div className="text-xs font-semibold flex justify-between items-center  mt-2">
                    <p>GRAND TOTAL:</p>
                    <p className="text-warning">${q * product?.unit_price}</p>
                  </div>
                </div>
              </div>
              {/* modal closing btn */}
              <div className="modal-action justify-center mt-10 mb-8">
                <label
                  htmlFor="my-modal-5"
                  className="btn bg-red-600 border-none"
                >
                  Close
                </label>
                <input
                  type="submit"
                  value="Place Order"
                  className="btn btn-success"
                ></input>
              </div>
            </form>
          </p>
        </div>
      </div>
      {/* MODALLLLLLLLLLL */}

      {/* eending part */}
      <div className="mt-10  ">
        <table className="border-collapse border border-slate-500 w-full text-sm ">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2 w-4/12">
                Specification
              </th>
              <th className="border border-gray-200 p-2 w-8/12">Details</th>
            </tr>
          </thead>
          <tbody>
            {product?.specification.map((x, index) => {
              return (
                <tr key={index}>
                  <td className="border border-gray-200 p-4">{x?.key}</td>
                  <td className="border border-gray-200 p-4">{x?.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* related products */}
      <div className="mt-16">
        <div className="border border-gray-200 my-6 p-3 flex justify-between items-center">
          <p className="font-bold">Related Products</p>
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

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {products.map((x, index) => {
            return <ProductCard2 key={index} props={x}></ProductCard2>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails1;
