import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductCard2 from "../ProductCard/ProductCard2";
import ProductCard3 from "../ProductCard/ProductCard3";

const ProductDetails1 = () => {
  const navigate = useNavigate();
  const product = JSON.parse(localStorage.getItem("purchase"));
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
  }, []);
  const [q, setQ] = useState(0);
  const [st, setST] = useState(0);
  const [gt, setGT] = useState(0);
  const [dc, setDC] = useState(100);

  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    userInfo?.name ? (data.name = userInfo?.name) : (data.name = "");
    userInfo?.phone ? (data.phone = userInfo?.phone) : (data.phone = "");
    userInfo?.email ? (data.email = userInfo?.email) : (data.email = "");
    console.log(data);
  };

  let products = [
    {
      img: "https://m.media-amazon.com/images/I/71qG13eFwtL.jpg",
      title: "Las Hot Palabras",
      gallary_img: [],
      unit_price: 1900,
      description:
        "Wholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W charger for Iphone 11 12",
      specification: [{ key: "", value: "" }],
      mcq: 100,
      stock: 1000,
    },
    {
      img: "https://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Electrical-Tester-Screwdriver-PNG-Transparent-Image.png",
      title: "Tester Las Hot Palabras",
      gallary_img: [],
      unit_price: 10,
      description:
        "Wholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W ch",
      specification: [{ key: "", value: "" }],
      mcq: 1000,
      stock: 400000,
    },
    {
      img: "https://www.kleintools.com/sites/all/product_assets/hires/klein/et100_photo.jpg",
      title: "Multimeter Las Hot Palabras",
      gallary_img: [],
      unit_price: 300,
      description:
        "Wholesale mobildapter fast USB charger Type C 18W PD 20W ch",
      specification: [{ key: "", value: "" }],
      mcq: 500,
      stock: 10000,
    },
    {
      img: "https://www.kindpng.com/picc/m/181-1811383_framing-hammer-png-download-transparent-background-hammer-png.png",
      title: "Hammer Las Hot Palabras",
      gallary_img: [],
      unit_price: 50,
      description:
        "Wholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W chWholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W ch",
      specification: [{ key: "", value: "" }],
      mcq: 1000,
      stock: 1000,
    },
  ];

  // const product = {
  //   img: "https://cdn.shopify.com/s/files/1/0111/9115/6794/products/1_d38c37e9-3340-4e8d-99ff-72576024cec5.jpg?v=1529643138",
  //   gallary_img: ["", ""],
  //   title: "Simple Product View",
  //   unit_price: 10,
  //   description:
  //     "Wholesale mobile phone charger dual power adapter fast USB charger Type C 18W PD 20W charger for Iphone 11 12",
  //   stock: 100000,
  //   specification: [
  //     {
  //       key: "Description",
  //       value:
  //         "Lorem Ipsum es simplemente el texto de relleno dleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el freno",
  //     },
  //     {
  //       key: "Shipping Policy",
  //       value:
  //         "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el frenoLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Mañana, a partir de los botones de opción, sino un poco de dolor. Escribir en el freno",
  //     },
  //   ],
  //   mcq: 1100,
  // };

  return (
    <div className="w-full lg:px-20 sm:px-4 my-20">
      {/* starting part */}
      <div className="flex lg:flex-row md:flex-row sm:flex-col justify-start gap-10">
        {/* image part */}
        <div className="lg:w-5/12 md:w-5/12 sm:w-full flex flex-col gap-6 justify-centers items-center">
          <img
            className="w-auto  border border-gray-300"
            src={product.img}
            alt=""
          />
          <div className="grid grid-cols-4 gap-2 ">
            {product?.gallary_img.map((x) => {
              return (
                <button key={x}>
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
                checked
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
                    {...register("name", {
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
                <ProductCard3 props={product}></ProductCard3>
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
                      })}
                      onChange={(event) => {
                        setQ(event.target.value);
                      }}
                      type="number"
                      placeholder="Type here"
                      className="input input-bordered  text-xs w-full max-w-xs "
                    />
                    <label className="label">
                      {errors.quantity && (
                        <span className="label-text-alt text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </label>
                  </div>
                  <button
                    onClick={() => {
                      setST(q * product?.unit_price);
                      setGT(q * product?.unit_price + dc);
                    }}
                    className="btn btn-outline  w-full max-w-xs "
                  >
                    Calculate Cost
                  </button>
                </div>
                {/* price  calcu*/}
                <div className=" text-gray-700 border border-gray-300 p-6 px-10 h-full rounded-lg">
                  <p className="text-lg font-bold underline">Purchase Totals</p>
                  <div className="text-xs flex justify-between items-center mt-2">
                    <p>SUBTOTAL:</p>
                    <p className="text-warning">${st}</p>
                  </div>
                  <div className="text-xs flex justify-between items-center">
                    <p>Delivery Cost:</p>
                    <p className="text-warning">${dc}</p>
                  </div>
                  <div className="text-xs font-semibold flex justify-between items-center  mt-2">
                    <p>GRAND TOTAL:</p>
                    <p className="text-warning">${gt}</p>
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
            {product?.specification.map((x) => {
              return (
                <tr>
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
          {products.map((x) => {
            return <ProductCard2 key={x.img} props={x}></ProductCard2>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails1;
